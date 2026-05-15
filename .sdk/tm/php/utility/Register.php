<?php
declare(strict_types=1);

// Makeup SDK utility registration

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

MakeupUtility::setRegistrar(function (MakeupUtility $u): void {
    $u->clean = [MakeupClean::class, 'call'];
    $u->done = [MakeupDone::class, 'call'];
    $u->make_error = [MakeupMakeError::class, 'call'];
    $u->feature_add = [MakeupFeatureAdd::class, 'call'];
    $u->feature_hook = [MakeupFeatureHook::class, 'call'];
    $u->feature_init = [MakeupFeatureInit::class, 'call'];
    $u->fetcher = [MakeupFetcher::class, 'call'];
    $u->make_fetch_def = [MakeupMakeFetchDef::class, 'call'];
    $u->make_context = [MakeupMakeContext::class, 'call'];
    $u->make_options = [MakeupMakeOptions::class, 'call'];
    $u->make_request = [MakeupMakeRequest::class, 'call'];
    $u->make_response = [MakeupMakeResponse::class, 'call'];
    $u->make_result = [MakeupMakeResult::class, 'call'];
    $u->make_point = [MakeupMakePoint::class, 'call'];
    $u->make_spec = [MakeupMakeSpec::class, 'call'];
    $u->make_url = [MakeupMakeUrl::class, 'call'];
    $u->param = [MakeupParam::class, 'call'];
    $u->prepare_auth = [MakeupPrepareAuth::class, 'call'];
    $u->prepare_body = [MakeupPrepareBody::class, 'call'];
    $u->prepare_headers = [MakeupPrepareHeaders::class, 'call'];
    $u->prepare_method = [MakeupPrepareMethod::class, 'call'];
    $u->prepare_params = [MakeupPrepareParams::class, 'call'];
    $u->prepare_path = [MakeupPreparePath::class, 'call'];
    $u->prepare_query = [MakeupPrepareQuery::class, 'call'];
    $u->result_basic = [MakeupResultBasic::class, 'call'];
    $u->result_body = [MakeupResultBody::class, 'call'];
    $u->result_headers = [MakeupResultHeaders::class, 'call'];
    $u->transform_request = [MakeupTransformRequest::class, 'call'];
    $u->transform_response = [MakeupTransformResponse::class, 'call'];
});
