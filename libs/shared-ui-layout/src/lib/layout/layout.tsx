import { NativeBaseProvider } from 'native-base';
import React from 'react';

import { Text } from 'react-native';

/* eslint-disable-next-line */
export interface LayoutProps {}

export function Layout(props: LayoutProps) {
  return (
    <NativeBaseProvider>
      <Text>Welcome to layout!</Text>
    </NativeBaseProvider>
  );
}

export default Layout;
