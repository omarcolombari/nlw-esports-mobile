// React
import React from "react";
import { View, ActivityIndicator } from "react-native";

// Theme
import { THEME } from "../../theme";

// Styles
import { styles } from "./styles";

export function Loanding() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
