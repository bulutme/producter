import { DragDropContext, Droppable } from "react-beautiful-dnd";
import TaskCard from "../TaskCard";
import dynamic from "next/dynamic";
import styles from "./Kanban.module.scss";
import { onDragEnd } from "../../store";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const Kanban = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  return (
    <DragDropContext onDragEnd={(result) => dispatch(onDragEnd(result))}>
      <div className={styles.container}>
        {Object.entries(state).map(([columnId, column]) => {
          const Icon = column.icon;
          return (
            <Droppable key={columnId} droppableId={columnId}>
              {(provided) => (
                <div className={styles.column}>
                  <div className={styles.columnHeader}>
                    <div className={styles.columnSection}>
                      <Icon />
                      <p className={styles.columnTitle}>{column.title}</p>
                    </div>
                    <div className={styles.columnSection}>
                      <span className={styles.cardCount}>
                        {column.items.length}
                      </span>
                    </div>
                  </div>
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className={styles.cardsContent}
                  >
                    {column.items.map((item, index) => (
                      <TaskCard key={item.id} item={item} index={index} />
                    ))}
                  </div>
                </div>
              )}
            </Droppable>
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default dynamic(() => Promise.resolve(Kanban), {
  ssr: false,
});
