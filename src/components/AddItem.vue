<script setup>
import AddPhoto from "./AddPhoto.vue";
import BaseInput from "./BaseInput.vue";
</script>

<template>
	<AddPhoto />
	<BaseInput label="Item Name" placeholder="e.g. Banana, Milk" />
	<BaseInput label="Quantity" placeholder="e.g. 1L, 350g" />
</template>
