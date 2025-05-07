import Default from './demos/default.vue?raw';
import UpdateInterval from './demos/updateInterval.vue?raw';
import Compact from './demos/compact.vue?raw';
import ShowFullDate from "./demos/showFullDate.vue?raw";

export const demos = [
  {
    id: 1,
    title: "TvRelativeTime Default",
    description: "Displays the relative time using the default format (e.g., '2 days ago', 'in 1 week').",
    propsData: {
      date: '2025-05-05T00:00:00Z',
    },
    html: Default,
  },
  {
    id: 2,
    title: "TvRelativeTime Update Interval",
    description: "Updates the relative time every 30 seconds to keep the display accurate in real time.",
    propsData: {
      date: '2025-05-25T00:00:00Z',
      updateInterval: 30000,
    },
    html: UpdateInterval,
  },
  {
    id: 3,
    title: "TvRelativeTime Compact",
    description: "Displays the time in a compact format like '1d', '3w', or '2mo' for minimal layouts.",
    propsData: {
      date: '1993-09-15T00:00:00Z',
      compact: true,
    },
    html: Compact,
  },
  {
    id: 4,
    title: "TvRelativeTime Show Full Date",
    description: "Displays the relative time along with the exact full date as a tooltip or adjacent text.",
    propsData: {
      date: '2025-05-05T00:00:00Z',
      showFullDate: true,
    },
    html: ShowFullDate,
  },
];

