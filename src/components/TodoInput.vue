<template>
  <form
    class="w-full max-w-[900px] flex items-center justify-center"
    @submit.prevent="handleSubmit"
  >
    <input
      type="text"
      class="w-3/4 h-11 rounded-lg dark:bg-violet-400 bg-violet-500 outline-none p-5 tracking-wider cursor-pointer placeholder:text-center placeholder:text-white placeholder:tracking-widest"
      placeholder="Enter a task..."
      v-model="todo"
    />
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import type { Ref } from 'vue'
import type { Todo } from '../model'


const todo: Ref<string> = ref('')

const emit: (event: "add-todos", ...args: any[]) => void = defineEmits(['add-todos'])
const handleSubmit = ():void => {
  const data:Todo = { id: Date.now(), todo: todo.value, value: 'Active' }
  emit('add-todos', data)
  todo.value = ''
}

</script>
