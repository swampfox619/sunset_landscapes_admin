class Image < ApplicationRecord

enum landscape_type: {
    "landscaping" => 0,
    "outdoor" => 1,
    "pergola" => 2,
    "drought" => 3
}


mount_uploader :image, ImageUploader

end
