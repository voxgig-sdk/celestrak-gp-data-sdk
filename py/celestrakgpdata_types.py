# Typed models for the CelestrakGpData SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Gpn:
    arg_of_pericenter: Optional[float] = None
    bstar: Optional[float] = None
    classification_type: Optional[str] = None
    eccentricity: Optional[float] = None
    element_set_no: Optional[int] = None
    ephemeris_type: Optional[int] = None
    epoch: Optional[str] = None
    inclination: Optional[float] = None
    mean_anomaly: Optional[float] = None
    mean_motion: Optional[float] = None
    mean_motion_ddot: Optional[float] = None
    mean_motion_dot: Optional[float] = None
    norad_cat_id: Optional[int] = None
    object_id: Optional[str] = None
    object_name: Optional[str] = None
    ra_of_asc_node: Optional[float] = None
    rev_at_epoch: Optional[int] = None


@dataclass
class GpnListMatch:
    arg_of_pericenter: Optional[float] = None
    bstar: Optional[float] = None
    classification_type: Optional[str] = None
    eccentricity: Optional[float] = None
    element_set_no: Optional[int] = None
    ephemeris_type: Optional[int] = None
    epoch: Optional[str] = None
    inclination: Optional[float] = None
    mean_anomaly: Optional[float] = None
    mean_motion: Optional[float] = None
    mean_motion_ddot: Optional[float] = None
    mean_motion_dot: Optional[float] = None
    norad_cat_id: Optional[int] = None
    object_id: Optional[str] = None
    object_name: Optional[str] = None
    ra_of_asc_node: Optional[float] = None
    rev_at_epoch: Optional[int] = None

