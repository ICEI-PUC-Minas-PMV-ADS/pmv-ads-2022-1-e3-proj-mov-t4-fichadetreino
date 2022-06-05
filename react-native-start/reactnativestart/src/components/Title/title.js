import React from "react";
import {View,Text } from "react-native";
import styles from "./style";
//desestruturacao em OBJETOS {{}} {STYLE{FONT}}
const Title =()=>{
return(
<View style={styles.boxTitle}>
<Text style={styles.textTile} > Hello World | @Wave.bat8888 </Text>
</View>
);

};

export default Title;
