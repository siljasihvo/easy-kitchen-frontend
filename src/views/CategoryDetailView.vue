<script setup>
import Searchbar from "../components/Searchbar.vue";
import ViewToggle from "@/components/ViewToggle.vue";
import Grid from "@/components/Grid.vue";
import List from "@/components/List.vue";

defineProps({
	id: String,
});
</script>

<template>
	<Searchbar />
	<h2>{{ id }}</h2>
	<ViewToggle />
	<!-- <Grid /> -->
	<List />
</template>

<style scoped></style>
