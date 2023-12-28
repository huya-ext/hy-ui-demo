import React, { Component } from 'react';
import { UI } from '@hyext/hy-ui'
import { NativeUI } from '@hyext-beyond/hy-ui-native'
import "./index.hycss";

const { Lottie } = NativeUI
const { View } = UI

export default class LottieView extends Component {
  constructor() {
    super()
    this.anim = React.createRef()
  }

  render() {
    return (
      <View className="container">
        <Lottie
          ref={this.anim}
          autoPlay={true}
          loop={true}
          autoSize={true}
          style={{
            width: 200,
            height: 200,
            backgroundColor: '#c7e6c8',
          }}
          source={require('../../common/config/gift.json')}/>
      </View>
    )
  }
}