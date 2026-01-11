<script setup>
import { computed } from "vue";
import { usePantryStore } from "@/stores/pantry";
import InformationCard from "./InformationCard.vue";

const pantryStore = usePantryStore();

const totalItems = computed(() => pantryStore.items.length);

const expiringSoonCount = computed(() => {
	return pantryStore.items.filter(item => item.expiresInDays >= 0 && item.expiresInDays <= 7).length;
});

const expiredCount = computed(() => {
	return pantryStore.items.filter(item => item.expiresInDays < 0).length;
});
</script>

<template>
	<section class="information-cards">
		<InformationCard :count="totalItems" description="Total items" />
		<InformationCard :count="expiringSoonCount" description="Expiring soon" />
		<InformationCard :count="expiredCount" description="Expired" />
	</section>
</template>

<style scoped>
.information-cards {
	display: flex;
	justify-content: space-between;
}
</style>