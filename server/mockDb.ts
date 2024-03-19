// mockDb.ts
// A rich in-memory mock database for artists, setlists, tracks, and events

export const mockArtists = [
  {
    id: "artist-1",
    name: "The Example Band",
    image: "https://example.com/artist1.jpg",
    palette: {
      Vibrant: { hex: "#123456", rgb: [18, 52, 86] },
      DarkVibrant: { hex: "#0a1a2b", rgb: [10, 26, 43] },
    },
  },
  {
    id: "artist-2",
    name: "Sample Artist",
    image: "https://example.com/artist2.jpg",
    palette: {
      Vibrant: { hex: "#654321", rgb: [101, 67, 33] },
      DarkVibrant: { hex: "#221100", rgb: [34, 17, 0] },
    },
  },
];

export const mockSetlists = [
  {
    artist: { name: "The Example Band" },
    sets: {
      set: [
        { song: [{ name: "Opening Song" }, { name: "Second Song" }] },
        { song: { name: "Encore Song" }, encore: "1" },
      ],
    },
    eventDate: "2024-06-01",
  },
  {
    artist: { name: "Sample Artist" },
    sets: {
      set: [
        { song: [{ name: "Sample Hit" }, { name: "Sample Ballad" }] },
      ],
    },
    eventDate: "2024-06-15",
  },
];

export const mockTracks = {
  "The Example Band": [
    { title: "Opening Song", album: "Debut", duration: 210 },
    { title: "Second Song", album: "Debut", duration: 200 },
    { title: "Encore Song", album: "Live", duration: 220 },
  ],
  "Sample Artist": [
    { title: "Sample Hit", album: "Greatest", duration: 180 },
    { title: "Sample Ballad", album: "Ballads", duration: 240 },
  ],
};

export const mockEvents = {
  "The Example Band": [
    {
      artist: "The Example Band",
      buyUrl: "https://tickets.com/example-band",
      date: "2024-07-10T20:00:00Z",
      venueName: "Example Arena",
      location: "Sample City",
    },
  ],
  "Sample Artist": [
    {
      artist: "Sample Artist",
      buyUrl: "https://tickets.com/sample-artist",
      date: "2024-08-05T19:00:00Z",
      venueName: "Sample Hall",
      location: "Example Town",
    },
  ],
};
