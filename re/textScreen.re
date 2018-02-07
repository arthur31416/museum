open BsReactNative;

let component = ReasonReact.statelessComponent("textScreen");

let styles =
  StyleSheet.create(
    Style.(
      {
        "container":
          style([
            backgroundColor("palegreen"),
            justifyContent(Center),
            alignItems(Center)
          ])
      }
    )
  );

let make = (~text, _children) => {
  ...component,
  render: _self => <View style=Style.(style([]))> <Text value=text /> </View>
};