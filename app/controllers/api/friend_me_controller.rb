class Api::FriendMeController < ApplicationController

  def my_friends
    render json: User.liked(current_user.liked_friends)
  end
end
