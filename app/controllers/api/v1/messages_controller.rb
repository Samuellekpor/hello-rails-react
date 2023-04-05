class Api::V1::MessagesController < ApplicationController
  def index
    render json: Message.find(rand(1..5))
  end
end
