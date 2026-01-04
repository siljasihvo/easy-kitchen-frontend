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
		<div class="information">
			<p>{{ itemName }}</p>
			<p class="subtitle">{{ quantity }}</p>
			<p class="tiny-text">
				{{ emoji }} <span>{{ storage }}</span>
			</p>
		</div>
	</section>
</template>

<style scoped>
.grid-card {
	display: flex;
	width: 100%;
	background-color: var(--cards);
	box-sizing: border-box;
	padding: 12px 12px;
	border-radius: 10px;
}

.grid-card img {
	width: 66px;
	height: 66px;
	object-fit: cover;
	border-radius: 10px;
}

.grid-card p {
	width: 100%;
	text-align: left;
	padding-left: 12px;
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

.information {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 4px;
}
</style>
