import React, { Component } from 'react'
import { UI  } from '@hyext/hy-ui'
import { NativeModules } from '@hyext-beyond/hy-ui-native'
const { createVibration } = NativeModules
const { Button } = UI

export default class VibrationScreen extends Component {
  vibration = null

  constructor (p) {
    super(p)
  }

  componentDidMount () {
    this.vibration = createVibration()
  }

  handlePress = () => {
    this.vibration.cancel()
    this.vibration.vibrate()
  }

  render () {
    return <Button onPress={this.handlePress}>震动(手机请开启震动功能)</Button>
  }
}
