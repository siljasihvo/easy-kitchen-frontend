<script setup>
import { useRouter } from "vue-router";
import CategoryListCard from "../components/CategoryListCard.vue";

const router = useRouter();

const openCategory = (categoryName) => {
	router.push({ name: "category-detail", params: { id: categoryName } });
};
</script>

<template>
	<section class="category-list-header">
		<h2>Categories</h2>
		<img src="../assets/icons/edit-icon.svg" alt="Edit category icon" />
	</section>
	<section class="category-list">
		<CategoryListCard
			category="Meat"
			emoji="🥩"
			:quantity="7"
			:expired-count="1"
			:expiring-count="3"
			@click="openCategory('Meat')" />

		<CategoryListCard
			category="Fruit"
			emoji="🍒"
			:quantity="12"
			:expiring-count="1"
			@click="openCategory('Fruit')" />

		<CategoryListCard
			category="Vegetables"
			emoji="🥬"
			:quantity="11"
			:expired-count="1"
			@click="openCategory('Vegetables')" />

		<CategoryListCard
			category="Canned Food"
			emoji="🥫"
			:quantity="3"
			@click="openCategory('Canned Food')" />

		<CategoryListCard
			category="Snacks"
			emoji="🍪"
			:quantity="9"
			@click="openCategory('Snacks')" />

		<CategoryListCard
			category="Frozen Food"
			emoji="🍦"
			:quantity="21"
			:expiring-count="1"
			@click="openCategory('Frozen Food')" />

		<CategoryListCard
			category="Dairy"
			emoji="🥛"
			:quantity="3"
			:expired-count="1"
			@click="openCategory('Dairy')" />
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
