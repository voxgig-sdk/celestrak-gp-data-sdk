# CelestrakGpData SDK configuration


def make_config():
    return {
        "main": {
            "name": "CelestrakGpData",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://celestrak.org",
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "gpn": {},
            },
        },
        "entity": {
      "gpn": {
        "fields": [
          {
            "name": "arg_of_pericenter",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "bstar",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "classification_type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "eccentricity",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "element_set_no",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "ephemeris_type",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "epoch",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "inclination",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "mean_anomaly",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 8,
          },
          {
            "name": "mean_motion",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 9,
          },
          {
            "name": "mean_motion_ddot",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 10,
          },
          {
            "name": "mean_motion_dot",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 11,
          },
          {
            "name": "norad_cat_id",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 12,
          },
          {
            "name": "object_id",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 13,
          },
          {
            "name": "object_name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 14,
          },
          {
            "name": "ra_of_asc_node",
            "req": False,
            "type": "`$NUMBER`",
            "active": True,
            "index$": 15,
          },
          {
            "name": "rev_at_epoch",
            "req": False,
            "type": "`$INTEGER`",
            "active": True,
            "index$": 16,
          },
        ],
        "name": "gpn",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "example": "25544",
                      "kind": "query",
                      "name": "catnr",
                      "orig": "catnr",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "stations",
                      "kind": "query",
                      "name": "group",
                      "orig": "group",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "1998-067A",
                      "kind": "query",
                      "name": "intde",
                      "orig": "intde",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "example": "ISS",
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/NORAD/elements/gp.php",
                "parts": [
                  "NORAD",
                  "elements",
                  "gp.php",
                ],
                "select": {
                  "exist": [
                    "catnr",
                    "format",
                    "group",
                    "intde",
                    "name",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
