class Api::CommentsController < ApplicationController

  def index

    if params[:photo_id] == "undefined"
      @comments = current_user.feed_comments
    else
      @comments = Comment.where(photo_id: params[:photo_id])
    end
    render 'api/comments/index'
  end

  def create
    @comment = Comment.new(comment_params)
    if @comment.save
      if params[:photo_id] == "undefined"
        @comments = current_user.feed_comments
      else
        @comments = Comment.where(photo_id: params[:photo_id])
      end
      render 'api/comments/index'
    else
      render json: ["Comment can't be blank"] , status: 404
    end
  end

  def destroy
    @comment = Comment.find_by(id: params[:id])
    @comment.destroy
    if params[:photo_id] == "undefined"
      @comments = current_user.feed_comments
    else
      @comments = Comment.where(photo_id: params[:photo_id])
    end
    render 'api/comments/index'
  end

  private

  def comment_params
    params.require(:comment).permit(:comment_author_id, :body, :photo_id)
  end

end
