import { Text, View, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}> Welcome Project MMA</Text>
      </View>
      <Text style={{ color: "red", fontSize: 30}}>Tên Tôi Là Quang!</Text>
      <Text style={styles.hello1}>Dự án React-Native đầu tiên của tôi</Text>
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