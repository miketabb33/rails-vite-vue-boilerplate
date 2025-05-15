<template>
  <button :class="buttonClasses" @click="emit('click')"><slot></slot></button>
</template>

<script setup lang="ts">
import { computed } from 'vue'

type ButtonProps = {
  color?: 'gray' | 'blue'
}

const { color = 'blue' } = defineProps<ButtonProps>()

const emit = defineEmits(['click'])

const buttonClasses = computed(() => {
  return color === 'blue' ? 'bg-blue-100' : 'bg-gray'
})
</script>
