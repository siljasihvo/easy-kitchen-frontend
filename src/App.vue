<script setup>
import { RouterView } from "vue-router";
import Navigation from "./components/Navigation.vue";
</script>

<template>
	<div class="mobile-container">
		<RouterView />
		<Navigation />
	</div>
</template>

<style scoped>
.mobile-container {
	max-width: 317px;
	margin: 0 auto;
	background-color: var(--background);
	min-height: 100vh;
	padding-left: 42.5px;
	padding-right: 42.5px;
	padding-bottom: 120px;
	padding-top: 20px;
}
</style>
