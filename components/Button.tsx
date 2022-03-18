import React, { Component } from "react";
import {
  Text,
  Image,
  TouchableOpacity,
  ImageSourcePropType,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { Fonts, Colors } from "../Themes";
import AppConfig from "../Config/AppConfig";

interface ButtonProps{
  text: string;
  onPress: ()=>void;
  disabled: boolean;
  backgroundColor: string;
  textColor: string;
  disabledColor: string;
  prefixIcon:ImageSourcePropType;

}


export default function Button({ text,
  onPress,
  disabled,
  backgroundColor,
  textColor,
  disabledColor,
  prefixIcon,}:ButtonProps) {
  return (
    <TouchableOpacity
    disabled={disabled}
    style={[
      styles.container,
      { backgroundColor: disabled ? 'grey': backgroundColor },
      disabled && { opacity: 0.25 },
    ]}
    onPress={onPress}
  >
    {prefixIcon && (
      <Image
        style={[styles.icon, { tintColor: textColor }]}
        source={prefixIcon}
      />
    )}
    <Text style={[styles.txt, { color: textColor ?? Colors.white }]}>
      {text}
    </Text>
  </TouchableOpacity>
  )
}




const styles = ScaledSheet.create({
  container: {
    height: "44@vs",
    backgroundColor: "#7FFFD4",
    borderRadius: "22@vs",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  txt: {
    color: "rgb(24,24,101)",
    fontSize: AppConfig.fontSize,
    fontFamily: Fonts.semibold,
  },
  icon: {
    width: "20@s",
    height: "20@s",
    marginRight: "5@s",
  },
});
