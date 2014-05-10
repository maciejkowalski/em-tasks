class ListSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :name
  has_many :tasks
end
