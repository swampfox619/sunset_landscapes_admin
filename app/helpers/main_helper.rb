module MainHelper

    def special_month?
        @specials = Special.all
        @specials.each do |special|
            if special.month == Date::MONTHNAMES[Date.today.month]
                @special = special
                return @special
            end
        end
    end

end