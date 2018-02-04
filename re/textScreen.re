open BsReactNative;

let textScreen = (text) =>
  <View style=Style.(style([backgroundColor("palegreen"), justifyContent(Center), alignItems(Center)]))>
     <Text value=text />
  </View>;