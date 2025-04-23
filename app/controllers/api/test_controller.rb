module Api
  class TestController < ApplicationController
    def index
      render json: { status: "status" }, status: :ok
    end
  end
end