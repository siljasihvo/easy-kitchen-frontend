<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { usePantryStore } from "@/stores/pantry";
import AddPhoto from "./AddPhoto.vue";
import BaseInput from "./BaseInput.vue";
import BaseSelect from "./BaseSelect.vue";
import AddItemButton from "./AddItemButton.vue";
import ExpiryDate from "./ExpiryDate.vue";

const router = useRouter();
const pantryStore = usePantryStore();

const itemName = ref("");
const selectedCategory = ref("");
const selectedStorage = ref("");
const expiryDate = ref("");
const quantity = ref("");
const photo = ref(null);

const categoryList = pantryStore.categories.map(c => ({ id: c.id, name: c.name }));
const storageList = pantryStore.storageLocations.map(s => ({ id: s.id, name: s.name }));

// Calculate days until expiry
const calculateExpiresInDays = (expiryDateString) => {
	if (!expiryDateString) return 365;
	const expiry = new Date(expiryDateString);
	const today = new Date();
	const diffTime = expiry - today;
	const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
	return diffDays;
};

// Process photo file to data URL
const processPhoto = async (file) => {
	if (!file) return null;
	
	return new Promise((resolve) => {
		const reader = new FileReader();
		reader.onload = (e) => {
			resolve(e.target.result);
		};
		reader.readAsDataURL(file);
	});
};

const handleAddItem = async () => {
	if (!itemName.value || !selectedCategory.value || !selectedStorage.value || !quantity.value) {
		alert("Please fill in all required fields");
		return;
	}

	const photoData = photo.value ? await processPhoto(photo.value) : null;

	const newItem = {
		name: itemName.value,
		categoryId: selectedCategory.value,
		storageId: selectedStorage.value,
		quantity: quantity.value,
		expiresInDays: calculateExpiresInDays(expiryDate.value),
		customImage: photoData,
	};

	pantryStore.addItem(newItem);
	router.push("/");
};
</script>

<template>
	<main>
		<AddPhoto v-model="photo" />
		<BaseInput 
			label="Item Name" 
			placeholder="e.g. Banana, Milk" 
			v-model="itemName" />
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
		<ExpiryDate v-model="expiryDate" />
		<BaseInput 
			label="Quantity" 
			placeholder="e.g. 1L, 350g" 
			v-model="quantity" />
		<AddItemButton @click="handleAddItem" />
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 12px;
}
</style>