<template>
	<RouterLink to="/add-item" class="add-btn-link">
		<button>+</button>
	</RouterLink>
</template>

<style scoped>
button {
	width: 60px;
	height: 60px;
	border-radius: 50%;
	background-color: var(--secondary);
	color: white;
	font-size: 36px;
	border: none;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	padding-bottom: 4px;
}

button:active {
	transform: scale(0.95);
}

.add-btn-link {
	text-decoration: none;
}
</style>
