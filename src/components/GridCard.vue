<script setup>
defineProps({
	imageSrc: String,
	itemName: String,
	quantity: String,
	storage: String,
	emoji: String,
});
</script>

<template>
	<section class="grid-card">
		<img :src="imageSrc" :alt="itemName" />
		<p>{{ itemName }}</p>
		<p class="subtitle">{{ quantity }}</p>
		<p class="tiny-text">
			{{ emoji }} <span>{{ storage }}</span>
		</p>
	</section>
</template>

<style scoped>
.grid-card {
	display: flex;
	max-width: 156px;
	background-color: var(--cards);
	justify-content: center;
	flex-direction: column;
	align-items: center;
	box-sizing: border-box;
	padding: 12px 0;
	border-radius: 10px;
	gap: 2px;
}

.grid-card img {
	width: 135px;
	height: 86px;
	object-fit: cover;
	border-radius: 10px;
}

.grid-card p {
	width: 100%;
	text-align: left;
	padding-left: 20px;
}

.subtitle {
	opacity: 0.7;
	font-size: 14px;
}

.tiny-text {
	font-size: 12px;
}

.tiny-text span {
	opacity: 0.7;
}
</style>
