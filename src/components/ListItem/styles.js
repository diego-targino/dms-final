import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "white",
    width: "90%",
    flexDirection: "row",
    maxHeight: 80,
    borderRadius: 5,
  },
  bookInfo: {
    width: "90%",
    padding: 10,
  },
  infoLine: {
    flex: 1,
    flexDirection: "row",
    gap: 4,
  },
  button: {
    width: 24,
    marginRight: 30,
    marginTop: 10,
    height: 24,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
