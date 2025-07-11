import React from "react";
import Head from "next/head";

import Favicons from "./Favicons";

const HeadSection = () => (
  <>
    <Head>
      <title>GigPlayList - Prepare the playlist for your next gig!</title>
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="author" content="Luca Lischetti" />
      <link
        type="text/plain"
        rel="author"
        href="https://sperez.xyz"
      />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta
        name="keywords"
        content="gigplaylist, music, gig, setlists, playlist, concerts, spotify"
      />
      <meta
        name="description"
        content="GigPlayList curates playlists for upcoming gigs based on setlists and artist data."
      />
      <meta property="og:url" content="https://sperez.xyz" />
      <meta
        property="og:description"
        content="GigPlayList curates playlists for upcoming gigs based on setlists and artist data."
      />
      <meta
        property="og:title"
        content="GigPlayList - Prepare the playlist for your next gig!"
      />
    </Head>
    <Favicons />
  </>
);

export default HeadSection;
