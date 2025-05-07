<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue RelativeTime
###### TvRelativeTime is a minimal and customizable component to display human-readable relative dates.

[![npm](https://img.shields.io/npm/v/@todovue/tv-relative-time.svg)](https://www.npmjs.com/package/@todovue/tv-relative-time) [![Netlify Status](https://api.netlify.com/api/v1/badges/cb4b8651-1062-4a0b-aa47-28437cbf9fdc/deploy-status)](https://app.netlify.com/sites/tv-relative-time/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tv-relative-time.svg)](https://www.npmjs.com/package/@todovue/tv-relative-time) [![npm](https://img.shields.io/npm/dt/@todovue/tv-relative-time.svg)](https://www.npmjs.com/package/@todovue/tv-relative-time) ![GitHub](https://img.shields.io/github/license/TODOvue/tv-relative-time) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/tv-relative-time)

## Table of Contents
- [Demo](https://tv-relative-time.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/tv-relative-time/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/tv-relative-time/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/tv-relative-time/blob/main/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tv-relative-time
```
```bash
yarn add @todovue/tv-relative-time
```
Import
```js
import TvRelativeTime from '@todovue/tv-relative-time'
```

You can also import it directly in the **main.js** file:
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvRelativeTime from '@todovue/tv-relative-time'

const app = createApp(App);
app.component("TvRelativeTime", TvRelativeTime);
app.mount("#app");
```

## Usage
```html
<template>
  <tv-relative-time
    :date="publishedDate"
    :compact="false"
    :show-full-date="true"
  />
</template>

<script setup>
import TvRelativeTime from "@todovue/t-relative-time";

const publishedDate = '2024-07-01T12:00:00Z';
</script>
```

## Props

| Prop             | Type          | Default | Description                                               |
|------------------|---------------|---------|-----------------------------------------------------------|
| `date`           | String/Number | —       | Required. Date or timestamp to format.                    |
| `updateInterval` | Number        | `60000` | Interval in milliseconds for live updates.                |
| `compact`        | Boolean       | `false` | If true, returns compact format (`1d`, `2w`, `3mo`, `a`). |
| `showFullDate`   | Boolean       | `false` | If true, appends the full date next to the relative time. |

## Development
Clone the repository and install dependencies:
```bash
git clone https://github.com/TODOvue/tv-relative-time.git
cd tv-relative-time
yarn install
```

---

## License
[MIT](https://github.com/TODOvue/tv-relative-time/blob/main/LICENSE)
