import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }
  }

  onChange (e) {
    this.setState({
      term: e.target.value
    });
  }

  search() {
    this.props.onSearch(this.state.term);
  }

  render() {
    return (<div>
      <h4>Add more items!</h4>
      Enter an item searching: <input value={this.state.terms} onChange={this.onChange.bind(this)}/>       
      <button onClick={this.search.bind(this)}> Add items </button>
    </div>) 
  }
}

export default Search;