<script setup>
import AddPhoto from "./AddPhoto.vue";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
import AddItemButton from "./AddItemButton.vue";

const categoryList = [
	"Meat",
	"Fruit",
	"Vegetables",
	"Canned Food",
	"Snacks",
	"Frozen Food",
	"Dairy",
];

const storageList = [
	"Fridge",
	"Freezer",
	"Freezer 2",
	"Cupboard",
	"Pantry",
	"Other",
];
</script>

<template>
	<main>
		<AddPhoto />
		<BaseInput label="Item Name" placeholder="e.g. Banana, Milk" />
		<BaseSelect
			label="Category"
			defaultText="Select Category"
			:options="categoryList" />
		<BaseSelect
			label="Storage"
			defaultText="Select Location"
			:options="storageList" />
		<BaseInput label="Quantity" placeholder="e.g. 1L, 350g" />
		<AddItemButton />
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
</style>
