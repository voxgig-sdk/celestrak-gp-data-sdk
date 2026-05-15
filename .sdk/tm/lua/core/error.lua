-- CelestrakGpData SDK error

local CelestrakGpDataError = {}
CelestrakGpDataError.__index = CelestrakGpDataError


function CelestrakGpDataError.new(code, msg, ctx)
  local self = setmetatable({}, CelestrakGpDataError)
  self.is_sdk_error = true
  self.sdk = "CelestrakGpData"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function CelestrakGpDataError:error()
  return self.msg
end


function CelestrakGpDataError:__tostring()
  return self.msg
end


return CelestrakGpDataError
