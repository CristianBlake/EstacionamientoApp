<script setup lang="ts">
defineProps<{
  icon: string,
  twice?: string,
  title: string
}>();
</script>

<template>
  <div class="grid grid-rows-2">
    <div>
      <figure class="bg-sky-100 hover:bg-sky-200 w-28 h-28 rounded-xl flex items-center justify-center">
        <Icon :name="icon" class="text-blue-900"/>
        <Icon v-if="twice" :name="twice" class="text-blue-900"/>
      </figure>
    </div>
    <div class="mt-2">
      <p class="text-center text-xm">{{ title }}</p>
    </div>
  </div>
</template>