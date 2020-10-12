import React from "react";
import { View, StatusBar, SafeAreaView } from "react-native";
import Icon from "react-native-dynamic-vector-icons";
import BouncyCircleButton from "@paraboly/react-native-bouncy-circle-button";

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
      >
        <View
          style={{
            width: "90%",
            flexDirection: "row",
            justifyContent: "space-evenly",
          }}
        >
          <BouncyCircleButton
            onPress={() => console.log("Bouncy Circle Button is pressed")}
          >
            <Icon name="facebook" type="Fontisto" color="#4267B2" size={20} />
          </BouncyCircleButton>
          <BouncyCircleButton
            onPress={() => console.log("Bouncy Circle Button is pressed")}
          >
            <Icon name="twitter" type="AntDesign" color="#1DA1F2" size={20} />
          </BouncyCircleButton>
          <BouncyCircleButton
            onPress={() => console.log("Bouncy Circle Button is pressed")}
          >
            <Icon
              name="medium-monogram"
              type="AntDesign"
              color="#211F1F"
              size={23}
            />
          </BouncyCircleButton>
          <BouncyCircleButton
            onPress={() => console.log("Bouncy Circle Button is pressed")}
          >
            <Icon name="github" type="AntDesign" color="#211F1F" size={23} />
          </BouncyCircleButton>
        </View>
      </SafeAreaView>
    </>
  );
};

export default App;
