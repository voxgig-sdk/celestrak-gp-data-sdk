# CelestrakGpData SDK feature factory

from celestrakgpdata_sdk.feature.base_feature import CelestrakGpDataBaseFeature
from celestrakgpdata_sdk.feature.ratelimit_feature import CelestrakGpDataRatelimitFeature
from celestrakgpdata_sdk.feature.retry_feature import CelestrakGpDataRetryFeature
from celestrakgpdata_sdk.feature.test_feature import CelestrakGpDataTestFeature
from celestrakgpdata_sdk.feature.timeout_feature import CelestrakGpDataTimeoutFeature


_FEATURES = {
    "base": lambda: CelestrakGpDataBaseFeature(),
    "ratelimit": lambda: CelestrakGpDataRatelimitFeature(),
    "retry": lambda: CelestrakGpDataRetryFeature(),
    "test": lambda: CelestrakGpDataTestFeature(),
    "timeout": lambda: CelestrakGpDataTimeoutFeature(),
}


def _make_feature(name):
    factory = _FEATURES.get(name)
    if factory is not None:
        return factory()
    return _FEATURES["base"]()


# True when this SDK was generated with the named feature class - the
# constructor's tolerance for extend-carried features reads this (an
# active name with no generated class must not become a BaseFeature
# stray when an extend instance carries it).
def _has_feature(name):
    return name in _FEATURES
