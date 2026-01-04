<script setup>
defineProps({
	category: String,
	emoji: String,
	quantity: Number,
	expiredCount: {
		type: Number,
		default: 0,
	},
	expiringCount: {
		type: Number,
		default: 0,
	},
});
</script>

<template>
	<section class="category-card">
		<p class="emoji">{{ emoji }}</p>
		<div class="information">
			<p>{{ category }}</p>
			<div class="footer">
				<p class="faded-text">{{ quantity }} items</p>

				<template v-if="expiredCount > 0">
					<img src="../assets/icons/expired.svg" alt="Expired icon" />
					<span class="faded-text">{{ expiredCount }}</span>
				</template>

				<template v-if="expiringCount > 0">
					<img
						src="../assets/icons/expiring.svg"
						alt="Expiring soon icon" />
					<span class="faded-text">{{ expiringCount }}</span>
				</template>
			</div>
		</div>
		<img
			src="../assets/icons/chevron.svg"
			alt="Go to category icon"
			class="chevron" />
	</section>
</template>

<style scoped>
.category-card {
	display: flex;
	box-sizing: border-box;
	width: 100%;
	background-color: var(--cards);
	border-radius: 10px;
	padding: 12px 10px;
	gap: 15px;
	cursor: pointer;
}

.emoji {
	font-size: 35px;
}

.footer img {
	width: 15px;
	height: auto;
}

.footer {
	display: flex;
	align-items: center;
	gap: 6px;
}

.faded-text {
	opacity: 0.7;
}

.information {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3px;
}

.chevron {
	margin-left: auto;
	width: 20px;
	height: auto;
	opacity: 0.7;
}
</style>
