<template>
  
  <div>
   <!-- <div class="card text-center" id="footer">

  <div class="card-footer">
    <img src="./images/hollapro logo 2.png" alt="" srcset="" id="logo">
    <p class="card-text" id="copyright">Copyrights</p>
    <p id="vector">&copy</p>
    <p id="reserved">2020 HollaPro rights reserved</p>
  </div>
</div> -->
     <footer class="footer">
      <div class="container">
         <img src="./images/hollapro logo 2.png" alt="" srcset="" id="footerlogo">
          <p class="card-text" id="copyright">Copyrights</p>
          <p id="copyrightvector">&copy;</p>
          <p id="reserved">2020 HollaPro rights reserved</p>
      </div>
    </footer>
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

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* Set the fixed height of the footer here */
  height: 79px;
  line-height: 90px; /* Vertically center the text there */
  background-color: #24333D;
}
.container {
  padding-right: 15px;
  padding-left: 15px;
}

#footerlogo{
  position: absolute;
width: 113.21px;
height: 37px;
left: 169px;
top: 25px;

}
#copyright{
  
position: absolute;
width: 80px;
height: 29px;
left: 298px;
top: 35px;

font-family: Hind;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 29px;

/* identical to box height */
display: flex;
align-items: flex-end;

color: #D9E4EC;

}
#copyrightvector{
  position: absolute;
left: 25.3%;
right: 72.71%;
top: 5px;
/* bottom: 4.88%; */

color: #D9E4EC;
}
#reserved{
  position: absolute;
width: 234px;
height: 29px;
left: 380px;
top: 35px;

font-family: Hind;
font-style: normal;
font-weight: 300;
font-size: 14px;
line-height: 29px;

/* identical to box height */
display: flex;
align-items: flex-end;

color: #D9E4EC;
}
</style>
