# CelestrakGpData SDK configuration

module CelestrakGpDataConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "CelestrakGpData",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
        },
      },
      "options" => {
        "base" => "https://celestrak.org",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "gpn" => {},
        },
      },
      "entity" => {
        "gpn" => {
          "fields" => [
            {
              "name" => "ARG_OF_PERICENTER",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "BSTAR",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "CLASSIFICATION_TYPE",
              "type" => "`$STRING`",
            },
            {
              "name" => "ECCENTRICITY",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "ELEMENT_SET_NO",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "EPHEMERIS_TYPE",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "EPOCH",
              "type" => "`$STRING`",
            },
            {
              "name" => "INCLINATION",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "MEAN_ANOMALY",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "MEAN_MOTION",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "MEAN_MOTION_DDOT",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "MEAN_MOTION_DOT",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "NORAD_CAT_ID",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "OBJECT_ID",
              "type" => "`$STRING`",
            },
            {
              "name" => "OBJECT_NAME",
              "type" => "`$STRING`",
            },
            {
              "name" => "RA_OF_ASC_NODE",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "REV_AT_EPOCH",
              "type" => "`$INTEGER`",
            },
          ],
          "name" => "gpn",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => "25544",
                        "kind" => "query",
                        "name" => "catnr",
                        "orig" => "catnr",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "json",
                        "kind" => "query",
                        "name" => "format",
                        "orig" => "format",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "stations",
                        "kind" => "query",
                        "name" => "group",
                        "orig" => "group",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "1998-067A",
                        "kind" => "query",
                        "name" => "intde",
                        "orig" => "intde",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => "ISS",
                        "kind" => "query",
                        "name" => "name",
                        "orig" => "name",
                        "type" => "`$STRING`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/NORAD/elements/gp.php",
                  "parts" => [
                    "NORAD",
                    "elements",
                    "gp.php",
                  ],
                  "select" => {
                    "exist" => [
                      "catnr",
                      "format",
                      "group",
                      "intde",
                      "name",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    CelestrakGpDataFeatures.make_feature(name)
  end
end
