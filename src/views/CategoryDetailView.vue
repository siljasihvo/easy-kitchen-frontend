<script setup>
import { ref } from "vue";
import Searchbar from "../components/Searchbar.vue";
import ViewToggle from "@/components/ViewToggle.vue";
import Grid from "@/components/Grid.vue";
import List from "@/components/List.vue";

defineProps({
	id: String,
});

const currentView = ref("grid");
</script>

<template>
	<main>
		<section class="top-section">
			<Searchbar />
			<h2>{{ id }}</h2>
			<ViewToggle v-model="currentView" />
		</section>
		<Grid v-if="currentView === 'grid'" />
		<List v-else-if="currentView === 'list'" />
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 8px;
}

.top-section {
	display: flex;
	flex-direction: column;
	gap: 18px;
}
</style>
