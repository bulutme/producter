import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styles from "./TaskCard.module.scss";
import classNames from "classnames";
import { loadUserIcon, loadPriorityIcon, loadTicketIcon } from "./constants";

const TaskCard = ({ item, index }: any) => {
  const Ticket = loadTicketIcon(item.ticket);
  const Priority = loadPriorityIcon(item.priority);
  const User = loadUserIcon(item.user);

  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => {
        return (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            onClick={provided.dragHandleProps?.onDragStart}
          >
            <div className={styles.taskCard}>
              <p className={styles.taskTitle}>{item.title}</p>
              <div className={styles.taskInfo}>
                <div className={styles.section}>
                  <Ticket />
                  <p className={styles.taskId}>{item.taskId}</p>
                </div>
                <div className={classNames(styles.section, styles.infoSection)}>
                  <Priority />
                  <span className={styles.taskCount}>{item.taskCount}</span>
                  <User />
                </div>
              </div>
            </div>
          </div>
        );
      }}
    </Draggable>
  );
};

export default TaskCard;
