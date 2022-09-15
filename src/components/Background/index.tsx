// React
import React from "react";
import { ImageBackground } from "react-native";

// Styles
import { styles } from "./styles";

// Background
import backgroundImage from "../../assets/background-galaxy.png";

interface IProps {
  children: React.ReactNode;
}

export function Background({ children }: IProps) {
  return (
    <ImageBackground
      source={backgroundImage}
      defaultSource={backgroundImage}
      style={styles.container}
    >
      {children}
    </ImageBackground>
  );
}
