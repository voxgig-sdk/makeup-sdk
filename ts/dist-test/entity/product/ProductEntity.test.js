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
(0, node_test_1.describe)('ProductEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when MAKEUP_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('MAKEUP_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.MakeupSDK.test();
        const ent = testsdk.Product();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.MAKEUP_TEST_LIVE;
        for (const op of ['list']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'product.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": [{ "active": true, "name": "api_featured_image", "req": false, "short": "Featured image URL for API display", "type": "`$STRING`", "index$": 0 }, { "active": true, "name": "brand", "req": false, "short": "Brand name of the product", "type": "`$STRING`", "index$": 1 }, { "active": true, "name": "category", "req": false, "short": "Category of the product (e.g., powder, cream, liquid)", "type": "`$STRING`", "index$": 2 }, { "active": true, "name": "colour_name", "req": false, "short": "Name of the color variant", "type": "`$STRING`", "index$": 3 }, { "active": true, "format": "date-time", "name": "created_at", "req": false, "short": "Timestamp when the product was added to the database", "type": "`$STRING`", "index$": 4 }, { "active": true, "name": "currency", "req": false, "short": "Currency code (e.g., USD, CAD, GBP)", "type": "`$STRING`", "index$": 5 }, { "active": true, "name": "description", "req": false, "short": "Description of the product", "type": "`$STRING`", "index$": 6 }, { "active": true, "name": "hex_value", "req": false, "short": "Hexadecimal color code", "type": "`$STRING`", "index$": 7 }, { "active": true, "name": "id", "req": false, "short": "Unique identifier for the product", "type": "`$INTEGER`", "index$": 8 }, { "active": true, "format": "uri", "name": "image_link", "req": false, "short": "URL to the product image", "type": "`$STRING`", "index$": 9 }, { "active": true, "name": "name", "req": false, "short": "Name of the product", "type": "`$STRING`", "index$": 10 }, { "active": true, "name": "price", "req": false, "short": "Price of the product as a string", "type": "`$STRING`", "index$": 11 }, { "active": true, "name": "price_sign", "req": false, "short": "Currency symbol", "type": "`$STRING`", "index$": 12 }, { "active": true, "format": "uri", "name": "product_api_url", "req": false, "short": "API URL to fetch this specific product", "type": "`$STRING`", "index$": 13 }, { "active": true, "name": "product_colors", "req": false, "short": "Available color variants of the product", "type": "`$ARRAY`", "index$": 14 }, { "active": true, "format": "uri", "name": "product_link", "req": false, "short": "URL to the product page on the retailer's website", "type": "`$STRING`", "index$": 15 }, { "active": true, "name": "product_type", "req": false, "short": "Type of the product (e.g., foundation, lipstick, mascara)", "type": "`$STRING`", "index$": 16 }, { "active": true, "format": "float", "name": "rating", "req": false, "short": "Average rating of the product (0-5)", "type": "`$NUMBER`", "index$": 17 }, { "active": true, "name": "tag_list", "req": false, "short": "List of tags associated with the product (e.g., Vegan, Organic, Gluten Free)", "type": "`$ARRAY`", "index$": 18 }, { "active": true, "format": "date-time", "name": "updated_at", "req": false, "short": "Timestamp when the product was last updated", "type": "`$STRING`", "index$": 19 }, { "active": true, "format": "uri", "name": "website_link", "req": false, "short": "URL to the retailer's website", "type": "`$STRING`", "index$": 20 }], "id": { "field": "id", "name": "id" }, "name": "product", "op": { "list": { "input": "data", "name": "list", "points": [{ "active": true, "args": { "query": [{ "active": true, "example": "maybelline", "kind": "query", "name": "brand", "orig": "brand", "reqd": false, "type": "`$STRING`", "index$": 0 }, { "active": true, "example": 10, "kind": "query", "name": "price_greater_than", "orig": "price_greater_than", "reqd": false, "type": "`$NUMBER`", "index$": 1 }, { "active": true, "example": 20, "kind": "query", "name": "price_less_than", "orig": "price_less_than", "reqd": false, "type": "`$NUMBER`", "index$": 2 }, { "active": true, "example": "powder", "kind": "query", "name": "product_category", "orig": "product_category", "reqd": false, "type": "`$STRING`", "index$": 3 }, { "active": true, "example": "vegan", "kind": "query", "name": "product_tag", "orig": "product_tag", "reqd": false, "type": "`$STRING`", "index$": 4 }, { "active": true, "example": "lipstick", "kind": "query", "name": "product_type", "orig": "product_type", "reqd": false, "type": "`$STRING`", "index$": 5 }, { "active": true, "example": 4, "kind": "query", "name": "rating_greater_than", "orig": "rating_greater_than", "reqd": false, "type": "`$NUMBER`", "index$": 6 }, { "active": true, "example": 5, "kind": "query", "name": "rating_less_than", "orig": "rating_less_than", "reqd": false, "type": "`$NUMBER`", "index$": 7 }] }, "contract": { "id": "GET /products.json", "json": "{\"operationId\":\"getAllProducts\",\"parameters\":[{\"description\":\"Filter products by brand name\",\"example\":\"maybelline\",\"in\":\"query\",\"name\":\"brand\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter products by product type (e.g., lipstick, foundation, eyeliner, eyeshadow, blush, bronzer, mascara, nail_polish)\",\"example\":\"lipstick\",\"in\":\"query\",\"name\":\"product_type\",\"required\":false,\"schema\":{\"enum\":[\"blush\",\"bronzer\",\"eyebrow\",\"eyeliner\",\"eyeshadow\",\"foundation\",\"lip_liner\",\"lipstick\",\"mascara\",\"nail_polish\"],\"type\":\"string\"}},{\"description\":\"Filter products by category (e.g., powder, cream, pencil, liquid)\",\"example\":\"powder\",\"in\":\"query\",\"name\":\"product_category\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter products by tags (e.g., vegan, organic, natural, gluten_free, canadian). Multiple tags can be comma separated.\",\"example\":\"vegan\",\"in\":\"query\",\"name\":\"product_tags\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter products with price greater than specified value\",\"example\":10,\"in\":\"query\",\"name\":\"price_greater_than\",\"required\":false,\"schema\":{\"format\":\"float\",\"type\":\"number\"}},{\"description\":\"Filter products with price less than specified value\",\"example\":20,\"in\":\"query\",\"name\":\"price_less_than\",\"required\":false,\"schema\":{\"format\":\"float\",\"type\":\"number\"}},{\"description\":\"Filter products with rating greater than specified value (0-5)\",\"example\":4,\"in\":\"query\",\"name\":\"rating_greater_than\",\"required\":false,\"schema\":{\"format\":\"float\",\"maximum\":5,\"minimum\":0,\"type\":\"number\"}},{\"description\":\"Filter products with rating less than specified value (0-5)\",\"example\":5,\"in\":\"query\",\"name\":\"rating_less_than\",\"required\":false,\"schema\":{\"format\":\"float\",\"maximum\":5,\"minimum\":0,\"type\":\"number\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":[{\"api_featured_image\":\"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531094614\",\"brand\":\"maybelline\",\"category\":\"powder\",\"created_at\":\"2018-07-08T23:45:08.056Z\",\"currency\":\"USD\",\"description\":\"Maybelline Fit Me Matte + Poreless Foundation is a lightweight, oil-free foundation that provides a natural, matte finish.\",\"id\":1048,\"image_link\":\"https://d3t32hsnjxo7q6.cloudfront.net/i/4f75b2e39c8e192af00d5c6d0e7d2a98_ra,w158,h184_pa,w158,h184.jpeg\",\"name\":\"Maybelline Fit Me Matte + Poreless Foundation\",\"price\":\"7.99\",\"price_sign\":\"$\",\"product_api_url\":\"http://makeup-api.herokuapp.com/api/v1/products/1048.json\",\"product_colors\":[{\"colour_name\":\"Porcelain\",\"hex_value\":\"#F4C797\"}],\"product_link\":\"https://well.ca/products/maybelline-fit-me-matte-poreless_88837.html\",\"product_type\":\"foundation\",\"rating\":4.5,\"tag_list\":[\"Vegan\",\"Oil Free\"],\"updated_at\":\"2018-07-09T00:53:23.301Z\",\"website_link\":\"https://well.ca\"}],\"schema\":{\"items\":{\"properties\":{\"api_featured_image\":{\"description\":\"Featured image URL for API display\",\"type\":\"string\"},\"brand\":{\"description\":\"Brand name of the product\",\"nullable\":true,\"type\":\"string\"},\"category\":{\"description\":\"Category of the product (e.g., powder, cream, liquid)\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"Timestamp when the product was added to the database\",\"format\":\"date-time\",\"type\":\"string\"},\"currency\":{\"description\":\"Currency code (e.g., USD, CAD, GBP)\",\"nullable\":true,\"type\":\"string\"},\"description\":{\"description\":\"Description of the product\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the product\",\"type\":\"integer\"},\"image_link\":{\"description\":\"URL to the product image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the product\",\"type\":\"string\"},\"price\":{\"description\":\"Price of the product as a string\",\"nullable\":true,\"type\":\"string\"},\"price_sign\":{\"description\":\"Currency symbol\",\"nullable\":true,\"type\":\"string\"},\"product_api_url\":{\"description\":\"API URL to fetch this specific product\",\"format\":\"uri\",\"type\":\"string\"},\"product_colors\":{\"description\":\"Available color variants of the product\",\"items\":{\"properties\":{\"colour_name\":{\"description\":\"Name of the color variant\",\"type\":\"string\"},\"hex_value\":{\"description\":\"Hexadecimal color code\",\"pattern\":\"^#[0-9A-Fa-f]{6}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"product_link\":{\"description\":\"URL to the product page on the retailer's website\",\"format\":\"uri\",\"type\":\"string\"},\"product_type\":{\"description\":\"Type of the product (e.g., foundation, lipstick, mascara)\",\"type\":\"string\"},\"rating\":{\"description\":\"Average rating of the product (0-5)\",\"format\":\"float\",\"maximum\":5,\"minimum\":0,\"nullable\":true,\"type\":\"number\"},\"tag_list\":{\"description\":\"List of tags associated with the product (e.g., Vegan, Organic, Gluten Free)\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"Timestamp when the product was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"website_link\":{\"description\":\"URL to the retailer's website\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}}},\"description\":\"Successful response with list of makeup products\"},\"400\":{\"description\":\"Bad request - invalid query parameters\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/products.json", "segments": [{ "lit": "products.json" }], "select": { "exist": ["brand", "price_greater_than", "price_less_than", "product_category", "product_tag", "product_type", "rating_greater_than", "rating_less_than"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }, { "active": true, "args": { "params": [{ "active": true, "example": 1048, "kind": "param", "name": "id", "orig": "id", "reqd": true, "type": "`$INTEGER`" }] }, "contract": { "id": "GET /products/{id}.json", "json": "{\"operationId\":\"getProductById\",\"parameters\":[{\"description\":\"Unique identifier of the product\",\"example\":1048,\"in\":\"path\",\"name\":\"id\",\"required\":true,\"schema\":{\"type\":\"integer\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"example\":{\"api_featured_image\":\"//s3.amazonaws.com/donovanbailey/products/api_featured_images/000/001/048/original/open-uri20180708-4-13okqci?1531094614\",\"brand\":\"maybelline\",\"category\":\"powder\",\"created_at\":\"2018-07-08T23:45:08.056Z\",\"currency\":\"USD\",\"description\":\"Maybelline Fit Me Matte + Poreless Foundation is a lightweight, oil-free foundation that provides a natural, matte finish.\",\"id\":1048,\"image_link\":\"https://d3t32hsnjxo7q6.cloudfront.net/i/4f75b2e39c8e192af00d5c6d0e7d2a98_ra,w158,h184_pa,w158,h184.jpeg\",\"name\":\"Maybelline Fit Me Matte + Poreless Foundation\",\"price\":\"7.99\",\"price_sign\":\"$\",\"product_api_url\":\"http://makeup-api.herokuapp.com/api/v1/products/1048.json\",\"product_colors\":[{\"colour_name\":\"Porcelain\",\"hex_value\":\"#F4C797\"}],\"product_link\":\"https://well.ca/products/maybelline-fit-me-matte-poreless_88837.html\",\"product_type\":\"foundation\",\"rating\":4.5,\"tag_list\":[\"Vegan\",\"Oil Free\"],\"updated_at\":\"2018-07-09T00:53:23.301Z\",\"website_link\":\"https://well.ca\"},\"schema\":{\"properties\":{\"api_featured_image\":{\"description\":\"Featured image URL for API display\",\"type\":\"string\"},\"brand\":{\"description\":\"Brand name of the product\",\"nullable\":true,\"type\":\"string\"},\"category\":{\"description\":\"Category of the product (e.g., powder, cream, liquid)\",\"nullable\":true,\"type\":\"string\"},\"created_at\":{\"description\":\"Timestamp when the product was added to the database\",\"format\":\"date-time\",\"type\":\"string\"},\"currency\":{\"description\":\"Currency code (e.g., USD, CAD, GBP)\",\"nullable\":true,\"type\":\"string\"},\"description\":{\"description\":\"Description of the product\",\"nullable\":true,\"type\":\"string\"},\"id\":{\"description\":\"Unique identifier for the product\",\"type\":\"integer\"},\"image_link\":{\"description\":\"URL to the product image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"Name of the product\",\"type\":\"string\"},\"price\":{\"description\":\"Price of the product as a string\",\"nullable\":true,\"type\":\"string\"},\"price_sign\":{\"description\":\"Currency symbol\",\"nullable\":true,\"type\":\"string\"},\"product_api_url\":{\"description\":\"API URL to fetch this specific product\",\"format\":\"uri\",\"type\":\"string\"},\"product_colors\":{\"description\":\"Available color variants of the product\",\"items\":{\"properties\":{\"colour_name\":{\"description\":\"Name of the color variant\",\"type\":\"string\"},\"hex_value\":{\"description\":\"Hexadecimal color code\",\"pattern\":\"^#[0-9A-Fa-f]{6}$\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"},\"product_link\":{\"description\":\"URL to the product page on the retailer's website\",\"format\":\"uri\",\"type\":\"string\"},\"product_type\":{\"description\":\"Type of the product (e.g., foundation, lipstick, mascara)\",\"type\":\"string\"},\"rating\":{\"description\":\"Average rating of the product (0-5)\",\"format\":\"float\",\"maximum\":5,\"minimum\":0,\"nullable\":true,\"type\":\"number\"},\"tag_list\":{\"description\":\"List of tags associated with the product (e.g., Vegan, Organic, Gluten Free)\",\"items\":{\"type\":\"string\"},\"type\":\"array\"},\"updated_at\":{\"description\":\"Timestamp when the product was last updated\",\"format\":\"date-time\",\"type\":\"string\"},\"website_link\":{\"description\":\"URL to the retailer's website\",\"format\":\"uri\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"Successful response with product details\"},\"404\":{\"description\":\"Product not found\"},\"500\":{\"description\":\"Internal server error\"}},\"securitySource\":\"unspecified\"}", "source": "openapi3", "version": 1 }, "kind": "http", "method": "GET", "orig": "/products/{id}.json", "segments": [{ "lit": "products" }, { "lit": "{id}.json" }], "select": { "$action": "id", "exist": ["id"] }, "transform": { "req": "`reqdata`", "res": "`body`" }, "index$": 1 }], "key$": "list" } }, "relations": { "ancestors": [] }, "key$": "product", "name__orig": "product", "Name": "Product", "name_": "product", "name-": "product", "NAME": "PRODUCT", "index$": 0 }, { "active": true, "entity": "product", "key$": "BasicProductFlow", "kind": "basic", "name": "BasicProductFlow", "param": {}, "step": [{ "active": true, "data": {}, "input": {}, "match": {}, "op": "list", "spec": [], "valid": [{ "apply": "ItemExists", "def": { "ref": "product_ref01" } }], "index$": 0 }] }, 'Product');
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let product_ref01_data = Object.values(setup.data.existing.product)[0];
        // LIST
        const product_ref01_ent = client.Product();
        const product_ref01_match = {};
        const product_ref01_list = (await product_ref01_ent.list(product_ref01_match)).map((e) => e.data());
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/product/ProductTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.MakeupSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['product01', 'product02', 'product03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'MAKEUP_TEST_PRODUCT_ENTID': idmap,
        'MAKEUP_TEST_LIVE': 'FALSE',
        'MAKEUP_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['MAKEUP_TEST_PRODUCT_ENTID'];
    const live = 'TRUE' === env.MAKEUP_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['MAKEUP_TEST_PRODUCT_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.MakeupSDK(merge([
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
        explain: 'TRUE' === env.MAKEUP_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=ProductEntity.test.js.map