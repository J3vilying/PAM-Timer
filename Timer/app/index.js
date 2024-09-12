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
          <View style={styles.button}>
            <Button title={isRunning ? 'Pausar' : 'Iniciar'} color="black" onPress={handleStartPause} />
          </View>
          <View style={styles.button}>
            <Button title="Resetar" color="black" onPress={handleReset} />
          </View>
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
    backgroundColor: '#101010',
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
  backgroundColor: '#cccccc',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 20,
  borderBlockColor: '#777777',
  borderLeftColor: '#777777',
  borderRightColor:'#777777',
  borderWidth: 5
},

titulo: {
  fontSize: 40,
  marginBottom: 100,
  color:'white',
  borderBottomColor: 'white',
  borderBottomWidth: 2
},

btn: {
  alignItems: 'center',
  justifyContent: 'center',
},

button: {
  marginTop: 20,
}

});

export default Timer;