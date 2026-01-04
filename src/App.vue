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
	max-width: 402px;
	margin: 0 auto;
}
</style>
