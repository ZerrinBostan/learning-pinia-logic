import { defineStore } from "pinia";

export const useTodoListStore = defineStore("todoListStore", {
  /*
  Basic Logic
  ┌─────────────────────────────────────────────────────────────────────────────┐
  │     // state                                                                │
  │     // getters                                                              │
  │     // actions                                                              │
  └─────────────────────────────────────────────────────────────────────────────┘
 */

  state: () => ({
    list: [],
    id: 0,
  }),
  actions: {
    addTodo(item) {
      this.list.push({ description: item, id: this.id++, completed: false });
    },
    removeTodo(itemId) {
      this.list = this.list.filter((listItem) => {
        return listItem.id !== itemId;
      });
    },
    updateTodo(itemId, updatedItem) {
      const todo = this.list.find((item) => item.id === itemId);

      if (todo) {
        todo.description = updatedItem;
      }
    },
  },
});
