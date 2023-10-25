<template>
  <header>
    <!-- Carousel wrapper -->
    <div
      id="introCarousel"
      class="carousel slide carousel-fade shadow-2-strong"
      data-mdb-ride="carousel"
    >
      <ol class="carousel-indicators">
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="0" class="active"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="1"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="2"></li>
      </ol>
      <!-- Inner -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <video style="min-width: 100%; height: 800px" playsinline autoplay muted loop>
            <source class="h-100" src="../assets/Raindrops_Videvo.mp4" type="video/mp4" />
          </video>
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white text-center">
                <h1 class="me-5">THE DAY WILL BE RAINNY</h1>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item">
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.6)">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white text-center">
                <h1 class="mb-3">CHECK THE BASECAMP LOCATION BELOW</h1>
                <GoogleMap
                  api-key="AIzaSyAoLZL2XM0CDngIJ6dii9GmnE4tWE2H7Vc"
                  style="width: 100%; height: 400px"
                  :center="center"
                  :zoom="15"
                >
                  <Marker :options="{ position: center }" />
                </GoogleMap>
              </div>
            </div>
          </div>
        </div>

        <div class="carousel-item active">
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.8)">
            <div class="d-flex justify-content-center h-100 pt-5 mt-5">
              <div class="text-white text-center">
                <h1 class="mb-3">POST 1</h1>
                <h6 class="pt-4">--- Ketinggian 1500 mdpl ---</h6>
                <h6>--- Waktu Tempuh 45 menit ---</h6>
                <h6 class="pt-4">--- Description ---</h6>
                <p style="width: 70%; margin-left:15%">
                  Dari basecamp menuju Pos 1, terdapat dua opsi untuk mencapai Pos 1; trekking
                  seperti biasa atau pun menggunakan ojeg. Saranku, lebih baik menggunakan ojeg bila
                  buru-buru hendak berebut lapak untuk mendirikan tenda. Apabila menaiki ojeg, biaya
                  yang dikenakan per Agustus/September 2017 adalah Rp 20.000 – Rp 25.000 per orang
                  dengan waktu tempuh sekitar 10-15 menit. Kondisi jalan cukup berbahaya, jadi
                  jangan lupa meminta pengojeg untuk berhati-hati membawa motornya. Bila ingin
                  menikmati proses pendakian dari awal sampai akhir murni berjalan kaki, trekking
                  seperti biasa tentu menjadi opsi yang tepat. Yang pasti, sepanjang perjalanan
                  masih diselimuti dengan perkebunan dan perumahan warga Kledung.
                </p>
              </div>
            </div>
          </div>
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
import { GoogleMap, Marker } from 'vue3-google-map'
export default {
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: -7.339404817785096, lng: 110.03084472755053 }

    return { center }
  }
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
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(4) {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg');
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
