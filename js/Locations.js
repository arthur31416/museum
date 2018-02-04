import React, {PureComponent} from 'react';
import {View, Text} from 'react-native';
// import {graphql} from 'react-apollo';
// import gql from 'graphql-tag';

// const LocationLayout = gql`
//   query getLocation {
//     allLocations {
//       name
//       city
//     }
//   }
// `;

class Locations extends PureComponent {
  render() {
    return <Text>Yo temporary</Text>;

    // if (this.props.data.loading) {
    //   return <Text>Loading...</Text>;
    // }

    // if (this.props.data.error) {
    //   return <Text>{JSON.stringify(this.props.data.error)}</Text>;
    // }

    // // return (
    // //   <View
    // //     style={{
    //       backgroundColor: 'gold',
    //       justifyContent: 'center',
    //       alignItems: 'center',
    //     }}>
    //     {this.props.data.allLocations.map(loc => (
    //       <View key={loc.id}>
    //         <Text>
    //           {loc.name} - {loc.city}
    //         </Text>
    //       </View>
    //     ))}
    //   </View>
    // );
  }
}

// export default graphql(LocationLayout)(Locations);
export default Locations;
