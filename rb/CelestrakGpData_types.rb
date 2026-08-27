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
# @!attribute [rw] ARG_OF_PERICENTER
#   @return [Float, nil]
#
# @!attribute [rw] BSTAR
#   @return [Float, nil]
#
# @!attribute [rw] CLASSIFICATION_TYPE
#   @return [String, nil]
#
# @!attribute [rw] ECCENTRICITY
#   @return [Float, nil]
#
# @!attribute [rw] ELEMENT_SET_NO
#   @return [Integer, nil]
#
# @!attribute [rw] EPHEMERIS_TYPE
#   @return [Integer, nil]
#
# @!attribute [rw] EPOCH
#   @return [String, nil]
#
# @!attribute [rw] INCLINATION
#   @return [Float, nil]
#
# @!attribute [rw] MEAN_ANOMALY
#   @return [Float, nil]
#
# @!attribute [rw] MEAN_MOTION
#   @return [Float, nil]
#
# @!attribute [rw] MEAN_MOTION_DDOT
#   @return [Float, nil]
#
# @!attribute [rw] MEAN_MOTION_DOT
#   @return [Float, nil]
#
# @!attribute [rw] NORAD_CAT_ID
#   @return [Integer, nil]
#
# @!attribute [rw] OBJECT_ID
#   @return [String, nil]
#
# @!attribute [rw] OBJECT_NAME
#   @return [String, nil]
#
# @!attribute [rw] RA_OF_ASC_NODE
#   @return [Float, nil]
#
# @!attribute [rw] REV_AT_EPOCH
#   @return [Integer, nil]
Gpn = Struct.new(
  :ARG_OF_PERICENTER,
  :BSTAR,
  :CLASSIFICATION_TYPE,
  :ECCENTRICITY,
  :ELEMENT_SET_NO,
  :EPHEMERIS_TYPE,
  :EPOCH,
  :INCLINATION,
  :MEAN_ANOMALY,
  :MEAN_MOTION,
  :MEAN_MOTION_DDOT,
  :MEAN_MOTION_DOT,
  :NORAD_CAT_ID,
  :OBJECT_ID,
  :OBJECT_NAME,
  :RA_OF_ASC_NODE,
  :REV_AT_EPOCH,
  keyword_init: true
)

# Request payload for Gpn#list.
#
# @!attribute [rw] catnr
#   @return [String, nil]
#
# @!attribute [rw] format
#   @return [String, nil]
#
# @!attribute [rw] group
#   @return [String, nil]
#
# @!attribute [rw] intde
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
GpnListMatch = Struct.new(
  :catnr,
  :format,
  :group,
  :intde,
  :name,
  keyword_init: true
)

