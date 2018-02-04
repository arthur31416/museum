open BsReactNative;

let component = ReasonReact.statelessComponent("Location");

let getLabel = (name, city) => name ++ " - " ++ city;

let make = (~city, ~name, _children) => {
  ...component,
  render: (_self) => <View
    style=Style.(style([
      backgroundColor("white"),
      flexDirection(Row),
      borderBottomWidth(1.),
      borderColor("#eee")
    ]))
  >
    <Text
      style=Style.(style([
        flex(1.0),
        paddingTop(Pt(15.)),
        paddingBottom(Pt(15.)),
        paddingLeft(Pt(15.)),
        paddingRight(Pt(15.)),
        alignItems(Center)
      ]))
      value={getLabel(name, city)}
    />
  </View>
};