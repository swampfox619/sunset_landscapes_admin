class MainController < ApplicationController

  def home
    @images = Image.all
  end

  def about
  end

  def contact
  end

  def gallery
    @images = Image.all
  end

  def services
  end
end
