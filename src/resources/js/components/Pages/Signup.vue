<template>
    <div>
        <section class="section-signup">
          <div class="container">
              <div class="row">
               <img src="../images/hollapro logo 2.png" alt="HollaPro logo" class="signup-logo" />
              </div>
              <div class="row">
                <div class="col-sm">
                  <div class="signup-box">
                    <div class="signup-text">
                      <h3 class="signup-header">Sign up</h3>
                      <p class="signup-body">Sign up with your social network</p>
                    </div>
                    <div class="social-btn-box">
                        <a class="btn btn-google" href="#"><img src="../images/googleicon.png" alt="google icon" class="googleicon"> Google</a>
                        <a class="btn btn-facebook" href="#"> <i class="fa fa-facebook fa-lg facebookicon" aria-hidden="true"></i>
                        <span class="facebookicon-text">Facebook</span></a>
                    </div>
                      <div class="group-form">
                        <form method="post" action="#">
                          <div class="signup-form-group">
                            <div>
                            <label for="exampleInputEmail1">Enter Full name</label>
                            </div>
                            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Full name">
                          </div>
                          <div class="signup-form-group">
                            <div>
                              <label for="exampleInputPassword1">Password</label>
                            </div>
                            <input type="password" class="form-control" id="exampleInputPassword1">
                          </div>
                          <div class="signup-form-group form-check">
                            <input type="checkbox" class="form-check-input" id="exampleCheck1">
                            <label class="form-check-label" for="exampleCheck1">I have read and accept the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a></label>
                          </div>
                          <div class="signup-form-group">
                            <button type="submit" class="btn btn-submit">Submit</button>
                          </div>
                          <div class="signup-form-group">
                            <a href="#">Already on HollaPro&#63; Login</a>
                          </div>
                        </form>
                      </div>
                  </div>
                </div>
              </div>
          </div> 
        </section>  

      <footer-component></footer-component>
       </div>

</template>

<script>
// import FooterComponent from "../Authorization/AuthFooter"
// import FirstRegistrationPage from "../Authorization/register1"
// import SecondRegistrationPage from "../Authorization/register2"
// import ThirdRegistrationPage from "../Authorization/register3"
// import PasswordLink from "../Authorization/PasswordLink"
// import LoginLink from "../Authorization/LoginLink"

    export default {
        mounted() {
            console.log('Component mounted.')
        },
        // components :{
        //     FooterComponent : FooterComponent,
        //     FirstRegistrationPage: FirstRegistrationPage,
        //     SecondRegistrationPage: SecondRegistrationPage,
        //     ThirdRegistrationPage: ThirdRegistrationPage,
        //     PasswordLink: PasswordLink,
        //     LoginLink: LoginLink
        // }
    }
</script>


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
