<template>
    <div>
        <header>
            <!-- Fixed navbar -->
            <header-component></header-component>
        </header>
        <div id="bodycontainer">
              <form class="form-signin">
                    <div class="text-center mt-3">
                        <img class="mb-4 mt-2" src="../images/hollapro logo 2.png" alt="" width="153px" height="50px">
                        <div class="card" id="signupcard">
                        <h1 class="h3 mt-2 font-weight-normal" id="header-paragraph">Sign Up</h1>
                        <p id="paragraph">Sign up with your social network</p>
                        <div class="row justify-content-center" style="padding-bottom: 75px;">
                            <div class="col-5" id="google">
                              <img src="../images/googleicon.png" class="pt-2 ml-5" style="float: left" alt="" >
                                        <p class="pt-2">Google</p>
                            </div>
                            <div class="col-5 mr-4" id="facebook" >
                              <img src="../images/facebookicon.png" class="text-center pt-2"   alt="" >
                            </div>
                        </div>
                      
                        <div class="row justify-content-center mb-2">
                            <div class="col-5">
                            <hr id="line">
                            </div>
                            <!-- <div class="col-4"> -->
                              <p>or</p> 
                            <!-- </div> -->
                            <div class="col-5">
                            <hr id="line">
                            </div>
                        </div>
                        <!-- <social-login></social-login> -->
                        <!-- <p>Build form controls with floating labels via the <code>:placeholder-shown</code> pseudo-element. <a href="https://caniuse.com/#feat=css-placeholder-shown">Works in latest Chrome, Safari, and Firefox.</a></p> -->
                  
                        <ThirdRegistrationPage></ThirdRegistrationPage>
                            <div class="row text-left pt-2">
                                <div class="col-10 pb-2 ml-5" style="width: 60px;">
                                <!-- <a href="" class="">Already on hollaPro? Login</a> -->
                                <login-link></login-link>
                                </div>
                            </div>
                    </div>
                    </div>
              </form>

                  <footer class="footer mt-auto py-3">
                  <div class="footercontainer">
                            <img src="../images/hollapro logo 2.png" alt="" srcset="" id="footerlogo">
                            <p class="card-text" id="copyright">Copyrights &copy;</p>
                            <p id="reserved">2020 HollaPro rights reserved</p>
                        </div>
                  </footer>
             

        </div>
               
             
       </div>

</template>

<script>
import FooterComponent from "../Authorization/AuthFooter"
import FirstRegistrationPage from "../Authorization/register1"
import SecondRegistrationPage from "../Authorization/register2"
import ThirdRegistrationPage from "../Authorization/register3"
import PasswordLink from "../Authorization/PasswordLink"
import LoginLink from "../Authorization/LoginLink"

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        components :{
            FooterComponent : FooterComponent,
            FirstRegistrationPage: FirstRegistrationPage,
            SecondRegistrationPage: SecondRegistrationPage,
            ThirdRegistrationPage: ThirdRegistrationPage,
            PasswordLink: PasswordLink,
            LoginLink: LoginLink
        }
    }
</script>
<style>


.footercontainer {
  width: auto;
  max-width: 680px;
  padding: 0 15px;
}

.footer {
  background-color: #f5f5f5;
}

#bodycontainer{
    display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  padding-top: 40px;
  padding-bottom: 40px;
  /* height: 100%; */
  background: linear-gradient(125.42deg, #4DA4DE 0%, #025388 100%);
}
.form-signin {
  width: 100%;
  /* max-width: 450px; */
  /* height: 100%; */
  /* height: 200px; */
  /* padding: 15px; */
  margin: auto;
}

#signupcard{
    /* position: absolute; */
/* width: 440px;
height: 469px; */
/* left: 420px;
top: 202px; */
  height: 40%;


background: #FFFFFF;
border-radius: 10px;
}

#google{
background: #F6F7FB;
border: 1px solid #EAEAED;
box-sizing: border-box;
box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.02);
border-radius: 8px;

}
#facebook{
    background: #415A94;
border-radius: 5px;
}
#line{
    border: 1px solid #8AB6D2;
}

.form-label-group {
  position: relative;
  margin-bottom: 1rem;
}

.form-label-group > input,
.form-label-group > label {
  background: #FFFFFF;
border: 1px solid #0082C5;
box-sizing: border-box;
box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
border-radius: 7px;
}

.form-label-group > label {
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100%;
  margin-bottom: 0; /* Override default `<label>` margin */
  line-height: 1.5;
  color: #495057;
  pointer-events: none;
  cursor: text; /* Match the input under the label */
  border: 1px solid transparent;
  border-radius: .25rem;
  transition: all .1s ease-in-out;
}

.form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
}

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input::-ms-input-placeholder {
    color: #777;
  }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
  .form-label-group > label {
    display: none;
  }
  .form-label-group input:-ms-input-placeholder {
    color: #777;
  }
}
#header-paragraph{
    font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 24px;
line-height: 38px;
text-align: center;

color: #1F262C;
}
#paragraph{
    font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 29px;

/* identical to box height */

color: #636E78;
}

    
</style>
