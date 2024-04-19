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
    const newTodo = (await req.json()) as Todo;

    const todos = readTodos();
    if (todos) {
      todos.push(newTodo);
      writeTodos(todos);
      return NextResponse.json(newTodo, { status: 201 });
    }
  } else {
    return NextResponse.json(`Method ${req.method} Not Allowed`, {
      status: 405,
    });
  }
}

export async function PUT(req: NextRequest) {
  if (req.method === "PUT") {
    const todos = readTodos();
    const updatingTodo = (await req.json()) as Todo;

    if (!updatingTodo || !todos) {
      return NextResponse.json("Todo not found", { status: 404 });
    }

    const updatedTodo: Todo = {
      ...todos[Number(updatingTodo.id)],
      ...req.body,
    };
    todos[Number(updatingTodo.id)] = updatedTodo;
    writeTodos(todos);

    return NextResponse.json(updatedTodo, { status: 200 });
  } else {
    return NextResponse.json(`Method ${req.method} Not Allowed`, {
      status: 405,
    });
  }
}

export async function DELETE(req: NextRequest) {
  let todos = readTodos();
  const id = (await req.json()) as string;

  if (!todos) {
    return NextResponse.json("Todo not found", { status: 404 });
  }

  todos = todos.filter((t: Todo) => t.id !== id);
  writeTodos(todos);

  return NextResponse.json("Todo successfully deleted.", { status: 204 });
}