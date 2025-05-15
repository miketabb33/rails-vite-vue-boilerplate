<template>
  <div>
    <h1>Hello, man!</h1>
    <p>count: {{ count }}</p>
    {{ b }}
    sup 
  </div>
  <Button @click="increment">Click Here</Button>

</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/Button.vue';

type Bob = "bob" | "not bob"

const count = ref(0)

const b: Bob = 'not bob'

const increment = () => {
  count.value++
}

</script>

<style scoped>

</style>