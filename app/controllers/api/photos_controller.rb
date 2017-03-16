class Api::PhotosController < ApplicationController

  def index
    poster = User.find_by(username: params[:username])
    @photos = Photo.where(poster_id: poster.id)
    render 'api/photos/index'
  end

  def show
    @photo = Photo.find_by(id: params[:id])
    render 'api/photos/show'
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.poster_id = current_user.id

    if @photo.save
      render 'api/photo/index'
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def destroy
    @photo = Photo.find_by(id: params[:id])
    if @photo
      @photo.destroy
      render json: { }
    else
      render json:  ["Does not exist"] , status: 404
    end
  end


  private

  def photos_param
    params.require(:photo).permit(:img_url)
  end
end
