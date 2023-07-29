import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { SliderBox } from "react-native-image-slider-box";
import { COLORS } from "../../constants";

import slide1 from "../../assets/images/fn1.jpg";
import slide2 from "../../assets/images/fn2.jpg";
import slide3 from "../../assets/images/fn5.jpg";
import slide4 from "../../assets/images/fn4.jpg";

const Carousel = () => {
  const slides = [slide1, slide2, slide3, slide4];

  return (
    <View style={styles.carouselContainer}>
      <SliderBox
        images={slides}
        dotColor={COLORS.primary}
        inactiveDotColor={COLORS.secondary}
        ImageComponentStyle={{
          borderRadius: 15,
          width: "93%",
          marginTop: 15,
        }}
        autoplay
        circleLoop
      />
    </View>
  );
};

export default Carousel;

const styles = StyleSheet.create({
  carouselContainer: {
    flex: 1,
    alignItems: "center",
  },
});
