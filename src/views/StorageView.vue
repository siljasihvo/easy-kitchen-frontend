<script setup>
import Searchbar from "../components/Searchbar.vue";
import StorageList from "../components/StorageList.vue";
</script>

<template>
	<main>
		<Searchbar />
		<StorageList />
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 18px;
}
</style>