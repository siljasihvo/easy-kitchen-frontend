<script setup>
import Searchbar from "../components/Searchbar.vue";
import Information from "../components/Information.vue";
import OverviewCard from "../components/OverviewCard.vue";
import Greeting from "../components/Greeting.vue";
import ExpirySection from "../components/ExpirySection.vue";
</script>

<template>
	<main>
		<Greeting />
		<Searchbar />
		<Information />
		<ExpirySection />
	</main>
</template>
