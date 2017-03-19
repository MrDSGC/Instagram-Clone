class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    if @like.save
      render {`api/likes/show`}
    else
      render{'api/likes/show'}
    end
  end

  def destroy_by_photo_id
    @likes = Like.where(photo_id: like_params[:photo_id])
    @like = @likes.find_by(liker_id: like_params[:liker_id])
    @like.destroy
    render{`api/likes/show`}
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :photo_id)
  end
end
