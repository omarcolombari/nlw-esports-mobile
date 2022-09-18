// React Navigation
import { NavigationContainer } from "@react-navigation/native";

// Route
import { AppRoutes } from "./app.routes";

export function Routes() {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
}
