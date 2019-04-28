## groups table

|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|message_id|references|null: false, foreign_key: true|
|group_name|varchar|null: false|

### Association
- has_many :user, through: :groups_uers
- has_many :messages
- has_many :groups_uers


## users table
|Column|Type|Options|
|------|----|-------|
|name|string|index: true, null: false, unique: true|
|mail|string|null: false, null: false|

### Association
- has_many :groups, through: :groups_uers
- has_many :message
- has_many :groups_uers


## messages table
|Column|Type|Options|
|------|----|-------|
|text|text|null: false|
|image|text||
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


## groups-users table
|Column|Type|Options|
|------|----|-------|
|user_id|references|null: false, foreign_key: true|
|group_id|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user