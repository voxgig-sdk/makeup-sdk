# Makeup SDK utility registration
require_relative '../core/utility_type'
require_relative 'clean'
require_relative 'done'
require_relative 'make_error'
require_relative 'feature_add'
require_relative 'feature_hook'
require_relative 'feature_init'
require_relative 'fetcher'
require_relative 'make_fetch_def'
require_relative 'make_context'
require_relative 'make_options'
require_relative 'make_request'
require_relative 'make_response'
require_relative 'make_result'
require_relative 'make_point'
require_relative 'make_spec'
require_relative 'make_url'
require_relative 'param'
require_relative 'prepare_auth'
require_relative 'prepare_body'
require_relative 'prepare_headers'
require_relative 'prepare_method'
require_relative 'prepare_params'
require_relative 'prepare_path'
require_relative 'prepare_query'
require_relative 'result_basic'
require_relative 'result_body'
require_relative 'result_headers'
require_relative 'transform_request'
require_relative 'transform_response'

MakeupUtility.registrar = ->(u) {
  u.clean = MakeupUtilities::Clean
  u.done = MakeupUtilities::Done
  u.make_error = MakeupUtilities::MakeError
  u.feature_add = MakeupUtilities::FeatureAdd
  u.feature_hook = MakeupUtilities::FeatureHook
  u.feature_init = MakeupUtilities::FeatureInit
  u.fetcher = MakeupUtilities::Fetcher
  u.make_fetch_def = MakeupUtilities::MakeFetchDef
  u.make_context = MakeupUtilities::MakeContext
  u.make_options = MakeupUtilities::MakeOptions
  u.make_request = MakeupUtilities::MakeRequest
  u.make_response = MakeupUtilities::MakeResponse
  u.make_result = MakeupUtilities::MakeResult
  u.make_point = MakeupUtilities::MakePoint
  u.make_spec = MakeupUtilities::MakeSpec
  u.make_url = MakeupUtilities::MakeUrl
  u.param = MakeupUtilities::Param
  u.prepare_auth = MakeupUtilities::PrepareAuth
  u.prepare_body = MakeupUtilities::PrepareBody
  u.prepare_headers = MakeupUtilities::PrepareHeaders
  u.prepare_method = MakeupUtilities::PrepareMethod
  u.prepare_params = MakeupUtilities::PrepareParams
  u.prepare_path = MakeupUtilities::PreparePath
  u.prepare_query = MakeupUtilities::PrepareQuery
  u.result_basic = MakeupUtilities::ResultBasic
  u.result_body = MakeupUtilities::ResultBody
  u.result_headers = MakeupUtilities::ResultHeaders
  u.transform_request = MakeupUtilities::TransformRequest
  u.transform_response = MakeupUtilities::TransformResponse
}
