-- Makeup SDK exists test

local sdk = require("makeup_sdk")

describe("MakeupSDK", function()
  it("should create test SDK", function()
    local testsdk = sdk.test(nil, nil)
    assert.is_not_nil(testsdk)
  end)
end)
