<script setup>
import Searchbar from "../components/Searchbar.vue";
import GridCard from "../components/GridCard.vue";

defineProps({
	id: String,
});
</script>

<template>
	<Searchbar />
	<h2>{{ id }}</h2>
</template>

<style scoped></style>
