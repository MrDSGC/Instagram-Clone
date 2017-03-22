class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)
    if @follow.save
      render :show
    else
      render :show
    end
  end

  def get_by_followed_id

    @follows = Follow.where(follower_id: current_user.id)
    @follow = @follows.find_by(followed_id: params[:followed_id])
    render :show
  end

  def destroy_by_followed_id
    @follows = Follow.where(follower_id: current_user.id)
    @follow = @follows.find_by(followed_id: params[:followed_id])
    @follow.destroy
    render :show
  end

  private

  def follow_params
    params.require(:follow).permit(:follower_id, :followed_id)
  end
end
