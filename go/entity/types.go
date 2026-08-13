// Typed models for the CelestrakGpData SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import (
	"encoding/json"

	"github.com/voxgig-sdk/celestrak-gp-data-sdk/go/core"
)

// Gpn is the typed data model for the gpn entity.
type Gpn struct {
	ARGOFPERICENTER *float64 `json:"ARG_OF_PERICENTER,omitempty"`
	BSTAR *float64 `json:"BSTAR,omitempty"`
	CLASSIFICATIONTYPE *string `json:"CLASSIFICATION_TYPE,omitempty"`
	ECCENTRICITY *float64 `json:"ECCENTRICITY,omitempty"`
	ELEMENTSETNO *int `json:"ELEMENT_SET_NO,omitempty"`
	EPHEMERISTYPE *int `json:"EPHEMERIS_TYPE,omitempty"`
	EPOCH *string `json:"EPOCH,omitempty"`
	INCLINATION *float64 `json:"INCLINATION,omitempty"`
	MEANANOMALY *float64 `json:"MEAN_ANOMALY,omitempty"`
	MEANMOTION *float64 `json:"MEAN_MOTION,omitempty"`
	MEANMOTIONDDOT *float64 `json:"MEAN_MOTION_DDOT,omitempty"`
	MEANMOTIONDOT *float64 `json:"MEAN_MOTION_DOT,omitempty"`
	NORADCATID *int `json:"NORAD_CAT_ID,omitempty"`
	OBJECTID *string `json:"OBJECT_ID,omitempty"`
	OBJECTNAME *string `json:"OBJECT_NAME,omitempty"`
	RAOFASCNODE *float64 `json:"RA_OF_ASC_NODE,omitempty"`
	REVATEPOCH *int `json:"REV_AT_EPOCH,omitempty"`
}

// GpnListMatch is the typed request payload for Gpn.ListTyped.
type GpnListMatch struct {
	ARGOFPERICENTER *float64 `json:"ARG_OF_PERICENTER,omitempty"`
	BSTAR *float64 `json:"BSTAR,omitempty"`
	CLASSIFICATIONTYPE *string `json:"CLASSIFICATION_TYPE,omitempty"`
	ECCENTRICITY *float64 `json:"ECCENTRICITY,omitempty"`
	ELEMENTSETNO *int `json:"ELEMENT_SET_NO,omitempty"`
	EPHEMERISTYPE *int `json:"EPHEMERIS_TYPE,omitempty"`
	EPOCH *string `json:"EPOCH,omitempty"`
	INCLINATION *float64 `json:"INCLINATION,omitempty"`
	MEANANOMALY *float64 `json:"MEAN_ANOMALY,omitempty"`
	MEANMOTION *float64 `json:"MEAN_MOTION,omitempty"`
	MEANMOTIONDDOT *float64 `json:"MEAN_MOTION_DDOT,omitempty"`
	MEANMOTIONDOT *float64 `json:"MEAN_MOTION_DOT,omitempty"`
	NORADCATID *int `json:"NORAD_CAT_ID,omitempty"`
	OBJECTID *string `json:"OBJECT_ID,omitempty"`
	OBJECTNAME *string `json:"OBJECT_NAME,omitempty"`
	RAOFASCNODE *float64 `json:"RA_OF_ASC_NODE,omitempty"`
	REVATEPOCH *int `json:"REV_AT_EPOCH,omitempty"`
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

// entityData unwraps an entity to its data map.
//
// Operations resolve to the ENTITY, not the raw data (see AGENTS.md), and an
// entity's fields are UNEXPORTED — marshalling one directly yields `{}`, so
// every typed accessor would silently hand back a zero-valued struct. The
// typed boundary therefore takes the data hop first.
func entityData(v any) any {
	if ent, ok := v.(core.Entity); ok {
		return ent.Data()
	}
	return v
}

// typedFrom decodes a runtime value (an entity, or the map[string]any the op
// pipeline produced) into a typed model T via a JSON round-trip. On any error
// it returns the zero value of T; the op's own (value, error) tuple carries
// the real error.
func typedFrom[T any](v any) T {
	var out T
	v = entityData(v)
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

// typedSliceFrom decodes a runtime list value into a typed slice []T via a
// JSON round-trip, for list ops. `list` resolves to a slice of ENTITY
// instances, so each element takes the data hop.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	if list, ok := v.([]any); ok {
		unwrapped := make([]any, 0, len(list))
		for _, item := range list {
			unwrapped = append(unwrapped, entityData(item))
		}
		v = unwrapped
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
