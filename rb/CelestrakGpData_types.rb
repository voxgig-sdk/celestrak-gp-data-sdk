# frozen_string_literal: true

# Typed models for the CelestrakGpData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Gpn entity data model.
#
# @!attribute [rw] arg_of_pericenter
#   @return [Float, nil]
#
# @!attribute [rw] bstar
#   @return [Float, nil]
#
# @!attribute [rw] classification_type
#   @return [String, nil]
#
# @!attribute [rw] eccentricity
#   @return [Float, nil]
#
# @!attribute [rw] element_set_no
#   @return [Integer, nil]
#
# @!attribute [rw] ephemeris_type
#   @return [Integer, nil]
#
# @!attribute [rw] epoch
#   @return [String, nil]
#
# @!attribute [rw] inclination
#   @return [Float, nil]
#
# @!attribute [rw] mean_anomaly
#   @return [Float, nil]
#
# @!attribute [rw] mean_motion
#   @return [Float, nil]
#
# @!attribute [rw] mean_motion_ddot
#   @return [Float, nil]
#
# @!attribute [rw] mean_motion_dot
#   @return [Float, nil]
#
# @!attribute [rw] norad_cat_id
#   @return [Integer, nil]
#
# @!attribute [rw] object_id
#   @return [String, nil]
#
# @!attribute [rw] object_name
#   @return [String, nil]
#
# @!attribute [rw] ra_of_asc_node
#   @return [Float, nil]
#
# @!attribute [rw] rev_at_epoch
#   @return [Integer, nil]
Gpn = Struct.new(
  :arg_of_pericenter,
  :bstar,
  :classification_type,
  :eccentricity,
  :element_set_no,
  :ephemeris_type,
  :epoch,
  :inclination,
  :mean_anomaly,
  :mean_motion,
  :mean_motion_ddot,
  :mean_motion_dot,
  :norad_cat_id,
  :object_id,
  :object_name,
  :ra_of_asc_node,
  :rev_at_epoch,
  keyword_init: true
)

# Request payload for Gpn#list.
#
# @!attribute [rw] arg_of_pericenter
#   @return [Float, nil]
#
# @!attribute [rw] bstar
#   @return [Float, nil]
#
# @!attribute [rw] classification_type
#   @return [String, nil]
#
# @!attribute [rw] eccentricity
#   @return [Float, nil]
#
# @!attribute [rw] element_set_no
#   @return [Integer, nil]
#
# @!attribute [rw] ephemeris_type
#   @return [Integer, nil]
#
# @!attribute [rw] epoch
#   @return [String, nil]
#
# @!attribute [rw] inclination
#   @return [Float, nil]
#
# @!attribute [rw] mean_anomaly
#   @return [Float, nil]
#
# @!attribute [rw] mean_motion
#   @return [Float, nil]
#
# @!attribute [rw] mean_motion_ddot
#   @return [Float, nil]
#
# @!attribute [rw] mean_motion_dot
#   @return [Float, nil]
#
# @!attribute [rw] norad_cat_id
#   @return [Integer, nil]
#
# @!attribute [rw] object_id
#   @return [String, nil]
#
# @!attribute [rw] object_name
#   @return [String, nil]
#
# @!attribute [rw] ra_of_asc_node
#   @return [Float, nil]
#
# @!attribute [rw] rev_at_epoch
#   @return [Integer, nil]
GpnListMatch = Struct.new(
  :arg_of_pericenter,
  :bstar,
  :classification_type,
  :eccentricity,
  :element_set_no,
  :ephemeris_type,
  :epoch,
  :inclination,
  :mean_anomaly,
  :mean_motion,
  :mean_motion_ddot,
  :mean_motion_dot,
  :norad_cat_id,
  :object_id,
  :object_name,
  :ra_of_asc_node,
  :rev_at_epoch,
  keyword_init: true
)

