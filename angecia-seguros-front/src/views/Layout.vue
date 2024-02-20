<script setup>
import { ref, watchEffect } from 'vue'
import { useBreakpoint } from 'vuestic-ui'
import { useRouter } from 'vue-router'
import { RouterLink,RouterView } from 'vue-router'

const router = useRouter()

const breakpoints = useBreakpoint()

const isSidebarVisible = ref(breakpoints.mdUp)

watchEffect(() => {
  isSidebarVisible.value = breakpoints.smUp
})

const menu = [
  { icon: 'people', title: 'Clientes', route: '/clientes' },
  { icon: 'receipt', title: 'Polizas', route: '/polizas' },
]

const getRoute = (icon) => {
  for (const item of menu) {
    if (item.icon === icon) {
      return item.route;
    }
  }
  return '/';
};

const navigateToRoute = (icon) => {
  const route = getRoute(icon)
  router.push(route)
}
</script>

<template>
  <VaLayout :top="{ fixed: true, order: 2 }"
    :left="{ fixed: true, absolute: breakpoints.smDown, order: 1, overlay: breakpoints.smDown && isSidebarVisible }"
    @left-overlay-click="isSidebarVisible = false">
    <template #top>
      <VaNavbar shadowed>
        <template #left>
          <VaButton preset="secondary" :icon="isSidebarVisible ? 'menu_open' : 'menu'"
            @click="isSidebarVisible = !isSidebarVisible" />
        </template>
        <template #center>
          <h1>Seguros Do Carmo S.L</h1>
        </template>
      </VaNavbar>
    </template>

    <template #left>
      <VaSidebar v-model="isSidebarVisible">
        <VaSidebarItem v-for="{ icon, title } in menu" :key="icon">
          <RouterLink :to="getRoute(icon)">
            <VaSidebarItemContent @click.native="navigateToRoute(icon)">
              <VaIcon :name="icon" />
              <VaSidebarItemTitle>
                {{ title }}
              </VaSidebarItemTitle>
            </VaSidebarItemContent>
          </RouterLink>
        </VaSidebarItem>
      </VaSidebar>
    </template>

    <template #content>
      <main>
        <article>
          <RouterView />
        </article>
      </main>
    </template>
  </VaLayout>
</template>

<style scoped>
.f{
  font-size: x-large;
  margin-top: 20px;
}
</style>