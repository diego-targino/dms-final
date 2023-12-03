import React from "react";
import { Text, View } from "react-native";
import styles from "./styles";
import { TextInput } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ListItem } from "../../components";
import { useContext } from "react";
import { BookContext } from "../../contexts/BookContext";
import { UserContext } from "../../contexts/UserContext";
import { useEffect } from "react";

export default function HomeScreen({ navigation }) {
  const [filter, setFilter] = useState("");

  const { user } = useContext(UserContext);
  const { bookList, getBookList } = useContext(BookContext);

  const onFilter = () => {
    getBookList(user.id, filter);
  };

  const onAddBook = () => navigation.navigate("AddBook");

  useEffect(() => getBookList(user.id), []);

  return (
    <View style={styles.container}>
      <View style={styles.inputBox}>
        <TextInput
          style={styles.input}
          placeholder="Enter a title"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setFilter(text)}
          value={filter}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TouchableOpacity style={styles.button} onPress={() => onFilter()}>
          <Text style={styles.buttonTitle}>Filter</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.buttonAdd} onPress={() => onAddBook()}>
          <Text style={styles.buttonTitle}>Add</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.listBox}>
        {bookList.map((book) => {
          return <ListItem key={book.id} book={book} navigation={navigation} />;
        })}
      </View>
    </View>
  );
}
