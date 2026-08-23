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
                "test" => [
          'options' => [
            'active' => false,
          ],
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
              'short' => 'Argument of perigee in degrees',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'BSTAR',
              'short' => 'BSTAR drag term',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'CLASSIFICATION_TYPE',
              'short' => 'Classification (U=Unclassified, C=Classified, S=Secret)',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ECCENTRICITY',
              'short' => 'Orbital eccentricity',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'ELEMENT_SET_NO',
              'short' => 'Element set number',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'EPHEMERIS_TYPE',
              'short' => 'Ephemeris type',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'EPOCH',
              'short' => 'Epoch time of the orbital elements',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'INCLINATION',
              'short' => 'Inclination in degrees',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_ANOMALY',
              'short' => 'Mean anomaly in degrees',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_MOTION',
              'short' => 'Mean motion in revolutions per day',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_MOTION_DDOT',
              'short' => 'Second derivative of mean motion',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_MOTION_DOT',
              'short' => 'First derivative of mean motion',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'NORAD_CAT_ID',
              'short' => 'NORAD catalog number',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'OBJECT_ID',
              'short' => 'International designator',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'OBJECT_NAME',
              'short' => 'Name of the space object',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'RA_OF_ASC_NODE',
              'short' => 'Right ascension of ascending node in degrees',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'REV_AT_EPOCH',
              'short' => 'Revolution number at epoch',
              'type' => '`$INTEGER`',
            ],
          ],
          'name' => 'gpn',
          'op' => [
            'list' => [
              'input' => 'data',
              'name' => 'list',
              'points' => [
                [
                  'args' => [
                    'query' => [
                      [
                        'example' => '25544',
                        'kind' => 'query',
                        'name' => 'catnr',
                        'orig' => 'catnr',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'stations',
                        'kind' => 'query',
                        'name' => 'group',
                        'orig' => 'group',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => '1998-067A',
                        'kind' => 'query',
                        'name' => 'intde',
                        'orig' => 'intde',
                        'type' => '`$STRING`',
                      ],
                      [
                        'example' => 'ISS',
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'type' => '`$STRING`',
                      ],
                    ],
                  ],
                  'kind' => 'http',
                  'method' => 'GET',
                  'orig' => '/NORAD/elements/gp.php',
                  'parts' => [
                    'NORAD',
                    'elements',
                    'gp.php',
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
                  'transform' => [
                    'req' => '`reqdata`',
                    'res' => '`body`',
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
