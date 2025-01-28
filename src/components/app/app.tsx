import Header from "../header/header";
import Input from "../input/input";
import TaskList from "../list/list";
import Filter from "../filter/filter";
import { RootState, useSelector } from "../../services/store";
import styles from "./app.module.scss";

export const App: React.FC = () => {
  const tasks = useSelector((state: RootState) => state.todo);
  const filter = useSelector((state: RootState) => state.filter.filter);

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div data-cy="app" className={styles.app}>
      <Header />
      <Input />
      <TaskList tasks={filteredTasks} />
      <Filter />
    </div>
  );
};
