<script setup>
import { useRouter } from "vue-router";
import { usePantryStore } from "@/stores/pantry";
import { computed } from "vue";
import CategoryListCard from "../components/CategoryListCard.vue";

const router = useRouter();
const pantryStore = usePantryStore();

const openStorage = (storageId) => {
	router.push({ name: "storage-detail", params: { id: storageId } });
};

const storageWithStats = computed(() => {
	return pantryStore.storageLocations.map((storage) => {
		const storageItems = pantryStore.items.filter(
			(item) => item.storageId === storage.id,
		);

		return {
			...storage,
			quantity: storageItems.length,
			expiredCount: storageItems.filter((item) => item.expiresInDays < 0)
				.length,
			expiringCount: storageItems.filter(
				(item) => item.expiresInDays >= 0 && item.expiresInDays <= 7,
			).length,
		};
	});
});
</script>

<template>
	<section class="storage-list-header">
		<h2>Storage</h2>
		<img src="@/assets/icons/edit-icon.svg" alt="Edit storage icon" />
	</section>
	<section class="storage-list">
		<CategoryListCard
			v-for="storage in storageWithStats"
			:key="storage.id"
			:category="storage.name"
			:emoji="storage.emoji"
			:quantity="storage.quantity"
			:expired-count="storage.expiredCount"
			:expiring-count="storage.expiringCount"
			@click="openStorage(storage.id)" />
	</section>
</template>

<style scoped>
.storage-list-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.storage-list-header img {
	width: 25px;
	height: auto;
	cursor: pointer;
}

.storage-list {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
</style>
