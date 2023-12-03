import { useEffect, useState } from "react";
import styles from "./styles";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";
import { BookContext } from "../../contexts/BookContext";

export default function EditBookScreen({ navigation, route }) {
  const book = route.params.book;

  const [title, setTitle] = useState(book.title);
  const [gender, setGender] = useState(book.gender);
  const [author, setAuthor] = useState(book.author);
  const [description, setDescription] = useState(book.description);
  const [disableButton, setDisableButton] = useState(false);

  const { user } = useContext(UserContext);
  const { updateBook } = useContext(BookContext);

  useEffect(() => {
    if (!title || !author || !description || !gender) setDisableButton(true);
    else setDisableButton(false);
  }, [title, author, gender, description]);

  const onEditBook = () => {
    if (!title || !author || !description || !gender) return;

    const newDataBook = {
      userId: user.id,
      id: book.id,
      title,
      author,
      gender,
      description,
    };

    const isSuccess = updateBook(newDataBook);
    alert(isSuccess ? "Updated successfully" : "Error on update");
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
        <TouchableOpacity
          disabled={disableButton}
          style={disableButton ? styles.disabledButton : styles.button}
          onPress={() => onEditBook()}
        >
          <Text style={styles.buttonTitle}>Edit book</Text>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </View>
  );
}
