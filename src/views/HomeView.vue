<script setup>
import Navigation from "../components/Navigation.vue";
import Searchbar from "../components/Searchbar.vue";
import Information from "../components/Information.vue";
import OverviewCard from "../components/OverviewCard.vue";
import Greeting from "../components/Greeting.vue";
</script>

<template>
	<main>
		<Greeting />
		<Navigation />
		<Searchbar />
		<Information />
		<!-- <OverviewCard /> -->
		<OverviewCard
			item-name="Bananas"
			quantity="6 pieces"
			category="🍒 Fruit"
			storage="📦 Cupboard"
			image-src="src/assets/images/bananas.png"
			expiry-status="expired" />

		<OverviewCard
			item-name="Milk"
			quantity="1L"
			category="🥛 Dairy"
			storage="❄️ Fridge"
			image-src="src/assets/images/bananas.png"
			expiry-status="expiring" />

		<OverviewCard
			item-name="Apples"
			quantity="5 pieces"
			category="🍎 Fruit"
			storage="❄️ Fridge"
			image-src="src/assets/images/bananas.png"
			expiry-status="fresh" />
	</main>
</template>
