<template>
	<section>
		<div class="register">
			<h2>Register</h2>
			<form name="frm" id="frm" action="/api/member/register" method="post">
				<div class="register_form">
					<!-- sns login -->
					<div class="sns_login">
						<p @click="goSnsJoin('google')">
							<img src="@/assets/img/icon_google.png" alt="googleSns" />Sign up
							with Google
						</p>
						<p @click="goSnsJoin('facebook')">
							<img src="@/assets/img/icon_facebook.png" alt="facebookSns" />Sign
							up with facebook
						</p>
						<p @click="goSnsJoin('twitter')">
							<img src="@/assets/img/icon_twitter.png" alt="twitterSns" />Sign
							up with Twitter
						</p>
					</div>

					<!-- register form -->
					<ul class="top_form">
						<li>
							<input
								type="text"
								name="firstName"
								placeholder="First Name*"
								required
							/>
							<input
								type="text"
								name="lastName"
								placeholder="Last Name*"
								required
							/>
						</li>
						<li>
							<input type="number" name="grade" placeholder="Grade" />
						</li>
						<li>
							<input
								type="text"
								name="email"
								id="emailChk"
								placeholder="Email*"
								v-model="chkEmail"
								required
							/>
							<a class="emailConfirm" @click="dupChkEmail()">Confirm</a>
							<div class="pop_bg" v-show="isOpenEmailChkPop">
								<div class="email_pop" v-show="isOpenEmailChkPop">
									Verification email has been sent to <span>ajax연결</span>.
									Click the button in the email and sign up.

									<ul>
										<li class="email_close">No</li>
										<li class="email_check" onclick="emailChk();">Yes</li>
									</ul>
									Can't find the email? Check your spam folder or
									<span class="remail"> resend verification email.</span>
								</div>
							</div>
						</li>
						<li>
							<input
								id="pw1"
								class="pw"
								type="password"
								name="password"
								placeholder="Password*"
								required
							/>
							<button class="pw_view1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
									/>
								</svg>
							</button>

							<!-- mouse over시 display block -->
							<p class="pw_info">
								You must contain at least 1 capital, lowercase, digits and
								special characters.
							</p>
						</li>
						<li>
							<input
								id="pw2"
								class="pw"
								type="password"
								name="password_confirm"
								placeholder="Confire Password*"
								required
							/>
							<button class="pw_view2">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 24 24"
									width="24"
									height="24"
								>
									<path fill="none" d="M0 0h24v24H0z" />
									<path
										d="M12 3c5.392 0 9.878 3.88 10.819 9-.94 5.12-5.427 9-10.819 9-5.392 0-9.878-3.88-10.819-9C2.121 6.88 6.608 3 12 3zm0 16a9.005 9.005 0 0 0 8.777-7 9.005 9.005 0 0 0-17.554 0A9.005 9.005 0 0 0 12 19zm0-2.5a4.5 4.5 0 1 1 0-9 4.5 4.5 0 0 1 0 9zm0-2a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
									/>
								</svg>
							</button>
							<!-- pw, confirm pw 불일치시 display block -->
							<p class="match">Password does not match</p>
						</li>
						<li>
							<input
								type="text"
								name="testDate"
								id="testDate"
								placeholder="Expected Test Date"
							/>
						</li>
						<li>
							<input
								type="number"
								name="scoreSat"
								id="scoreSat"
								value="0"
								placeholder="Target Score(SAT)"
							/>
							<input
								type="number"
								name="scoreAct"
								id="scoreAct"
								value="0"
								placeholder="Target Score(ACT)"
							/>
						</li>
						<li>
							<p>Actual Score</p>
							<div>
								<a class="minus">­－</a>
								<a class="plus">＋</a>
							</div>
						</li>
						<li>
							<!-- -,+ 클릭 시 actual 추가, 삭제 -->
							<div class="actual">
								<input
									type="number"
									name="scoreSat"
									id="scoreSat1"
									value="0"
									placeholder="Actual Score(SAT)"
								/>
								<input
									type="number"
									name="scoreAct"
									id="scoreAct1"
									value="0"
									placeholder="Actual Score(ACT)"
								/>
								<p>
									<input
										type="text"
										name="testDate"
										id="testDate1"
										placeholder="Acutal Score Date"
									/>
								</p>
							</div>
						</li>
						<li>
							<p>Promotion</p>
						</li>
						<li>
							<input
								type="text"
								name="promotionCode"
								placeholder="Promotion Code"
							/>
						</li>
						<input type="hidden" name="role" value="USER" />
						<input type="hidden" name="arrDate" id="arrDate" value="" />
						<li><input type="submit" value="REGISTER" /></li>
					</ul>
				</div>
			</form>
		</div>
	</section>
</template>
<script>
export default {
	data() {
		return {
			isOpenEmailChkPop: false,
			chkEmail: '',
			isDuplEmailChk: false,
		};
	},
	methods: {
		goSnsJoin(type) {
			alert(type);
		},
		async dupChkEmail() {
			const param = {
				email: this.chkEmail,
			};

			try {
				const isDulp = await this.$store.dispatch(
					'FETCH_DULP_EMAIL_CHK',
					param,
				);

				if (isDulp) {
					alert('해당 아이디는 사용이 가능합니다.');
					this.isDuplEmailChk = true;
				} else {
					alert('아이디가 중복되었습니다.');
					this.isDuplEmailChk = false;
				}
			} catch (e) {
				alert(e);
			}

			/*let url = '/api/member/membercheck/';
      const email = $('#emailChk').val();
      let param = '';
      url = url + email;*/

			alert(this.chkEmail);
		},
	},
};
</script>
