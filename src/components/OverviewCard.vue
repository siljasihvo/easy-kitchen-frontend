<script setup>
defineProps({
	itemName: String,
	quantity: String,
	category: String,
	storage: String,
	imageSrc: String,
	expiryStatus: {
		type: String,
		default: "fresh",
		validator: (value) => ["fresh", "expiring", "expired"].includes(value),
	},
});
</script>

<template>
	<section :class="`${expiryStatus}`">
		<img :src="imageSrc" :alt="itemName" />
		<div class="info">
			<p>{{ itemName }}</p>
			<p class="subtitle">{{ quantity }}</p>
			<div class="footer">
				<p>
					{{ category?.split(" ")[0] }}
					<span class="faded-text">
						{{ category?.split(" ").slice(1).join(" ") }}
					</span>
				</p>
				<p>
					{{ storage?.split(" ")[0] }}
					<span class="faded-text">
						{{ storage?.split(" ").slice(1).join(" ") }}
					</span>
				</p>
			</div>
		</div>
		<span v-if="expiryStatus !== 'fresh'" class="expiry-tag">
			{{ expiryStatus === "expired" ? "Expired" : "2 days" }}
		</span>
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: row;
	align-items: center;
	width: 100%;
	background-color: var(--cards);
	border-radius: 10px;
	padding: 10px;
	box-sizing: border-box;
	border: 2px solid transparent;
	cursor: pointer;
}

img {
	width: 66px;
	height: 66px;
	object-fit: cover;
	border-radius: 10px;
}

.subtitle {
	font-size: 14px;
	opacity: 0.7;
}

.footer p {
	font-size: 12px;
}

.faded-text {
	opacity: 0.7;
}

.info {
	display: flex;
	flex-direction: column;
	gap: 4px;
	padding-left: 8px;
}

.footer {
	display: flex;
	align-items: center;
	gap: 12px;
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
