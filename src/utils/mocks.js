import Default from './demos/default.vue?raw';
import UpdateInterval from './demos/updateInterval.vue?raw';
import Compact from './demos/compact.vue?raw';
import ShowFullDate from "./demos/showFullDate.vue?raw";

export const demos = [
  {
    id: 1,
    title: "TvRelativeTime Default",
    propsData: {
      date: new Date().toDateString(),
    },
    html: Default,
  },
  {
    id: 2,
    title: "TvRelativeTime Update Interval",
    propsData: {
      date: new Date().toDateString(),
      updateInterval: 30000,
    },
    html: UpdateInterval,
  },
  {
    id: 3,
    title: "TvRelativeTime Compact",
    propsData: {
      date: '1993-09-15T00:00:00Z',
      compact: true,
    },
    html: Compact,
  },
  {
    id: 4,
    title: "TvRelativeTime Show Full Date",
    propsData: {
      date: '2025-05-05T00:00:00Z',
      showFullDate: true,
    },
    html: ShowFullDate,
  },
];
