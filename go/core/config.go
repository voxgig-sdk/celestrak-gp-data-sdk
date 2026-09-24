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
			"ratelimit": map[string]any{
				"options": map[string]any{
					"active": false,
					"burst": 5,
					"rate": 5,
				},
				"optspec": map[string]any{
					"now": "`$FUNCTION`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"retry": map[string]any{
				"options": map[string]any{
					"active": false,
					"factor": 2,
					"maxDelay": 2000,
					"minDelay": 50,
					"retries": 2,
					"statuses": []any{
						408,
						425,
						429,
						500,
						502,
						503,
						504,
					},
				},
				"optspec": map[string]any{
					"jitter": "`$BOOLEAN`",
					"sleep": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
			},
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"optspec": map[string]any{
					"entity": "`$MAP`",
					"net": "`$MAP`",
				},
				"strict": false,
				"transport": "base",
			},
			"timeout": map[string]any{
				"options": map[string]any{
					"active": false,
					"ms": 30000,
				},
				"optspec": map[string]any{
					"clearTimer": "`$FUNCTION`",
					"setTimer": "`$FUNCTION`",
				},
				"strict": false,
				"transport": "wrap",
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
						"title": "Arg Of Pericenter",
						"type": "`$NUMBER`",
						"short": "Argument of perigee in degrees",
					},
					map[string]any{
						"name": "BSTAR",
						"title": "Bstar",
						"type": "`$NUMBER`",
						"short": "BSTAR drag term",
					},
					map[string]any{
						"name": "CLASSIFICATION_TYPE",
						"title": "Classification Type",
						"type": "`$STRING`",
						"short": "Classification (U=Unclassified, C=Classified, S=Secret)",
					},
					map[string]any{
						"name": "ECCENTRICITY",
						"title": "Eccentricity",
						"type": "`$NUMBER`",
						"short": "Orbital eccentricity",
					},
					map[string]any{
						"name": "ELEMENT_SET_NO",
						"title": "Element Set No",
						"type": "`$INTEGER`",
						"short": "Element set number",
					},
					map[string]any{
						"name": "EPHEMERIS_TYPE",
						"title": "Ephemeris Type",
						"type": "`$INTEGER`",
						"short": "Ephemeris type",
					},
					map[string]any{
						"name": "EPOCH",
						"title": "Epoch",
						"type": "`$STRING`",
						"short": "Epoch time of the orbital elements",
						"format": "date-time",
					},
					map[string]any{
						"name": "INCLINATION",
						"title": "Inclination",
						"type": "`$NUMBER`",
						"short": "Inclination in degrees",
					},
					map[string]any{
						"name": "MEAN_ANOMALY",
						"title": "Mean Anomaly",
						"type": "`$NUMBER`",
						"short": "Mean anomaly in degrees",
					},
					map[string]any{
						"name": "MEAN_MOTION",
						"title": "Mean Motion",
						"type": "`$NUMBER`",
						"short": "Mean motion in revolutions per day",
					},
					map[string]any{
						"name": "MEAN_MOTION_DDOT",
						"title": "Mean Motion Ddot",
						"type": "`$NUMBER`",
						"short": "Second derivative of mean motion",
					},
					map[string]any{
						"name": "MEAN_MOTION_DOT",
						"title": "Mean Motion Dot",
						"type": "`$NUMBER`",
						"short": "First derivative of mean motion",
					},
					map[string]any{
						"name": "NORAD_CAT_ID",
						"title": "Norad Cat Id",
						"type": "`$INTEGER`",
						"short": "NORAD catalog number",
					},
					map[string]any{
						"name": "OBJECT_ID",
						"title": "Object Id",
						"type": "`$STRING`",
						"short": "International designator",
					},
					map[string]any{
						"name": "OBJECT_NAME",
						"title": "Object Name",
						"type": "`$STRING`",
						"short": "Name of the space object",
					},
					map[string]any{
						"name": "RA_OF_ASC_NODE",
						"title": "Ra Of Asc Node",
						"type": "`$NUMBER`",
						"short": "Right ascension of ascending node in degrees",
					},
					map[string]any{
						"name": "REV_AT_EPOCH",
						"title": "Rev At Epoch",
						"type": "`$INTEGER`",
						"short": "Revolution number at epoch",
					},
				},
				"name": "gpn",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
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
								"parts": []any{
									"NORAD",
									"elements",
									"gp.php",
								},
								"rename": map[string]any{},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"name": "catnr",
											"orig": "catnr",
											"type": "`$STRING`",
											"kind": "query",
											"example": "25544",
										},
										map[string]any{
											"name": "format",
											"orig": "format",
											"type": "`$STRING`",
											"kind": "query",
											"example": "json",
										},
										map[string]any{
											"name": "group",
											"orig": "group",
											"type": "`$STRING`",
											"kind": "query",
											"example": "stations",
										},
										map[string]any{
											"name": "intde",
											"orig": "intde",
											"type": "`$STRING`",
											"kind": "query",
											"example": "1998-067A",
										},
										map[string]any{
											"name": "name",
											"orig": "name",
											"type": "`$STRING`",
											"kind": "query",
											"example": "ISS",
										},
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
	case "ratelimit":
		if NewRatelimitFeatureFunc != nil {
			return NewRatelimitFeatureFunc()
		}
	case "retry":
		if NewRetryFeatureFunc != nil {
			return NewRetryFeatureFunc()
		}
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	case "timeout":
		if NewTimeoutFeatureFunc != nil {
			return NewTimeoutFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
