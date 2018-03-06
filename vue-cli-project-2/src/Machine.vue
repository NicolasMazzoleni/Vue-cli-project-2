<template>
    <div>
        <h1>Machine: {{ name }}</h1>
        <h3>Status: {{ status }}</h3>
        <h5>Last time ckecked: {{ checkedAt }}</h5>

    </div>
</template>

<script>
    export default {
        data () {
            return {
                name: 'What else ?',
                status: false,
                checkedAt: new Date(),
            }
        },

    }
</script>

<style scoped>

</style>