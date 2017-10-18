class Testimonial < ApplicationRecord

validates :description, length: { maximum: 400 }
validates :title, :description, presence: true

end
