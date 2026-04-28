
import { useState } from 'react';
import { Text, View, StyleSheet, Button} from 'react-native';

export default function HomeScreen() {

  const [name, setName] = useState<string>("Quang TM!");
  const [count, setCount] = useState<number>(0);
  const [test, setTest] = useState({
    name: "Quang TM",
    age: 23
  })

  return (
    <View style={styles.container}>
       <Text>
            {name}
            {JSON.stringify(test)} Hello word
       </Text>
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