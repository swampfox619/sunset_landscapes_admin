class Image < ApplicationRecord

validates :landscape_type, :image, presence: true

enum landscape_type: {
    "landscaping" => 0,
    "outdoor" => 1,
    "pergola" => 2,
    "drought" => 3
}


mount_uploader :image, ImageUploader

end
