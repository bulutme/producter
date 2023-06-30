import { createSlice, configureStore } from "@reduxjs/toolkit";
import { CARD_STATE, COLUMNS_STATE } from "./state";

const cardSlice = createSlice({
  name: "taskCard",
  initialState: COLUMNS_STATE,
  reducers: {
    onDragEnd: (state, action) => {
      if (!action.payload.destination) return;
      const { source, destination } = action.payload;
      if (source.droppableId !== destination.droppableId) {
        const sourceColumn = state[source.droppableId];
        const destColumn = state[destination.droppableId];
        const sourceItems = [...sourceColumn.items];
        const destItems = [...destColumn.items];
        const [removed] = sourceItems.splice(source.index, 1);
        destItems.splice(destination.index, 0, removed);
        return {
          ...state,
          [source.droppableId]: {
            ...sourceColumn,
            items: sourceItems,
          },
          [destination.droppableId]: {
            ...destColumn,
            items: destItems,
          },
        };
      } else {
        const column = state[source.droppableId];
        const copiedItems = [...column.items];
        const [removed] = copiedItems.splice(source.index, 1);
        copiedItems.splice(destination.index, 0, removed);
        return {
          ...state,
          [source.droppableId]: {
            ...column,
            items: copiedItems,
          },
        };
      }
    },
    addItem: (state, action) => {
      const { id, priority, status, taskCount, taskId, ticket, title, user } =
        action.payload;

      return {
        ...state,
        [status.value]: {
          ...state[status.value],
          items: [
            ...state[status.value].items,
            {
              id,
              title,
              ticket: ticket.value,
              priority: priority.value,
              user: user.value,
              taskId: taskId.label,
              taskCount: taskCount,
            },
          ],
        },
      };
    },
  },
});

const store = configureStore({ reducer: cardSlice.reducer });

export const { onDragEnd, addItem } = cardSlice.actions;
export { store, cardSlice };
