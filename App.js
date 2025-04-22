import React, { useState } from 'react';
import { View } from 'react-native';
import RegisterScreen from './src/screens/RegisterScreen';
import QuizScreen from './src/screens/QuizScreen';
import ResultScreen from './src/screens/ResultScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('Register');
  const [userData, setUserData] = useState({});
  const [gameData, setGameData] = useState({});

  const navigateTo = (screen, data = {}) => {
    if (screen === 'Quiz' || screen === 'Register') {
      setUserData(data);
    }
    if (screen === 'Result') {
      setGameData(data);
    }
    setCurrentScreen(screen);
  };

  return (
    <View style={{ flex: 1 }}>
      {currentScreen === 'Register' && <RegisterScreen navigateTo={navigateTo} />}
      {currentScreen === 'Quiz' && (
        <QuizScreen
          navigateTo={navigateTo}
          userName={userData.userName}
          userEmail={userData.userEmail}
        />
      )}
      {currentScreen === 'Result' && (
        <ResultScreen
          navigateTo={navigateTo}
          userName={gameData.userName}
          userEmail={gameData.userEmail}
          score={gameData.score}
        />
      )}
    </View>
  );
}
