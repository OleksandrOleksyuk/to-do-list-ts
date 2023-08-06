export type Task = {
  id: string;
  title?: string;
  description?: string;
  status: "completed" | "incompleted";
};

export type ToDoList = Task[];

export type TaskProps = Task & {
  id: string;
  status: "completed" | "incompleted";
  onDelete: (id: string) => void;
  onCompleted: (id: string, check: boolean) => void;
};

export type AddTaskProps = {
  onPopup: (open: boolean) => void;
  onAddTask: (task: Task) => void;
};

export type ButtonProps = {
  children: string;
  onClick?: () => void;
  styles: string;
};

export type TaskListProps = {
  toDoList: ToDoList;
  onDelete: (id: string) => void;
  onCompleted: (elId: string, check: boolean) => void;
  filter: string;
};
