<template>
  <div class="mb-2">
    <img src="~/assets/logo-bm.png" class="w-48" />
    <p class="font-bold ml-14 text-sky-400">Estacionamiento</p>
  </div>

  <h1 class="font-bold mb-4">Escoja una acción</h1>
  <div class="grid grid-cols-2 md:grid-cols-3 justify-items-center">
    <ActionCard icon="ic:baseline-plus" twice="ic:baseline-directions-car" title="Nueva entrada" />
    <ActionCard icon="ic:baseline-minus" twice="mdi:car-arrow-left" title="Nueva salida" />
    <ActionCard icon="ic:baseline-plus" twice="ri:police-car-fill" title="Alta oficial" />
    <ActionCard icon="ic:baseline-plus" twice="mdi:car-estate" title="Alta residente" />
    <ActionCard icon="material-symbols:calendar-month" title="Comienza més" />
    <ActionCard icon="mdi:invoice-check" title="Pagos residentes" />
  </div>
</template>