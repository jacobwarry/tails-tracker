import React from 'react';
import axios from 'axios';
import Category from './components/Category';
import SelectedItemList from './components/SelectedItemList';

import './App.css';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      categories: []
    };
    this.formatCatgories = this.formatCatgories.bind(this);
  }

  formatCatgories(data) {
    let categories = []
    const categoryNames = data.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    categoryNames.forEach(categoryName => {
      const category = {
        'name': categoryName,
        'items': data.filter(item => item.category === categoryName)
      };
      categories.push(category);
    });
    return categories;
  }

  componentDidMount() {
    axios.get(`${process.env.PUBLIC_URL}/json/data.json`)
      .then((res) => {
        const categories = this.formatCatgories(res.data);
        this.setState({
          items: res.data,
          categories: categories
        })
      })
      .catch((err) => {

        console.error(err)
      });
  }

  render() {
    return (
      <main>
        <div className="tails">
          <div className="tails-options">
            <main>
              {this.state.categories.length 
                ? this.state.categories.map((category, key) =>
                    <Category {...category} key={key}/>
                  )
                : <span>Loading data...</span>
              }            
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