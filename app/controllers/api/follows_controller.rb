class Api::FollowsController < ApplicationController

  def create
    @follow = Follow.new(follow_params)

    if @follow.save
      render :show
    else
      render :show
    end
  end

  def destroy
    @follow = @follow.find_by(id: params[:id])
    @follow.destroy
    render :show
  end

  private

  def follow_params
    require.(:follows).permit(:follower_id, :follwed_id)
  end
end
