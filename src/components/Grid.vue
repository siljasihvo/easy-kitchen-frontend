<script setup>
import { computed } from "vue";
import { usePantryStore } from "@/stores/pantry";
import GridCard from "../components/GridCard.vue";

const props = defineProps({
	items: Array,
	context: {
		type: String,
		default: 'category', 
	}
});

const pantryStore = usePantryStore();

// Sort items by expiry date
const sortedItems = computed(() => {
	return [...props.items].sort((a, b) => a.expiresInDays - b.expiresInDays);
});

const getStorageEmoji = (storageId) => {
	const storage = pantryStore.storageLocations.find(s => s.id === storageId);
	return storage?.emoji || '📦';
};

const getStorageName = (storageId) => {
	const storage = pantryStore.storageLocations.find(s => s.id === storageId);
	return storage?.name || storageId;
};

const getCategoryEmoji = (categoryId) => {
	const category = pantryStore.categories.find(c => c.id === categoryId);
	return category?.emoji || '📦';
};

const getCategoryName = (categoryId) => {
	const category = pantryStore.categories.find(c => c.id === categoryId);
	return category?.name || categoryId;
};

const getExpiryStatus = (expiresInDays) => {
	if (expiresInDays < 0) return 'expired';
	if (expiresInDays <= 7) return 'expiring';
	return 'fresh';
};
</script>

<template>
	<section class="grid-container">
		<GridCard
			v-for="item in sortedItems"
			:key="item.id"
			:imageSrc="pantryStore.getItemImagePath(item)"
			:itemName="item.name"
			:quantity="item.quantity"
			:storage="context === 'storage' ? getCategoryName(item.categoryId) : getStorageName(item.storageId)"
			:emoji="context === 'storage' ? getCategoryEmoji(item.categoryId) : getStorageEmoji(item.storageId)"
			:expiryStatus="getExpiryStatus(item.expiresInDays)"
			:expiresInDays="item.expiresInDays" />
	</section>
</template>

<style scoped>
.grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 5px;
}
</style>