<script setup>
import { useRouter } from "vue-router";
import { usePantryStore } from "@/stores/pantry";
import { computed } from "vue";
import CategoryListCard from "../components/CategoryListCard.vue";

const router = useRouter();
const pantryStore = usePantryStore();

const openCategory = (categoryId) => {
	router.push({ name: "category-detail", params: { id: categoryId } });
};

const categoriesWithStats = computed(() => {
	return pantryStore.categories.map((category) => {
		const categoryItems = pantryStore.items.filter(
			(item) => item.categoryId === category.id,
		);

		return {
			...category,
			quantity: categoryItems.length,
			expiredCount: categoryItems.filter((item) => item.expiresInDays < 0)
				.length,
			expiringCount: categoryItems.filter(
				(item) => item.expiresInDays >= 0 && item.expiresInDays <= 7,
			).length,
		};
	});
});
</script>

<template>
	<section class="category-list-header">
		<h2>Categories</h2>
		<img src="@/assets/icons/edit-icon.svg" alt="Edit category icon" />
	</section>
	<section class="category-list">
		<CategoryListCard
			v-for="category in categoriesWithStats"
			:key="category.id"
			:category="category.name"
			:emoji="category.emoji"
			:quantity="category.quantity"
			:expired-count="category.expiredCount"
			:expiring-count="category.expiringCount"
			@click="openCategory(category.id)" />
	</section>
</template>

<style scoped>
.category-list-header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.category-list-header img {
	width: 25px;
	height: auto;
	cursor: pointer;
}

.category-list {
	display: flex;
	flex-direction: column;
	gap: 4px;
}
</style>
