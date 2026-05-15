# ProjectName SDK exists test

import pytest
from makeup_sdk import MakeupSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = MakeupSDK.test(None, None)
        assert testsdk is not None
