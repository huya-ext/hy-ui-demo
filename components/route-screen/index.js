import { Route, Router } from "@hyext/router";
import { UI } from "@hyext/hy-ui";
import React, { Component } from "react";

const { Tab, View, Text } = UI

const createPage = (desc) => {
  return (props) => {
    return (
      <View style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 100
      }}>
        <Text>{desc}的props.location: {JSON.stringify(props.location, null, 2)}</Text>
      </View>
    )
  }
}

class RouteScreen extends Component {
  state = {
    tab: [
      {
        value: '/page1',
        label: 'page1'
      },
      {
        value: '/page2',
        label: 'page2'
      },
      {
        value: '/page3',
        label: 'page3'
      }
    ],
    currPath: '/page1'
  }

  handleChange = (item) => {
    const path = item.value
    this.setState({
      currPath: path
    })
    this.$router.history.replace(path)
  }

  render() {
    
    return (
      <View style={{ flex: 1 }}>
        <Tab data={this.state.tab} value={this.state.currPath} onChange={this.handleChange}></Tab>
        <Router initialEntries={[this.state.currPath]} ref={c => { this.$router = c }}>
          <Route path={'/page1'} component={createPage('page1')}></Route>
          <Route path={'/page2'} component={createPage('page2')}></Route>
          <Route path={'/page3'} component={createPage('page3')}></Route>
        </Router>
      </View>
    )
  }
}

export default RouteScreen