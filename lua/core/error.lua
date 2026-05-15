-- Makeup SDK error

local MakeupError = {}
MakeupError.__index = MakeupError


function MakeupError.new(code, msg, ctx)
  local self = setmetatable({}, MakeupError)
  self.is_sdk_error = true
  self.sdk = "Makeup"
  self.code = code or ""
  self.msg = msg or ""
  self.ctx = ctx
  self.result = nil
  self.spec = nil
  return self
end


function MakeupError:error()
  return self.msg
end


function MakeupError:__tostring()
  return self.msg
end


return MakeupError
