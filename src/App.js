import React, { Component } from 'react';
import Layout from './hoc/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
class App extends Component {
  render() {
    return (
      <div >
        <Layout>
          <BurgerBuilder />
        </Layout>
      </div>
      <div>Sample Text</div>
    );
  }
}

export default App;
