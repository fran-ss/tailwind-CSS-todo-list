import { PlusCircle, Trash } from "lucide-react";
import { Button } from "../../components/Button";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  task: string;
  done: boolean;
};
export function Home() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [task, setTask] = useState("");

  function handleAdd() {
    if (task) {
      const todo = {
        id: uuidv4(),
        task,
        done: false,
      };
      setTodos([...todos, todo]);
      setTask("");
    } else {
      alert("Preencha a Tarefa");
      console.log(todos);
    }
  }
  function handleDelete(id: string) {
    const todofinded = todos.find((todo) => todo.id === id);
    const index = todos.indexOf(todofinded!);
    const todoUpdate = [...todos];
    todoUpdate.splice(index, 1);
    setTodos(todoUpdate);
  }
  return (
    <div className=" p-96 bg-slate-800  " id="page-home">
      <header className="flex  ">
        <input className="bg-slate-300 p-1 w-80"
          type={"text"}
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Digite uma tarefa"
        />
        <Button title={"Adicionar"} Icon={PlusCircle} onClick={handleAdd} />
      </header>
      <main className=" w-80  m-1 ">
        {
          /* {
          JSON.stringify(todos, null, 2)
        } */
          todos.map((todo) => (
            <div className="flex gap-10 " key={todo.id}>
              <strong className=""> {todo.task}</strong>
              <Trash className="bg-red-600 " onClick={() => handleDelete(todo.id)} />
            </div>
          ))
        }
      </main>
    </div>
  );
}
