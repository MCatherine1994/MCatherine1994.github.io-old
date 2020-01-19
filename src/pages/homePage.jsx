import React, { Component } from 'react';
import { StyleSheet, View} from 'react-native';

const styles = StyleSheet.create({
  RectangleShapeView: {
    marginTop: 20,
    width: 120 * 2,
    height: 120,
    borderColor: '#c5d5cb'
  }
});

/**
* A HomePage component
*/
class HomePage extends Component {
  /**
  * Initialize the React element
  * @param {props} props React element properties
  */
  constructor(props) {
    super(props);
  }

  /**
  * Renders a website component
  * @returns {JSX} returns React element
  */
  render() {
    return (
      <div id="one" className="home">
        <h2>H I T H I S I S</h2>
        <h4>DA MENG</h4>
        {/* <img class="img-model" src="img\selfi3-2.png" alt="Selfi">			 */}
        <View className="home-container" style={styles.RectangleShapeView}>
          Test Container
        </View>
      </div>
    );
  }
}
export default HomePage;