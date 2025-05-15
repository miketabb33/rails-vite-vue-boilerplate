<template>
  <div>
    <h1>Hello, man!</h1>
    <p>count: {{ count }}</p>
    {{ b }}
    sup 
  </div>
  <SButton @click="increment">Click Here</SButton>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import SButton from './components/SButton.vue';

type Bob = "bob" | "not bob"

const count = ref(0)

const b: Bob = 'not bob'

const increment = () => {
  count.value++
}

</script>

<style scoped>

</style>