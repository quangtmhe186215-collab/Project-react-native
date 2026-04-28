
import { useState } from 'react';
import { Text, View, StyleSheet, Button, TextInput} from 'react-native';
import { blue } from 'react-native-reanimated/lib/typescript/Colors';

export default function HomeScreen() {

  const [count, setCount] = useState<number>(0);
  const [name,setName] = useState<string>("");

  return (
    <View style={styles.container}>
       <Text>Name: {name}</Text>
       <TextInput onChangeText={(value) => setName(value)}
       style={{borderWidth: 1,
                borderColor: "blue", width : 200, padding : 20
       }}></TextInput>
       <Text>
            Count = {count}
       </Text>
       <View>
            <Button title='Tăng' onPress={() => setCount(count + 1)}></Button>
            <Button title='Giamr' onPress={() => setCount(count - 1)}></Button>
       </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'blue',
  },
  subText: {
    fontSize: 18,
    color: 'gray',
  },
  hello1 : {
    color: "red", fontSize: 25,
    borderWidth: 1
  },
  header:{
    fontSize: 30, color:"blue", fontWeight: "bold"
  }
});