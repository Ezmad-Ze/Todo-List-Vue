<template>
  <div
    class="flex items-center justify-between w-4/5 max-w-[750px] h-auto border border-t-0 dark:bg-violet-400 bg-violet-500 outline-none p-5 tracking-wider cursor-pointer"
    @click="handleComplete"
  >
    <div>
      <Icon
        icon="mdi:checkbox-blank-circle-outline"
        class="w-5 h-5 text-slate-800"
        v-if="state.todoValue.value === 'Active'"
      />
      <Icon
        icon="mdi:checkbox-marked-circle"
        class="w-5 h-5 text-yellow-900"
        v-else-if="state.todoValue.value === 'Completed'"
      />
    </div>
    <div class="w-10/12 break-all">
      {{ todoValue.todo }}
    </div>
    <div class="flex gap-4">
      <!-- <Icon icon="material-symbols:edit-note-sharp" class="w-6 h-6 text-green-700" /> -->
      <Icon icon="mdi:trash-can" class="w-5 h-5 text-red-700" @click="handleDelete" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import type { ExtractPropTypes } from 'vue'
import type { Todo } from '../model'

const state: Readonly<
  ExtractPropTypes<{
    todoValue: {
      type: () => Todo
      required: true
    }
    todos: {
      type: () => Todo[]
      required: true
    }
    index: {
      type: NumberConstructor
      required: true
    }
  }>
> = defineProps({
  todoValue: {
    type: Object as () => Todo,
    required: true
  },
  todos: {
    type: Array as () => Todo[],
    required: true
  },
  index: {
    type: Number,
    required: true
  }
})

const handleComplete = (): void => {
  state.todoValue.value === 'Active'
    ? (state.todoValue.value = 'Completed')
    : (state.todoValue.value = 'Active')
}

const handleDelete = (): void => {
  let status = confirm(`Do u want to delete ${state.todoValue.todo}`)
  status && state.todos.splice(state.index, 1)
}
</script>
