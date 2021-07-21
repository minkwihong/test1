<template>
	<component :is="getLayout">
		<slot></slot>
	</component>
</template>

<script>
import LayoutHF from '@/views/layout/LayoutHF';
import LayoutDefault from '@/views/layout/LayoutDefault';
export default {
	name: 'LayoutExtends',
	computed: {
		getLayout() {
			return this.$route.meta.layout;
		},
	},
	components: {
		LayoutHF,
		LayoutDefault,
	},
};
</script>

<style></style>
