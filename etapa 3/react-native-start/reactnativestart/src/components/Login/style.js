import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#fff",
  },
  login:{
    textAlign:"center",
    width:"90%",
    marginTop:20,
    marginLeft:"auto",
    marginRight:"auto",
    fontSize:26,
    color:"rgb(98, 0, 238)",
  },
  TextInput: {
    backgroundColor: '#d3d3d3',
    width:"50%",
      marginTop:10,
      marginLeft:"auto",
      marginRight:"auto",
      padding:10,
      height:50,
      borderBottomWidth:1,
      borderBottomColor:"rgb(98, 0, 238)",
  },
  button: {
    marginBottom: 0,
    backgroundColor: '#6974CF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 50,
    elevation: 10,
    marginLeft:"auto",
    marginRight:"auto",
    marginTop: 40,
    width:"40%",
  },
  header: {
    alignSelf: 'center',
    marginTop: 30,
    marginBottom: 12,
  },
  textbutton: {
    fontSize: 15,
    lineHeight: 10,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: '#fff',
    alignSelf: 'center',
  },
  alert:{
    textAlign:"center",
    width:"90%",
    marginTop:10,
    marginLeft:"auto",
    marginRight:"auto",
    fontSize:15,
    color:"#FF0000",
  }

});

export default styles;
