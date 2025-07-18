import { useVideoPlayer, VideoView } from 'expo-video';
import React from 'react';
import { View } from 'react-native';
import styles from '../../styles/VideoScreen.styles';

export default function VideoScreen(videoLink: string) {
  const player = useVideoPlayer(videoLink, player => {
    player.loop = true;
  });

  return (
    <View style={styles.contentContainer}>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
    </View>
  );
}