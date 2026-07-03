# CelestrakGpData Golang SDK Reference

Complete API reference for the CelestrakGpData Golang SDK.


## CelestrakGpDataSDK

### Constructor

```go
func NewCelestrakGpDataSDK(options map[string]any) *CelestrakGpDataSDK
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `map[string]any` | SDK configuration options. |
| `options["apikey"]` | `string` | API key for authentication. |
| `options["base"]` | `string` | Base URL for API requests. |
| `options["prefix"]` | `string` | URL prefix appended after base. |
| `options["suffix"]` | `string` | URL suffix appended after path. |
| `options["headers"]` | `map[string]any` | Custom headers for all requests. |
| `options["feature"]` | `map[string]any` | Feature configuration. |
| `options["system"]` | `map[string]any` | System overrides (e.g. custom fetch). |


### Static Methods

#### `Test() *CelestrakGpDataSDK`

No-arg convenience constructor for the common no-options test case.

```go
client := sdk.Test()
```

#### `TestSDK(testopts, sdkopts map[string]any) *CelestrakGpDataSDK`

Test client with options. Both arguments may be `nil`.

```go
client := sdk.TestSDK(testopts, sdkopts)
```


### Instance Methods

#### `Gpn(data map[string]any) CelestrakGpDataEntity`

Create a new `Gpn` entity instance. Pass `nil` for no initial data.

#### `OptionsMap() map[string]any`

Return a deep copy of the current SDK options.

#### `GetUtility() *Utility`

Return a copy of the SDK utility object.

#### `Direct(fetchargs map[string]any) (map[string]any, error)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `map[string]any` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `map[string]any` | Query string parameters. |
| `fetchargs["headers"]` | `map[string]any` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (maps are JSON-serialized). |
| `fetchargs["ctrl"]` | `map[string]any` | Control options (e.g. `map[string]any{"explain": true}`). |

**Returns:** `(map[string]any, error)`

#### `Prepare(fetchargs map[string]any) (map[string]any, error)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `Direct()`.

**Returns:** `(map[string]any, error)`


---

## GpnEntity

```go
gpn := client.Gpn(nil)
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `arg_of_pericenter` | ``$NUMBER`` | No |  |
| `bstar` | ``$NUMBER`` | No |  |
| `classification_type` | ``$STRING`` | No |  |
| `eccentricity` | ``$NUMBER`` | No |  |
| `element_set_no` | ``$INTEGER`` | No |  |
| `ephemeris_type` | ``$INTEGER`` | No |  |
| `epoch` | ``$STRING`` | No |  |
| `inclination` | ``$NUMBER`` | No |  |
| `mean_anomaly` | ``$NUMBER`` | No |  |
| `mean_motion` | ``$NUMBER`` | No |  |
| `mean_motion_ddot` | ``$NUMBER`` | No |  |
| `mean_motion_dot` | ``$NUMBER`` | No |  |
| `norad_cat_id` | ``$INTEGER`` | No |  |
| `object_id` | ``$STRING`` | No |  |
| `object_name` | ``$STRING`` | No |  |
| `ra_of_asc_node` | ``$NUMBER`` | No |  |
| `rev_at_epoch` | ``$INTEGER`` | No |  |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Gpn(nil).List(nil, nil)
```

### Common Methods

#### `Data(args ...any) any`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `Match(args ...any) any`

Get or set the entity match criteria. Works the same as `Data()`.

#### `Make() Entity`

Create a new `GpnEntity` instance with the same client and
options.

#### `GetName() string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```go
client := sdk.NewCelestrakGpDataSDK(map[string]any{
    "feature": map[string]any{
        "test": map[string]any{"active": true},
    },
})
```

