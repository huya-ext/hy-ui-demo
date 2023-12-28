/* eslint-disable react/no-direct-mutation-state */
import HYUI_NATIVE from '@hyext-beyond/hy-ui-native'
import HYUI from '@hyext/hy-ui'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Route, Router } from '../components/Route'
import './app.hycss'
import { components } from './config.js'
import { AAA } from "./test"

console.log('@hyext/hy-ui', HYUI, AAA)
console.log('@hyext-beyond/hy-ui-native', HYUI_NATIVE, global.__os)
console.log(Object.values, 'Object.values')

const { Button, View, Text, ScrollView, NavigationBar } = HYUI.UI

class Home extends Component {
  static propTypes = {
    onNavClick: PropTypes.func
  }

  renderItem () {
    const { props } = this
    return components.map((item, i) => {
      return (
        <Button className="com-list-item" onPress={() => { props.onNavClick(item.name) }} key={i}>
          <Text className="item-text">{item.name}-{item.title}</Text>
        </Button>
      )
    })
  }

  render () {
    return (
      <View className="com-list-wrapper">
        <Text className="list-title">组件列表</Text>
        <View className="com-list">
          {this.renderItem()}
        </View>
      </View>
    )
  }
}

function ComponentDemo ({ name, onBack }) {
  let Com = () => null
  const config = components.find((c) => {
    return c.name === name
  })

  if (config) {
    Com = config.component
  }

  return (
    <View style={{flex: 1}}>
      <NavigationBar
        title={name}
        onPressBack={() => {
          onBack && onBack()
        }}
        backLabelText='返回'
      >
      </NavigationBar>
      <Com></Com>
    </View>
  )
}

ComponentDemo.propTypes = {
  name: PropTypes.string,
  onBack: PropTypes.func
}

class App extends Component {
  constructor () {
    super()
    this.init()
  }

  init () {
    if (global.__os === 'web') {
      const search = window.location.search
      const componentName = search.split('=')[1]
      this.state = {
        path: componentName ? '/component' : '/home',
        componentName: componentName
      }
    } else {
      this.state = { path: '/home', componentName: '' }
    }
  }

  handleBack = () => {
    this.setState({
      path: `/home`,
      componentName: ''
    })
  }

  handleNavClick = (name) => {
    this.setState({
      path: `/component`,
      componentName: name
    })
  }

  render () {
    const {
      path,
      componentName
    } = this.state

    return (
      <ScrollView className="container">
        <Router currPath={path}>
          <Route path="/home" component={() => <Home onNavClick={this.handleNavClick} />}></Route>
          <Route path="/component" component={() => <ComponentDemo onBack={this.handleBack} name={componentName}></ComponentDemo>}></Route>
        </Router>
      </ScrollView>
    )
  }
}

function AppWithLayout() {
  return <App></App>
}

export default AppWithLayout
