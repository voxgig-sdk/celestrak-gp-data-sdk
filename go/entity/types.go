// Typed models for the CelestrakGpData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Gpn is the typed data model for the gpn entity.
type Gpn struct {
	ArgOfPericenter *float64 `json:"arg_of_pericenter,omitempty"`
	Bstar *float64 `json:"bstar,omitempty"`
	ClassificationType *string `json:"classification_type,omitempty"`
	Eccentricity *float64 `json:"eccentricity,omitempty"`
	ElementSetNo *int `json:"element_set_no,omitempty"`
	EphemerisType *int `json:"ephemeris_type,omitempty"`
	Epoch *string `json:"epoch,omitempty"`
	Inclination *float64 `json:"inclination,omitempty"`
	MeanAnomaly *float64 `json:"mean_anomaly,omitempty"`
	MeanMotion *float64 `json:"mean_motion,omitempty"`
	MeanMotionDdot *float64 `json:"mean_motion_ddot,omitempty"`
	MeanMotionDot *float64 `json:"mean_motion_dot,omitempty"`
	NoradCatId *int `json:"norad_cat_id,omitempty"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectName *string `json:"object_name,omitempty"`
	RaOfAscNode *float64 `json:"ra_of_asc_node,omitempty"`
	RevAtEpoch *int `json:"rev_at_epoch,omitempty"`
}

// GpnListMatch is the typed request payload for Gpn.ListTyped.
type GpnListMatch struct {
	ArgOfPericenter *float64 `json:"arg_of_pericenter,omitempty"`
	Bstar *float64 `json:"bstar,omitempty"`
	ClassificationType *string `json:"classification_type,omitempty"`
	Eccentricity *float64 `json:"eccentricity,omitempty"`
	ElementSetNo *int `json:"element_set_no,omitempty"`
	EphemerisType *int `json:"ephemeris_type,omitempty"`
	Epoch *string `json:"epoch,omitempty"`
	Inclination *float64 `json:"inclination,omitempty"`
	MeanAnomaly *float64 `json:"mean_anomaly,omitempty"`
	MeanMotion *float64 `json:"mean_motion,omitempty"`
	MeanMotionDdot *float64 `json:"mean_motion_ddot,omitempty"`
	MeanMotionDot *float64 `json:"mean_motion_dot,omitempty"`
	NoradCatId *int `json:"norad_cat_id,omitempty"`
	ObjectId *string `json:"object_id,omitempty"`
	ObjectName *string `json:"object_name,omitempty"`
	RaOfAscNode *float64 `json:"ra_of_asc_node,omitempty"`
	RevAtEpoch *int `json:"rev_at_epoch,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
