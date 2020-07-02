<template>
  
  <div> 
      <div class="jumbotron" id="book_jumbotron">
          <div class="container">
            <div class="row">
              <div class="col-6 col-md-6">
                <h5 id="contact-header">Book for a professional Now</h5>
                <h2 id="contact-paragraph">Download the app for exclusive deals and ease of booking </h2>
                <button type="button" class="btn btn-outline-primary" id="sponsors_button">GOLDEN RULE</button>
                  <button type="button" class="btn btn-outline-primary" id="sponsors_button">GOLDEN RULE</button>
                  
              </div>
              <div class="col-6 col-md-6">
                
                  <img src="./images/mobileicon.png" style="height: 64%" class="rounded mobile_image"/>
              
              </div>
            </div>
            
        </div>
          <!-- <div class="jumbotron jumbotron-fluid" id="jumbotron_support">
              <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
              </div>
            </div> -->

             
                      <div class="row" id="jumbotron_support">
                        <div class="col-md-4">
                          <p class="text-justified mt-3" id="support_header_font">Get the job done with pro</p>
                          <p class="text-justified" id="support_paragraph_font">At HollaPro Customer safety is our top Priority.</p>
                        </div>
                        <div class="col-md-4">
                           <p class="text-justified mt-3" id="support_header_font">Get the job done with pro</p>
                           <p class="text-justified" id="support_paragraph_font">A dedicated customer support team always at your serviec to help solve any problem.</p>
                        </div>
                        <div class="col-md-4">
                           <p class="text-justified mt-3" id="support_header_font">Get the job done with pro</p>
                           <p class="text-justified" id="support_paragraph_font">All our Artisans and Professionals are background verified and trained to deliver only the best experience.</p>
                        </div>
                      
                    </div>
            </div>

                   
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
#book_jumbotron{
  height: 450px;
  background: #FFFFFF;
border: 1px solid #D7D7D7;
box-sizing: border-box;
/* height: 210px; */
  margin-bottom: 0px;
  /* z-index: -1; */

}
#jumbotron_support{
position: absolute;
width: 1455px;
height: 130px;
left: 0px;
top: 3273px;

background: #0071BC;
border: 1px solid #0071BC;
box-sizing: border-box;
}
#support_header_font{
  /* position: absolute; */
  width: 332px;
height: 29px;
/* left: 223.67px; */
/* top: 3034px; */

font-family: Hind;
font-style: normal;
font-weight: 600;
font-size: 18px;
line-height: 29px;

/* identical to box height */
/* display: flex;
align-items: flex-end; */

color: #FFFFFF;
}
#support_paragraph_font{
  position: absolute;
width: 368px;
height: 52px;

/* left: 223.67px; */
/* top: 3065px; */

font-family: Hind;
font-style: normal;
font-weight: normal;
font-size: 16px;
line-height: 26px;

color: #FFFFFF;
}
</style>
