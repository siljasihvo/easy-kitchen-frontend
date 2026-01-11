<script setup>
defineProps({
	imageSrc: String,
	itemName: String,
	quantity: String,
	storage: String,
	emoji: String,
	expiryStatus: {
		type: String,
		default: "fresh",
		validator: (value) => ["fresh", "expiring", "expired"].includes(value),
	},
	expiresInDays: {
		type: Number,
		default: null,
	},
});
</script>

<template>
	<section class="grid-card" :class="expiryStatus">
		<img :src="imageSrc" :alt="itemName" />
		<p>{{ itemName }}</p>
		<p class="subtitle">{{ quantity }}</p>
		<p class="tiny-text">
			{{ emoji }} <span>{{ storage }}</span>
		</p>
		<span v-if="expiryStatus !== 'fresh'" class="expiry-tag">
			{{ expiryStatus === "expired" ? "Expired" : `${expiresInDays} ${expiresInDays === 1 ? 'day' : 'days'}` }}
		</span>
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
	cursor: pointer;
	border: 2px solid transparent;
	position: relative;
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

.expired {
	border-color: var(--expired);
}

.expiring {
	border-color: var(--expiring);
}

.expired .expiry-tag {
	background-color: var(--expired);
}

.expiring .expiry-tag {
	background-color: var(--expiring);
}

.expiry-tag {
	position: absolute;
	top: 8px;
	right: 8px;
	color: white;
	padding: 4px 8px;
	border-radius: 10px;
	font-size: 12px;
}
</style>