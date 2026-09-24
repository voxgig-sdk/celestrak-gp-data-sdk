"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CelestrakGpDataError = void 0;
class CelestrakGpDataError extends Error {
    isCelestrakGpDataError = true;
    sdk = 'CelestrakGpData';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.CelestrakGpDataError = CelestrakGpDataError;
//# sourceMappingURL=CelestrakGpDataError.js.map