# Makeup SDK feature factory

from feature.base_feature import MakeupBaseFeature
from feature.test_feature import MakeupTestFeature


def _make_feature(name):
    features = {
        "base": lambda: MakeupBaseFeature(),
        "test": lambda: MakeupTestFeature(),
    }
    factory = features.get(name)
    if factory is not None:
        return factory()
    return features["base"]()
