class CreateTask < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :title
      t.string :description
      t.integer :list_id

      t.timestamps
    end
  end
end
