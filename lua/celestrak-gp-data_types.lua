-- Typed models for the CelestrakGpData SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Gpn
---@field arg_of_pericenter? number
---@field bstar? number
---@field classification_type? string
---@field eccentricity? number
---@field element_set_no? number
---@field ephemeris_type? number
---@field epoch? string
---@field inclination? number
---@field mean_anomaly? number
---@field mean_motion? number
---@field mean_motion_ddot? number
---@field mean_motion_dot? number
---@field norad_cat_id? number
---@field object_id? string
---@field object_name? string
---@field ra_of_asc_node? number
---@field rev_at_epoch? number

---@class GpnListMatch

local M = {}

return M
