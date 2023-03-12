<template>
  <div>
    <Header />
    <div class="font-roboto flex justify-center flex-col gap-9 md:gap-11 items-center">
      <h3
        class="text-blue-900 dark:text-white md:text-4xl sm:text-2xl text-xl text-center tracking-widest m-12 -mb-1"
      >
        Enjoy your {{ Greeting }}
      </h3>
      <Input @add-todos="handleTodos" />
    </div>
    <div class="flex items-center justify-center flex-col w-full mt-5" v-if="todos.length !== 0">
      <div
        class="dark:bg-violet-400 bg-violet-500 w-4/5 max-w-[750px] h-6 rounded-t-lg text-center text-slate-600 font-thin tracking-widest border-b"
      >
        Items Lists
      </div>
      <List
        v-for="(todo, index) in show"
        :todo-value="todo"
        :todos="todos"
        :index="index"
        :key="todo.id"
      />
      <div
        class="dark:bg-violet-400 bg-violet-500 w-4/5 max-w-[750px] h-6 rounded-b-lg text-center text-white font-bold flex items-center justify-around"
      >
        <button @click="handleShow('All')" class="hover:text-violet-900 focus:text-violet-900">
          All
        </button>
        <button @click="handleShow('Active')" class="hover:text-violet-900 focus:text-violet-900">
          Active
        </button>
        <button
          @click="handleShow('Completed')"
          class="hover:text-violet-900 focus:text-violet-900"
        >
          Completed
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import type { Ref, ComputedRef } from 'vue'
import Header from '@/components/TodoHeader.vue'
import Input from '@/components/TodoInput.vue'
import List from '@/components/TodoList.vue'

import type { Todo } from '../model'

//datas
const todos: Ref<Todo[]> = ref([])
const showValues = ref('')
const date: String = new Date().toLocaleDateString('en-US', { weekday: 'long' })

//methods
const handleTodos = (todo: Todo): void => {
  todos.value.unshift(todo)
}
const handleShow = (val: string) => {
  showValues.value = val
}

//computed
const timeOfDay: ComputedRef<
  'Morning ☕' | 'Afternoon 🍕' | 'Evening 🌆' | 'Night 🌉' | undefined
> = computed(() => {
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

const show: ComputedRef<Todo[]> = computed(() => {
  if (showValues.value === 'Active') {
    return todos.value.filter((t) => t.value === 'Active')
  } else if (showValues.value === 'Completed') {
    return todos.value.filter((t) => t.value === 'Completed')
  }
  return todos.value
})
</script>
