// React
import React from "react";
import {
  TouchableOpacity,
  ImageBackground,
  ImageSourcePropType,
  TouchableOpacityProps,
  Text,
} from "react-native";

// Styles
import { styles } from "./styles";

// Interface
export interface IGameCardProps {
  id: string;
  name: string;
  ads: string;
  cover: ImageSourcePropType;
}

interface IProps extends TouchableOpacityProps {
  data: IGameCardProps;
}

// Theme
import { THEME } from "../../theme";

// Other libs
import { LinearGradient } from "expo-linear-gradient";

export function GameCard({ data: { ads, cover, id, name }, ...rest }: IProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={cover}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.ads}>{ads}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
