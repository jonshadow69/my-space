200.times do
  name = Faker::Name.name 
  amigo = Faker::Nation.nationality 
  registry = Faker::Gender.binary_type
  avatar = Faker::Avatar.image(name, '100x400', 'png', 'set5')
  Friend.create(name: name, amigo: amigo, registry: registry, avatar: avatar)
end

puts "200 friends Seeded"




