import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const ResultScreen = ({ userName, userEmail, score, navigateTo }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Fim de jogo</Text>
      <Text style={styles.score}>Jogador(a): {userName}</Text>
      <Text style={styles.score}>E-mail: {userEmail}</Text>
      <Text style={styles.message}>Pontuação: {score}</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigateTo('Quiz')}>
        <Text style={styles.buttonText}>Reiniciar quiz</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigateTo('Register')}>
        <Text style={styles.buttonText}>Voltar ao cadastro</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#d1fae5', // verde claro
  },
  message: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1f2937',
    textAlign: 'center',
    marginBottom: 16,
  },
  score: {
    fontSize: 18,
    color: '#374151',
    marginBottom: 8,
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#8b5cf6', // roxo
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    marginTop: 12,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default ResultScreen;
