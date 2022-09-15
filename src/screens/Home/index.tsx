// React
import React from "react";
import { Image, View } from "react-native";

//Styles
import { styles } from "./styles";

// Logo
import logoImg from "../../assets/logo-nlw-esports.png";

// Components
import { Heading } from "../../components/Heading";

export function Home() {
  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />
    </View>
  );
}
