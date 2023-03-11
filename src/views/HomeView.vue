<template>
  <div>
    <Header />
    <div class="font-roboto flex justify-center items-center m-12 tracking-widest">
      <h3 class="text-[500] text-blue-900 dark:text-white text-4xl">
        Enjoy your {{ Greeting }}
      </h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import Header from '@/components/TodoHeader.vue'

const date: String = new Date().toLocaleDateString('en-US', { weekday: 'long' })

const timeOfDay = computed(() => {
  let hour = new Date().getHours()
  if (hour >= 4 && hour <= 11) return 'Morning ☕'
  if (hour >= 12 && hour <= 16) return 'Afternoon 🍕'
  if (hour >= 17 && hour <= 20) return 'Evening 🌆'
  if (hour >= 21 || hour <= 3) return 'Night 🌉'
})

const Greeting = computed(() => {
  return `${date} ${timeOfDay.value}`
})

</script>
