import { StatusBar } from 'expo-status-bar';
import { Button, Image, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.imagePos}>
        <Image style={styles.image} source={require('./assets/images/goal.png')} />
      </View>
      <View style={styles.login}>
        <Text style={styles.loginText}>Login</Text>
      </View>
      <View style={styles.textInputContainer}>
        <TextInput style={styles.textInput} placeholder={'Email or Phone number'} />
        <TextInput style={styles.textInput} placeholder={'Password'} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title='Login' color={'#468c77'} />
      </View>
      <View>
        <Text style={styles.text1}>Forget Your Password?</Text>
      </View>
      <View>
        <Text style={styles.text2}>Or Login with</Text>
      </View>
      <View style={styles.iconsContainer}>
        <View>
          <Image style={styles.SocialIcons} source={require('./assets/images/linkedin.png')} />
        </View>
        <View>
          <Image style={styles.SocialIcons} source={require('./assets/images/twitter.png')} />
        </View>
        <View>
          <Image style={styles.SocialIcons} source={require('./assets/images/instagram.png')} />
        </View>
      </View>
      <View>
        <Text style={styles.text2}>Don't have account? Sign Up</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f1eded',

  },
  login: {
    flexDirection: 'column-reverse',
    paddingBottom: 20,
    marginStart: 55,
    marginTop: 40,
  },
  loginText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'left'
  },
  textInputContainer: {
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: 'white',
    borderRadius: 15,
    color: '#120438',
    width: 310,
    padding: 10,
    margin: 10
  },
  image: {
    width: 100,
    height: 100
  },
  imagePos: {
    alignSelf: 'center',
    paddingTop: 80
  },
  buttonContainer: {
    width: 310,
    alignSelf: 'center',
    paddingTop: 20,
  },
  text1: {
    fontSize: 11,
    alignSelf: 'flex-end',
    paddingRight: 50,
    paddingTop: 10,
    paddingBottom: 35,
    color: 'gray',
  },
  text2: {
    fontSize: 11,
    alignSelf: 'center',
    paddingTop: 15,
    color: 'gray',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 80,
    paddingTop: 15
  },
  SocialIcons: {
    width: 36,
    height: 36,
  },
});
