class AttachmentSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :url, :file_name, :task_id, :user_id, :created_at, :updated_at
end