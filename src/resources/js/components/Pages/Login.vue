<template>
    <div>
        <header>
            <!-- Fixed navbar -->
            <header-component></header-component>
        </header>
        
         <!-- Begin page content -->
        <main role="main" class="logincontainer">
               <big-logo></big-logo>    
                <div class="row" >
                    <div class="card" id="logincard">
                            <div class="card-body">
                                 <p class="card-title" id="login-title">Log In</p>
                                <p class="card-subtitle" id="login_sub">Log in with your social network</p>
                                <social-login></social-login>

                                <form>
                                    <div class="form-group">
                                        <label id="email">Email/PhoneNumber</label>
                                        <input type="email" class="form-control" id="emailinput" placeholder="Enter email">
                                    </div>
                                    <div class="form-group">
                                        <label id="password">Password</label>
                                        <input type="password" id="passwordinput" class="form-control" placeholder="Password">
                                    </div>
                                
                                    <button type="submit" id="submit" class="btn btn-primary">Login</button>
                                      <div class="row justify-content-between">
                                            <router-link :to="{name: 'signup'}" class="col-4" id="signuplink">
                                            Not a member? Signup
                                            </router-link>
                                            <router-link class="col-4" id="forgetpasswordlink" :to="{name: 'forgetpassword'}">
                                            Forgot my Password
                                            </router-link>
                                        </div>

                                </form>
                            </div>
                        </div>

                </div>
        </main>
           
           

         <footer-component></footer-component>
           

            
             
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
.logincontainer{
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(125.42deg, #4DA4DE 0%, #025388 100%);


}


#logincard{
    position: absolute;
    width: 600px;
    height: 515px;
    left: 420px;
    top: 170px;

    background: #FFFFFF;
    border-radius: 10px;
}
#login-title{
    position: absolute;
    width: 89px;
    height: 38px;
    left: 250px;
    top: 22px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    text-align: center;

    color: #1F262C;
}
#login_sub{
    position: absolute;
    width: 257px;
    height: 29px;
    left: 180px;
    top: 62px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;

    /* identical to box height */

    color: #636E78;


}



#email{
    position: absolute;
    width: 150px;
    height: 26px;
    left: 39px;
    /* right: 82.57%; */
    top: 220px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    /* identical to box height */

    color: #3C5A6D;
}
#emailinput{
    position: absolute;
    width: 88.14%;
    height: 6.2%;
    left: 6.24%;
    right: 6.24%;
    top: 48.8%;
    bottom: 45.31%;

    background: #FFFFFF;
    border: 1px solid #0082C5;
    box-sizing: border-box;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
}

#password{
   position: absolute;
    width: 150px;
    height: 26px;
    left: 39px;
    /* right: 82.57%; */
    top: 300px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    /* identical to box height */

    color: #3C5A6D;
}
#passwordinput{
    position: absolute;
    width: 88.14%;
    height: 6.2%;
    left: 6.24%;
    right: 6.24%;
    top: 64.96%;
    bottom: 35.16%;

    background: #FFFFFF;
    border: 1px solid #D7E2E4;
    box-sizing: border-box;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
}
#submit{
    position: absolute;
     width: 88.14%;
    height: 6.2%;
    left: 6.24%;
    right: 6.24%;
    top: 76.16%;
    bottom: 26.95%;

    background: #0071BC;
    border: 1px solid #D7E2E4;
    box-sizing: border-box;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
}
#signuplink{
    position: absolute;
height: 24px;
left: 6.2%;
right: 6.24%;
top: 87%;

font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;

/* identical to box height */

color: #439CD7;
}

#forgetpasswordlink{
    position: absolute;
height: 24px;
left: 58.75%;
right: 31.94%;
top: 87%;

font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;

/* identical to box height */
text-align: right;

color: #439CD7;


}

    
</style>
