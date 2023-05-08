import { StyleSheet, Button, SafeAreaView, Alert } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

const Separator = () => <View style={styles.separator}/>

export default function TabTwoScreen() {
  return (
    <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Write Your Story:
      </Text>
      <Separator></Separator>
      <View style={styles.fixToText}>
        <Button
          title="Add story"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          title="Delete"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>

    <Separator />
    <View>
      <Text style={styles.title}>
        ENTER STORY 
      </Text>
    </View>
  </SafeAreaView>
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
});

