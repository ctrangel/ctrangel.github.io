// SpotifyEmbedContent.tsx
import React from 'react';
import { Box, Center } from '@chakra-ui/react';

const SpotifyContent: React.FC = () => {
  // Replace `spotifyURI` with your actual Spotify embed URI
  const spotifyURI =
    "https://open.spotify.com/embed/playlist/0Z4njgoYwJk9mMGWQMTpL8?utm_source=generator";
  const spotifyURI2 =
    "https://open.spotify.com/embed/playlist/4v9yDMl0GcEQI9iv8pvSia?utm_source=generator";
    const spotifyURI3 =
      "https://open.spotify.com/embed/playlist/4pkrXoDjNIKGSnx3F1AVyW?utm_source=generator";
  
  
  return (
    <Box justifyContent={"center"} display={"flex"}>
      <Box p={5} className="spotify-embed">
        <iframe
          src={spotifyURI}
          width="100%"
          height="380"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </Box>
      <Box p={5} className="spotify-embed">
        <iframe
          src={spotifyURI2}
          width="100%"
          height="380"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </Box>
      <Box p={5} className="spotify-embed">
        <iframe
          src={spotifyURI3}
          width="100%"
          height="380"
          allowTransparency={true}
          allow="encrypted-media"
        ></iframe>
      </Box>
    </Box>
  );
};

export default SpotifyContent;
