<script setup lang="ts">
const actionCards = [
  {
    icon: 'ic:baseline-plus',
    twice: 'ic:baseline-directions-car',
    label: 'Registrar entrada',
    route: '/entry'
  },
  {
    icon: 'ic:baseline-minus',
    twice: 'mdi:car-arrow-left',
    label: 'Registrar salida',
    route: '/exit'
  },
  {
    icon: 'ic:baseline-plus',
    twice: 'ri:police-car-fill',
    label: 'Alta oficial',
    route: '#'
  },
  {
    icon: 'ic:baseline-plus',
    twice: 'mdi:car-estate',
    label: 'Alta residente',
    route: '#'
  },
  {
    icon: 'material-symbols:calendar-month',
    twice: '',
    label: 'Comienza més',
    route: '#'
  },
  {
    icon: 'mdi:invoice-check',
    twice: '',
    label: 'Pagos residentes',
    route: '#'
  },
];
</script>

<template>
  <div class="mb-2">
    <img src="~/assets/logo-bm.png" class="w-48" />
    <p class="font-bold ml-14 text-sky-400">Estacionamiento prueba técnica</p>
  </div>

  <h1 class="font-bold mb-4">Escoja una acción</h1>
  <div class="grid grid-cols-2 md:grid-cols-3 justify-items-center">
    <NuxtLink v-for="action in actionCards" :to="action.route">
      <ActionCard :icon="action.icon" :twice="action.twice" :title="action.label" />
    </NuxtLink>
  </div>
</template>