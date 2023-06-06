import { StyleSheet, View, Text } from "react-native";
import IconButton from "../UI/IconButton";
import { GlobalStyles } from "../constants/styles";

function HttpsScreen({ navigation, route }) {
  const currentStory = route.params.content;

  function iconHandler() {
    navigation.goBack();
  }

  return (
    <View style={styles.visible}>
      <Text style={styles.text}>
        The data below would be the data sent with HTTPS request. Unfortunately,
        the user will have to save the story description before sending the most
        recent version.
      </Text>
      <Text style={styles.data}>"{currentStory.description}"</Text>
      <View style={styles.lightbulb}>
        <IconButton
          icon="close-outline"
          color={GlobalStyles.colors.accent500}
          size={36}
          onPress={iconHandler}
        />
      </View>
    </View>
  );
}

export default HttpsScreen;

const styles = StyleSheet.create({
  text: { color: GlobalStyles.colors.accent500, paddingBottom: 20 },
  data: { color: GlobalStyles.colors.accent500, textAlign: "center" },
  visible: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});
