package core

var UtilityRegistrar func(u *Utility)

var NewBaseFeatureFunc func() Feature

var NewTestFeatureFunc func() Feature

var NewGpnEntityFunc func(client *CelestrakGpDataSDK, entopts map[string]any) CelestrakGpDataEntity

