<script setup>
defineEmits(['click']);
</script>

<template>
	<button @click="$emit('click')">Add Item</button>
</template>

<style scoped>
button {
	background-color: var(--secondary);
	border-radius: 10px;
	width: 100%;
	color: white;
	border: none;
	padding: 15.5px 0px;
	font-size: 16px;
	cursor: pointer;
	margin-top: 35px;
}

button:active {
	transform: scale(0.95);
}
</style>