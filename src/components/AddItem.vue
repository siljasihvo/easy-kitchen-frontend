<script setup>
import AddPhoto from "./AddPhoto.vue";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";

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
	<AddPhoto />
	<BaseInput label="Item Name" placeholder="e.g. Banana, Milk" />
	<BaseInput label="Quantity" placeholder="e.g. 1L, 350g" />
	<BaseSelect
		label="Category"
		defaultText="Select Category"
		:options="categoryList" />
	<BaseSelect
		label="Storage"
		defaultText="Select Location"
		:options="storageList" />
</template>
