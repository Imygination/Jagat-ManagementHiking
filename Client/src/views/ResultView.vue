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
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="3"></li>
        <li data-mdb-target="#introCarousel" data-mdb-slide-to="4"></li>
      </ol>
      <!-- Inner -->
      <div class="carousel-inner">
        <div class="carousel-item active">
          <video style="min-width: 100%; height: 800px" playsinline autoplay muted loop>
            <source
              class="h-100"
              src="https://gemajagat.s3.ap-southeast-2.amazonaws.com/Raindrops_Videvo.mp4"
              type="video/mp4"
              v-if="weather == Rain"
            />
            <source
              class="h-100"
              src="https://gemajagat.s3.ap-southeast-2.amazonaws.com/mixkit-blue-sky-background-as-the-clouds-travel-blown-by-the-26108-medium.mp4"
              type="video/mp4"
              v-else
            />
          </video>
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.4)">
            <div class="d-flex justify-content-center align-items-center h-100">
              <div class="text-white text-center">
                <h1 class="me-3">The Day Will Be {{ weather }}</h1>
                <h4 class="me-3 mt-5">Download detail for this mountain</h4>
                <a href="">
                  <i
                    @click.prevent="generatePdf"
                    class="far fa-file-pdf fa-8x pt-1"
                    style="color: white"
                  ></i>
                </a>
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
                  v-if="center.lat"
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

        <div class="carousel-item" v-for="poscamp in pos" :key="poscamp.id">
          <div class="mask" style="background-color: rgba(0, 0, 0, 0.8)">
            <div class="d-flex justify-content-center h-100 pt-5 mt-5">
              <div class="text-white text-center">
                <h1 class="mb-3">{{ poscamp.posName }}</h1>
                <h6 class="pt-4">--- Ketinggian {{ poscamp.posMdpl }} mdpl ---</h6>
                <h6>--- Waktu Tempuh {{ poscamp.time }} ---</h6>
                <h6 class="pt-4">--- Description ---</h6>
                <p style="width: 70%; margin-left: 15%">
                  {{ poscamp.posDescription }}
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
import pdfMake from 'pdfmake/build/pdfmake'
import pdfFonts from 'pdfmake/build/vfs_fonts'
pdfMake.vfs = pdfFonts.pdfMake.vfs
import { mapState } from 'pinia'
import { useIndexStore } from '../stores'
import { GoogleMap, Marker } from 'vue3-google-map'
export default {
  name: 'ResultView',
  // eslint-disable-next-line vue/no-reserved-component-names
  components: { GoogleMap, Marker },

  computed: {
    ...mapState(useIndexStore, ['mountain', 'pos', 'weather', 'center'])
  },
  methods: {
    generatePdf() {
      var docDefinition = {
        content: [
          {
            stack: [
              `${this.mountain.name}`,
              { text: `${this.mountain.location}`, style: 'subheader' }
            ],
            style: 'header'
          },
          {
            stack: [
              {
                fontSize: 15,
                text: [
                  'Currently margins for ',
                  /* the following margin definition doesn't change anything */
                  { text: 'inlines', margin: 20 },
                  ' are ignored\n\n'
                ]
              },
              `${this.mountain.description}`
            ],
            margin: [0, 20, 0, 0],
            alignment: 'justify'
          }
        ]

        //  `${this.pos}`
      }
      pdfMake.createPdf(docDefinition).download()
    }
  },
  created() {
    localStorage.clear()
    console.log(this.mountain)
    console.log(this.pos)
    console.log(this.weather)
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
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');
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
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/78.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(5) {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/76.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(6) {
  background-image: url('https://mdbootstrap.com/img/Photos/Others/images/77.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.carousel-item:nth-child(7) {
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
