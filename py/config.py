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
            "auth": {
                "prefix": "Bearer",
            },
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
            "active": True,
            "name": "arg_of_pericenter",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "bstar",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "classification_type",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "eccentricity",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "element_set_no",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "ephemeris_type",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "epoch",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "inclination",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "mean_anomaly",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "mean_motion",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "mean_motion_ddot",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "mean_motion_dot",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "norad_cat_id",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "object_id",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "object_name",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "ra_of_asc_node",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "rev_at_epoch",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 16,
          },
        ],
        "name": "gpn",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "active": True,
                "args": {
                  "query": [
                    {
                      "active": True,
                      "example": "25544",
                      "kind": "query",
                      "name": "catnr",
                      "orig": "catnr",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "json",
                      "kind": "query",
                      "name": "format",
                      "orig": "format",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "stations",
                      "kind": "query",
                      "name": "group",
                      "orig": "group",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "1998-067A",
                      "kind": "query",
                      "name": "intde",
                      "orig": "intde",
                      "reqd": False,
                      "type": "`$STRING`",
                    },
                    {
                      "active": True,
                      "example": "ISS",
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
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
                "index$": 0,
              },
            ],
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
