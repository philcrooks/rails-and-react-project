# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Stock.delete_all()
Album.delete_all()
Artist.delete_all()

beatles = Artist.create({name: "The Beatles", genre: "popular"})
jimi_hendrix = Artist.create({name: "Jimi Hendrix", genre: "rock"})

abbey_road = Album.create({name: "Abbey Road", artist: beatles})
electric_ladyland = Album.create({name: "Electric Ladyland", artist: jimi_hendrix})

ar_stock_1 = Stock.create({album: abbey_road, format: "LP", stock_level: 5, threshold: 2, buy_price: 7.50, sell_price: 24.00})
ar_stock_2 = Stock.create({album: abbey_road, format: "CD", stock_level: 10, threshold: 5, buy_price: 5.00, sell_price: 12.00})
el_stock_1 = Stock.create({album: electric_ladyland, format: "LP", stock_level: 5, threshold: 2, buy_price: 7.50, sell_price: 24.00})
el_stock_2 = Stock.create({album: electric_ladyland, format: "CD", stock_level: 10, threshold: 5, buy_price: 5.00, sell_price: 12.00})