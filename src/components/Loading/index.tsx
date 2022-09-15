import React from "react";
import { View, ActivityIndicator } from "react-native";
import { THEME } from "../../theme";

import { styles } from "./styles";

export function Loanding() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={50} color={THEME.COLORS.PRIMARY} />
    </View>
  );
}
