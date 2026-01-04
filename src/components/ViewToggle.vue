<script>
export default {
	name: "ViewToggle",
	data() {
		return {
			activeView: "grid",
		};
	},
};
</script>

<template>
	<div class="view-toggle">
		<div
			class="toggle-indicator"
			:class="{ 'list-view': activeView === 'list' }"></div>
		<button
			class="toggle-btn"
			:class="{ active: activeView === 'grid' }"
			@click="activeView = 'grid'">
			<img src="@/assets/icons/grid-icon.svg" alt="Grid view" />
		</button>
		<button
			class="toggle-btn"
			:class="{ active: activeView === 'list' }"
			@click="activeView = 'list'">
			<img src="@/assets/icons/list-icon.svg" alt="List view" />
		</button>
	</div>
</template>

<style scoped>
.view-toggle {
	position: relative;
	display: inline-flex;
	background: var(--primary);
	border-radius: 6px;
	padding: 4px;
	gap: 4px;
}

.toggle-indicator {
	position: absolute;
	top: 4px;
	left: 4px;
	width: 34px;
	height: 30px;
	background: white;
	border-radius: 6px;
	transition: transform 0.3s;
	pointer-events: none;
}

.toggle-indicator.list-view {
	transform: translateX(38px);
}

.toggle-btn {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 34px;
	height: 30px;
	border: none;
	border-radius: 6px;
	background: transparent;
	cursor: pointer;
}

.toggle-btn img {
	width: 18px;
	height: 18px;
}
</style>
