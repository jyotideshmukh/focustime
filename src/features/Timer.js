import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';
import { RoundedButton } from '../components/RoundedButton';
import { Countdown } from '../components/CountDown';

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);
  return (
      <View style={styles.container}>

        <View style={styles.textContainer}>
          <Countdown
              isPaused={!isStarted}
              onProgress={() => {}}
              onEnd={() => {}}
          />
          <Text style={styles.title}> Focus Feature </Text>
          <Text style={styles.task}>{focusSubject} </Text>
        </View>

        <View style={styles.buttonContainer}>

          {!isStarted && (
              <RoundedButton size={50} title="start" onPress={() => setIsStarted(true)} />
          )}
          {isStarted && (
              <RoundedButton size={50} title="pause" onPress={() => setIsStarted(false)} />
          )}

        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: 'green'
  },
  textContainer: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    //backgroundColor: 'yellow'
  },
  buttonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: spacing.lg
  },
  title: {
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: fontSizes.md,
    color: colors.white,

  },
  task: {
    justifyContent: 'center',
    fontWeight: 'normal',
    fontSize: fontSizes.sm,
    color: colors.white,
  },
});
