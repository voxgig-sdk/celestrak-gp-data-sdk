# CelestrakGpData SDK utility: make_context
require_relative '../core/context'
module CelestrakGpDataUtilities
  MakeContext = ->(ctxmap, basectx) {
    CelestrakGpDataContext.new(ctxmap, basectx)
  }
end
