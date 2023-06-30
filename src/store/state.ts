import { v4 as uuidv4 } from "uuid";
import todo from "../assets/images/todo.svg";
import done from "../assets/images/done.svg";

export const CARD_STATE = [
  {
    id: uuidv4(),
    title: "Being able to rename and edit users lorem rename and edit users",
    ticket: "feature",
    priority: "medium",
    user: "user1",
    taskId: "TSK-01",
    taskCount: 8,
  },
  {
    id: uuidv4(),
    title: "Being able to rename and edit users lorem rename and edit users",
    ticket: "bug",
    priority: "low",
    user: "user2",
    taskId: "EPC-02",
    taskCount: 10,
  },
  {
    id: uuidv4(),
    title: "Being able to rename and edit users lorem rename and edit users",
    ticket: "feature",
    priority: "medium",
    user: "user1",
    taskId: "TSK-01",
    taskCount: 8,
  },
];

export const COLUMNS_STATE = {
  ["1"]: {
    title: "To Do",
    items: CARD_STATE,
    icon: todo,
  },
  ["2"]: {
    title: "Done",
    items: [],
    icon: done,
  },
};
