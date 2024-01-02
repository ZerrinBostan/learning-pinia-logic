<script setup>
import { ref } from "vue";
import { storeToRefs } from "pinia";
import { useTodoListStore } from "@/stores/todoListStore";

import TodoEditor from "@/components/TodoEditor.vue";
import TodoList from "@/components/TodoList.vue";
import Button from "@/components/Button.vue";
const store = useTodoListStore();
const { list } = storeToRefs(store);

const isOpenEditorToAdd = ref(false);
const isOpenEditorToUpdate = ref(false);
const selectedEditItemId = ref(null);

// #region - save editor
const saveTodoEditor = (item) => {
  if (item.length === 0) {
    return;
  }

  store.addTodo(item);
};

const closeEditorToAdd = () => {
  isOpenEditorToAdd.value = false;
};
// endregion

// #region - Enables opening the editor when clicked.
const openEditorToAdd = () => {
  isOpenEditorToAdd.value = true;
  isOpenEditorToUpdate.value = false;
};
// endregion

// #region - update editor
const openEditorToUpdate = (id) => {
  selectedEditItemId.value = id;
  isOpenEditorToUpdate.value = true;
  isOpenEditorToAdd.value = false;
};

const saveEditorToUpdate = (id, updatedItem) => {
  store.updateTodo(id, updatedItem);
  isOpenEditorToUpdate.value = false;
};

const closeUpdateEditor = () => {
  isOpenEditorToUpdate.value = false;
};
// endregion

// #region - remove from list
const removefromlist = (id) => {
  store.removeTodo(id);
};
// endregion
</script>

<template>
  <div class="container mx-auto">
    <div class="flex items-end">
      <h1 class="text-xl font-bold text-black text-left leading-none">Bugün</h1>
      <span class="text-xs text-stone-400 font-normal pl-1">Cmt 22 Oct</span>
    </div>

    <h1 class="text-xs font-bold text-black text-left leading-5 border-b mt-6">
      22 Ekim ‧ Bugün ‧ Cumartesi
    </h1>

    <div
      v-if="list?.length > 0"
      v-for="(todo, index) in list"
      :key="todo.id"
      class="flex flex-row divide-y divide-y-reverse"
    >
      <div class="hr" />

      <TodoEditor
        v-if="isOpenEditorToUpdate === true && selectedEditItemId == todo.id"
        @onSave="saveEditorToUpdate(todo.id, $event)"
        @onCancel="closeUpdateEditor"
        :data="todo"
      />

      <TodoList
        v-else
        :data="todo"
        @openEditorToUpdate="openEditorToUpdate"
        @removefromlist="removefromlist"
      />
    </div>
    <Button
      v-if="isOpenEditorToAdd === false || isOpenEditorToAdd === false"
      @click="openEditorToAdd"
      text="Görev Ekle"
    />
    <TodoEditor
      v-else
      @onSave="saveTodoEditor($event)"
      @onCancel="closeEditorToAdd"
      error-message="Lütfen, görev tanımlayınız."
    />
  </div>
</template>

<style scoped></style>
