<?php
declare(strict_types=1);

// CelestrakGpData SDK utility registration

require_once __DIR__ . '/../core/UtilityType.php';
require_once __DIR__ . '/Clean.php';
require_once __DIR__ . '/Done.php';
require_once __DIR__ . '/MakeError.php';
require_once __DIR__ . '/FeatureAdd.php';
require_once __DIR__ . '/FeatureHook.php';
require_once __DIR__ . '/FeatureInit.php';
require_once __DIR__ . '/Fetcher.php';
require_once __DIR__ . '/MakeFetchDef.php';
require_once __DIR__ . '/MakeContext.php';
require_once __DIR__ . '/MakeOptions.php';
require_once __DIR__ . '/MakeRequest.php';
require_once __DIR__ . '/MakeResponse.php';
require_once __DIR__ . '/MakeResult.php';
require_once __DIR__ . '/MakePoint.php';
require_once __DIR__ . '/MakeSpec.php';
require_once __DIR__ . '/MakeUrl.php';
require_once __DIR__ . '/Param.php';
require_once __DIR__ . '/PrepareAuth.php';
require_once __DIR__ . '/PrepareBody.php';
require_once __DIR__ . '/PrepareHeaders.php';
require_once __DIR__ . '/PrepareMethod.php';
require_once __DIR__ . '/PrepareParams.php';
require_once __DIR__ . '/PreparePath.php';
require_once __DIR__ . '/PrepareQuery.php';
require_once __DIR__ . '/ResultBasic.php';
require_once __DIR__ . '/ResultBody.php';
require_once __DIR__ . '/ResultHeaders.php';
require_once __DIR__ . '/TransformRequest.php';
require_once __DIR__ . '/TransformResponse.php';

CelestrakGpDataUtility::setRegistrar(function (CelestrakGpDataUtility $u): void {
    $u->clean = [CelestrakGpDataClean::class, 'call'];
    $u->done = [CelestrakGpDataDone::class, 'call'];
    $u->make_error = [CelestrakGpDataMakeError::class, 'call'];
    $u->feature_add = [CelestrakGpDataFeatureAdd::class, 'call'];
    $u->feature_hook = [CelestrakGpDataFeatureHook::class, 'call'];
    $u->feature_init = [CelestrakGpDataFeatureInit::class, 'call'];
    $u->fetcher = [CelestrakGpDataFetcher::class, 'call'];
    $u->make_fetch_def = [CelestrakGpDataMakeFetchDef::class, 'call'];
    $u->make_context = [CelestrakGpDataMakeContext::class, 'call'];
    $u->make_options = [CelestrakGpDataMakeOptions::class, 'call'];
    $u->make_request = [CelestrakGpDataMakeRequest::class, 'call'];
    $u->make_response = [CelestrakGpDataMakeResponse::class, 'call'];
    $u->make_result = [CelestrakGpDataMakeResult::class, 'call'];
    $u->make_point = [CelestrakGpDataMakePoint::class, 'call'];
    $u->make_spec = [CelestrakGpDataMakeSpec::class, 'call'];
    $u->make_url = [CelestrakGpDataMakeUrl::class, 'call'];
    $u->param = [CelestrakGpDataParam::class, 'call'];
    $u->prepare_auth = [CelestrakGpDataPrepareAuth::class, 'call'];
    $u->prepare_body = [CelestrakGpDataPrepareBody::class, 'call'];
    $u->prepare_headers = [CelestrakGpDataPrepareHeaders::class, 'call'];
    $u->prepare_method = [CelestrakGpDataPrepareMethod::class, 'call'];
    $u->prepare_params = [CelestrakGpDataPrepareParams::class, 'call'];
    $u->prepare_path = [CelestrakGpDataPreparePath::class, 'call'];
    $u->prepare_query = [CelestrakGpDataPrepareQuery::class, 'call'];
    $u->result_basic = [CelestrakGpDataResultBasic::class, 'call'];
    $u->result_body = [CelestrakGpDataResultBody::class, 'call'];
    $u->result_headers = [CelestrakGpDataResultHeaders::class, 'call'];
    $u->transform_request = [CelestrakGpDataTransformRequest::class, 'call'];
    $u->transform_response = [CelestrakGpDataTransformResponse::class, 'call'];
});
