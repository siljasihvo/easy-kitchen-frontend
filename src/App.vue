<script setup>
import { RouterView } from "vue-router";
</script>

<template>
	<div class="mobile-container">
		<RouterView />
	</div>
</template>

<style scoped>
.mobile-container {
	max-width: 320px;
	margin: 0 auto;
	background-color: var(--background);
	min-height: 100vh;
	padding-left: 40px;
	padding-right: 40px;
}
</style>
