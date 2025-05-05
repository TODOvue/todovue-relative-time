<template>
  <tv-relative-time
    :date="date"
  ></tv-relative-time>
</template>

<script setup>
import { ref } from 'vue'

import TvRelativeTime from "@todovue/tvrelativetime";

const date = ref(new Date().toDateString())
</script>
