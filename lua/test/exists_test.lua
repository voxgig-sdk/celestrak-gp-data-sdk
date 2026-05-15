-- ProjectName SDK exists test

local sdk = require("celestrak-gp-data_sdk")

describe("CelestrakGpDataSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
