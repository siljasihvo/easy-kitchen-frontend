<script setup>
import Searchbar from "../components/Searchbar.vue";
import Information from "../components/Information.vue";
import Greeting from "../components/Greeting.vue";
import ExpirySection from "../components/ExpirySection.vue";
import RecentlyAddedSection from "@/components/RecentlyAddedSection.vue";
</script>

<template>
	<main>
		<Greeting />
		<Searchbar />
		<Information />
		<ExpirySection />
		<RecentlyAddedSection />
	</main>
</template>

<style scoped>
main {
	display: flex;
	flex-direction: column;
	gap: 18px;
}
</style>
