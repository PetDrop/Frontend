import React from "react";
import YoutubePlayer from "react-native-youtube-iframe";

interface VideoScreenProps {
  videoId: string;
}

export default function VideoScreen({ videoId }: VideoScreenProps) {
  return (
    <YoutubePlayer
      height={300}
      width={"100%"}
      play={false}
      videoId={videoId}
    />
  );
}