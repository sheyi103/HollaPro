<template>
    <div>
         <section class="section-signup">
          <div class="container">
              <div class="row">
               <img src="../images/hollapro logo 2.png" alt="HollaPro logo" class="signup-logo" />
               <p>Registering to this platform, you accept our <a href="#"><u>Terms of Use</u></a> and <a href="#"><u>Privacy Policy</u></a></p>
              </div>
              <div class="row">
                <div class="col-sm">
                  <div class="signup-box">
                    <div class="signup-text">
                      <h3 class="signup-header">Log In</h3>
                      <p class="signup-body">Login with your social network</p>
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
                            <label for="email">Email/Phonenumber</label>
                            </div>
                            <input type="email" v-model="form.email"  class="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter Email or Phonenumber">
                          </div>
                          <div class="signup-form-group">
                            <div>
                              <label for="password">Password</label>
                            </div>
                            <input type="password" v-model="form.email" class="form-control" id="password">
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

      <!-- <footer-component></footer-component>        -->
    </div>

</template>

<script>
import PasswordLink from "../Authorization/PasswordLink"
    export default {
        data(){
            return {
                form :{
                    email:"",
                    password:""
                }
            }
        },
        methods: {
            login(){
                User.login(this.form)
            }
            
        },
        mounted() {
            console.log('Component mounted.')
        },
        components:{
            PasswordLink: PasswordLink,
        }
    }
</script>
<style scoped>

</style>
