Rails.application.routes.draw do

  mount Ckeditor::Engine => '/ckeditor'
  resources :specials
  resources :testimonials
  resources :images
  resources :posts
  devise_for :users
  
  get "blog" => "main#blog"
  get "contact" => "main#contact"
  get "about" => "main#about"
  get "home" => "main#home"
  get "gallery" => "main#gallery"
  get "services" => "main#services"
  root 'main#home'

end
