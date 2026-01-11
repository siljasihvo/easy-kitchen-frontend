<script setup>
import { ref, computed } from "vue";
import { usePantryStore } from "@/stores/pantry";
import ExpiryDate from "../components/ExpiryDate.vue";
import BaseSelect from "../components/BaseSelect.vue";
import BaseInput from "../components/BaseInput.vue";

const props = defineProps({
	id: Number,
});

const pantryStore = usePantryStore();

const categoryList = pantryStore.categories.map((c) => ({
	id: c.id,
	name: c.name,
}));
const storageList = pantryStore.storageLocations.map((s) => ({
	id: s.id,
	name: s.name,
}));

const item = computed(() => {
	return pantryStore.items.find((i) => i.id === Number(props.id));
});
</script>

<template>
	<main>
		<h2>{{ item.name }}</h2>
		<img :src="pantryStore.getItemImagePath(item)" :alt="item.name" />
		<BaseSelect
			label="Category"
			defaultText="Select Category"
			:options="categoryList"
			v-model="selectedCategory" />
		<BaseSelect
			label="Storage"
			defaultText="Select Location"
			:options="storageList"
			v-model="selectedStorage" />
		<ExpiryDate />
		<BaseInput
			label="Notes"
			placeholder="Notes, meal ideas, specifics..."
			v-model="quantity" />
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 18px;
}

main img {
	width: 100%;
	height: 180px;
	object-fit: cover;
	border-radius: 10px;
}
</style>
