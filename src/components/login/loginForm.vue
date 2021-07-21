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
              <input type="button" @click="goSubmit" value="LOGIN">
            </li>
          </ul>
        </form>

        <!-- forgot pw -->
        <div class="forgot_pw">
          <a>Forgot password?</a>
          <!-- 클릭 시 display block -->
          <div class="pop_bg">
            <div class="pw_popup">
              <div class="close">
                <p>Write your registered email.</p>
                <img src="@/assets/img/icon_close.png" alt="close">
              </div>
              <form action="">
                <ul>
                  <li><input type="email" placeholder="Email" name="email"></li>
                  <li><input type="button" @click="goSubmit" value="Send"></li>
                </ul>
              </form>
            </div>
          </div>
        </div>

        <!-- sns login -->
        <div class="sns_login">
          <p><img src="@/assets/img/icon_google.png" alt="googleSns">Sign in with Google</p>
          <p><img src="@/assets/img/icon_facebook.png" alt="facebookSns">Sign in with facebook</p>
          <p><img src="@/assets/img/icon_twitter.png" alt="twitterSns">Sign in with Twitter</p>
        </div>



      </div>
    </div>
  </section>
</template>

<script>
import { getLogin } from '@/api/login/index';
export default {
  data(){
    return {
      email :'',
      password : ''
    }

  },
  methods : {
    async goSubmit(){
        alert()
        const param = {
          email : this.email,
            password : this.password
        }
      try{
        const result = await getLogin(param);


        alert(JSON.stringify(result))
      }catch (e){
          alert(e)
      }


      //alert('result ::: ' + result)


    }
  }

}
</script>