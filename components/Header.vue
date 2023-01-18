<script setup lang="ts">
defineProps<{
  title: string
}>();

const router = useRouter();
</script>

<template>
  <div class="flex items-center">
    <Icon name="material-symbols:arrow-back-ios-rounded" class="w-4 mr-2" @click="router.back()" role="button"/>
    <span class="font-bold text-lg">{{ title }}</span>
  </div>
</template>