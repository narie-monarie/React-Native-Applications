import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

const Login = ({ navigation }) => {
  return (
    <View style={styles.page}>
      <Image
        source={{
          uri: "https://reactnative.dev/docs/assets/p_cat1.png",
        }}
        style={{ width: 200, height: 200 }}
      />
      <TextInput style={styles.input} placeholder="Username" />
      <TextInput style={styles.input} placeholder="Password" />
      <TouchableOpacity onPress={()=>navigation.navigate('Cat')} style={styles.button}>
        <Text style={styles.text}>LOGIN</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.signup}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text>No Account? Press this to SignUP</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
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

export default Login;
