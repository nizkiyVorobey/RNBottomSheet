/* eslint-disable prettier/prettier */
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Animated,
  StyleSheet,
  Text,
  Dimensions,
  PanResponder,
  ScrollView
} from 'react-native';

const screenHeight = Dimensions.get('window').height; // 844

export const BottomMenu = () => {
  // const [letPa]
  const pan = useRef(new Animated.ValueXY()).current;
  const testef = useRef(null)

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt, gestureState) => {
        const offset = pan.getLayout().top._offset
        const value = pan.getLayout().top._value
        let height = null;
        if (offset !== value) {
          height = offset + value
        } else {
          height = offset
        }


        if (height > (-screenHeight + 200)) { // lower
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        } else {
          pan.setOffset({
            x: pan.x._value,
            y: -screenHeight + 200
          });
        }
      },
      onPanResponderMove: (evt, gestureState) => {
        // console.log('moveY: ', gestureState.moveY);
        // console.log('dy: ', gestureState.dy);
        // console.log('pan.y: ', pan.y._value);

        const offset = pan.getLayout().top._offset
        const value = pan.getLayout().top._value
        let height = null;
        if (offset !== value) {
          height = offset + value
        } else {
          height = offset
        }
        console.log(
          'offset: ', offset,
          'value: ', value,
        );

        // dy with minus sign - direction up else direction
        // console.log(
        //   // 'gestureState: ', gestureState,
        //   'dy: ', gestureState.dy,
        //   'moveY: ', gestureState.moveY,
        //   'vy: ', gestureState.vy,
        //   'y0: ', gestureState.y0,
        //   // 'pageY: ', evt.nativeEvent.pageY
        // );

        // console.log(pan.y);

        // // console.log(offset + value);
        console.log('height: ', height);

        // console.log(
        //   'value: ', pan.getLayout().top._value,
        //   '_offset: ', pan.getLayout().top._offset,
        //   // 'sun: ', offset + value
        // );


        // pan.y.setValue(gestureState.dy)
        // Animated.event(
        //   [
        //     null,
        //     { dy: pan.y },
        //   ],
        //   { useNativeDriver: false }
        // )

        console.log('-screenHeight + 200): ', -screenHeight + 200);
        


        if (height > 0 && gestureState.dy > 0) { // lower
          console.log(1);
          // pan.y.setValue(0)
          // pan.y.setOffset(0)
          // return false

        } else if (height < (-screenHeight + 200) && gestureState.dy < 0) {
          console.log(2);
          // pan.y.setValue(gestureState.dy)
          // return false
          // pan.y.setValue(800)
        } else {
          console.log(3);
          pan.y.setValue(gestureState.dy)
        }


      },
      onPanResponderTerminate: (evt, gestureState) => {
        // Another component has become the responder, so this gesture
        // should be cancelled
        console.log('two');

      },
      onPanResponderRelease: (evt, gestureState) => {
        pan.flattenOffset();
        const offset = pan.getLayout().top._offset
        const value = pan.getLayout().top._value
        let height = null;
        if (offset !== value) {
          height = offset + value
        } else {
          height = offset
        }

        if (height > 0 && gestureState.dy > 0) { // lower
          Animated.timing(pan, {
            toValue: 0,
            useNativeDriver: false
          }).start();
          console.log('1 end');
        } else if (height > (-screenHeight + 200) / 2) {
          Animated.timing(pan, {
            toValue: 0,
            useNativeDriver: false
          }).start();
          console.log('2 end');
        } 


        if (height > (-screenHeight + 200)) { // lower
          Animated.timing(pan, {
            toValue: (-screenHeight + 200),
            useNativeDriver: false,
            duration: 500
          }).start();
        } 

        // if (height > 0) { // lower
        //   console.log('end 1');
        //   // pan.flattenOffset();
        //   return false
        //   // pan.y.setValue(100)
        // } else if (height < (-screenHeight - 100)) {
        //   console.log('end 2');
        //   // pan.flattenOffset();
        //   return false
        //   // pan.y.setValue(800)
        // } else {
        //   console.log('end 3');
        //   // pan.flattenOffset();
        // }

        

        // if (height > 100) {
        //   Animated.timing(pan, {
        //     toValue: ,
        //     useNativeDriver: false,
        //     duration: 50,
        //   }).start();
        // }

        // if (height > 600) {
        //   Animated.spring(pan, {
        //     toValue: 0,
        //     useNativeDriver: false
        //   }).start();
        // }

        // if (height < 600 && height > 100) {
        //   Animated.spring(pan, {
        //     toValue: -724,
        //     useNativeDriver: false
        //   }).start();
        // }
      }
    })
  ).current;

  const panResponderSrolled = useRef(
    PanResponder.create({
      // onMoveShouldSetPanResponder: () => true,
      // onPanResponderGrant: (evt, gestureState) => {
      //   console.log(evt);
      //   // evt.stopPropagation(true)
      //   evt.isDefaultPrevented()

      //   console.log(evt.isPropagationStopped());



      // },
      // onPanResponderMove: (evt, gestureState) => {


      // },
      // onPanResponderRelease: (evt, gestureState) => {
      // }
    })
  ).current;


  return (
    <Animated.View
      ref={testef}
      style={[styles.bottomMenuWrapper, {
        transform: [{ translateY: pan.y }]
      }]}
      {...panResponder.panHandlers}
    >
      {/* <Animated.View style={styles.bottomMenu}
        {...panResponderSrolled.panHandlers}
      > */}
        {/* <ScrollView style={{ flex: 1, width: '100%' }}> */}
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
          <Text style={styles.defaultText}>MENU</Text>
        {/* </ScrollView> */}
      {/* </Animated.View> */}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  bottomMenuWrapper: {
    backgroundColor: 'lightblue',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    padding: 20,
    height: Dimensions.get('window').height - 50,
    bottom: -(Dimensions.get('window').height - 100),
    // top: 0,
    width: '100%',
    position: 'absolute',
    alignSelf: 'center',
    alignItems: 'center',
  },

  bottomMenu: {
    flex: 1,
    backgroundColor: 'purple',
    width: '100%'
  },

  defaultText: {
    padding: 20,
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    width: '100%',
  }
});
