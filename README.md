<p align="center"><img width="150" src="https://firebasestorage.googleapis.com/v0/b/todovue-blog.appspot.com/o/logo.png?alt=media&token=d8eb592f-e4a9-4b02-8aff-62d337745f41" alt="TODOvue logo">
</p>

# TODOvue RelativeTime
###### TvRelativeTime is a minimal and customizable component to display human-readable relative dates.

[![npm](https://img.shields.io/npm/v/@todovue/tvrelativetime.svg)](https://www.npmjs.com/package/@todovue/tvrelativetime) [![Netlify Status](https://api.netlify.com/api/v1/badges/cb4b8651-1062-4a0b-aa47-28437cbf9fdc/deploy-status)](https://app.netlify.com/sites/todovue-relative-time/deploys) [![npm](https://img.shields.io/npm/dm/@todovue/tvrelativetime.svg)](https://www.npmjs.com/package/@todovue/tvrelativetime) [![npm](https://img.shields.io/npm/dt/@todovue/tvrelativetime.svg)](https://www.npmjs.com/package/@todovue/tvrelativetime) ![GitHub](https://img.shields.io/github/license/TODOvue/todovue-relative-time) ![GitHub Release Date](https://img.shields.io/github/release-date/TODOvue/todovue-relative-time)

## Table of Contents
- [Demo](https://todovue-relative-time.netlify.app/)
- [Installation](#installation)
- [Usage](#usage)
- [Props](#props)
- [Development](#development)
- [Changelog](https://github.com/TODOvue/todovue-relative-time/blob/main/CHANGELOG.md)
- [Contributing](https://github.com/TODOvue/todovue-relative-time/blob/main/CONTRIBUTING.md)
- [License](https://github.com/TODOvue/todovue-relative-time/blob/main/LICENSE)

## Installation
Install with npm or yarn
```bash
npm install @todovue/tvrelativetime
```
```bash
yarn add @todovue/tvrelativetime
```
Import
```js
import TvRelativeTime from '@todovue/tvrelativetime'
```

You can also import it directly in the **main.js** file:
```js
import { createApp } from "vue";
import App from "./App.vue";
import TvRelativeTime from '@todovue/tvrelativetime'

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
import TvRelativeTime from "@todovue/tvrelativetime";

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
git clone https://github.com/TODOvue/todovue-relative-time.git
cd todovue-relative-time
yarn install
```

---

## License
[MIT](https://github.com/TODOvue/todovue-relative-time/blob/main/LICENSE)
