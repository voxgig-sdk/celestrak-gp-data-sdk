# CelestrakGpData Lua SDK Reference

Complete API reference for the CelestrakGpData Lua SDK.


## CelestrakGpDataSDK

### Constructor

```lua
local sdk = require("celestrak-gp-data_sdk")
local client = sdk.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `table` | SDK configuration options. |
| `options.apikey` | `string` | API key for authentication. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts, sdkopts)`

Create a test client with mock features active. Both arguments may be `nil`.

```lua
local client = sdk.test(nil, nil)
```


### Instance Methods

#### `Gpn(data)`

Create a new `Gpn` entity instance. Pass `nil` for no initial data.

#### `options_map() -> table`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs) -> table, err`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `"GET"`). |
| `fetchargs.params` | `table` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `table` | Query string parameters. |
| `fetchargs.headers` | `table` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (tables are JSON-serialized). |
| `fetchargs.ctrl` | `table` | Control options (e.g. `{ explain = true }`). |

**Returns:** `table, err`

#### `prepare(fetchargs) -> table, err`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `table, err`


---

## GpnEntity

```lua
local gpn = client:Gpn(nil)
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

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Gpn(nil):list(nil, nil)
```

### Common Methods

#### `data_get() -> table`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> table`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GpnEntity` instance with the same client and
options.

#### `get_name() -> string`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```lua
local client = sdk.new({
  feature = {
    test = { active = true },
  },
})
```

