class AddColumnsToImages < ActiveRecord::Migration[5.0]
  def change
    add_column :images, :slider, :boolean
    add_column :images, :hero_text, :string
    
  end
end
