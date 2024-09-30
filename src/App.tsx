import { useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./redux/store";
import { Header } from "./components/features/Header/Header";
import { Tasklist } from "./components/features/TaskList/TaskList";

function App() {
  const theme = useSelector((state: RootState) => state.theme);

  //Switch classes based on the "theme" state + basic styling for the app
  const mainWrapperClasses = `${
    theme.themeMode === "light" ? "bg-oragnge" : "bg-violet-900"
  } h-screen transition-colors duration-300`;

  return (
    <div className={mainWrapperClasses}>
      <Header />
      <Tasklist />
    </div>
  );
}

export default App;
