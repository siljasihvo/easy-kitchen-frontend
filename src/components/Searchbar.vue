<template>
	<div class="search-container">
		<div class="search-bar">
			<img
				src="../assets/icons/search.svg"
				alt="Search"
				class="search-icon" />

			<input
				type="text"
				placeholder="Search food items..."
				class="search-input" />

			<img
				src="../assets/icons/mic.svg"
				alt="Microphone"
				class="mic-icon" />
		</div>
	</div>
</template>

<style scoped>
.search-container {
	width: 100%;
}

.search-bar {
	display: flex;
	align-items: center;
	gap: 12px;
	background-color: #d9d4c8;
	border-radius: 30px;
	padding: 12px 16px;
}

.search-icon {
	width: 20px;
	height: 20px;
	opacity: 0.5;
	flex-shrink: 0;
}

.search-input {
	flex: 1;
	border: none;
	background: transparent;
	font-size: 16px;
	color: var(--secondary);
	outline: none;
}

.search-input::placeholder {
	color: var(--secondary);
	opacity: 0.5;
}

.mic-icon {
	width: 20px;
	height: 20px;
	opacity: 0.5;
	flex-shrink: 0;
}
</style>
