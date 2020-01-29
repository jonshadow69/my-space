class Api::FriendsController < ApplicationController
  before_action :set_friend, only: [ :destroy ]
  before_action :authenticate_user!

  def index
    render json: User.random_friend(current_user.liked_friends)
  end

  def destroy
    render json: @friend.destroy
  end

  def create
    @friend = Friend.new(friend_params)
    if friend.save
      render json: @friend
    else
      render json: {}
    end
  end

  def update
    current_user.liked_friends << params[:id].to_i
    current_user.save
  end

  def my_friends
    render json: User.liked(current_user.liked_friends)
  end

  def set_friend
    @friend = Friend.find(params[:id]);
  end

end
