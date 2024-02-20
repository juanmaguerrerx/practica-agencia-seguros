<template>
    <div class="">
        <h1 class="text-center text-xl">Lista de Clientes</h1>
        <ul>
            <li v-for="cliente in clientes" :key="cliente.id">{{ cliente.nombre }}</li>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'Cliente',
    data() {
        return {
            clientes: [],
        };
    },
    mounted() {
        this.fetchUsers();
    },
    methods: {
        fetchUsers() {
            axios.get('http://localhost:8000/api/clientes') // Reemplaza localhost:8000 con la URL de tu servidor Laravel
                .then(response => {
                    this.clientes = response.data;
                    console.log(this.clientes);
                })
                .catch(error => {
                    console.error('Error al obtener usuarios:', error);
                });
        }
    }
}
</script>

<style scoped></style>