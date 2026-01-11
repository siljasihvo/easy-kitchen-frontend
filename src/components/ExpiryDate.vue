<template>
	<section>
		<label>Expiry Date</label>
		<div class="container">
			<input type="date" required />
		</div>
	</section>
</template>

<style scoped>
.container {
	background-color: var(--cards);
	border-radius: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 5px 0px;
}

label {
	margin-bottom: 8px;
	display: block;
}

input {
	border: none;
	border-radius: 10px;
	padding: 9px 16px;
	outline: none;
	width: 100%;
	background: transparent;
	box-sizing: border-box;
	color: #646161;
}

input::-webkit-calendar-picker-indicator {
	width: 20px;
	height: 20px;
	cursor: pointer;
	opacity: 0.7;
}
</style>
