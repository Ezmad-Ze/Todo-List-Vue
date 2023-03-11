<template>
  <div class="p-6 justify-between flex align-middle drop-shadow-md bg-blue-200 dark:bg-blue-900">
    <RouterLink to="/" class="font-roboto font-[700] flex items-center justify-evenly gap-4">
      <Icon icon="pajamas:todo-add" class="w-10 h-10 dark:text-blue-200 text-blue-900" />
      <h3 class="hidden sm:block text-xl dark:text-blue-200 text-blue-900">To Do List using Vue</h3>
    </RouterLink>
    <div>
      <button @click="toggleDark()" v-if="isDark">
        <Icon icon="ic:baseline-dark-mode" class="w-10 h-10 text-yellow-400" :inline="true" />
      </button>
      <button @click="toggleDark()" v-else>
        <Icon icon="ic:baseline-light-mode" class="w-10 h-10 text-yellow-600" :inline="true" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { RouterLink } from 'vue-router'
import { useToggle, useDark } from '@vueuse/core'

const isDark = useDark()
const toggleDark = useToggle(isDark)
</script>
