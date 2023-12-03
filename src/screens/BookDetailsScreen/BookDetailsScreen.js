import { Text, TouchableOpacity, View } from "react-native";
import styles from "./styles";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";

export default function BookDetailsScreen({ navigation, route }) {
  const book = route.params.book;

  const { deleteBook } = useContext(BookContext);

  const onEditBook = () => {
    navigation.navigate("EditBook", { book: book });
  };

  const onDeleteBook = () => {
    const isSuccess = deleteBook(book.id);
    if (isSuccess) {
      alert("Delete successfully");
      navigation.navigate("Home");
    }
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{ flex: 1, width: "100%" }}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.infoBox}>
          <Text style={styles.infoType}>Title</Text>
          <Text style={styles.infoValue}>{book.title}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoType}>Author</Text>
          <Text style={styles.infoValue}>{book.author}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoType}>Gender</Text>
          <Text style={styles.infoValue}>{book.gender}</Text>
        </View>
        <View style={styles.infoBox}>
          <Text style={styles.infoType}>Description</Text>
          <Text style={styles.infoValue}>{book.description}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.buttonRemove}
            onPress={() => onDeleteBook()}
          >
            <Text style={styles.buttonTitle}>Delete</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => onEditBook()}>
            <Text style={styles.buttonTitle}>Edit</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
}
