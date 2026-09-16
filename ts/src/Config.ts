
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


// Per-feature plugin DEFINITIONS (voxgig/plugin `Definition` values), from
// the model's active plugin groups. A feature that takes a `plugins` option
// (secrets over sekreto) reads its own entry; a feature with no plugins has
// none. Named imports above make each definition statically reachable, so
// an SDK carries exactly the plugin modules its model selects — the same
// leanness the old side-effect registry imports bought, without a registry.
const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    // TODO: errors etc
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'CelestrakGpData',
        slug: "celestrak-gp-data",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
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
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://celestrak.org",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
      gpn: {
      },

    }
  }


  entity = {
    "gpn": {
      "fields": [
        {
          "name": "ARG_OF_PERICENTER",
          "short": "Argument of perigee in degrees",
          "type": "`$NUMBER`"
        },
        {
          "name": "BSTAR",
          "short": "BSTAR drag term",
          "type": "`$NUMBER`"
        },
        {
          "name": "CLASSIFICATION_TYPE",
          "short": "Classification (U=Unclassified, C=Classified, S=Secret)",
          "type": "`$STRING`"
        },
        {
          "name": "ECCENTRICITY",
          "short": "Orbital eccentricity",
          "type": "`$NUMBER`"
        },
        {
          "name": "ELEMENT_SET_NO",
          "short": "Element set number",
          "type": "`$INTEGER`"
        },
        {
          "name": "EPHEMERIS_TYPE",
          "short": "Ephemeris type",
          "type": "`$INTEGER`"
        },
        {
          "format": "date-time",
          "name": "EPOCH",
          "short": "Epoch time of the orbital elements",
          "type": "`$STRING`"
        },
        {
          "name": "INCLINATION",
          "short": "Inclination in degrees",
          "type": "`$NUMBER`"
        },
        {
          "name": "MEAN_ANOMALY",
          "short": "Mean anomaly in degrees",
          "type": "`$NUMBER`"
        },
        {
          "name": "MEAN_MOTION",
          "short": "Mean motion in revolutions per day",
          "type": "`$NUMBER`"
        },
        {
          "name": "MEAN_MOTION_DDOT",
          "short": "Second derivative of mean motion",
          "type": "`$NUMBER`"
        },
        {
          "name": "MEAN_MOTION_DOT",
          "short": "First derivative of mean motion",
          "type": "`$NUMBER`"
        },
        {
          "name": "NORAD_CAT_ID",
          "short": "NORAD catalog number",
          "type": "`$INTEGER`"
        },
        {
          "name": "OBJECT_ID",
          "short": "International designator",
          "type": "`$STRING`"
        },
        {
          "name": "OBJECT_NAME",
          "short": "Name of the space object",
          "type": "`$STRING`"
        },
        {
          "name": "RA_OF_ASC_NODE",
          "short": "Right ascension of ascending node in degrees",
          "type": "`$NUMBER`"
        },
        {
          "name": "REV_AT_EPOCH",
          "short": "Revolution number at epoch",
          "type": "`$INTEGER`"
        }
      ],
      "name": "gpn",
      "op": {
        "list": {
          "input": "data",
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
                    "type": "`$STRING`"
                  },
                  {
                    "example": "json",
                    "kind": "query",
                    "name": "format",
                    "orig": "format",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "stations",
                    "kind": "query",
                    "name": "group",
                    "orig": "group",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "1998-067A",
                    "kind": "query",
                    "name": "intde",
                    "orig": "intde",
                    "type": "`$STRING`"
                  },
                  {
                    "example": "ISS",
                    "kind": "query",
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`"
                  }
                ]
              },
              "kind": "http",
              "method": "GET",
              "orig": "/NORAD/elements/gp.php",
              "segments": [
                {
                  "lit": "NORAD"
                },
                {
                  "lit": "elements"
                },
                {
                  "lit": "gp.php"
                }
              ],
              "select": {
                "exist": [
                  "catnr",
                  "format",
                  "group",
                  "intde",
                  "name"
                ]
              },
              "transform": {
                "req": "`reqdata`",
                "res": "`body`"
              },
              "parts": [
                "NORAD",
                "elements",
                "gp.php"
              ]
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}

