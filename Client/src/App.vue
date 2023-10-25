<template>
  <div>
    <NavbarPart />
    <RouterView />
  </div>
</template>

<script>
import NavbarPart from './components/NavbarPart.vue'
export default {
  components: { NavbarPart }
}
</script>

<style></style>
