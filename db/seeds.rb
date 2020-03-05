# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Server.destroy_all
ServerKey.destroy_all
Subscriber.destroy_all

u1 = User.create!(username: 'Sionar', email: 'tonyyye@gmail.com', password: 'password')
u2 = User.create!(username: 'Guest', email: 'guest@dischordapp.com', password: 'password')

s1 = Server.create!(name: 'Dischord Main Server', owner_id:u1.id, private: false)
s2 = Server.create!(name: 'Cats!', owner_id:u1.id, private: false)

k1 = ServerKey.create!(server_id: s1.id)
k2 = ServerKey.create!(server_id: s2.id)

sub1 = Subscriber.create(user_id: u1.id, server_id: s1.id)
sub2 = Subscriber.create(user_id: u1.id, server_id: s2.id)
sub3 = Subscriber.create(user_id: u2.id, server_id: s1.id)
