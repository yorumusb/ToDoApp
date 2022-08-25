import { StyleSheet } from "react-native";

export const appStyles = StyleSheet.create({
    container:{
        flex:1,
        margin:20,
         
    },
    title:{
        fontSize:30,
        marginTop:10,
        textAlign:"center",
        
    },
    subtitle:{
        fontSize:20,
        marginTop:4,
        color:"#666",
        textAlign:"center",
    },
    input:{
        paddingVertical:12, 
        paddingHorizontal:16,
        borderWidth: 2,
        borderRadius:12,
        borderColor:"black",
        fontSize:20,
        marginTop:10,
    },
    buttonContainer:{
        backgroundColor:"lightgreen",
        alignItems:"center",
        marginTop:10,
        borderRadius:12,
        padding:10,
        borderWidth:1,
        borderColor:"black",
    },
    buttonText:{
        fontSize:18,
    },
    divider:{
        height:1,
        backgroundColor:"#ddd",
        marginVertical:32,
    },
    taskContainer:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:10,
        borderBottomWidth:1,
        borderColor:"gray",
        padding:8,
    },
    taskText:{
        fontSize:18,
    },
    taskDelete:{

    },
    taskDeleteText:{
        color:"red",
        fontSize:22,
    },
    
});
