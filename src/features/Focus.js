import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';

export const Focus = ({addSubject}) => {
  const [subject,setSubject] = useState(null);
  console.log(subject);
  return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
              onChangeText={setSubject}
              label="What should we focus on?" />
        </View>
        <View>
          <RoundedButton title="+" size="50" onPress={()=>addSubject(subject)}/>
        </View>
      </View>
  )};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    flex: 0.25,
    justifyContent: 'center',
  }
});
