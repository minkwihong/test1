<template>
	<div>
		<page-header></page-header>
		<slot></slot>
		<page-footer></page-footer>
	</div>
</template>

<script>
import PageHeader from '@/views/layout/PageHeader';
import PageFooter from '@/views/layout/PageFooter';
export default {
	components: {
		PageHeader,
		PageFooter,
	},
};
</script>

<style></style>
