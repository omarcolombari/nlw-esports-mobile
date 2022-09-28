//React
import React, { useState } from "react";
import {
  View,
  Modal,
  ModalProps,
  Text,
  TouchableOpacity,
  Alert,
  ActivityIndicator,
} from "react-native";
import * as Clipboard from "expo-clipboard";

//Styles
import { styles } from "./styles";

//Icons
import { MaterialIcons } from "@expo/vector-icons";
import { Activity, CheckCircle } from "phosphor-react-native";

//Theme
import { THEME } from "../../theme";
import { Heading } from "../Heading";

//Interface
interface IProps extends ModalProps {
  discord: string;
  onClose: () => void;
}

export function DuoMatch({ discord, onClose, ...rest }: IProps) {
  const [isCopping, setIsCopping] = useState<boolean>(false);

  const handleCopyDiscordToClipboard = async () => {
    setIsCopping(true);
    await Clipboard.setStringAsync(discord);

    Alert.alert(
      "Discord copiado!",
      "Usuário copiado para sua área de transferência"
    );
    setIsCopping(false);
  };

  return (
    <Modal animationType="fade" transparent statusBarTranslucent {...rest}>
      <View style={styles.container}>
        <View style={styles.content}>
          <TouchableOpacity onPress={onClose} style={styles.closeIcon}>
            <MaterialIcons
              name="close"
              size={20}
              color={THEME.COLORS.CAPTION_500}
            />
          </TouchableOpacity>
          <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />
          <Heading
            title="Let's play!"
            subtitle="Agora é só começar a jogar!"
            style={{ alignItems: "center", marginTop: 24 }}
          />
          <Text style={styles.label}>Adicione no Discord</Text>
          <TouchableOpacity
            onPress={handleCopyDiscordToClipboard}
            disabled={isCopping}
            style={styles.discordButton}
          >
            <Text style={styles.discord}>
              {isCopping ? (
                <ActivityIndicator color={THEME.COLORS.PRIMARY} />
              ) : (
                discord
              )}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
