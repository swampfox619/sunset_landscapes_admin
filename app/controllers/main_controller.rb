class MainController < ApplicationController

  def home
    @images = Image.all
    @testimonials = Testimonial.all
    @specials = Special.all
    @special = Special.last
  end

  def about
    @testimonials = Testimonial.all
  end

  def contact
  end

  def gallery
    @images = Image.all
  end

  def services
  end
  
end
