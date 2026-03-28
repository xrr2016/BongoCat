import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCountStore = defineStore('count', () => {
  const keyPressCount = ref(0)
  const mouseClickCount = ref(0)
  const totalCount = computed(() => keyPressCount.value + mouseClickCount.value)

  function addKeyPressCount() {
    keyPressCount.value++
  }

  function addMouseClickCount(pressed = true) {
    if (pressed) {
      mouseClickCount.value++
    }
  }

  async function getMouseClickCount() {
    mouseClickCount.value = 0
  }

  async function getKeyPressCount() {
    keyPressCount.value = 0
  }

  const init = async () => {
    Promise.all([
      getKeyPressCount(),
      getMouseClickCount(),
    ])
  }

  return {
    init,
    totalCount,
    keyPressCount,
    mouseClickCount,
    addKeyPressCount,
    addMouseClickCount,
  }
})
