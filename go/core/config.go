package core

func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "CelestrakGpData",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
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
						"name": "arg_of_pericenter",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 0,
					},
					map[string]any{
						"name": "bstar",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 1,
					},
					map[string]any{
						"name": "classification_type",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 2,
					},
					map[string]any{
						"name": "eccentricity",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 3,
					},
					map[string]any{
						"name": "element_set_no",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 4,
					},
					map[string]any{
						"name": "ephemeris_type",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 5,
					},
					map[string]any{
						"name": "epoch",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 6,
					},
					map[string]any{
						"name": "inclination",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 7,
					},
					map[string]any{
						"name": "mean_anomaly",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 8,
					},
					map[string]any{
						"name": "mean_motion",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 9,
					},
					map[string]any{
						"name": "mean_motion_ddot",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 10,
					},
					map[string]any{
						"name": "mean_motion_dot",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 11,
					},
					map[string]any{
						"name": "norad_cat_id",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 12,
					},
					map[string]any{
						"name": "object_id",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 13,
					},
					map[string]any{
						"name": "object_name",
						"req": false,
						"type": "`$STRING`",
						"active": true,
						"index$": 14,
					},
					map[string]any{
						"name": "ra_of_asc_node",
						"req": false,
						"type": "`$NUMBER`",
						"active": true,
						"index$": 15,
					},
					map[string]any{
						"name": "rev_at_epoch",
						"req": false,
						"type": "`$INTEGER`",
						"active": true,
						"index$": 16,
					},
				},
				"name": "gpn",
				"op": map[string]any{
					"list": map[string]any{
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
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "json",
											"kind": "query",
											"name": "format",
											"orig": "format",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "stations",
											"kind": "query",
											"name": "group",
											"orig": "group",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "1998-067A",
											"kind": "query",
											"name": "intde",
											"orig": "intde",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
										map[string]any{
											"example": "ISS",
											"kind": "query",
											"name": "name",
											"orig": "name",
											"reqd": false,
											"type": "`$STRING`",
											"active": true,
										},
									},
								},
								"method": "GET",
								"orig": "/NORAD/elements/gp.php",
								"parts": []any{
									"NORAD",
									"elements",
									"gp.php",
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
								"active": true,
								"index$": 0,
							},
						},
						"input": "data",
						"key$": "list",
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
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
