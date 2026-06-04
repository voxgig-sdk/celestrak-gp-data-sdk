<?php
declare(strict_types=1);

// CelestrakGpData SDK configuration

class CelestrakGpDataConfig
{
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
              'name' => 'arg_of_pericenter',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 0,
            ],
            [
              'name' => 'bstar',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 1,
            ],
            [
              'name' => 'classification_type',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 2,
            ],
            [
              'name' => 'eccentricity',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 3,
            ],
            [
              'name' => 'element_set_no',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 4,
            ],
            [
              'name' => 'ephemeris_type',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 5,
            ],
            [
              'name' => 'epoch',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 6,
            ],
            [
              'name' => 'inclination',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 7,
            ],
            [
              'name' => 'mean_anomaly',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 8,
            ],
            [
              'name' => 'mean_motion',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 9,
            ],
            [
              'name' => 'mean_motion_ddot',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 10,
            ],
            [
              'name' => 'mean_motion_dot',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 11,
            ],
            [
              'name' => 'norad_cat_id',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 12,
            ],
            [
              'name' => 'object_id',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 13,
            ],
            [
              'name' => 'object_name',
              'req' => false,
              'type' => '`$STRING`',
              'active' => true,
              'index$' => 14,
            ],
            [
              'name' => 'ra_of_asc_node',
              'req' => false,
              'type' => '`$NUMBER`',
              'active' => true,
              'index$' => 15,
            ],
            [
              'name' => 'rev_at_epoch',
              'req' => false,
              'type' => '`$INTEGER`',
              'active' => true,
              'index$' => 16,
            ],
          ],
          'name' => 'gpn',
          'op' => [
            'list' => [
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
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'json',
                        'kind' => 'query',
                        'name' => 'format',
                        'orig' => 'format',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'stations',
                        'kind' => 'query',
                        'name' => 'group',
                        'orig' => 'group',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => '1998-067A',
                        'kind' => 'query',
                        'name' => 'intde',
                        'orig' => 'intde',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                      [
                        'example' => 'ISS',
                        'kind' => 'query',
                        'name' => 'name',
                        'orig' => 'name',
                        'reqd' => false,
                        'type' => '`$STRING`',
                        'active' => true,
                      ],
                    ],
                  ],
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
                  'active' => true,
                  'index$' => 0,
                ],
              ],
              'input' => 'data',
              'key$' => 'list',
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
