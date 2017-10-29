class CreateSpecials < ActiveRecord::Migration[5.0]
  def change
    create_table :specials do |t|
      t.string :title
      t.string :description
      t.integer :month

      t.timestamps
    end
  end
end
