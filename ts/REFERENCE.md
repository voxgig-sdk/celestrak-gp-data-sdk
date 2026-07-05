# CelestrakGpData TypeScript SDK Reference

Complete API reference for the CelestrakGpData TypeScript SDK.


## CelestrakGpDataSDK

### Constructor

```ts
new CelestrakGpDataSDK(options?: object)
```

Create a new SDK client instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `options` | `object` | SDK configuration options. |
| `options.base` | `string` | Base URL for API requests. |
| `options.prefix` | `string` | URL prefix appended after base. |
| `options.suffix` | `string` | URL suffix appended after path. |
| `options.headers` | `object` | Custom headers for all requests. |
| `options.feature` | `object` | Feature configuration. |
| `options.system` | `object` | System overrides (e.g. custom fetch). |


### Static Methods

#### `CelestrakGpDataSDK.test(testopts?, sdkopts?)`

Create a test client with mock features active.

```ts
const client = CelestrakGpDataSDK.test()
```

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `testopts` | `object` | Test feature options. |
| `sdkopts` | `object` | Additional SDK options merged with test defaults. |

**Returns:** `CelestrakGpDataSDK` instance in test mode.


### Instance Methods

#### `Gpn(data?: object)`

Create a new `Gpn` entity instance.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `data` | `object` | Initial entity data. |

**Returns:** `GpnEntity` instance.

#### `options()`

Return a deep copy of the current SDK options.

**Returns:** `object`

#### `utility()`

Return a copy of the SDK utility object.

**Returns:** `object`

#### `direct(fetchargs?: object)`

Make a direct HTTP request to any API endpoint.

**Parameters:**

| Name | Type | Description |
| --- | --- | --- |
| `fetchargs.path` | `string` | URL path with optional `{param}` placeholders. |
| `fetchargs.method` | `string` | HTTP method (default: `GET`). |
| `fetchargs.params` | `object` | Path parameter values for `{param}` substitution. |
| `fetchargs.query` | `object` | Query string parameters. |
| `fetchargs.headers` | `object` | Request headers (merged with defaults). |
| `fetchargs.body` | `any` | Request body (objects are JSON-serialized). |
| `fetchargs.ctrl` | `object` | Control options (e.g. `{ explain: true }`). |

**Returns:** `Promise<{ ok, status, headers, data } | Error>`

#### `prepare(fetchargs?: object)`

Prepare a fetch definition without sending the request. Accepts the
same parameters as `direct()`.

**Returns:** `Promise<{ url, method, headers, body } | Error>`

#### `tester(testopts?, sdkopts?)`

Alias for `CelestrakGpDataSDK.test()`.

**Returns:** `CelestrakGpDataSDK` instance in test mode.


---

## GpnEntity

```ts
const gpn = client.Gpn()
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

#### `list(match: object, ctrl?: object)`

List entities matching the given criteria. Returns an array.

```ts
const results = await client.Gpn().list()
```

### Common Methods

#### `data(data?: object)`

Get or set the entity data. When called with data, sets the entity's
internal data and returns the current data. When called without
arguments, returns a copy of the current data.

#### `match(match?: object)`

Get or set the entity match criteria. Works the same as `data()`.

#### `make()`

Create a new `GpnEntity` instance with the same client and
options.

#### `client()`

Return the parent `CelestrakGpDataSDK` instance.

#### `entopts()`

Return a copy of the entity options.


---

## Features

| Feature | Version | Description |
| --- | --- | --- |
| `test` | 0.0.1 | In-memory mock transport for testing without a live server |


Features are activated via the `feature` option:

```ts
const client = new CelestrakGpDataSDK({
  feature: {
    test: { active: true },
  }
})
```

