<template>
  
  <div>
  <header-component></header-component>

<main role="main">

  <!-- Main jumbotron for a primary marketing message or call to action -->
  <div class="jumbotron jumbotron-fluid" id="contact-us"> 
    <div class="container">
      <h1 class="display-3 pt-5 text-center">Contact Us</h1>
      <p class="contact_p text-center text-wrap">We strive to provide the best service possible with every contact. Get in touch with our team of customer support.</p>
      <!-- <p><a class="btn btn-primary btn-lg" href="#" role="button">Learn more &raquo;</a></p> -->
    </div>
  </div>

  <div class="containerbody">
    <!-- Example row of columns -->
    <div class="row">
      <div class="col-md-6 offset-2">
        <h5 id="contact-header">HollaPro Contact</h5>
        <h2 id="contact-paragraph">We are here to serve you and our line is open 24/7</h2>
      </div>
      <!-- <div class="col-md-6">
        <h2>Heading</h2>
        <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
        <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
      </div> -->
    </div>

    <div class="row pt-5">
      <div class="col-md-4 offset-2">
         <img style="float: left; margin: 0px 5px 5px 0px;" src="../images/onlineicon.png" width="40" />
         <h4 id="contact-header-1">ONLINE SERVICE</h4>
         <h1 id="contact-paragraph-1">Info@HollaPro.com</h1>
        <strong><br style="clear: both;" /></strong>
      
      </div>
      <div class="col-md-4 offset-1">
        
          <img style="float: left; margin: 0px 5px 35px 0px;" src="../images/sociamediaicon.png" width="40" />
          <h4 id="contact-header-1">SOCIAL MEDIA</h4>
          <div class="pl-5" id="socialicon2">
             <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
            <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
            <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
            <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
          </div>
        <strong><br style="clear: both;" /></strong>
      
      </div>
    </div>

     <div class="row">
      <div class="col-md-4 offset-2">
          <img style="float: left; margin: 0px 5px 5px 0px;" src="../images/phoneicon.png" width="40" />
            <h4 id="contact-header-1">PHONE NUMBER</h4>
          <h1 id="contact-paragraph-1">W+234(0)80 6767 8765</h1>
          <h1 id="contact-paragraph-1" class="pl-5">W+234(0)80 6767 8765</h1>
        <strong><br style="clear: both;" /></strong>
      
      </div>
      <div class="col-md-4 offset-1">
          <img style="float: left; margin: 0px 5px 5px 0px;" src="../images/customersecurityicon.png" width="40" />
          <h4 id="contact-header-1">Customer Seccurity</h4>
          <h1 id="contact-paragraph-1" class="text-wrap pl-5">If you have security conserns, please report your isseues with HollaPro at Seccurity@hollapro.com</h1>
        <strong><br style="clear: both;" /></strong>
        
      </div>
    </div>

     <div class="row pb-5">
      <div class="col-md-6 offset-2">
        
          <img style="float: left; margin: 0px 15px 15px 0px;" src="../images/addressicon.png" width="40" />
        <h4 id="contact-header-1">ADDRESS</h4>
          <h1 id="contact-paragraph-1">12, Landbridge Ave, Oniru VI, Lagos</h1>
        <strong><br style="clear: both;" /></strong>
      
      
      </div>
     
    </div>

     <div class="row pb-5">
      <div class="col-md-6 offset-2">
        <div class="mapouter">
          <div class="gmap_canvas">
          <iframe width="600" height="500" id="gmap_canvas" 
          src="https://maps.google.com/maps?q=58%20awolowo%20road%20ikoyi&t=&z=13&ie=UTF8&iwloc=&output=embed" 
          frameborder="0" scrolling="no" marginheight="0" marginwidth="0"
          style="float: left; margin: 0px 15px 15px 0px;">
          </iframe>
           <strong><br style="clear: both;" /></strong>
          <a href="https://www.embedgooglemap.net/blog/nordvpn-coupon-code/">nord vpn deal</a>
        </div></div>
      </div>
     
    </div>

   
   

  </div> <!-- /container -->

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
<style>
.contact_p{
  /* position: absolute; */
  /* width: 885px; */
  font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;
/* align-items: center;

text-align: center; */

color: #FFFFFF;
}
.display-3{
  /* position: absolute; */
  font-family: Hind;
font-style: normal;
font-weight: bold;
font-size: 46px;
line-height: 74px;
/* display: flex; */
align-items: center;
text-align: center;

color: #FFFFFF;
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
  font-family: Hind;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
   line-height: 29px;
  /*padding: 5px 10px 10px 0px; */

  /* identical to box height */

  color: #6D6D6D;
}
#contact-header-1{
  font-family: Hind;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 29px;

/* identical to box height */

color: #323F47;

}
#contact-paragraph-1{
  font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;

/* identical to box height */

color: #686868;


}
.mapouter{position:relative;text-align:right;height:500px;width:600px;}
.gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}


</style>
