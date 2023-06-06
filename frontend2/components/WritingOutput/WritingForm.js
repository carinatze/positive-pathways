import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import Input from "./Input";
import { useState } from "react";
import { GlobalStyles } from "../../constants/styles";
import { useNavigation } from "@react-navigation/native";
import Button from "../../UI/Button";

function WritingForm({ onSubmit, submitButtonLabel, defaultValues }) {
  const navigation = useNavigation();

  const [inputValues, setInputValues] = useState({
    title: defaultValues ? defaultValues.title : "",
    description: defaultValues ? defaultValues.description : "",
  });

  function inputChangedHandler(inputIdentifier, enteredValue) {
    setInputValues((currInputValues) => {
      return { ...currInputValues, [inputIdentifier]: enteredValue };
    });
  }

  function submitHandler() {
    const storyData = {
      title: inputValues.title,
      description: inputValues.description,
      date: defaultValues ? defaultValues.date : new Date(),
    };
    setInputValues(() => {
      return { title: "", description: "" };
    });
    onSubmit(storyData);
  }

  function cancelHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.form}>
      <Input
        textInputConfig={{
          placeholder: "Enter title here",
          placeholderTextColor: GlobalStyles.colors.primary200,
          onChangeText: inputChangedHandler.bind(this, "title"),
          value: inputValues.title,
          fontWeight: "bold",
          fontSize: 24,
        }}
      />
      <Input
        textInputConfig={{
          placeholder: "Enter description here",
          placeholderTextColor: GlobalStyles.colors.primary200,
          multiline: true,
          onChangeText: inputChangedHandler.bind(this, "description"),
          value: inputValues.description,
        }}
      />
      <View style={styles.buttons}>
        <Button onPress={submitHandler} style={styles.button}>
          {submitButtonLabel}
        </Button>
        <Button mode="flat" onPress={cancelHandler} style={styles.button}>
          Cancel
        </Button>
      </View>
    </View>
  );
}

export default WritingForm;

const styles = StyleSheet.create({
  form: { marginTop: 60 },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8,
  },
  button: {
    minWidth: 100,
    marginHorizontal: 8,
  },
});
