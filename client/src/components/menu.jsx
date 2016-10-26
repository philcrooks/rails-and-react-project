var React = require('react');

var Menu = function(props) {

  var clickHome = function() {
    props.handleClick("home");
  }

  var clickCurrentStock = function() {
    props.handleClick("currentStock");
  }

  var clickNewStock = function() {
    props.handleClick("newStock")
  }

  var clickStockReport = function() {
    rops.handleClick("stockReport")
  }
  
  return (
    <div id="menu" class="menu">
      <div class="sitename"><i><b>Harvey's Records</b></i></div>
       <ul class="menu-items">
        <li onClick={clickHome}>Home</li>
        <li onClick={clickCurrentStock}>Current Stock</li>
        <li onClick={clickNewStock}>New Stock</li>
        <li onClick={clickStockReport}>Stock Report</li>
      </ul>
    </div>
  )
}

module.exports=Menu;