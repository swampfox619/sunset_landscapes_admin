class MainController < ApplicationController

  def home
    @images = Image.all
    @testimonials = Testimonial.all
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
