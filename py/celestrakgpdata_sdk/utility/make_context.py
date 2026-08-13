# CelestrakGpData SDK utility: make_context

from celestrakgpdata_sdk.core.context import CelestrakGpDataContext


def make_context_util(ctxmap, basectx):
    return CelestrakGpDataContext(ctxmap, basectx)
