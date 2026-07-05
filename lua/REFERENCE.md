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
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `table` | Custom headers for all requests. |
| `options.feature` | `table` | Feature configuration. |
| `options.system` | `table` | System overrides (e.g. custom fetch). |


### Static Methods

#### `sdk.test(testopts?, sdkopts?)`

Create a test client with mock features active. Both arguments are optional.

```lua
local client = sdk.test()
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
| `arg_of_pericenter` | `number` | No |  |
| `bstar` | `number` | No |  |
| `classification_type` | `string` | No |  |
| `eccentricity` | `number` | No |  |
| `element_set_no` | `number` | No |  |
| `ephemeris_type` | `number` | No |  |
| `epoch` | `string` | No |  |
| `inclination` | `number` | No |  |
| `mean_anomaly` | `number` | No |  |
| `mean_motion` | `number` | No |  |
| `mean_motion_ddot` | `number` | No |  |
| `mean_motion_dot` | `number` | No |  |
| `norad_cat_id` | `number` | No |  |
| `object_id` | `string` | No |  |
| `object_name` | `string` | No |  |
| `ra_of_asc_node` | `number` | No |  |
| `rev_at_epoch` | `number` | No |  |

### Operations

#### `list(reqmatch, ctrl) -> any, err`

List entities matching the given criteria. Returns an array.

```lua
local results, err = client:Gpn():list()
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

