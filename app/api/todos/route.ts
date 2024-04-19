import { type NextRequest, NextResponse } from "next/server";
import { readTodos, writeTodos } from "@/app/utils";

export async function POST(req: NextRequest) {
  if (req.method === "POST") {
    const newTodo = await req.json();

    const todos = readTodos();
    todos.push(newTodo);
    writeTodos(todos);

    return NextResponse.json(newTodo, { status: 201 });
  } else
    return NextResponse.json(`Method ${req.method} Not Allowed`, {
      status: 405,
    });
}
