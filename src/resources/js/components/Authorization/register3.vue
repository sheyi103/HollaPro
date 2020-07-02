<template>
    <div>
        <div class="row">
            <div class="col-10 ml-5">
                <label style="float: left" id="label-text">Select Gender</label>
                 <div class="form-label-group">
                     
                        <div class="btn-group mr-2 form-control btn-group-lg" role="group" aria-label="First group">
                            <button type="button" class="btn btn-secondary" id="button1">Male</button>
                            <button type="button" class="btn btn-secondary" id="button2">Female</button>
                        </div>
                        
                     <!-- <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus> -->
                                    
                </div>
            </div>
             <div class="col-10 ml-5">
                <label style="float: left" id="label-text">State</label>
                <div class="form-label-group">
                    <select name="state" id="state" class="form-control" placeholder="Password">
                        <option value="volvo">Lagos</option>
                        <option value="saab">Abuja</option>
                        <option value="mercedes">Kaduna</option>
                        <option value="audi">Oyo</option>
                    </select>
                     <!-- <input type="password" id="inputPassword" class="form-control" placeholder="Password" required> -->
                                    
                </div>
            </div>
             <div class="col-10 ml-5">
                <button class="btn btn-lg btn-primary btn-block" type="submit">Continue</button>
            </div>
                            
        </div>
    </div>
</template>

<style>
#button1{
    font-family: Hind;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 22px;
letter-spacing: 0.323265px;

color: #FFFFFF;

mix-blend-mode: normal;
    background: #008CCA;
border: 1px solid #DAE0E6;
box-sizing: border-box;
border-radius: 4px;
}
#button2{
  
font-family: Avenir Next;
font-style: normal;
font-weight: 500;
font-size: 14px;
line-height: 19px;
letter-spacing: 0.323265px;

color: #8292A2;

mix-blend-mode: normal;
    background: #FFFFFF;
border: 1px solid #DAE0E6;
box-sizing: border-box;
border-radius: 4px;
}
.form-control{
    height: 50px;
}
    
</style>