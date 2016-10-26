var React = require('react');
var Table = require('./table.jsx')
var Menu = require('./menu.jsx')

var Container = React.createClass({

  getInitialState: function() {
    return({selected: "home"})
  },

  handleClick: function(clicked) {
    this.setState({selected: clicked})
  },

  render: function() {
    return(
      <div className="container">
        <Menu handleClick={this.handleClick}></Menu>
        <Table url={this.props.url} tableSelect={this.state.selected}></Table>
      </div>
    )
  }
})

module.exports = Container;