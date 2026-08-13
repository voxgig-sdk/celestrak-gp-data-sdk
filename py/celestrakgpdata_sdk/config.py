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
            "active": True,
            "name": "ARG_OF_PERICENTER",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 0,
          },
          {
            "active": True,
            "name": "BSTAR",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 1,
          },
          {
            "active": True,
            "name": "CLASSIFICATION_TYPE",
            "req": False,
            "type": "`$STRING`",
            "index$": 2,
          },
          {
            "active": True,
            "name": "ECCENTRICITY",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 3,
          },
          {
            "active": True,
            "name": "ELEMENT_SET_NO",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 4,
          },
          {
            "active": True,
            "name": "EPHEMERIS_TYPE",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 5,
          },
          {
            "active": True,
            "name": "EPOCH",
            "req": False,
            "type": "`$STRING`",
            "index$": 6,
          },
          {
            "active": True,
            "name": "INCLINATION",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 7,
          },
          {
            "active": True,
            "name": "MEAN_ANOMALY",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 8,
          },
          {
            "active": True,
            "name": "MEAN_MOTION",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 9,
          },
          {
            "active": True,
            "name": "MEAN_MOTION_DDOT",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 10,
          },
          {
            "active": True,
            "name": "MEAN_MOTION_DOT",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 11,
          },
          {
            "active": True,
            "name": "NORAD_CAT_ID",
            "req": False,
            "type": "`$INTEGER`",
            "index$": 12,
          },
          {
            "active": True,
            "name": "OBJECT_ID",
            "req": False,
            "type": "`$STRING`",
            "index$": 13,
          },
          {
            "active": True,
            "name": "OBJECT_NAME",
            "req": False,
            "type": "`$STRING`",
            "index$": 14,
          },
          {
            "active": True,
            "name": "RA_OF_ASC_NODE",
            "req": False,
            "type": "`$NUMBER`",
            "index$": 15,
          },
          {
            "active": True,
            "name": "REV_AT_EPOCH",
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
                "kind": "http",
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
