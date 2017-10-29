class AddColorToSpecials < ActiveRecord::Migration[5.0]
  def change
    add_column :specials, :color, :string
  end
end
