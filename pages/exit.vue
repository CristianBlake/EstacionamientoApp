<script setup lang="ts">

const currentTime = ref<string>();
const { currentDate } = useTime();

const newExit = async (form: {}) => {
  form = { ...form, exit: `${currentDate} ${currentTime.value}`};
  usePostFetch('exit', form, '/');
}

setInterval(() => {
    currentTime.value = useTime().currentTime;
}, 1000)
</script>

<template>
  <Header title="Registrar salida de vehículo" />
  <div class="lg:grid lg:grid-cols-2 lg:content-center">
    <div class="my-20">
      <div class="flex items-center lg:hidden">
        <img src="~/assets/residents2.png" class="w-96">
      </div>

      <div class="block my-8">
        <p class="font-bold text-sm">Hora de salida:</p>
        <p class="text-4xl font-bold">{{ currentTime }}</p>
      </div>

      <div class="block">
        <FormKit type="form" @submit="newExit" submit-label="Registrar salida">
          <FormKit
            type="text"
            label="Número de placa"
            name="license_plate"
            placeholder="P123ABC"
            help="Ingrese el número de placa del vehículo"
            validation="required|length:7"
            :validation-messages="{
              required: 'El campo es requerido',
              length: 'El número de placa debe tener 7 o más carácteres'
            }"
          />
        </FormKit>
      </div>
    </div>
    <div class="hidden lg:block flex items-center content-center">
      <img src="~/assets/residents2.png" class="w-full">
    </div>
  </div>
</template>