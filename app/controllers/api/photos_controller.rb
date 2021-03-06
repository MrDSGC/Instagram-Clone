class Api::PhotosController < ApplicationController

  def index
    if params[:username]
      poster = User.find_by(username: params[:username])
      @photos = Photo.where(poster_id: poster.id).includes(:likes).includes(:comments)
    else
      @photos = current_user.feed_photos
      if @photos.empty?
        @photos = Photo.all.sample(10)
      end
    end
    if @photos
      render 'api/photos/index'
    end
  end


  def show
    @photo = Photo.find_by(id: params[:id])

    if @photo.likers.include?(current_user)
      @photo[:current_user_liked] = true
    else
      @photo[:current_user_liked] = false
    end

    render 'api/photos/show'
  end

  def create
    @photo = Photo.new(photo_params)
    @photo.poster_id = current_user.id

    if @photo.save
      render :show
    else
      render json: @photo.errors.full_messages, status: 422
    end
  end

  def update
    @photo = Photo.find(params[:id])

    if @photo.update(photo_params)
      render :show
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

  def photo_params
    params.require(:photo).permit(:img_url, :location, :caption)
  end
end
