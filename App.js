import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
    <SafeAreaView style={styles.conteudo}>
    <View style={styles.container}>
      <Text style={styles.titulo}>Hello world!</Text>
    </View>
    </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'red',
    margin: 10,
  },
  titulo: {
    fontSize: 25,
    color: 'blue',
  },
  conteudo: {
    
  }
});
