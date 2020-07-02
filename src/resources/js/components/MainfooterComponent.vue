<template>
  
  <div>
    <footer class="container py-5">
  <div class="row">
    <div class="col-12 col-md-12">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="d-block mb-2" role="img" viewBox="0 0 24 24" focusable="false"><title>Product</title><circle cx="12" cy="12" r="10"/><path d="M14.31 8l5.74 9.94M9.69 8h11.48M7.38 12l5.74-9.94M9.69 16L3.95 6.06M14.31 16H2.83m13.79-4l-5.74 9.94"/></svg> -->
       <img src="./images/hollapro logo 2.png" alt="" srcset="" width="150.21px">
      <small class="d-block mb-5 text-muted"><u>Visit help center</u></small>
    </div>
    
  <div class="row justify-content-center">
    <div class="col-6 col-md">
      <h5>Company</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">About Us</a></li>
        <li><a class="text-muted" href="#">Our Partners</a></li>
        <li><a class="text-muted" href="#">FAQ</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Products</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">User App</a></li>
        <li><a class="text-muted" href="#">Professional App</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Legal</h5>
      <ul class="list-unstyled text-small">
        <li><a class="text-muted" href="#">Terms and Condition</a></li>
        <li><a class="text-muted" href="#">Privacy and Policy</a></li>
      </ul>
    </div>
    <div class="col-6 col-md">
      <h5>Contact Us</h5>
      <ul class="list-unstyled text-small">
        <li style="width: 250px;"><a class="text-muted" href="#">12, Landbridge Ave, OniruVI, Lagos</a></li>
        <li><a class="text-muted" href="#">Info@hollapro.com</a></li>
        <li style="width: 250px;"><a class="text-muted" href="#">+234(0)80 6767 8765</a></li>
      </ul>
    </div>
     <div class="col-6 col-md" style="padding-left: 10em">
      <h5>App</h5>
      <ul class="list-unstyled text-small">
        <li><img src="./images/android.png" alt="" srcset="" class="mb-4"></li>
        <li><a class="text-muted" href="#"></a></li>
        <li><img src="./images/apple.png" alt="" srcset=""></li>
        <!-- <li><a class="text-muted" href="#">Terms</a></li> -->
      </ul>
    </div>
     <hr id="hr1" class="col-12" style="margin-top: 0em;">
  </div>
 <!-- <hr id="hr1" class="col-12 col-md-7"> -->
  <div class="row justify-content-center" style="margin-top: 0em">
    <div class="col-6 col-md">
          <h5>Social Links</h5>
    </div>
    <div class="col-6 col-md mr-5" style="width: 60px;">
      <div style="margin-left: 0em;">
          <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
      </div>
          
    </div>
    <div class="col-6 col-md" style="margin-left: 20em;width: 400px" >
         <div class="nav-item dropdown" id="selectcountry" style="margin-top: 0px;">
           <div style="margin-top: -10px;">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                
                 <img src="./images/nigeria.png" alt="" srcset="" style="width: 55.21px;height: 50px;" >
                Nigeria
                 <i class="fa fa-chevron-circle-down"></i>
              </a>
              </div>
              <!-- <div class="dropdown-menu " aria-labelledby="navbarDropdown" >
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div> -->
            </div>       
    </div>
     <hr id="hr1" class="col-12 col-md" style="margin-top: 60px;margin-left: 100px;width: 790px">
  </div>
  <div class="row justify-content-center" style="margin-top: 20px">
     <div class="col-6 col-md" style="margin-right: 280px">
      <img src="./images/hollapro logo 2.png" alt="" srcset="" width="150.21px">

       <p class="card-text" style="width: 400px;margin-left: 160px;margin-top: -40px"  >Copyrights &copy; 2020 HollaPro rights reserved</p>
       <!-- <p>2020 HollaPro rights reserved</p> -->
     </div>
  </div>
  </div>
</footer>

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


.container {
  height: 524px;
  max-width: 960px;
  background: #24333D;
}
.flex-equal > * {
  -ms-flex: 1;
  flex: 1;
}
@media (min-width: 768px) {
  .flex-md-equal > * {
    -ms-flex: 1;
    flex: 1;
  }
}

.overflow-hidden { overflow: hidden; }


#hr1{
    /* margin-top: 295px; */

  border: 1px solid #818A91;
}
#selectcountry{
    /* position: absolute; */
    /* width: 203px; */
    /* height: 46px; */
    /* left: 185px; */
    /* top: 1865px; */
    /* margin: 310px 10px 10px 0px; */
    /* margin-top: 100px; */

    background: #33444F;
    border: 1px solid #818A90;
    box-sizing: border-box;
    border-radius: 6px;
  

}

</style>
