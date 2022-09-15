// React
import React from "react";
import { View, Text, ViewProps } from "react-native";

// Styles
import { styles } from "./styles";

// Interface
interface IProps extends ViewProps {
  title: string;
  subtitle: string;
}

export function Heading({ subtitle, title, ...rest }: IProps) {
  return (
    <View style={styles.container} {...rest}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}
