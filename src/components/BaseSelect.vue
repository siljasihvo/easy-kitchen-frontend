<script setup>
import { ref, watch } from "vue";

const props = defineProps({
	label: String,
	defaultText: String,
	options: Array, 
	modelValue: String,
});

const emit = defineEmits(['update:modelValue']);

const isOpen = ref(false);
const selectedOption = ref(props.defaultText);

watch(() => props.modelValue, (newVal) => {
	if (newVal) {
		const option = props.options.find(opt => opt.id === newVal);
		if (option) {
			selectedOption.value = option.name;
		}
	} else {
		selectedOption.value = props.defaultText;
	}
}, { immediate: true });

const toggleDropdown = () => {
	isOpen.value = !isOpen.value;
};

const selectOption = (option) => {
	selectedOption.value = option.name;
	emit('update:modelValue', option.id);
	isOpen.value = false;
};
</script>

<template>
	<div class="dropdown-wrapper">
		<label>{{ label }}</label>

		<section class="container" @click="toggleDropdown">
			<p>{{ selectedOption }}</p>

			<img
				src="../assets/icons/chevron.svg"
				alt="dropdown icon"
				:class="{ open: isOpen }" />
		</section>

		<ul v-if="isOpen" class="dropdown-menu">
			<li v-for="item in options" :key="item.id" @click="selectOption(item)">
				{{ item.name }}
			</li>
		</ul>
	</div>
</template>

<style scoped>
.dropdown-wrapper {
	position: relative;
	width: 100%;
}

.container {
	display: flex;
	justify-content: space-between;
	align-items: center;
	background-color: var(--cards);
	border-radius: 10px;
	width: 100%;
	box-sizing: border-box;
	padding: 5px 20px 5px 0px;
	cursor: pointer;
}

label {
	margin-bottom: 8px;
	display: block;
}

p {
	padding: 11.5px 16px;
	opacity: 0.7;
	font-size: 14px;
}

img {
	width: 20px;
	height: 20px;
	opacity: 0.7;
	transform: rotate(90deg);
	transition: transform 0.3s;
}

img.open {
	transform: rotate(-90deg);
}

.dropdown-menu {
	position: absolute;
	top: 100%;
	left: 0;
	right: 0;
	background-color: var(--cards);
	border-radius: 10px;
	margin-top: 4px;
	padding: 0;
	list-style: none;
	z-index: 10;
	overflow: hidden;
}

.dropdown-menu li {
	padding: 12px 16px;
	font-size: 14px;
	opacity: 0.8;
	cursor: pointer;
	border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-menu li:last-child {
	border-bottom: none;
}

.dropdown-menu li:hover {
	background-color: rgba(0, 0, 0, 0.05);
	opacity: 1;
}
</style>