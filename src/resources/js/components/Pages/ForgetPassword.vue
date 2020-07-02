<template>
    <div>
        <header>
            <!-- Fixed navbar -->
            <header-component></header-component>
        </header>
        
         <!-- Begin page content -->
         <div id="bodycontainer">
              <form class="form-signin">
                    <div class="text-center mt-3">
                        <img class="mb-4 mt-2" src="../images/hollapro logo 2.png" alt="" width="153px" height="50px">
                        <div class="card" id="signupcard">
                        <h1 class="h3 mt-2 font-weight-normal" id="header-paragraph">Forget Password</h1>
                        <p id="paragraph">Kindly enter your email so password reset can be send to you </p>
                      
                        <div class="row mt-4">
                            <div class="col-10 ml-5">
                                <label style="float: left" id="label-text">Enter Email</label>
                                <div class="form-label-group">
                                    <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                                                    
                                </div>
                            </div>
                           
                            <div class="col-10 ml-5">
                                <button class="btn btn-lg btn-primary btn-block" type="submit">Continue</button>
                            </div>
                            
                        </div>
                            <div class="row text-left pt-2">
                                <div class="col-10 pb-2 ml-5" style="width: 60px;">
                                <login-link></login-link>
                                </div>
                            </div>
                    </div>
                    </div>
              </form>

                <footer class="footer mt-auto py-3">
                  <FooterComponent></FooterComponent>
                </footer>

        </div>          
             
    </div>

</template>

<script>
import FooterComponent from "../Authorization/AuthFooter"
import LoginLink from "../Authorization/LoginLink"

    export default {
        mounted() {
            console.log('Component mounted.')
        },
         components:{
            
            FooterComponent: FooterComponent,
            LoginLink: LoginLink
        }
    }
</script>
<style scoped>

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
  padding-bottom: 22%;
  /* height: 100%; */
  background: linear-gradient(125.42deg, #4DA4DE 0%, #025388 100%);
}
.form-signin {
  width: 100%;
  /* max-width: 550px; */
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
  height: 50%;


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
