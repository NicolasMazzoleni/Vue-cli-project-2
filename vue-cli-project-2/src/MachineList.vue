<template>
    <div>
        <h2>{{ message }}</h2>
        <div class="machineslistes">
            <div v-for="machine in machines">
                <machine v-bind:name="machine.name"
                         v-bind:status="machine.status"
                         v-bind:checked-at="machine.checkedAt"></machine>
            </div>
        </div>
    </div>
</template>

<script>
    import Machine from './Machine.vue';

    export default {
        components: {
            'machine': Machine
        },
        data() {
            return {
                message: "Liste des machines",
                machines: [{
                    id: 1,
                    name: 'What else ?',
                    status: true,
                    checkedAt: new Date(),
                }, {
                    id: 2,
                    name: 'Broken',
                    status: false,
                    checkedAt: new Date(),
                }]
            }
        },

    }
</script>

<style scoped>

</style>