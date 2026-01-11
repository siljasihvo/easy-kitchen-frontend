<script setup>
import { computed } from "vue";
import { usePantryStore } from "@/stores/pantry";
import OverviewCard from "./OverviewCard.vue";

const pantryStore = usePantryStore();

const recentlyAddedItems = computed(() => {
	return pantryStore.items
		.slice(-6)
		.reverse()
		.map(item => {
			const category = pantryStore.categories.find(c => c.id === item.categoryId);
			const storage = pantryStore.storageLocations.find(s => s.id === item.storageId);
			
			return {
				itemName: item.name,
				quantity: item.quantity,
				category: `${category?.emoji} ${category?.name}`,
				storage: `${storage?.emoji} ${storage?.name}`,
				imageSrc: pantryStore.getItemImagePath(item),
				expiryStatus: 'fresh',
			};
		});
});
</script>

<template>
	<section>
		<h3>Recently Added</h3>

		<div class="section-content">
			<OverviewCard
				v-for="(item, index) in recentlyAddedItems"
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