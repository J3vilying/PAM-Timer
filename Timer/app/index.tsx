import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Timer = () => {
  // Definindo o estado inicial (tempo em segundos)
  const [timeLeft, setTimeLeft] = useState(60); // por exemplo, 60 segundos
  const [isRunning, setIsRunning] = useState(false); // controle de execução

  useEffect(() => {
    let timer = 0;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000); // atualiza a cada 1 segundo
    } else if (timeLeft === 0) {
      clearInterval(timer); // para o timer quando chegar a 0
    }
    return () => clearInterval(timer); // limpeza do intervalo ao desmontar ou atualizar
  }, [isRunning, timeLeft]);

  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(60); // reinicia o timer com o valor inicial (exemplo: 60 segundos)
  };

  return (
    <View style={styles.container}>
      <View>
        <Text  style={styles.titulo}>Cronômetro</Text>
      </View>
      <View style ={styles.cronometro}>
        <Text style={styles.timerText}>{timeLeft} segundos</Text>
        <View style={styles.btn}>
          <Button title={isRunning ? 'Pausar' : 'Iniciar'} onPress={handleStartPause} />
          <Button title="Resetar" onPress={handleReset} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#111',
  },

  timerText: {
    fontSize: 35,
    marginBottom: 10,
    textAlign: 'center'
  },

cronometro: {
  display: 'flex',
  width: '60%',
  height: '50%',
  backgroundColor: '#CCCCCC',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '12px', 
},

titulo: {
  fontSize: 40,
  marginBottom: 100,
  color:'white'
}

});

export default Timer;