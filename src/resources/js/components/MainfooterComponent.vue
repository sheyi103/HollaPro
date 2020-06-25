<template>
  
  <div>
<footer class="footcontainer">
  <div class="row">
      <div class="col-2 offset-1">
        <img src="./images/hollapro logo 2.png" alt="" srcset="" id="mainfooterlogo">
      </div>
      <!-- <div class="col-2">col</div>
      <div class="col-2">col</div>
      <div class="col-2">col</div>
      <div class="col-2">col</div>
      <div class="col-2">col</div> -->
  </div>
  <div class="row">
    <div class="col-2 offset-1">
       <a class="text" href="#" id="helpcenter">Visit Help Center</a>
    </div>
    <!-- <div class="col-2">col</div>
    <div class="col-2">col</div>
    <div class="col-2">col</div>
    <div class="col-2">col</div>
    <div class="col-2">col</div> -->
  </div>
  <div class="row">
    <div class="col-2 offset-1">
       <a href="#" id="companylink" >Company</a>
       <a href="#" id="aboutuslink" >About Us</a>
       <a href="#" id="partnerslink">Our Partners</a>
       <a href="#" id="faqlink">FAQ</a>
    </div>
    <div class="col-2">
      <a href="#" id="productlink">Products</a>
      <a href="#" id="userapplink">User App</a>
      <a href="#" id="professionallink">Professional App</a>
    </div>
    <div class="col-2">
      <a href="#" id="legallink">Legal</a>
      <a href="#" id="termslink">Terms and Conditions</a>
      <a href="#" id="privacylink">Privacy and Policy</a>
    </div>
    <div class="col-2">
      <p href="#" id="contactuslink">Contact Us</p>
      <p href="#" class="text-wrap" id="addresslink">12, Landbridge Ave, Oniru VI, Lagos</p>
      <p href="#" id="emaillink">Info@hollapro.com</p>
      <p href="#" id="phonelink">+234(0)80 6767 8765</p>
      </div>
    <div class="col-3">
      <a href="#" id="applink">Mobile App</a>
      <a href="#">
        <img src="./images/playstore.png" alt="" srcset="" id="playstore">
      </a>
      <a href="#">
        <img src="./images/appleicon.jpg" alt="" srcset="" id="applestore">
      </a>
    </div>
  
  </div>

      <hr id="hr1" class="col-10 offset-1">

    <div class="row">
      <div class="col-4 offset-1">
        <a href="#" id="socialheader">Social Links</a>
        <div id="socialicon">
          <i class="fa fa-facebook-official fa-2x" aria-hidden="true"></i>
          <i class="fa fa-twitter-square fa-2x" aria-hidden="true"></i>
          <i class="fa fa-instagram fa-2x" aria-hidden="true"></i>
          <i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
        </div>
      </div>
      <div class="col-4 offset-3">
        
           <div class="nav-item dropdown" id="selectcountry" >
              <a class="nav-link dropdown-toggle " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                 <img src="./images/nigeria.png" alt="" srcset="" id="nigeria">
                 <span id="nigeriatext">Nigeria</span>
                 <i class="fa fa-chevron-circle-down" id="nigeriadropdown"></i>
                
              </a>
              <div class="dropdown-menu " aria-labelledby="navbarDropdown" >
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </div>
        
        <!-- <a href="#" id="selectcountry">Select Country</a> -->
      </div>  
    </div>

      <hr id="hr2" class="col-10 offset-1">

    <div class="row">
      <div class="col-8 offset-1">
        <img src="./images/hollapro logo 2.png" alt="" srcset="" id="mainfooterlogo_2">
          <p class="card-text" id="maincopyright">Copyrights</p>
          <p id="maincopyrightvector">&copy</p>
          <p id="mainreserved">2020 HollaPro rights reserved</p>
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
<style>


.footcontainer{
  position: absolute;
  width: 100%;
  height: 450px;
  /* line-height: 90px; */
  background: #24333D;
}
#mainfooterlogo{
  position: absolute;
  width: 150.21px;
  /* height: 57px; */
  padding: 25px 10px 10px 0px;

}
#helpcenter{
    position: absolute;
  color:#fff;
  line-height: 29px;
  padding: 90px 10px 10px 0px;
}

#companylink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  padding: 135px 10px 10px 0px;

  /* identical to box height */
  /* display: flex;
  align-items: flex-end; */

  color: #FFFFFF;
}
#aboutuslink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
    padding: 175px 10px 10px 0px;


  /* identical to box height */

  color: #FFFFFF;
}
#partnerslink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 205px 10px 10px 0px;
  /* identical to box height */

  color: #FFFFFF;
}
#faqlink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 235px 10px 10px 0px;

  /* identical to box height */

  color: #FFFFFF;
}
#productlink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  padding: 135px 10px 10px 0px;

  /* identical to box height */


  color: #FFFFFF;
}
#userapplink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 175px 10px 10px 0px;
  /* identical to box height */

  color: #FFFFFF;
}
#professionallink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 205px 10px 10px 0px;

  /* identical to box height */

  color: #FFFFFF;
}
#legallink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  padding: 135px 10px 10px 0px;

  /* identical to box height */


  color: #FFFFFF;
}
#termslink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 175px 10px 10px 0px;
  /* identical to box height */

  color: #FFFFFF;
}
#privacylink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 205px 10px 10px 0px;

  /* identical to box height */

  color: #FFFFFF;
}
#contactuslink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  padding: 135px 10px 10px 0px;

  /* identical to box height */
  /* display: flex;
  align-items: flex-end; */

  color: #FFFFFF;
}
#addresslink{
  position: absolute;
  width: 300px;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
    padding: 175px 10px 10px 0px;


  /* identical to box height */

  color: #FFFFFF;

}
#emaillink{
   position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 205px 10px 10px 0px;
  /* identical to box height */

  color: #FFFFFF;

}
#phonelink{
  position: absolute;
  font-family: Hind;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 26px;
  padding: 235px 10px 10px 0px;

  /* identical to box height */

  color: #FFFFFF;
}
#applink{
  position: absolute;
  width: 190px;
  left: 140px;
  font-family: Hind;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 29px;
  padding: 135px 25px 25px 0px;

  /* identical to box height */
  /* display: flex;
  align-items: flex-end; */

  color: #FFFFFF;
}
#playstore{
  position: absolute;
   left: 140px;
   width: 150.21px;
    padding: 170px 25px 25px 0px;


  /* identical to box height */

  color: #FFFFFF;
}
#applestore{
   position: absolute;
    left: 140px;
  width: 150.21px;
  padding: 225px 25px 25px 0px;

  /* identical to box height */

  color: #FFFFFF;
}
#hr1{
  position: absolute;
  /* width: 1101px; */
  /* height: 0px; */
  /* left: 170px;
  top: 1847px; */
    /* padding-top: 290px; */
    margin-top: 295px;

  border: 1px solid #818A91;
}
#socialheader{
    position: absolute;
    font-family: Hind;
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 29px;
    margin: 320px 10px 10px 0px;

    /* identical to box height */
    /* display: flex;
    align-items: flex-end; */

    color: #ffff;
}
#socialicon{
  position: absolute;
  width: 550px;
  color: #fff;
  left: 135px;
  margin: 317px 10px 10px 0px;
}
#socialicon2{
  position: absolute;
  width: 550px;
  color:cornflowerblue;
  /* left: 135px; */
  /* margin: 317px 10px 10px 0px; */
}
#selectcountry{
    position: absolute;
    width: 203px;
    height: 46px;
    left: 185px;
    /* top: 1865px; */
    margin: 310px 10px 10px 0px;

    background: #33444F;
    border: 1px solid #818A90;
    box-sizing: border-box;
    border-radius: 6px;
  

}
#nigeria{
  position: absolute;
  width: 55.21px;
  height: 50px;
  /* height: 57px; */
  margin: -11px 10px 10px 0px;

}
#nigeriatext{
  position: absolute;
  /* width: 55.21px; */
  font-family: Hind;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 49px;


  color: #FFFFFF;


  left: 85px;
  height: 50px;
  /* height: 57px; */
  margin: -10px 10px 10px 0px;
}
#nigeriadropdown{
   position: absolute;
  width: 55.21px;
  height: 50px;
  left: 170px;
  /* height: 57px; */
  color: #FFFFFF;
  margin: 8px 10px 10px 0px;
}
#hr2{
  position: absolute;
  /* width: 1101px; */
  /* height: 0px; */
  /* left: 170px;
  top: 1847px; */
    /* padding-top: 290px; */
  margin-top: 365px;

  border: 1px solid #818A91;
}
#maincopyright{
  position: absolute;
  left: 185px;
  font-family: Hind;
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  line-height: 29px;
  color: #D9E4EC;
  margin: 395px 10px 10px 0px;

}
#maincopyrightvector{
  position: absolute;
  left: 270px;
  font-family: Hind;
  font-style: normal;
  font-weight: 200;
  font-size: 18px;
  line-height: 29px;
  color: #D9E4EC;
  margin: 399px 10px 10px 0px;
}
#mainfooterlogo_2{
  position: absolute;
  width: 150.21px;
  /* height: 57px; */
  
  padding: 390px 10px 10px 0px;

}
#mainreserved{
  position: absolute;
  left: 289px;
  font-family: Hind;
  font-style: normal;
  font-weight: 200;
  font-size: 15px;
  /* line-height: 29px; */

  padding: 399px 10px 10px 0px;
  color: #D9E4EC;


}


</style>
