<template>
  
  <div>
  <header-component></header-component>

<main role="main">

  <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron contact"> 
    <div class="paragraph-heading">
      <h1 class="contact-jumbotron-header">Contact Us</h1>
      <p class="contact-jumbotron-body">We strive to provide the best service possible with every contact. Get in touch with our team of customer support.</p>
    </div>
  </div>

   <section class="section-why">
    
    <div class="paragraph-heading">
          <h3 class="professional-header">HollaPro Contact</h3>
          <p class="professional-paragraph">We are here to serve you and our line is open 24/7  </p> 
     </div>
    <div class="container">
      <div class="row">
          <div class="col-sm contact-us-box">
             <img src="../images/onlineicon.png" class="contact-icon" />
             <div class="contact-text">
              <h4 id="contact-header-1">ONLINE SERVICE</h4>
              <h1 id="contact-paragraph-1">Info@HollaPro.com</h1>
              </div>
              <!-- <strong><br style="clear: both;" /></strong> -->
          </div>
            <div class="col-sm contact-us-box">
              <img src="../images/sociamediaicon.png" class="contact-icon"/>
              <div class="contact-text">
              <h4 id="contact-header-1">SOCIAL MEDIA</h4>
              <div>
                <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
                <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
                <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
                <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
              </div>
              </div>
            </div>
      </div>
        <div class="row">
            <div class="col-sm contact-us-box">
              <img src="../images/phoneicon.png" class="contact-icon" />
              <div class="contact-text">
                <h4 id="contact-header-1">PHONE NUMBER</h4>
              <h1 id="contact-paragraph-1">W+234(0)80 6767 8765</h1>
              <h1 id="contact-paragraph-1">W+234(0)80 6767 8765</h1>
              </div>
        <!-- <strong><br style="clear: both;" /></strong> -->
            </div>
            <div class="col-sm contact-us-box">
              <img class="contact-icon" src="../images/customersecurityicon.png" />
              <div class="contact-text">
                <h4 id="contact-header-1">Customer Seccurity</h4>
                <h1 id="contact-paragraph-1">If you have security conserns, please report your isseues with HollaPro at Seccurity@hollapro.com</h1>
              </div>
        <!-- <strong><br style="clear: both;" /></strong> -->
            </div>
          </div>
          <div class="row">
            <div class="col-sm contact-us-box">
              <img class="contact-icon" src="../images/addressicon.png"  />
              <div class="contact-text">
                <h4 id="contact-header-1">ADDRESS</h4>
                <h1 id="contact-paragraph-1">12, Landbridge Ave, Oniru VI, Lagos</h1>
              </div>
        <!-- <strong><br style="clear: both;" ></strong> -->
            </div>
            <div class="col-sm contact-us-box">
              
            </div>
         </div>

         <div class="row mt-5 mb-5">
          <div class="col-sm contact-us-box">
            <div class="mapouter">
              <div class="gmap_canvas">
              <iframe width="600" height="500" id="gmap_canvas" 
              src="https://maps.google.com/maps?q=58%20awolowo%20road%20ikoyi&t=&z=13&ie=UTF8&iwloc=&output=embed" 
              frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
              style="float: left; margin: 0px 15px 15px 0px;">
              </iframe>
              <strong><br style="clear: both;" /></strong>
              <a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">nord vpn deal</a>
             </div>
            </div>
          </div>
         </div>
      </div>
      
       
  </section>



</main>

<mainfooter-component></mainfooter-component>
  </div>

</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>
<style scoped>
.contact{
    width: 1440px;
    height: 229.69px;
    background-image: linear-gradient(180deg, #102533 0%, rgba(9, 42, 64, 0) 100%), url('../images/about-us-background.jpg');
    
}

.contact-jumbotron-header{

  font-size: 46px;
  line-height: 74px;
  text-align:center;
  color: #FFFFFF;

}
.contact-jumbotron-body{
  width: 685px;
  height: 58px;
  text-align: center;
  font-weight: 500;
  font-size: 18px;
  line-height: 29px;
  margin: 0 377px;
  color: #FFFFFF;

}
.contact-icon{
  height:40px;
  width: 40px;
  float: left;
}
.contact-text{
  margin-left: 60px;
}
#contact-us {
  /* position: absolute;
  width: 100%;
  height: 400px; */
  height: 100%;
   min-height: 400px;

/* background-image: url("../images/contactimage2.jpg"); */
  background-size: cover;
  background: #092334;
  opacity: 0.8;
 
}

#contact-header{
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 34px;
  line-height: 34px;

  color: #323F47;
}
#contact-paragraph{
  
  font-size: 18px;
   line-height: 29px;
  /*padding: 5px 10px 10px 0px; */

  /* identical to box height */

  color: #6D6D6D;
}
#contact-header-1{
  /* font-family: Hind;
font-style: normal; */
font-weight: 600;
font-size: 18px;
line-height: 29px;

/* identical to box height */

color: #323F47;

}
#contact-paragraph-1{
  /* font-family: Hind;
font-style: normal; */
font-weight: 500;
font-size: 15px;
line-height: 24px;

/* identical to box height */

color: #686868;


}
.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}


</style>
