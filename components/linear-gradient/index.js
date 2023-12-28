import React, { Component } from 'react'
import { UI } from '@hyext/hy-ui'
import { NativeUI } from '@hyext-beyond/hy-ui-native'
import "./index.hycss";

const { LinearGradient } = NativeUI
const { Text } = UI

export default class LinearGradientScreen extends Component {
  render() {
    return (
      <LinearGradient direction="toLeft" colors={['red', 'green']} className="LinearGradient">
        <Text>666666</Text>
      </LinearGradient>
    )
  }
}
