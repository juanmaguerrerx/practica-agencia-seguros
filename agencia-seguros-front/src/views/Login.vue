<template>
    <!-- page -->
    <main class="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
        <!-- component -->
        <section class="flex w-[30rem] flex-col space-y-10">
            <div class="text-center text-4xl tracking-widest">Seguros Do Carmo S.L</div>
            <div class="text-center text-4xl font-medium">Iniciar Sesión</div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="text" placeholder="Email"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
            </div>

            <div class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
                <input type="password" placeholder="Contraseña"
                    class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
            </div>

            <button class="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
                LOG IN
            </button>
        </section>
    </main>
</template>

<script>
export default {
    name: 'Login'
}
</script>