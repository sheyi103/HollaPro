<template>
    <div>
        <div class="row">
            <div class="col-10 ml-5">
                <label style="float: left" id="label-text">Enter Email</label>
                 <div class="form-label-group">
                     <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
                                    
                </div>
            </div>
             <div class="col-10 ml-5">
                <label style="float: left" id="label-text">Password</label>
                <div class="form-label-group">
                     <input type="password" id="inputPassword" class="form-control" placeholder="Password" required>
                                    
                </div>
            </div>
            <div class="col-10 ml-5">
                     <div class="checkbox mb-2" style="float: left">
                         <label>
                         <input type="checkbox" value="remember-me"> Remember me
                         </label>
                    </div>
             </div>
             <div class="col-10 ml-5">
                <button class="btn btn-lg btn-primary btn-block" type="submit">Continue</button>
            </div>
                            
        </div>
    </div>
</template>