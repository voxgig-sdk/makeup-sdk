# Makeup SDK utility: make_context

from core.context import MakeupContext


def make_context_util(ctxmap, basectx):
    return MakeupContext(ctxmap, basectx)
