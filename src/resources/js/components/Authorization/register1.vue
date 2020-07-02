<template>
    <div>
            <div class="row">
                            <div class="col-10 ml-5">
                                <label style="float: left" id="label-text">Enter Fullname</label>
                                <div class="form-label-group">
                                    <input type="text" id="" class="form-control" placeholder="Enter Full name" required autofocus>
                                    
                                </div>
                            </div>
                            <div class="col-10 ml-5">
                                <label style="float: left" id="label-text">Phone Number</label>
                                <div class="form-label-group">
                                    <input type="tel" id="" class="form-control" placeholder="+234" required>
                                    
                                </div>
                            </div>
                            <div class="col-10 ml-5">
                                  <div class="checkbox mb-1" style="float: left">
                                        <label id="label-text-2">
                                        <input type="checkbox" value="remember-me"> I have read and accept the
                                         <a href="#">Terms of Service</a>
                                          and 
                                          <a href="#"> Privacy Policy</a>
                                        </label>
                                    </div>
                            </div>
                            <div class="col-10 ml-5">
                                <button class="btn btn-lg btn-primary btn-block" type="submit">Get Started</button>
                            </div>
                            
                        </div>
        
    </div>
</template>

<style>
#label-text{
    font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 26px;

/* identical to box height */

color: #3C5A6D;
}
#label-text-2{
    font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 13px;
line-height: 22px;

/* identical to box height */

color: #959D9E;
}
</style>