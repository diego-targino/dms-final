import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  inputBox: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    gap: 10,
    maxHeight: 70,
    paddingLeft: 20,
    paddingRight: 20,
  },
  input: {
    height: 48,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 10,
    width: "55%",
    textAlign: "center",
  },
  button: {
    width: "20%",
    backgroundColor: "#788eec",
    marginTop: 10,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonAdd: {
    width: "22%",
    backgroundColor: "#3CB371",
    marginTop: 10,
    height: 48,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  listBox: {
    width: "100%",
    flex: 1,
    alignItems: "center",
    rowGap: 10,
    flexDirection: "column",
  },
});
