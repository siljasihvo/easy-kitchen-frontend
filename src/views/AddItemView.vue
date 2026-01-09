<script setup>
import { ref } from "vue";
import TabHeader from "../components/TabHeader.vue";

const currentTab = ref("AddItem");
</script>

<template>
	<div class="page-container">
		<TabHeader
			:activeTab="currentTab"
			@update:activeTab="(newValue) => (currentTab = newValue)" />
	</div>
</template>
