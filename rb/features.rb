# Makeup SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module MakeupFeatures
  def self.make_feature(name)
    case name
    when "base"
      MakeupBaseFeature.new
    when "ratelimit"
      MakeupRatelimitFeature.new
    when "retry"
      MakeupRetryFeature.new
    when "test"
      MakeupTestFeature.new
    when "timeout"
      MakeupTimeoutFeature.new
    else
      MakeupBaseFeature.new
    end
  end
end
