import React from 'react';
import LinearGradient from 'react-native-linear-gradient';

export default function BottomGradient() {
  return (
    <LinearGradient
      colors={['rgba(0, 0, 0, 0)', '#F0F0F0', '#F0F0F0', '#F0F0F0']}
      style={{
        height: 96,
        overflow: 'visible',
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
      }}
    />
  );
}
