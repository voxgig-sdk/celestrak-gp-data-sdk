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
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "ARG_OF_PERICENTER": { "a": true, "h": "Arg Of Pericenter", "n": "ARG_OF_PERICENTER", "r": false, "sh": "Argument of perigee in degrees", "t": "`$NUMBER`", "key$": "ARG_OF_PERICENTER", "index$": 0 }, "BSTAR": { "a": true, "h": "Bstar", "n": "BSTAR", "r": false, "sh": "BSTAR drag term", "t": "`$NUMBER`", "key$": "BSTAR", "index$": 1 }, "CLASSIFICATION_TYPE": { "a": true, "h": "Classification Type", "n": "CLASSIFICATION_TYPE", "r": false, "sh": "Classification (U=Unclassified, C=Classified, S=Secret)", "t": "`$STRING`", "key$": "CLASSIFICATION_TYPE", "index$": 2 }, "ECCENTRICITY": { "a": true, "h": "Eccentricity", "n": "ECCENTRICITY", "r": false, "sh": "Orbital eccentricity", "t": "`$NUMBER`", "key$": "ECCENTRICITY", "index$": 3 }, "ELEMENT_SET_NO": { "a": true, "h": "Element Set No", "n": "ELEMENT_SET_NO", "r": false, "sh": "Element set number", "t": "`$INTEGER`", "key$": "ELEMENT_SET_NO", "index$": 4 }, "EPHEMERIS_TYPE": { "a": true, "h": "Ephemeris Type", "n": "EPHEMERIS_TYPE", "r": false, "sh": "Ephemeris type", "t": "`$INTEGER`", "key$": "EPHEMERIS_TYPE", "index$": 5 }, "EPOCH": { "a": true, "fo": "date-time", "h": "Epoch", "n": "EPOCH", "r": false, "sh": "Epoch time of the orbital elements", "t": "`$STRING`", "key$": "EPOCH", "index$": 6 }, "INCLINATION": { "a": true, "h": "Inclination", "n": "INCLINATION", "r": false, "sh": "Inclination in degrees", "t": "`$NUMBER`", "key$": "INCLINATION", "index$": 7 }, "MEAN_ANOMALY": { "a": true, "h": "Mean Anomaly", "n": "MEAN_ANOMALY", "r": false, "sh": "Mean anomaly in degrees", "t": "`$NUMBER`", "key$": "MEAN_ANOMALY", "index$": 8 }, "MEAN_MOTION": { "a": true, "h": "Mean Motion", "n": "MEAN_MOTION", "r": false, "sh": "Mean motion in revolutions per day", "t": "`$NUMBER`", "key$": "MEAN_MOTION", "index$": 9 }, "MEAN_MOTION_DDOT": { "a": true, "h": "Mean Motion Ddot", "n": "MEAN_MOTION_DDOT", "r": false, "sh": "Second derivative of mean motion", "t": "`$NUMBER`", "key$": "MEAN_MOTION_DDOT", "index$": 10 }, "MEAN_MOTION_DOT": { "a": true, "h": "Mean Motion Dot", "n": "MEAN_MOTION_DOT", "r": false, "sh": "First derivative of mean motion", "t": "`$NUMBER`", "key$": "MEAN_MOTION_DOT", "index$": 11 }, "NORAD_CAT_ID": { "a": true, "h": "Norad Cat Id", "n": "NORAD_CAT_ID", "r": false, "sh": "NORAD catalog number", "t": "`$INTEGER`", "key$": "NORAD_CAT_ID", "index$": 12 }, "OBJECT_ID": { "a": true, "h": "Object Id", "n": "OBJECT_ID", "r": false, "sh": "International designator", "t": "`$STRING`", "key$": "OBJECT_ID", "index$": 13 }, "OBJECT_NAME": { "a": true, "h": "Object Name", "n": "OBJECT_NAME", "r": false, "sh": "Name of the space object", "t": "`$STRING`", "key$": "OBJECT_NAME", "index$": 14 }, "RA_OF_ASC_NODE": { "a": true, "h": "Ra Of Asc Node", "n": "RA_OF_ASC_NODE", "r": false, "sh": "Right ascension of ascending node in degrees", "t": "`$NUMBER`", "key$": "RA_OF_ASC_NODE", "index$": 15 }, "REV_AT_EPOCH": { "a": true, "h": "Rev At Epoch", "n": "REV_AT_EPOCH", "r": false, "sh": "Revolution number at epoch", "t": "`$INTEGER`", "key$": "REV_AT_EPOCH", "index$": 16 } }, "name": "gpn", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /NORAD/elements/gp.php", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": "25544", "k": "query", "n": "catnr", "or": "catnr", "r": false, "t": "`$STRING`", "index$": 0 }, { "a": true, "ex": "json", "k": "query", "n": "format", "or": "format", "r": false, "t": "`$STRING`", "index$": 1 }, { "a": true, "ex": "stations", "k": "query", "n": "group", "or": "group", "r": false, "t": "`$STRING`", "index$": 2 }, { "a": true, "ex": "1998-067A", "k": "query", "n": "intde", "or": "intde", "r": false, "t": "`$STRING`", "index$": 3 }, { "a": true, "ex": "ISS", "k": "query", "n": "name", "or": "name", "r": false, "t": "`$STRING`", "index$": 4 }] }, "k": "http", "m": "GET", "o": "/NORAD/elements/gp.php", "q": { "exist": ["catnr", "format", "group", "intde", "name"] }, "r": {}, "s": [{ "lit": "NORAD" }, { "lit": "elements" }, { "lit": "gp.php" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "gpn", "name__orig": "gpn", "Name": "Gpn", "name_": "gpn", "name-": "gpn", "NAME": "GPN", "index$": 0 }, { "active": true, "entity": "gpn", "key$": "BasicGpnFlow", "kind": "basic", "name": "BasicGpnFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "gpn_ref01" } }], "index$": 0 }] }, 'Gpn', { "GET /NORAD/elements/gp.php": { "protocol": "http", "operationId": "getGPData", "responses": { "200": { "description": "Successful response with GP orbital data", "content": { "text/plain": { "schema": { "type": "string", "description": "TLE or 3LE formatted orbital data" }, "example": "ISS (ZARYA)\n1 25544U 98067A   24001.50000000  .00012345  00000-0  12345-3 0  9999\n2 25544  51.6400 123.4567 0001234  12.3456 123.4567 15.12345678123456" }, "application/xml": { "schema": { "type": "object", "xml": { "name": "ndm" }, "properties": { "omm": { "type": "array", "items": { "type": "object", "properties": { "OBJECT_NAME": { "type": "string" }, "OBJECT_ID": { "type": "string" }, "EPOCH": { "type": "string", "format": "date-time" }, "MEAN_MOTION": { "type": "number" }, "ECCENTRICITY": { "type": "number" }, "INCLINATION": { "type": "number" }, "RA_OF_ASC_NODE": { "type": "number" }, "ARG_OF_PERICENTER": { "type": "number" }, "MEAN_ANOMALY": { "type": "number" }, "NORAD_CAT_ID": { "type": "string" }, "CLASSIFICATION_TYPE": { "type": "string" }, "ELEMENT_SET_NO": { "type": "string" }, "REV_AT_EPOCH": { "type": "integer" }, "BSTAR": { "type": "number" }, "MEAN_MOTION_DOT": { "type": "number" }, "MEAN_MOTION_DDOT": { "type": "number" } } } } } } }, "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "OBJECT_NAME": { "type": "string", "description": "Name of the space object", "key$": "OBJECT_NAME" }, "OBJECT_ID": { "type": "string", "description": "International designator", "key$": "OBJECT_ID" }, "EPOCH": { "type": "string", "format": "date-time", "description": "Epoch time of the orbital elements", "key$": "EPOCH" }, "MEAN_MOTION": { "type": "number", "description": "Mean motion in revolutions per day", "key$": "MEAN_MOTION" }, "ECCENTRICITY": { "type": "number", "description": "Orbital eccentricity", "key$": "ECCENTRICITY" }, "INCLINATION": { "type": "number", "description": "Inclination in degrees", "key$": "INCLINATION" }, "RA_OF_ASC_NODE": { "type": "number", "description": "Right ascension of ascending node in degrees", "key$": "RA_OF_ASC_NODE" }, "ARG_OF_PERICENTER": { "type": "number", "description": "Argument of perigee in degrees", "key$": "ARG_OF_PERICENTER" }, "MEAN_ANOMALY": { "type": "number", "description": "Mean anomaly in degrees", "key$": "MEAN_ANOMALY" }, "EPHEMERIS_TYPE": { "type": "integer", "description": "Ephemeris type", "key$": "EPHEMERIS_TYPE" }, "CLASSIFICATION_TYPE": { "type": "string", "description": "Classification (U=Unclassified, C=Classified, S=Secret)", "key$": "CLASSIFICATION_TYPE" }, "NORAD_CAT_ID": { "type": "integer", "description": "NORAD catalog number", "key$": "NORAD_CAT_ID" }, "ELEMENT_SET_NO": { "type": "integer", "description": "Element set number", "key$": "ELEMENT_SET_NO" }, "REV_AT_EPOCH": { "type": "integer", "description": "Revolution number at epoch", "key$": "REV_AT_EPOCH" }, "BSTAR": { "type": "number", "description": "BSTAR drag term", "key$": "BSTAR" }, "MEAN_MOTION_DOT": { "type": "number", "description": "First derivative of mean motion", "key$": "MEAN_MOTION_DOT" }, "MEAN_MOTION_DDOT": { "type": "number", "description": "Second derivative of mean motion", "key$": "MEAN_MOTION_DDOT" } }, "index$": 0 } }, "example": [{ "OBJECT_NAME": "ISS (ZARYA)", "OBJECT_ID": "1998-067A", "EPOCH": "2024-01-01T12:00:00.000000", "MEAN_MOTION": 15.50103472, "ECCENTRICITY": 0.0001234, "INCLINATION": 51.64, "RA_OF_ASC_NODE": 123.4567, "ARG_OF_PERICENTER": 12.3456, "MEAN_ANOMALY": 123.4567, "EPHEMERIS_TYPE": 0, "CLASSIFICATION_TYPE": "U", "NORAD_CAT_ID": 25544, "ELEMENT_SET_NO": 999, "REV_AT_EPOCH": 12345, "BSTAR": 0.000012345, "MEAN_MOTION_DOT": 0.00012345, "MEAN_MOTION_DDOT": 0 }] }, "text/csv": { "schema": { "type": "string", "description": "CSV formatted orbital data" } } } }, "400": { "description": "Bad request - Invalid parameters provided", "content": { "text/plain": { "schema": { "type": "string", "example": "Invalid query parameters" } } } }, "404": { "description": "Not found - No data found for the specified query", "content": { "text/plain": { "schema": { "type": "string", "example": "No data found for the specified object" } } } }, "500": { "description": "Internal server error", "content": { "text/plain": { "schema": { "type": "string", "example": "Internal server error" } } } } }, "parameters": [{ "name": "CATNR", "in": "query", "description": "NORAD catalog number(s) for the space object(s). Multiple catalog numbers can be specified.", "required": false, "schema": { "type": "string" }, "example": "25544", "index$": 0 }, { "name": "INTDES", "in": "query", "description": "International designator(s) for the space object(s). Format: YYYY-NNNP where YYYY is year, NNN is launch number, and P is piece.", "required": false, "schema": { "type": "string" }, "example": "1998-067A", "index$": 1 }, { "name": "NAME", "in": "query", "description": "Name(s) of the space object(s) to retrieve orbital data for.", "required": false, "schema": { "type": "string" }, "example": "ISS", "index$": 2 }, { "name": "GROUP", "in": "query", "description": "Predefined group name to retrieve orbital data for multiple objects in a category (e.g., 'stations', 'visual', 'active', 'analyst', 'weather', 'noaa', 'goes', 'resource', 'sarsat', 'dmc', 'tdrss', 'argos', 'planet', 'spire', 'geo', 'intelsat', 'ses', 'iridium', 'iridium-NEXT', 'starlink', 'orbcomm', 'globalstar', 'amateur', 'x-comm', 'other-comm', 'gorizont', 'raduga', 'molniya', 'gnss', 'gps-ops', 'glo-ops', 'galileo', 'beidou', 'sbas', 'nnss', 'musson', 'science', 'geodetic', 'engineering', 'education', 'military', 'radar', 'cubesat', 'other').", "required": false, "schema": { "type": "string", "enum": ["stations", "visual", "active", "analyst", "weather", "noaa", "goes", "resource", "sarsat", "dmc", "tdrss", "argos", "planet", "spire", "geo", "intelsat", "ses", "iridium", "iridium-NEXT", "starlink", "orbcomm", "globalstar", "amateur", "x-comm", "other-comm", "gorizont", "raduga", "molniya", "gnss", "gps-ops", "glo-ops", "galileo", "beidou", "sbas", "nnss", "musson", "science", "geodetic", "engineering", "education", "military", "radar", "cubesat", "other"] }, "example": "stations", "index$": 3 }, { "name": "FORMAT", "in": "query", "description": "Output format for the orbital data. TLE is the traditional Two-Line Element format, 3LE includes the object name, XML provides structured XML output, JSON provides JSON output, CSV provides comma-separated values, and KVN provides Consultative Committee for Space Data Systems (CCSDS) Key-Value Notation format.", "required": false, "schema": { "type": "string", "enum": ["tle", "3le", "xml", "json", "csv", "kvn"], "default": "tle" }, "example": "json", "index$": 4 }], "securitySource": "unspecified" } });
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