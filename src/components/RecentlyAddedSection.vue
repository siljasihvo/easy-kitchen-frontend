<script setup>
import { computed } from "vue";
import { usePantryStore } from "@/stores/pantry";
import { useRouter } from "vue-router";

import OverviewCard from "./OverviewCard.vue";

const router = useRouter();
const pantryStore = usePantryStore();

const recentlyAddedItems = computed(() => {
	return pantryStore.items
		.slice(-6)
		.reverse()
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
				expiryStatus: "fresh",
			};
		});
});

const goToItem = (itemId) => {
	router.push({ name: "item-detail", params: { id: itemId } });
};
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
				:expiry-status="item.expiryStatus"
				@click="goToItem(item.id)" />
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
