import React, { Component } from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "../../common/styles";
import { NativeUI } from "@hyext-beyond/hy-ui-native";

class NativeInputScreen extends Component {
  state = { value: "" };

  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>原生输入组件</Text>
          <View
            style={[
              styles.panel,
              {
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-around",
              },
            ]}
          >
            <NativeInput
              value={this.state.value}
              style={{
                width: 200,
                height: 46,
                borderWidth: 1,
                borderRadius: 8,
                paddingLeft: 10,
              }}
              onChange={(v) => {
                this.setState({ value: v });
              }}
            ></NativeInput>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NativeInputScreen;
