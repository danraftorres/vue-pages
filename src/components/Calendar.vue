<template>
    <v-container fluid>
        <v-row justify="center" align="center" style="min-height: 100vh">
            <v-col cols="6">
                <v-card>
                    <v-date-picker
                        v-model="date"
                        :min="minDate"
                        :max="maxDate"
                        full-width
                        @change="getDollar(date)"
                    ></v-date-picker>
                </v-card>
                <v-card color="secondary" dark>
                    <v-card-text class="display-1 text-center">{{ dollarValue }}</v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

import { mapMutations } from 'vuex'

export default {
    name: "Calendar",
    data() {
        return {
            minDate: "1970",
            maxDate: new Date().toISOString().substring(0, 10),
            date: new Date().toISOString().substring(0, 10),
            dollarValue: null
        };
    },
    computed: {
        // formatear fecha a dd-mm-YYYY
        formatdate() {
            let date = this.date.split(["-"]);
            return `${date[2]}-${date[1]}-${date[0]}`;
        }
    },
    methods: {
        ...mapMutations(['showLoading', 'hideLoading']),
        async getDollar(day) {
            try {
                // declara url base y parametros
                const baseurl = 'https://www.banxico.org.mx/SieAPIRest/service/v1/';
                const params = { token: "b47e4aef4be197cedb6480f81ac89e46319fe6e847926377a89dea1833d18ee4" };

                // convertir a url
                const url = new URL(`${baseurl}series/SF43718/datos/${day}/${day}`);
                //agregar parametros a la url con searchParams.append
                Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));

                // realizar peticion a api url
                const response = await fetch(url);
                // obtener datos json
                const data = await response.json();
                // retornar array series
                const series = data.bmx.series[0];

                // checamos si existe datos en series ya que contiene valor 
                if ("datos" in series) {
                    // retornar solo valor
                    this.dollarValue = `$ ${series.datos[0].dato}`;
                    this.showLoading('Obteniendo datos')
                } else {
                    this.dollarValue = "Sin resultados";
                }
            } catch (error) {
                console.log(error);
            } finally {
                this.hideLoading();
            }
        }
    },
    created() {
        this.getDollar(this.date);
    }
};
</script>

<style lang="scss" scoped>
</style>