import {StyleSheet} from "react-native";

const styles = StyleSheet.create(
  {
  container:{
    flex:1,
    backgroundColor:"#ffff",
    paddingTop:20,
    alignItems:"center",
    justifyContent:"center"
          },
  iconButton:
  {
    color:"#ffff",
    fontSize:29,
  },
  buttonNewTask:{
    position:"absolute",
    height:60,
    width:60,
    bottom:30,
    left:20,
    backgroundColor:"rgb(98, 0, 238)",
    borderRadius:50,
    justifyContent:"center",
    alignItems:"center",
  },
  Tasks:{
    width:"100%",
    flexDirection:"column",
    justifyContent:"space-between"
  },
  deleteTask:{
    justifyContent:"center",
    paddingLeft:15,

  },
  description:{
  width:"100%",
  alignContent:"flex-start",
  backgroundColor:"#AB82FF",
  padding:12,
  paddingHorizontal:20,
  fontSize:18,
  borderRadius:5,
  marginBottom:5,
  marginRight:15,
  color:"#ffffff"
  },
  check:{
    width:"100%",
    alignContent:"flex-start",
    padding:10,
    paddingHorizontal:20,
    fontSize:18,
    borderRadius:5,
    marginBottom:5,
    marginRight:15,
    color:"#008B45"
    },
    menuprincipal:{
      width:"90%",
      marginTop:10,
      marginLeft:"auto",
      marginRight:"auto",
      padding:10,
      height:50,
      textAlign:"center",
      backgroundColor:"rgb(98, 0, 225)",
      borderBottomWidth:1,
      borderBottomColor:"rgb(98, 0, 238)",
    },
    menuPrincipalText:{
      fontWeight:"800",
      fontSize:28,
      color:"#ffffff"
      },

  }
)
export default styles;
