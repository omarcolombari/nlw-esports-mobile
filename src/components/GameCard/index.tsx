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
  title: string;
  _count: {
    ads: number;
  };
  bannerUrl: string;
}

interface IProps extends TouchableOpacityProps {
  data: IGameCardProps;
}

// Theme
import { THEME } from "../../theme";

// Other libs
import { LinearGradient } from "expo-linear-gradient";

export function GameCard({
  data: {
    _count: { ads },
    bannerUrl,
    id,
    title,
  },
  ...rest
}: IProps) {
  return (
    <TouchableOpacity style={styles.container} {...rest}>
      <ImageBackground style={styles.cover} source={{ uri: bannerUrl }}>
        <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
          <Text style={styles.name}>{title}</Text>
          <Text style={styles.ads}>{ads}</Text>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
}
