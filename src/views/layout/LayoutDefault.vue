<template>
	<div>
		<page-header></page-header>
		<slot></slot>
		<page-footer></page-footer>
	</div>
</template>

<script>
import PageFooter from '@/views/layout/PageFooter';
import PageHeader from '@/views/layout/PageHeader';
export default {
	components: {
		PageFooter,
		PageHeader,
	},
};
</script>

<style></style>
