-- CelestrakGpData SDK configuration

local function make_config()
  return {
    main = {
      name = "CelestrakGpData",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
      },
    },
    options = {
      base = "https://celestrak.org",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["gpn"] = {},
      },
    },
    entity = {
      ["gpn"] = {
        ["fields"] = {
          {
            ["active"] = true,
            ["name"] = "arg_of_pericenter",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 0,
          },
          {
            ["active"] = true,
            ["name"] = "bstar",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 1,
          },
          {
            ["active"] = true,
            ["name"] = "classification_type",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 2,
          },
          {
            ["active"] = true,
            ["name"] = "eccentricity",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 3,
          },
          {
            ["active"] = true,
            ["name"] = "element_set_no",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 4,
          },
          {
            ["active"] = true,
            ["name"] = "ephemeris_type",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 5,
          },
          {
            ["active"] = true,
            ["name"] = "epoch",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 6,
          },
          {
            ["active"] = true,
            ["name"] = "inclination",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 7,
          },
          {
            ["active"] = true,
            ["name"] = "mean_anomaly",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 8,
          },
          {
            ["active"] = true,
            ["name"] = "mean_motion",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 9,
          },
          {
            ["active"] = true,
            ["name"] = "mean_motion_ddot",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 10,
          },
          {
            ["active"] = true,
            ["name"] = "mean_motion_dot",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 11,
          },
          {
            ["active"] = true,
            ["name"] = "norad_cat_id",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 12,
          },
          {
            ["active"] = true,
            ["name"] = "object_id",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 13,
          },
          {
            ["active"] = true,
            ["name"] = "object_name",
            ["req"] = false,
            ["type"] = "`$STRING`",
            ["index$"] = 14,
          },
          {
            ["active"] = true,
            ["name"] = "ra_of_asc_node",
            ["req"] = false,
            ["type"] = "`$NUMBER`",
            ["index$"] = 15,
          },
          {
            ["active"] = true,
            ["name"] = "rev_at_epoch",
            ["req"] = false,
            ["type"] = "`$INTEGER`",
            ["index$"] = 16,
          },
        },
        ["name"] = "gpn",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["active"] = true,
                ["args"] = {
                  ["query"] = {
                    {
                      ["active"] = true,
                      ["example"] = "25544",
                      ["kind"] = "query",
                      ["name"] = "catnr",
                      ["orig"] = "catnr",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "json",
                      ["kind"] = "query",
                      ["name"] = "format",
                      ["orig"] = "format",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "stations",
                      ["kind"] = "query",
                      ["name"] = "group",
                      ["orig"] = "group",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "1998-067A",
                      ["kind"] = "query",
                      ["name"] = "intde",
                      ["orig"] = "intde",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["active"] = true,
                      ["example"] = "ISS",
                      ["kind"] = "query",
                      ["name"] = "name",
                      ["orig"] = "name",
                      ["reqd"] = false,
                      ["type"] = "`$STRING`",
                    },
                  },
                },
                ["method"] = "GET",
                ["orig"] = "/NORAD/elements/gp.php",
                ["parts"] = {
                  "NORAD",
                  "elements",
                  "gp.php",
                },
                ["select"] = {
                  ["exist"] = {
                    "catnr",
                    "format",
                    "group",
                    "intde",
                    "name",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
                ["index$"] = 0,
              },
            },
            ["key$"] = "list",
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
