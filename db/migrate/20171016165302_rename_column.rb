class RenameColumn < ActiveRecord::Migration[5.0]
  def change
    rename_column :images, :type, :category
  end
end
