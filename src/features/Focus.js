import * as React from 'react';
import { useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { colors } from '../utils/colors';
import { TextInput } from 'react-native-paper';
import { RoundedButton } from '../components/RoundedButton';
import { spacing } from '../utils/sizes'

export const Focus = ({addSubject}) => {
const [subject,setSubject] = useState(null);
console.log(subject);
  return (
  <View style={styles.container}>
    <View style={styles.inputContainer}>
      <TextInput
      style={styles.textInput}
      onChangeText={setSubject}
      label="What should we focus on?" />
      <View style={styles.buttonInput} >
        <RoundedButton title="+" size={50} onPress={()=>addSubject(subject)}/>
      
      </View>
    </View>
  </View>
)};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textInput : {
    flex: 0.8,
    marginRight: spacing.sm,
  },
  inputContainer : {
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonInput: {
    justifyContent: 'center',
  }
});
