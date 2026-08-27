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
fmt.Println(gpn.GetName()) // "gpn"
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ARG_OF_PERICENTER` | `float64` | No | Argument of perigee in degrees |
| `BSTAR` | `float64` | No | BSTAR drag term |
| `CLASSIFICATION_TYPE` | `string` | No | Classification (U=Unclassified, C=Classified, S=Secret) |
| `ECCENTRICITY` | `float64` | No | Orbital eccentricity |
| `ELEMENT_SET_NO` | `int` | No | Element set number |
| `EPHEMERIS_TYPE` | `int` | No | Ephemeris type |
| `EPOCH` | `string` | No | Epoch time of the orbital elements |
| `INCLINATION` | `float64` | No | Inclination in degrees |
| `MEAN_ANOMALY` | `float64` | No | Mean anomaly in degrees |
| `MEAN_MOTION` | `float64` | No | Mean motion in revolutions per day |
| `MEAN_MOTION_DDOT` | `float64` | No | Second derivative of mean motion |
| `MEAN_MOTION_DOT` | `float64` | No | First derivative of mean motion |
| `NORAD_CAT_ID` | `int` | No | NORAD catalog number |
| `OBJECT_ID` | `string` | No | International designator |
| `OBJECT_NAME` | `string` | No | Name of the space object |
| `RA_OF_ASC_NODE` | `float64` | No | Right ascension of ascending node in degrees |
| `REV_AT_EPOCH` | `int` | No | Revolution number at epoch |

### Operations

#### `List(reqmatch, ctrl map[string]any) (any, error)`

List entities matching the given criteria. Returns an array.

```go
results, err := client.Gpn(nil).List(nil, nil)
if err != nil {
    panic(err)
}
fmt.Println(results)
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

