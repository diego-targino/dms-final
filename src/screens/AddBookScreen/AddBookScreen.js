import { useState } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BookContext } from "../../contexts/BookContext";

export default function AddBookScreen({ navigation }) {
  const [title, setTitle] = useState();
  const [gender, setGender] = useState();
  const [author, setAuthor] = useState();
  const [description, setDescription] = useState();

  const { user } = useContext(UserContext);
  const { saveNewBook } = useContext(BookContext);

  const onAddBook = () => {
    const book = {
      userId: user.id,
      title,
      author,
      gender,
      description,
    };

    const isSuccess = saveNewBook(book);
    alert(isSuccess ? "Saved successfully" : "Error on save");
    navigation.navigate("Home");
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <TextInput
          style={styles.input}
          placeholder="Title"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setTitle(text)}
          value={title}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Author"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setAuthor(text)}
          value={author}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          placeholder="Gender"
          onChangeText={(text) => setGender(text)}
          value={gender}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.inputDescription}
          placeholderTextColor="#aaaaaa"
          placeholder="Description"
          onChangeText={(text) => setDescription(text)}
          value={description}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          inputMode="text"
          multiline
        />
        <TouchableOpacity style={styles.button} onPress={() => onAddBook()}>
          <Text style={styles.buttonTitle}>Add new book</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
