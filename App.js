import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
} from 'react-native';

import { colors } from './src/utils/colors';
import { Focus } from './src/features/Focus';
import { spacing } from './src/utils/sizes';
import { Timer } from './src/features/Timer';

// You can import from local files

export default function App() {
  const [currentSubject, setCurrentSubject] = useState(null);
  return (
    <SafeAreaView style={styles.container}>
      {!currentSubject ? (
        <Focus addSubject={setCurrentSubject}/>
      ) : (
        <Timer 
          focusSubject={currentSubject}
          onTimerEnd={()=>{}}
          clearSubject={ ()=>{}}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: Platform.OS === 'android' ? spacing.lg : 0,
    backgroundColor: colors.blue,
  },
  text: {
    color: colors.white,
  },
});
