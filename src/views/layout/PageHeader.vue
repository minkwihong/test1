<template>
  <!-- header -->
  <header>
    <div class="right_nav">
      <h1 class="logo">  <router-link to="/main"> <img src="@/assets/img/logo.png" alt="logo"></router-link> </h1>
      <div class="sub">
        <router-link to="/sat">SAT</router-link>
        <router-link to="/act">ACT</router-link>
      </div>
    </div>
    <div class="left_nav">
      <template v-if="!getAuthenticated">
        <div class="right_nav logoutVer active">
          <router-link to="/faq">FAQ</router-link>
          <router-link to="/login">LOGIN</router-link>
          <router-link to="/regist">REGISTER</router-link>
        </div>
      </template>
      <template v-if="getAuthenticated">
        <div class="right_nav loginVer active">
          <router-link to="/user/dashboard">DASHBOARD</router-link>
          <router-link to="/faq">FAQ</router-link>
          <a href="javascript:void(0);" @click="goLogout" class="nav_login">LOGOUT</a>
          <div class="logout_popbg">
            <div class="logout_pop">
              <p>Are you sure you want to log out?</p>
              <a class="logoutNo">No</a>
              <a class="logoutYes" >Yes</a>
            </div>
          </div>
          <router-link to="/setting">SETTING</router-link>
        </div>
      </template>
    </div>
  </header>



</template>

<script>
import { mapGetters,mapMutations } from 'vuex';
export default {
  computed: {
    ...mapGetters([
      'getAuthenticated'
    ]),
    ...mapMutations([
      'deleteToken'
    ])
  },
  methods : {
    goLogout(){
      localStorage.removeItem('token'); // localstorage 저장
      localStorage.removeItem('userDetails'); // localstorage 저장

      this.$store.state.isAuth = false;
      this.goToMain();
    },
    goToMain() {
      this.$router.push('/main');
      //location.reload();
    }

  }

};
</script>

<style></style>
