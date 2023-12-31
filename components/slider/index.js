import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { UI } from '@hyext/hy-ui'

import variables from '../../customTheme'
import styles from '../../common/styles'

const { Slider } = UI

export default class SliderScreen extends Component {
  constructor (p) {
    super(p)
    this.state = {
      valueL: 0,
      valueA: 2,
      valueX: [ 100, 800 ],
      disabled: false
    }
  }
  componentDidMount () {
    // setTimeout(() => {
    //   this.setState({
    //     valueA: 4,
    //     valueL: 300,
    //     disabled: true
    //   })
    // }, 2000)
  }
  handleChange = (value) => {
    console.log(value)
    this.setState({
      valueL: value
    })
  }
  render () {
    return (
      <View
        style={[styles.body]}>

        <Text style={styles.header}>标尺滑块</Text>
        <View style={[styles.panel]}>
          <Slider
            style={{ marginTop: 10 }}
            value={this.state.valueA}
            min={1}
            max={6}
            step={1}
            marks={['普通', '快速', '高速', '极速', '光速', 'VIP']}
            onChange={(value) => {
              console.log(value)
              this.setState({
                valueA: value
              })
            }}
          />
        </View>

        <Text style={styles.header}>气泡滑块</Text>
        <View style={[styles.panel]}>
          <Slider
            value={this.state.valueL}
            onChange={this.handleChange}
            onScroll={(v, i) => {console.log(v, i, 'scroll')}}
            max={1500}
            showTip={true}
          />
        </View>
        <Text style={styles.header}>禁用滑块</Text>
        <View style={[styles.panel]}>
          <Slider
            max={1500}
            value={500}
            minTrackColor={variables.hyGrayLighter}
            disabled={true}
          />
        </View>

        <Text style={styles.header}>自定义滑块</Text>
        <View style={[styles.panel]}>
          <Slider
            max={1500}
            value={500}
            thumbSize={50}
            renderThumb={() => {
              return (
                <View
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 50,
                    backgroundColor: variables.hyBrandDanger,
                    opacity: 0.7
                  }}>
                </View>
              )
            }}
          />
        </View>

        <Text style={styles.header}>双滑块、自定义颜色、粗细</Text>
        <View style={[styles.panel]}>
          <Slider
            range
            maxTrackColor={variables.hyGrayLightest}
            minTrackColor={variables.hyGrayLightest}
            midTrackColor={this.state.disabled ? variables.hyGrayLighter : variables.hyBrandDanger}
            max={1500}
            trackWeight={20}
            value={this.state.valueX}
            disabled={this.state.disabled}
            showTip={true}
            onChange={(value) => {
              this.setState({
                valueX: value
              })
            }}
          />
        </View>

        <Text style={styles.header}>纵向</Text>
        <View style={[styles.panel, { height: 150, flexDirection: 'row' }]}>
          <Slider style={{ flex: 1, justifyContent: 'center' }} vertical max={1500} value={500} showTip={true}/>
          <Slider style={{ flex: 1, justifyContent: 'center' }} vertical max={100} value={50} showTip={true}/>
        </View>
      </View>
    )
  }
}
