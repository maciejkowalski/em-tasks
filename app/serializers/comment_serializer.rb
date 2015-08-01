class CommentSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :content, :task_id, :user_id, :created_at,
             :user_name, :user_email, :user_avatar

  def created_at
    object.created_at.strftime("%Y/%m/%d %H:%M")
  end

  def user_email
    object.user.email
  end

  def user_name
    "#{object.user.first_name} #{object.user.last_name}"
  end

  def user_avatar
    object.user.avatar
  end
end