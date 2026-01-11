<template>
	<section class="scanner-frame">
		<span class="corner top-left"></span>
		<span class="corner top-right"></span>
		<span class="corner bottom-left"></span>
		<span class="corner bottom-right"></span>

		<img
			src="../assets/images/barcode.png"
			alt="Barcode"
			class="barcode-img" />
	</section>
</template>

<style scoped>
.scanner-frame {
	position: relative;
	width: 100%;
	padding: 60px 40px;
	box-sizing: border-box;
	background-color: var(--cards);
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 50px;
}

.barcode-img {
	max-width: 100%;
	height: auto;
	opacity: 0.7;
}

.corner {
	position: absolute;
	width: 25px;
	height: 25px;
	border-color: var(--secondary);
	border-style: solid;
	border-width: 0;
}

.top-left {
	top: 0;
	left: 0;
	border-top-width: 3px;
	border-left-width: 3px;
}

.top-right {
	top: 0;
	right: 0;
	border-top-width: 3px;
	border-right-width: 3px;
}

.bottom-left {
	bottom: 0;
	left: 0;
	border-bottom-width: 3px;
	border-left-width: 3px;
}

.bottom-right {
	bottom: 0;
	right: 0;
	border-bottom-width: 3px;
	border-right-width: 3px;
}
</style>
