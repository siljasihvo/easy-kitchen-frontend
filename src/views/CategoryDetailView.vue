<script setup>
import Searchbar from "../components/Searchbar.vue";
import ViewToggle from "@/components/ViewToggle.vue";
import Grid from "@/components/Grid.vue";

defineProps({
	id: String,
});
</script>

<template>
	<Searchbar />
	<h2>{{ id }}</h2>
	<ViewToggle />
	<Grid />
</template>

<style scoped></style>
