# CelestrakGpData Ruby SDK Reference

Complete API reference for the CelestrakGpData Ruby SDK.


## CelestrakGpDataSDK

### Constructor

```ruby
require_relative 'CelestrakGpData_sdk'

client = CelestrakGpDataSDK.new(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `Hash` | SDK configuration options. |
| `options["base"]` | `String` | Base URL for API requests. |
| `options["prefix"]` | `String` | URL prefix appended after base. |
| `options["suffix"]` | `String` | URL suffix appended after path. |
| `options["headers"]` | `Hash` | Custom headers for all requests. |
| `options["feature"]` | `Hash` | Feature configuration. |
| `options["system"]` | `Hash` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CelestrakGpDataSDK.test(testopts = nil, sdkopts = nil)`

Create a test client with mock features active. Both arguments may be `nil`.

```ruby
client = CelestrakGpDataSDK.test
```


### Instance Methods

#### `Gpn(data = nil)`

Create a new `Gpn` entity instance. Pass `nil` for no initial data.

#### `options_map -> Hash`

Return a deep copy of the current SDK options.

#### `get_utility -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs = {}) -> Hash`

Make a direct HTTP request to any API endpoint. Returns a result hash
(`{ "ok" => ..., "status" => ..., "data" => ..., "err" => ... }`); it
does not raise — inspect `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `String` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `String` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `Hash` | Path parameter values for `{param}` substitution. |
| `fetchargs["query"]` | `Hash` | Query string parameters. |
| `fetchargs["headers"]` | `Hash` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (hashes are JSON-serialized). |
| `fetchargs["ctrl"]` | `Hash` | Control options (e.g. `{ "explain" => true }`). |

**Returns:** `Hash`

#### `prepare(fetchargs = {}) -> Hash`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`. Raises on error.

**Returns:** `Hash` (the fetch definition; raises on error)


---

## GpnEntity

```ruby
gpn = client.Gpn
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ARG_OF_PERICENTER` | `Float` | No | Argument of perigee in degrees |
| `BSTAR` | `Float` | No | BSTAR drag term |
| `CLASSIFICATION_TYPE` | `String` | No | Classification (U=Unclassified, C=Classified, S=Secret) |
| `ECCENTRICITY` | `Float` | No | Orbital eccentricity |
| `ELEMENT_SET_NO` | `Integer` | No | Element set number |
| `EPHEMERIS_TYPE` | `Integer` | No | Ephemeris type |
| `EPOCH` | `String` | No | Epoch time of the orbital elements |
| `INCLINATION` | `Float` | No | Inclination in degrees |
| `MEAN_ANOMALY` | `Float` | No | Mean anomaly in degrees |
| `MEAN_MOTION` | `Float` | No | Mean motion in revolutions per day |
| `MEAN_MOTION_DDOT` | `Float` | No | Second derivative of mean motion |
| `MEAN_MOTION_DOT` | `Float` | No | First derivative of mean motion |
| `NORAD_CAT_ID` | `Integer` | No | NORAD catalog number |
| `OBJECT_ID` | `String` | No | International designator |
| `OBJECT_NAME` | `String` | No | Name of the space object |
| `RA_OF_ASC_NODE` | `Float` | No | Right ascension of ascending node in degrees |
| `REV_AT_EPOCH` | `Integer` | No | Revolution number at epoch |

### Operations

#### `list(reqmatch = nil, ctrl = nil) -> Array`

List entities matching the given criteria (call with no argument to list all). Returns an array. Raises on error.

```ruby
results = client.Gpn.list
```

### Common Methods

#### `data_get -> Hash`

Get the entity data. Returns a copy of the current data.

#### `data_set(data)`

Set the entity data.

#### `match_get -> Hash`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make -> Entity`

Create a new `GpnEntity` instance with the same client and
options.

#### `get_name -> String`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ruby
client = CelestrakGpDataSDK.new({
  "feature" => {
    "test" => { "active" => true },
  },
})
```


### Configuring features

Each feature is inactive until switched on, and an SDK with no feature
configured does no feature work at all. Every option below keeps its default
unless you name it.

The array form of \`feature\` is significant: several features wrap the
transport, and the order you list them in is the order they nest.

#### `test`

In-memory mock transport for testing without a live server.

**Configuration**

| Option | Default |
|---|---|
| `active` | `false` |

Options above are those the model carries a default for. A feature may
also accept callback options — a `sink` to receive each record, for
instance — which have no default and are covered in the full feature
reference.

**Usage**

Set `feature.test.active` to true in the client options, and override any option above in the same entry. Every option keeps
its default unless you name it.

**Considerations**

- Attaches to pipeline hooks, not the transport, so activation order does
  not change what it observes.
- Installs the BASE transport that the wrapping features wrap, so it must be
  activated before them.
- Inactive by default: leaving it out costs nothing at runtime.

