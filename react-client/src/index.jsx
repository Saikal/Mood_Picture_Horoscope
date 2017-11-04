import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Search from './components/Search.jsx';
import css from './components/styles.css';
import List from './components/List.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    // debugger;
    this.state = { 
      items: []
    }
  }

  search (term) {
    console.log(`${term} was searched`);
    $.ajax({
      url: '/items/import',
      type: 'POST', 
      data: {mySign: term},

      success: (data) => {
        console.log("MY CLIENT MAKING A TEST post REQUEST", data);
        console.log("***this.state.items : ", this.state.items);

        this.setState({
          items: data
        })
        console.log("***this.state.items : ", this.state.items);

      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  render () {
    return (<div>
      <h1>ARE YOU HAVING A GOOD DAY?</h1>
      <Search onSearch={this.search.bind(this)}/>
      <List items={this.state.items}/>

    </div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));



