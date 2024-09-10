import {
  Button,
  ImageBackground,
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CheckBox from '@react-native-community/checkbox';


export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSelected,setSelection]=useState(false)

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./../../assets/image.png')}
        style={styles.backgroundImage}
        resizeMode="cover">
        <View style={styles.fullView}>
          <Text style={styles.title}>Sign In</Text>
          <View style={styles.inputContainer}>
            <Text style={styles.textLabel}>Email</Text>
            <TextInput
              style={styles.input}
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
            />
            <Text style={styles.textLabel}>Password</Text>
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <View style={styles.checkboxContainer}>
              <CheckBox
                value={isSelected}
                onValueChange={setSelection}
                style={styles.checkbox}
              />
              <Text style={styles.label}>Remember me</Text>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.buttonStyle} onPress={() => {}}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fullView: {
    width: '95%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    color: '#000',
  },
  input: {
    height: 50,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#000',
    fontSize: 20,
    fontWeight: '400',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  buttonStyle: {
    backgroundColor: '#508C9B',
    height: 50,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  textLabel:{
    fontSize:24,
    color:"#000000"
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    justifyContent:'flex-start',
    color:"#000"
  },
  checkbox: {
    alignSelf: 'center',
  },
  label: {
    margin: 8,
    color:"#000",
    fontSize:18,
    fontWeight:"500"
  }
});
