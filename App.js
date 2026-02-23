import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';

export default function App() {
  return (
    <ImageBackground
      source={require('./assets/imagem/Corinthians.jpg')}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.container}>

        {/* IMAGEM CENTRAL */}
        <View style={styles.center}>
          <Image
            source={require('./assets/imagem/amor.jpg')}
            style={styles.imagem}
          />
        </View>

        {/* TEXTO EMBAIXO */}
        <Text style={styles.texto}>
          Amo minha mulher!!!
        </Text>

      </View>

      <StatusBar style="light" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },

  container: {
    flex: 1,
  },

  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  imagem: {
    width: 162,
    height: 162,
    borderRadius: 93,
    marginTop: -69,
    marginLeft: 7,
  },

  texto: {
    position: 'absolute',
    bottom: 40,
    alignSelf: 'center',
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});