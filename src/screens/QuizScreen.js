import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const geographyQuestions = [
  {
    question: 'Qual é a capital da França?',
    correctAnswer: 'Paris',
    answers: ['Paris', 'Londres', 'Berlim'],
  },
  {
    question: 'Qual é o maior país do mundo em extensão territorial?',
    correctAnswer: 'Rússia',
    answers: ['Canadá', 'Rússia', 'China'],
  },
  {
    question: 'Onde fica a Cordilheira dos Andes?',
    correctAnswer: 'América do Sul',
    answers: ['Ásia', 'América do Sul', 'Europa'],
  },
  {
    question: 'Qual oceano banha o litoral do Brasil?',
    correctAnswer: 'Atlântico',
    answers: ['Atlântico', 'Pacífico', 'Índico'],
  },
  {
    question: 'Em qual continente está localizado o Egito?',
    correctAnswer: 'África',
    answers: ['África', 'Ásia', 'Europa'],
  },
];

const QuizScreen = ({ userName, userEmail, navigateTo }) => {
  const [gameStarted, setGameStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [questionNumber, setQuestionNumber] = useState(0);

  const startGame = () => {
    setGameStarted(true);
    setScore(0);
    setQuestionNumber(0);
  };

  const currentQuestion = geographyQuestions[questionNumber];

  const handleAnswer = (selectedAnswer) => {
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    } else {
      Alert.alert('Resposta errada', `A resposta correta era ${currentQuestion.correctAnswer}`);
    }

    if (questionNumber < geographyQuestions.length - 1) {
      setQuestionNumber(questionNumber + 1);
    } else {
      navigateTo('Result', { userName, userEmail, score });
    }
  };

  return (
    <View style={styles.container}>
      {!gameStarted ? (
        <>
          <Text style={styles.message}>Buenas, {userName}!</Text>
          <TouchableOpacity style={styles.button} onPress={startGame}>
            <Text style={styles.buttonText}>Iniciar quiz</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => navigateTo('Register')}>
            <Text style={styles.buttonText}>Voltar ao cadastro</Text>
          </TouchableOpacity>
        </>
      ) : (
        <>
          <Text style={styles.message}>
            Questão {questionNumber + 1} de {geographyQuestions.length}
          </Text>
          <Text style={styles.question}>{currentQuestion.question}</Text>
          {currentQuestion.answers.map((answer, index) => (
            <TouchableOpacity
              key={index}
              style={styles.answerButton}
              onPress={() => handleAnswer(answer)}
            >
              <Text style={styles.answerText}>{answer}</Text>
            </TouchableOpacity>
          ))}
          <Text style={styles.score}>Acertos: {score}</Text>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1fae5', // verde claro
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  message: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#1e293b',
    textAlign: 'center',
  },
  question: {
    fontSize: 20,
    marginBottom: 20,
    color: '#334155',
    textAlign: 'center',
  },
  answerButton: {
    backgroundColor: '#8b5cf6', // roxo
    paddingVertical: 12,
    paddingHorizontal: 20,
    marginVertical: 5,
    borderRadius: 8,
    width: '80%',
    alignItems: 'center',
  },
  answerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '500',
  },
  score: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#1e293b',
  },
  button: {
    backgroundColor: '#8b5cf6',
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

export default QuizScreen;
