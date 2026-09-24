# CelestrakGpData SDK configuration


# The sekreto plugin DEFINITIONS the model selected per feature, imported
# above by name from the modules the catalogue's active `plugin.def`
# entries declare. Handed to each feature (secrets builds its Sekreto
# with them): a provider kind not listed here is unknown to that SDK.
FEATURE_PLUGINS = {
}


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
    return {
        "main": {
            "name": "CelestrakGpData",
            "slug": "celestrak-gp-data",
            "version": "0.0.1",
            "target": "py",
        },
        "feature": {
            "ratelimit": {
        "options": {
          "active": False,
          "burst": 5,
          "rate": 5,
        },
        "optspec": {
          "now": "`$FUNCTION`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "retry": {
        "options": {
          "active": False,
          "factor": 2,
          "maxDelay": 2000,
          "minDelay": 50,
          "retries": 2,
          "statuses": [
            408,
            425,
            429,
            500,
            502,
            503,
            504,
          ],
        },
        "optspec": {
          "jitter": "`$BOOLEAN`",
          "sleep": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
      },
            "test": {
        "options": {
          "active": False,
        },
        "optspec": {
          "entity": "`$MAP`",
          "net": "`$MAP`",
        },
        "strict": False,
        "transport": "base",
      },
            "timeout": {
        "options": {
          "active": False,
          "ms": 30000,
        },
        "optspec": {
          "clearTimer": "`$FUNCTION`",
          "setTimer": "`$FUNCTION`",
        },
        "strict": False,
        "transport": "wrap",
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
            "name": "ARG_OF_PERICENTER",
            "title": "Arg Of Pericenter",
            "type": "`$NUMBER`",
            "short": "Argument of perigee in degrees",
          },
          {
            "name": "BSTAR",
            "title": "Bstar",
            "type": "`$NUMBER`",
            "short": "BSTAR drag term",
          },
          {
            "name": "CLASSIFICATION_TYPE",
            "title": "Classification Type",
            "type": "`$STRING`",
            "short": "Classification (U=Unclassified, C=Classified, S=Secret)",
          },
          {
            "name": "ECCENTRICITY",
            "title": "Eccentricity",
            "type": "`$NUMBER`",
            "short": "Orbital eccentricity",
          },
          {
            "name": "ELEMENT_SET_NO",
            "title": "Element Set No",
            "type": "`$INTEGER`",
            "short": "Element set number",
          },
          {
            "name": "EPHEMERIS_TYPE",
            "title": "Ephemeris Type",
            "type": "`$INTEGER`",
            "short": "Ephemeris type",
          },
          {
            "name": "EPOCH",
            "title": "Epoch",
            "type": "`$STRING`",
            "short": "Epoch time of the orbital elements",
            "format": "date-time",
          },
          {
            "name": "INCLINATION",
            "title": "Inclination",
            "type": "`$NUMBER`",
            "short": "Inclination in degrees",
          },
          {
            "name": "MEAN_ANOMALY",
            "title": "Mean Anomaly",
            "type": "`$NUMBER`",
            "short": "Mean anomaly in degrees",
          },
          {
            "name": "MEAN_MOTION",
            "title": "Mean Motion",
            "type": "`$NUMBER`",
            "short": "Mean motion in revolutions per day",
          },
          {
            "name": "MEAN_MOTION_DDOT",
            "title": "Mean Motion Ddot",
            "type": "`$NUMBER`",
            "short": "Second derivative of mean motion",
          },
          {
            "name": "MEAN_MOTION_DOT",
            "title": "Mean Motion Dot",
            "type": "`$NUMBER`",
            "short": "First derivative of mean motion",
          },
          {
            "name": "NORAD_CAT_ID",
            "title": "Norad Cat Id",
            "type": "`$INTEGER`",
            "short": "NORAD catalog number",
          },
          {
            "name": "OBJECT_ID",
            "title": "Object Id",
            "type": "`$STRING`",
            "short": "International designator",
          },
          {
            "name": "OBJECT_NAME",
            "title": "Object Name",
            "type": "`$STRING`",
            "short": "Name of the space object",
          },
          {
            "name": "RA_OF_ASC_NODE",
            "title": "Ra Of Asc Node",
            "type": "`$NUMBER`",
            "short": "Right ascension of ascending node in degrees",
          },
          {
            "name": "REV_AT_EPOCH",
            "title": "Rev At Epoch",
            "type": "`$INTEGER`",
            "short": "Revolution number at epoch",
          },
        ],
        "name": "gpn",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "kind": "http",
                "method": "GET",
                "orig": "/NORAD/elements/gp.php",
                "segments": [
                  {
                    "lit": "NORAD",
                  },
                  {
                    "lit": "elements",
                  },
                  {
                    "lit": "gp.php",
                  },
                ],
                "parts": [
                  "NORAD",
                  "elements",
                  "gp.php",
                ],
                "rename": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "args": {
                  "query": [
                    {
                      "name": "catnr",
                      "orig": "catnr",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "25544",
                    },
                    {
                      "name": "format",
                      "orig": "format",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "json",
                    },
                    {
                      "name": "group",
                      "orig": "group",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "stations",
                    },
                    {
                      "name": "intde",
                      "orig": "intde",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "1998-067A",
                    },
                    {
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                      "kind": "query",
                      "example": "ISS",
                    },
                  ],
                },
                "select": {
                  "exist": [
                    "catnr",
                    "format",
                    "group",
                    "intde",
                    "name",
                  ],
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
