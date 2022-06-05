import { StyleSheet } from "react-native";
const styles=  StyleSheet.create({
formContext:{
  flex:1,
  bottom:0,
  borderTopLeftRadius:30,
  backgroundColor:"#ffffff",
  borderBottomRightRadius:30,
  alignItems:"center",

  paddingTop:15,

},
form:{
  marginTop:30,
  width:"100%",
  height:"100%",
},
formLabel:{
  fontSize:18,
  paddingLeft:20,
  color:"#000000",
},
input:{
  width:"90%",
  borderRadius:50,
  backgroundColor:"f6f6f6",
  height:40,
  margin:12,
  paddingLeft:10,
},
Textbutton:{
  fontSize:20,
  color:"#ffffff",

},
erroMsg:{
fontSize:12,
color:"red",
fontWeight:"bold",
paddingLeft:20
},
button:{
  borderRadius:50,
  alignItems:"center",
  justifyContent:"center",
  width:"90%",
  backgroundColor:"#345100",
  paddingTop:14,
  paddingBottom:10,
  marginLeft:3,
  marginTop:30,

}
})


export default styles;
