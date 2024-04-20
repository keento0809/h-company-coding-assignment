import { type NextRequest, NextResponse } from "next/server";
import { readTodos, writeTodos } from "@/app/utils";
import { Todo } from "@/app/context/todoContext";

export async function GET(req: NextRequest) {
  if (req.method === "GET") {
    const todos = readTodos();
    return NextResponse.json(todos, { status: 200 });
  } else {
    return NextResponse.json(`Method ${req.method} Not Allowed`, {
      status: 405,
    });
  }
}

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    try {
      const newTodo = (await req.json()) as Todo;
      const todos = readTodos();

      if (!todos) return NextResponse.json("Todo not found", { status: 404 });

      todos.push(newTodo);
      writeTodos(todos);
      return NextResponse.json(newTodo, { status: 201 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  } else {
    return NextResponse.json(`Method ${req.method} Not Allowed`, {
      status: 405,
    });
  }
}

export async function PUT(req: NextRequest) {
  if (req.method === "PUT") {
    try {
      const todos = readTodos();
      const updatingTodo = (await req.json()) as Todo;

      if (!updatingTodo || !todos) {
        return NextResponse.json("Todo not found", { status: 404 });
      }

      const updatedTodos = todos.map((todo) =>
        todo.id === updatingTodo.id ? updatingTodo : todo
      );
      writeTodos(updatedTodos);

      return NextResponse.json(updatingTodo, { status: 200 });
    } catch (error) {
      console.error(error);
      return NextResponse.json(error, { status: 500 });
    }
  } else {
    return NextResponse.json(`Method ${req.method} Not Allowed`, {
      status: 405,
    });
  }
}

export async function DELETE(req: NextRequest) {
  if (req.method === "DELETE") {
    const id = (await req.json()) as string;
    const todos = readTodos();

    if (!todos) {
      return NextResponse.json("Todo not found", { status: 404 });
    }

    const updatedTodos = todos.filter((t: Todo) => t.id !== id);
    writeTodos(updatedTodos);

    return NextResponse.json("Todo successfully deleted.", { status: 204 });
  } else {
    return NextResponse.json(`Method ${req.method} Not Allowed`, {
      status: 405,
    });
  }
}
