<script setup>
defineProps({
	label: String,
	placeholder: String,
});
</script>

<template>
	<label>{{ label }}</label>
	<section class="container">
		<input type="text" :placeholder="placeholder" />
	</section>
</template>

<style scoped>
.container {
	background-color: var(--cards);
	border-radius: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 5px 0px;
}

label {
	margin-bottom: 8px;
	display: block;
}

input {
	border: none;
	border-radius: 10px;
	padding: 12px 16px;
	outline: none;
}
</style>
