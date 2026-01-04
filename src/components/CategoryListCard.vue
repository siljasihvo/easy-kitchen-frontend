<template>
	<section>
		<p class="emoji">🥩</p>
		<div class="information">
			<p>Meat</p>
			<div class="footer">
				<p class="faded-text">7 items</p>
				<img src="../assets/icons/expired.svg" alt="Expired icon" />
				<span class="faded-text">1</span>
				<img
					src="../assets/icons/expiring.svg"
					alt="Expiring soon icon" />
				<span class="faded-text">3</span>
			</div>
		</div>
		<img
			src="../assets/icons/chevron.svg"
			alt="Go to category icon"
			class="chevron" />
	</section>
</template>

<style scoped>
section {
	display: flex;
	box-sizing: border-box;
	width: 100%;
	background-color: var(--cards);
	border-radius: 10px;
	padding: 12px 10px;
	gap: 15px;
}

.emoji {
	font-size: 35px;
}

.footer img {
	width: 15px;
	height: auto;
}

.footer {
	display: flex;
	align-items: center;
	gap: 6px;
}

.faded-text {
	opacity: 0.7;
}

.information {
	display: flex;
	flex-direction: column;
	justify-content: center;
	gap: 3px;
}

.chevron {
	margin-left: 70px;
	width: 20px;
	height: auto;
	opacity: 0.7;
}
</style>
