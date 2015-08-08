class TaskSerializer < ActiveModel::Serializer
  embed :ids, include: true
  attributes :id, :name, :description, :list_id

  has_many :comments
  has_many :attachments
end