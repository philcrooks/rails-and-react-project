var React = require('react');
var StockList = require('./stock_list.jsx')

var Table = React.createClass({
  render: function() {
    return(
      <div className="table">
        <StockList url={this.props.url}visible={this.props.tableSelect === "stock"}></StockList>
      </div>
    )
  }
})

module.exports = Table;