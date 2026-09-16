# CelestrakGpData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/ratelimit_feature'
require_relative 'feature/retry_feature'
require_relative 'feature/test_feature'
require_relative 'feature/timeout_feature'


module CelestrakGpDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      CelestrakGpDataBaseFeature.new
    when "ratelimit"
      CelestrakGpDataRatelimitFeature.new
    when "retry"
      CelestrakGpDataRetryFeature.new
    when "test"
      CelestrakGpDataTestFeature.new
    when "timeout"
      CelestrakGpDataTimeoutFeature.new
    else
      CelestrakGpDataBaseFeature.new
    end
  end
end
