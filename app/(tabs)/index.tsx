
import { useState } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';

export default function HomeScreen() {

  const [students, setStudents] = useState([
    { id: 1, age: 20, name: "Quang" },
    { id: 2, age: 21, name: "Nam" },
    { id: 3, age: 19, name: "Huy" },
    { id: 4, age: 22, name: "Minh" },
    { id: 5, age: 20, name: "Tuan" },
    { id: 6, age: 23, name: "Dat" },
    { id: 7, age: 18, name: "Khanh" },
    { id: 8, age: 21, name: "Long" },
    { id: 9, age: 20, name: "Duc" },
    { id: 11, age: 19, name: "Nghĩa" },
    { id: 12, age: 19, name: "Chấn" },
    { id: 13, age: 19, name: "Sang" },
    { id: 14, age: 19, name: "Thắng" }
  ]);


  return (
    <View>
      <ScrollView>
        {students.map(item => {
          return (
            <View key={item.id} style={styles.container}>
              <Text>{item.name} - {item.age}</Text>
            </View>
          )
        })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 3,
    backgroundColor: "pink",
    marginBottom: 15,
    fontWeight: "bold",
    height: 60,
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
  hello1: {
    color: "red", fontSize: 25,
    borderWidth: 1
  },
  header: {
    fontSize: 30, color: "blue", fontWeight: "bold"
  }
});