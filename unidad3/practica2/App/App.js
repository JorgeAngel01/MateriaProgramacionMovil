import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';
import Camara from './src/components/Camara';
import Home from './src/screens/Home';
import { useState } from 'react';
import VideoMaribanda from './src/components/VideoMaribanda';

export default function App() {
  const [camera, setCamera] = useState(false);
  const [video, setVideo] = useState(false);

  const handleCamera = () => {
    setCamera((prev) => !prev);
    setVideo(false);
  };

  const handleVideo = () => {
    setVideo((prev) => !prev);
    setCamera(false);
  };

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {/* <Camara /> */}
      <Home setCamera={handleCamera} setVideo={handleVideo} />
      {camera && <Camara />}
      {video && <VideoMaribanda />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Constants.statusBarHeight,
  },
});
