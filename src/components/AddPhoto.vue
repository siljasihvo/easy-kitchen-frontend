<template>
	<section>
		<img src="../assets/icons/camera.svg" alt="Add Photo Icon" />
		<p>Add Photo</p>
	</section>
</template>

<style scoped>
section {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 180px;
	background-color: var(--cards);
	border-radius: 10px;
	gap: 8px;
	cursor: pointer;
}

section img {
	opacity: 0.5;
}

section p {
	font-size: 20px;
	opacity: 0.7;
}
</style>
