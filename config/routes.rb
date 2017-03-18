Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :photos, only: [:create, :destroy, :show, :update, :index]
    resources :likes, only: [:create] do
      delete 'likes/:photo_id' => 'likes#destroy_by_photo_id', as: :destroy_by_photo_id
    end
  end

end
