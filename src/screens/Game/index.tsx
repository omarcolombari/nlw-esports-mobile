//React
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

//React Navigation
import { useNavigation, useRoute } from "@react-navigation/native";

//Style
import { styles } from "./styles";

//Components
import { Background } from "../../components/Background";
import { Heading } from "../../components/Heading";
import { DuoCard, IPropsDuoCard } from "../../components/DuoCard";
import { DuoMatch } from "../../components/DuoMatch";

//Types
import { GameParams } from "../../@types/navigation";

//Icons and Logo
import { Entypo } from "@expo/vector-icons";
import logoImg from "../../assets/logo-nlw-esports.png";

//Theme
import { THEME } from "../../theme";

//Axios
import api from "../../services/api";

export function Game() {
  const [duos, setDuos] = useState<IPropsDuoCard[]>([]);
  const [discordDuoSelected, setDiscordDuoSelected] = useState<string>("");

  const route = useRoute();
  const game = route.params as GameParams;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const getDiscordUser = async (adsId: string) => {
    api
      .get(`/ads/${adsId}/discord`)
      .then((res) => setDiscordDuoSelected(res.data.discord));
  };

  useEffect(() => {
    api
      .get<IPropsDuoCard[]>(`/games/${game.id}/ads`)
      .then((res) => setDuos(res.data));
  });

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={handleGoBack}>
            <Entypo
              name="chevron-thin-left"
              color={THEME.COLORS.CAPTION_300}
              size={20}
            />
          </TouchableOpacity>
          <Image source={logoImg} style={styles.logo} />
          <View style={styles.right} />
        </View>

        <Image
          source={{ uri: game.bannerUrl }}
          style={styles.cover}
          resizeMode="cover"
        />

        <Heading title={game.title} subtitle="Conecte-se e comece a jogar!" />

        <FlatList
          data={duos}
          horizontal
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <DuoCard
              onConnect={() => {
                getDiscordUser(item.id);
              }}
              data={item}
            />
          )}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[
            duos.length > 0 ? styles.contentList : styles.emptyListContet,
          ]}
          style={styles.containerList}
          ListEmptyComponent={() => (
            <Text style={styles.emptyListText}>
              Não há anúncios publicados ainda.
            </Text>
          )}
        />

        <DuoMatch
          onClose={() => setDiscordDuoSelected("")}
          visible={discordDuoSelected.length > 0}
          discord={discordDuoSelected}
        />
      </SafeAreaView>
    </Background>
  );
}
