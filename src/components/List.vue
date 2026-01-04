<script setup>
import ListCard from "../components/ListCard.vue";

defineProps({
	id: String,
});
</script>

<template>
	<section class="list-container">
		<ListCard
			imageSrc="../src/assets/images/chicken.png"
			itemName="Chicken Breast"
			quantity="500g"
			storage="Fridge"
			emoji="❄️" />

		<ListCard
			imageSrc="../src/assets/images/ground-beef.png"
			itemName="Ground Beef"
			quantity="350g"
			storage="Fridge"
			emoji="❄️" />

		<ListCard
			imageSrc="../src/assets/images/chicken-nuggets.png"
			itemName="Chicken Nuggets"
			quantity="1 pack"
			storage="Freezer"
			emoji="🧊" />
	</section>
</template>

<style scoped>
.list-container {
	display: flex;
	flex-direction: column;
	gap: 5px;
}
</style>
