// ApresentacaoPage.js
import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import styles from '../styles/ApresentacaoStyles';

const ApresentacaoPage = () => {
  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollViewContent}>
      <View style={styles.container}>
        <Image
          source={require('../assets/fotoPerfil.jpg')}
          style={styles.foto}
        />
        <Text style={styles.nome}>Bruno Vieira Souza</Text>
        <Text style={styles.local}>São Paulo - SP</Text>
        <Text style={styles.descricao}>Desenvolvedor de Software iOS e atualmente cursando MBA em Mobile Development Sou um desenvolvedor de software iOS com experiência profissional em grandes consultorias, especialmente no setor bancário. Atualmente, estou cursando MBA em Desenvolvimento Mobile para aprimorar ainda mais minhas habilidades e conhecimentos em minha área de especialização. Minha carreira se destaca pela colaboração em projetos desafiadores para grandes bancos, inclusive fora do Brasil. Além disso, tenho a oportunidade de aplicar minha experiência trabalhando na maior empresa de consultoria do mundo.</Text>
        
        {/* Botão LinkedIn */}
        <TouchableOpacity onPress={() => abrirLink('https://www.linkedin.com/in/bruno-vieira-a1264b16b/')} style={styles.botao}>
          <Text style={styles.textoBotao}>LinkedIn</Text>
        </TouchableOpacity>

        {/* Botão GitHub */}
        <TouchableOpacity onPress={() => abrirLink('https://github.com/BrunoVieiraSouza')} style={styles.botao}>
          <Text style={styles.textoBotao}>GitHub</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ApresentacaoPage;
