import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from "./components/TodoList";
import TodoInput from "./components/TodoInput";
function App() {
  return (
    <div className="m-5">
        <TodoInput />
        <TodoList />
    </div>
  );
}

export default App;
