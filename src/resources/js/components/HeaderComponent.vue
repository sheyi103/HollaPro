<template>
    <div>
        <!-- <nav class="navbar navbar-expand-md navbar-light fixed-top" id="nav">
      <router-link class="navbar-brand" :to="{name: 'home'}">
        <img src="./images/hollapro 2.png" alt="" srcset="" id="logo">
      </router-link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown" id="about" >
              <a class="nav-link dropdown-toggle pr-5" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Company
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
           
            <li class="nav-item" id="opportunities">
              <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">
                 <i class="fa fa-globe fa-sm" aria-hidden="true"></i>En</a>
            </li>
          <li class="nav-item" id="home">
            <router-link class="nav-link" :to="{name: 'home'}">Home</router-link>
          </li>
           <li class="nav-item" id="faq">
                <router-link class="nav-link" :to="{name: 'faq'}">FAQ</router-link>
              </li>
                <li class="nav-item" id="contact_us">
                 <router-link class="nav-link" :to="{name: 'contact'}">Contact Us</router-link>
              </li>
              
              <li class="nav-item" id="login_vector">
                <i class="fa fa-user-o pr-2" aria-hidden="true"></i>
              </li>
                <li class="nav-item" id="login">
                <router-link class="nav-link" :to="{name: 'login'}">Log in</router-link>
              </li>
              <li class="nav-item" id="signup">
                <router-link class="btn" :to="{name: 'signup'}" role="button" style="color:white">Sign Up</router-link>
              </li>
        </ul>
       
      </div>
    </nav>-->

        <div class="container">
            <div class="row">
                <nav
                    class="navbar navbar-expand-md navbar-light fixed-top"
                    id="nav"
                >
                    <div class="container">
                        <router-link
                            class="navbar-brand"
                            :to="{ name: 'index' }"
                        >
                            <img
                                src="./images/hollapro 2.png"
                                alt
                                srcset
                                id="logo"
                            />
                        </router-link>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarsExample07"
                            aria-controls="navbarsExample07"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div
                            class="collapse navbar-collapse"
                            id="navbarsExample07"
                        >
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item ml-5 nav-font">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'about' }"
                                        >Company</router-link
                                    >
                                </li>
                                <li class="nav-item nav-font">
                                    <a
                                        class="nav-link disabled"
                                        href="#"
                                        tabindex="-1"
                                        aria-disabled="true"
                                    >
                                        <i
                                            class="fa fa-globe fa-sm pr-2"
                                            aria-hidden="true"
                                        ></i
                                        >En
                                    </a>
                                </li>
                            </ul>
                            <ul class="navbar-nav ml-auto">
                                <li class="nav-item ml-5 nav-font">
                                    <router-link
                                        class="nav-link nav-font"
                                        :to="{ name: 'index' }"
                                        >Home</router-link
                                    >
                                </li>
                                <li class="nav-item nav-font">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'faq' }"
                                        >FAQ</router-link
                                    >
                                </li>
                                <li class="nav-item nav-font">
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'contact' }"
                                        >Contact Us</router-link
                                    >
                                </li>
                                <li
                                    v-if="!loggedInStatus"
                                    class="nav-item nav-font"
                                >
                                    <router-link
                                        class="nav-link"
                                        :to="{ name: 'login' }"
                                    >
                                        <i
                                            class="fa fa-user-o pr-2"
                                            aria-hidden="true"
                                        ></i
                                        >Log in
                                    </router-link>
                                </li>
                                <li
                                    v-if="!loggedInStatus"
                                    class="nav-item nav-font"
                                >
                                    <router-link
                                        class="btn"
                                        id="signup"
                                        :to="{ name: 'signup' }"
                                        >Sign Up</router-link
                                    >
                                </li>
                                <li
                                    class="nav-item nav-font"
                                    v-if="loggedInStatus"
                                >
                                    <img
                                        class="user"
                                        src="./images/Union.svg"
                                        alt=""
                                    />
                                </li>
                                <li
                                    class="nav-item nav-font"
                                    v-if="loggedInStatus"
                                    @click="logout()"
                                >
                                    <span
                                        style="top: 12px; position: relative;"
                                        class="nav-link"
                                        >Log Out</span
                                    >
                                </li>
                                <!-- <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="dropdown07" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div class="dropdown-menu" aria-labelledby="dropdown07">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
                </li>-->
                            </ul>
                            <!-- <div class=" my-5 my-md-0">
        <input class="form-control" type="text" placeholder="Search" aria-label="Search">
              </div>-->
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
    computed: {
        ...mapGetters({
            user: "getUser",
            loggedInStatus: "getLoggedInStatus"
        })
    },
    methods: {
        logout() {
            this.$store.commit("logout");
            sessionStorage.clear();
            localStorage.clear();
            setTimeout(() => {
                this.$router.push("/login");
            }, 1000);
        }
    }
};
</script>
<style scoped>
#nav {
    /* position: absolute; */
    /* width: 1440px; */
    height: 55px;
    /* left: 0px;
top: 0px; */

    background: #ffffff;
    box-shadow: 0px 6px 12px rgba(0, 0, 0, 0.08);
}

#logo {
    position: absolute;
    width: 57px;
    height: 19px;
    /* left: 171px; */
    top: 18px;
}
.nav-font {
    font-family: Hind;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 22px;
    margin: 0 12px;
    color: #3c5a6d;
}
.nav-font img {
    height: 20px;
    margin: 15px 0;
}
#about {
    /* position: absolute; */
    height: 22px;
    /* left: 18.89%; */
    /* right: 76.81%; */
    /* top: 15.9%; */

    /* top: calc(50% - 22px/2 - 482px); */
}
#vector {
    position: absolute;
    left: 26.32%;
    right: 73.37%;
    top: 15.9%;
    bottom: 85.46%;
}
#opportunities {
    position: absolute;
    /* height: 22px; */
    left: 380px;
    top: 10px;
    /* right: 71.04%; */
    /* top: calc(50% - 22px/2 - 482px); */
    /* top: 15.9%; */
}

#home {
    position: absolute;
    height: 22px;
    left: 59.65%;
    right: 37.78%;
    top: 15.9%;

    /* top: calc(50% - 22px/2 - 481px); */
}
#faq {
    position: absolute;
    height: 22px;
    left: 64.65%;
    right: 33.47%;
    top: 15.9%;
}
#contact_us {
    position: absolute;
    height: 22px;
    left: 68.89%;
    right: 22.25%;
    top: 15.9%;
}
#login_vector {
    position: absolute;
    left: 76.3%;
    right: 23.32%;
    /* top: 12.9%; */

    top: 22.25%;
    bottom: 97.22%;

    /* background: #000000; */
}
#login {
    position: absolute;
    width: 55px;
    height: 22px;
    left: 1117px;
    top: 15.9%;

    /* top: 17px; */
}
#signup {
    /* position: absolute;
width: 80px;
height: 31px;
left: 1190px;
top: 15.9%; */

    /* top: 12px; */
    color: white;

    background: #036db3;
    border-radius: 26px;
}
</style>
