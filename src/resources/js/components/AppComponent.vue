<template>
  
  <div> 
      <div class="jumbotron jumbotron-fluid mt-5" id="book_jumbotron">
          <div class="container">
            <div class="row">
              <div class="col-6 col-md-6">
                <h5 id="contact-header">Book for a professional Now</h5>
                <h2 id="contact-paragraph">Download the app for exclusive deals and ease of booking </h2>
                <button type="button" class="btn btn-outline-primary" id="sponsors_button">GOLDEN RULE</button>
                  <button type="button" class="btn btn-outline-primary" id="sponsors_button">GOLDEN RULE</button>
                  
              </div>
              <div class="col-6 col-md-6">
                
                  <img src="../images/mobileicon.png"  class="rounded mobile_image"/>
              
              </div>
            </div>
            
        </div>
          <div class="jumbotron jumbotron-fluid" id="jumbotron_support">
              <div class="container">
                <h1 class="display-4">Fluid jumbotron</h1>
                <p class="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
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
  height: 670px;
  background: #FFFFFF;
border: 1px solid #D7D7D7;
box-sizing: border-box;
/* height: 210px; */
  margin-bottom: 0px;
  /* z-index: -1; */

}
#jumbotron_support{
  position: absolute;
  width: 100%;
height: 230px;
bottom:3%;
  margin-bottom: 0px;

  background: #0071BC;
border: 1px solid #0071BC;
box-sizing: border-box;
 /* background-color: green; */
  opacity: 2.5;
}
.mobile_image{
  /* height: 700px; */
  /* z-index: -10; */
}

</style>
