<script setup>
import Searchbar from "../components/Searchbar.vue";
import CategoryList from "../components/CategoryList.vue";
</script>

<template>
	<main>
		<Searchbar />
		<CategoryList />
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 18px;
}
</style>
