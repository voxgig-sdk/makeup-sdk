# Makeup SDK exists test

require "minitest/autorun"
require_relative "../Makeup_sdk"

class ExistsTest < Minitest::Test
  def test_create_test_sdk
    testsdk = MakeupSDK.test(nil, nil)
    assert !testsdk.nil?
  end
end
