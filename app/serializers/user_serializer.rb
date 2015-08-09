class UserSerializer < ActiveModel::Serializer
  embed :ids, include: true

  attributes :id, :email, :first_name, :last_name, :avatar,
             :created_at, :updated_at

end