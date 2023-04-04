class Api::V1::MessagesController < ApplicationController
  def index
    rand_id = rand(1..Message.count)
    @greeting = Message.find(rand_id) if rand_id

    if @greeting
      render json: @greeting, status: :ok
    else
      render json: { message: 'There is no message' }, status: :not_found
    end
  end
end
