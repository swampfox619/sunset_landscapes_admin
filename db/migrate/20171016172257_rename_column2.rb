class RenameColumn2 < ActiveRecord::Migration[5.0]
  def change
    rename_column :images, :category, :landscape_type
  end
end
