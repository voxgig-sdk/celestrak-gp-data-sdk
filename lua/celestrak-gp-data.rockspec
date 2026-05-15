package = "voxgig-sdk-celestrak-gp-data"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/celestrak-gp-data-sdk.git"
}
description = {
  summary = "CelestrakGpData SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["celestrak-gp-data_sdk"] = "celestrak-gp-data_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
