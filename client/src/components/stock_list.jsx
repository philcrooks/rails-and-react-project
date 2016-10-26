var React = require ("react");

var StockList = React.createClass({

  componentDidMount: function(){
    this.getData();
  },

  getData: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url +"/stocks");
    request.onload = function(){
      var stocks = JSON.parse(request.responseText);
      console.log(stocks)
    }
    request.send();
  },

  render: function(){
    var displayValue = (this.props.visible) ? "block" : "none";
    var style = {display: displayValue}
    return (
      <div className = "StockList" style={style}>
      </div>
    )
  }
})

module.exports = StockList;