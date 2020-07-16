<template>
    <div>
        <section class="section-signup">
            <div class="form-signin">
                <div class="text-center mb-4">
                    <img
                        class="mb-4"
                        src="../images/hollapro logo 2.png"
                        alt
                        width="153"
                        height="50"
                    />

                    <p class="login-privacy">
                        I have read and accept the
                        <a href="#">Terms of Service</a> and
                        <a href="#">Privacy Policy</a>
                    </p>
                </div>

                <div class="login-input">
                    <div class="progress">
                        <div
                            class="indicator"
                            :style="{ width: `${step * 33.333333}%` }"
                        ></div>
                    </div>
                    <div class="login-text">
                        <h3 class="login-header">Log In</h3>
                        <p class="login-body">Login with your social network</p>
                    </div>
                    <div class="social-btn-box">
                        <a class="btn btn-google" href="#">
                            <img
                                src="../images/googleicon.png"
                                alt="google icon"
                                class="googleicon"
                            />
                            Google
                        </a>
                        <a class="btn btn-facebook" href="#">
                            <i
                                class="fa fa-facebook fa-lg facebookicon"
                                aria-hidden="true"
                            ></i>
                            <span class="facebookicon-text">Facebook</span>
                        </a>
                    </div>

                    <template v-if="step === 1">
                        <div class="form-label-group">
                            <div class="label-wrap">
                                <label for="inputname">Enter Fullname</label>
                            </div>
                            <input
                                type="text"
                                v-model="form.name"
                                id="inputname"
                                class="sign-form-control"
                                placeholder="Fullname"
                            />
                        </div>

                        <div class="form-label-group">
                            <div class="label-wrap">
                                <label for="inputPhone">Phone Number</label>
                            </div>
                            <input
                                type="tel"
                                v-model="form.phone"
                                id="inputPhone"
                                class="sign-form-control"
                                placeholder="Phone Number"
                            />
                        </div>
                        <div class="form-label-group">
                            <div class="checkbox mb-3">
                                <label>
                                    <input
                                        type="checkbox"
                                        value="remember-me"
                                    />
                                    Remember me
                                </label>
                            </div>
                        </div>
                    </template>

                    <template v-if="step === 2">
                        <div class="form-label-group">
                            <div class="label-wrap">
                                <label for="inputEmail">Email</label>
                            </div>
                            <input
                                type="email"
                                v-model="form.email"
                                id="inputEmail"
                                class="sign-form-control"
                                placeholder="Email address"
                            />
                        </div>

                        <div class="form-label-group">
                            <div class="label-wrap">
                                <label for="inputPassword">Password</label>
                            </div>
                            <input
                                type="password"
                                v-model="form.password"
                                id="inputPassword"
                                class="sign-form-control"
                                placeholder="Password"
                            />
                        </div>
                    </template>

                    <template v-if="step === 3">
                        <div class="form-label-group">
                            <div class="label-wrap">
                                <label for="inputEmail">Click Gender</label>
                            </div>
                            <div
                                class="btn-group mr-2 sign-form-control btn-group-lg"
                                role="group"
                                aria-label="First group"
                            >
                                <button
                                    @click="pickGender('male')"
                                    type="button"
                                    class="btn btn-secondary"
                                    :id="
                                        form.gender === 'male'
                                            ? 'button1'
                                            : 'button2'
                                    "
                                >
                                    Male
                                </button>
                                <button
                                    @click="pickGender('female')"
                                    type="button"
                                    class="btn btn-secondary"
                                    :id="
                                        form.gender === 'female'
                                            ? 'button1'
                                            : 'button2'
                                    "
                                >
                                    Female
                                </button>
                            </div>
                        </div>

                        <div class="form-label-group">
                            <div class="label-wrap">
                                <label for="inputPassword">States</label>
                            </div>
                            <select
                                name="state"
                                v-model="form.state_id"
                                id="state"
                                class="sign-form-control"
                                placeholder="Password"
                            >
                                <option
                                    v-for="state in states"
                                    :key="state.title"
                                    :value="state.id"
                                >
                                    {{ state.title }}
                                </option>
                            </select>
                        </div>
                    </template>

                    <!-- <div class="form-label-group">
              <div class="checkbox mb-3">
                <label>
                  <input type="checkbox" value="remember-me"> Remember me
                </label>
              </div>
          </div>-->
                    <div class="form-label-group">
                        <button @click="moveNext" class="btn btn-submit">
                            <span v-if="step === 1">Get started</span>
                            <span v-if="step > 1">Continue</span>
                        </button>
                    </div>
                    <div class="form-label-group">
                        <div class="row">
                            <div class="col-auto mr-auto login-link">
                                <router-link :to="{ name: 'signup' }"
                                    >Not a member&#63; signup</router-link
                                >
                            </div>
                            <div class="col-auto login-link">
                                <router-link :to="{ name: 'signup' }"
                                    >Forgot password</router-link
                                >
                            </div>
                        </div>
                        <p class="mt-5 mb-3 text-muted text-center">
                            &copy; 2017-2020
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <footer-component></footer-component>
    </div>
</template>

<script>
export default {
    data() {
        return {
            step: 1,
            form: {
                name: null,
                phone: null,
                email: null,
                password: null,
                gender: null,
                state_id: null
            },
            errors: {},
            states: []
        };
    },
    beforeMount() {
        axios
            .get("https://hollapro.com/api/v1/state/all")
            .then(res => {
                console.log(res);
                this.states = res.data.data;
            })
            .catch(err => {
                console.log({ err });
            });
    },
    methods: {
        pickGender(gender) {
            this.form = {
                ...this.form,
                gender
            };
        },
        moveNext(e) {
            e.preventDefault();
            if (this.step === 3) {
                this.signup();
                return;
            }
            this.step = this.step + 1;
        },
        signup() {
            axios
                .post(
                    "https://hollapro.com/api/v1/onboarding/user/register",
                    this.form
                )
                .then(res => {
                    console.log(res);
                })
                .catch(err => {
                    console.log({ err });
                });
            // .catch(error => console.log(status))
        }
    }
};
</script>

<style scoped>
.bd-placeholder-img {
    font-size: 1.125rem;
    text-anchor: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
}

@media (min-width: 768px) {
    .bd-placeholder-img-lg {
        font-size: 3.5rem;
    }
}
/* html, */
/* body {
  height: 100%;
} */

.section-signup {
    margin-top: 55px;
    min-height: calc(100vh - 125px);
    background: linear-gradient(125.42deg, #4da4de 0%, #025388 100%);
}
.login-privacy {
    height: 24px;
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;
    text-align: center;
    color: #f3f7fa;
}
.login-privacy a {
    color: #d6d8da;
}
.login-input {
    background: #ffffff;
    border-radius: 10px;
    width: 550px;
    padding: 30px;
    margin: auto;
    text-align: left;
    overflow: hidden;
}
.progress {
    width: calc(100% + 60px);
    height: 9px;
    background: #cfe2ee;
    box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.05);
    position: relative;
    top: -30px;
    left: -30px;
}
.indicator {
    background: #0071bc;
    height: 9px;
    box-shadow: inset 0px 2px 8px rgba(0, 0, 0, 0.05);
    transition: linear all 0.3s;
}

.social-btn-box {
    margin-bottom: 20px;
}

.form-signin {
    width: 100%;
    text-align: center;
    padding: 50px 0;
    margin: auto;
}

.form-label-group {
    width: 100%;
    margin-bottom: 15px;
}
.form-label-group div label {
    font-weight: 500;
    font-size: 12px;
    color: #3c5a6d;
}
.form-label-group .label-wrap {
    /* margin: 45px 0 0; */
}
.sign-form-control {
    background: #ffffff;
    width: 100%;
    height: 45px;
}
.btn-submit {
    background: #0071bc;
    border: 1px solid #d7e2e4;
    box-sizing: border-box;
    box-shadow: 0px 8px 14px rgba(0, 0, 0, 0.05);
    border-radius: 7px;
    height: 45px;
    width: 100%;
    color: #fff;
    font-weight: 500;
    font-size: 16px;
    line-height: 26px;
    margin-top: 15px;
}
.login-link {
    font-weight: 500;
    font-size: 15px;
    line-height: 24px;

    /* identical to box height */

    color: #439cd7;
}
#button1 {
    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.323265px;

    color: #ffffff;

    mix-blend-mode: normal;
    background: #008cca;
    border: 1px solid #dae0e6;
    box-sizing: border-box;
    border-radius: 4px;
}
#button2 {
    font-family: Avenir Next;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.323265px;

    color: #8292a2;

    mix-blend-mode: normal;
    background: #ffffff;
    border: 1px solid #dae0e6;
    box-sizing: border-box;
    border-radius: 4px;
}

/* .form-label-group > input,
.form-label-group > label {
  height: 3.125rem;
  padding: .75rem;
} */

/* .form-label-group input::-webkit-input-placeholder {
  color: transparent;
}

.form-label-group input:-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-ms-input-placeholder {
  color: transparent;
}

.form-label-group input::-moz-placeholder {
  color: transparent;
}

.form-label-group input::placeholder {
  color: transparent;
}

.form-label-group input:not(:placeholder-shown) {
  padding-top: 1.25rem;
  padding-bottom: .25rem;
}

.form-label-group input:not(:placeholder-shown) ~ label {
  padding-top: .25rem;
  padding-bottom: .25rem;
  font-size: 12px;
  color: #777;
} */

/* Fallback for Edge
-------------------------------------------------- */
@supports (-ms-ime-align: auto) {
    .form-label-group > label {
        display: none;
    }
    .form-label-group input::-ms-input-placeholder {
        color: #777;
    }
}

/* Fallback for IE
-------------------------------------------------- */
@media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    .form-label-group > label {
        display: none;
    }
    .form-label-group input:-ms-input-placeholder {
        color: #777;
    }
}

/* .section-login{
  width: 1440px;
height: 1024px;
   background: linear-gradient(125.42deg, #4DA4DE 0%, #025388 100%);
}
.login-logo{
    height: 15%;
    width: 12%;
    margin: 8% auto 0 auto;
    display: inline-block;
    text-align: center;
}
.login-policy{
  font-weight: 500;
font-size: 15px;
line-height: 24px;
text-align: center;

color: #F3F7FA;
}
.privacypolicy{
  height: 24px;
  font-weight: 500;
font-size: 15px;
line-height: 24px;
color: #F3F7FA;
 margin: 10% auto 0 auto;
 display: inline-block;
}
.login-form-group{
  margin-top: 52px;
}
.login-box{
  width: 600px;
  height: 605px;
 margin: 54px auto 0 auto;
  background: #FFFFFF;
  border-radius: 10px;
}
 */
.login-text {
    text-align: center;
}
.login-header {
    font-family: Hind;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 38px;
    padding: 0;

    color: #1f262c;
}
.login-body {
    font-weight: 500;
    font-size: 18px;
    line-height: 29px;

    color: #636e78;
}
</style>
