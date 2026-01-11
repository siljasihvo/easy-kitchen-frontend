<script setup>
import { ref, computed } from "vue";
import { usePantryStore } from "@/stores/pantry";
import Searchbar from "../components/Searchbar.vue";
import ViewToggle from "../components/ViewToggle.vue";
import Grid from "../components/Grid.vue";
import List from "../components/List.vue";

const props = defineProps({
	id: String,
});

const currentView = ref("grid");
const pantryStore = usePantryStore();

const storage = computed(() => {
	return pantryStore.storageLocations.find(s => s.id === props.id);
});

const storageItems = computed(() => {
	return pantryStore.items.filter(item => item.storageId === props.id);
});
</script>

<template>
	<main>
		<section class="top-section">
			<Searchbar />
			<h2>{{ storage?.name }}</h2>
			<ViewToggle v-model="currentView" />
		</section>
		<Grid v-if="currentView === 'grid'" :items="storageItems" context="storage" />
		<List v-else-if="currentView === 'list'" :items="storageItems" context="storage" />
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