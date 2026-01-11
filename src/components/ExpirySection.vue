<script setup>
import { ref, computed } from "vue";
import { usePantryStore } from "@/stores/pantry";
import { useRouter } from "vue-router";

import OverviewCard from "./OverviewCard.vue";

const router = useRouter();
const pantryStore = usePantryStore();
const isExpanded = ref(false);

const toggleSection = () => {
	isExpanded.value = !isExpanded.value;
};

const expiringItems = computed(() => {
	return pantryStore.items
		.filter((item) => item.expiresInDays <= 7)
		.sort((a, b) => a.expiresInDays - b.expiresInDays)
		.map((item) => {
			const category = pantryStore.categories.find(
				(c) => c.id === item.categoryId
			);
			const storage = pantryStore.storageLocations.find(
				(s) => s.id === item.storageId
			);

			return {
				id: item.id,
				itemName: item.name,
				quantity: item.quantity,
				category: `${category?.emoji} ${category?.name}`,
				storage: `${storage?.emoji} ${storage?.name}`,
				imageSrc: pantryStore.getItemImagePath(item),
				expiryStatus: item.expiresInDays < 0 ? "expired" : "expiring",
				expiresInDays: item.expiresInDays,
			};
		});
});

const displayedItems = computed(() => {
	return isExpanded.value
		? expiringItems.value
		: expiringItems.value.slice(0, 2);
});

const goToItem = (itemId) => {
	router.push({ name: "item-detail", params: { id: itemId } });
};
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
				:expiry-status="item.expiryStatus"
				:expires-in-days="item.expiresInDays"
				@click="goToItem(item.id)" />
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
