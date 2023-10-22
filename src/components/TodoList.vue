<template>
  <div>
    <ClipboardDocumentListIcon class="h-8 w-6 text-orange-600" />
  </div>
  <div class="flex items-center w-full cursor-pointer">
    <span class="text-xs text-left text-black font-normal pl-1">{{
      data.description
    }}</span>
  </div>
  <div class="flex">
    <PencilSquareIcon
      class="text-stone-300 h-8 w-6 cursor-pointer"
      @click="emit('openEditorToUpdate', data.id)"
    />
    <TrashIcon
      class="text-stone-300 h-8 w-6 cursor-pointer ml-4"
      @click="emit('removefromlist', data.id)"
    />
  </div>
</template>

<script setup>
import {
  ClipboardDocumentListIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/vue/24/solid";

const props = defineProps({
  data: {
    Type: Object,
    required: true,
  },
});

const emit = defineEmits(["openEditorToUpdate", "removefromlist"]);
</script>

<style lang="scss" scoped></style>
