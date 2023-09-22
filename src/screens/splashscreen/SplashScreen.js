import { View, ImageBackground } from 'react-native'
import React from 'react'
import { SplashScreenStyles } from './SplashScreenStyles'

const SplashScreen = () => {
  return (
    <View style={SplashScreenStyles.container}>
        <ImageBackground source={require("../../images/stackoverflow.png")} style={SplashScreenStyles.screen} >
    </ImageBackground>
  </View>
  )
}

export default SplashScreen