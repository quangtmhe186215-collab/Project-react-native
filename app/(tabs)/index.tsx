
import { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TextInput, Button } from 'react-native';

export default function HomeScreen() {

  type Todo = {
    id: string;
    title: string;
  }

  const [text, setText] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAdd = () => {
    if(text.trim() === ''){
      alert("Vui lòng nhập input")
      return;
    }

      const newTodo = {
         id: Date.now().toString(),
         title: text
      };

      setTodos([...todos, newTodo]);
      setText('');
  };



  return (
    <View style={styles.container}>
        {/* header */}
        <Text style={styles.header}>APP Xàm Lồn</Text>
        {/* form */}
        <View>
            <TextInput style={styles.textInput}
             placeholder='Enter Todo ....'
             value={text}
             onChangeText={setText}
             ></TextInput>

            <Button
             title='Add Todo List'
             onPress={handleAdd}
             ></Button>
        </View>
         {/* list */}
          <FlatList
               data={todos}
               keyExtractor={(item) => item.id}
               renderItem={({item}) => (
                <View style={styles.item}>
                    <Text>{item.title}</Text>
                </View>
               )}
          />

    </View>
  );
}

const styles = StyleSheet.create({
  header: {
     backgroundColor: "orange",
     paddingHorizontal: 20,
     fontSize: 50,
     textAlign: "center"
  },
  container: {
    paddingTop: 50,
    paddingHorizontal: 20,
    flex: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "black",
    marginTop: 20,
    marginHorizontal: 30,
    marginBottom: 30,
  },
  item: {
    padding: 15,
    backgroundColor: '#ddd',
    marginTop: 10
  }
});