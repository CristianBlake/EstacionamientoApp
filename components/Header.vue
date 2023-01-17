<script setup lang="ts">
defineProps<{
  title: string
}>();
</script>

<template>
    <div class="grid content-center mr-2">
      <Icon name="material-symbols:arrow-back-ios-rounded"/>
    </div>
    <h1 class="text-4xl font-bold">{{ title }}</h1>
</template>