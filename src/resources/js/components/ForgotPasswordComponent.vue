<template>
    <div>
        <router-link :to="{name: 'login'}" id="forgotpassword" class="form-text">Already on hollaPro? Log in</router-link>
        
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
#forgotpassword{

    position: absolute;
    width: 255px;
    height: 24px;
    left: 6.24%;
    right: 6.24%;
    top: 89%;

    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;

    /* identical to box height */

    color: #439CD7;

}
</style>
