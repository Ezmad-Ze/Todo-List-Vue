<template>
  <div>
    {{ todoValue }}
  </div>
</template>

<script setup lang="ts">
import type { Todo } from '../model'

const state = defineProps({
  todoValue: {
    type: Object as () => Todo,
    required: true
  }
})
</script>
