<template>
  <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
    <div class="d-flex justify-content-center align-items-center h-100">
      <div class="text-white text-center">
        <h1 class="mb-3">READY FOR ADVENTURE</h1>
        <h5 class="mb-4">Best & free guide for Traveller</h5>
        <RouterLink
          class="btn btn-outline-light btn-lg m-2"
          :to="{name: 'form'}"
          role="button"
          rel="nofollow"
          >Start Journey</RouterLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
