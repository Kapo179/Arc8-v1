import { Stack } from "expo-router";
import { useCallback } from "react";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { TamaguiProvider, Theme } from 'tamagui';
import config from '../tamagui.config';

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [fontsLoaded, fontError] = useFonts({
    Inter: require('@tamagui/font-inter/otf/Inter-Medium.otf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <TamaguiProvider config={config}>
      <Theme name="dark">
        <Stack>
          <Stack.Screen 
            name="index" 
            options={{ 
              headerShown: false,
              contentStyle: { backgroundColor: 'black' }
            }} 
          />
          <Stack.Screen 
            name="create-team" 
            options={{ 
              headerShown: false,
              presentation: 'modal'
            }} 
          />
        </Stack>
      </Theme>
    </TamaguiProvider>
  );
}
