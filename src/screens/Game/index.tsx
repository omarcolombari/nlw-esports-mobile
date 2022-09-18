//React
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

//Style
import { styles } from "./styles";

//Components
import { Background } from "../../components/Background";

export function Game() {
  return (
    <Background>
      <SafeAreaView style={styles.container}></SafeAreaView>
    </Background>
  );
}
