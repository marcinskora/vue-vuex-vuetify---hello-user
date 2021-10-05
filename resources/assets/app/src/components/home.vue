<template>
    <v-container>
        <div>
            <h4>Witaj {{name}}</h4>
        </div>
    </v-container>
</template>


<script>
    export default {
        computed: {
            name() {
                return this.$store.getters.userFirstname;
            }
        }
    }
</script>
