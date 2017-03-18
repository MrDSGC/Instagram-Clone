class Api::LikesController < ApplicationController

  def index
    @likes = Like.find_by(photo_id: params[:photo_id])
  end

  def create
    @like = Like.new(like_params)
    if @like.save
      render {`api/likes/show`}
    else
      render{'api/likes/show'}
    end
  end

  def destroy_by_photo_id
    @like = Like.find_by(liker_id: like_params[:liker_id]).where(photo_id: like_params[:photo_id])
    @like.destroy
    render{`api/likes/show`}
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :photo_id)
  end
end
