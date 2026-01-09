<script setup>
import { ref } from "vue";
import TabHeader from "../components/TabHeader.vue";
import AddItem from "../components/AddItem.vue";
import Barcode from "../components/Barcode.vue";

const currentTab = ref("AddItem");
</script>

<template>
	<div class="page-container">
		<TabHeader v-model:activeTab="currentTab" />

		<div class="tab-content">
			<AddItem v-if="currentTab === 'AddItem'" />
			<Barcode v-else-if="currentTab === 'Barcode'" />
		</div>
	</div>
</template>
