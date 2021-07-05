import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },

  iconButton:{
    color:"#fff",
    fontSize: 20,
    fontWeight: "bold"
  },

  buttonNewTask:{
    position: "absolute",
    width:60,
    height: 60,
    bottom: 30,
    left: 20,
    backgroundColor:"#f92e6a",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonLogout:{
    position: "absolute", 
    width:60,
    height: 60,
    bottom: 30,
    right: 20,
    justifyContent: "center",
    alignItems: "center"
  },

  iconButtonLogout:{
    color:"#fff",
    fontSize: 25,
    fontWeight:"bold"
  },

  tasks:{
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5
  },

  deleteTask:{
    justifyContent: "center",
    paddingLeft: 15
  },

  descriptionTask:{
    width: "75%",
    alignContent: "flex-start",
    backgroundColor: "#f5f5f5cf",
    padding: 12,
    paddingHorizontal: 20,
    borderRadius: 50,
    marginBottom: 5,
    marginRight: 15,
    color: "#282b2db5",
  }
 });

export default styles;