// React
import React, { useEffect, useState } from "react";
import { FlatList, Image, View } from "react-native";

//Styles
import { styles } from "./styles";

// Logo
import logoImg from "../../assets/logo-nlw-esports.png";

// Components
import { Heading } from "../../components/Heading";
import { GameCard, IGameCardProps } from "../../components/GameCard";

// Game List
import api from "../../services/api";

export function Home() {
  const [games, setGames] = useState<IGameCardProps[]>([]);

  useEffect(() => {
    api.get<IGameCardProps[]>("/games").then((res) => setGames(res.data));
  });

  return (
    <View style={styles.container}>
      <Image source={logoImg} style={styles.logo} />
      <Heading
        title="Encontre seu duo"
        subtitle="Selecione o game que deseja jogar..."
      />

      <FlatList
        contentContainerStyle={styles.contentList}
        data={games}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <GameCard data={item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
