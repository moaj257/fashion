import React from 'react';
import { TextInput as RNTextInput, StyleSheet } from 'react-native';
import { Feather as Icon } from '@expo/vector-icons';
import theme, { Box } from './theme';

const SIZE = theme.borderRadii.m * 2;

const TextInput = ({icon, touched, error, ...props}) => {
  const reColor = !touched ? "text" : (!error ? 'primary' : 'danger');
  const color = theme.colors[reColor];
  return (
    <Box flexDirection="row" alignItems="center" height={48} borderRadius="s" borderWidth={StyleSheet.hairlineWidth} borderColor={reColor}>
      <Box padding="s">
        <Icon {...{color}} size={16} name={icon} />
      </Box>
      <Box flex={1}>
        <RNTextInput underlineColorAndroid="transparent" placeholderTextColor={color} {...props} />
      </Box>
      {touched && (
        <Box marginHorizontal="s" backgroundColor={reColor} justifyContent='center' alignItems='center' height={SIZE} width={SIZE} borderRadius="m">
          <Icon size={16} name={!error ? 'check' : 'x'} color='white' />
        </Box>
      )}
    </Box>
  );
}

export default TextInput;
