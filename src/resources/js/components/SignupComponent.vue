<template>
    <div>
        <header>
            <!-- Fixed navbar -->
            <header-component></header-component>
        </header>
        
         <!-- Begin page content -->
        <main role="main" class="signupcontainer">
               <big-logo></big-logo>   
                <div class="row" >
                    <div class="card" id="signupcard">
                            <div class="card-body">
                                 <h5 class="card-title" id="signup-title">Sign Up</h5>
                                <h6 class="card-subtitle" id="signup-sub">Sign up with your social network</h6>
                               <social-login></social-login>

                                <form>
                                    <div class="form-group">
                                        <label id="name">Enter Full name</label>
                                        <input type="text" class="form-control" id="nameinput" placeholder="Enter Full Name">
                                    </div>
                                    <div class="form-group">
                                        <label id="phone">PhoneNumber</label>
                                        <input type="tel" id="phoneinput" class="form-control" placeholder="+234">
                                    </div>
                                    <div class="form-group form-check">
                                        <input type="checkbox" class="form-check-input" id="check">
                                        <label class="form-check-label" id="policy">
                                            I have read and accept the 
                                            <a>Terms of Service</a> and 
                                            <a>Privacy Policy</a>
                                        </label>
                                    </div>
                                    <button type="submit" id="register" class="btn btn-primary">Get Started</button>
                                        <forgot-password></forgot-password>

                                </form>
                            </div>
                        </div>

                </div>
        </main>
           
          

        <footer-main></footer-main>
           

            
             
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
.signupcontainer{
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(125.42deg, #4DA4DE 0%, #025388 100%);


}


#signupcard{
    position: absolute;
    width: 600px;
    height: 515px;
    left: 420px;
    top: 170px;

    background: #FFFFFF;
    border-radius: 10px;
}
#signup-title{
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
#signup-sub{
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

#name{
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
#nameinput{
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

#phone{
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
#phoneinput{
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
#register{
    position: absolute;
     width: 88.14%;
    height: 6.2%;
    left: 6.24%;
    right: 6.24%;
    top: 81.16%;
    bottom: 26.95%;

    background: #0071BC;
    border: 1px solid #D7E2E4;
    box-sizing: border-box;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
}


#check{
    position: absolute;
width: 24px;
height: 24px;
left: 39px;
top: 339px;

background: #FFFFFF;
border: 1px solid #999999;
box-sizing: border-box;
box-shadow: inset 0px 4px 8px rgba(0, 0, 0, 0.05);
border-radius: 5px;
}
#policy{
    position: absolute;
    width: 380px;
height: 24px;
left: 8.65%;
/* right: 37.22%; */
top: 345px;

font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 15px;
line-height: 24px;

/* identical to box height */

color: #959D9E;


}
    
</style>
