import React from 'react';
import { 
  StyleSheet, 
  Text, 
  View,
  Image, 
  TextInput,
  ScrollView,
  Alert,
  Button,

} from 'react-native';

export default class App extends React.Component {

constructor(props) {
    super(props);
    this.state = {
      titleText: "Nozes",
      bodyText: 'Dados obrigatórios* ',
      text: '',

    };
  }

  _onPressButton() {
    Alert.alert('Botão pressionado!')
  }

  render() {
    return (
<View style={styles.container}> 
<View>
  <Image style={styles.imgLogo} source={require('./img/nerd.png')} />
      <Text style={styles.baseText}>
        <Text style={styles.titleText} onPress={this.onPressTitle}>      
          
          {this.state.titleText}{'\n'}{'\n'}
        </Text>
        <Text style={styles.bodyText} numberOfLines={1}>
          {this.state.bodyText}
        </Text>
      </Text>
</View>
<View style={styles.container2}>
      <TextInput
          style={{height: 40}}
          placeholder="Nome Completo"
          onChangeText={(text) => this.setState({text})}
        />
        <TextInput
          style={{height: 40}}
          type= "password"
          placeholder="Senha"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>


{/* BOTOES */}
        <View style={styles.alternativeLayoutButtonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Login"
          />
          <Button
            onPress={this._onPressButton}
            title="Estou aqui!"
            color="#841584"
          />
        </View>
      </View>

        
</View>



      // <View style={styles.container}>
      //   <Text style={styles.text}>Primeira Tela Demo</Text>
        
      //   <Text>Shake your phone to open the developer menu.</Text>
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2:{
    flex:1,
    backgroundColor: '#fff',
    width: 360, 
    height: 450,
    padding: 10,
  },
    imgLogo:{
      marginTop: 100,
      marginBottom: 30,
      marginLeft: 40,
      height: 210,
      width: 210,
      alignItems: 'center',
      
     
    },
   titleText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFF',
    alignItems: 'center',
  },
  bodyText:{
    alignItems: 'center',
    fontSize: 12,
    justifyContent: 'center',
  },
  alternativeLayoutButtonContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
});
