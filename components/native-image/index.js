import React, { Component } from "react";
import { UI } from "@hyext/hy-ui";
import { View, ScrollView, Text } from "react-native";
import styles from "../../common/styles";
import { NativeUI } from "@hyext-beyond/hy-ui-native";

const imgUrl = require("../../img/image-1.png");
const imgDefaultUrl = require("../../img/default-avatar.png");

const { NativeImage, NativeImageBackground } = NativeUI;

class NativeImageScreen extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <View style={styles.body}>
          <Text style={styles.header}>原生图片组件</Text>
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
            <View style={{ borderWidth: 1 }}>
              <NativeImage
                style={{ width: 200, height: 200, borderRadius: 200 }}
                source={imgUrl}
              ></NativeImage>
            </View>
          </View>
          <Text style={styles.header}>原生图片背景组件</Text>
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
            <View style={{ borderWidth: 1 }}>
              <NativeImageBackground
                style={{
                  width: 200,
                  height: 200,
                  borderRadius: 200,
                  justifyContent: "center",
                  alignItems: "center",
                }}
                source={imgUrl}
              >
                <Text style={{color: '#fff'}}>666666</Text>
              </NativeImageBackground>
            </View>
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default NativeImageScreen;
