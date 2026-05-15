# Makeup SDK utility: feature_add
module MakeupUtilities
  FeatureAdd = ->(ctx, f) {
    ctx.client.features << f
  }
end
