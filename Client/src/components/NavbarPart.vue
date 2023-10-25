<template>
  <nav class="navbar navbar-expand-lg navbar-dark d-none d-lg-block" style="z-index: 2000">
    <div class="container-fluid">
      <!-- Navbar brand -->
      <a
        class="navbar-brand nav-link"
      >
        <strong >JAGAT</strong>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-mdb-toggle="collapse"
        data-mdb-target="#navbarExample01"
        aria-controls="navbarExample01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i class="fas fa-bars"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarExample01">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item active">
            <RouterLink class="nav-link" aria-current="page" :to="{name: 'home'}">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink
              class="nav-link"
              :to="{name: 'form'}"
              rel="nofollow"
              >New Journey</RouterLink>
          </li>
          <!-- <li class="nav-item">
            <a class="nav-link" href="https://mdbootstrap.com/docs/standard/" target="_blank"
              >Download MDB UI KIT</a
            >
          </li> -->
        </ul>

        <!-- <ul class="navbar-nav d-flex flex-row"> -->
          <!-- Icons -->
          <!-- <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://www.youtube.com/channel/UC5CF7mLQZhvx8O5GODZAhdA"
              rel="nofollow"
              target="_blank"
            >
              <i class="fab fa-youtube"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://www.facebook.com/mdbootstrap"
              rel="nofollow"
              target="_blank"
            >
              <i class="fab fa-facebook-f"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://twitter.com/MDBootstrap"
              rel="nofollow"
              target="_blank"
            >
              <i class="fab fa-twitter"></i>
            </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
            <a
              class="nav-link"
              href="https://github.com/mdbootstrap/mdb-ui-kit"
              rel="nofollow"
              target="_blank"
            >
              <i class="fab fa-github"></i>
            </a>
          </li> -->
        <!-- </ul> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>

<style>
.navbar .nav-link {
  color: #fff !important;
}
</style>
