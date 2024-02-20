<template>
    <div class="container">
        <DataTable ref="dt" :value="clientes" v-model:selection="selectedClientes" dataKey="id" :paginator="true" :rows="10"
            :filters="filters"
            paginatorTemplate="FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown"
            :rowsPerPageOptions="[2, 5, 10, 25, 50]">
            <template #header>
                <div class="flex flex-wrap gap-2 align-items-center justify-content-between px-2 py-4">
                    <h1 class="m-0">Clientes</h1>
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['nombre'].value" placeholder="Search..." />
                    </IconField>
                </div>
            </template>
            <Column field="id" header="#" style="width:10%;padding:20px;" sortable></Column>
            <Column field="nombre" header="Nombre" style="padding-left: 10px;" sortable></Column>
            <Column field="email" header="Correo" style="padding-left: 10px;" sortable></Column>
            <Column field="telefono" header="Telefono" style="padding-left: 10px;" sortable></Column>
            <Column field="ciudad" header="Ciudad" style="padding-left: 10px;" sortable></Column>
            <Column field="codigo_postal" header="Codigo Postal" style="width: 5%;padding-left:5px;" sortable></Column>
            <Column :exportable="false">
                <template #body="slotProps">
                    <Button class="fa-regular fa-pen-to-square mr-2 fa-lg" style="color: rgb(70, 202, 70);border:none;" />
                    <Button class="fa-regular fa-trash-can fa-lg" style="color: rgb(202, 81, 70);border:none;"
                        severity="danger" />
                </template>
            </Column>
        </DataTable>

        <Dialog v-model:visible="visible" modal header="Editar Cliente" :style="{ width: '25rem' }">
            <span class="p-text-secondary block mb-5">Update your information.</span>
            <div class="flex align-items-center gap-3 mb-3">
                <label for="username" class="font-semibold w-6rem">Username</label>
                <InputText id="username" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex align-items-center gap-3 mb-5">
                <label for="email" class="font-semibold w-6rem">Email</label>
                <InputText id="Email" class="flex-auto" autocomplete="off" />
            </div>
            <div class="flex justify-content-end gap-2">
                <Button type="button" label="Cancel" severity="secondary" @click="editCliente(slotProps.data)"></Button>
                <Button type="button" label="Save" ></Button>
            </div>
        </Dialog>
    </div>
</template>

<script>
import axios from 'axios';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column'
import InputText from 'primevue/inputtext';
import { useToast } from 'primevue/usetoast';
import { ref } from 'vue';


export default {
    name: 'Clientes',
    components: {
        DataTable,
        Column,
        InputText
    },
    setup() {
        const toast = useToast();
        const clientes = ref([]);
        const filters = ref({
            nombre: { value: '' },
            email: { value: '' },
            id: { value: '' },
            ciudad: { value: '' },
            codigo_postal: { value: '' }
        });

        const loadClientes = () => {
            axios.get('/api/clientes')
                .then(response => {
                    clientes.value = response.data;
                })
                .catch(error => {
                    console.error('Error al obtener los clientes:', error);
                    toast.add({ severity: 'error', summary: 'Error', detail: 'Failed to load clientes', life: 3000 });
                });
        };


        const visible = ref(false); // Variable para controlar la visibilidad del modal


        // Cargar clientes al montar el componente
        loadClientes();


        const editCliente = () => {
            // Lógica para cargar los datos del cliente en el modal
            // Por ejemplo, podrías asignar los datos del cliente a variables reactivas y luego mostrar el modal
            visible.value = true;
        };


        const onRowEditSave = (event) => {
            // Lógica para guardar la edición de una fila
        };

        return {
            clientes,
            filters,
            onRowEditSave,
        };
    }
};
</script>

<style scoped>
.container>* {
    margin: 100px;
    font-size: large;
}

.m-0 {
    text-align: center;
    font-size: xx-large;
}
</style>