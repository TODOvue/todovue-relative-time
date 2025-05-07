<script setup>
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import useRelativeTime from '../composable/useRelativeTime.js'

const props = defineProps({
  date: {
    type: [String, Number],
    required: true
  },
  updateInterval: {
    type: Number,
    default: 60000
  },
  compact: {
    type: Boolean,
    default: false
  },
  showFullDate: {
    type: Boolean,
    default: false
  }
})

const { getRelativeTime } = useRelativeTime()
const timeInfo = ref({ text: '-', tooltip: 'Fecha no disponible' })
let intervalId = null

const updateTime = () => {
  if (!props.date) return
  timeInfo.value = getRelativeTime(props.date, false, props.compact)
}

const displayText = computed(() => {
  return props.showFullDate
    ? `${timeInfo.value.text} (${timeInfo.value.tooltip})`
    : timeInfo.value.text
})

onMounted(() => {
  updateTime()
  intervalId = setInterval(updateTime, props.updateInterval)
})

onBeforeUnmount(() => {
  clearInterval(intervalId)
})

watch(() => props.date, () => {
  updateTime()
})
</script>

<template>
  <time
    class="tv-relative-time"
    :datetime="props.date"
    :title="timeInfo.tooltip"
    :aria-label="timeInfo.tooltip"
  >
    {{ displayText }}
  </time>

</template>

<style scoped lang="scss" src="../assets/scss/styles.scss"></style>
