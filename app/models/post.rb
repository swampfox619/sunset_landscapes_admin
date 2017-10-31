class Post < ApplicationRecord

    validates :title, :body, presence: true
    validates :title, length: { maximum: 50 }
    validates :title, :body, uniqueness: true

end
