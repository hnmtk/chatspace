class Api::MessagesController < ApplicationController
  def index
    respond_to do |format|
      format.html
      format.json {@new_messages = Message.where(group_id: params[:group_id])}
    end
  end
end
# ("id > ?" and group_id:, params[:id], params[:group_id])
# (group_id: params[:group_id])

# <ActionController::Parameters 
# {"id"=>"372",
# "format"=>"json",
# "controller"=>"api/messages",
# "action"=>"index",
# "group_id"=>"1"}
# permitted: false>