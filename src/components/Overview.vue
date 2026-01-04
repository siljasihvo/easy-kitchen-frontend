<script setup>
import OverviewCard from "../components/OverviewCard.vue";
</script>

<template>
	<section class="overview-cards">
		<OverviewCard count="47" description="Total items" />
		<OverviewCard count="6" description="Expiring soon" />
		<OverviewCard count="3" description="Expired" />
	</section>
</template>

<style scoped>
.overview-cards {
	display: flex;
	justify-content: space-between;
}
</style>
