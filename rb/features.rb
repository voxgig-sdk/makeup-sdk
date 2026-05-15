# Makeup SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module MakeupFeatures
  def self.make_feature(name)
    case name
    when "base"
      MakeupBaseFeature.new
    when "test"
      MakeupTestFeature.new
    else
      MakeupBaseFeature.new
    end
  end
end
