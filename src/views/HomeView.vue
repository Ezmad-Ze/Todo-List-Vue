<template>
  <div>
    <Header />
    <div class="font-roboto flex justify-center flex-col gap-9 md:gap-11 items-center">
      <h3 class="text-blue-900 dark:text-white md:text-4xl sm:text-2xl text-xl text-center tracking-widest m-12 -mb-1">
        Enjoy your {{ Greeting }}
      </h3>
      <Input @add-todos="handleTodos" />
      <List v-for="todo in todos" :todo-value="todo" :key="todo.id" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watchEffect } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import Header from '@/components/TodoHeader.vue'
import Input from '@/components/TodoInput.vue'
import List from '@/components/TodoList.vue'

import type { Todo } from '../model'

//datas
const todos: Ref<Todo[]> = ref([])
const date: String = new Date().toLocaleDateString('en-US', { weekday: 'long' })

//methods
const handleTodos = (todo: Todo): void => {
  todos.value.unshift(todo)
}


//computed
const timeOfDay: ComputedRef<"Morning ☕" | "Afternoon 🍕" | "Evening 🌆" | "Night 🌉" | undefined> = computed(() => {
  let hour = new Date().getHours()
  if (hour >= 4 && hour <= 11) return 'Morning ☕'
  if (hour >= 12 && hour <= 16) return 'Afternoon 🍕'
  if (hour >= 17 && hour <= 20) return 'Evening 🌆'
  if (hour >= 21 || hour <= 3) return 'Night 🌉'
  return undefined
})


const Greeting: ComputedRef<string> = computed(() => {
  return `${date} ${timeOfDay.value}`
})
</script>
