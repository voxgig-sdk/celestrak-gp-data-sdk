# CelestrakGpData SDK feature factory

require_relative 'feature/base_feature'
require_relative 'feature/test_feature'


module CelestrakGpDataFeatures
  def self.make_feature(name)
    case name
    when "base"
      CelestrakGpDataBaseFeature.new
    when "test"
      CelestrakGpDataTestFeature.new
    else
      CelestrakGpDataBaseFeature.new
    end
  end
end
