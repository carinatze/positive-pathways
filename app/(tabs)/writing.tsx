import { StyleSheet } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Write Your Story</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/stories.tsx" />
    </View>
    
  );
}

function Sidebar() {
  return (
  
  <div className="sidebar">
      <div className="sidebar-header">
        <h1>My Journals</h1>
        <button>Add story</button>
      </div>

      <div className="sidebar-notes">
        <div className="sidebar-note">
          <div className="sidebar-note-title">
            <strong>JOURNAL TITLE</strong>
            <button>Delete</button>
          </div>
          <p>Preview of Journal</p>
          <small className="note-preview">Last modified [date]</small>
        </div>        
      </div>
    </div>
  )
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

