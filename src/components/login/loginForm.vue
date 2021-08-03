<template>
  <!-- body -->
  <section>
    <div class="login_bg">
      <!-- login input -->
      <div class="login">
        <h2><img src="@/assets/img/logo.png" alt="logo"></h2>
        <form @submit.prevent="goSubmit">
          <ul class="login_form">
            <li>
              <input type="text" name="email" v-model="email" placeholder="Email" required>
            </li>
            <li>
              <input class="pw" type="password" v-model="password"  placeholder="Password" required>
              <button class="pw_view">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                      d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />
                </svg>
              </button>
            </li>
            <li>
              <input type="submit"  value="LOGIN">
            </li>
          </ul>
        </form>

        <!-- forgot pw -->
        <div class="forgot_pw">
          <a @click="getForgotPw">Forgot password?</a>
          <!-- 클릭 시 display block -->
          <div class="pop_bg" v-show="isForgotPop">
            <div class="email_pop" v-show="false">
              Verification email has been sent to <span>ajax연결</span>. Click the button in the
              email and sign up.

              <ul>
                <li class="email_check" >Yes</li>
              </ul>
            </div>
            <div class="pw_popup" v-show="isForgotPop">
              <div class="close" @click="goFotgotClosePop">
                <p>Write your registered email.</p>
                <img src="@/assets/img/icon_close.png" alt="close">
              </div>
              <form name="">
                <ul>
                  <li><input type="email"   placeholder="Email" name="emailP" v-model="emailChk"  ></li>
                  <li><input type="button" @click="goEmailChk" value="Send"></li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <!-- sns login -->
        <div class="sns_login">
          <p @click="goSnsLogin('google')" ><img src="@/assets/img/icon_google.png"  alt="googleSns">Sign in with Google</p>
          <p @click="goSnsLogin('facebook')" ><img src="@/assets/img/icon_facebook.png"  alt="facebookSns">Sign in with facebook</p>
          <p @click="goSnsLogin('twitter')" ><img src="@/assets/img/icon_twitter.png"   alt="twitterSns">Sign in with Twitter</p>
        </div>



      </div>
    </div>
  </section>
</template>

<script>
export default {
  data(){
    return {
      email :'',
      password : '',
      isForgotPop : false,
      emailChk : ''
    }

  },
  methods : {
    async goSubmit(){
        const param = {
            email : this.email,
            password : this.password
        }

        try{
            this.$loading(true);
            const result = await this.$store.dispatch('FETCH_LOGIN_USER',param);
            this.$loading(false);
            console.log('login result ==> ' + result)
            if(result){
              this.$router.push('/user/dashboard');
            }
        }catch (e){
            alert(e)
        }
    },
    getForgotPw(){
      this.isForgotPop = true;
    },
    async goSnsLogin(type){

      try{
          const param = {
            email : this.email,
            password : '',
            type : type
          }

          const result2 = await this.$store.dispatch('FETCH_SNS_LOGIN_USER',param);
          console.log('login result ==> ' + result2);
      }catch (e){
          alert(e)
      }
    },
    goFotgotClosePop(){
      this.isForgotPop = false;
    },
    async goEmailChk(){
      const param = {
        email : this.emailChk
      }

      this.$loading(true);
      const result = await this.$store.dispatch('FETCH_EMAIL_CHK',param);
      this.$loading(false);

      if(result){
        alert('email check success')
        this.goFotgotClosePop();
      }
    }

  }

}
</script>