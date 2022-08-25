import React, { useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { appStyles as styles } from "./styles";

function App() {
  const [text, setText] = useState("");

  const [tasks, setTasks] = useState([]);

  const handleTaskPress = () => {
    setTasks([...tasks, text]);
    setText("");
  };

  const handleDeleteTaskPress = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={styles.container}>
        <Text style={styles.title}>Yapılacaklar</Text>
        <Text style={styles.subtitle}>
          Yapılacak işlerinizi ve görevlerinizi kutucuğa girin ve ekle butonuna
          basın.
        </Text>
        <TextInput
          style={styles.input}
          placeholder="Buraya Yazın"
          value={text}
          onChangeText={setText} // burda kullanıyoruz.
        />
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={handleTaskPress}
        >
          <Text style={styles.buttonText}>Ekle</Text>
        </TouchableOpacity>
        <View style={styles.divider} />
        <FlatList
          data={tasks}
          renderItem={({ item, index }) => (
            <View style={styles.taskContainer}>
              <Text style={styles.taskText}>{item}</Text>
              <TouchableOpacity
                style={styles.taskDelete}
                onPress={() => {
                  handleDeleteTaskPress(index);
                }}
              >
                <Text style={styles.taskDeleteText}>X</Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item + Date.now() + Math.random()}
        />
      </View>
    </SafeAreaView>
  );
}

export default App;
