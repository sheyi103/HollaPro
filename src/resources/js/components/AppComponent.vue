<template>
  
  <div> 
    <section class="section-book">
    <!-- <div class="container"> -->
    <div class="row booking-overflow">
      <div class="col-sm book-box">
          <h3 class="professional-header">Book for a professional Now</h3>
            <p class="professional-paragraph">Download the app for exclusive deals and ease of booking</p> 
           <a href="#" class="btn-app"><img src="./images/download-app.svg" alt="App Store Button"></a>
           <a href="#" class="btn-app"><img src="./images/download-app-android.png" alt="Play Store Button"></a>
      </div>
      <div class="col-sm book-box">
         <img src="./images/mobileicon.png" alt="HollaPro App on Android" class="app-screen">
          
           <div class="clearfix"></div>
      </div>
    </div>
    <!-- </div> -->
   
  </section>
   <div class="buttom-overflow">
        <div class="row">
          <div class="col-sm d-flex justify-content-around pt-2">
            <div class="buttom-overflow-box">
              <img src="./images/safety.png" alt="safety" class="buttom-icon">
              <div>  
                 <h5>Your Safety First</h5>
                 <p>At HollaPro Customer safety is our top Priority</p>   
              </div>
            </div>
          </div>
          <div class="col-sm d-flex justify-content-around pt-2" >
            <div class="buttom-overflow-box">
             <img src="./images/24:7-cus.png" alt="safety" class="buttom-icon">
             <div>
                 <h5>24/7 Customer support</h5>
                 <p>A dedicated customer support team always at your serviec to help solve any problem.</p> 
              </div>
            </div>     
          </div>
          <div class="col-sm d-flex justify-content-around pt-2">
            <div class="buttom-overflow-box">
             <img src="./images/Top-rated.png" alt="safety" class="buttom-icon">
             <div>
                <h5>Top Rated Professionals</h5>
                 <p>All our Artisans and Professionals are background verified and trained to deliver only the best experience</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
