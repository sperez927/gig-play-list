// === Original code ===
// import axios from "axios";
//
// const URL = "http://api.songkick.com/api/3.0/events.json";
//
// const { SKAPI } = process.env;
//
// interface Event {
//   performance: Array<{
//     artist: {
//       displayName: string;
//     };
//   }>;
//   uri: string;
//   start: { datetime: string };
//   venue: { displayName: string };
//   location: { city: string };
// }
//
// export const getArtistEvent = async (artist_name: string, ip: string) => {
//   const { data } = await axios(URL, {
//     params: {
//       artist_name,
//       location: `ip:${ip}`,
//       apikey: SKAPI,
//     },
//   });
//   return data?.resultsPage?.results?.event?.map((event: Event) => ({
//     artist: event.performance[0].artist.displayName,
//     buyUrl: event.uri,
//     date: event.start.datetime,
//     venueName: event.venue.displayName,
//     location: event.location.city,
//   }));
// };

import { mockEvents } from "../mockDb";

export const getArtistEvent = async (artist_name: string, ip: string) => {
  const search = (artist_name || '').toLowerCase().trim();
  // Try to find event by partial match (include-search)
  const key = Object.keys(mockEvents).find(k => k.toLowerCase().includes(search));
  return key ? mockEvents[key as keyof typeof mockEvents] : [];
};
