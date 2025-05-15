<template>
  <button @click="emit('click')"><slot></slot></button>
</template>

<script setup lang="ts">
type ButtonProps = {
  color?: 'gray' | 'blue'
}

const { color = 'blue' } = defineProps<ButtonProps>()

const emit = defineEmits(['click'])

</script>

<style scoped>

</style>