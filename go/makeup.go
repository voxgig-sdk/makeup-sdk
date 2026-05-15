package voxgigmakeupsdk

import (
	"github.com/voxgig-sdk/makeup-sdk/core"
	"github.com/voxgig-sdk/makeup-sdk/entity"
	"github.com/voxgig-sdk/makeup-sdk/feature"
	_ "github.com/voxgig-sdk/makeup-sdk/utility"
)

// Type aliases preserve external API.
type MakeupSDK = core.MakeupSDK
type Context = core.Context
type Utility = core.Utility
type Feature = core.Feature
type Entity = core.Entity
type MakeupEntity = core.MakeupEntity
type FetcherFunc = core.FetcherFunc
type Spec = core.Spec
type Result = core.Result
type Response = core.Response
type Operation = core.Operation
type Control = core.Control
type MakeupError = core.MakeupError

// BaseFeature from feature package.
type BaseFeature = feature.BaseFeature

func init() {
	core.NewBaseFeatureFunc = func() core.Feature {
		return feature.NewBaseFeature()
	}
	core.NewTestFeatureFunc = func() core.Feature {
		return feature.NewTestFeature()
	}
	core.NewProductEntityFunc = func(client *core.MakeupSDK, entopts map[string]any) core.MakeupEntity {
		return entity.NewProductEntity(client, entopts)
	}
}

// Constructor re-exports.
var NewMakeupSDK = core.NewMakeupSDK
var TestSDK = core.TestSDK
var NewContext = core.NewContext
var NewSpec = core.NewSpec
var NewResult = core.NewResult
var NewResponse = core.NewResponse
var NewOperation = core.NewOperation
var MakeConfig = core.MakeConfig
var NewBaseFeature = feature.NewBaseFeature
var NewTestFeature = feature.NewTestFeature
