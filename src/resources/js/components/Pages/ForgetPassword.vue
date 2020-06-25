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
                    <div class="card" id="forgetpasswordcard">
                            <div class="card-body">
                                 <p class="card-title" id="forgetpassword-title">Forget Password</p>
                                <p class="card-subtitle" id="forgetpassword-sub">Kindly enter your email so that Password can be send to you</p>
                    

                                <form>
                                    <div class="form-group">
                                        <label id="forgetpasswordemail">Enter Email</label>
                                        <input type="text" class="form-control" id="forgetpasswordemailinput" placeholder="Enter Email">
                                    </div>
                                    <button type="submit" id="forgetpasswordbutton" class="btn btn-primary">Continue</button>
                                        <forgot-password></forgot-password>

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
.signupcontainer{
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(125.42deg, #4DA4DE 0%, #025388 100%);


}


#forgetpasswordcard{
    position: absolute;
    width: 600px;
    height: 318px;
    left: 420px;
    top: 170px;

    background: #FFFFFF;
    border-radius: 10px;
}
#forgetpassword-title{
    position: absolute;
    width: 300px;
    height: 38px;
    left: 150px;
    top: 22px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    text-align: center;

    color: #1F262C;
}
#forgetpassword-sub{
    position: absolute;
    width: 500px;
    height: 29px;
    left: 90px;
    top: 62px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;

    /* identical to box height */

    color: #636E78;


}

#forgetpasswordemail{
    position: absolute;
    width: 150px;
    height: 26px;
    left: 39px;
    /* right: 82.57%; */
    top: 120px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    /* identical to box height */

    color: #3C5A6D;
}
#forgetpasswordemailinput{
    /* position: absolute;
    width: 88.14%;
    height: 6.2%;
    left: 6.24%;
    right: 6.24%;
    top: 48.8%;
    bottom: 45.31%; */



position: absolute;
    width: 88.14%;
left: 6.24%;
right: 31.94%;
top: 47.01%;
bottom: 58.11%;

background: #FFFFFF;
border: 1px solid #D7E2E4;
box-sizing: border-box;
box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
border-radius: 7px;
}


#forgetpasswordbutton{
    position: absolute;
     width: 88.14%;
    height: 12.2%;
    left: 6.24%;
    right: 6.24%;
    top: 70.16%;
    bottom: 26.95%;

    background: #0071BC;
    border: 1px solid #D7E2E4;
    box-sizing: border-box;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
   
}



    
</style>
