<script setup>
defineProps({
	activeTab: String,
});

const emit = defineEmits(["update:activeTab"]);

const selectTab = (tabName) => {
	emit("update:activeTab", tabName);
};
</script>

<template>
	<section class="tab-header">
		<button
			class="tab-btn"
			:class="{ active: activeTab === 'AddItem' }"
			@click="selectTab('AddItem')">
			Add Item
		</button>

		<button
			class="tab-btn"
			:class="{ active: activeTab === 'Barcode' }"
			@click="selectTab('Barcode')">
			Barcode
		</button>
	</section>
</template>

<style scoped>
.tab-header {
	display: flex;
	justify-content: center;
	border-bottom: 2px solid #615b54;
}

.tab-btn {
	background: none;
	border: none;
	cursor: pointer;
	padding: 4px 0px;
	font-size: 24px;
	color: var(--secondary);
	border-bottom: 3px solid transparent;
	margin-bottom: -2px;
	transition: all 0.3s;
	width: 100%;
}

.tab-btn.active {
	font-weight: 500;
	border-bottom: 3px solid var(--secondary);
}

.tab-btn:hover {
	color: #1d160f;
}
</style>
