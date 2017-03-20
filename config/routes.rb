Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :users, only: [:create]
    match 'users/:username' => 'users#find_by_username', :via => :get

    resources :likes, only: [:create]
    match 'likes/:photo_id' => 'likes#destroy_by_photo_id', :via => :delete

    resources :photos, only: [:create, :destroy, :show, :update, :index] do
      resources :comments, only: [:create, :destroy, :index]
    end

  end

end
