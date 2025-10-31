import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { WiseConf } from 'lib-wiseapi-react-native';

export default function App() {
  const [domain, setDomain] = useState('');
  const [session, setSession] = useState('');
  const [sessionToken, setSessionToken] = useState('');
  const [showConference, setShowConference] = useState(false);

  const handleOpenConference = () => {
    if (!domain || !session || !sessionToken) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos');
      return;
    }

    setShowConference(true);
  };

  if (showConference) {
    return (
      <WiseConf
        domain={domain}
        session={session}
        sessionToken={sessionToken}
        buttons={['camera', 'microphone', 'hangup']}
        logo='https://wisecare.com.br/images/logo-rodape.svg'
        listeners={{
          onReadyToClose: () => setShowConference(false)
        }}
      />
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WiseAPI - React Native</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Domain</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o domain"
          value={domain}
          onChangeText={setDomain}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Session</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a session"
          value={session}
          onChangeText={setSession}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Session Token</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o session token"
          value={sessionToken}
          onChangeText={setSessionToken}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={handleOpenConference}
      >
        <Text style={styles.buttonText}>Abrir Conferência</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: '#333',
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
});
