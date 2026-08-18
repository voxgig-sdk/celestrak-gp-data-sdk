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
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'BSTAR',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'CLASSIFICATION_TYPE',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'ECCENTRICITY',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'ELEMENT_SET_NO',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'EPHEMERIS_TYPE',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'EPOCH',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'INCLINATION',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_ANOMALY',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_MOTION',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_MOTION_DDOT',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'MEAN_MOTION_DOT',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'NORAD_CAT_ID',
              'type' => '`$INTEGER`',
            ],
            [
              'name' => 'OBJECT_ID',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'OBJECT_NAME',
              'type' => '`$STRING`',
            ],
            [
              'name' => 'RA_OF_ASC_NODE',
              'type' => '`$NUMBER`',
            ],
            [
              'name' => 'REV_AT_EPOCH',
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
