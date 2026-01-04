<script setup>
import InformationCard from "./InformationCard.vue";
</script>

<template>
	<section class="information-cards">
		<InformationCard :count="47" description="Total items" />
		<InformationCard :count="6" description="Expiring soon" />
		<InformationCard :count="3" description="Expired" />
	</section>
</template>

<style scoped>
.information-cards {
	display: flex;
	justify-content: space-between;
}
</style>
