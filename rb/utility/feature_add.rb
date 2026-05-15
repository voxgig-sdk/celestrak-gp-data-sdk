# CelestrakGpData SDK utility: feature_add
module CelestrakGpDataUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
