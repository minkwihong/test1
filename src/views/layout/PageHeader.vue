<template>
	<header>
		<div class="left_nav">
			<h1 class="logo">
				<router-link to="/main">
					<img src="@/assets/img/logo.png" alt="logo"
				/></router-link>
			</h1>
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
					<a href="javascript:void(0);" @click="goLogoutPop" class="nav_login"
						>LOGOUT</a
					>
					<div class="logout_popbg" v-show="isShow">
						<div class="logout_pop" v-show="isShow">
							<p>Are you sure you want to log out?</p>
							<a class="logoutNo" @click="goCancel">No</a>
							<a class="logoutYes" @click="goLogout">Yes</a>
						</div>
					</div>
					<router-link to="/setting">SETTING</router-link>
				</div>
			</template>
		</div>
	</header>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex';

export default {
	data() {
		return {
			isShow: false,
		};
	},
	computed: {
		...mapGetters(['getAuthenticated']),
		...mapMutations(['deleteToken']),
	},
	methods: {
		async goLogout() {
			this.isShow = false;
			await this.$store.dispatch('FETCH_LOGOUT');
			if (!this.getAuthenticated) this.goToMain();
		},
		goToMain() {
			this.$router.push('/main');
		},
		goLogoutPop() {
			this.isShow = true;
		},
		goCancel() {
			this.isShow = false;
		},
	},
};
</script>

<style></style>
