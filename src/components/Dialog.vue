<template>
    <v-dialog v-model="loading.status" hide-overlay persistent width="300">
        <v-card color="primary" dark>
            <v-card-text class="text-center">
                {{ loading.message }}
                <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import { mapState } from "vuex";

export default {
    name: "Dialog",
    data() {
        return {};
    },
    computed: {
        ...mapState(["loading"])
    }
};
</script>

<style lang="scss" scoped>
</style>