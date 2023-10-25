<template>
  <header>
    <!-- Carousel wrapper -->
    <div
      id="introCarousel"
      class="carousel slide carousel-fade shadow-2-strong"
      data-mdb-ride="carousel"
    >
      <!-- Inner -->
      <div class="carousel-inner">
        <!-- Single item -->
        <div class="carousel-item active">
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.8)">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white text-center">
                <h1 class="me-5">READY FOR ADVENTURE</h1>
              </div>
              <form>
                <!-- 2 column grid layout with text inputs for the first and last names -->
                <div class="row ps-5">
                  <div class="col mt-5">
                    <label class="form-label text-white" for="form6Example1">DESTINATION</label>
                    <div class="form-outline">
                      <input
                        type="text"
                        id="form6Example1"
                        class="form-control-lg bg-transparent text-white border border-white rounded"
                        style="width: 500px; height: 50px"
                      />
                    </div>
                  </div>
                  <div class="col mt-3">
                    <label class="form-label text-white" for="form6Example1">DATE</label>
                    <div class="form-outline">
                      <input
                        type="date"
                        id="form6Example1"
                        class="form-control-lg bg-transparent text-white border border-white rounded"
                        style="width: 500px; height: 50px"
                      />
                    </div>
                  </div>
                </div>
                <!-- Text input -->
                <div class="form-outline ps-5 mb-4 pt-3">
                  <label class="form-label text-white" for="form6Example3">EMAIL</label>
                  <input
                    type="email"
                    id="form6Example3"
                    class="form-control text-white border border-white rounded"
                    style="width: 500px; height: 50px"
                  />
                </div>
                <!-- Submit button -->
                <button
                  type="submit"
                  class="btn btn-secondary btn-block mt-4 ms-5"
                  style="width: 500px; height: 50px"
                >
                  LET'S GO !
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- Inner -->
    </div>
    <!-- Carousel wrapper -->
  </header>
</template>

<script>
export default {}
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
