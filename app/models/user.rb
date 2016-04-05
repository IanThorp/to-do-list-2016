class User < ActiveRecord::Base
  include BCrypt

  has_many :lists

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :user_name, presence: true
  validates :date_of_birth, presence: true

  def password
    @password ||= Password.new(password_hash)
  end

  def password=(new_password)
    @password = Password.create(new_password)
    self.password_hash = @password
  end

  def authenticate(password)
    self.password == password
  end
end
