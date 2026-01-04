<script setup>
import Searchbar from "../components/Searchbar.vue";
import ViewToggle from "@/components/ViewToggle.vue";
import Grid from "@/components/Grid.vue";
import ListCard from "@/components/ListCard.vue";

defineProps({
	id: String,
});
</script>

<template>
	<Searchbar />
	<h2>{{ id }}</h2>
	<ViewToggle />
	<!-- <Grid /> -->
	<ListCard
		imageSrc="../src/assets/images/chicken.png"
		itemName="Chicken Breast"
		quantity="500g"
		storage="Fridge"
		emoji="❄️" />
</template>

<style scoped></style>
