import { StyleSheet } from "react-native";

 const styles = StyleSheet.create(
  {
    container:{
      flex:1,
      backgroundColor:"#fff",
    },
    label:{
      width:"90%",
      marginTop:20,
      marginLeft:20,
      fontSize:16,
      color:"rgb(98, 0, 238)",
    },
    inputText:{
      width:"90%",
      marginTop:10,
      marginLeft:"auto",
      marginRight:"auto",
      padding:10,
      height:50,
      borderBottomWidth:1,
      borderBottomColor:"rgb(98, 0, 238)",
    },
    buttonNewTask:{
      position:"absolute",
      height:60,
      width:100,
      bottom:30,
      left:100,
      backgroundColor:"rgb(98, 0, 238)",
      borderRadius:9,
      justifyContent:"center",
      alignItems:"center",
    },
    iconButton:{
      fontSize:16,
      color:"#fff",
      fontWeight:"bold"
    }


  }
  );
  export default styles;

