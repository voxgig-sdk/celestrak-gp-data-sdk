# ProjectName SDK exists test

import pytest
from celestrakgpdata_sdk import CelestrakGpDataSDK


class TestExists:

    def test_should_create_test_sdk(self):
        testsdk = CelestrakGpDataSDK.test(None, None)
        assert testsdk is not None
