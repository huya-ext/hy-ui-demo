import { NativeUI } from '@hyext-beyond/hy-ui-native'
import React, {Component} from 'react'
import './index.hycss'

const { VideoAnimated } = NativeUI

class Index extends Component {
  constructor () {
    super()
  }

  handleEnd = () => {
    console.log('结束')
  }

  handleStart = () => {
    console.log('开始')
  }

  handleError = (e) => {
    console.log('发生错误' + JSON.stringify(e))
  }

  render () {
    console.log(VideoAnimated, 'VideoAnimated')
    return (
      <VideoAnimated className="animated-demo" loop={true} onEnd={this.handleEnd} onError={this.handleError} onStart={this.handleStart} src={require('../../img/rocket.mp4')}></VideoAnimated>
    )
  }
}

export default Index
