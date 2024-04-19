import fs from "fs";
import path from "path";
import { type Todo } from "../context/todoContext";

const todosFilePath = path.join(process.cwd(), "app/data", "todos.json");

const readTodos = () => {
  try {
    const data = fs.readFileSync(todosFilePath, "utf8");
    return JSON.parse(data) as Todo[];
  } catch (error) {
    console.error("Error reading the todos file:", error);
    if (error instanceof Error) throw new Error(error.message);
  }
};

const writeTodos = (data: Todo[]) =>
  fs.writeFileSync(todosFilePath, JSON.stringify(data, null, 2), "utf8");

export { readTodos, writeTodos };
