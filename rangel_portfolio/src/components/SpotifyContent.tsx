// SpotifyEmbedContent.tsx
import React from 'react';
import { Box } from '@chakra-ui/react';

const SpotifyContent: React.FC = () => {
  // Replace `spotifyURI` with your actual Spotify embed URI
  const spotifyURI = "https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3";
  
  return (
    <Box p={5} className="spotify-embed">
      <iframe
        src={spotifyURI}
        width="100%"
        height="380"
        frameBorder="0"
        allowTransparency={true}
        allow="encrypted-media"
      ></iframe>
    </Box>
  );
};

export default SpotifyContent;
