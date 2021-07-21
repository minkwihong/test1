<template>
	<div>
		<slot></slot>
    <page-footer></page-footer>
	</div>
</template>

<script>
import PageFooter from "@/views/layout/PageFooter";
export default {
    components:{
        PageFooter
    }
};
</script>

<style></style>
