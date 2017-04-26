class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def index
    @users = User.all.order('random()').sample(3)
    render `api/users/index`
  end

  def find_by_username
    @user = User.find_by(username: params[:username])

    if @user
      render 'api/users/show'
    else
      render json:  ["Does not exist"] , status: 404
    end
  end

  def update
    @user = current_user
    if @user.update(user_params)
      render 'api/users/show'
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :biography, :profile_pic_url)
  end

end
