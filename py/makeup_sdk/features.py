# Makeup SDK feature factory

from makeup_sdk.feature.base_feature import MakeupBaseFeature
from makeup_sdk.feature.ratelimit_feature import MakeupRatelimitFeature
from makeup_sdk.feature.retry_feature import MakeupRetryFeature
from makeup_sdk.feature.test_feature import MakeupTestFeature
from makeup_sdk.feature.timeout_feature import MakeupTimeoutFeature


_FEATURES = {
    "base": lambda: MakeupBaseFeature(),
    "ratelimit": lambda: MakeupRatelimitFeature(),
    "retry": lambda: MakeupRetryFeature(),
    "test": lambda: MakeupTestFeature(),
    "timeout": lambda: MakeupTimeoutFeature(),
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
