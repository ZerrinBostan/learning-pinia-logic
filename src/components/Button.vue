<template>
  <div class="flex items-center">
    <PlusSmallIcon class="h-8 w-6 text-orange-600" />
    <span class="text-xs text-stone-400 font-normal pl-1">{{ text }}</span>
  </div>
</template>

<script setup>
import { PlusSmallIcon } from "@heroicons/vue/24/solid";

const props = defineProps({
  text: {
    Type: String,
    required: false,
    default: "",
  },
});

</script>

<style lang="scss" scoped></style>
