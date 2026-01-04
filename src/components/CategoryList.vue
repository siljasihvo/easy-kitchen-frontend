<script setup>
import CategoryListCard from "../components/CategoryListCard.vue";
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
			:expiring-count="3" />

		<CategoryListCard
			category="Fruit"
			emoji="🍒"
			:quantity="12"
			:expiring-count="1" />

		<CategoryListCard
			category="Vegetables"
			emoji="🥬"
			:quantity="11"
			:expired-count="1" />

		<CategoryListCard category="Canned Food" emoji="🥫" :quantity="3" />

		<CategoryListCard category="Snacks" emoji="🍪" :quantity="9" />

		<CategoryListCard
			category="Frozen Food"
			emoji="🍦"
			:quantity="21"
			:expiring-count="1" />

		<CategoryListCard
			category="Dairy"
			emoji="🥛"
			:quantity="3"
			:expired-count="1" />
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
