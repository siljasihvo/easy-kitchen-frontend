<template>
	<nav>
		<ul>
			<li>
				<RouterLink to="/" class="nav-li">
					<img src="../assets/icons/home-icon.svg" alt="Home" />
					<span>Home</span>
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/categories" class="nav-li">
					<img
						src="../assets/icons/category-icon.svg"
						alt="Categories" />
					<span>Categories</span>
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/storage" class="nav-li">
					<img src="../assets/icons/storage-icon.svg" alt="Storage" />
					<span>Storage</span>
				</RouterLink>
			</li>
			<li>
				<RouterLink to="/settings" class="nav-li">
					<img
						src="../assets/icons/settings-icon.svg"
						alt="Settings" />
					<span>Settings</span>
				</RouterLink>
			</li>
		</ul>
	</nav>
</template>

<style scoped>
nav {
	width: 100%;
	background-color: var(--primary);
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	margin: 0 auto;
	max-width: 402px;
	z-index: 1000;
}

ul {
	list-style: none;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	padding: 20px 0 30px 0;
}

.nav-li {
	display: flex;
	flex-direction: column;
	text-decoration: none;
	color: inherit;
	align-items: center;
}

.nav-li img {
	width: 35px;
	height: auto;
}

.nav-li span {
	font-size: 12px;
	margin-top: 6px;
	opacity: 0.8;
}

.nav-li {
	opacity: 0.7;
	transition: opacity 0.3s ease;
}

.nav-li.router-link-active {
	opacity: 1;
}

.nav-li:hover {
	opacity: 1;
}
</style>
