# CelestrakGpData Python SDK Reference

Complete API reference for the CelestrakGpData Python SDK.


## CelestrakGpDataSDK

### Constructor

```python
from celestrakgpdata_sdk import CelestrakGpDataSDK

client = CelestrakGpDataSDK(options)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `dict` | SDK configuration options. |
| `options["base"]` | `str` | Base URL for API requests. |
| `options["prefix"]` | `str` | URL prefix appended after base. |
| `options["suffix"]` | `str` | URL suffix appended after path. |
| `options["headers"]` | `dict` | Custom headers for all requests. |
| `options["feature"]` | `dict` | Feature configuration. |
| `options["system"]` | `dict` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CelestrakGpDataSDK.test(testopts=None, sdkopts=None)`

Create a test client with mock features active. Both arguments may be `None`.

```python
client = CelestrakGpDataSDK.test()
```


### Instance Methods

#### `Gpn(data=None)`

Create a new `GpnEntity` instance. Pass `None` for no initial data.

#### `options_map() -> dict`

Return a deep copy of the current SDK options.

#### `get_utility() -> Utility`

Return a copy of the SDK utility object.

#### `direct(fetchargs=None) -> dict`

Make a direct HTTP request to any API endpoint. Returns a result `dict` with `ok`, `status`, `headers`, and `data` (or `err` on failure). This escape hatch never raises — branch on `result["ok"]`.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs["path"]` | `str` | URL path with optional `{param}` placeholders. |
| `fetchargs["method"]` | `str` | HTTP method (default: `"GET"`). |
| `fetchargs["params"]` | `dict` | Path parameter values. |
| `fetchargs["query"]` | `dict` | Query string parameters. |
| `fetchargs["headers"]` | `dict` | Request headers (merged with defaults). |
| `fetchargs["body"]` | `any` | Request body (dicts are JSON-serialized). |

**Returns:** `result_dict`

#### `prepare(fetchargs=None) -> dict`

Prepare a fetch definition without sending. Returns the `fetchdef` and raises on error.


---

## GpnEntity

```python
gpn = client.Gpn()
```

### Fields

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| `ARG_OF_PERICENTER` | `float` | No | Argument of perigee in degrees |
| `BSTAR` | `float` | No | BSTAR drag term |
| `CLASSIFICATION_TYPE` | `str` | No | Classification (U=Unclassified, C=Classified, S=Secret) |
| `ECCENTRICITY` | `float` | No | Orbital eccentricity |
| `ELEMENT_SET_NO` | `int` | No | Element set number |
| `EPHEMERIS_TYPE` | `int` | No | Ephemeris type |
| `EPOCH` | `str` | No | Epoch time of the orbital elements |
| `INCLINATION` | `float` | No | Inclination in degrees |
| `MEAN_ANOMALY` | `float` | No | Mean anomaly in degrees |
| `MEAN_MOTION` | `float` | No | Mean motion in revolutions per day |
| `MEAN_MOTION_DDOT` | `float` | No | Second derivative of mean motion |
| `MEAN_MOTION_DOT` | `float` | No | First derivative of mean motion |
| `NORAD_CAT_ID` | `int` | No | NORAD catalog number |
| `OBJECT_ID` | `str` | No | International designator |
| `OBJECT_NAME` | `str` | No | Name of the space object |
| `RA_OF_ASC_NODE` | `float` | No | Right ascension of ascending node in degrees |
| `REV_AT_EPOCH` | `int` | No | Revolution number at epoch |

### Operations

#### `list(reqmatch=None, ctrl=None) -> list`

List entities matching the given criteria. The match is optional — call `list()` with no argument to list all records. Returns a list and raises on error.

```python
results = client.Gpn().list()
for gpn in results:
    print(gpn)
```

### Common Methods

#### `data_get() -> dict`

Get the entity data.

#### `data_set(data)`

Set the entity data.

#### `match_get() -> dict`

Get the entity match criteria.

#### `match_set(match)`

Set the entity match criteria.

#### `make() -> Entity`

Create a new `GpnEntity` instance with the same options.

#### `get_name() -> str`

Return the entity name.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```python
client = CelestrakGpDataSDK({
    "feature": {
        "test": {"active": True},
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

