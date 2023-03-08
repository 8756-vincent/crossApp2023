import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { TextInput } from 'react-native-web';

export function SignUpScreen( props ) {
    return (
      <View>
        <Text style={style.title}>Sign Up Screen for an account</Text>
        <View style ={style.inputGroup}>
          <Text>Email address</Text>
          <TextInput
              style={style.input}
              placeholder ="email@domain.com"
          />
        </View>
        <View style ={style.inputGroup}>
          <Text >Password</Text>
          <TextInput 
              style={style.input}
              placeholder = "minimum 8 characters"
          />
        </View>
        <TouchableOpacity style={style.button}>
          <text style={style.buttontext}>Sign Up</text>
        </TouchableOpacity>
      </View>
    );
  }

  const style = StyleSheet.create({
    page:{
      marginHorizontal: 60,
    },
    title: {
      fontSize: 20,
      textAlign: 'center',
      margin:20,
    },
    input:{
      backgroundColor: "#ffffff",
      padding: 5,
    },
    inputGroup:{
      marginVertical:5,

    },
    button:{
      backgroundColor: "#000000",
      padding: 10,
      marginVertical: 10,
    },
    buttontext:{
      color: "#ff212f"
    }

  })