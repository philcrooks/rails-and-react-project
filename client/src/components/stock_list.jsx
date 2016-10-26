var React = require ("react");

var StockList = React.createClass({

  getInitialState: function() {
    return({stocks: null});
  },

  componentDidMount: function(){
    this.getData();
  },

  getData: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url +"/stocks");
    request.onload = function(){
      var stocks = JSON.parse(request.responseText);
      this.setState({stocks: stocks})
    }.bind(this);
    request.send();
  },

  render: function(){
    var tableBody = "";
    if (this.state.stocks) {
      tableBody = this.state.stocks.map(function(stock, index) {
        return(
          <tr key={index}>
            <td>{stock.album.artist.genre}</td>
            <td>{stock.album.artist.name}</td>
            <td>{stock.album.name}</td>
            <td>{stock.format}</td>
            <td>{stock.stock_level}</td>
            <td>{stock.stock_theshold}</td>
            <td>{stock.buy_price}</td>
            <td>{stock.sell_price}</td>
          </tr>
        )
      })
    }

    console.log(tableBody);
    // var displayValue = (this.props.visible) ? "block" : "none";
    var displayValue = "block";
    var style = {display: displayValue}
    return (
      <div className = "StockList">
        <table>
          <tbody>
            {tableBody}
          </tbody>
        </table>
      </div>
    )
  }
})

module.exports = StockList;