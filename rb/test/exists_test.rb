# CelestrakGpData SDK exists test

require "minitest/autorun"
require_relative "../CelestrakGpData_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = CelestrakGpDataSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
