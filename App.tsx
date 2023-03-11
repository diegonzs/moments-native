import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet'
import { NavigationContainer } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
// import * as SplashScreen from 'expo-splash-screen'
// import { useCallback } from 'react'

import { AppRealmContext } from './models'
import { AppStack } from './routes/app-stack'

// SplashScreen.preventAutoHideAsync()

export default function App() {
  const { RealmProvider } = AppRealmContext
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  })
  // const onLayoutRootView = useCallback(async () => {
  //   if (fontsLoaded) {
  //     await SplashScreen.hideAsync()
  //   }
  // }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <RealmProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <NavigationContainer>
            <StatusBar style="dark" />
            <AppStack />
          </NavigationContainer>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </RealmProvider>
  )
}
