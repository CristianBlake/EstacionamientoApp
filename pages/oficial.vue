<script setup lang="ts">
const newOficial = async (value: {}) => {
    await console.log(value);
}
</script>

<template>
  <Header title="Alta de vehículo oficial" />
  <div class="lg:grid lg:grid-cols-2 lg:content-center">
    <div class="my-20">
      <div class="flex items-center lg:hidden">
        <img src="~/assets/oficial.jpg" class="w-96">
      </div>

      <div class="block">
        <FormKit type="form" @submit="newOficial" submit-label="Registrar alta">
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
      <img src="~/assets/oficial.jpg" class="w-full">
    </div>
  </div>
</template>