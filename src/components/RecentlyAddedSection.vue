<script setup>
import OverviewCard from "./OverviewCard.vue";

const allItems = [
	{
		itemName: "Ground Beef",
		quantity: "350g",
		category: "🍖 Meat",
		storage: "❄️ Fridge",
		imageSrc: "src/assets/images/ground-beef.png",
		expiryStatus: "fresh",
	},
	{
		itemName: "Chicken Nuggets",
		quantity: "1 pack",
		category: "🍖 Meat",
		storage: "🧊 Freezer",
		imageSrc: "src/assets/images/chicken-nuggets.png",
		expiryStatus: "fresh",
	},
	{
		itemName: "Apples",
		quantity: "10 pieces",
		category: "🍒 Fruit",
		storage: "📦 Cupboard",
		imageSrc: "src/assets/images/apples.png",
		expiryStatus: "fresh",
	},
	{
		itemName: "Bitterballen",
		quantity: "2 packs",
		category: "🍖 Meat",
		storage: "🧊 Freezer",
		imageSrc: "src/assets/images/bitterballen.png",
		expiryStatus: "fresh",
	},
];
</script>

<template>
	<section>
		<h3>Recently Added</h3>

		<div class="section-content">
			<OverviewCard
				v-for="(item, index) in allItems"
				:key="index"
				:item-name="item.itemName"
				:quantity="item.quantity"
				:category="item.category"
				:storage="item.storage"
				:image-src="item.imageSrc"
				:expiry-status="item.expiryStatus" />
		</div>
	</section>
</template>

<style scoped>
h3 {
	padding-bottom: 8px;
}

.section-content {
	display: flex;
	flex-direction: column;
	gap: 6px;
}
</style>
