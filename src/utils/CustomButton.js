import React from 'react'
import
 { Pressable,
   StyleSheet,
   Text
 }
 from 'react-native';

const MashButton = (props) => {
  return (
    <Pressable
        onPress={props.onPressFunction}
        hitSlop = {{top : 10 , bottom : 10 , right : 10 , left : 10}}
        android_ripple = {{color : '#00f'}}
        style={({ pressed }) => [
          { backgroundColor: pressed ? "#ff8f" : props.color },
          styles.button,
          {...props.style}
        ]}
      >
        <Text
        style = {styles.text}
        > {props.title}</Text>
      </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    // this backgroundColor was commented because we apply styles directly in pressable button. because refer presable button above
    // backgroundColor : "#00ff0f",
    width: 100,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontSize: 15,
    margin: 10,
    // textTransform : 'uppercase'
  },
})

export default MashButton;
