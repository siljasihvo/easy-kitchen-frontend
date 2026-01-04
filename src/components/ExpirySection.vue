<script setup>
import { ref, computed } from "vue";
import OverviewCard from "./OverviewCard.vue";

const isExpanded = ref(false);

const toggleSection = () => {
	isExpanded.value = !isExpanded.value;
};

const allItems = [
	{
		itemName: "Bananas",
		quantity: "6 pieces",
		category: "🍒 Fruit",
		storage: "📦 Cupboard",
		imageSrc: "src/assets/images/bananas.png",
		expiryStatus: "expired",
	},
	{
		itemName: "Kiwi",
		quantity: "2 pieces",
		category: "🍒 Fruit",
		storage: "📦 Cupboard",
		imageSrc: "src/assets/images/kiwi.png",
		expiryStatus: "expiring",
	},
	{
		itemName: "Chicken Breast",
		quantity: "500g",
		category: "🍖 Meat",
		storage: "❄️ Fridge",
		imageSrc: "src/assets/images/chicken.png",
		expiryStatus: "expiring",
	},
	{
		itemName: "Bitterballen",
		quantity: "2 packs",
		category: "🍖 Meat",
		storage: "🧊 Freezer",
		imageSrc: "src/assets/images/bitterballen.png",
		expiryStatus: "expiring",
	},
];

const displayedItems = computed(() => {
	return isExpanded.value ? allItems : allItems.slice(0, 2);
});
</script>

<template>
	<section>
		<div class="section-header" @click="toggleSection">
			<h3>Expiring Soon</h3>
			<svg
				class="chevron"
				:class="{ rotated: isExpanded }"
				width="24"
				height="24"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round">
				<polyline points="6 9 12 15 18 9"></polyline>
			</svg>
		</div>

		<div class="section-content">
			<OverviewCard
				v-for="(item, index) in displayedItems"
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
.section-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	user-select: none;
	padding-bottom: 8px;
}

.chevron {
	transition: transform 0.3s ease;
	color: #666;
}

.chevron.rotated {
	transform: rotate(180deg);
}

.section-content {
	display: flex;
	flex-direction: column;
	gap: 6px;
}
</style>
