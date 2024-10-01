import { Header } from "./components/features/Header/Header";
import { Tasklist } from "./components/features/TaskList/TaskList";
import "./App.css";

function App() {
  return (
    <div className="h-screen transition-colors duration-300">
      <Header />
      <Tasklist />
    </div>
  );
}

export default App;
