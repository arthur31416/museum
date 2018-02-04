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

let getLabel = (name, city) => name ++ " - " ++ city;
let renderLocation = location => <Text value={getLabel(location##name, location##city)} />;

let locationQuery = LocationQuery.make();
let component = <Query query=locationQuery>
    ...((response, parse) => {
    switch response {
      | Loading => <Text value="Loading..." />
      | Failed(error) => <Text value=error />
      | Loaded(result) => {
        let locations = parse(result)##allLocations;
        ReasonReact.arrayToElement(Array.map(renderLocation, locations));
      }
  }})
</Query>