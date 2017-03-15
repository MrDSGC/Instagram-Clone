class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(user_params[:username], user_params[:password])
    if @user
      login(@user)
      render 'api/users/show'
    else
      render json: ["Invalid Credentials"] , status: 404
    end
  end

  def destroy
    @user = User.find_by(id: params[:id])
    if @user
      logout!
      render json: { }
    else
      render json:  ["Not Logged In"] , status: 404
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :session_token)
  end

end
