<template>
	<section>
		<div class="main">
			<!-- banner -->
			<div class="banner">
				<div class="banner_bg">
					<div class="ban_text">
						<h2>Get your dream score faster with personalized solutions</h2>
						<p>A novel approach to SAT/ACT prep</p>

						<a href="javascript:void(0);">Subscribe Now</a>

						<a href="javascript:void(0);">Go to Dashboard</a>
						<!--                <a href="javascript:void(0);">Start Your Free Trial</a>-->
					</div>
				</div>
				<div class="video_box video_container">
					<video
						controls
						ref="videoRef"
						id="video-container"
						height="700px"
					></video>
				</div>

				<div class="free_trial">
					<div class="free">
						<p>Which test would you like to take?</p>
						<img src="@/assets/img/icon_close.png" alt="" />
						<a href="javascript:void(0);">SAT</a>
						<a href="javascript:void(0);">ACT</a>
					</div>
				</div>
			</div>

			<!-- info -->
			<div class="index_info">
				<h3>
					Years of SAT/ACT teaching experience tell student why they get a much
					lower test prep score than they deserve.
				</h3>

				<div class="info_text">
					<div>
						<p>
							They do not solve mening ful questions - the questions they are
							likely to get wrong
						</p>
					</div>
					<div>
						<p>They not know their strengths and weaknesses</p>
					</div>
					<div>
						<p>They do not learn useful tips and know - how they need</p>
					</div>
				</div>
			</div>

			<div class="index_info2">
				<h3>
					No matter how good you are and what problem you have, your preparation
					will be more than perfect with our service.
				</h3>

				<div class="info2_text">
					<div>
						<h4>Simple as 1-2-3</h4>
						<p>
							Don’t need to build your test set with multiple criteria. Just
							click “Begin Practice,” and our system provides you with the best
							set that suits your academic needs.
						</p>
					</div>
					<div>
						<h4>Thorough Analysis</h4>
						<p>
							Check out everything about your readiness for the test – not just
							limited to score estimate, and performance but peer comparison
							data and review rate.
						</p>
					</div>
					<div>
						<h4>Superb Answer Explanations and Tips</h4>
						<p>
							Not a single question/passage goes without detailed explanation
							and useful tips to prepare you for the test day.
						</p>
					</div>
				</div>

				<router-link to="/user/product">
					Subscribe Now
				</router-link>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	mounted: function() {
		this.$refs.videoRef.src = '@/assets/img/landing.mov';
		this.$refs.videoRef.play();
	},
};
</script>

<style></style>
