import React, { Component } from 'react'
import { UI } from '@hyext/hy-ui'
import { View, ScrollView, Text } from 'react-native'
import styles from '../../common/styles'

const { FullImage, Button } = UI
const imgUrl = require('../../img/image-1.png')
const imgDefaultUrl = require('../../img/default-avatar.png')

class SafeImageScreen extends Component {
  
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>自适应父级容器</Text>
          <View style={[styles.panel, {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }]}>
            <View style={{ width: 200, height: 200 }}>
              <FullImage src={imgUrl} backupSrc={imgDefaultUrl} full></FullImage>
            </View>
          </View>
          <Text style={styles.header}>给定父级宽度，保持图片原比例自适应高度</Text>
          <View style={[styles.panel, {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }]}>
            <View style={{ width: 200 }}>
              <FullImage src={imgUrl} backupSrc={imgDefaultUrl} full fullType="width"></FullImage>
            </View>
          </View>
          <Text style={styles.header}>给定父级高度，保持图片原比例自适应宽度</Text>
          <View style={[styles.panel, {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }]}>
            <View style={{ height: 200 }}>
              <FullImage src={'https://huyavirtualactor.oss-cn-shenzhen.aliyuncs.com/file/5120ff024ab774b1ed25eebc9506f2cd.png'} backupSrc={imgDefaultUrl} full fullType="height"></FullImage>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default SafeImageScreen