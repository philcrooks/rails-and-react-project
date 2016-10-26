class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.references :album, index: true, foreign_key: true
      t.string :format
      t.integer :stock_level
      t.integer :threshold
      t.decimal :buy_price
      t.decimal :sell_price

      t.timestamps null: false
    end
  end
end
