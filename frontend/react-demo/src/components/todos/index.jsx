import fetchData from "../../utils/fetch-data";
import Todo from "./todos-parent";

const todos = await fetchData("/task.json");

function getDay(dateStr) {
  const date = new Date(dateStr).getDay();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Satuarday",
  ];
  return days[date];
}

function getFormatedDate(dateStr) {
  const date = new Date(dateStr);
  return `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
}

const TodoApp = () => {
  return (
    <div className="my-5">
      <h1 className="text-2xl font-bold text-center my-5">
        Todo Practice Demo
      </h1>
      <div className="container flex mx-auto gap-x-5">
        {todos.map((todo, index) => (
          <Todo
            getDay={getDay}
            todo={todo}
            getFormatedDate={getFormatedDate}
            key={index + 5}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoApp;
