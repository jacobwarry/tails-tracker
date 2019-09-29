import React from 'react';
import axios from 'axios';
import Category from './components/Category';
import SelectedItemList from './components/SelectedItemList';

import './App.css';

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
      <main>
        <div className="tails">
          <div className="tails-options">
            <main>
              {this.state.categories.map((category, key) =>
                <Category {...category} key={key}/>
              )}            
            </main>      
          </div>
          <div className="tails-selections">
            <aside>
              <SelectedItemList />
            </aside>  
          </div>          
        </div> 
      </main>
    );
  }
}

export default App;