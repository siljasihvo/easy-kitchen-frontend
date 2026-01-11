<script setup>
defineProps({
	label: String,
	placeholder: String,
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);
</script>

<template>
	<section>
		<label>{{ label }}</label>
		<div class="container">
			<input 
				type="text" 
				:placeholder="placeholder" 
				:value="modelValue"
				@input="emit('update:modelValue', $event.target.value)" />
		</div>
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
	width: 100%;
	box-sizing: border-box;
}
</style>