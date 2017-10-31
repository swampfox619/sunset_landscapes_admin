class SpecialsController < ApplicationController
  before_action :set_special, only: [:show, :edit, :update, :destroy]

  def index
    @specials = Special.all
  end


  def show
  end

  def new
    @special = Special.new
    @colors = ['Light Blue' => 'rgb(63, 169, 245)', 'Yellow' => 'rgb(255, 242, 0)', 'Orange' => 'rgb(247, 147, 30)',
    'Brown' => 'rgb(178, 115, 10)', 'Green' => 'rgb(75, 191, 30)']
  end


  def edit
      @colors = ['Light Blue' => 'rgb(63, 169, 245)', 'Yellow' => 'rgb(255, 242, 0)', 'Orange' => 'rgb(247, 147, 30)',
    'Brown' => 'rgb(178, 115, 10)', 'Green' => 'rgb(75, 191, 30)']
  end

  def create
    @special = Special.new(special_params)

    respond_to do |format|
      if @special.save
        format.html { redirect_to @special, notice: 'Special was successfully created.' }
        format.json { render :show, status: :created, location: @special }
      else
        format.html { render :new }
        format.json { render json: @special.errors, status: :unprocessable_entity }
      end
    end
  end

  def update
    respond_to do |format|
      if @special.update(special_params)
        format.html { redirect_to @special, notice: 'Special was successfully updated.' }
        format.json { render :show, status: :ok, location: @special }
      else
        format.html { render :edit }
        format.json { render json: @special.errors, status: :unprocessable_entity }
      end
    end
  end


  def destroy
    @special.destroy
    respond_to do |format|
      format.html { redirect_to specials_url, notice: 'Special was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    def set_special
      @special = Special.find(params[:id])
    end

    def special_params
      params.require(:special).permit(:color, :title, :description, :month)
    end
end
