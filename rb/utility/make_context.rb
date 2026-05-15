# Makeup SDK utility: make_context
require_relative '../core/context'
module MakeupUtilities
  MakeContext = ->(ctxmap, basectx) {
    MakeupContext.new(ctxmap, basectx)
  }
end
