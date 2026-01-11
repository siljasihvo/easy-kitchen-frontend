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
	<section class="list-card" :class="expiryStatus">
		<img :src="imageSrc" :alt="itemName" />
		<div class="information">
			<p>{{ itemName }}</p>
			<p class="subtitle">{{ quantity }}</p>
			<p class="tiny-text">
				{{ emoji }} <span>{{ storage }}</span>
			</p>
		</div>
		<span v-if="expiryStatus !== 'fresh'" class="expiry-tag">
			{{ expiryStatus === "expired" ? "Expired" : `${expiresInDays} ${expiresInDays === 1 ? 'day' : 'days'}` }}
		</span>
	</section>
</template>

<style scoped>
.list-card {
	display: flex;
	width: 100%;
	background-color: var(--cards);
	box-sizing: border-box;
	padding: 12px 12px;
	border-radius: 10px;
	cursor: pointer;
	border: 2px solid transparent;
	position: relative;
}

.list-card img {
	width: 66px;
	height: 66px;
	object-fit: cover;
	border-radius: 10px;
}

.list-card p {
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
	margin-left: auto;
	margin-bottom: auto;
	color: white;
	padding: 4px 8px;
	border-radius: 10px;
	font-size: 14px;
}
</style>