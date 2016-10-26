class StocksController < ApplicationController

  def index
    stocks = Stock.all()
    render({ json: stocks.as_json({except: [:created_at, :updated_at], include: [:albums]})})
  end

end