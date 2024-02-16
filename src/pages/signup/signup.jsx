import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const SignUp = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Text style={styles.header}>SIGN UP</Text>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat1.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" />
      <TextInput style={styles.input} placeholder="Repeat Password" />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.text}>SIGN UP</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    fontSize: 34,
    fontWeight: "bold",
  },
  page: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#154484",
    width: 270,
    borderRadius: 8,
    padding: 10,
    height: 50,
  },
  text: {
    color: "white",
    fontSize: 21,
  },
  input: {
    borderWidth: 1,
    height: 50,
    width: 270,
    margin: 12,
    padding: 10,
    borderRadius: 8,
  },
  signup: {
    padding: 5,
  },
});
export default SignUp;
