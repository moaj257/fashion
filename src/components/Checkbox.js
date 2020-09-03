import React from 'react';
import { Box, Text } from './theme';
import { Feather as Icon } from '@expo/vector-icons';
import { RectButton } from 'react-native-gesture-handler';

const SIZE = 20;

const Checkbox = ({label, checked, onChange}) => {
  return (
    <RectButton onPress={() => onChange()} style={{justifyContent: 'center'}}>
      <Box flexDirection="row" alignItems="center">
        <Box borderRadius="s" backgroundColor={checked ? 'primary' : 'white'} height={SIZE} width={SIZE} justifyContent="center" alignItems="center" borderColor="primary" borderWidth={1} marginRight="s">
          <Icon name="check" color="white" />
        </Box>
        <Text variant="button">{label}</Text>
      </Box>
    </RectButton>
  );
}

export default Checkbox;
