<script setup>
import Searchbar from "../components/Searchbar.vue";
import GridCard from "../components/GridCard.vue";
import ViewToggle from "@/components/ViewToggle.vue";

defineProps({
	id: String,
});
</script>

<template>
	<Searchbar />
	<h2>{{ id }}</h2>
	<ViewToggle />
	<GridCard
		imageSrc="../src/assets/images/chicken.png"
		itemName="Sample Item"
		quantity="2 pcs"
		storage="Fridge"
		emoji="🥦" />
</template>

<style scoped></style>
