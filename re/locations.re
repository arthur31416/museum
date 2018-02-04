open BsReactNative;

module LocationQuery = [%graphql {|
  query getLocations {
      allLocations {
          city
          name
      }
  }
|}];

    
module Query = Client.Instance.Query;

let component = ReasonReact.statelessComponent("Locations");

let make = ((), _children) => {
  ...component,
  render: (_self) => {
    let locationQuery = LocationQuery.make();

    <Query query=locationQuery>
      ...((response, parse) => {
      switch response {
        | Loading => <Text value="Loading..." />
        | Failed(error) => <Text value=error />
        | Loaded(result) => {
          let allLocations = parse(result)##allLocations;
          Array.map(
            location => <Location city=location##city name=location##name />,
            allLocations
          )
          |> ReasonReact.arrayToElement;
        }
    }})
  </Query>
  }
};