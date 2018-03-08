<template>
  <gmap-map
    :center="{lat: 5.0, lng: 25.0}"
    :zoom="4"
    style="width: auto; height: 500px"
  >
    <gmap-marker
      v-for="machine in machines"
      :key="machine.id"
      :position="{lat: Number(machine.latitude), lng: Number(machine.longitude)}"
      :clickable="true"
      :draggable="true"
    ></gmap-marker>
  </gmap-map>
</template>

<script>
    export default {
      props: ['machines'],
        data () {
          return {
              message: "Carte des machines"
          }
        },
    }
</script>

<style scoped>

</style>
