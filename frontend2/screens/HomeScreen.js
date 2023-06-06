import { View, Text, StyleSheet } from "react-native";

function HomeScreen() {
  return (
    <View style={styles.container} collapsable={false}>
      <Text>
        This is the HomeScreen! My plan was to create a demo feed with
        TopTabNavigation. But means we'll have to hardcode every screen... If
        anyone else can think of a dynamic version that would be sugoi.
      </Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonContainer: {
    borderRadius: 8,
    backgroundColor: "#6b6b6b",
    padding: 24,
  },
});
