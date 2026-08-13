# CelestrakGpData PHP SDK Reference

Complete API reference for the CelestrakGpData PHP SDK.


## CelestrakGpDataSDK

### Constructor

```php
require_once __DIR__ . '/celestrakgpdata_sdk.php';

$client = new CelestrakGpDataSDK($options);
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$options` | `array` | SDK configuration options. |
| `$options["base"]` | `string` | Base URL for API requests. |
| `$options["prefix"]` | `string` | URL prefix appended after base. |
| `$options["suffix"]` | `string` | URL suffix appended after path. |
| `$options["headers"]` | `array` | Custom headers for all requests. |
| `$options["feature"]` | `array` | Feature configuration. |
| `$options["system"]` | `array` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CelestrakGpDataSDK::test($testopts = null, $sdkopts = null)`

Create a test client with mock features active. Both arguments may be `null`.

```php
$client = CelestrakGpDataSDK::test();
```


### Instance Methods

#### `Gpn($data = null)`

Create a new `GpnEntity` instance. Pass `null` for no initial data.

#### `options_map(): array`

Return a deep copy of the current SDK options.

#### `get_utility(): CelestrakGpDataUtility`

Return a copy of the SDK utility object.

#### `direct(array $fetchargs = []): array`

Make a direct HTTP request to any API endpoint. This is the raw-HTTP escape
hatch: it does **not** throw. It returns a result array
`["ok" => bool, "status" => int, "headers" => array, "data" => mixed]`, or
`["ok" => false, "err" => \Exception]` on failure. Branch on `$result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `$fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `$fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `$fetchargs["params"]` | `array` | Path parameter values for `{param}` substitution. |
| `$fetchargs["query"]` | `array` | Query string parameters. |
| `$fetchargs["headers"]` | `array` | Request headers (merged with defaults). |
| `$fetchargs["body"]` | `mixed` | Request body (arrays are JSON-serialized). |
| `$fetchargs["ctrl"]` | `array` | Control options. |

**Returns:** `array` — the result dict (see above); never throws.

#### `prepare(array $fetchargs = []): mixed`

Prepare a fetch definition without sending the request. Returns the
`$fetchdef` array. Throws on error.


---

## GpnEntity

```php
$gpn = $client->Gpn();
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ARG_OF_PERICENTER` | `float` | No |  |
| `BSTAR` | `float` | No |  |
| `CLASSIFICATION_TYPE` | `string` | No |  |
| `ECCENTRICITY` | `float` | No |  |
| `ELEMENT_SET_NO` | `int` | No |  |
| `EPHEMERIS_TYPE` | `int` | No |  |
| `EPOCH` | `string` | No |  |
| `INCLINATION` | `float` | No |  |
| `MEAN_ANOMALY` | `float` | No |  |
| `MEAN_MOTION` | `float` | No |  |
| `MEAN_MOTION_DDOT` | `float` | No |  |
| `MEAN_MOTION_DOT` | `float` | No |  |
| `NORAD_CAT_ID` | `int` | No |  |
| `OBJECT_ID` | `string` | No |  |
| `OBJECT_NAME` | `string` | No |  |
| `RA_OF_ASC_NODE` | `float` | No |  |
| `REV_AT_EPOCH` | `int` | No |  |

### Operations

#### `list(?array $reqmatch = null, ?array $ctrl = null): mixed`

List entities matching the given criteria (call with no argument to list all). Returns an array. Throws on error.

```php
$results = $client->Gpn()->list();
```

### Common Methods

#### `data_get(): array`

Get the entity data. Returns a copy of the current data.

#### `data_set($data): void`

Set the entity data.

#### `match_get(): array`

Get the entity match criteria.

#### `match_set($match): void`

Set the entity match criteria.

#### `make(): GpnEntity`

Create a new `GpnEntity` instance with the same client and
options.

#### `get_name(): string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```php
$client = new CelestrakGpDataSDK([
  "feature" => [
    "test" => ["active" => true],
  ],
]);
```

