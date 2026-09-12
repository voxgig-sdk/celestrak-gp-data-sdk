import { CelestrakGpDataEntityBase } from '../CelestrakGpDataEntityBase';
import type { CelestrakGpDataSDK } from '../CelestrakGpDataSDK';
import type { Control } from '../types';
import type { Gpn, GpnListMatch } from '../CelestrakGpDataTypes';
declare class GpnEntity extends CelestrakGpDataEntityBase<Gpn> {
    constructor(client: CelestrakGpDataSDK, entopts: any);
    make(this: GpnEntity): GpnEntity;
    list(this: any, reqmatch?: GpnListMatch, ctrl?: Control): Promise<GpnEntity[]>;
}
export { GpnEntity };
