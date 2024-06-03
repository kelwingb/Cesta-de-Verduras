import React from "react";
import { View, Image, StyleSheet, TouchableOpacity} from "react-native";

import Texto from "../../../componentes/Texto";

export default function Detalhes({ nome, logoFazenda, nomeFazenda, descricao, preco, botao}) {
  return <>
    <Texto style={estilos.nome}>{nome}</Texto>
    <View style={estilos.fazenda}>
      <Image source={logoFazenda} style={estilos.imagemFazenda} />
      <Texto style={estilos.nomeFazenda}>{nomeFazenda}</Texto>
    </View>
    <Texto style={estilos.descricao}>{descricao}</Texto>
    <Texto style={estilos.preco}>{preco}</Texto>
    <TouchableOpacity style={estilos.botao} onPress={() => { }} >
      <Texto style={estilos.textoBotao}>
        {botao}
      </Texto>
    </TouchableOpacity>
  </>
}
 
const estilos = StyleSheet.create({
  nome: {
    color: "#464646",
    fontSize: 26,
    lineHeight: 42,
    fontWeight: "bold",
  },
  fazenda: {
    flexDirection: "row",
    paddingVertical: 12,
    paddingHorizontal: -16,
  },
  imagemFazenda: {
    width: 32,
    height: 32,
  },
  nomeFazenda: {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    paddingHorizontal: -16,
  },
  descricao: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 26,
    paddingHorizontal: -16,
  },
  preco: {
    color: "#2A9F85",
    fontWeight: "bold",
    fontSize: 26,
    lineHeight: 48,
    marginTop: 8,
    paddingHorizontal: -16,
  },
  botao: {
    margin: 8,
    backgroundColor: "#2A9F85",
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: "center",
  },
  textoBotao: {
    textAlign: "center",
    color: "white",
    fontSize: 16,
    lineHeight: 26,
    fontWeight: "bold",
  },
})