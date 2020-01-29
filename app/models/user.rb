# frozen_string_literal: true

class User < ActiveRecord::Base
  extend Devise::Models


  serialize :liked_friends, Array

  def self.random_friend(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id Not In (?)", ids).order("Random()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Friend.where("id In (?)", ids)
  end

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User
end





