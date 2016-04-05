20.times do
  User.create(user_name: Faker::Superhero.name, password: "123")
end
