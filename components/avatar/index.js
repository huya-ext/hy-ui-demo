import React, { Component } from 'react'
import { UI } from '@hyext/hy-ui'
import { TouchableOpacity, View, ScrollView, Text, StyleSheet } from 'react-native'
import styles from '../../common/styles'
import variables from '../../customTheme'
import './index.hycss'

const { Avatar } = UI
const imgUrl = require('../../img/image-demo.jpg')
const imgDefaultUrl = require('../../img/default-avatar.png')

function AvatarWithDesc({ containerStyle, desc, ...rest }) {
  return (
    <View style={{ alignItems: 'center', ...containerStyle }}>
      <Avatar {...rest}></Avatar>
      { desc ? <Text style={{ marginTop: 6 }}>{desc}</Text> : null }
    </View>
  )
}

function AvatarDIY({ containerStyle, desc, ...rest }) {
  return (
    <View style={{...containerStyle }}>
      <Avatar {...rest}></Avatar>
    </View>
  )
}

class AvatarScreen extends Component {

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>基础</Text>
          <View style={[styles.panel, {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }]}>
            <AvatarWithDesc desc={'size: l'} size="l" src={imgUrl}></AvatarWithDesc>
            <AvatarWithDesc desc={'size: m'} size="m" src={imgUrl}></AvatarWithDesc>
            <AvatarWithDesc desc={'size: s'} size="s" src={imgUrl}></AvatarWithDesc>
          </View>
          <Text style={styles.header}>修改边框样式</Text>
          <View style={[styles.panel, {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap'
          }]}>
            <AvatarWithDesc circle={false} desc={'无弧度'} size="m" src={imgUrl}></AvatarWithDesc>
            <AvatarWithDesc border={false} desc={'无边框'} size="m" src={imgUrl}></AvatarWithDesc>
            <AvatarWithDesc borderWidth={3} desc={'边框大小'} src={imgUrl}></AvatarWithDesc>
            <AvatarWithDesc borderColor={variables.hyBrandSuccess} desc={'边框颜色'} src={imgUrl}></AvatarWithDesc>
          </View>
          <Text style={styles.header}>自定义样式</Text>
          <View style={[styles.panel, {
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around'
          }]}>
            <AvatarWithDesc avatarStyle={{ width: 100, height: 100 }} src={imgUrl}></AvatarWithDesc>
            <AvatarWithDesc circle={false} avatarStyle={{ width: 30, height: 30 }} src={imgUrl}></AvatarWithDesc>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default AvatarScreen