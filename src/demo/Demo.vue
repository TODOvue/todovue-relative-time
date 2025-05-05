<script setup>
import { defineAsyncComponent } from "vue";
import TvDemo from '@todovue/tvdemo';
const TvRelativeTime = defineAsyncComponent(() => import("../components/TvRelativeTime.vue"));
import { demos } from '../utils/mocks.js';
</script>

<template>
  <tv-demo
    :component="TvRelativeTime"
    :variants="demos"
    name-component="TvRelativeTime"
    npm-install="@todovue/tvrelativetime"
    source-link="https://github.com/TODOvue/todovue-relative-time"
    url-clone="https://github.com/TODOvue/todovue-relative-time.git"
    version="1.0.0"
  />
</template>

