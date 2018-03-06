<template>
  <div>
    <h2>{{ message }}</h2>
    <gmap-map
      :center="{lat:45.747711 , lng:4.8241}"
      :zoom="7"
      style="width: 100%; height: 800px"
    >
    </gmap-map>
  </div>


</template>

<script>
    export default {
        data () {
          return {
              message: "Carte des machines"
          }
        },

    }
</script>

<style scoped>

</style>
