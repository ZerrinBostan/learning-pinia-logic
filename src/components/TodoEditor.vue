<template>
  <div
    class="flex flex-col justify-around border border-stone-200 rounded-lg mt-1 h-32 w-full"
  >
    <input
      :value="text"
      type="text"
      id="success"
      class="bg-white text-black text-sm placeholder-stone-400 focus:outline-none block w-full px-2.5 pb-2.5"
      placeholder="Görev Tanımla"
      @keyup.enter="onSaveEditor"
      @input="onChangeValue"
    />
    <div class="border-t">
      <div class="flex justify-end px-2.5 pt-2.5">
        <div
          class="flex items-center justify-center bg-stone-100 h-7 w-16 text-xs text-slate-500 font-semibold cursor-pointer rounded"
          @click="onCancelEditor"
          type="button"
        >
          <span>Cancel</span>
        </div>
        <div
          class="flex items-center justify-center bg-orange-600 h-7 w-20 text-xs text-white font-semibold cursor-pointer rounded ml-4"
          @click="onSaveEditor"
          type="button"
          :class="{ 'opacity-50': error === true }"
        >
          <span>Save</span>
        </div>
      </div>
    </div>
  </div>
  <template v-if="isError === true">
    <p class="text-sm text-orange-600 text-right mt-2">
      <span class="font-medium">
        {{ errorMessage }}
      </span>
    </p>
  </template>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  data: {
    type: Object,
    required: false,
    default: {},
  },
  errorMessage: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["onSave", "onCancel"]);

const text = ref(props.data?.description || "");
const isError = ref(false);

const onChangeValue = ($event) => {
  if (text.value.length !== 0) {
    isError.value === false;
  }
  text.value = $event.target.value;
};

const onSaveEditor = () => {
  emit("onSave", text.value);
  if (text.value.length === 0) {
    isError.value === true;
  }
  text.value = "";
};

const onCancelEditor = () => {
  emit("onCancel");
};

</script>

<style lang="scss" scoped></style>
