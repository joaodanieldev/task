import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 20
  },

  label: {
    width: "90%",
    marginTop: 20,
    fontSize: 16,
    marginLeft: 20,
    color: "#F92e6a"
    
  },
  
  input: {
    width: "90%",
    marginTop: 10,
    paddingTop: 10,
    height: 50,
    borderBottomWidth: 1,
    borderBottomColor: "#F92e6a",
    marginLeft: "auto",
    marginRight: "auto"
  },

  buttonEditTask: {
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

  iconButton: {
    color:"#fff",
    fontSize: 25,
    fontWeight: "bold"
  }
});

export default styles;