import { View, Text, Image } from "react-native";
import styles from "./styles";
import { TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function ListItem(props) {
  const onViewDetails = () => {
    props.navigation.navigate("BookDetails", { book: props.book });
  };

  return (
    <View style={styles.container}>
      <View style={styles.bookInfo}>
        <View style={styles.infoLine}>
          <Text>Title: </Text>
          <Text>{props.book?.title}</Text>
        </View>
        <View style={styles.infoLine}>
          <Text>Author:</Text>
          <Text>{props.book?.author}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => onViewDetails()}>
        <Image
          source={require("../../../assets/eye.png")}
          style={{ width: 24, height: 24 }}
        />
      </TouchableOpacity>
    </View>
  );
}
