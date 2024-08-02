import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native'; //importando DarkTheme
import { useFonts } from 'expo-font';  //importando useFonts
import { Stack } from 'expo-router'; //importando Stack
import * as SplashScreen from 'expo-splash-screen'; //importando SplashScreen 
import { useEffect } from 'react'; //importando useEffect
import 'react-native-reanimated'; //importando animação react-native
import { StyleSheet, Text, View, ScrollView } from 'react-native'; //importando as bibliotecas react-native

import { useColorScheme } from '@/hooks/useColorScheme';

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

//criando o styles para o container
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f2f",
    padding: 30,
  },
});

//exportando o RootLayout
export default function RootLayout() {

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text>Hello Word!</Text>
      </View>
    </ScrollView>
  )

}
