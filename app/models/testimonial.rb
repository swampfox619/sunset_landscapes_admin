class Testimonial < ApplicationRecord

    validates :description, length: { maximum: 300 }
    validates :title, :description, presence: true
    validates :title, length: { maximum: 50 }
    validates :title, :description, uniqueness: true
    
end
