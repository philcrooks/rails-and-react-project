var React = require('react');
var Table = require('./table.jsx')

var Container = React.createClass({

  render: function() {
    var whichTable = "stock";
    return(
      <div className="container">
        <Table url={this.props.url} tableSelect={whichTable}></Table>
      </div>
    )
  }
})

module.exports = Container;