# CelestrakGpData SDK feature factory

from feature.base_feature import CelestrakGpDataBaseFeature
from feature.test_feature import CelestrakGpDataTestFeature


def _make_feature(name):
    features = {
        "base": lambda: CelestrakGpDataBaseFeature(),
        "test": lambda: CelestrakGpDataTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
