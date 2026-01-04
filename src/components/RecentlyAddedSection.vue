<script setup>
import OverviewCard from "./OverviewCard.vue";

const allItems = [
	{
		itemName: "Bananas",
		quantity: "6 pieces",
		category: "🍒 Fruit",
		storage: "📦 Cupboard",
		imageSrc: "src/assets/images/bananas.png",
		expiryStatus: "fresh",
	},
	{
		itemName: "Kiwi",
		quantity: "2 pieces",
		category: "🍒 Fruit",
		storage: "📦 Cupboard",
		imageSrc: "src/assets/images/bananas.png",
		expiryStatus: "fresh",
	},
	{
		itemName: "Chicken Breast",
		quantity: "500g",
		category: "🍖 Meat",
		storage: "❄️ Fridge",
		imageSrc: "src/assets/images/bananas.png",
		expiryStatus: "fresh",
	},
	{
		itemName: "Bitterballen",
		quantity: "2 packs",
		category: "🍖 Meat",
		storage: "🧊 Freezer",
		imageSrc: "src/assets/images/bananas.png",
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
