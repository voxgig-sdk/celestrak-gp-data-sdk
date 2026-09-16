"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('GpnEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when CELESTRAK_GP_DATA_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('CELESTRAK_GP_DATA_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.CelestrakGpDataSDK.test();
        const ent = testsdk.Gpn();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.CELESTRAK_GP_DATA_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'gpn.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "ARG_OF_PERICENTER", "req": false, "short": "Argument of perigee in degrees", "type": "`$NUMBER`", "index$": 0 }, { "active": true, "name": "BSTAR", "req": false, "short": "BSTAR drag term", "type": "`$NUMBER`", "index$": 1 }, { "active": true, "name": "CLASSIFICATION_TYPE", "req": false, "short": "Classification (U=Unclassified, C=Classified, S=Secret)", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "ECCENTRICITY", "req": false, "short": "Orbital eccentricity", "type": "`$NUMBER`", "index$": 3 }, { "active": true, "name": "ELEMENT_SET_NO", "req": false, "short": "Element set number", "type": "`$INTEGER`", "index$": 4 }, { "active": true, "name": "EPHEMERIS_TYPE", "req": false, "short": "Ephemeris type", "type": "`$INTEGER`", "index$": 5 }, { "active": true, "format": "date-time", "name": "EPOCH", "req": false, "short": "Epoch time of the orbital elements", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "INCLINATION", "req": false, "short": "Inclination in degrees", "type": "`$NUMBER`", "index$": 7 }, { "active": true, "name": "MEAN_ANOMALY", "req": false, "short": "Mean anomaly in degrees", "type": "`$NUMBER`", "index$": 8 }, { "active": true, "name": "MEAN_MOTION", "req": false, "short": "Mean motion in revolutions per day", "type": "`$NUMBER`", "index$": 9 }, { "active": true, "name": "MEAN_MOTION_DDOT", "req": false, "short": "Second derivative of mean motion", "type": "`$NUMBER`", "index$": 10 }, { "active": true, "name": "MEAN_MOTION_DOT", "req": false, "short": "First derivative of mean motion", "type": "`$NUMBER`", "index$": 11 }, { "active": true, "name": "NORAD_CAT_ID", "req": false, "short": "NORAD catalog number", "type": "`$INTEGER`", "index$": 12 }, { "active": true, "name": "OBJECT_ID", "req": false, "short": "International designator", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "OBJECT_NAME", "req": false, "short": "Name of the space object", "type": "`$STRING`", "index$": 14 }, { "active": true, "name": "RA_OF_ASC_NODE", "req": false, "short": "Right ascension of ascending node in degrees", "type": "`$NUMBER`", "index$": 15 }, { "active": true, "name": "REV_AT_EPOCH", "req": false, "short": "Revolution number at epoch", "type": "`$INTEGER`", "index$": 16 }], "name": "gpn", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "25544", "kind": "query", "name": "catnr", "orig": "catnr", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": "json", "kind": "query", "name": "format", "orig": "format", "reqd": false, "type": "`$STRING`", "index$": 1 }, { "active": true, "example": "stations", "kind": "query", "name": "group", "orig": "group", "reqd": false, "type": "`$STRING`", "index$": 2 }, { "active": true, "example": "1998-067A", "kind": "query", "name": "intde", "orig": "intde", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": "ISS", "kind": "query", "name": "name", "orig": "name", "reqd": false, "type": "`$STRING`", "index$": 4 }] }, "contract": { "id": "GET /NORAD/elements/gp.php", "json": "{\"operationId\":\"getGPData\",\"parameters\":[{\"description\":\"NORAD catalog number(s) for the space object(s). Multiple catalog numbers can be specified.\",\"example\":\"25544\",\"in\":\"query\",\"name\":\"CATNR\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"International designator(s) for the space object(s). Format: YYYY-NNNP where YYYY is year, NNN is launch number, and P is piece.\",\"example\":\"1998-067A\",\"in\":\"query\",\"name\":\"INTDES\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Name(s) of the space object(s) to retrieve orbital data for.\",\"example\":\"ISS\",\"in\":\"query\",\"name\":\"NAME\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Predefined group name to retrieve orbital data for multiple objects in a category (e.g., 'stations', 'visual', 'active', 'analyst', 'weather', 'noaa', 'goes', 'resource', 'sarsat', 'dmc', 'tdrss', 'argos', 'planet', 'spire', 'geo', 'intelsat', 'ses', 'iridium', 'iridium-NEXT', 'starlink', 'orbcomm', 'globalstar', 'amateur', 'x-comm', 'other-comm', 'gorizont', 'raduga', 'molniya', 'gnss', 'gps-ops', 'glo-ops', 'galileo', 'beidou', 'sbas', 'nnss', 'musson', 'science', 'geodetic', 'engineering', 'education', 'military', 'radar', 'cubesat', 'other').\",\"example\":\"stations\",\"in\":\"query\",\"name\":\"GROUP\",\"required\":false,\"schema\":{\"enum\":[\"stations\",\"visual\",\"active\",\"analyst\",\"weather\",\"noaa\",\"goes\",\"resource\",\"sarsat\",\"dmc\",\"tdrss\",\"argos\",\"planet\",\"spire\",\"geo\",\"intelsat\",\"ses\",\"iridium\",\"iridium-NEXT\",\"starlink\",\"orbcomm\",\"globalstar\",\"amateur\",\"x-comm\",\"other-comm\",\"gorizont\",\"raduga\",\"molniya\",\"gnss\",\"gps-ops\",\"glo-ops\",\"galileo\",\"beidou\",\"sbas\",\"nnss\",\"musson\",\"science\",\"geodetic\",\"engineering\",\"education\",\"military\",\"radar\",\"cubesat\",\"other\"],\"type\":\"string\"}},{\"description\":\"Output format for the orbital data. TLE is the traditional Two-Line Element format, 3LE includes the object name, XML provides structured XML output, JSON provides JSON output, CSV provides comma-separated values, and KVN provides Consultative Committee for Space Data Systems (CCSDS) Key-Value Notation format.\",\"example\":\"json\",\"in\":\"query\",\"name\":\"FORMAT\",\"required\":false,\"schema\":{\"default\":\"tle\",\"enum\":[\"tle\",\"3le\",\"xml\",\"json\",\"csv\",\"kvn\"],\"type\":\"string\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"ARG_OF_PERICENTER\":12.3456,\"BSTAR\":0.000012345,\"CLASSIFICATION_TYPE\":\"U\",\"ECCENTRICITY\":0.0001234,\"ELEMENT_SET_NO\":999,\"EPHEMERIS_TYPE\":0,\"EPOCH\":\"2024-01-01T12:00:00.000000\",\"INCLINATION\":51.64,\"MEAN_ANOMALY\":123.4567,\"MEAN_MOTION\":15.50103472,\"MEAN_MOTION_DDOT\":0,\"MEAN_MOTION_DOT\":0.00012345,\"NORAD_CAT_ID\":25544,\"OBJECT_ID\":\"1998-067A\",\"OBJECT_NAME\":\"ISS (ZARYA)\",\"RA_OF_ASC_NODE\":123.4567,\"REV_AT_EPOCH\":12345}],\"schema\":{\"items\":{\"properties\":{\"ARG_OF_PERICENTER\":{\"description\":\"Argument of perigee in degrees\",\"type\":\"number\"},\"BSTAR\":{\"description\":\"BSTAR drag term\",\"type\":\"number\"},\"CLASSIFICATION_TYPE\":{\"description\":\"Classification (U=Unclassified, C=Classified, S=Secret)\",\"type\":\"string\"},\"ECCENTRICITY\":{\"description\":\"Orbital eccentricity\",\"type\":\"number\"},\"ELEMENT_SET_NO\":{\"description\":\"Element set number\",\"type\":\"integer\"},\"EPHEMERIS_TYPE\":{\"description\":\"Ephemeris type\",\"type\":\"integer\"},\"EPOCH\":{\"description\":\"Epoch time of the orbital elements\",\"format\":\"date-time\",\"type\":\"string\"},\"INCLINATION\":{\"description\":\"Inclination in degrees\",\"type\":\"number\"},\"MEAN_ANOMALY\":{\"description\":\"Mean anomaly in degrees\",\"type\":\"number\"},\"MEAN_MOTION\":{\"description\":\"Mean motion in revolutions per day\",\"type\":\"number\"},\"MEAN_MOTION_DDOT\":{\"description\":\"Second derivative of mean motion\",\"type\":\"number\"},\"MEAN_MOTION_DOT\":{\"description\":\"First derivative of mean motion\",\"type\":\"number\"},\"NORAD_CAT_ID\":{\"description\":\"NORAD catalog number\",\"type\":\"integer\"},\"OBJECT_ID\":{\"description\":\"International designator\",\"type\":\"string\"},\"OBJECT_NAME\":{\"description\":\"Name of the space object\",\"type\":\"string\"},\"RA_OF_ASC_NODE\":{\"description\":\"Right ascension of ascending node in degrees\",\"type\":\"number\"},\"REV_AT_EPOCH\":{\"description\":\"Revolution number at epoch\",\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"application/xml\":{\"schema\":{\"properties\":{\"omm\":{\"items\":{\"properties\":{\"ARG_OF_PERICENTER\":{\"type\":\"number\"},\"BSTAR\":{\"type\":\"number\"},\"CLASSIFICATION_TYPE\":{\"type\":\"string\"},\"ECCENTRICITY\":{\"type\":\"number\"},\"ELEMENT_SET_NO\":{\"type\":\"string\"},\"EPOCH\":{\"format\":\"date-time\",\"type\":\"string\"},\"INCLINATION\":{\"type\":\"number\"},\"MEAN_ANOMALY\":{\"type\":\"number\"},\"MEAN_MOTION\":{\"type\":\"number\"},\"MEAN_MOTION_DDOT\":{\"type\":\"number\"},\"MEAN_MOTION_DOT\":{\"type\":\"number\"},\"NORAD_CAT_ID\":{\"type\":\"string\"},\"OBJECT_ID\":{\"type\":\"string\"},\"OBJECT_NAME\":{\"type\":\"string\"},\"RA_OF_ASC_NODE\":{\"type\":\"number\"},\"REV_AT_EPOCH\":{\"type\":\"integer\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\",\"xml\":{\"name\":\"ndm\"}}},\"text/csv\":{\"schema\":{\"description\":\"CSV formatted orbital data\",\"type\":\"string\"}},\"text/plain\":{\"example\":\"ISS (ZARYA)\\n1 25544U 98067A   24001.50000000  .00012345  00000-0  12345-3 0  9999\\n2 25544  51.6400 123.4567 0001234  12.3456 123.4567 15.12345678123456\",\"schema\":{\"description\":\"TLE or 3LE formatted orbital data\",\"type\":\"string\"}}},\"description\":\"Successful response with GP orbital data\"},\"400\":{\"content\":{\"text/plain\":{\"schema\":{\"example\":\"Invalid query parameters\",\"type\":\"string\"}}},\"description\":\"Bad request - Invalid parameters provided\"},\"404\":{\"content\":{\"text/plain\":{\"schema\":{\"example\":\"No data found for the specified object\",\"type\":\"string\"}}},\"description\":\"Not found - No data found for the specified query\"},\"500\":{\"content\":{\"text/plain\":{\"schema\":{\"example\":\"Internal server error\",\"type\":\"string\"}}},\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/NORAD/elements/gp.php", "segments": [{ "lit": "NORAD" }, { "lit": "elements" }, { "lit": "gp.php" }], "select": { "exist": ["catnr", "format", "group", "intde", "name"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "gpn", "name__orig": "gpn", "Name": "Gpn", "name_": "gpn", "name-": "gpn", "NAME": "GPN", "index$": 0 }, { "active": true, "entity": "gpn", "key$": "BasicGpnFlow", "kind": "basic", "name": "BasicGpnFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "gpn_ref01" } }], "index$": 0 }] }, 'Gpn');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let gpn_ref01_data = Object.values(setup.data.existing.gpn)[0];
        // LIST
        const gpn_ref01_ent = client.Gpn();
        const gpn_ref01_match = {};
        const gpn_ref01_list = (await gpn_ref01_ent.list(gpn_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/gpn/GpnTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.CelestrakGpDataSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['gpn01', 'gpn02', 'gpn03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'CELESTRAK_GP_DATA_TEST_GPN_ENTID': idmap,
        'CELESTRAK_GP_DATA_TEST_LIVE': 'FALSE',
        'CELESTRAK_GP_DATA_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['CELESTRAK_GP_DATA_TEST_GPN_ENTID'];
    const live = 'TRUE' === env.CELESTRAK_GP_DATA_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['CELESTRAK_GP_DATA_TEST_GPN_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.CelestrakGpDataSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.CELESTRAK_GP_DATA_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=GpnEntity.test.js.map