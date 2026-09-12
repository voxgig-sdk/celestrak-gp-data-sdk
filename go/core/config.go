package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CelestrakGpData",
			"slug": "celestrak-gp-data",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://celestrak.org",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"gpn": map[string]any{},
			},
		},
		"entity": map[string]any{
			"gpn": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "ARG_OF_PERICENTER",
						"short": "Argument of perigee in degrees",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "BSTAR",
						"short": "BSTAR drag term",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "CLASSIFICATION_TYPE",
						"short": "Classification (U=Unclassified, C=Classified, S=Secret)",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "ECCENTRICITY",
						"short": "Orbital eccentricity",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "ELEMENT_SET_NO",
						"short": "Element set number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "EPHEMERIS_TYPE",
						"short": "Ephemeris type",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"format": "date-time",
						"name": "EPOCH",
						"short": "Epoch time of the orbital elements",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "INCLINATION",
						"short": "Inclination in degrees",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "MEAN_ANOMALY",
						"short": "Mean anomaly in degrees",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "MEAN_MOTION",
						"short": "Mean motion in revolutions per day",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "MEAN_MOTION_DDOT",
						"short": "Second derivative of mean motion",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "MEAN_MOTION_DOT",
						"short": "First derivative of mean motion",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "NORAD_CAT_ID",
						"short": "NORAD catalog number",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "OBJECT_ID",
						"short": "International designator",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "OBJECT_NAME",
						"short": "Name of the space object",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "RA_OF_ASC_NODE",
						"short": "Right ascension of ascending node in degrees",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "REV_AT_EPOCH",
						"short": "Revolution number at epoch",
						"type": "`$INTEGER`",
					},
				},
				"name": "gpn",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": "25544",
											"kind": "query",
											"name": "catnr",
											"orig": "catnr",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "stations",
											"kind": "query",
											"name": "group",
											"orig": "group",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "1998-067A",
											"kind": "query",
											"name": "intde",
											"orig": "intde",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": "ISS",
											"kind": "query",
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/NORAD/elements/gp.php",
								"segments": []any{
									map[string]any{
										"lit": "NORAD",
									},
									map[string]any{
										"lit": "elements",
									},
									map[string]any{
										"lit": "gp.php",
									},
								},
								"select": map[string]any{
									"exist": []any{
										"catnr",
										"format",
										"group",
										"intde",
										"name",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"parts": []any{
									"NORAD",
									"elements",
									"gp.php",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

// The plugin definitions the model selected per feature, as []any so a
// feature package can consume them without core naming its types. Empty
// when no active feature declares active plugin groups for this target.
var featurePlugins = map[string][]any{
}

// FeaturePlugins is the definitions list for one feature's chain.
func FeaturePlugins(name string) []any {
	return featurePlugins[name]
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
