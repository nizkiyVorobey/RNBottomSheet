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


        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
        // if (height > (-screenHeight + 200)) { // lower
        //   pan.setOffset({
        //     x: pan.x._value,
        //     y: pan.y._value
        //   });
        // } else {
        //   pan.setOffset({
        //     x: pan.x._value,
        //     y: -screenHeight + 200
        //   });
        // }
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
        // console.log(
        //   'offset: ', offset,
        //   'value: ', value,
        // );

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
        // console.log('height: ', height);

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

        // console.log('-screenHeight + 200): ', -screenHeight + 200);


        if (gestureState.dy + pan.getLayout().top._offset > (-screenHeight + 200) || ((gestureState.dy === height) && gestureState.dy > 0)) {
          console.log(
            'height: ', height,
            'gestureState.dy: ', gestureState.dy,
          );
          pan.y.setValue(gestureState.dy)

        }


        // if (height > 0 && gestureState.dy > 0) { // lower
        //   console.log(1);
        //   // pan.y.setValue(0)
        //   // pan.y.setOffset(0)
        //   // return false

        // } else if (height < (-screenHeight + 200) && gestureState.dy < 0) {
        //   console.log(2);
        //   // pan.y.setValue(gestureState.dy)
        //   // return false
        //   // pan.y.setValue(800)
        // } else {
        //   console.log(3);
        //   pan.y.setValue(gestureState.dy)
        // }


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

        console.log(
          'height: ', height,
          'gestureState.dy: ', gestureState.dy,
        );


        if (height > (-screenHeight + 200)) {
          if (height > 0 && gestureState.dy > 0) { // lower
            Animated.timing(pan, {
              toValue: 0,
              useNativeDriver: false,
              duration: 100
            }).start();
            console.log('1 end');
          } else if (height > (-screenHeight + 200) / 2) {
            Animated.timing(pan, {
              toValue: 0,
              useNativeDriver: false,
              duration: 100
            }).start();
            console.log('2 end');
          } else {
            Animated.timing(pan, {
              toValue: (-screenHeight + 200),
              useNativeDriver: false,
              duration: 300
            }).start();
          }
        } else {
          pan.y.setOffset(0)
          pan.y.setValue(-screenHeight + 200)
        }

      }
    })
  ).current;

  const panResponderSrolled = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (evt, gestureState) => {
        evt.stopPropagation(true)
        // evt.isDefaultPrevented()
      },
      onPanResponderTerminationRequest: () => false,
      onStartShouldSetPanResponderCapture: () => false,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
        false,
      onPanResponderGrant: (evt, gestureState) => false,
      onPanResponderRelease: (evt, gestureState) => {
        // evt.stopPropagation(true)
        // evt.isDefaultPrevented()
      }
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
      <ScrollView style={{ width: '100%', backgroundColor: 'red', height: 100 }} {...panResponderSrolled.panHandlers}>
        <Text style={styles.defaultText}>1</Text>
        <Text style={styles.defaultText}>2</Text>
        <Text style={styles.defaultText}>3</Text>
        <Text style={styles.defaultText}>4</Text>
        <Text style={styles.defaultText}>5</Text>
        <Text style={styles.defaultText}>6</Text>
        <Text style={styles.defaultText}>7</Text>
        <Text style={styles.defaultText}>8</Text>
        <Text style={styles.defaultText}>9</Text>
        <Text style={styles.defaultText}>10</Text>
        <Text style={styles.defaultText}>11</Text>
        <Text style={styles.defaultText}>12</Text>
        <Text style={styles.defaultText}>13</Text>
        <Text style={styles.defaultText}>14</Text>
        <Text style={styles.defaultText}>15</Text>
        <Text style={styles.defaultText}>16</Text>
        <Text style={styles.defaultText}>17</Text>
        <Text style={styles.defaultText}>18</Text>
        <Text style={styles.defaultText}>19</Text>
        <Text style={styles.defaultText}>20</Text>
        <Text style={styles.defaultText}>21</Text>
        <Text style={styles.defaultText}>22</Text>
      </ScrollView>
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
    bottom: -(Dimensions.get('window').height - 200),
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





// /* eslint-disable prettier/prettier */
// import React, { useEffect, useRef, useState } from 'react';
// import {
//   View,
//   Animated,
//   StyleSheet,
//   Text,
//   Dimensions,
//   PanResponder,
//   ScrollView
// } from 'react-native';

// const screenHeight = Dimensions.get('window').height; // 844

// export const BottomMenu = () => {
//   // const [letPa]
//   const pan = useRef(new Animated.ValueXY()).current;
//   const testef = useRef(null)

//   const panResponder = useRef(
//     PanResponder.create({
//       onMoveShouldSetPanResponder: () => true,
//       onPanResponderGrant: (evt) => {
//         // console.log('evt2: ', evt.isPropagationStopped());

//         // console.log('pan.x: ', pan.x);
//         pan.setOffset({
//           x: pan.x._value,
//           y: pan.y._value
//         });
//       },
//       onPanResponderMove: (evt, gestureState) => {
//         // console.log('moveY: ', gestureState.moveY);
//         // console.log('dy: ', gestureState.dy);
//         // console.log('pan.y: ', pan.y._value);

//         const offset = pan.getLayout().top._offset
//         const value = pan.getLayout().top._value
//         let height = null;
//         if (offset !== value) {
//           height = offset + value
//         } else {
//           height = offset
//         }
//         console.log(
//           'offset: ', offset,
//           'value: ', value,
//         );

//         // dy with minus sign - direction up else direction
//         // console.log(
//         //   // 'gestureState: ', gestureState,
//         //   'dy: ', gestureState.dy,
//         //   'moveY: ', gestureState.moveY,
//         //   'vy: ', gestureState.vy,
//         //   'y0: ', gestureState.y0,
//         //   // 'pageY: ', evt.nativeEvent.pageY
//         // );

//         // console.log(pan.y);

//         // // console.log(offset + value);
//         console.log('height: ', height);

//         // console.log(
//         //   'value: ', pan.getLayout().top._value,
//         //   '_offset: ', pan.getLayout().top._offset,
//         //   // 'sun: ', offset + value
//         // );


//         // pan.y.setValue(gestureState.dy)
//         // Animated.event(
//         //   [
//         //     null,
//         //     { dy: pan.y },
//         //   ],
//         //   { useNativeDriver: false }
//         // )


//         if (height > 0 && gestureState.dy > 0) { // lower
//           console.log(1);
//           // pan.y.setValue(0)
//           // pan.y.setOffset(0)
//           // return false

//         } else if (height < (-screenHeight + 200) && gestureState.dy < 0) {
//           console.log(2);
//           // pan.y.setValue(gestureState.dy)
//           // return false
//           // pan.y.setValue(800)
//         } else {
//           console.log(3);
//           pan.y.setValue(gestureState.dy)
//         }


//       },
//       onPanResponderTerminate: (evt, gestureState) => {
//         // Another component has become the responder, so this gesture
//         // should be cancelled
//         console.log('two');

//       },
//       onPanResponderRelease: (evt, gestureState) => {
//         pan.flattenOffset();
//         const offset = pan.getLayout().top._offset
//         const value = pan.getLayout().top._value
//         let height = null;
//         if (offset !== value) {
//           height = offset + value
//         } else {
//           height = offset
//         }

//         if (height > 0 && gestureState.dy > 0) { // lower
//           Animated.spring(pan, {
//             toValue: 0,
//             useNativeDriver: false
//           }).start();

//         } else if (height > (-screenHeight + 200) / 2) {
//           Animated.spring(pan, {
//             toValue: 0,
//             useNativeDriver: false
//           }).start();
//         } else {
//           Animated.timing(pan, {
//             toValue: (-screenHeight + 200),
//             useNativeDriver: false
//           }).start();
//         }


//         // if (height > 0) { // lower
//         //   console.log('end 1');
//         //   // pan.flattenOffset();
//         //   return false
//         //   // pan.y.setValue(100)
//         // } else if (height < (-screenHeight - 100)) {
//         //   console.log('end 2');
//         //   // pan.flattenOffset();
//         //   return false
//         //   // pan.y.setValue(800)
//         // } else {
//         //   console.log('end 3');
//         //   // pan.flattenOffset();
//         // }



//         // if (height > 100) {
//         //   Animated.timing(pan, {
//         //     toValue: ,
//         //     useNativeDriver: false,
//         //     duration: 50,
//         //   }).start();
//         // }

//         // if (height > 600) {
//         //   Animated.spring(pan, {
//         //     toValue: 0,
//         //     useNativeDriver: false
//         //   }).start();
//         // }

//         // if (height < 600 && height > 100) {
//         //   Animated.spring(pan, {
//         //     toValue: -724,
//         //     useNativeDriver: false
//         //   }).start();
//         // }
//       }
//     })
//   ).current;

//   const panResponderSrolled = useRef(
//     PanResponder.create({
//       // onMoveShouldSetPanResponder: () => true,
//       // onPanResponderGrant: (evt, gestureState) => {
//       //   console.log(evt);
//       //   // evt.stopPropagation(true)
//       //   evt.isDefaultPrevented()

//       //   console.log(evt.isPropagationStopped());



//       // },
//       // onPanResponderMove: (evt, gestureState) => {


//       // },
//       // onPanResponderRelease: (evt, gestureState) => {
//       // }
//     })
//   ).current;


//   return (
//     <Animated.View
//       ref={testef}
//       style={[styles.bottomMenuWrapper, {
//         transform: [{ translateY: pan.y }]
//       }]}
//       {...panResponder.panHandlers}
//     >
//       {/* <Animated.View style={styles.bottomMenu}
//         {...panResponderSrolled.panHandlers}
//       > */}
//         {/* <ScrollView style={{ flex: 1, width: '100%' }}> */}
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//           <Text style={styles.defaultText}>MENU</Text>
//         {/* </ScrollView> */}
//       {/* </Animated.View> */}
//     </Animated.View>
//   );
// };

// const styles = StyleSheet.create({
//   bottomMenuWrapper: {
//     backgroundColor: 'lightblue',
//     borderTopLeftRadius: 50,
//     borderTopRightRadius: 50,
//     padding: 20,
//     height: Dimensions.get('window').height - 50,
//     bottom: -(Dimensions.get('window').height - 100),
//     // top: 0,
//     width: '100%',
//     position: 'absolute',
//     alignSelf: 'center',
//     alignItems: 'center',
//   },

//   bottomMenu: {
//     flex: 1,
//     backgroundColor: 'purple',
//     width: '100%'
//   },

//   defaultText: {
//     padding: 20,
//     borderStyle: 'solid',
//     borderWidth: 2,
//     borderColor: 'black',
//     width: '100%',
//   }
// });
