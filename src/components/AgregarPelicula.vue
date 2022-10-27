<template>
    <v-form v-model="validado" ref="form" lazy-validation>
        <v-text-field label="Nombre Pelicula:" v-model="nombre" :rules="reglasNombre" required></v-text-field>
        <v-text-field label="Descripcion:" v-model="descripcion" multi-line></v-text-field>
        <v-select label="Año de publicacion:" v-model="anho_pub" :items="anhos"></v-select>
        <v-text-field label="Genero:" v-model="genero"></v-text-field>
        <v-btn @click="enviar" :disabled="!validado">
            Enviar
        </v-btn>
        <v-btn @click="limpiar">Limpiar</v-btn>
    </v-form>
</template>
<script>
export default {
    data: () => ({
        validado: true,
        nombre: '',
        descripcion: '',
        genero: '',
        anho_pub: '',
        reglasNombre: [
            v => !!v || 'Se requiere el nombre de la pelicula',
        ],
        select: null,
        anhos: [
            '2022',
            '2021',
            '2019',
            '2020',
            '2018',
            '2017',
            '2016',
            '2015',
            '2014',
            '2013',
            '2012',
            '2011',
            '2010'
        ],
    }),
    methods: {
        enviar() {
            if (this.$refs.form.validate()) {
                //Realizar accion 
            }
        },
        limpiar() {
            this.$refs.form.reset();
        }
    }
}
</script>