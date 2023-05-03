import { useState } from "react";
import { StyleSheet, TextInput, useColorScheme } from "react-native";

import { Text, View } from "../../components/Themed";
import Colors from "../../constants/Colors";

export default function TabThreeScreen() {
  const [text, setText] = useState('');
  const colorScheme = useColorScheme();

  const handleTextChange = (newText: string) => {
    setText(newText);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write a Story</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <TextInput
        style={[styles.textInput, {color: Colors[colorScheme ?? "light"].text}]}
        multiline
        placeholder="Write your story here"
        value={text}
        onChangeText={handleTextChange}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
  textInput: {
    height: 200,
    width: "80%",
    borderWidth: 1,
    borderColor: "gray",
    padding: 10,
  },
});
