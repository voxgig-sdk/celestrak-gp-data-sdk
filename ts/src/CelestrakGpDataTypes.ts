// Typed models for the CelestrakGpData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Gpn {
  arg_of_pericenter?: number
  bstar?: number
  classification_type?: string
  eccentricity?: number
  element_set_no?: number
  ephemeris_type?: number
  epoch?: string
  inclination?: number
  mean_anomaly?: number
  mean_motion?: number
  mean_motion_ddot?: number
  mean_motion_dot?: number
  norad_cat_id?: number
  object_id?: string
  object_name?: string
  ra_of_asc_node?: number
  rev_at_epoch?: number
}

export type GpnListMatch = Partial<Gpn>

