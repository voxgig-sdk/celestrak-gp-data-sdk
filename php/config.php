<?php
declare(strict_types=1);

// CelestrakGpData SDK configuration

class CelestrakGpDataConfig
{
    /** @var array<string,mixed>|null */
    private static ?array $shared_config = null;

    /**
     * Return the process-wide config, built once on first use. The SDK reads
     * the config on every request and never writes to it, so one instance is
     * shared by every client rather than rebuilt per client.
     *
     * PHP arrays are copy-on-write, so callers that do mutate the result get
     * their own copy and cannot disturb the shared one.
     */
    public static function shared_config(): array
    {
        if (self::$shared_config === null) {
            self::$shared_config = self::make_config();
        }
        return self::$shared_config;
    }

    /**
     * Build a fresh, fully materialised config array. Every call rebuilds the
     * whole structure, so prefer shared_config unless you need a private copy.
     */
    public static function make_config(): array
    {
        return [
            "main" => [
                "name" => "CelestrakGpData",
                "slug" => "celestrak-gp-data",
                "version" => "0.0.1",
                "target" => "php",
            ],
            "feature" => [
                "ratelimit" => [
          'options' => [
            'active' => false,
            'burst' => 5,
            'rate' => 5,
          ],
          'optspec' => [
            'now' => '`$FUNCTION`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "retry" => [
          'options' => [
            'active' => false,
            'factor' => 2,
            'maxDelay' => 2000,
            'minDelay' => 50,
            'retries' => 2,
            'statuses' => [
              408,
              425,
              429,
              500,
              502,
              503,
              504,
            ],
          ],
          'optspec' => [
            'jitter' => '`$BOOLEAN`',
            'sleep' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
                "test" => [
          'options' => [
            'active' => false,
          ],
          'optspec' => [
            'entity' => '`$MAP`',
            'net' => '`$MAP`',
          ],
          'strict' => false,
          'transport' => 'base',
        ],
                "timeout" => [
          'options' => [
            'active' => false,
            'ms' => 30000,
          ],
          'optspec' => [
            'clearTimer' => '`$FUNCTION`',
            'setTimer' => '`$FUNCTION`',
          ],
          'strict' => false,
          'transport' => 'wrap',
        ],
            ],
            "options" => [
                "base" => "https://celestrak.org",
                "headers" => [
          'content-type' => 'application/json',
        ],
                "entity" => [
                    "gpn" => [],
                ],
            ],
            "entity" => [
        'gpn' => [
          'fields' => [
            [
              'name' => 'ARG_OF_PERICENTER',
              'title' => 'Arg Of Pericenter',
              'type' => '`$NUMBER`',
              'short' => 'Argument of perigee in degrees',
            ],
            [
              'name' => 'BSTAR',
              'title' => 'Bstar',
              'type' => '`$NUMBER`',
              'short' => 'BSTAR drag term',
            ],
            [
              'name' => 'CLASSIFICATION_TYPE',
              'title' => 'Classification Type',
              'type' => '`$STRING`',
              'short' => 'Classification (U=Unclassified, C=Classified, S=Secret)',
            ],
            [
              'name' => 'ECCENTRICITY',
              'title' => 'Eccentricity',
              'type' => '`$NUMBER`',
              'short' => 'Orbital eccentricity',
            ],
            [
              'name' => 'ELEMENT_SET_NO',
              'title' => 'Element Set No',
              'type' => '`$INTEGER`',
              'short' => 'Element set number',
            ],
            [
              'name' => 'EPHEMERIS_TYPE',
              'title' => 'Ephemeris Type',
              'type' => '`$INTEGER`',
              'short' => 'Ephemeris type',
            ],
            [
              'name' => 'EPOCH',
              'title' => 'Epoch',
              'type' => '`$STRING`',
              'short' => 'Epoch time of the orbital elements',
              'format' => 'date-time',
            ],
            [
              'name' => 'INCLINATION',
              'title' => 'Inclination',
              'type' => '`$NUMBER`',
              'short' => 'Inclination in degrees',
            ],
            [
              'name' => 'MEAN_ANOMALY',
              'title' => 'Mean Anomaly',
              'type' => '`$NUMBER`',
              'short' => 'Mean anomaly in degrees',
            ],
            [
              'name' => 'MEAN_MOTION',
              'title' => 'Mean Motion',
              'type' => '`$NUMBER`',
              'short' => 'Mean motion in revolutions per day',
            ],
            [
              'name' => 'MEAN_MOTION_DDOT',
              'title' => 'Mean Motion Ddot',
              'type' => '`$NUMBER`',
              'short' => 'Second derivative of mean motion',
            ],
            [
              'name' => 'MEAN_MOTION_DOT',
              'title' => 'Mean Motion Dot',
              'type' => '`$NUMBER`',
              'short' => 'First derivative of mean motion',
            ],
            [
              'name' => 'NORAD_CAT_ID',
              'title' => 'Norad Cat Id',
              'type' => '`$INTEGER`',
              'short' => 'NORAD catalog number',
            ],
            [
              'name' => 'OBJECT_ID',
              'title' => 'Object Id',
              'type' => '`$STRING`',
              'short' => 'International designator',
            ],
            [
              'name' => 'OBJECT_NAME',
              'title' => 'Object Name',
              'type' => '`$STRING`',
              'short' => 'Name of the space object',
            ],
            [
              'name' => 'RA_OF_ASC_NODE',
              'title' => 'Ra Of Asc Node',
              'type' => '`$NUMBER`',
              'short' => 'Right ascension of ascending node in degrees',
            ],
            [
              'name' => 'REV_AT_EPOCH',
              'title' => 'Rev At Epoch',
              'type' => '`$INTEGER`',
              'short' => 'Revolution number at epoch',
            ],
          ],
          'name' => 'gpn',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/NORAD/elements/gp.php',
                  'segments' => [
                    [
                      'lit' => 'NORAD',
                    ],
                    [
                      'lit' => 'elements',
                    ],
                    [
                      'lit' => 'gp.php',
                    ],
                  ],
                  'parts' => [
                    'NORAD',
                    'elements',
                    'gp.php',
                  ],
                  'rename' => [],
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
                  ],
                  'args' => [
                    'query' => [
                      [
                        'name' => 'catnr',
                        'orig' => 'catnr',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '25544',
                      ],
                      [
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'json',
                      ],
                      [
                        'name' => 'group',
                        'orig' => 'group',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'stations',
                      ],
                      [
                        'name' => 'intde',
                        'orig' => 'intde',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => '1998-067A',
                      ],
                      [
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                        'kind' => 'query',
                        'example' => 'ISS',
                      ],
                    ],
                  ],
                  'select' => [
                    'exist' => [
                      'catnr',
                      'format',
                      'group',
                      'intde',
                      'name',
                    ],
                  ],
                ],
              ],
            ],
          ],
          'relations' => [
            'ancestors' => [],
          ],
        ],
      ],
        ];
    }


    public static function make_feature(string $name)
    {
        require_once __DIR__ . '/features.php';
        return CelestrakGpDataFeatures::make_feature($name);
    }
}
