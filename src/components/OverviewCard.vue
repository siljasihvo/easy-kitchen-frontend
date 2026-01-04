<script setup>
defineProps({
	count: Number,
	description: String,
});
</script>

<template>
	<section>
		<p class="card-highlight">{{ count }}</p>
		<p class="card-detail">{{ description }}</p>
	</section>
</template>

<style scoped>
section {
	background-color: var(--cards);
	border-radius: 10px;
	display: flex;
	flex-direction: column;
	width: 82px;
	padding: 20px 6px;
	justify-content: center;
	align-items: center;
}

.card-highlight {
	font-size: 24px;
}

.card-detail {
	font-size: 12px;
	opacity: 0.7;
}
</style>
