import React from 'react';
import axios from 'axios';
import Category from './components/Category';
import './App.css';
import SelectedItemList from './components/SelectedItemList';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    };
  }

  componentDidMount() {
    axios.get('./data.json')
      .then((res) => {
        this.setState({
          categories: res.data
        })
      });
  }

  render() {
    return (
      <div className="tails">
        <div className="tails-grid">
          <div className="tails-col-2">
            {this.state.categories.map((category, key) =>
              <Category {...category} key={key}/>
            )}      
          </div>
          <div className="tails-col-1">
              <SelectedItemList />
          </div>
        </div> 
      </div>
    );
  }

}

export default App;