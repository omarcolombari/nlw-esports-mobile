// React
import React, { useEffect, useState } from "react";
import { FlatList, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

//React Navigation
import { useNavigation } from "@react-navigation/native";

//Styles
import { styles } from "./styles";

// Logo
import logoImg from "../../assets/logo-nlw-esports.png";

// Components
import { Heading } from "../../components/Heading";
import { GameCard, IGameCardProps } from "../../components/GameCard";
import { Background } from "../../components/Background";

// Game List
import api from "../../services/api";

export function Home() {
  const [games, setGames] = useState<IGameCardProps[]>([]);

  useEffect(() => {
    api.get<IGameCardProps[]>("/games").then((res) => setGames(res.data));
  });

  const navigation = useNavigation();

  const handleOpenGame = ({ id, title, bannerUrl }: IGameCardProps) => {
    navigation.navigate("game", { bannerUrl, id, title });
  };

  return (
    <Background>
      <SafeAreaView style={styles.container}>
        <Image source={logoImg} style={styles.logo} />
        <Heading
          title="Encontre seu duo"
          subtitle="Selecione o game que deseja jogar..."
        />

        <FlatList
          contentContainerStyle={styles.contentList}
          data={games}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <GameCard onPress={() => handleOpenGame(item)} data={item} />
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </SafeAreaView>
    </Background>
  );
}
