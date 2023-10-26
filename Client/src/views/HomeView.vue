<template>
  <header>
    <!-- Carousel wrapper -->
    <div
      id="introCarousel"
      class="carousel slide carousel-fade shadow-2-strong"
      data-mdb-ride="carousel"
    >
      <!-- Indicators -->
      <ol class="carousel-indicators">
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" class="active"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
      </ol>

      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <GreetingPart />
        </div>
        <!-- Single item -->
        <div class="carousel-item">
          <GreetingPart />
        </div>
        <!-- Single item -->
        <div class="carousel-item">
          <GreetingPart />
        </div>
      </div>
      <!-- Inner -->
      <!-- Controls -->
      <a class="carousel-control-prev" href="#introCarousel" role="button" data-mdb-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#introCarousel" role="button" data-mdb-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
    <!-- Carousel wrapper -->
  </header>
</template>

<script>
import GreetingPart from '../components/GreetingPart.vue'
export default {
  components: { GreetingPart },
}
</script>

<style>
/* Carousel
GreetingPart styling */
#introCarousel,
.carousel-inner,
.carousel-item,
.carousel-item.active {
  height: 100vh;
}

.carousel-item:nth-child(1) {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(2) {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(3) {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}

/* Height for devices larger than 576px */
@media (min-width: 992px) {
  #introCarousel {
    margin-top: -58.59px;
  }
  #introCarousel,
  .carousel-inner,
  .carousel-item,
  .carousel-item.active {
    height: 100vh;
  }
}
</style>
