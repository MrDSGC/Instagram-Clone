Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]

    resources :follows, only: [:create]
    match 'follows/:followed_id' => 'follows#destroy_by_followed_id', :via => :delete
    match 'follows/:followed_id' => 'follows#get_by_followed_id', :via => :get

    resources :users, only: [:index, :create, :update]
    match 'users/:username' => 'users#find_by_username', :via => :get

    resources :likes, only: [:create]
    match 'likes/:photo_id' => 'likes#destroy_by_photo_id', :via => :delete

    resources :comments, only: [:create, :destroy, :index]

    resources :photos, only: [:create, :destroy, :show, :update, :index]


  end

end
