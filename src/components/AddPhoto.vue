<script setup>
import { ref, computed } from "vue";

const props = defineProps({
	modelValue: [String, File, null],
});

const emit = defineEmits(['update:modelValue']);

const fileInput = ref(null);
const previewUrl = ref(null);

const handleFileChange = (event) => {
	const file = event.target.files[0];
	if (file) {
		emit('update:modelValue', file);
		
		const reader = new FileReader();
		reader.onload = (e) => {
			previewUrl.value = e.target.result;
		};
		reader.readAsDataURL(file);
	}
};

const triggerFileInput = () => {
	fileInput.value.click();
};

const removePhoto = () => {
	emit('update:modelValue', null);
	previewUrl.value = null;
	if (fileInput.value) {
		fileInput.value.value = '';
	}
};
</script>

<template>
	<section @click="triggerFileInput" :class="{ 'has-image': previewUrl }">
		<input 
			ref="fileInput"
			type="file" 
			accept="image/*"
			@change="handleFileChange"
			style="display: none;" />
		
		<template v-if="!previewUrl">
			<img src="../assets/icons/camera.svg" alt="Add Photo Icon" />
			<p>Add Photo</p>
		</template>
		
		<template v-else>
			<img :src="previewUrl" alt="Preview" class="preview-image" />
			<button @click.stop="removePhoto" class="remove-btn">Remove</button>
		</template>
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
	position: relative;
	overflow: hidden;
}

section img {
	opacity: 0.5;
}

section p {
	font-size: 20px;
	opacity: 0.7;
}

.has-image {
	padding: 0;
}

.preview-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	opacity: 1 !important;
}

.remove-btn {
	position: absolute;
	bottom: 10px;
	right: 10px;
	background-color: rgba(0, 0, 0, 0.7);
	color: white;
	border: none;
	border-radius: 8px;
	padding: 8px 16px;
	cursor: pointer;
	font-size: 14px;
}

.remove-btn:hover {
	background-color: rgba(0, 0, 0, 0.85);
}
</style>