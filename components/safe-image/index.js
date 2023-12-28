import React, { Component } from 'react'
import { UI } from '@hyext/hy-ui'
import { TouchableOpacity, View, ScrollView, Text, StyleSheet } from 'react-native'
import styles from '../../common/styles'

const { SafeImage, Button } = UI
const imgUrl = require('../../img/image-demo.jpg')
const imgDefaultUrl = require('../../img/default-avatar.png')

class SafeImageScreen extends Component {
  state = { isSafety: true }
  render() {
    const { isSafety } = this.state

    return (
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>基础</Text>
          <View style={[styles.panel, {
            alignItems: 'center',
            justifyContent: 'space-around'
          }]}>
            <SafeImage style={{ width: 100, height: 100 }} src={isSafety ? imgUrl : 'xxx'} backupSrc={imgDefaultUrl} onError={() => {console.log('ocurr error')}}></SafeImage>
            <Button onPress={() => { this.setState({ isSafety: !this.state.isSafety})}} style={{ marginTop: 20 }}>点我注入{isSafety ? '错误' : '正确'}的网络地址</Button>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default SafeImageScreen