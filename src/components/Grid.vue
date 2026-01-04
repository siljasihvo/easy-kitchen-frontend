<script setup>
import GridCard from "../components/GridCard.vue";

defineProps({
	id: String,
});
</script>

<template>
	<section class="grid-container">
		<GridCard
			imageSrc="../src/assets/images/chicken.png"
			itemName="Chicken Breast"
			quantity="500g"
			storage="Fridge"
			emoji="❄️" />

		<GridCard
			imageSrc="../src/assets/images/ground-beef.png"
			itemName="Ground Beef"
			quantity="350g"
			storage="Fridge"
			emoji="❄️" />

		<GridCard
			imageSrc="../src/assets/images/chicken-nuggets.png"
			itemName="Chicken Nuggets"
			quantity="1 pack"
			storage="Freezer"
			emoji="🧊" />
	</section>
</template>

<style scoped>
.grid-container {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 5px;
}
</style>
