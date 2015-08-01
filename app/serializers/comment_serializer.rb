class CommentSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :content, :task_id, :user_id, :created_at
end