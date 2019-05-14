json.name @message.user.name
json.date @message.created_at.strftime("%Y/%m/%d(%a) %H:%M:%S")
json.content @message.content
json.image @message.image.url
json.id @message.id