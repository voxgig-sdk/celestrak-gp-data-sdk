export interface Gpn {
    ARG_OF_PERICENTER?: number;
    BSTAR?: number;
    CLASSIFICATION_TYPE?: string;
    ECCENTRICITY?: number;
    ELEMENT_SET_NO?: number;
    EPHEMERIS_TYPE?: number;
    EPOCH?: string;
    INCLINATION?: number;
    MEAN_ANOMALY?: number;
    MEAN_MOTION?: number;
    MEAN_MOTION_DDOT?: number;
    MEAN_MOTION_DOT?: number;
    NORAD_CAT_ID?: number;
    OBJECT_ID?: string;
    OBJECT_NAME?: string;
    RA_OF_ASC_NODE?: number;
    REV_AT_EPOCH?: number;
}
export interface GpnListMatch {
    catnr?: string;
    format?: string;
    group?: string;
    intde?: string;
    name?: string;
}
