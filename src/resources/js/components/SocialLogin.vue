<template>
    <div>
         
                                <a href="#" class="card-link" id="google">
                                    <img src="./images/googleicon.png" alt="" id="googleicon">
                                    <p id="googletext">Google</p>
                                    </a>
                                <a href="#" class="card-link" id="facebook">
                                <img src="./images/facebookicon.png" alt="" id="facebookicon">
                                </a>
                                <hr id="line1"/> <p id="or">or</p> <hr id="line2"/>
        
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

#google{
    position: absolute;
    width: 252px;
    height: 50px;
    left: 40px;
    top: 105px;

    background: #F6F7FB;
    border: 1px solid #EAEAED;
    box-sizing: border-box;
    box-shadow: inset 0px 2px 5px rgba(0, 0, 0, 0.02);
    border-radius: 8px;
}
#facebook{
    position: absolute;
    width: 252px;
    height: 50px;
    left: 290px;
    top: 105px;

    background: #415A94;
    border-radius: 5px;
}
#googleicon{
    position: absolute;
    width: 24px;
    height: 24px;
    left: 85px;
    top: 10px;
}
#facebookicon{
    position: absolute;
    width: 104px;
    height: 21.38px;
    left: 72px;
    top: 13px;
}
#googletext{
    position: absolute;
    width: 54px;
    height: 26px;
    left: 120px;
    top: 13px;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;

    /* identical to box height */
    display: flex;
    align-items: flex-end;
    text-align: center;

    color: #444643;
}
#line1{
    position: absolute;
    width: 234px;
    height: 0px;
    left: 45px;
    top: 169px;

    border: 1px solid #8AB6D2;
}
#or{
    position: absolute;
    width: 19px;
    height: 22px;
    left: 289px;
    top: 174px;

    font-family: Montserrat;
    font-style: italic;
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    /* identical to box height */

    color: #BDC3C9;
}

#line2{
    position: absolute;
    width: 234px;
    height: 0px;
    left: 316px;
    top: 169px;

    border: 1px solid #8AB6D2;
}
</style>
