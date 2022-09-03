import React from 'react';
import { Text, View } from 'react-native';

export const Timer = ({ focusSubject}) =>{
  return (
    <View>
    <Text> I am going to work on  {focusSubject} </Text>
    </View>
  )
};