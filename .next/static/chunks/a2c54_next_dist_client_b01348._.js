(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/a2c54_next_dist_client_b01348._.js", {

"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/portal/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Portal", {
    enumerable: true,
    get: function() {
        return Portal;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
const _reactdom = __turbopack_require__("[project]/node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/index.js [client] (ecmascript)");
const Portal = (param)=>{
    let { children, type } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const element = document.createElement(type);
        document.body.appendChild(element);
        setPortalNode(element);
        return ()=>{
            document.body.removeChild(element);
        };
    }, [
        type
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, portalNode) : null;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "setAttributesFromProps", {
    enumerable: true,
    get: function() {
        return setAttributesFromProps;
    }
});
const DOMAttributeNames = {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv',
    noModule: 'noModule'
};
const ignoreProps = [
    'onLoad',
    'onReady',
    'dangerouslySetInnerHTML',
    'children',
    'onError',
    'strategy',
    'stylesheets'
];
function isBooleanScriptAttribute(attr) {
    return [
        'async',
        'defer',
        'noModule'
    ].includes(attr);
}
function setAttributesFromProps(el, props) {
    for (const [p, value] of Object.entries(props)){
        if (!props.hasOwnProperty(p)) continue;
        if (ignoreProps.includes(p)) continue;
        // we don't render undefined props to the DOM
        if (value === undefined) {
            continue;
        }
        const attr = DOMAttributeNames[p] || p.toLowerCase();
        if (el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr)) {
            // Correctly assign boolean script attributes
            // https://github.com/vercel/next.js/pull/20748
            ;
            el[attr] = !!value;
        } else {
            el.setAttribute(attr, String(value));
        }
        // Remove falsy non-zero boolean attributes so they are correctly interpreted
        // (e.g. if we set them to false, this coerces to the string "false", which the browser interprets as true)
        if (value === false || el.tagName === 'SCRIPT' && isBooleanScriptAttribute(attr) && (!value || value === 'false')) {
            // Call setAttribute before, as we need to set and unset the attribute to override force async:
            // https://html.spec.whatwg.org/multipage/scripting.html#script-force-async
            el.setAttribute(attr, '');
            el.removeAttribute(attr);
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=set-attributes-from-props.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/head-manager.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    isEqualNode: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return initHeadManager;
    },
    isEqualNode: function() {
        return isEqualNode;
    }
});
const _setattributesfromprops = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)");
function reactElementToDOM(param) {
    let { type, props } = param;
    const el = document.createElement(type);
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    const { children, dangerouslySetInnerHTML } = props;
    if (dangerouslySetInnerHTML) {
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
    }
    return el;
}
function isEqualNode(oldTag, newTag) {
    if (oldTag instanceof HTMLElement && newTag instanceof HTMLElement) {
        const nonce = newTag.getAttribute('nonce');
        // Only strip the nonce if `oldTag` has had it stripped. An element's nonce attribute will not
        // be stripped if there is no content security policy response header that includes a nonce.
        if (nonce && !oldTag.getAttribute('nonce')) {
            const cloneTag = newTag.cloneNode(true);
            cloneTag.setAttribute('nonce', '');
            cloneTag.nonce = nonce;
            return nonce === oldTag.nonce && oldTag.isEqualNode(cloneTag);
        }
    }
    return oldTag.isEqualNode(newTag);
}
let updateElements;
if ("TURBOPACK compile-time truthy", 1) {
    updateElements = (type, components)=>{
        const headEl = document.querySelector('head');
        if (!headEl) return;
        const oldTags = new Set(headEl.querySelectorAll("" + type + "[data-next-head]"));
        if (type === 'meta') {
            const metaCharset = headEl.querySelector('meta[charset]');
            if (metaCharset !== null) {
                oldTags.add(metaCharset);
            }
        }
        const newTags = [];
        for(let i = 0; i < components.length; i++){
            const component = components[i];
            const newTag = reactElementToDOM(component);
            newTag.setAttribute('data-next-head', '');
            let isNew = true;
            for (const oldTag of oldTags){
                if (isEqualNode(oldTag, newTag)) {
                    oldTags.delete(oldTag);
                    isNew = false;
                    break;
                }
            }
            if (isNew) {
                newTags.push(newTag);
            }
        }
        for (const oldTag of oldTags){
            var _oldTag_parentNode;
            (_oldTag_parentNode = oldTag.parentNode) == null ? void 0 : _oldTag_parentNode.removeChild(oldTag);
        }
        for (const newTag of newTags){
            // meta[charset] must be first element so special case
            if (newTag.tagName.toLowerCase() === 'meta' && newTag.getAttribute('charset') !== null) {
                headEl.prepend(newTag);
            }
            headEl.appendChild(newTag);
        }
    };
} else {
    "TURBOPACK unreachable";
}
function initHeadManager() {
    return {
        mountedInstances: new Set(),
        updateHead: (head)=>{
            const tags = {};
            head.forEach((h)=>{
                if (// it won't be inlined. In this case revert to the original behavior
                h.type === 'link' && h.props['data-optimized-fonts']) {
                    if (document.querySelector('style[data-href="' + h.props['data-href'] + '"]')) {
                        return;
                    } else {
                        h.props.href = h.props['data-href'];
                        h.props['data-href'] = undefined;
                    }
                }
                const components = tags[h.type] || [];
                components.push(h);
                tags[h.type] = components;
            });
            const titleComponent = tags.title ? tags.title[0] : null;
            let title = '';
            if (titleComponent) {
                const { children } = titleComponent.props;
                title = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
            }
            if (title !== document.title) document.title = title;
            [
                'meta',
                'base',
                'link',
                'style',
                'script'
            ].forEach((type)=>{
                updateElements(type, tags[type] || []);
            });
        }
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=head-manager.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "normalizePathTrailingSlash", {
    enumerable: true,
    get: function() {
        return normalizePathTrailingSlash;
    }
});
const _removetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [client] (ecmascript)");
const _parsepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
const normalizePathTrailingSlash = (path)=>{
    if (!path.startsWith('/') || __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_MANUAL_TRAILING_SLASH) {
        return path;
    }
    const { pathname, query, hash } = (0, _parsepath.parsePath)(path);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return "" + (0, _removetrailingslash.removeTrailingSlash)(pathname) + query + hash;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=normalize-trailing-slash.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/add-base-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addBasePath", {
    enumerable: true,
    get: function() {
        return addBasePath;
    }
});
const _addpathprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/add-path-prefix.js [client] (ecmascript)");
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function addBasePath(path, required) {
    return (0, _normalizetrailingslash.normalizePathTrailingSlash)(("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (0, _addpathprefix.addPathPrefix)(path, basePath));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/add-locale.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "addLocale", {
    enumerable: true,
    get: function() {
        return addLocale;
    }
});
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const addLocale = function(path) {
    for(var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        args[_key - 1] = arguments[_key];
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return path;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=add-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/trusted-types.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Stores the Trusted Types Policy. Starts as undefined and can be set to null
 * if Trusted Types is not supported in the browser.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "__unsafeCreateTrustedScriptURL", {
    enumerable: true,
    get: function() {
        return __unsafeCreateTrustedScriptURL;
    }
});
let policy;
/**
 * Getter for the Trusted Types Policy. If it is undefined, it is instantiated
 * here or set to null if Trusted Types is not supported in the browser.
 */ function getPolicy() {
    if (typeof policy === 'undefined' && typeof window !== 'undefined') {
        var _window_trustedTypes;
        policy = ((_window_trustedTypes = window.trustedTypes) == null ? void 0 : _window_trustedTypes.createPolicy('nextjs', {
            createHTML: (input)=>input,
            createScript: (input)=>input,
            createScriptURL: (input)=>input
        })) || null;
    }
    return policy;
}
function __unsafeCreateTrustedScriptURL(url) {
    var _getPolicy;
    return ((_getPolicy = getPolicy()) == null ? void 0 : _getPolicy.createScriptURL(url)) || url;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=trusted-types.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    cancelIdleCallback: null,
    requestIdleCallback: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    cancelIdleCallback: function() {
        return cancelIdleCallback;
    },
    requestIdleCallback: function() {
        return requestIdleCallback;
    }
});
const requestIdleCallback = typeof self !== 'undefined' && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(cb) {
    let start = Date.now();
    return self.setTimeout(function() {
        cb({
            didTimeout: false,
            timeRemaining: function() {
                return Math.max(0, 50 - (Date.now() - start));
            }
        });
    }, 1);
};
const cancelIdleCallback = typeof self !== 'undefined' && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(id) {
    return clearTimeout(id);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=request-idle-callback.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/route-loader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createRouteLoader: null,
    getClientBuildManifest: null,
    isAssetError: null,
    markAssetError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createRouteLoader: function() {
        return createRouteLoader;
    },
    getClientBuildManifest: function() {
        return getClientBuildManifest;
    },
    isAssetError: function() {
        return isAssetError;
    },
    markAssetError: function() {
        return markAssetError;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js [client] (ecmascript)"));
const _trustedtypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/trusted-types.js [client] (ecmascript)");
const _requestidlecallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)");
const _deploymentid = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/deployment-id.js [client] (ecmascript)");
const _encodeuripath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/encode-uri-path.js [client] (ecmascript)");
// 3.8s was arbitrarily chosen as it's what https://web.dev/interactive
// considers as "Good" time-to-interactive. We must assume something went
// wrong beyond this point, and then fall-back to a full page transition to
// show the user something of value.
const MS_MAX_IDLE_DELAY = 3800;
function withFuture(key, map, generator) {
    let entry = map.get(key);
    if (entry) {
        if ('future' in entry) {
            return entry.future;
        }
        return Promise.resolve(entry);
    }
    let resolver;
    const prom = new Promise((resolve)=>{
        resolver = resolve;
    });
    map.set(key, {
        resolve: resolver,
        future: prom
    });
    return generator ? generator().then((value)=>{
        resolver(value);
        return value;
    }).catch((err)=>{
        map.delete(key);
        throw err;
    }) : prom;
}
const ASSET_LOAD_ERROR = Symbol('ASSET_LOAD_ERROR');
function markAssetError(err) {
    return Object.defineProperty(err, ASSET_LOAD_ERROR, {});
}
function isAssetError(err) {
    return err && ASSET_LOAD_ERROR in err;
}
function hasPrefetch(link) {
    try {
        link = document.createElement('link');
        return(// with relList.support
        !!window.MSInputMethodContext && !!document.documentMode || link.relList.supports('prefetch'));
    } catch (e) {
        return false;
    }
}
const canPrefetch = hasPrefetch();
const getAssetQueryString = ()=>{
    return (0, _deploymentid.getDeploymentIdQueryOrEmptyString)();
};
function prefetchViaDom(href, as, link) {
    return new Promise((resolve, reject)=>{
        const selector = '\n      link[rel="prefetch"][href^="' + href + '"],\n      link[rel="preload"][href^="' + href + '"],\n      script[src^="' + href + '"]';
        if (document.querySelector(selector)) {
            return resolve();
        }
        link = document.createElement('link');
        // The order of property assignment here is intentional:
        if (as) link.as = as;
        link.rel = "prefetch";
        link.crossOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_CROSS_ORIGIN;
        link.onload = resolve;
        link.onerror = ()=>reject(markAssetError(Object.defineProperty(new Error("Failed to prefetch: " + href), "__NEXT_ERROR_CODE", {
                value: "E268",
                enumerable: false
            })));
        // `href` should always be last:
        link.href = href;
        document.head.appendChild(link);
    });
}
function appendScript(src, script) {
    return new Promise((resolve, reject)=>{
        script = document.createElement('script');
        // The order of property assignment here is intentional.
        // 1. Setup success/failure hooks in case the browser synchronously
        //    executes when `src` is set.
        script.onload = resolve;
        script.onerror = ()=>reject(markAssetError(Object.defineProperty(new Error("Failed to load script: " + src), "__NEXT_ERROR_CODE", {
                value: "E74",
                enumerable: false
            })));
        // 2. Configure the cross-origin attribute before setting `src` in case the
        //    browser begins to fetch.
        script.crossOrigin = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__["default"].env.__NEXT_CROSS_ORIGIN;
        // 3. Finally, set the source and inject into the DOM in case the child
        //    must be appended for fetching to start.
        script.src = src;
        document.body.appendChild(script);
    });
}
// We wait for pages to be built in dev before we start the route transition
// timeout to prevent an un-necessary hard navigation in development.
let devBuildPromise;
// Resolve a promise that times out after given amount of milliseconds.
function resolvePromiseWithTimeout(p, ms, err) {
    return new Promise((resolve, reject)=>{
        let cancelled = false;
        p.then((r)=>{
            // Resolved, cancel the timeout
            cancelled = true;
            resolve(r);
        }).catch(reject);
        // We wrap these checks separately for better dead-code elimination in
        // production bundles.
        if ("TURBOPACK compile-time truthy", 1) {
            ;
            (devBuildPromise || Promise.resolve()).then(()=>{
                (0, _requestidlecallback.requestIdleCallback)(()=>setTimeout(()=>{
                        if (!cancelled) {
                            reject(err);
                        }
                    }, ms));
            });
        }
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
    });
}
function getClientBuildManifest() {
    if (self.__BUILD_MANIFEST) {
        return Promise.resolve(self.__BUILD_MANIFEST);
    }
    const onBuildManifest = new Promise((resolve)=>{
        // Mandatory because this is not concurrent safe:
        const cb = self.__BUILD_MANIFEST_CB;
        self.__BUILD_MANIFEST_CB = ()=>{
            resolve(self.__BUILD_MANIFEST);
            cb && cb();
        };
    });
    return resolvePromiseWithTimeout(onBuildManifest, MS_MAX_IDLE_DELAY, markAssetError(Object.defineProperty(new Error('Failed to load client build manifest'), "__NEXT_ERROR_CODE", {
        value: "E273",
        enumerable: false
    })));
}
function getFilesForRoute(assetPrefix, route) {
    if ("TURBOPACK compile-time truthy", 1) {
        const scriptUrl = assetPrefix + '/_next/static/chunks/pages' + (0, _encodeuripath.encodeURIPath)((0, _getassetpathfromroute.default)(route, '.js')) + getAssetQueryString();
        return Promise.resolve({
            scripts: [
                (0, _trustedtypes.__unsafeCreateTrustedScriptURL)(scriptUrl)
            ],
            // Styles are handled by `style-loader` in development:
            css: []
        });
    }
    "TURBOPACK unreachable";
}
function createRouteLoader(assetPrefix) {
    const entrypoints = new Map();
    const loadedScripts = new Map();
    const styleSheets = new Map();
    const routes = new Map();
    function maybeExecuteScript(src) {
        // With HMR we might need to "reload" scripts when they are
        // disposed and readded. Executing scripts twice has no functional
        // differences
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            return appendScript(src);
        }
    }
    function fetchStyleSheet(href) {
        let prom = styleSheets.get(href);
        if (prom) {
            return prom;
        }
        styleSheets.set(href, prom = fetch(href, {
            credentials: 'same-origin'
        }).then((res)=>{
            if (!res.ok) {
                throw Object.defineProperty(new Error("Failed to load stylesheet: " + href), "__NEXT_ERROR_CODE", {
                    value: "E189",
                    enumerable: false
                });
            }
            return res.text().then((text)=>({
                    href: href,
                    content: text
                }));
        }).catch((err)=>{
            throw markAssetError(err);
        }));
        return prom;
    }
    return {
        whenEntrypoint (route) {
            return withFuture(route, entrypoints);
        },
        onEntrypoint (route, execute) {
            ;
            (execute ? Promise.resolve().then(()=>execute()).then((exports1)=>({
                    component: exports1 && exports1.default || exports1,
                    exports: exports1
                }), (err)=>({
                    error: err
                })) : Promise.resolve(undefined)).then((input)=>{
                const old = entrypoints.get(route);
                if (old && 'resolve' in old) {
                    if (input) {
                        entrypoints.set(route, input);
                        old.resolve(input);
                    }
                } else {
                    if (input) {
                        entrypoints.set(route, input);
                    } else {
                        entrypoints.delete(route);
                    }
                    // when this entrypoint has been resolved before
                    // the route is outdated and we want to invalidate
                    // this cache entry
                    routes.delete(route);
                }
            });
        },
        loadRoute (route, prefetch) {
            return withFuture(route, routes, ()=>{
                let devBuildPromiseResolve;
                if ("TURBOPACK compile-time truthy", 1) {
                    devBuildPromise = new Promise((resolve)=>{
                        devBuildPromiseResolve = resolve;
                    });
                }
                return resolvePromiseWithTimeout(getFilesForRoute(assetPrefix, route).then((param)=>{
                    let { scripts, css } = param;
                    return Promise.all([
                        entrypoints.has(route) ? [] : Promise.all(scripts.map(maybeExecuteScript)),
                        Promise.all(css.map(fetchStyleSheet))
                    ]);
                }).then((res)=>{
                    return this.whenEntrypoint(route).then((entrypoint)=>({
                            entrypoint,
                            styles: res[1]
                        }));
                }), MS_MAX_IDLE_DELAY, markAssetError(Object.defineProperty(new Error("Route did not complete loading: " + route), "__NEXT_ERROR_CODE", {
                    value: "E12",
                    enumerable: false
                }))).then((param)=>{
                    let { entrypoint, styles } = param;
                    const res = Object.assign({
                        styles: styles
                    }, entrypoint);
                    return 'error' in entrypoint ? entrypoint : res;
                }).catch((err)=>{
                    if (prefetch) {
                        // we don't want to cache errors during prefetch
                        throw err;
                    }
                    return {
                        error: err
                    };
                }).finally(()=>devBuildPromiseResolve == null ? void 0 : devBuildPromiseResolve());
            });
        },
        prefetch (route) {
            // https://github.com/GoogleChromeLabs/quicklink/blob/453a661fa1fa940e2d2e044452398e38c67a98fb/src/index.mjs#L115-L118
            // License: Apache 2.0
            let cn;
            if (cn = navigator.connection) {
                // Don't prefetch if using 2G or if Save-Data is enabled.
                if (cn.saveData || /2g/.test(cn.effectiveType)) return Promise.resolve();
            }
            return getFilesForRoute(assetPrefix, route).then((output)=>Promise.all(canPrefetch ? output.scripts.map((script)=>prefetchViaDom(script.toString(), 'script')) : [])).then(()=>{
                (0, _requestidlecallback.requestIdleCallback)(()=>this.loadRoute(route, true).catch(()=>{}));
            }).catch(()=>{});
        }
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-loader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/page-loader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return PageLoader;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _addbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/add-base-path.js [client] (ecmascript)");
const _interpolateas = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)");
const _getassetpathfromroute = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/get-asset-path-from-route.js [client] (ecmascript)"));
const _addlocale = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/add-locale.js [client] (ecmascript)");
const _isdynamic = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)");
const _parserelativeurl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/parse-relative-url.js [client] (ecmascript)");
const _removetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/remove-trailing-slash.js [client] (ecmascript)");
const _routeloader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/route-loader.js [client] (ecmascript)");
const _constants = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/constants.js [client] (ecmascript)");
class PageLoader {
    getPageList() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            if (window.__DEV_PAGES_MANIFEST) {
                return window.__DEV_PAGES_MANIFEST.pages;
            } else {
                this.promisedDevPagesManifest || (this.promisedDevPagesManifest = fetch(this.assetPrefix + "/_next/static/development/" + _constants.DEV_CLIENT_PAGES_MANIFEST, {
                    credentials: 'same-origin'
                }).then((res)=>res.json()).then((manifest)=>{
                    window.__DEV_PAGES_MANIFEST = manifest;
                    return manifest.pages;
                }).catch((err)=>{
                    console.log("Failed to fetch devPagesManifest:", err);
                    throw Object.defineProperty(new Error("Failed to fetch _devPagesManifest.json. Is something blocking that network request?\n" + 'Read more: https://nextjs.org/docs/messages/failed-to-fetch-devpagesmanifest'), "__NEXT_ERROR_CODE", {
                        value: "E423",
                        enumerable: false
                    });
                }));
                return this.promisedDevPagesManifest;
            }
        }
    }
    getMiddleware() {
        // Webpack production
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        // Turbopack production
        } else if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        // Development both Turbopack and Webpack
        } else {
            if (window.__DEV_MIDDLEWARE_MATCHERS) {
                return window.__DEV_MIDDLEWARE_MATCHERS;
            } else {
                if (!this.promisedMiddlewareMatchers) {
                    // TODO: Decide what should happen when fetching fails instead of asserting
                    // @ts-ignore
                    this.promisedMiddlewareMatchers = fetch(this.assetPrefix + "/_next/static/" + this.buildId + "/" + _constants.DEV_CLIENT_MIDDLEWARE_MANIFEST, {
                        credentials: 'same-origin'
                    }).then((res)=>res.json()).then((matchers)=>{
                        window.__DEV_MIDDLEWARE_MATCHERS = matchers;
                        return matchers;
                    }).catch((err)=>{
                        console.log("Failed to fetch _devMiddlewareManifest", err);
                    });
                }
                // TODO Remove this assertion as this could be undefined
                return this.promisedMiddlewareMatchers;
            }
        }
    }
    getDataHref(params) {
        const { asPath, href, locale } = params;
        const { pathname: hrefPathname, query, search } = (0, _parserelativeurl.parseRelativeUrl)(href);
        const { pathname: asPathname } = (0, _parserelativeurl.parseRelativeUrl)(asPath);
        const route = (0, _removetrailingslash.removeTrailingSlash)(hrefPathname);
        if (route[0] !== '/') {
            throw Object.defineProperty(new Error('Route name should start with a "/", got "' + route + '"'), "__NEXT_ERROR_CODE", {
                value: "E303",
                enumerable: false
            });
        }
        const getHrefForSlug = (path)=>{
            const dataRoute = (0, _getassetpathfromroute.default)((0, _removetrailingslash.removeTrailingSlash)((0, _addlocale.addLocale)(path, locale)), '.json');
            return (0, _addbasepath.addBasePath)("/_next/data/" + this.buildId + dataRoute + search, true);
        };
        return getHrefForSlug(params.skipInterpolation ? asPathname : (0, _isdynamic.isDynamicRoute)(route) ? (0, _interpolateas.interpolateAs)(hrefPathname, asPathname, query).result : route);
    }
    _isSsg(/** the route (file-system path) */ route) {
        return this.promisedSsgManifest.then((manifest)=>manifest.has(route));
    }
    loadPage(route) {
        return this.routeLoader.loadRoute(route).then((res)=>{
            if ('component' in res) {
                return {
                    page: res.component,
                    mod: res.exports,
                    styleSheets: res.styles.map((o)=>({
                            href: o.href,
                            text: o.content
                        }))
                };
            }
            throw res.error;
        });
    }
    prefetch(route) {
        return this.routeLoader.prefetch(route);
    }
    constructor(buildId, assetPrefix){
        this.routeLoader = (0, _routeloader.createRouteLoader)(assetPrefix);
        this.buildId = buildId;
        this.assetPrefix = assetPrefix;
        this.promisedSsgManifest = new Promise((resolve)=>{
            if (window.__SSG_MANIFEST) {
                resolve(window.__SSG_MANIFEST);
            } else {
                window.__SSG_MANIFEST_CB = ()=>{
                    resolve(window.__SSG_MANIFEST);
                };
            }
        });
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-loader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/script.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    handleClientScriptLoad: null,
    initScriptLoader: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return _default;
    },
    handleClientScriptLoad: function() {
        return handleClientScriptLoad;
    },
    initScriptLoader: function() {
        return initScriptLoader;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _reactdom = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)");
const _setattributesfromprops = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/set-attributes-from-props.js [client] (ecmascript)");
const _requestidlecallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/request-idle-callback.js [client] (ecmascript)");
const ScriptCache = new Map();
const LoadCache = new Set();
const insertStylesheets = (stylesheets)=>{
    // Case 1: Styles for afterInteractive/lazyOnload with appDir injected via handleClientScriptLoad
    //
    // Using ReactDOM.preinit to feature detect appDir and inject styles
    // Stylesheets might have already been loaded if initialized with Script component
    // Re-inject styles here to handle scripts loaded via handleClientScriptLoad
    // ReactDOM.preinit handles dedup and ensures the styles are loaded only once
    if (_reactdom.default.preinit) {
        stylesheets.forEach((stylesheet)=>{
            _reactdom.default.preinit(stylesheet, {
                as: 'style'
            });
        });
        return;
    }
    // Case 2: Styles for afterInteractive/lazyOnload with pages injected via handleClientScriptLoad
    //
    // We use this function to load styles when appdir is not detected
    // TODO: Use React float APIs to load styles once available for pages dir
    if (typeof window !== 'undefined') {
        let head = document.head;
        stylesheets.forEach((stylesheet)=>{
            let link = document.createElement('link');
            link.type = 'text/css';
            link.rel = 'stylesheet';
            link.href = stylesheet;
            head.appendChild(link);
        });
    }
};
const loadScript = (props)=>{
    const { src, id, onLoad = ()=>{}, onReady = null, dangerouslySetInnerHTML, children = '', strategy = 'afterInteractive', onError, stylesheets } = props;
    const cacheKey = id || src;
    // Script has already loaded
    if (cacheKey && LoadCache.has(cacheKey)) {
        return;
    }
    // Contents of this script are already loading/loaded
    if (ScriptCache.has(src)) {
        LoadCache.add(cacheKey);
        // It is possible that multiple `next/script` components all have same "src", but has different "onLoad"
        // This is to make sure the same remote script will only load once, but "onLoad" are executed in order
        ScriptCache.get(src).then(onLoad, onError);
        return;
    }
    /** Execute after the script first loaded */ const afterLoad = ()=>{
        // Run onReady for the first time after load event
        if (onReady) {
            onReady();
        }
        // add cacheKey to LoadCache when load successfully
        LoadCache.add(cacheKey);
    };
    const el = document.createElement('script');
    const loadPromise = new Promise((resolve, reject)=>{
        el.addEventListener('load', function(e) {
            resolve();
            if (onLoad) {
                onLoad.call(this, e);
            }
            afterLoad();
        });
        el.addEventListener('error', function(e) {
            reject(e);
        });
    }).catch(function(e) {
        if (onError) {
            onError(e);
        }
    });
    if (dangerouslySetInnerHTML) {
        // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
        el.innerHTML = dangerouslySetInnerHTML.__html || '';
        afterLoad();
    } else if (children) {
        el.textContent = typeof children === 'string' ? children : Array.isArray(children) ? children.join('') : '';
        afterLoad();
    } else if (src) {
        el.src = src;
        // do not add cacheKey into LoadCache for remote script here
        // cacheKey will be added to LoadCache when it is actually loaded (see loadPromise above)
        ScriptCache.set(src, loadPromise);
    }
    (0, _setattributesfromprops.setAttributesFromProps)(el, props);
    if (strategy === 'worker') {
        el.setAttribute('type', 'text/partytown');
    }
    el.setAttribute('data-nscript', strategy);
    // Load styles associated with this script
    if (stylesheets) {
        insertStylesheets(stylesheets);
    }
    document.body.appendChild(el);
};
function handleClientScriptLoad(props) {
    const { strategy = 'afterInteractive' } = props;
    if (strategy === 'lazyOnload') {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    } else {
        loadScript(props);
    }
}
function loadLazyScript(props) {
    if (document.readyState === 'complete') {
        (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
    } else {
        window.addEventListener('load', ()=>{
            (0, _requestidlecallback.requestIdleCallback)(()=>loadScript(props));
        });
    }
}
function addBeforeInteractiveToCache() {
    const scripts = [
        ...document.querySelectorAll('[data-nscript="beforeInteractive"]'),
        ...document.querySelectorAll('[data-nscript="beforePageRender"]')
    ];
    scripts.forEach((script)=>{
        const cacheKey = script.id || script.getAttribute('src');
        LoadCache.add(cacheKey);
    });
}
function initScriptLoader(scriptLoaderItems) {
    scriptLoaderItems.forEach(handleClientScriptLoad);
    addBeforeInteractiveToCache();
}
/**
 * Load a third-party scripts in an optimized way.
 *
 * Read more: [Next.js Docs: `next/script`](https://nextjs.org/docs/app/api-reference/components/script)
 */ function Script(props) {
    const { id, src = '', onLoad = ()=>{}, onReady = null, strategy = 'afterInteractive', onError, stylesheets, ...restProps } = props;
    // Context is available only during SSR
    const { updateScripts, scripts, getIsSsr, appDir, nonce } = (0, _react.useContext)(_headmanagercontextsharedruntime.HeadManagerContext);
    /**
   * - First mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script hasn't loaded yet (not in LoadCache)
   *      onReady is skipped, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. hasLoadScriptEffectCalled.current is false, loadScript executes
   *      Once the script is loaded, the onLoad and onReady will be called by then
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   *
   * - Second mount:
   *   1. The useEffect for onReady executes
   *   2. hasOnReadyEffectCalled.current is false, but the script has already loaded (found in LoadCache)
   *      onReady is called, set hasOnReadyEffectCalled.current to true
   *   3. The useEffect for loadScript executes
   *   4. The script is already loaded, loadScript bails out
   *   [If strict mode is enabled / is wrapped in <OffScreen /> component]
   *   5. The useEffect for onReady executes again
   *   6. hasOnReadyEffectCalled.current is true, so entire effect is skipped
   *   7. The useEffect for loadScript executes again
   *   8. hasLoadScriptEffectCalled.current is true, so entire effect is skipped
   */ const hasOnReadyEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        const cacheKey = id || src;
        if (!hasOnReadyEffectCalled.current) {
            // Run onReady if script has loaded before but component is re-mounted
            if (onReady && cacheKey && LoadCache.has(cacheKey)) {
                onReady();
            }
            hasOnReadyEffectCalled.current = true;
        }
    }, [
        onReady,
        id,
        src
    ]);
    const hasLoadScriptEffectCalled = (0, _react.useRef)(false);
    (0, _react.useEffect)(()=>{
        if (!hasLoadScriptEffectCalled.current) {
            if (strategy === 'afterInteractive') {
                loadScript(props);
            } else if (strategy === 'lazyOnload') {
                loadLazyScript(props);
            }
            hasLoadScriptEffectCalled.current = true;
        }
    }, [
        props,
        strategy
    ]);
    if (strategy === 'beforeInteractive' || strategy === 'worker') {
        if (updateScripts) {
            scripts[strategy] = (scripts[strategy] || []).concat([
                {
                    id,
                    src,
                    onLoad,
                    onReady,
                    onError,
                    ...restProps
                }
            ]);
            updateScripts(scripts);
        } else if (getIsSsr && getIsSsr()) {
            // Script has already loaded during SSR
            LoadCache.add(id || src);
        } else if (getIsSsr && !getIsSsr()) {
            loadScript(props);
        }
    }
    // For the app directory, we need React Float to preload these scripts.
    if (appDir) {
        // Injecting stylesheets here handles beforeInteractive and worker scripts correctly
        // For other strategies injecting here ensures correct stylesheet order
        // ReactDOM.preinit handles loading the styles in the correct order,
        // also ensures the stylesheet is loaded only once and in a consistent manner
        //
        // Case 1: Styles for beforeInteractive/worker with appDir - handled here
        // Case 2: Styles for beforeInteractive/worker with pages dir - Not handled yet
        // Case 3: Styles for afterInteractive/lazyOnload with appDir - handled here
        // Case 4: Styles for afterInteractive/lazyOnload with pages dir - handled in insertStylesheets function
        if (stylesheets) {
            stylesheets.forEach((styleSrc)=>{
                _reactdom.default.preinit(styleSrc, {
                    as: 'style'
                });
            });
        }
        // Before interactive scripts need to be loaded by Next.js' runtime instead
        // of native <script> tags, because they no longer have `defer`.
        if (strategy === 'beforeInteractive') {
            if (!src) {
                // For inlined scripts, we put the content in `children`.
                if (restProps.dangerouslySetInnerHTML) {
                    // Casting since lib.dom.d.ts doesn't have TrustedHTML yet.
                    restProps.children = restProps.dangerouslySetInnerHTML.__html;
                    delete restProps.dangerouslySetInnerHTML;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            0,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            } else {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
                return /*#__PURE__*/ (0, _jsxruntime.jsx)("script", {
                    nonce: nonce,
                    dangerouslySetInnerHTML: {
                        __html: "(self.__next_s=self.__next_s||[]).push(" + JSON.stringify([
                            src,
                            {
                                ...restProps,
                                id
                            }
                        ]) + ")"
                    }
                });
            }
        } else if (strategy === 'afterInteractive') {
            if (src) {
                // @ts-ignore
                _reactdom.default.preload(src, restProps.integrity ? {
                    as: 'script',
                    integrity: restProps.integrity,
                    nonce,
                    crossOrigin: restProps.crossOrigin
                } : {
                    as: 'script',
                    nonce,
                    crossOrigin: restProps.crossOrigin
                });
            }
        }
    }
    return null;
}
Object.defineProperty(Script, '__nextScript', {
    value: true
});
const _default = Script;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=script.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/app-router-headers.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_HEADER: null,
    FLIGHT_HEADERS: null,
    NEXT_DID_POSTPONE_HEADER: null,
    NEXT_HMR_REFRESH_HEADER: null,
    NEXT_IS_PRERENDER_HEADER: null,
    NEXT_ROUTER_PREFETCH_HEADER: null,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: null,
    NEXT_ROUTER_STALE_TIME_HEADER: null,
    NEXT_ROUTER_STATE_TREE_HEADER: null,
    NEXT_RSC_UNION_QUERY: null,
    NEXT_URL: null,
    RSC_CONTENT_TYPE_HEADER: null,
    RSC_HEADER: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_HEADER: function() {
        return ACTION_HEADER;
    },
    FLIGHT_HEADERS: function() {
        return FLIGHT_HEADERS;
    },
    NEXT_DID_POSTPONE_HEADER: function() {
        return NEXT_DID_POSTPONE_HEADER;
    },
    NEXT_HMR_REFRESH_HEADER: function() {
        return NEXT_HMR_REFRESH_HEADER;
    },
    NEXT_IS_PRERENDER_HEADER: function() {
        return NEXT_IS_PRERENDER_HEADER;
    },
    NEXT_ROUTER_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_PREFETCH_HEADER;
    },
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER: function() {
        return NEXT_ROUTER_SEGMENT_PREFETCH_HEADER;
    },
    NEXT_ROUTER_STALE_TIME_HEADER: function() {
        return NEXT_ROUTER_STALE_TIME_HEADER;
    },
    NEXT_ROUTER_STATE_TREE_HEADER: function() {
        return NEXT_ROUTER_STATE_TREE_HEADER;
    },
    NEXT_RSC_UNION_QUERY: function() {
        return NEXT_RSC_UNION_QUERY;
    },
    NEXT_URL: function() {
        return NEXT_URL;
    },
    RSC_CONTENT_TYPE_HEADER: function() {
        return RSC_CONTENT_TYPE_HEADER;
    },
    RSC_HEADER: function() {
        return RSC_HEADER;
    }
});
const RSC_HEADER = 'RSC';
const ACTION_HEADER = 'Next-Action';
const NEXT_ROUTER_STATE_TREE_HEADER = 'Next-Router-State-Tree';
const NEXT_ROUTER_PREFETCH_HEADER = 'Next-Router-Prefetch';
const NEXT_ROUTER_SEGMENT_PREFETCH_HEADER = 'Next-Router-Segment-Prefetch';
const NEXT_HMR_REFRESH_HEADER = 'Next-HMR-Refresh';
const NEXT_URL = 'Next-Url';
const RSC_CONTENT_TYPE_HEADER = 'text/x-component';
const FLIGHT_HEADERS = [
    RSC_HEADER,
    NEXT_ROUTER_STATE_TREE_HEADER,
    NEXT_ROUTER_PREFETCH_HEADER,
    NEXT_HMR_REFRESH_HEADER,
    NEXT_ROUTER_SEGMENT_PREFETCH_HEADER
];
const NEXT_RSC_UNION_QUERY = '_rsc';
const NEXT_ROUTER_STALE_TIME_HEADER = 'x-nextjs-stale-time';
const NEXT_DID_POSTPONE_HEADER = 'x-nextjs-postponed';
const NEXT_IS_PRERENDER_HEADER = 'x-nextjs-prerender';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-headers.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "hasBasePath", {
    enumerable: true,
    get: function() {
        return hasBasePath;
    }
});
const _pathhasprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/path-has-prefix.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function hasBasePath(path) {
    return (0, _pathhasprefix.pathHasPrefix)(path, basePath);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=has-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/remove-base-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeBasePath", {
    enumerable: true,
    get: function() {
        return removeBasePath;
    }
});
const _hasbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)");
const basePath = ("TURBOPACK compile-time value", "") || '';
function removeBasePath(path) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    // Can't trim the basePath if it has zero length!
    if (basePath.length === 0) return path;
    path = path.slice(basePath.length);
    if (!path.startsWith('/')) path = "/" + path;
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-base-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/detect-domain-locale.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "detectDomainLocale", {
    enumerable: true,
    get: function() {
        return detectDomainLocale;
    }
});
const detectDomainLocale = function() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=detect-domain-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/remove-locale.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "removeLocale", {
    enumerable: true,
    get: function() {
        return removeLocale;
    }
});
const _parsepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/parse-path.js [client] (ecmascript)");
function removeLocale(path, locale) {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return path;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=remove-locale.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/resolve-href.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resolveHref", {
    enumerable: true,
    get: function() {
        return resolveHref;
    }
});
const _querystring = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _formaturl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/format-url.js [client] (ecmascript)");
const _omit = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/omit.js [client] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
const _normalizetrailingslash = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/normalize-trailing-slash.js [client] (ecmascript)");
const _islocalurl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/is-local-url.js [client] (ecmascript)");
const _utils1 = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/index.js [client] (ecmascript)");
const _interpolateas = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/interpolate-as.js [client] (ecmascript)");
function resolveHref(router, href, resolveAs) {
    // we use a dummy base url for relative urls
    let base;
    let urlAsString = typeof href === 'string' ? href : (0, _formaturl.formatWithValidation)(href);
    // repeated slashes and backslashes in the URL are considered
    // invalid and will never match a Next.js page/file
    const urlProtoMatch = urlAsString.match(/^[a-zA-Z]{1,}:\/\//);
    const urlAsStringNoProto = urlProtoMatch ? urlAsString.slice(urlProtoMatch[0].length) : urlAsString;
    const urlParts = urlAsStringNoProto.split('?', 1);
    if ((urlParts[0] || '').match(/(\/\/|\\)/)) {
        console.error("Invalid href '" + urlAsString + "' passed to next/router in page: '" + router.pathname + "'. Repeated forward-slashes (//) or backslashes \\ are not valid in the href.");
        const normalizedUrl = (0, _utils.normalizeRepeatedSlashes)(urlAsStringNoProto);
        urlAsString = (urlProtoMatch ? urlProtoMatch[0] : '') + normalizedUrl;
    }
    // Return because it cannot be routed by the Next.js router
    if (!(0, _islocalurl.isLocalURL)(urlAsString)) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
    try {
        base = new URL(urlAsString.startsWith('#') ? router.asPath : router.pathname, 'http://n');
    } catch (_) {
        // fallback to / for invalid asPath values e.g. //
        base = new URL('/', 'http://n');
    }
    try {
        const finalUrl = new URL(urlAsString, base);
        finalUrl.pathname = (0, _normalizetrailingslash.normalizePathTrailingSlash)(finalUrl.pathname);
        let interpolatedAs = '';
        if ((0, _utils1.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
            const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
            const { result, params } = (0, _interpolateas.interpolateAs)(finalUrl.pathname, finalUrl.pathname, query);
            if (result) {
                interpolatedAs = (0, _formaturl.formatWithValidation)({
                    pathname: result,
                    hash: finalUrl.hash,
                    query: (0, _omit.omit)(query, params)
                });
            }
        }
        // if the origin didn't change, it means we received a relative href
        const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
        return resolveAs ? [
            resolvedHref,
            interpolatedAs || resolvedHref
        ] : resolvedHref;
    } catch (_) {
        return resolveAs ? [
            urlAsString
        ] : urlAsString;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=resolve-href.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/with-router.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return withRouter;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _router = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/router.js [client] (ecmascript)");
function withRouter(ComposedComponent) {
    function WithRouterWrapper(props) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ComposedComponent, {
            router: (0, _router.useRouter)(),
            ...props
        });
    }
    WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps;
    WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;
    if ("TURBOPACK compile-time truthy", 1) {
        const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
        WithRouterWrapper.displayName = "withRouter(" + name + ")";
    }
    return WithRouterWrapper;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=with-router.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/router.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* global window */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Router: null,
    createRouter: null,
    default: null,
    makePublicRouterInstance: null,
    useRouter: null,
    withRouter: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Router: function() {
        return _router.default;
    },
    createRouter: function() {
        return createRouter;
    },
    // Export the singletonRouter and this is the public API.
    default: function() {
        return _default;
    },
    makePublicRouterInstance: function() {
        return makePublicRouterInstance;
    },
    useRouter: function() {
        return useRouter;
    },
    withRouter: function() {
        return _withrouter.default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _router = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/router.js [client] (ecmascript)"));
const _routercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const _withrouter = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/with-router.js [client] (ecmascript)"));
const singletonRouter = {
    router: null,
    readyCallbacks: [],
    ready (callback) {
        if (this.router) return callback();
        if (typeof window !== 'undefined') {
            this.readyCallbacks.push(callback);
        }
    }
};
// Create public properties and methods of the router in the singletonRouter
const urlPropertyFields = [
    'pathname',
    'route',
    'query',
    'asPath',
    'components',
    'isFallback',
    'basePath',
    'locale',
    'locales',
    'defaultLocale',
    'isReady',
    'isPreview',
    'isLocaleDomain',
    'domainLocales'
];
const routerEvents = [
    'routeChangeStart',
    'beforeHistoryChange',
    'routeChangeComplete',
    'routeChangeError',
    'hashChangeStart',
    'hashChangeComplete'
];
const coreMethodFields = [
    'push',
    'replace',
    'reload',
    'back',
    'prefetch',
    'beforePopState'
];
// Events is a static property on the router, the router doesn't have to be initialized to use it
Object.defineProperty(singletonRouter, 'events', {
    get () {
        return _router.default.events;
    }
});
function getRouter() {
    if (!singletonRouter.router) {
        const message = 'No router instance found.\n' + 'You should only use "next/router" on the client side of your app.\n';
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false
        });
    }
    return singletonRouter.router;
}
urlPropertyFields.forEach((field)=>{
    // Here we need to use Object.defineProperty because we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    Object.defineProperty(singletonRouter, field, {
        get () {
            const router = getRouter();
            return router[field];
        }
    });
});
coreMethodFields.forEach((field)=>{
    // We don't really know the types here, so we add them later instead
    ;
    singletonRouter[field] = function() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        const router = getRouter();
        return router[field](...args);
    };
});
routerEvents.forEach((event)=>{
    singletonRouter.ready(()=>{
        _router.default.events.on(event, function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
            const _singletonRouter = singletonRouter;
            if (_singletonRouter[eventField]) {
                try {
                    _singletonRouter[eventField](...args);
                } catch (err) {
                    console.error("Error when running the Router event: " + eventField);
                    console.error((0, _iserror.default)(err) ? err.message + "\n" + err.stack : err + '');
                }
            }
        });
    });
});
const _default = singletonRouter;
function useRouter() {
    const router = _react.default.useContext(_routercontextsharedruntime.RouterContext);
    if (!router) {
        throw Object.defineProperty(new Error('NextRouter was not mounted. https://nextjs.org/docs/messages/next-router-not-mounted'), "__NEXT_ERROR_CODE", {
            value: "E509",
            enumerable: false
        });
    }
    return router;
}
function createRouter() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    singletonRouter.router = new _router.default(...args);
    singletonRouter.readyCallbacks.forEach((cb)=>cb());
    singletonRouter.readyCallbacks = [];
    return singletonRouter.router;
}
function makePublicRouterInstance(router) {
    const scopedRouter = router;
    const instance = {};
    for (const property of urlPropertyFields){
        if (typeof scopedRouter[property] === 'object') {
            instance[property] = Object.assign(Array.isArray(scopedRouter[property]) ? [] : {}, scopedRouter[property]) // makes sure query is not stateful
            ;
            continue;
        }
        instance[property] = scopedRouter[property];
    }
    // Events is a static property on the router, the router doesn't have to be initialized to use it
    instance.events = _router.default.events;
    coreMethodFields.forEach((field)=>{
        instance[field] = function() {
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
                args[_key] = arguments[_key];
            }
            return scopedRouter[field](...args);
        };
    });
    return instance;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=router.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/route-announcer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RouteAnnouncer: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RouteAnnouncer: function() {
        return RouteAnnouncer;
    },
    default: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _router = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/router.js [client] (ecmascript)");
const nextjsRouteAnnouncerStyles = {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 0,
    width: '1px',
    // https://medium.com/@jessebeach/beware-smushed-off-screen-accessible-text-5952a4c2cbfe
    whiteSpace: 'nowrap',
    wordWrap: 'normal'
};
const RouteAnnouncer = ()=>{
    const { asPath } = (0, _router.useRouter)();
    const [routeAnnouncement, setRouteAnnouncement] = _react.default.useState('');
    // Only announce the path change, but not for the first load because screen
    // reader will do that automatically.
    const previouslyLoadedPath = _react.default.useRef(asPath);
    // Every time the path changes, announce the new page’s title following this
    // priority: first the document title (from head), otherwise the first h1, or
    // if none of these exist, then the pathname from the URL. This methodology is
    // inspired by Marcy Sutton’s accessible client routing user testing. More
    // information can be found here:
    // https://www.gatsbyjs.com/blog/2019-07-11-user-testing-accessible-client-routing/
    _react.default.useEffect({
        "RouteAnnouncer.useEffect": ()=>{
            // If the path hasn't change, we do nothing.
            if (previouslyLoadedPath.current === asPath) return;
            previouslyLoadedPath.current = asPath;
            if (document.title) {
                setRouteAnnouncement(document.title);
            } else {
                const pageHeader = document.querySelector('h1');
                var _pageHeader_innerText;
                const content = (_pageHeader_innerText = pageHeader == null ? void 0 : pageHeader.innerText) != null ? _pageHeader_innerText : pageHeader == null ? void 0 : pageHeader.textContent;
                setRouteAnnouncement(content || asPath);
            }
        }
    }["RouteAnnouncer.useEffect"], [
        asPath
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
        "aria-live": "assertive" // Make the announcement immediately.
        ,
        id: "__next-route-announcer__",
        role: "alert",
        style: nextjsRouteAnnouncerStyles,
        children: routeAnnouncement
    });
};
const _default = RouteAnnouncer;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=route-announcer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "reportGlobalError", {
    enumerable: true,
    get: function() {
        return reportGlobalError;
    }
});
const reportGlobalError = typeof reportError === 'function' ? reportError : (error)=>{
    window.console.error(error);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-global-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stitched-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getReactStitchedError", {
    enumerable: true,
    get: function() {
        return getReactStitchedError;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const REACT_ERROR_STACK_BOTTOM_FRAME = 'react-stack-bottom-frame';
const REACT_ERROR_STACK_BOTTOM_FRAME_REGEX = new RegExp("(at " + REACT_ERROR_STACK_BOTTOM_FRAME + " )|(" + REACT_ERROR_STACK_BOTTOM_FRAME + "\\@)");
const captureOwnerStack = _react.default.captureOwnerStack ? _react.default.captureOwnerStack : ()=>'';
function getReactStitchedError(err) {
    if (typeof _react.default.captureOwnerStack !== 'function') {
        return err;
    }
    const isErrorInstance = (0, _iserror.default)(err);
    const originStack = isErrorInstance ? err.stack || '' : '';
    const originMessage = isErrorInstance ? err.message : '';
    const stackLines = originStack.split('\n');
    const indexOfSplit = stackLines.findIndex((line)=>REACT_ERROR_STACK_BOTTOM_FRAME_REGEX.test(line));
    const isOriginalReactError = indexOfSplit >= 0 // has the react-stack-bottom-frame
    ;
    let newStack = isOriginalReactError ? stackLines.slice(0, indexOfSplit).join('\n') : originStack;
    const newError = Object.defineProperty(new Error(originMessage), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    });
    // Copy all enumerable properties, e.g. digest
    Object.assign(newError, err);
    newError.stack = newStack;
    // Avoid duplicate overriding stack frames
    appendOwnerStack(newError);
    return newError;
}
function appendOwnerStack(error) {
    let stack = error.stack || '';
    // Avoid duplicate overriding stack frames
    const ownerStack = captureOwnerStack();
    if (ownerStack && stack.endsWith(ownerStack) === false) {
        stack += ownerStack;
        // Override stack
        error.stack = stack;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=stitched-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/react-client-callbacks/shared.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// This module can be shared between both pages router and app router
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "onRecoverableError", {
    enumerable: true,
    get: function() {
        return onRecoverableError;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _bailouttocsr = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [client] (ecmascript)");
const _reportglobalerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/react-client-callbacks/report-global-error.js [client] (ecmascript)");
const _stitchederror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stitched-error.js [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const onRecoverableError = (error, errorInfo)=>{
    // x-ref: https://github.com/facebook/react/pull/28736
    const cause = (0, _iserror.default)(error) && 'cause' in error ? error.cause : error;
    const stitchedError = (0, _stitchederror.getReactStitchedError)(cause);
    // In development mode, pass along the component stack to the error
    if (("TURBOPACK compile-time value", "development") === 'development' && errorInfo.componentStack) {
        ;
        stitchedError._componentStack = errorInfo.componentStack;
    }
    // Skip certain custom errors which are not expected to be reported on client
    if ((0, _bailouttocsr.isBailoutToCSRError)(cause)) return;
    (0, _reportglobalerror.reportGlobalError)(stitchedError);
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=shared.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/tracing/tracer.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _mitt = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)"));
class Span {
    end(endTime) {
        if (this.state.state === 'ended') {
            throw Object.defineProperty(new Error('Span has already ended'), "__NEXT_ERROR_CODE", {
                value: "E17",
                enumerable: false
            });
        }
        this.state = {
            state: 'ended',
            endTime: endTime != null ? endTime : Date.now()
        };
        this.onSpanEnd(this);
    }
    constructor(name, options, onSpanEnd){
        this.name = name;
        var _options_attributes;
        this.attributes = (_options_attributes = options.attributes) != null ? _options_attributes : {};
        var _options_startTime;
        this.startTime = (_options_startTime = options.startTime) != null ? _options_startTime : Date.now();
        this.onSpanEnd = onSpanEnd;
        this.state = {
            state: 'inprogress'
        };
    }
}
class Tracer {
    startSpan(name, options) {
        return new Span(name, options, this.handleSpanEnd);
    }
    onSpanEnd(cb) {
        this._emitter.on('spanend', cb);
        return ()=>{
            this._emitter.off('spanend', cb);
        };
    }
    constructor(){
        this._emitter = (0, _mitt.default)();
        this.handleSpanEnd = (span)=>{
            this._emitter.emit('spanend', span);
        };
    }
}
const _default = new Tracer();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=tracer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-url.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getSocketUrl", {
    enumerable: true,
    get: function() {
        return getSocketUrl;
    }
});
const _normalizedassetprefix = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/normalized-asset-prefix.js [client] (ecmascript)");
function getSocketProtocol(assetPrefix) {
    let protocol = window.location.protocol;
    try {
        // assetPrefix is a url
        protocol = new URL(assetPrefix).protocol;
    } catch (e) {}
    return protocol === 'http:' ? 'ws:' : 'wss:';
}
function getSocketUrl(assetPrefix) {
    const prefix = (0, _normalizedassetprefix.normalizedAssetPrefix)(assetPrefix);
    const protocol = getSocketProtocol(assetPrefix || '');
    if (URL.canParse(prefix)) {
        // since normalized asset prefix is ensured to be a URL format,
        // we can safely replace the protocol
        return prefix.replace(/^http/, 'ws');
    }
    const { hostname, port } = window.location;
    return protocol + "//" + hostname + (port ? ":" + port : '') + prefix;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-socket-url.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    addMessageListener: null,
    connectHMR: null,
    sendMessage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addMessageListener: function() {
        return addMessageListener;
    },
    connectHMR: function() {
        return connectHMR;
    },
    sendMessage: function() {
        return sendMessage;
    }
});
const _hotreloadertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _getsocketurl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-socket-url.js [client] (ecmascript)");
let source;
const eventCallbacks = [];
function addMessageListener(callback) {
    eventCallbacks.push(callback);
}
function sendMessage(data) {
    if (!source || source.readyState !== source.OPEN) return;
    return source.send(data);
}
let reconnections = 0;
let reloading = false;
let serverSessionId = null;
function connectHMR(options) {
    function init() {
        if (source) source.close();
        function handleOnline() {
            reconnections = 0;
            window.console.log('[HMR] connected');
        }
        function handleMessage(event) {
            // While the page is reloading, don't respond to any more messages.
            // On reconnect, the server may send an empty list of changes if it was restarted.
            if (reloading) {
                return;
            }
            // Coerce into HMR_ACTION_TYPES as that is the format.
            const msg = JSON.parse(event.data);
            if ('action' in msg && msg.action === _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED) {
                if (serverSessionId !== null && serverSessionId !== msg.data.sessionId) {
                    // Either the server's session id has changed and it's a new server, or
                    // it's been too long since we disconnected and we should reload the page.
                    // There could be 1) unhandled server errors and/or 2) stale content.
                    // Perform a hard reload of the page.
                    window.location.reload();
                    reloading = true;
                    return;
                }
                serverSessionId = msg.data.sessionId;
            }
            for (const eventCallback of eventCallbacks){
                eventCallback(msg);
            }
        }
        let timer;
        function handleDisconnect() {
            source.onerror = null;
            source.onclose = null;
            source.close();
            reconnections++;
            // After 25 reconnects we'll want to reload the page as it indicates the dev server is no longer running.
            if (reconnections > 25) {
                reloading = true;
                window.location.reload();
                return;
            }
            clearTimeout(timer);
            // Try again after 5 seconds
            timer = setTimeout(init, reconnections > 5 ? 5000 : 1000);
        }
        const url = (0, _getsocketurl.getSocketUrl)(options.assetPrefix);
        source = new window.WebSocket("" + url + options.path);
        source.onopen = handleOnline;
        source.onerror = handleDisconnect;
        source.onclose = handleDisconnect;
        source.onmessage = handleMessage;
    }
    init();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=websocket.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/tracing/report-to-socket.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return reportToSocket;
    }
});
const _websocket = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
function reportToSocket(span) {
    if (span.state.state !== 'ended') {
        throw Object.defineProperty(new Error('Expected span to be ended'), "__NEXT_ERROR_CODE", {
            value: "E302",
            enumerable: false
        });
    }
    (0, _websocket.sendMessage)(JSON.stringify({
        event: 'span-end',
        startTime: span.startTime,
        endTime: span.state.endTime,
        spanName: span.name,
        attributes: span.attributes
    }));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=report-to-socket.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    HTTPAccessErrorStatus: null,
    HTTP_ERROR_FALLBACK_ERROR_CODE: null,
    getAccessFallbackErrorTypeByStatus: null,
    getAccessFallbackHTTPStatus: null,
    isHTTPAccessFallbackError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    HTTPAccessErrorStatus: function() {
        return HTTPAccessErrorStatus;
    },
    HTTP_ERROR_FALLBACK_ERROR_CODE: function() {
        return HTTP_ERROR_FALLBACK_ERROR_CODE;
    },
    getAccessFallbackErrorTypeByStatus: function() {
        return getAccessFallbackErrorTypeByStatus;
    },
    getAccessFallbackHTTPStatus: function() {
        return getAccessFallbackHTTPStatus;
    },
    isHTTPAccessFallbackError: function() {
        return isHTTPAccessFallbackError;
    }
});
const HTTPAccessErrorStatus = {
    NOT_FOUND: 404,
    FORBIDDEN: 403,
    UNAUTHORIZED: 401
};
const ALLOWED_CODES = new Set(Object.values(HTTPAccessErrorStatus));
const HTTP_ERROR_FALLBACK_ERROR_CODE = 'NEXT_HTTP_ERROR_FALLBACK';
function isHTTPAccessFallbackError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const [prefix, httpStatus] = error.digest.split(';');
    return prefix === HTTP_ERROR_FALLBACK_ERROR_CODE && ALLOWED_CODES.has(Number(httpStatus));
}
function getAccessFallbackHTTPStatus(error) {
    const httpStatus = error.digest.split(';')[1];
    return Number(httpStatus);
}
function getAccessFallbackErrorTypeByStatus(status) {
    switch(status){
        case 401:
            return 'unauthorized';
        case 403:
            return 'forbidden';
        case 404:
            return 'not-found';
        default:
            return;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=http-access-fallback.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-status-code.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedirectStatusCode", {
    enumerable: true,
    get: function() {
        return RedirectStatusCode;
    }
});
var RedirectStatusCode = /*#__PURE__*/ function(RedirectStatusCode) {
    RedirectStatusCode[RedirectStatusCode["SeeOther"] = 303] = "SeeOther";
    RedirectStatusCode[RedirectStatusCode["TemporaryRedirect"] = 307] = "TemporaryRedirect";
    RedirectStatusCode[RedirectStatusCode["PermanentRedirect"] = 308] = "PermanentRedirect";
    return RedirectStatusCode;
}({});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-status-code.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    REDIRECT_ERROR_CODE: null,
    RedirectType: null,
    isRedirectError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    REDIRECT_ERROR_CODE: function() {
        return REDIRECT_ERROR_CODE;
    },
    RedirectType: function() {
        return RedirectType;
    },
    isRedirectError: function() {
        return isRedirectError;
    }
});
const _redirectstatuscode = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-status-code.js [client] (ecmascript)");
const REDIRECT_ERROR_CODE = 'NEXT_REDIRECT';
var RedirectType = /*#__PURE__*/ function(RedirectType) {
    RedirectType["push"] = "push";
    RedirectType["replace"] = "replace";
    return RedirectType;
}({});
function isRedirectError(error) {
    if (typeof error !== 'object' || error === null || !('digest' in error) || typeof error.digest !== 'string') {
        return false;
    }
    const digest = error.digest.split(';');
    const [errorCode, type] = digest;
    const destination = digest.slice(2, -2).join(';');
    const status = digest.at(-2);
    const statusCode = Number(status);
    return errorCode === REDIRECT_ERROR_CODE && (type === 'replace' || type === 'push') && typeof destination === 'string' && !isNaN(statusCode) && statusCode in _redirectstatuscode.RedirectStatusCode;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-next-router-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isNextRouterError", {
    enumerable: true,
    get: function() {
        return isNextRouterError;
    }
});
const _httpaccessfallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [client] (ecmascript)");
const _redirecterror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [client] (ecmascript)");
function isNextRouterError(error) {
    return (0, _redirecterror.isRedirectError)(error) || (0, _httpaccessfallback.isHTTPAccessFallbackError)(error);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-next-router-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    emit: null,
    off: null,
    on: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    emit: function() {
        return emit;
    },
    off: function() {
        return off;
    },
    on: function() {
        return on;
    }
});
let handlers = new Set();
let queue = [];
function drain() {
    // Draining should never happen synchronously in case multiple handlers are
    // registered.
    setTimeout(function() {
        while(Boolean(queue.length) && // Or, if all handlers removed themselves as a result of handling the
        // event(s)
        Boolean(handlers.size)){
            const ev = queue.shift();
            handlers.forEach((handler)=>handler(ev));
        }
    }, 1);
}
function emit(ev) {
    queue.push(Object.freeze({
        ...ev
    }));
    drain();
}
function on(fn) {
    if (handlers.has(fn)) {
        return false;
    }
    handlers.add(fn);
    drain();
    return true;
}
function off(fn) {
    if (handlers.has(fn)) {
        handlers.delete(fn);
        return true;
    }
    return false;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bus.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getDefaultHydrationErrorMessage: null,
    getHydrationErrorStackInfo: null,
    isHydrationError: null,
    isReactHydrationErrorMessage: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getDefaultHydrationErrorMessage: function() {
        return getDefaultHydrationErrorMessage;
    },
    getHydrationErrorStackInfo: function() {
        return getHydrationErrorStackInfo;
    },
    isHydrationError: function() {
        return isHydrationError;
    },
    isReactHydrationErrorMessage: function() {
        return isReactHydrationErrorMessage;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/is-error.js [client] (ecmascript)"));
const hydrationErrorRegex = /hydration failed|while hydrating|content does not match|did not match|HTML didn't match/i;
const reactUnifiedMismatchWarning = "Hydration failed because the server rendered HTML didn't match the client. As a result this tree will be regenerated on the client. This can happen if a SSR-ed Client Component used";
const reactHydrationStartMessages = [
    reactUnifiedMismatchWarning,
    "A tree hydrated but some attributes of the server rendered HTML didn't match the client properties. This won't be patched up. This can happen if a SSR-ed Client Component used:"
];
const reactHydrationErrorDocLink = 'https://react.dev/link/hydration-mismatch';
const getDefaultHydrationErrorMessage = ()=>{
    return reactUnifiedMismatchWarning;
};
function isHydrationError(error) {
    return (0, _iserror.default)(error) && hydrationErrorRegex.test(error.message);
}
function isReactHydrationErrorMessage(msg) {
    return reactHydrationStartMessages.some((prefix)=>msg.startsWith(prefix));
}
function getHydrationErrorStackInfo(rawMessage) {
    rawMessage = rawMessage.replace(/^Error: /, '');
    if (!isReactHydrationErrorMessage(rawMessage)) {
        return {
            message: null
        };
    }
    const firstLineBreak = rawMessage.indexOf('\n');
    rawMessage = rawMessage.slice(firstLineBreak + 1).trim();
    const [message, trailing] = rawMessage.split("" + reactHydrationErrorDocLink);
    const trimmedMessage = message.trim();
    // React built-in hydration diff starts with a newline, checking if length is > 1
    if (trailing && trailing.length > 1) {
        const stacks = [];
        const diffs = [];
        trailing.split('\n').forEach((line)=>{
            if (line.trim() === '') return;
            if (line.trim().startsWith('at ')) {
                stacks.push(line);
            } else {
                diffs.push(line);
            }
        });
        return {
            message: trimmedMessage,
            link: reactHydrationErrorDocLink,
            diff: diffs.join('\n'),
            stack: stacks.join('\n')
        };
    } else {
        return {
            message: trimmedMessage,
            link: reactHydrationErrorDocLink,
            stack: trailing
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=is-hydration-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-stack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseStack", {
    enumerable: true,
    get: function() {
        return parseStack;
    }
});
const _stacktraceparser = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)");
const _ishydrationerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const regexNextStatic = /\/_next(\/static\/.+)/;
function parseStack(stack) {
    if (!stack) return [];
    const messageAndStack = stack.replace(/^Error: /, '');
    if ((0, _ishydrationerror.isReactHydrationErrorMessage)(messageAndStack)) {
        const { stack: parsedStack } = (0, _ishydrationerror.getHydrationErrorStackInfo)(messageAndStack);
        if (parsedStack) {
            stack = parsedStack;
        }
    }
    // throw away eval information that stacktrace-parser doesn't support
    // adapted from https://github.com/stacktracejs/error-stack-parser/blob/9f33c224b5d7b607755eb277f9d51fcdb7287e24/error-stack-parser.js#L59C33-L59C62
    stack = stack.split('\n').map((line)=>{
        if (line.includes('(eval ')) {
            line = line.replace(/eval code/g, 'eval').replace(/\(eval at [^()]* \(/, '(file://').replace(/\),.*$/g, ')');
        }
        return line;
    }).join('\n');
    const frames = (0, _stacktraceparser.parse)(stack);
    return frames.map((frame)=>{
        try {
            const url = new URL(frame.file);
            const res = regexNextStatic.exec(url.pathname);
            if (res) {
                var _process_env___NEXT_DIST_DIR_replace, _process_env___NEXT_DIST_DIR;
                const distDir = (_process_env___NEXT_DIST_DIR = ("TURBOPACK compile-time value", "/Users/eeo/personal/myNext/childrenDance/.next")) == null ? void 0 : (_process_env___NEXT_DIST_DIR_replace = _process_env___NEXT_DIST_DIR.replace(/\\/g, '/')) == null ? void 0 : _process_env___NEXT_DIST_DIR_replace.replace(/\/$/, '');
                if (distDir) {
                    frame.file = 'file://' + distDir.concat(res.pop()) + url.search;
                }
            }
        } catch (e) {}
        return frame;
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parse-stack.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "parseComponentStack", {
    enumerable: true,
    get: function() {
        return parseComponentStack;
    }
});
var LocationType = /*#__PURE__*/ function(LocationType) {
    LocationType["FILE"] = "file";
    LocationType["WEBPACK_INTERNAL"] = "webpack-internal";
    LocationType["HTTP"] = "http";
    LocationType["PROTOCOL_RELATIVE"] = "protocol-relative";
    LocationType["UNKNOWN"] = "unknown";
    return LocationType;
}(LocationType || {});
/**
 * Get the type of frame line based on the location
 */ function getLocationType(location) {
    if (location.startsWith('file://')) {
        return "file";
    }
    if (location.includes('webpack-internal://')) {
        return "webpack-internal";
    }
    if (location.startsWith('http://') || location.startsWith('https://')) {
        return "http";
    }
    if (location.startsWith('//')) {
        return "protocol-relative";
    }
    return "unknown";
}
function parseStackFrameLocation(location) {
    const locationType = getLocationType(location);
    const modulePath = location == null ? void 0 : location.replace(/^(webpack-internal:\/\/\/|file:\/\/)(\(.*\)\/)?/, '');
    var _modulePath_match;
    const [, file, lineNumber, column] = (_modulePath_match = modulePath == null ? void 0 : modulePath.match(/^(.+):(\d+):(\d+)/)) != null ? _modulePath_match : [];
    switch(locationType){
        case "file":
        case "webpack-internal":
            return {
                canOpenInEditor: true,
                file,
                lineNumber: lineNumber ? Number(lineNumber) : undefined,
                column: column ? Number(column) : undefined
            };
        // When the location is a URL we only show the file
        // TODO: Resolve http(s) URLs through sourcemaps
        case "http":
        case "protocol-relative":
        case "unknown":
        default:
            {
                return {
                    canOpenInEditor: false
                };
            }
    }
}
function parseComponentStack(componentStack) {
    const componentStackFrames = [];
    for (const line of componentStack.trim().split('\n')){
        // TODO: support safari stack trace
        // Get component and file from the component stack line
        const match = /at ([^ ]+)( \((.*)\))?/.exec(line);
        if (match == null ? void 0 : match[1]) {
            const component = match[1];
            const location = match[3];
            if (!location) {
                componentStackFrames.push({
                    canOpenInEditor: false,
                    component
                });
                continue;
            }
            // Stop parsing the component stack if we reach a Next.js component
            if (location == null ? void 0 : location.includes('next/dist')) {
                break;
            }
            const frameLocation = parseStackFrameLocation(location);
            componentStackFrames.push({
                component,
                ...frameLocation
            });
        }
    }
    return componentStackFrames;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=parse-component-stack.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getHydrationWarningType: null,
    getReactHydrationDiffSegments: null,
    hydrationErrorState: null,
    storeHydrationErrorStateFromConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getHydrationWarningType: function() {
        return getHydrationWarningType;
    },
    getReactHydrationDiffSegments: function() {
        return getReactHydrationDiffSegments;
    },
    hydrationErrorState: function() {
        return hydrationErrorState;
    },
    storeHydrationErrorStateFromConsoleArgs: function() {
        return storeHydrationErrorStateFromConsoleArgs;
    }
});
const _ishydrationerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const hydrationErrorState = {};
// https://github.com/facebook/react/blob/main/packages/react-dom/src/__tests__/ReactDOMHydrationDiff-test.js used as a reference
const htmlTagsWarnings = new Set([
    'Warning: In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s',
    'Warning: In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s',
    'Warning: In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.',
    "Warning: In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.",
    'Warning: Expected server HTML to contain a matching <%s> in <%s>.%s',
    'Warning: Did not expect server HTML to contain a <%s> in <%s>.%s'
]);
const textAndTagsMismatchWarnings = new Set([
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
const textMismatchWarning = 'Warning: Text content did not match. Server: "%s" Client: "%s"%s';
const getHydrationWarningType = (message)=>{
    if (typeof message !== 'string') {
        // TODO: Doesn't make sense to treat no message as a hydration error message.
        // We should bail out somewhere earlier.
        return 'text';
    }
    const normalizedMessage = message.startsWith('Warning: ') ? message : "Warning: " + message;
    if (isHtmlTagsWarning(normalizedMessage)) return 'tag';
    if (isTextInTagsMismatchWarning(normalizedMessage)) return 'text-in-tag';
    return 'text';
};
const isHtmlTagsWarning = (message)=>htmlTagsWarnings.has(message);
const isTextMismatchWarning = (message)=>textMismatchWarning === message;
const isTextInTagsMismatchWarning = (msg)=>textAndTagsMismatchWarnings.has(msg);
const isKnownHydrationWarning = (message)=>{
    if (typeof message !== 'string') {
        return false;
    }
    // React 18 has the `Warning: ` prefix.
    // React 19 does not.
    const normalizedMessage = message.startsWith('Warning: ') ? message : "Warning: " + message;
    return isHtmlTagsWarning(normalizedMessage) || isTextInTagsMismatchWarning(normalizedMessage) || isTextMismatchWarning(normalizedMessage);
};
const getReactHydrationDiffSegments = (msg)=>{
    if (msg) {
        const { message, diff } = (0, _ishydrationerror.getHydrationErrorStackInfo)(msg);
        if (message) return [
            message,
            diff
        ];
    }
    return undefined;
};
function storeHydrationErrorStateFromConsoleArgs() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const [msg, serverContent, clientContent, componentStack] = args;
    if (isKnownHydrationWarning(msg)) {
        hydrationErrorState.warning = [
            // remove the last %s from the message
            msg,
            serverContent,
            clientContent
        ];
        hydrationErrorState.componentStack = componentStack;
        hydrationErrorState.serverContent = serverContent;
        hydrationErrorState.clientContent = clientContent;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hydration-error-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ACTION_BEFORE_REFRESH: null,
    ACTION_BUILD_ERROR: null,
    ACTION_BUILD_OK: null,
    ACTION_DEBUG_INFO: null,
    ACTION_REFRESH: null,
    ACTION_STATIC_INDICATOR: null,
    ACTION_UNHANDLED_ERROR: null,
    ACTION_UNHANDLED_REJECTION: null,
    ACTION_VERSION_INFO: null,
    INITIAL_OVERLAY_STATE: null,
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: null,
    useErrorOverlayReducer: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ACTION_BEFORE_REFRESH: function() {
        return ACTION_BEFORE_REFRESH;
    },
    ACTION_BUILD_ERROR: function() {
        return ACTION_BUILD_ERROR;
    },
    ACTION_BUILD_OK: function() {
        return ACTION_BUILD_OK;
    },
    ACTION_DEBUG_INFO: function() {
        return ACTION_DEBUG_INFO;
    },
    ACTION_REFRESH: function() {
        return ACTION_REFRESH;
    },
    ACTION_STATIC_INDICATOR: function() {
        return ACTION_STATIC_INDICATOR;
    },
    ACTION_UNHANDLED_ERROR: function() {
        return ACTION_UNHANDLED_ERROR;
    },
    ACTION_UNHANDLED_REJECTION: function() {
        return ACTION_UNHANDLED_REJECTION;
    },
    ACTION_VERSION_INFO: function() {
        return ACTION_VERSION_INFO;
    },
    INITIAL_OVERLAY_STATE: function() {
        return INITIAL_OVERLAY_STATE;
    },
    REACT_REFRESH_FULL_RELOAD_FROM_ERROR: function() {
        return REACT_REFRESH_FULL_RELOAD_FROM_ERROR;
    },
    useErrorOverlayReducer: function() {
        return useErrorOverlayReducer;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
const ACTION_STATIC_INDICATOR = 'static-indicator';
const ACTION_BUILD_OK = 'build-ok';
const ACTION_BUILD_ERROR = 'build-error';
const ACTION_BEFORE_REFRESH = 'before-fast-refresh';
const ACTION_REFRESH = 'fast-refresh';
const ACTION_VERSION_INFO = 'version-info';
const ACTION_UNHANDLED_ERROR = 'unhandled-error';
const ACTION_UNHANDLED_REJECTION = 'unhandled-rejection';
const ACTION_DEBUG_INFO = 'debug-info';
function pushErrorFilterDuplicates(errors, err) {
    return [
        ...errors.filter((e)=>{
            // Filter out duplicate errors
            return e.event.reason !== err.event.reason;
        }),
        err
    ];
}
const INITIAL_OVERLAY_STATE = {
    nextId: 1,
    buildError: null,
    errors: [],
    notFound: false,
    staticIndicator: false,
    refreshState: {
        type: 'idle'
    },
    rootLayoutMissingTags: [],
    versionInfo: {
        installed: '0.0.0',
        staleness: 'unknown'
    },
    debugInfo: undefined
};
function useErrorOverlayReducer() {
    return (0, _react.useReducer)((_state, action)=>{
        switch(action.type){
            case ACTION_DEBUG_INFO:
                {
                    return {
                        ..._state,
                        debugInfo: action.debugInfo
                    };
                }
            case ACTION_STATIC_INDICATOR:
                {
                    return {
                        ..._state,
                        staticIndicator: action.staticIndicator
                    };
                }
            case ACTION_BUILD_OK:
                {
                    return {
                        ..._state,
                        buildError: null
                    };
                }
            case ACTION_BUILD_ERROR:
                {
                    return {
                        ..._state,
                        buildError: action.message
                    };
                }
            case ACTION_BEFORE_REFRESH:
                {
                    return {
                        ..._state,
                        refreshState: {
                            type: 'pending',
                            errors: []
                        }
                    };
                }
            case ACTION_REFRESH:
                {
                    return {
                        ..._state,
                        buildError: null,
                        errors: // and UNHANDLED_REJECTION events might be dispatched between the
                        // BEFORE_REFRESH and the REFRESH event. We want to keep those errors
                        // around until the next refresh. Otherwise we run into a race
                        // condition where those errors would be cleared on refresh completion
                        // before they can be displayed.
                        _state.refreshState.type === 'pending' ? _state.refreshState.errors : [],
                        refreshState: {
                            type: 'idle'
                        }
                    };
                }
            case ACTION_UNHANDLED_ERROR:
            case ACTION_UNHANDLED_REJECTION:
                {
                    switch(_state.refreshState.type){
                        case 'idle':
                            {
                                return {
                                    ..._state,
                                    nextId: _state.nextId + 1,
                                    errors: pushErrorFilterDuplicates(_state.errors, {
                                        id: _state.nextId,
                                        event: action
                                    })
                                };
                            }
                        case 'pending':
                            {
                                return {
                                    ..._state,
                                    nextId: _state.nextId + 1,
                                    refreshState: {
                                        ..._state.refreshState,
                                        errors: pushErrorFilterDuplicates(_state.refreshState.errors, {
                                            id: _state.nextId,
                                            event: action
                                        })
                                    }
                                };
                            }
                        default:
                            // eslint-disable-next-line @typescript-eslint/no-unused-vars
                            const _ = _state.refreshState;
                            return _state;
                    }
                }
            case ACTION_VERSION_INFO:
                {
                    return {
                        ..._state,
                        versionInfo: action.versionInfo
                    };
                }
            default:
                {
                    return _state;
                }
        }
    }, INITIAL_OVERLAY_STATE);
}
const REACT_REFRESH_FULL_RELOAD_FROM_ERROR = '[Fast Refresh] performing full reload because your application had an unrecoverable error';
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=shared.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/attach-hydration-error-state.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "attachHydrationErrorState", {
    enumerable: true,
    get: function() {
        return attachHydrationErrorState;
    }
});
const _ishydrationerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [client] (ecmascript)");
function attachHydrationErrorState(error) {
    if ((0, _ishydrationerror.isHydrationError)(error) && !error.message.includes('https://nextjs.org/docs/messages/react-hydration-error')) {
        const reactHydrationDiffSegments = (0, _hydrationerrorinfo.getReactHydrationDiffSegments)(error.message);
        let parsedHydrationErrorState = {};
        if (reactHydrationDiffSegments) {
            parsedHydrationErrorState = {
                ...error.details,
                ..._hydrationerrorinfo.hydrationErrorState,
                warning: _hydrationerrorinfo.hydrationErrorState.warning || [
                    (0, _ishydrationerror.getDefaultHydrationErrorMessage)()
                ],
                notes: reactHydrationDiffSegments[0],
                reactOutputComponentDiff: reactHydrationDiffSegments[1]
            };
        } else {
            // If there's any extra information in the error message to display,
            // append it to the error message details property
            if (_hydrationerrorinfo.hydrationErrorState.warning) {
                // The patched console.error found hydration errors logged by React
                // Append the logged warning to the error message
                parsedHydrationErrorState = {
                    ...error.details,
                    // It contains the warning, component stack, server and client tag names
                    ..._hydrationerrorinfo.hydrationErrorState
                };
            }
        }
        ;
        error.details = parsedHydrationErrorState;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=attach-hydration-error-state.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/webpack-module-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatFrameSourceFile: null,
    isWebpackInternalResource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatFrameSourceFile: function() {
        return formatFrameSourceFile;
    },
    isWebpackInternalResource: function() {
        return isWebpackInternalResource;
    }
});
const replacementRegExes = [
    /^(rsc:\/\/React\/[^/]+\/)/,
    /^webpack-internal:\/\/\/(\([\w-]+\)\/)?/,
    /^(webpack:\/\/\/|webpack:\/\/(_N_E\/)?)(\([\w-]+\)\/)?/,
    /\?\w+(\?\d+)?$/,
    /\?\d+$/
];
function isWebpackInternalResource(file) {
    for (const regex of replacementRegExes){
        if (regex.test(file)) return true;
        file = file.replace(regex, '');
    }
    return false;
}
function formatFrameSourceFile(file) {
    for (const regex of replacementRegExes){
        file = file.replace(regex, '');
    }
    return file;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=webpack-module-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFrameSource: null,
    getOriginalStackFrames: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFrameSource: function() {
        return getFrameSource;
    },
    getOriginalStackFrames: function() {
        return getOriginalStackFrames;
    }
});
const _webpackmodulepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/webpack-module-path.js [client] (ecmascript)");
function getOriginalStackFrame(source, type, isAppDir, errorMessage) {
    var _source_file, _source_file1;
    async function _getOriginalStackFrame() {
        var _body_originalStackFrame;
        const params = new URLSearchParams();
        params.append('isServer', String(type === 'server'));
        params.append('isEdgeServer', String(type === 'edge-server'));
        params.append('isAppDirectory', String(isAppDir));
        params.append('errorMessage', errorMessage);
        for(const key in source){
            var _source_key;
            params.append(key, ((_source_key = source[key]) != null ? _source_key : '').toString());
        }
        const controller = new AbortController();
        const tm = setTimeout(()=>controller.abort(), 3000);
        const res = await self.fetch((("TURBOPACK compile-time value", "") || '') + "/__nextjs_original-stack-frame?" + params.toString(), {
            signal: controller.signal
        }).finally(()=>{
            clearTimeout(tm);
        });
        if (!res.ok || res.status === 204) {
            return Promise.reject(Object.defineProperty(new Error(await res.text()), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false
            }));
        }
        const body = await res.json();
        return {
            error: false,
            reason: null,
            external: false,
            sourceStackFrame: source,
            originalStackFrame: body.originalStackFrame,
            originalCodeFrame: body.originalCodeFrame || null,
            sourcePackage: body.sourcePackage,
            ignored: ((_body_originalStackFrame = body.originalStackFrame) == null ? void 0 : _body_originalStackFrame.ignored) || false
        };
    }
    // TODO: merge this section into ignoredList handling
    if (source.file === 'file://' || ((_source_file = source.file) == null ? void 0 : _source_file.match(/^node:/)) || ((_source_file1 = source.file) == null ? void 0 : _source_file1.match(/https?:\/\//))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null,
            sourcePackage: null,
            ignored: true
        });
    }
    return _getOriginalStackFrame().catch((err)=>{
        var _err_message, _ref;
        return {
            error: true,
            reason: (_ref = (_err_message = err == null ? void 0 : err.message) != null ? _err_message : err == null ? void 0 : err.toString()) != null ? _ref : 'Unknown Error',
            external: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null,
            sourcePackage: null,
            ignored: false
        };
    });
}
function getOriginalStackFrames(frames, type, isAppDir, errorMessage) {
    return Promise.all(frames.map((frame)=>getOriginalStackFrame(frame, type, isAppDir, errorMessage)));
}
function getFrameSource(frame) {
    if (!frame.file) return '';
    const isWebpackFrame = (0, _webpackmodulepath.isWebpackInternalResource)(frame.file);
    let str = '';
    // Skip URL parsing for webpack internal file paths.
    if (isWebpackFrame) {
        str = (0, _webpackmodulepath.formatFrameSourceFile)(frame.file);
    } else {
        try {
            var _globalThis_location;
            const u = new URL(frame.file);
            let parsedPath = '';
            // Strip the origin for same-origin scripts.
            if (((_globalThis_location = globalThis.location) == null ? void 0 : _globalThis_location.origin) !== u.origin) {
                // URLs can be valid without an `origin`, so long as they have a
                // `protocol`. However, `origin` is preferred.
                if (u.origin === 'null') {
                    parsedPath += u.protocol;
                } else {
                    parsedPath += u.origin;
                }
            }
            // Strip query string information as it's typically too verbose to be
            // meaningful.
            parsedPath += u.pathname;
            str = (0, _webpackmodulepath.formatFrameSourceFile)(parsedPath);
        } catch (e) {
            str = (0, _webpackmodulepath.formatFrameSourceFile)(frame.file);
        }
    }
    if (!(0, _webpackmodulepath.isWebpackInternalResource)(frame.file) && frame.lineNumber != null) {
        if (str) {
            if (frame.column != null) {
                str += " (" + frame.lineNumber + ":" + frame.column + ")";
            } else {
                str += " (" + frame.lineNumber + ")";
            }
        }
    }
    return str;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=stack-frame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-error-by-type.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getErrorByType", {
    enumerable: true,
    get: function() {
        return getErrorByType;
    }
});
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [client] (ecmascript)");
const _errorsource = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
async function getErrorByType(ev, isAppDir) {
    const { id, event } = ev;
    switch(event.type){
        case _shared.ACTION_UNHANDLED_ERROR:
        case _shared.ACTION_UNHANDLED_REJECTION:
            {
                const readyRuntimeError = {
                    id,
                    runtime: true,
                    error: event.reason,
                    frames: await (0, _stackframe.getOriginalStackFrames)(event.frames, (0, _errorsource.getErrorSource)(event.reason), isAppDir, event.reason.toString())
                };
                if (event.type === _shared.ACTION_UNHANDLED_ERROR) {
                    readyRuntimeError.componentStackFrames = event.componentStackFrames;
                }
                return readyRuntimeError;
            }
        default:
            {
                break;
            }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    throw Object.defineProperty(new Error('type system invariant violation'), "__NEXT_ERROR_CODE", {
        value: "E335",
        enumerable: false
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-error-by-type.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/node-stack-frames.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFilesystemFrame: null,
    getServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFilesystemFrame: function() {
        return getFilesystemFrame;
    },
    getServerError: function() {
        return getServerError;
    }
});
const _stacktraceparser = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/stacktrace-parser/stack-trace-parser.cjs.js [client] (ecmascript)");
const _errorsource = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
function getFilesystemFrame(frame) {
    const f = {
        ...frame
    };
    if (typeof f.file === 'string') {
        if (f.file.startsWith('/') || // Win32:
        /^[a-z]:\\/i.test(f.file) || // Win32 UNC:
        f.file.startsWith('\\\\')) {
            f.file = "file://" + f.file;
        }
    }
    return f;
}
function getServerError(error, type) {
    if (error.name === 'TurbopackInternalError') {
        // If this is an internal Turbopack error we shouldn't show internal details
        // to the user. These are written to a log file instead.
        const turbopackInternalError = Object.defineProperty(new Error('An unexpected Turbopack error occurred. Please see the output of `next dev` for more details.'), "__NEXT_ERROR_CODE", {
            value: "E167",
            enumerable: false
        });
        (0, _errorsource.decorateServerError)(turbopackInternalError, type);
        return turbopackInternalError;
    }
    let n;
    try {
        throw Object.defineProperty(new Error(error.message), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: false
        });
    } catch (e) {
        n = e;
    }
    n.name = error.name;
    try {
        n.stack = n.toString() + "\n" + (0, _stacktraceparser.parse)(error.stack).map(getFilesystemFrame).map((f)=>{
            let str = "    at " + f.methodName;
            if (f.file) {
                let loc = f.file;
                if (f.lineNumber) {
                    loc += ":" + f.lineNumber;
                    if (f.column) {
                        loc += ":" + f.column;
                    }
                }
                str += " (" + loc + ")";
            }
            return str;
        }).join('\n');
    } catch (e) {
        n.stack = error.stack;
    }
    (0, _errorsource.decorateServerError)(n, type);
    return n;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=node-stack-frames.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ShadowPortal", {
    enumerable: true,
    get: function() {
        return ShadowPortal;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _reactdom = __turbopack_require__("[project]/node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/index.js [client] (ecmascript)");
function ShadowPortal(param) {
    let { children } = param;
    let portalNode = _react.useRef(null);
    let shadowNode = _react.useRef(null);
    let [, forceUpdate] = _react.useState();
    _react.useLayoutEffect({
        "ShadowPortal.useLayoutEffect": ()=>{
            const ownerDocument = document;
            portalNode.current = ownerDocument.createElement('nextjs-portal');
            shadowNode.current = portalNode.current.attachShadow({
                mode: 'open'
            });
            ownerDocument.body.appendChild(portalNode.current);
            forceUpdate({});
            return ({
                "ShadowPortal.useLayoutEffect": ()=>{
                    if (portalNode.current && portalNode.current.ownerDocument) {
                        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
                    }
                }
            })["ShadowPortal.useLayoutEffect"];
        }
    }["ShadowPortal.useLayoutEffect"], []);
    return shadowNode.current ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, shadowNode.current) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ShadowPortal.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOnClickOutside", {
    enumerable: true,
    get: function() {
        return useOnClickOutside;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
function useOnClickOutside(el, handler) {
    _react.useEffect({
        "useOnClickOutside.useEffect": ()=>{
            if (el == null || handler == null) {
                return;
            }
            const listener = {
                "useOnClickOutside.useEffect.listener": (e)=>{
                    // Do nothing if clicking ref's element or descendent elements
                    if (!el || el.contains(e.target)) {
                        return;
                    }
                    handler(e);
                }
            }["useOnClickOutside.useEffect.listener"];
            const root = el.getRootNode();
            root.addEventListener('mousedown', listener);
            root.addEventListener('touchstart', listener, {
                passive: false
            });
            return ({
                "useOnClickOutside.useEffect": function() {
                    root.removeEventListener('mousedown', listener);
                    root.removeEventListener('touchstart', listener);
                }
            })["useOnClickOutside.useEffect"];
        }
    }["useOnClickOutside.useEffect"], [
        handler,
        el
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-on-click-outside.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Dialog", {
    enumerable: true,
    get: function() {
        return Dialog;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _useonclickoutside = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/hooks/use-on-click-outside.js [client] (ecmascript)");
const Dialog = function Dialog(param) {
    let { children, type, onClose, ...props } = param;
    const [dialog, setDialog] = _react.useState(null);
    const [role, setRole] = _react.useState(typeof document !== 'undefined' && document.hasFocus() ? 'dialog' : undefined);
    const onDialog = _react.useCallback({
        "Dialog.useCallback[onDialog]": (node)=>{
            setDialog(node);
        }
    }["Dialog.useCallback[onDialog]"], []);
    (0, _useonclickoutside.useOnClickOutside)(dialog, (e)=>{
        e.preventDefault();
        return onClose == null ? void 0 : onClose();
    });
    // Make HTMLElements with `role=link` accessible to be triggered by the
    // keyboard, i.e. [Enter].
    _react.useEffect({
        "Dialog.useEffect": ()=>{
            if (dialog == null) {
                return;
            }
            const root = dialog.getRootNode();
            // Always true, but we do this for TypeScript:
            if (!(root instanceof ShadowRoot)) {
                return;
            }
            const shadowRoot = root;
            function handler(e) {
                const el = shadowRoot.activeElement;
                if (e.key === 'Enter' && el instanceof HTMLElement && el.getAttribute('role') === 'link') {
                    e.preventDefault();
                    e.stopPropagation();
                    el.click();
                }
            }
            function handleFocus() {
                // safari will force itself as the active application when a background page triggers any sort of autofocus
                // this is a workaround to only set the dialog role if the document has focus
                setRole(document.hasFocus() ? 'dialog' : undefined);
            }
            shadowRoot.addEventListener('keydown', handler);
            window.addEventListener('focus', handleFocus);
            window.addEventListener('blur', handleFocus);
            return ({
                "Dialog.useEffect": ()=>{
                    shadowRoot.removeEventListener('keydown', handler);
                    window.removeEventListener('focus', handleFocus);
                    window.removeEventListener('blur', handleFocus);
                }
            })["Dialog.useEffect"];
        }
    }["Dialog.useEffect"], [
        dialog
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        ref: onDialog,
        "data-nextjs-dialog": true,
        tabIndex: -1,
        role: role,
        "aria-labelledby": props['aria-labelledby'],
        "aria-describedby": props['aria-describedby'],
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "data-nextjs-dialog-banner": true,
                className: "banner-" + type
            }),
            children
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Dialog.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogBody", {
    enumerable: true,
    get: function() {
        return DialogBody;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const DialogBody = function DialogBody(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-body": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogBody.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogContent", {
    enumerable: true,
    get: function() {
        return DialogContent;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const DialogContent = function DialogContent(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-content": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogContent.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogHeader", {
    enumerable: true,
    get: function() {
        return DialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const DialogHeader = function DialogHeader(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-header": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogHeader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "noop", {
    enumerable: true,
    get: function() {
        return noop;
    }
});
function noop(strings) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    const lastIndex = strings.length - 1;
    return strings.slice(0, lastIndex).reduce((p, s, i)=>p + s + keys[i], '') + strings[lastIndex];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-template.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: var(--color-background);\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 56px);\n    overflow-y: hidden;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Dialog: null,
    DialogBody: null,
    DialogContent: null,
    DialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Dialog: function() {
        return _Dialog.Dialog;
    },
    DialogBody: function() {
        return _DialogBody.DialogBody;
    },
    DialogContent: function() {
        return _DialogContent.DialogContent;
    },
    DialogHeader: function() {
        return _DialogHeader.DialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/Dialog.js [client] (ecmascript)");
const _DialogBody = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogBody.js [client] (ecmascript)");
const _DialogContent = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogContent.js [client] (ecmascript)");
const _DialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/DialogHeader.js [client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/styles.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* eslint-disable */ // @ts-nocheck
// Copied from https://github.com/medialize/ally.js
// License: MIT
// Copyright (c) 2015 Rodney Rehm
//
// Entrypoint: ally.js/maintain/tab-focus
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _platform = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/platform/platform.js [client] (ecmascript)"));
const _cssescape = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/css.escape/css.escape.js [client] (ecmascript)"));
// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
function nodeArray(input) {
    if (!input) {
        return [];
    }
    if (Array.isArray(input)) {
        return input;
    }
    // instanceof Node - does not work with iframes
    if (input.nodeType !== undefined) {
        return [
            input
        ];
    }
    if (typeof input === 'string') {
        input = document.querySelectorAll(input);
    }
    if (input.length !== undefined) {
        return [].slice.call(input, 0);
    }
    throw Object.defineProperty(new TypeError('unexpected input ' + String(input)), "__NEXT_ERROR_CODE", {
        value: "E545",
        enumerable: false
    });
}
function contextToElement(_ref) {
    var context = _ref.context, _ref$label = _ref.label, label = _ref$label === undefined ? 'context-to-element' : _ref$label, resolveDocument = _ref.resolveDocument, defaultToDocument = _ref.defaultToDocument;
    var element = nodeArray(context)[0];
    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
        element = element.documentElement;
    }
    if (!element && defaultToDocument) {
        return document.documentElement;
    }
    if (!element) {
        throw Object.defineProperty(new TypeError(label + ' requires valid options.context'), "__NEXT_ERROR_CODE", {
            value: "E604",
            enumerable: false
        });
    }
    if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        throw Object.defineProperty(new TypeError(label + ' requires options.context to be an Element'), "__NEXT_ERROR_CODE", {
            value: "E554",
            enumerable: false
        });
    }
    return element;
}
function getShadowHost() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var element = contextToElement({
        label: 'get/shadow-host',
        context: context
    });
    // walk up to the root
    var container = null;
    while(element){
        container = element;
        element = element.parentNode;
    }
    // https://developer.mozilla.org/docs/Web/API/Node.nodeType
    // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
        // the root is attached to a fragment node that has a host
        return container.host;
    }
    return null;
}
function getDocument(node) {
    if (!node) {
        return document;
    }
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    return node.ownerDocument || document;
}
function isActiveElement(context) {
    var element = contextToElement({
        label: 'is/active-element',
        resolveDocument: true,
        context: context
    });
    var _document = getDocument(element);
    if (_document.activeElement === element) {
        return true;
    }
    var shadowHost = getShadowHost({
        context: element
    });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
        return true;
    }
    return false;
}
// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
function getParents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var list = [];
    var element = contextToElement({
        label: 'get/parents',
        context: context
    });
    while(element){
        list.push(element);
        // IE does know support parentElement on SVGElement
        element = element.parentNode;
        if (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = null;
        }
    }
    return list;
}
// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches
var names = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector'
];
var name = null;
function findMethodName(element) {
    names.some(function(_name) {
        if (!element[_name]) {
            return false;
        }
        name = _name;
        return true;
    });
}
function elementMatches(element, selector) {
    if (!name) {
        findMethodName(element);
    }
    return element[name](selector);
}
// deep clone of original platform
var platform = JSON.parse(JSON.stringify(_platform.default));
// operating system
var os = platform.os.family || '';
var ANDROID = os === 'Android';
var WINDOWS = os.slice(0, 7) === 'Windows';
var OSX = os === 'OS X';
var IOS = os === 'iOS';
// layout
var BLINK = platform.layout === 'Blink';
var GECKO = platform.layout === 'Gecko';
var TRIDENT = platform.layout === 'Trident';
var EDGE = platform.layout === 'EdgeHTML';
var WEBKIT = platform.layout === 'WebKit';
// browser version (not layout engine version!)
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
    // operating system
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    // layout
    BLINK: BLINK,
    GECKO: GECKO,
    TRIDENT: TRIDENT,
    EDGE: EDGE,
    WEBKIT: WEBKIT,
    // INTERNET EXPLORERS
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
};
function before() {
    var data = {
        // remember what had focus to restore after test
        activeElement: document.activeElement,
        // remember scroll positions to restore after test
        windowScrollTop: window.scrollTop,
        windowScrollLeft: window.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft
    };
    // wrap tests in an element hidden from screen readers to prevent them
    // from announcing focus, which can be quite irritating to the user
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
    iframe.setAttribute('aria-live', 'off');
    iframe.setAttribute('aria-busy', 'true');
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);
    var _window = iframe.contentWindow;
    var _document = _window.document;
    _document.open();
    _document.close();
    var wrapper = _document.createElement('div');
    _document.body.appendChild(wrapper);
    data.iframe = iframe;
    data.wrapper = wrapper;
    data.window = _window;
    data.document = _document;
    return data;
}
// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
    // make sure we operate on a clean slate
    data.wrapper.innerHTML = '';
    // create dummy element to test focusability of
    var element = typeof options.element === 'string' ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
    // allow callback to further specify dummy element
    // and optionally define element to focus
    var focus = options.mutate && options.mutate(element, data.wrapper, data.document);
    if (!focus && focus !== false) {
        focus = element;
    }
    // element needs to be part of the DOM to be focusable
    !element.parentNode && data.wrapper.appendChild(element);
    // test if the element with invalid tabindex can be focused
    focus && focus.focus && focus.focus();
    // validate test's result
    return options.validate ? options.validate(element, focus, data.document) : data.document.activeElement === focus;
}
function after(data) {
    // restore focus to what it was before test and cleanup
    if (data.activeElement === document.body) {
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        if (platform.is.IE10) {
            // IE10 does not redirect focus to <body> when the activeElement is removed
            document.body.focus();
        }
    } else {
        data.activeElement && data.activeElement.focus && data.activeElement.focus();
    }
    document.body.removeChild(data.iframe);
    // restore scroll position
    window.scrollTop = data.windowScrollTop;
    window.scrollLeft = data.windowScrollLeft;
    document.body.scrollTop = data.bodyScrollTop;
    document.body.scrollLeft = data.bodyScrollLeft;
}
function detectFocus(tests) {
    var data = before();
    var results = {};
    Object.keys(tests).map(function(key) {
        results[key] = test(data, tests[key]);
    });
    after(data);
    return results;
}
// this file is overwritten by `npm run build:pre`
var version$1 = '1.4.1';
/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */ function readLocalStorage(key) {
    // allow reading from storage to retrieve previous support results
    // even while the document does not have focus
    var data = void 0;
    try {
        data = window.localStorage && window.localStorage.getItem(key);
        data = data ? JSON.parse(data) : {};
    } catch (e) {
        data = {};
    }
    return data;
}
function writeLocalStorage(key, value) {
    if (!document.hasFocus()) {
        // if the document does not have focus when tests are executed, focus() may
        // not be handled properly and events may not be dispatched immediately.
        // This can happen when a document is reloaded while Developer Tools have focus.
        try {
            window.localStorage && window.localStorage.removeItem(key);
        } catch (e) {
        // ignore
        }
        return;
    }
    try {
        window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    // ignore
    }
}
var userAgent = typeof window !== 'undefined' && window.navigator.userAgent || '';
var cacheKey = 'ally-supports-cache';
var cache = readLocalStorage(cacheKey);
// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== version$1) {
    cache = {};
}
cache.userAgent = userAgent;
cache.version = version$1;
var cache$1 = {
    get: function get() {
        return cache;
    },
    set: function set(values) {
        Object.keys(values).forEach(function(key) {
            cache[key] = values[key];
        });
        cache.time = new Date().toISOString();
        writeLocalStorage(cacheKey, cache);
    }
};
function cssShadowPiercingDeepCombinator() {
    var combinator = void 0;
    // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
    // https://code.google.com/p/chromium/issues/detail?id=446051
    try {
        document.querySelector('html >>> :first-child');
        combinator = '>>>';
    } catch (noArrowArrowArrow) {
        try {
            // old syntax supported at least up to Chrome 41
            // https://code.google.com/p/chromium/issues/detail?id=446051
            document.querySelector('html /deep/ :first-child');
            combinator = '/deep/';
        } catch (noDeep) {
            combinator = '';
        }
    }
    return combinator;
}
var gif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaImgTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + gif + '">';
        return element.querySelector('area');
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + gif + '">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        var focus = element.querySelector('area');
        focus.focus();
        return _document.activeElement === focus;
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaWithoutHref = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + gif + '">';
        return element.querySelector('area');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        return _document.activeElement === focusTarget;
    }
};
var focusAudioWithoutControls = {
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
var invalidGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusBrokenImageMap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + invalidGif + '">';
        return element.querySelector('area');
    }
};
// Children of focusable elements with display:flex are focusable in IE10-11
var focusChildrenOfFocusableFlexbox = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
        return element.querySelector('span');
    }
};
// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
var focusFieldsetDisabled = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
var focusFieldset = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
};
// elements with display:flex are focusable in IE10-11
var focusFlexboxContainer = {
    element: 'span',
    mutate: function mutate(element) {
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
    }
};
// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
var focusFormDisabled = {
    element: 'form',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-ismap
var focusImgIsmap = {
    element: 'a',
    mutate: function mutate(element) {
        element.href = '#void';
        element.innerHTML = '<img ismap src="' + gif + '" alt="">';
        return element.querySelector('img');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusImgUsemapTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + gif + '">';
        return element.querySelector('img');
    }
};
var focusInHiddenIframe = {
    element: function element(wrapper, _document) {
        var iframe = _document.createElement('iframe');
        // iframe must be part of the DOM before accessing the contentWindow is possible
        wrapper.appendChild(iframe);
        // create the iframe's default document (<html><head></head><body></body></html>)
        var iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.close();
        return iframe;
    },
    mutate: function mutate(iframe) {
        iframe.style.visibility = 'hidden';
        var iframeDocument = iframe.contentWindow.document;
        var input = iframeDocument.createElement('input');
        iframeDocument.body.appendChild(input);
        return input;
    },
    validate: function validate(iframe) {
        var iframeDocument = iframe.contentWindow.document;
        var focus = iframeDocument.querySelector('input');
        return iframeDocument.activeElement === focus;
    }
};
var result = !platform.is.WEBKIT;
function focusInZeroDimensionObject() {
    return result;
}
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusInvalidTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 'invalid-value');
    }
};
var focusLabelTabindex = {
    element: 'label',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
    },
    validate: function validate(element, focusTarget, _document) {
        // force layout in Chrome 49, otherwise the element won't be focusable
        /* eslint-disable no-unused-vars */ var variableToPreventDeadCodeElimination = element.offsetHeight;
        /* eslint-enable no-unused-vars */ element.focus();
        return _document.activeElement === element;
    }
};
var svg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' + 'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' + 'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==';
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvgHidden = {
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
        element.style.visibility = 'hidden';
    }
};
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvg = {
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
            // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
            return true;
        }
        return _document.activeElement === element;
    }
};
// Every Environment except IE9 considers SWF objects focusable
var result$1 = !platform.is.IE9;
function focusObjectSwf() {
    return result$1;
}
var focusRedirectImgUsemap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + gif + '">';
        // focus the <img>, not the <div>
        return element.querySelector('img');
    },
    validate: function validate(element, focusTarget, _document) {
        var target = element.querySelector('area');
        return _document.activeElement === target;
    }
};
// see https://jsbin.com/nenirisage/edit?html,js,console,output
var focusRedirectLegend = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
        // take care of focus in validate();
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');
        // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
        // https://jsbin.com/nenirisage/edit?html,js,console,output
        element.focus();
        element.querySelector('legend').focus();
        return _document.activeElement === focusable && 'focusable' || _document.activeElement === tabbable && 'tabbable' || '';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollBody = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
        return element.querySelector('div');
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainerWithoutOverflow = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainer = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusSummary = {
    element: 'details',
    mutate: function mutate(element) {
        element.innerHTML = '<summary>foo</summary><p>content</p>';
        return element.firstElementChild;
    }
};
function makeFocusableForeignObject() {
    // Constructs <foreignObject width="30" height="30"><input type="text"/></foreignObject>
    // without raising a Trusted Types violation
    var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignObject.width.baseVal.value = 30;
    foreignObject.height.baseVal.value = 30;
    foreignObject.appendChild(document.createElement('input'));
    foreignObject.lastChild.type = 'text';
    return foreignObject;
}
function focusSvgForeignObjectHack(element) {
    // Edge13, Edge14: foreignObject focus hack
    // https://jsbin.com/kunehinugi/edit?html,js,output
    // https://jsbin.com/fajagi/3/edit?html,js,output
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (!isSvgElement) {
        return false;
    }
    // inject and focus an <input> element into the SVG element to receive focus
    var foreignObject = makeFocusableForeignObject();
    element.appendChild(foreignObject);
    var input = foreignObject.querySelector('input');
    input.focus();
    // upon disabling the activeElement, IE and Edge
    // will not shift focus to <body> like all the other
    // browsers, but instead find the first focusable
    // ancestor and shift focus to that
    input.disabled = true;
    // clean up
    element.removeChild(foreignObject);
    return true;
}
function generate(element) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + '</svg>';
}
function focus(element) {
    if (element.focus) {
        return;
    }
    try {
        HTMLElement.prototype.focus.call(element);
    } catch (e) {
        focusSvgForeignObjectHack(element);
    }
}
function validate(element, focusTarget, _document) {
    focus(focusTarget);
    return _document.activeElement === focusTarget;
}
var focusSvgFocusableAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text focusable="true">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="0">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgNegativeTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="-1">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgUseTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate([
            '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
            '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'
        ].join(''));
        return element.querySelector('use');
    },
    validate: validate
};
var focusSvgForeignobjectTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
        // Safari 8's querySelector() can't identify foreignObject, but getElementsByTagName() can
        return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
    },
    validate: validate
};
// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output
var result$2 = Boolean(platform.is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);
function focusSvgInIframe() {
    return result$2;
}
var focusSvg = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('');
        return element.firstChild;
    },
    validate: validate
};
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusTabindexTrailingCharacters = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '3x');
    }
};
var focusTable = {
    element: 'table',
    mutate: function mutate(element, wrapper, _document) {
        // IE9 has a problem replacing TBODY contents with innerHTML.
        // https://stackoverflow.com/a/8097055/515124
        // element.innerHTML = '<tr><td>cell</td></tr>';
        var fragment = _document.createDocumentFragment();
        fragment.innerHTML = '<tr><td>cell</td></tr>';
        element.appendChild(fragment);
    }
};
var focusVideoWithoutControls = {
    element: 'video',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE;
function tabsequenceAreaAtImgPosition() {
    return result$3;
}
var testCallbacks = {
    cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
    focusInZeroDimensionObject: focusInZeroDimensionObject,
    focusObjectSwf: focusObjectSwf,
    focusSvgInIframe: focusSvgInIframe,
    tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition
};
var testDescriptions = {
    focusAreaImgTabindex: focusAreaImgTabindex,
    focusAreaTabindex: focusAreaTabindex,
    focusAreaWithoutHref: focusAreaWithoutHref,
    focusAudioWithoutControls: focusAudioWithoutControls,
    focusBrokenImageMap: focusBrokenImageMap,
    focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
    focusFieldsetDisabled: focusFieldsetDisabled,
    focusFieldset: focusFieldset,
    focusFlexboxContainer: focusFlexboxContainer,
    focusFormDisabled: focusFormDisabled,
    focusImgIsmap: focusImgIsmap,
    focusImgUsemapTabindex: focusImgUsemapTabindex,
    focusInHiddenIframe: focusInHiddenIframe,
    focusInvalidTabindex: focusInvalidTabindex,
    focusLabelTabindex: focusLabelTabindex,
    focusObjectSvg: focusObjectSvg,
    focusObjectSvgHidden: focusObjectSvgHidden,
    focusRedirectImgUsemap: focusRedirectImgUsemap,
    focusRedirectLegend: focusRedirectLegend,
    focusScrollBody: focusScrollBody,
    focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
    focusScrollContainer: focusScrollContainer,
    focusSummary: focusSummary,
    focusSvgFocusableAttribute: focusSvgFocusableAttribute,
    focusSvgTabindexAttribute: focusSvgTabindexAttribute,
    focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
    focusSvgUseTabindex: focusSvgUseTabindex,
    focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
    focusSvg: focusSvg,
    focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
    focusTable: focusTable,
    focusVideoWithoutControls: focusVideoWithoutControls
};
function executeTests() {
    var results = detectFocus(testDescriptions);
    Object.keys(testCallbacks).forEach(function(key) {
        results[key] = testCallbacks[key]();
    });
    return results;
}
var supportsCache = null;
function _supports() {
    if (supportsCache) {
        return supportsCache;
    }
    supportsCache = cache$1.get();
    if (!supportsCache.time) {
        cache$1.set(executeTests());
        supportsCache = cache$1.get();
    }
    return supportsCache;
}
var supports = void 0;
// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
function isValidTabindex(context) {
    if (!supports) {
        supports = _supports();
    }
    var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;
    var element = contextToElement({
        label: 'is/valid-tabindex',
        resolveDocument: true,
        context: context
    });
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var hasTabIndex = element.hasAttribute('tabIndex');
    if (!hasTabindex && !hasTabIndex) {
        return false;
    }
    // older Firefox and Internet Explorer don't support tabindex on SVG elements
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (isSvgElement && !supports.focusSvgTabindexAttribute) {
        return false;
    }
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    if (supports.focusInvalidTabindex) {
        return true;
    }
    // an element matches the tabindex selector even if its value is invalid
    var tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
    // IE11 parses tabindex="" as the value "-32768"
    // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
    if (tabindex === '-32768') {
        return false;
    }
    return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
function tabindexValue(element) {
    if (!isValidTabindex(element)) {
        return null;
    }
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var attributeName = hasTabindex ? 'tabindex' : 'tabIndex';
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabindex = parseInt(element.getAttribute(attributeName), 10);
    return isNaN(tabindex) ? -1 : tabindex;
}
// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers
function isUserModifyWritable(style) {
    // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
    // https://github.com/medialize/ally.js/issues/17
    var userModify = style.webkitUserModify || '';
    return Boolean(userModify && userModify.indexOf('write') !== -1);
}
function hasCssOverflowScroll(style) {
    return [
        style.getPropertyValue('overflow'),
        style.getPropertyValue('overflow-x'),
        style.getPropertyValue('overflow-y')
    ].some(function(overflow) {
        return overflow === 'auto' || overflow === 'scroll';
    });
}
function hasCssDisplayFlex(style) {
    return style.display.indexOf('flex') > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
    if (nodeName !== 'div' && nodeName !== 'span') {
        // Internet Explorer advances scrollable containers and bodies to focusable
        // only if the scrollable container is <div> or <span> - this does *not*
        // happen for <section>, <article>, …
        return false;
    }
    if (parentNodeName && parentNodeName !== 'div' && parentNodeName !== 'span' && !hasCssOverflowScroll(parentStyle)) {
        return false;
    }
    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}
var supports$1 = void 0;
function isFocusRelevantRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false
    } : _ref$except;
    if (!supports$1) {
        supports$1 = _supports();
    }
    var element = contextToElement({
        label: 'is/focus-relevant',
        resolveDocument: true,
        context: context
    });
    if (!except.shadow && element.shadowRoot) {
        // a ShadowDOM host receives focus when the focus moves to its content
        return true;
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'input' && element.type === 'hidden') {
        // input[type="hidden"] supports.cannot be focused
        return false;
    }
    if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
        return true;
    }
    if (nodeName === 'legend' && supports$1.focusRedirectLegend) {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'label') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'area') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'a' && element.hasAttribute('href')) {
        return true;
    }
    if (nodeName === 'object' && element.hasAttribute('usemap')) {
        // object[usemap] is not focusable in any browser
        return false;
    }
    if (nodeName === 'object') {
        var svgType = element.getAttribute('type');
        if (!supports$1.focusObjectSvg && svgType === 'image/svg+xml') {
            // object[type="image/svg+xml"] is not focusable in Internet Explorer
            return false;
        } else if (!supports$1.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
            // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
            return false;
        }
    }
    if (nodeName === 'iframe' || nodeName === 'object') {
        // browsing context containers
        return true;
    }
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    if (element.hasAttribute('contenteditable')) {
        // also see CSS property user-modify below
        return true;
    }
    if (nodeName === 'audio' && (supports$1.focusAudioWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (nodeName === 'video' && (supports$1.focusVideoWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (supports$1.focusSummary && nodeName === 'summary') {
        return true;
    }
    var validTabindex = isValidTabindex(element);
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return validTabindex && supports$1.focusImgUsemapTabindex || supports$1.focusRedirectImgUsemap;
    }
    if (supports$1.focusTable && (nodeName === 'table' || nodeName === 'td')) {
        // IE10-11 supports.can focus <table> and <td>
        return true;
    }
    if (supports$1.focusFieldset && nodeName === 'fieldset') {
        // IE10-11 supports.can focus <fieldset>
        return true;
    }
    var isSvgElement = nodeName === 'svg';
    var isSvgContent = element.ownerSVGElement;
    var focusableAttribute = element.getAttribute('focusable');
    var tabindex = tabindexValue(element);
    if (nodeName === 'use' && tabindex !== null && !supports$1.focusSvgUseTabindex) {
        // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
        return false;
    }
    if (nodeName === 'foreignobject') {
        // <use> can only be made focusable in Blink and WebKit
        return tabindex !== null && supports$1.focusSvgForeignobjectTabindex;
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        return true;
    }
    if ((isSvgElement || isSvgContent) && element.focus && !supports$1.focusSvgNegativeTabindexAttribute && tabindex < 0) {
        // Firefox 51 and 52 treat any natively tabbable SVG element with
        // tabindex="-1" as tabbable and everything else as inert
        // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
        return false;
    }
    if (isSvgElement) {
        return validTabindex || supports$1.focusSvg || supports$1.focusSvgInIframe || // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        Boolean(supports$1.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
    }
    if (isSvgContent) {
        if (supports$1.focusSvgTabindexAttribute && validTabindex) {
            return true;
        }
        if (supports$1.focusSvgFocusableAttribute) {
            // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
            return focusableAttribute === 'true';
        }
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    if (validTabindex) {
        return true;
    }
    var style = window.getComputedStyle(element, null);
    if (isUserModifyWritable(style)) {
        return true;
    }
    if (supports$1.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
        // IE10-11 considers the <img> in <a href><img ismap> focusable
        // https://github.com/medialize/ally.js/issues/20
        var hasLinkParent = getParents({
            context: element
        }).some(function(parent) {
            return parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href');
        });
        if (hasLinkParent) {
            return true;
        }
    }
    // https://github.com/medialize/ally.js/issues/21
    if (!except.scrollable && supports$1.focusScrollContainer) {
        if (supports$1.focusScrollContainerWithoutOverflow) {
            // Internet Explorer does will consider the scrollable area focusable
            // if the element is a <div> or a <span> and it is in fact scrollable,
            // regardless of the CSS overflow property
            if (isScrollableContainer(element, nodeName)) {
                return true;
            }
        } else if (hasCssOverflowScroll(style)) {
            // Firefox requires proper overflow setting, IE does not necessarily
            // https://developer.mozilla.org/docs/Web/CSS/overflow
            return true;
        }
    }
    if (!except.flexbox && supports$1.focusFlexboxContainer && hasCssDisplayFlex(style)) {
        // elements with display:flex are focusable in IE10-11
        return true;
    }
    var parent = element.parentElement;
    if (!except.scrollable && parent) {
        var parentNodeName = parent.nodeName.toLowerCase();
        var parentStyle = window.getComputedStyle(parent, null);
        if (supports$1.focusScrollBody && isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
            // scrollable bodies are focusable Internet Explorer
            // https://github.com/medialize/ally.js/issues/21
            return true;
        }
        // Children of focusable elements with display:flex are focusable in IE10-11
        if (supports$1.focusChildrenOfFocusableFlexbox) {
            if (hasCssDisplayFlex(parentStyle)) {
                return true;
            }
        }
    }
    // NOTE: elements marked as inert are not focusable,
    // but that property is not exposed to the DOM
    // https://www.w3.org/TR/html5/editing.html#inert
    return false;
}
// bind exceptions to an iterator callback
isFocusRelevantRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusRelevant = function isFocusRelevant(context) {
        return isFocusRelevantRules({
            context: context,
            except: except
        });
    };
    isFocusRelevant.rules = isFocusRelevantRules;
    return isFocusRelevant;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusRelevant = isFocusRelevantRules.except({});
function findIndex(array, callback) {
    // attempt to use native or polyfilled Array#findIndex first
    if (array.findIndex) {
        return array.findIndex(callback);
    }
    var length = array.length;
    // shortcut if the array is empty
    if (length === 0) {
        return -1;
    }
    // otherwise loop over array
    for(var i = 0; i < length; i++){
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
function getContentDocument(node) {
    try {
        // works on <object> and <iframe>
        return node.contentDocument || // works on <object> and <iframe>
        node.contentWindow && node.contentWindow.document || // works on <object> and <iframe> that contain SVG
        node.getSVGDocument && node.getSVGDocument() || null;
    } catch (e) {
        // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
        // also IE may throw member not found exception e.g. on <object type="image/png">
        return null;
    }
}
function getWindow(node) {
    var _document = getDocument(node);
    return _document.defaultView || window;
}
var shadowPrefix = void 0;
function selectInShadows(selector) {
    if (typeof shadowPrefix !== 'string') {
        var operator = cssShadowPiercingDeepCombinator();
        if (operator) {
            shadowPrefix = ', html ' + operator + ' ';
        }
    }
    if (!shadowPrefix) {
        return selector;
    }
    return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
}
var selector = void 0;
function findDocumentHostElement(_window) {
    if (!selector) {
        selector = selectInShadows('object, iframe');
    }
    if (_window._frameElement !== undefined) {
        return _window._frameElement;
    }
    _window._frameElement = null;
    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function(element) {
        var _document = getContentDocument(element);
        if (_document !== _window.document) {
            return false;
        }
        _window._frameElement = element;
        return true;
    });
    return _window._frameElement;
}
function getFrameElement(element) {
    var _window = getWindow(element);
    if (!_window.parent || _window.parent === _window) {
        // if there is no parent browsing context,
        // we're not going to get a frameElement either way
        return null;
    }
    try {
        // see https://developer.mozilla.org/docs/Web/API/Window/frameElement
        // does not work within <embed> anywhere, and not within in <object> in IE
        return _window.frameElement || findDocumentHostElement(_window);
    } catch (e) {
        return null;
    }
}
// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
var notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
    return _path.some(function(element) {
        // display:none is not visible (optimized away at layout)
        return computedStyle(element, 'display') === 'none';
    });
}
function notVisible(_path) {
    // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
    // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
    // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
    var hidden = findIndex(_path, function(element) {
        var visibility = computedStyle(element, 'visibility');
        return visibility === 'hidden' || visibility === 'collapse';
    });
    if (hidden === -1) {
        // there is no hidden element
        return false;
    }
    var visible = findIndex(_path, function(element) {
        return computedStyle(element, 'visibility') === 'visible';
    });
    if (visible === -1) {
        // there is no visible element (but a hidden element)
        return true;
    }
    if (hidden < visible) {
        // there is a hidden element and it's closer than the first visible element
        return true;
    }
    // there may be a hidden element, but the closest element is visible
    return false;
}
function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === 'summary') {
        offset = 2;
    }
    return _path.slice(offset).some(function(element) {
        // "content children" of a closed details element are not visible
        return element.nodeName.toLowerCase() === 'details' && element.open === false;
    });
}
function isVisibleRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        notRendered: false,
        cssDisplay: false,
        cssVisibility: false,
        detailsElement: false,
        browsingContext: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/visible',
        resolveDocument: true,
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
        return true;
    }
    var _path = getParents({
        context: element
    });
    // in Internet Explorer <audio> has a default display: none, where others have display: inline
    // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
    // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
    var isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
    if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
        return false;
    }
    if (!except.cssVisibility && notVisible(_path)) {
        return false;
    }
    if (!except.detailsElement && collapsedParent(_path)) {
        return false;
    }
    if (!except.browsingContext) {
        // elements within a browsing context are affected by the
        // browsing context host element's visibility and tabindex
        var frameElement = getFrameElement(element);
        var _isVisible = isVisibleRules.except(except);
        if (frameElement && !_isVisible(frameElement)) {
            return false;
        }
    }
    return true;
}
// bind exceptions to an iterator callback
isVisibleRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isVisible = function isVisible(context) {
        return isVisibleRules({
            context: context,
            except: except
        });
    };
    isVisible.rules = isVisibleRules;
    return isVisible;
};
// provide isVisible(context) as default iterator callback
var isVisible = isVisibleRules.except({});
function getMapByName(name, _document) {
    // apparently getElementsByName() also considers id attribute in IE & opera
    // https://developer.mozilla.org/docs/Web/API/Document/getElementsByName
    var map = _document.querySelector('map[name="' + (0, _cssescape.default)(name) + '"]');
    return map || null;
}
function getImageOfArea(element) {
    var map = element.parentElement;
    if (!map.name || map.nodeName.toLowerCase() !== 'map') {
        return null;
    }
    // NOTE: image maps can also be applied to <object> with image content,
    // but no browser supports this at the moment
    // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
    // <img> and <object> referencing the <map> element, but no browser implements this
    //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
    //   https://developer.mozilla.org/docs/Web/API/HTMLMapElement
    // the image must be valid and loaded for the map to take effect
    var _document = getDocument(element);
    return _document.querySelector('img[usemap="#' + (0, _cssescape.default)(map.name) + '"]') || null;
}
var supports$2 = void 0;
// https://developer.mozilla.org/docs/Web/HTML/Element/map
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
function isValidArea(context) {
    if (!supports$2) {
        supports$2 = _supports();
    }
    var element = contextToElement({
        label: 'is/valid-area',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'area') {
        return false;
    }
    var hasTabindex = element.hasAttribute('tabindex');
    if (!supports$2.focusAreaTabindex && hasTabindex) {
        // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
        return false;
    }
    var img = getImageOfArea(element);
    if (!img || !isVisible(img)) {
        return false;
    }
    // Firefox only allows fully loaded images to reference image maps
    // https://stereochro.me/ideas/detecting-broken-images-js
    if (!supports$2.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
        return false;
    }
    // Firefox supports.can focus area elements even if they don't have an href attribute
    if (!supports$2.focusAreaWithoutHref && !element.href) {
        // Internet explorer supports.can focus area elements without href if either
        // the area element or the image element has a tabindex attribute
        return supports$2.focusAreaTabindex && hasTabindex || supports$2.focusAreaImgTabindex && img.hasAttribute('tabindex');
    }
    // https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
    var childOfInteractive = getParents({
        context: img
    }).slice(1).some(function(_element) {
        var name = _element.nodeName.toLowerCase();
        return name === 'button' || name === 'a';
    });
    if (childOfInteractive) {
        return false;
    }
    return true;
}
var supports$3 = void 0;
// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = void 0;
var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
};
function isNativeDisabledSupported(context) {
    if (!supports$3) {
        supports$3 = _supports();
        if (supports$3.focusFieldsetDisabled) {
            delete disabledElements.fieldset;
        }
        if (supports$3.focusFormDisabled) {
            delete disabledElements.form;
        }
        disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
    }
    var element = contextToElement({
        label: 'is/native-disabled-supported',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
}
var supports$4 = void 0;
function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'fieldset' && element.disabled;
}
function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'form' && element.disabled;
}
function isDisabled(context) {
    if (!supports$4) {
        supports$4 = _supports();
    }
    var element = contextToElement({
        label: 'is/disabled',
        context: context
    });
    if (element.hasAttribute('data-ally-disabled')) {
        // treat ally's element/disabled like the DOM native element.disabled
        return true;
    }
    if (!isNativeDisabledSupported(element)) {
        // non-form elements do not support the disabled attribute
        return false;
    }
    if (element.disabled) {
        // the element itself is disabled
        return true;
    }
    var parents = getParents({
        context: element
    });
    if (parents.some(isDisabledFieldset)) {
        // a parental <fieldset> is disabld and inherits the state onto this element
        return true;
    }
    if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
        // a parental <form> is disabld and inherits the state onto this element
        return true;
    }
    return false;
}
function isOnlyTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        onlyFocusableBrowsingContext: false,
        visible: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/only-tabbable',
        resolveDocument: true,
        context: context
    });
    if (!except.visible && !isVisible(element)) {
        return false;
    }
    if (!except.onlyFocusableBrowsingContext && (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)) {
        var frameElement = getFrameElement(element);
        if (frameElement) {
            if (tabindexValue(frameElement) < 0) {
                // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
                // tabbable demotion onto elements of their browsing contexts
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var tabindex = tabindexValue(element);
    if (nodeName === 'label' && platform.is.GECKO) {
        // Firefox cannot focus, but tab to: label[tabindex=0]
        return tabindex !== null && tabindex >= 0;
    }
    // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
    // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
    if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
        if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
            // any focusable child of <svg> cannot be focused, but tabbed to
            if (platform.is.GECKO) {
                return true;
            }
        }
    }
    return false;
}
// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOnlyTabbable = function isOnlyTabbable(context) {
        return isOnlyTabbableRules({
            context: context,
            except: except
        });
    };
    isOnlyTabbable.rules = isOnlyTabbableRules;
    return isOnlyTabbable;
};
// provide isOnlyTabbable(context) as default iterator callback
var isOnlyTabbable = isOnlyTabbableRules.except({});
var supports$5 = void 0;
function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    var _tabindex = tabindexValue(element);
    if (element.shadowRoot && _tabindex === null) {
        // ShadowDOM host elements *may* receive focus
        // even though they are not considered focuable
        return true;
    }
    if (nodeName === 'label') {
        // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
        // there's no way to make an element focusable other than by adding a tabindex,
        // and focus behavior of the label element seems hard-wired to ignore tabindex
        // in some browsers (like Gecko, Blink and WebKit)
        return !supports$5.focusLabelTabindex || _tabindex === null;
    }
    if (nodeName === 'legend') {
        return _tabindex === null;
    }
    if (supports$5.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
        // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        var focusableAttribute = element.getAttribute('focusable');
        return focusableAttribute && focusableAttribute === 'false';
    }
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return _tabindex === null || !supports$5.focusImgUsemapTabindex;
    }
    if (nodeName === 'area') {
        // all <area>s are considered relevant,
        // but only the valid <area>s are focusable
        return !isValidArea(element);
    }
    return false;
}
function isFocusableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        disabled: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$5) {
        supports$5 = _supports();
    }
    var _isOnlyTabbable = isOnlyTabbable.rules.except({
        onlyFocusableBrowsingContext: true,
        visible: except.visible
    });
    var element = contextToElement({
        label: 'is/focusable',
        resolveDocument: true,
        context: context
    });
    var focusRelevant = isFocusRelevant.rules({
        context: element,
        except: except
    });
    if (!focusRelevant || isOnlyFocusRelevant(element)) {
        return false;
    }
    if (!except.disabled && isDisabled(element)) {
        return false;
    }
    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
        // some elements may be keyboard focusable, but not script focusable
        return false;
    }
    // elements that are not rendered, cannot be focused
    if (!except.visible) {
        var visibilityOptions = {
            context: element,
            except: {}
        };
        if (supports$5.focusInHiddenIframe) {
            // WebKit and Blink can focus content in hidden <iframe> and <object>
            visibilityOptions.except.browsingContext = true;
        }
        if (supports$5.focusObjectSvgHidden) {
            // Blink allows focusing the object element, even if it has visibility: hidden;
            // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
            var _nodeName2 = element.nodeName.toLowerCase();
            if (_nodeName2 === 'object') {
                visibilityOptions.except.cssVisibility = true;
            }
        }
        if (!isVisible.rules(visibilityOptions)) {
            return false;
        }
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        var _nodeName = frameElement.nodeName.toLowerCase();
        if (_nodeName === 'object' && !supports$5.focusInZeroDimensionObject) {
            if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
                // WebKit can not focus content in <object> if it doesn't have dimensions
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'svg' && supports$5.focusSvgInIframe && !frameElement && element.getAttribute('tabindex') === null) {
        return false;
    }
    return true;
}
// bind exceptions to an iterator callback
isFocusableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusable = function isFocusable(context) {
        return isFocusableRules({
            context: context,
            except: except
        });
    };
    isFocusable.rules = isFocusableRules;
    return isFocusable;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusable = isFocusableRules.except({});
function createFilter(condition) {
    // see https://developer.mozilla.org/docs/Web/API/NodeFilter
    var filter = function filter(node) {
        if (node.shadowRoot) {
            // return ShadowRoot elements regardless of them being focusable,
            // so they can be walked recursively later
            return NodeFilter.FILTER_ACCEPT;
        }
        if (condition(node)) {
            // finds elements that could have been found by document.querySelectorAll()
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
    };
    // IE requires a function, Browsers require {acceptNode: function}
    // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
    filter.acceptNode = filter;
    return filter;
}
var PossiblyFocusableFilter = createFilter(isFocusRelevant);
function queryFocusableStrict() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!context) {
        context = document.documentElement;
    }
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var _document = getDocument(context);
    // see https://developer.mozilla.org/docs/Web/API/Document/createTreeWalker
    var walker = _document.createTreeWalker(context, NodeFilter.SHOW_ELEMENT, strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable), false);
    var list = [];
    while(walker.nextNode()){
        if (walker.currentNode.shadowRoot) {
            if (_isFocusable(walker.currentNode)) {
                list.push(walker.currentNode);
            }
            list = list.concat(queryFocusableStrict({
                context: walker.currentNode.shadowRoot,
                includeOnlyTabbable: includeOnlyTabbable,
                strategy: strategy
            }));
        } else {
            list.push(walker.currentNode);
        }
    }
    // add context if requested and focusable
    if (includeContext) {
        if (strategy === 'all') {
            if (isFocusRelevant(context)) {
                list.unshift(context);
            }
        } else if (_isFocusable(context)) {
            list.unshift(context);
        }
    }
    return list;
}
// NOTE: this selector MUST *never* be used directly,
var supports$6 = void 0;
var selector$1 = void 0;
function selector$2() {
    if (!supports$6) {
        supports$6 = _supports();
    }
    if (typeof selector$1 === 'string') {
        return selector$1;
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    selector$1 = '' + // IE11 supports.can focus <table> and <td>
    (supports$6.focusTable ? 'table, td,' : '') + // IE11 supports.can focus <fieldset>
    (supports$6.focusFieldset ? 'fieldset,' : '') + // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
    // svg a[*|href] does not match in IE9, but since we're filtering
    // through is/focusable we can include all <a> from SVG
    'svg a,' + // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
    // navigational elements
    'a[href],' + // validity determined by is/valid-area.js
    'area[href],' + // validity determined by is/disabled.js
    'input, select, textarea, button,' + // browsing context containers
    'iframe, object, embed,' + // interactive content
    'keygen,' + (supports$6.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports$6.focusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports$6.focusSummary ? 'summary,' : '') + // validity determined by is/valid-tabindex.js
    '[tabindex],' + // editing hosts
    '[contenteditable]';
    // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
    selector$1 = selectInShadows(selector$1);
    return selector$1;
}
function queryFocusableQuick() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _selector = selector$2();
    var elements = context.querySelectorAll(_selector);
    // the selector potentially matches more than really is focusable
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var result = [].filter.call(elements, _isFocusable);
    // add context if requested and focusable
    if (includeContext && _isFocusable(context)) {
        result.unshift(context);
    }
    return result;
}
function queryFocusable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, _ref$strategy = _ref.strategy, strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;
    var element = contextToElement({
        label: 'query/focusable',
        resolveDocument: true,
        defaultToDocument: true,
        context: context
    });
    var options = {
        context: element,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    };
    if (strategy === 'quick') {
        return queryFocusableQuick(options);
    } else if (strategy === 'strict' || strategy === 'all') {
        return queryFocusableStrict(options);
    }
    throw Object.defineProperty(new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]'), "__NEXT_ERROR_CODE", {
        value: "E594",
        enumerable: false
    });
}
var supports$7 = void 0;
// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/;
function isTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$7) {
        supports$7 = _supports();
    }
    var element = contextToElement({
        label: 'is/tabbable',
        resolveDocument: true,
        context: context
    });
    if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
        // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
        // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
        // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
        return false;
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        if (platform.is.WEBKIT && platform.is.IOS) {
            // iOS only does not consider anything from another browsing context keyboard focusable
            return false;
        }
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        if (tabindexValue(frameElement) < 0) {
            return false;
        }
        if (!except.visible && (platform.is.BLINK || platform.is.WEBKIT) && !isVisible(frameElement)) {
            // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
            return false;
        }
        // Webkit and Blink don't consider anything in <object> tabbable
        // Blink fixed that fixed in Chrome 54, Opera 41
        var frameNodeName = frameElement.nodeName.toLowerCase();
        if (frameNodeName === 'object') {
            var isFixedBlink = platform.name === 'Chrome' && platform.majorVersion >= 54 || platform.name === 'Opera' && platform.majorVersion >= 41;
            if (platform.is.WEBKIT || platform.is.BLINK && !isFixedBlink) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = tabindexValue(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;
    if (platform.is.EDGE && platform.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
        // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
        // if the element is in a nested browsing context
        return true;
    }
    var hasTabbableTabindexOrNone = tabindex !== false;
    var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;
    // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
    // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
    if (element.hasAttribute('contenteditable')) {
        // tabbing can still be disabled by explicitly providing [tabindex="-1"]
        return hasTabbableTabindexOrNone;
    }
    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
        return false;
    }
    if (platform.is.WEBKIT && platform.is.IOS) {
        // iOS only considers a hand full of elements tabbable (keyboard focusable)
        // this holds true even with external keyboards
        var potentiallyTabbable = nodeName === 'input' && element.type === 'text' || element.type === 'password' || nodeName === 'select' || nodeName === 'textarea' || element.hasAttribute('contenteditable');
        if (!potentiallyTabbable) {
            var style = window.getComputedStyle(element, null);
            potentiallyTabbable = isUserModifyWritable(style);
        }
        if (!potentiallyTabbable) {
            return false;
        }
    }
    if (nodeName === 'use' && _tabindex !== null) {
        if (platform.is.BLINK || platform.is.WEBKIT && platform.majorVersion === 9) {
            // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
            return true;
        }
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        if (hasTabbableTabindexOrNone) {
            // in Trident and Gecko SVGElement does not handle the tabIndex property properly
            return true;
        }
        if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
            // Firefox 51 and 52 treat any natively tabbable SVG element with
            // tabindex="-1" as tabbable and everything else as inert
            // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
            return true;
        }
    }
    if (nodeName === 'svg' && supports$7.focusSvgInIframe && hasTabbableTabindexOrNone) {
        return true;
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === 'svg') {
            if (supports$7.focusSvg) {
                // older Internet Explorers consider <svg> keyboard focusable
                // unless they have focsable="false", but then they wouldn't
                // be focusable and thus not even reach this filter
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable') || hasTabbableTabindex;
        }
        if (element.ownerSVGElement) {
            if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable');
        }
    }
    if (element.tabIndex === undefined) {
        return Boolean(except.onlyTabbable);
    }
    if (nodeName === 'audio') {
        if (!element.hasAttribute('controls')) {
            // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
            return false;
        } else if (platform.is.BLINK) {
            // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'video') {
        if (!element.hasAttribute('controls')) {
            if (platform.is.TRIDENT || platform.is.EDGE) {
                // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
                return false;
            }
        } else if (platform.is.BLINK || platform.is.GECKO) {
            // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'object') {
        if (platform.is.BLINK || platform.is.WEBKIT) {
            // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
            return false;
        }
    }
    if (nodeName === 'iframe') {
        // In Internet Explorer all iframes are only focusable
        // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
        // Since we can't reliably investigate iframe documents because of the
        // SameOriginPolicy, we're declaring everything only focusable.
        return false;
    }
    if (!except.scrollable && platform.is.GECKO) {
        // Firefox considers scrollable containers keyboard focusable,
        // even though their tabIndex property is -1
        var _style = window.getComputedStyle(element, null);
        if (hasCssOverflowScroll(_style)) {
            return hasTabbableTabindexOrNone;
        }
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        // IE and Edge degrade <area> to script focusable, if the image
        // using the <map> has been given tabindex="-1"
        if (nodeName === 'area') {
            var img = getImageOfArea(element);
            if (img && tabindexValue(img) < 0) {
                return false;
            }
        }
        var _style2 = window.getComputedStyle(element, null);
        if (isUserModifyWritable(_style2)) {
            // prevent being swallowed by the overzealous isScrollableContainer() below
            return element.tabIndex >= 0;
        }
        if (!except.flexbox && hasCssDisplayFlex(_style2)) {
            if (_tabindex !== null) {
                return hasTabbableTabindex;
            }
            return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
        }
        // IE considers scrollable containers script focusable only,
        // even though their tabIndex property is 0
        if (isScrollableContainer(element, nodeName)) {
            return false;
        }
        var parent = element.parentElement;
        if (parent) {
            var parentNodeName = parent.nodeName.toLowerCase();
            var parentStyle = window.getComputedStyle(parent, null);
            // IE considers scrollable bodies script focusable only,
            if (isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
                return false;
            }
            // Children of focusable elements with display:flex are focusable in IE10-11,
            // even though their tabIndex property suggests otherwise
            if (hasCssDisplayFlex(parentStyle)) {
                // value of tabindex takes precedence
                return hasTabbableTabindex;
            }
        }
    }
    // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
    return element.tabIndex >= 0;
}
// bind exceptions to an iterator callback
isTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isTabbable = function isTabbable(context) {
        return isTabbableRules({
            context: context,
            except: except
        });
    };
    isTabbable.rules = isTabbableRules;
    return isTabbable;
};
var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
    flexbox: true
});
var isTabbableWithoutFlexbox = isTabbableRules.except({
    flexbox: true
});
// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({});
function queryTabbable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    var _isTabbable = isTabbable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    return queryFocusable({
        context: context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    }).filter(_isTabbable);
}
// sorts a list of elements according to their order in the DOM
function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function sortDomOrder(elements) {
    return elements.sort(compareDomPosition);
}
function getFirstSuccessorOffset(list, target) {
    // find the first element that comes AFTER the target element
    return findIndex(list, function(element) {
        return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
}
function findInsertionOffsets(list, elements, resolveElement) {
    // instead of mutating the elements list directly, remember position and map
    // to inject later, when we can do this more efficiently
    var insertions = [];
    elements.forEach(function(element) {
        var replace = true;
        var offset = list.indexOf(element);
        if (offset === -1) {
            // element is not in target list
            offset = getFirstSuccessorOffset(list, element);
            replace = false;
        }
        if (offset === -1) {
            // there is no successor in the tabsequence,
            // meaning the image must be the last element
            offset = list.length;
        }
        // allow the consumer to replace the injected element
        var injections = nodeArray(resolveElement ? resolveElement(element) : element);
        if (!injections.length) {
            // we can't inject zero elements
            return;
        }
        insertions.push({
            offset: offset,
            replace: replace,
            elements: injections
        });
    });
    return insertions;
}
function insertElementsAtOffsets(list, insertions) {
    // remember the number of elements we have already injected
    // so we account for the caused index offset
    var inserted = 0;
    // make sure that we insert the elements in sequence,
    // otherwise the offset compensation won't work
    insertions.sort(function(a, b) {
        return a.offset - b.offset;
    });
    insertions.forEach(function(insertion) {
        // array.splice has an annoying function signature :(
        var remove = insertion.replace ? 1 : 0;
        var args = [
            insertion.offset + inserted,
            remove
        ].concat(insertion.elements);
        list.splice.apply(list, args);
        inserted += insertion.elements.length - remove;
    });
}
function mergeInDomOrder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, list = _ref.list, elements = _ref.elements, resolveElement = _ref.resolveElement;
    // operate on a copy so we don't mutate the original array
    var _list = list.slice(0);
    // make sure the elements we're injecting are provided in DOM order
    var _elements = nodeArray(elements).slice(0);
    sortDomOrder(_elements);
    // find the offsets within the target array (list) at which to inject
    // each individual element (from elements)
    var insertions = findInsertionOffsets(_list, _elements, resolveElement);
    // actually inject the elements into the target array at the identified positions
    insertElementsAtOffsets(_list, insertions);
    return _list;
}
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw Object.defineProperty(new TypeError('Cannot call a class as a function'), "__NEXT_ERROR_CODE", {
            value: "E601",
            enumerable: false
        });
    }
}
var Maps = function() {
    function Maps(context) {
        _classCallCheck(this, Maps);
        this._document = getDocument(context);
        this.maps = {};
    }
    _createClass(Maps, [
        {
            key: 'getAreasFor',
            value: function getAreasFor(name) {
                if (!this.maps[name]) {
                    // the map is not defined within the context, so we
                    // have to go find it elsewhere in the document
                    this.addMapByName(name);
                }
                return this.maps[name];
            }
        },
        {
            key: 'addMapByName',
            value: function addMapByName(name) {
                var map = getMapByName(name, this._document);
                if (!map) {
                    // if there is no map, the img[usemap] wasn't doing anything anyway
                    return;
                }
                this.maps[map.name] = queryTabbable({
                    context: map
                });
            }
        },
        {
            key: 'extractAreasFromList',
            value: function extractAreasFromList(elements) {
                // remove all <area> elements from the elements list,
                // but put them the map for later retrieval
                return elements.filter(function(element) {
                    var nodeName = element.nodeName.toLowerCase();
                    if (nodeName !== 'area') {
                        return true;
                    }
                    var map = element.parentNode;
                    if (!this.maps[map.name]) {
                        this.maps[map.name] = [];
                    }
                    this.maps[map.name].push(element);
                    return false;
                }, this);
            }
        }
    ]);
    return Maps;
}();
function sortArea(elements, context) {
    // images - unless they are focusable themselves, likely not
    // part of the elements list, so we'll have to find them and
    // sort them into the elements list manually
    var usemaps = context.querySelectorAll('img[usemap]');
    var maps = new Maps(context);
    // remove all <area> elements from the elements list,
    // but put them the map for later retrieval
    var _elements = maps.extractAreasFromList(elements);
    if (!usemaps.length) {
        // the context does not contain any <area>s so no need
        // to replace anything, just remove any maps
        return _elements;
    }
    return mergeInDomOrder({
        list: _elements,
        elements: usemaps,
        resolveElement: function resolveElement(image) {
            var name = image.getAttribute('usemap').slice(1);
            return maps.getAreasFor(name);
        }
    });
}
var _createClass$1 = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw Object.defineProperty(new TypeError('Cannot call a class as a function'), "__NEXT_ERROR_CODE", {
            value: "E601",
            enumerable: false
        });
    }
}
var Shadows = function() {
    function Shadows(context, sortElements) {
        _classCallCheck$1(this, Shadows);
        // document context we're working with
        this.context = context;
        // callback that sorts an array of elements
        this.sortElements = sortElements;
        // reference to create unique IDs for each ShadowHost
        this.hostCounter = 1;
        // reference map for child-ShadowHosts of a ShadowHost
        this.inHost = {};
        // reference map for child-ShadowHost of the document
        this.inDocument = [];
        // reference map for ShadowHosts
        this.hosts = {};
        // reference map for tabbable elements of a ShadowHost
        this.elements = {};
    }
    // remember which hosts we have to sort within later
    _createClass$1(Shadows, [
        {
            key: '_registerHost',
            value: function _registerHost(host) {
                if (host._sortingId) {
                    return;
                }
                // make the ShadowHost identifiable (see cleanup() for undo)
                host._sortingId = 'shadow-' + this.hostCounter++;
                this.hosts[host._sortingId] = host;
                // hosts may contain other hosts
                var parentHost = getShadowHost({
                    context: host
                });
                if (parentHost) {
                    this._registerHost(parentHost);
                    this._registerHostParent(host, parentHost);
                } else {
                    this.inDocument.push(host);
                }
            }
        },
        {
            key: '_registerHostParent',
            value: function _registerHostParent(host, parent) {
                if (!this.inHost[parent._sortingId]) {
                    this.inHost[parent._sortingId] = [];
                }
                this.inHost[parent._sortingId].push(host);
            }
        },
        {
            key: '_registerElement',
            value: function _registerElement(element, host) {
                if (!this.elements[host._sortingId]) {
                    this.elements[host._sortingId] = [];
                }
                this.elements[host._sortingId].push(element);
            }
        },
        {
            key: 'extractElements',
            value: function extractElements(elements) {
                return elements.filter(function(element) {
                    var host = getShadowHost({
                        context: element
                    });
                    if (!host) {
                        return true;
                    }
                    this._registerHost(host);
                    this._registerElement(element, host);
                    return false;
                }, this);
            }
        },
        {
            key: 'sort',
            value: function sort(elements) {
                var _elements = this._injectHosts(elements);
                _elements = this._replaceHosts(_elements);
                this._cleanup();
                return _elements;
            }
        },
        {
            key: '_injectHosts',
            value: function _injectHosts(elements) {
                Object.keys(this.hosts).forEach(function(_sortingId) {
                    var _list = this.elements[_sortingId];
                    var _elements = this.inHost[_sortingId];
                    var _context = this.hosts[_sortingId].shadowRoot;
                    this.elements[_sortingId] = this._merge(_list, _elements, _context);
                }, this);
                return this._merge(elements, this.inDocument, this.context);
            }
        },
        {
            key: '_merge',
            value: function _merge(list, elements, context) {
                var merged = mergeInDomOrder({
                    list: list,
                    elements: elements
                });
                return this.sortElements(merged, context);
            }
        },
        {
            key: '_replaceHosts',
            value: function _replaceHosts(elements) {
                return mergeInDomOrder({
                    list: elements,
                    elements: this.inDocument,
                    resolveElement: this._resolveHostElement.bind(this)
                });
            }
        },
        {
            key: '_resolveHostElement',
            value: function _resolveHostElement(host) {
                var merged = mergeInDomOrder({
                    list: this.elements[host._sortingId],
                    elements: this.inHost[host._sortingId],
                    resolveElement: this._resolveHostElement.bind(this)
                });
                var _tabindex = tabindexValue(host);
                if (_tabindex !== null && _tabindex > -1) {
                    return [
                        host
                    ].concat(merged);
                }
                return merged;
            }
        },
        {
            key: '_cleanup',
            value: function _cleanup() {
                // remove those identifers we put on the ShadowHost to avoid using Map()
                Object.keys(this.hosts).forEach(function(key) {
                    delete this.hosts[key]._sortingId;
                }, this);
            }
        }
    ]);
    return Shadows;
}();
function sortShadowed(elements, context, sortElements) {
    var shadows = new Shadows(context, sortElements);
    var _elements = shadows.extractElements(elements);
    if (_elements.length === elements.length) {
        // no shadowed content found, no need to continue
        return sortElements(elements);
    }
    return shadows.sort(_elements);
}
function sortTabindex(elements) {
    // https://developer.mozilla.org/docs/Web/API/HTMLElement.tabIndex
    // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
    // elements with a positive tabIndex:
    //   Elements that have identical tabIndexes should be navigated in the order they appear.
    //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.
    // NOTE: sort implementation may be unstable and thus mess up DOM order,
    // that's why we build a map that's being sorted instead. If we were able to rely
    // on a stable sorting algorithm, sortTabindex() could be as simple as
    // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
    // at this time Chrome does not use a stable sorting algorithm
    // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability
    // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
    // https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
    var map = {};
    var indexes = [];
    var normal = elements.filter(function(element) {
        // in Trident and Gecko SVGElement does not know about the tabIndex property
        var tabIndex = element.tabIndex;
        if (tabIndex === undefined) {
            tabIndex = tabindexValue(element);
        }
        // extract elements that don't need sorting
        if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
            return true;
        }
        if (!map[tabIndex]) {
            // create sortable bucket for dom-order-preservation of elements with the same tabIndex
            map[tabIndex] = [];
            // maintain a list of unique tabIndexes
            indexes.push(tabIndex);
        }
        // sort element into the proper bucket
        map[tabIndex].push(element);
        // element moved to sorting map, so not "normal" anymore
        return false;
    });
    // sort the tabindex ascending,
    // then resolve them to their appropriate buckets,
    // then flatten the array of arrays to an array
    var _elements = indexes.sort().map(function(tabIndex) {
        return map[tabIndex];
    }).reduceRight(function(previous, current) {
        return current.concat(previous);
    }, normal);
    return _elements;
}
var supports$8 = void 0;
function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
        var tmp = elements.splice(pos, 1);
        return tmp.concat(elements);
    }
    return elements;
}
function sortElements(elements, _context) {
    if (supports$8.tabsequenceAreaAtImgPosition) {
        // Some browsers sort <area> in DOM order, some place the <area>s
        // where the <img> referecing them would've been in DOM order.
        // https://github.com/medialize/ally.js/issues/5
        elements = sortArea(elements, _context);
    }
    elements = sortTabindex(elements);
    return elements;
}
function queryTabsequence() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!supports$8) {
        supports$8 = _supports();
    }
    var _context = nodeArray(context)[0] || document.documentElement;
    var elements = queryTabbable({
        context: _context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    });
    if (document.body.createShadowRoot && platform.is.BLINK) {
        // sort tabindex localized to shadow dom
        // see https://github.com/medialize/ally.js/issues/6
        elements = sortShadowed(elements, _context, sortElements);
    } else {
        elements = sortElements(elements, _context);
    }
    if (includeContext) {
        // if we include the context itself, it has to be the first
        // element of the sequence
        elements = moveContextToBeginning(elements, _context);
    }
    return elements;
}
// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)
var keycode = {
    // Element Focus
    tab: 9,
    // Navigation
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    'page-up': 33,
    pageDown: 34,
    'page-down': 34,
    end: 35,
    home: 36,
    // Action
    enter: 13,
    escape: 27,
    space: 32,
    // Modifier
    shift: 16,
    capsLock: 20,
    'caps-lock': 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    // in firefox: 224
    // on mac (chrome): meta-left=91, meta-right=93
    // on win (IE11): meta-left=91, meta-right=92
    pause: 19,
    // Content Manipulation
    insert: 45,
    delete: 46,
    backspace: 8,
    // the same logical key may be identified through different keyCodes
    _alias: {
        91: [
            92,
            93,
            224
        ]
    }
};
// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for(var n = 1; n < 26; n++){
    keycode['f' + n] = n + 111;
}
// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for(var _n = 0; _n < 10; _n++){
    var code = _n + 48;
    var numCode = _n + 96;
    keycode[_n] = code;
    keycode['num-' + _n] = numCode;
    keycode._alias[code] = [
        numCode
    ];
}
// Latin characters (65 - 90)
for(var _n2 = 0; _n2 < 26; _n2++){
    var _code = _n2 + 65;
    var name$1 = String.fromCharCode(_code).toLowerCase();
    keycode[name$1] = _code;
}
var modifier = {
    alt: 'altKey',
    ctrl: 'ctrlKey',
    meta: 'metaKey',
    shift: 'shiftKey'
};
var modifierSequence = Object.keys(modifier).map(function(name) {
    return modifier[name];
});
function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
        altKey: value,
        ctrlKey: value,
        metaKey: value,
        shiftKey: value
    };
}
function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf('*') !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);
    modifiers.forEach(function(token) {
        if (token === '*') {
            // we've already covered the all-in operator
            return;
        }
        // we want the modifier pressed
        var value = true;
        var operator = token.slice(0, 1);
        if (operator === '?') {
            // we don't care if the modifier is pressed
            value = null;
        } else if (operator === '!') {
            // we do not want the modifier pressed
            value = false;
        }
        if (value !== true) {
            // compensate for the modifier's operator
            token = token.slice(1);
        }
        var propertyName = modifier[token];
        if (!propertyName) {
            throw Object.defineProperty(new TypeError('Unknown modifier "' + token + '"'), "__NEXT_ERROR_CODE", {
                value: "E530",
                enumerable: false
            });
        }
        expected[propertyName] = value;
    });
    return expected;
}
function resolveKey(key) {
    var code = keycode[key] || parseInt(key, 10);
    if (!code || typeof code !== 'number' || isNaN(code)) {
        throw Object.defineProperty(new TypeError('Unknown key "' + key + '"'), "__NEXT_ERROR_CODE", {
            value: "E536",
            enumerable: false
        });
    }
    return [
        code
    ].concat(keycode._alias[code] || []);
}
function matchModifiers(expected, event) {
    // returns true on match
    return !modifierSequence.some(function(prop) {
        // returns true on mismatch
        return typeof expected[prop] === 'boolean' && Boolean(event[prop]) !== expected[prop];
    });
}
function keyBinding(text) {
    return text.split(/\s+/).map(function(_text) {
        var tokens = _text.split('+');
        var _modifiers = resolveModifiers(tokens.slice(0, -1));
        var _keyCodes = resolveKey(tokens.slice(-1));
        return {
            keyCodes: _keyCodes,
            modifiers: _modifiers,
            matchModifiers: matchModifiers.bind(null, _modifiers)
        };
    });
}
// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/ function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, parent = _ref.parent, element = _ref.element, includeSelf = _ref.includeSelf;
    if (parent) {
        return function isChildOf(node) {
            return Boolean(includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    } else if (element) {
        return function isParentOf(node) {
            return Boolean(includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    throw Object.defineProperty(new TypeError('util/compare-position#getParentComparator required either options.parent or options.element'), "__NEXT_ERROR_CODE", {
        value: "E578",
        enumerable: false
    });
}
// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933
function whenKey() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bindings = {};
    var context = nodeArray(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = nodeArray(map.filter);
    delete map.filter;
    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
        throw Object.defineProperty(new TypeError('when/key requires at least one option key'), "__NEXT_ERROR_CODE", {
            value: "E566",
            enumerable: false
        });
    }
    var registerBinding = function registerBinding(event) {
        event.keyCodes.forEach(function(code) {
            if (!bindings[code]) {
                bindings[code] = [];
            }
            bindings[code].push(event);
        });
    };
    mapKeys.forEach(function(text) {
        if (typeof map[text] !== 'function') {
            throw Object.defineProperty(new TypeError('when/key requires option["' + text + '"] to be a function'), "__NEXT_ERROR_CODE", {
                value: "E595",
                enumerable: false
            });
        }
        var addCallback = function addCallback(event) {
            event.callback = map[text];
            return event;
        };
        keyBinding(text).map(addCallback).forEach(registerBinding);
    });
    var handleKeyDown = function handleKeyDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        if (filter.length) {
            // ignore elements within the exempted sub-trees
            var isParentOfElement = getParentComparator({
                element: event.target,
                includeSelf: true
            });
            if (filter.some(isParentOfElement)) {
                return;
            }
        }
        var key = event.keyCode || event.which;
        if (!bindings[key]) {
            return;
        }
        bindings[key].forEach(function(_event) {
            if (!_event.matchModifiers(event)) {
                return;
            }
            _event.callback.call(context, event, disengage);
        });
    };
    context.addEventListener('keydown', handleKeyDown, false);
    var disengage = function disengage() {
        context.removeEventListener('keydown', handleKeyDown, false);
    };
    return {
        disengage: disengage
    };
}
function _default(param) {
    let { context } = param === void 0 ? {} : param;
    if (!context) {
        context = document.documentElement;
    }
    // Make sure the supports tests are run before intercepting the Tab key,
    // or IE10 and IE11 will fail to process the first Tab key event. Not
    // limiting this warm-up to IE because it may be a problem elsewhere, too.
    queryTabsequence();
    return whenKey({
        // Safari on OSX may require ALT+TAB to reach links,
        // see https://github.com/medialize/ally.js/issues/146
        '?alt+?shift+tab': function altShiftTab(event) {
            // we're completely taking over the Tab key handling
            event.preventDefault();
            var sequence = queryTabsequence({
                context: context
            });
            var backward = event.shiftKey;
            var first = sequence[0];
            var last = sequence[sequence.length - 1];
            // wrap around first to last, last to first
            var source = backward ? first : last;
            var target = backward ? last : first;
            if (isActiveElement(source)) {
                target.focus();
                return;
            }
            // find current position in tabsequence
            var currentIndex = void 0;
            var found = sequence.some(function(element, index) {
                if (!isActiveElement(element)) {
                    return false;
                }
                currentIndex = index;
                return true;
            });
            if (!found) {
                // redirect to first as we're not in our tabsequence
                first.focus();
                return;
            }
            // shift focus to previous/next element in the sequence
            var offset = backward ? -1 : 1;
            sequence[currentIndex + offset].focus();
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=maintain--tab-focus.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    lock: null,
    unlock: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    lock: function() {
        return lock;
    },
    unlock: function() {
        return unlock;
    }
});
let previousBodyPaddingRight;
let previousBodyOverflowSetting;
let activeLocks = 0;
function lock() {
    setTimeout(()=>{
        if (activeLocks++ > 0) {
            return;
        }
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = "" + scrollBarGap + "px";
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    });
}
function unlock() {
    setTimeout(()=>{
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=body-locker.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return Overlay;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _maintaintabfocus = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/maintain--tab-focus.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _bodylocker = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/body-locker.js [client] (ecmascript)");
const Overlay = function Overlay(param) {
    let { className, children, fixed } = param;
    _react.useEffect({
        "Overlay.useEffect": ()=>{
            (0, _bodylocker.lock)();
            return ({
                "Overlay.useEffect": ()=>{
                    (0, _bodylocker.unlock)();
                }
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], []);
    const [overlay, setOverlay] = _react.useState(null);
    const onOverlay = _react.useCallback({
        "Overlay.useCallback[onOverlay]": (el)=>{
            setOverlay(el);
        }
    }["Overlay.useCallback[onOverlay]"], []);
    _react.useEffect({
        "Overlay.useEffect": ()=>{
            if (overlay == null) {
                return;
            }
            const handle2 = (0, _maintaintabfocus.default)({
                context: overlay
            });
            return ({
                "Overlay.useEffect": ()=>{
                    handle2.disengage();
                }
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], [
        overlay
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-dialog-overlay": true,
        className: className,
        ref: onOverlay,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "data-nextjs-dialog-backdrop": true,
                "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined
            }),
            children
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return _Overlay.Overlay;
    }
});
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/Overlay.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HotlinkedText", {
    enumerable: true,
    get: function() {
        return HotlinkedText;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _magicidentifier = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/magic-identifier.js [client] (ecmascript)");
const linkRegex = /https?:\/\/[^\s/$.?#].[^\s)'"]*/i;
const splitRegexp = new RegExp("(" + _magicidentifier.MAGIC_IDENTIFIER_REGEX.source + "|\\s+)");
const HotlinkedText = function HotlinkedText(props) {
    const { text, matcher } = props;
    const wordsAndWhitespaces = text.split(splitRegexp);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: wordsAndWhitespaces.map((word, index)=>{
            if (linkRegex.test(word)) {
                const link = linkRegex.exec(word);
                const href = link[0];
                // If link matcher is present but the link doesn't match, don't turn it into a link
                if (typeof matcher === 'function' && !matcher(href)) {
                    return word;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        href: href,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: word
                    })
                }, "link-" + index);
            }
            try {
                const decodedWord = (0, _magicidentifier.decodeMagicIdentifier)(word);
                if (decodedWord !== word) {
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("i", {
                        children: [
                            '{',
                            decodedWord,
                            '}'
                        ]
                    }, "ident-" + index);
                }
            } catch (e) {
                return /*#__PURE__*/ (0, _jsxruntime.jsxs)("i", {
                    children: [
                        '{',
                        word,
                        " (decoding failed: ",
                        '' + e,
                        ")",
                        '}'
                    ]
                }, "ident-" + index);
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                children: word
            }, "text-" + index);
        })
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOpenInEditor", {
    enumerable: true,
    get: function() {
        return useOpenInEditor;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
function useOpenInEditor(param) {
    let { file, lineNumber, column } = param === void 0 ? {} : param;
    const openInEditor = (0, _react.useCallback)(()=>{
        if (file == null || lineNumber == null || column == null) return;
        const params = new URLSearchParams();
        params.append('file', file);
        params.append('lineNumber', String(lineNumber));
        params.append('column', String(column));
        self.fetch((("TURBOPACK compile-time value", "") || '') + "/__nextjs_launch-editor?" + params.toString()).then(()=>{}, ()=>{
            console.error('There was an issue opening this code in your editor.');
        });
    }, [
        file,
        lineNumber,
        column
    ]);
    return openInEditor;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-open-in-editor.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EditorLink", {
    enumerable: true,
    get: function() {
        return EditorLink;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [client] (ecmascript)");
function EditorLink(param) {
    let { file, isSourceFile, location } = param;
    var _location_line, _location_column;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file,
        lineNumber: (_location_line = location == null ? void 0 : location.line) != null ? _location_line : 1,
        column: (_location_column = location == null ? void 0 : location.column) != null ? _location_column : 0
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-with-open-in-editor-link": true,
        "data-with-open-in-editor-link-source-file": isSourceFile ? true : undefined,
        "data-with-open-in-editor-link-import-trace": isSourceFile ? undefined : true,
        tabIndex: 10,
        role: 'link',
        onClick: open,
        title: 'Click to open in your editor',
        children: [
            file,
            location ? ":" + location.line + ":" + location.column : null,
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("polyline", {
                        points: "15 3 21 3 21 9"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                        x1: "10",
                        y1: "14",
                        x2: "21",
                        y2: "3"
                    })
                ]
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=EditorLink.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return Terminal;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/anser/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const _EditorLink = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/EditorLink.js [client] (ecmascript)");
function getFile(lines) {
    const contentFileName = lines.shift();
    if (!contentFileName) return null;
    const [fileName, line, column] = contentFileName.split(':', 3);
    const parsedLine = Number(line);
    const parsedColumn = Number(column);
    const hasLocation = !Number.isNaN(parsedLine) && !Number.isNaN(parsedColumn);
    return {
        fileName: hasLocation ? fileName : contentFileName,
        location: hasLocation ? {
            line: parsedLine,
            column: parsedColumn
        } : undefined
    };
}
function getImportTraceFiles(lines) {
    if (lines.some((line)=>/ReactServerComponentsError:/.test(line)) || lines.some((line)=>/Import trace for requested module:/.test(line))) {
        // Grab the lines at the end containing the files
        const files = [];
        while(/.+\..+/.test(lines[lines.length - 1]) && !lines[lines.length - 1].includes(':')){
            const file = lines.pop().trim();
            files.unshift(file);
        }
        return files;
    }
    return [];
}
function getEditorLinks(content) {
    const lines = content.split('\n');
    const file = getFile(lines);
    const importTraceFiles = getImportTraceFiles(lines);
    return {
        file,
        source: lines.join('\n'),
        importTraceFiles
    };
}
const Terminal = function Terminal(param) {
    let { content } = param;
    const { file, source, importTraceFiles } = _react.useMemo({
        "Terminal.useMemo": ()=>getEditorLinks(content)
    }["Terminal.useMemo"], [
        content
    ]);
    const decoded = _react.useMemo({
        "Terminal.useMemo[decoded]": ()=>{
            return _anser.default.ansiToJson(source, {
                json: true,
                use_classes: true,
                remove_empty: true
            });
        }
    }["Terminal.useMemo[decoded]"], [
        source
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-terminal": true,
        children: [
            file && /*#__PURE__*/ (0, _jsxruntime.jsx)(_EditorLink.EditorLink, {
                isSourceFile: true,
                file: file.fileName,
                location: file.location
            }, file.fileName),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("pre", {
                children: [
                    decoded.map((entry, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            style: {
                                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                                ...entry.decoration === 'bold' ? {
                                    fontWeight: 800
                                } : entry.decoration === 'italic' ? {
                                    fontStyle: 'italic'
                                } : undefined
                            },
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                text: entry.content
                            })
                        }, "terminal-entry-" + index)),
                    importTraceFiles.map((importTraceFile)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_EditorLink.EditorLink, {
                            isSourceFile: false,
                            file: importTraceFile
                        }, importTraceFile))
                ]
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Terminal.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return _Terminal.Terminal;
    }
});
const _Terminal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/Terminal.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-build-error-version-status {\n    flex: 1;\n    text-align: right;\n    font-size: var(--size-font-small);\n  }\n  .nextjs-container-build-error-version-status span {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background: var(--color-ansi-bright-black);\n  }\n  .nextjs-container-build-error-version-status span.fresh {\n    background: var(--color-ansi-green);\n  }\n  .nextjs-container-build-error-version-status span.stale {\n    background: var(--color-ansi-yellow);\n  }\n  .nextjs-container-build-error-version-status span.outdated {\n    background: var(--color-ansi-red);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VersionStalenessInfo: null,
    getStaleness: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VersionStalenessInfo: function() {
        return VersionStalenessInfo;
    },
    getStaleness: function() {
        return getStaleness;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function VersionStalenessInfo(param) {
    let { versionInfo } = param;
    if (!versionInfo) return null;
    const { staleness } = versionInfo;
    let { text, indicatorClass, title } = getStaleness(versionInfo);
    if (!text) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
        className: "nextjs-container-build-error-version-status",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: indicatorClass
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("small", {
                "data-nextjs-version-checker": true,
                title: title,
                children: text
            }),
            ' ',
            staleness === 'fresh' || staleness === 'newer-than-npm' || staleness === 'unknown' ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://nextjs.org/docs/messages/version-staleness",
                children: "(learn more)"
            }),
            ("TURBOPACK compile-time truthy", 1) ? ' (Turbopack)' : ("TURBOPACK unreachable", undefined)
        ]
    });
}
function getStaleness(param) {
    let { installed, staleness, expected } = param;
    let text = '';
    let title = '';
    let indicatorClass = '';
    const versionLabel = "Next.js (" + installed + ")";
    switch(staleness){
        case 'newer-than-npm':
        case 'fresh':
            text = versionLabel;
            title = "Latest available version is detected (" + installed + ").";
            indicatorClass = 'fresh';
            break;
        case 'stale-patch':
        case 'stale-minor':
            text = "" + versionLabel + " out of date";
            title = "There is a newer version (" + expected + ") available, upgrade recommended! ";
            indicatorClass = 'stale';
            break;
        case 'stale-major':
            {
                text = "" + versionLabel + " is outdated";
                title = "An outdated version detected (latest is " + expected + "), upgrade is highly recommended!";
                indicatorClass = 'outdated';
                break;
            }
        case 'stale-prerelease':
            {
                text = "" + versionLabel + " is outdated";
                title = "There is a newer canary version (" + expected + ") available, please upgrade! ";
                indicatorClass = 'stale';
                break;
            }
        case 'unknown':
            break;
        default:
            break;
    }
    return {
        text,
        indicatorClass,
        title
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=VersionStalenessInfo.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VersionStalenessInfo: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VersionStalenessInfo: function() {
        return _VersionStalenessInfo.VersionStalenessInfo;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/styles.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BuildError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BuildError: function() {
        return BuildError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [client] (ecmascript)");
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [client] (ecmascript)");
const _Terminal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/index.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  h1.nextjs__container_errors_label {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: var(--size-gap-double) 0;\n  }\n  .nextjs-container-errors-header p {\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-errors-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-errors-body small {\n    color: var(--color-font);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const BuildError = function BuildError(param) {
    let { message, versionInfo } = param;
    const noop = _react.useCallback({
        "BuildError.useCallback[noop]": ()=>{}
    }["BuildError.useCallback[noop]"], []);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Overlay.Overlay, {
        fixed: true,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Dialog.Dialog, {
            type: "error",
            "aria-labelledby": "nextjs__container_errors_label",
            "aria-describedby": "nextjs__container_errors_desc",
            onClose: noop,
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogContent, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogHeader, {
                        className: "nextjs-container-errors-header",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                id: "nextjs__container_errors_label",
                                className: "nextjs__container_errors_label",
                                children: 'Build Error'
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VersionStalenessInfo.VersionStalenessInfo, {
                                versionInfo: versionInfo
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                id: "nextjs__container_errors_desc",
                                className: "nextjs__container_errors_desc",
                                children: "Failed to compile"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogBody, {
                        className: "nextjs-container-errors-body",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_Terminal.Terminal, {
                                content: message
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("footer", {
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    id: "nextjs__container_build_error_desc",
                                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("small", {
                                        children: "This error occurred during the build process and can only be dismissed by fixing the error."
                                    })
                                })
                            })
                        ]
                    })
                ]
            })
        })
    });
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=BuildError.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CloseIcon", {
    enumerable: true,
    get: function() {
        return CloseIcon;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const CloseIcon = ()=>{
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M18 6L6 18",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M6 6L18 18",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CloseIcon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeftRightDialogHeader", {
    enumerable: true,
    get: function() {
        return LeftRightDialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _CloseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js [client] (ecmascript)");
const LeftRightDialogHeader = function LeftRightDialogHeader(param) {
    let { children, className, previous, next, close } = param;
    const buttonLeft = _react.useRef(null);
    const buttonRight = _react.useRef(null);
    const buttonClose = _react.useRef(null);
    const [nav, setNav] = _react.useState(null);
    const onNav = _react.useCallback({
        "LeftRightDialogHeader.useCallback[onNav]": (el)=>{
            setNav(el);
        }
    }["LeftRightDialogHeader.useCallback[onNav]"], []);
    _react.useEffect({
        "LeftRightDialogHeader.useEffect": ()=>{
            if (nav == null) {
                return;
            }
            const root = nav.getRootNode();
            const d = self.document;
            function handler(e) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (buttonLeft.current) {
                        buttonLeft.current.focus();
                    }
                    previous && previous();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (buttonRight.current) {
                        buttonRight.current.focus();
                    }
                    next && next();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (root instanceof ShadowRoot) {
                        const a = root.activeElement;
                        if (a && a !== buttonClose.current && a instanceof HTMLElement) {
                            a.blur();
                            return;
                        }
                    }
                    close == null ? void 0 : close();
                }
            }
            root.addEventListener('keydown', handler);
            if (root !== d) {
                d.addEventListener('keydown', handler);
            }
            return ({
                "LeftRightDialogHeader.useEffect": function() {
                    root.removeEventListener('keydown', handler);
                    if (root !== d) {
                        d.removeEventListener('keydown', handler);
                    }
                }
            })["LeftRightDialogHeader.useEffect"];
        }
    }["LeftRightDialogHeader.useEffect"], [
        close,
        nav,
        next,
        previous
    ]);
    // Unlock focus for browsers like Firefox, that break all user focus if the
    // currently focused item becomes disabled.
    _react.useEffect({
        "LeftRightDialogHeader.useEffect": ()=>{
            if (nav == null) {
                return;
            }
            const root = nav.getRootNode();
            // Always true, but we do this for TypeScript:
            if (root instanceof ShadowRoot) {
                const a = root.activeElement;
                if (previous == null) {
                    if (buttonLeft.current && a === buttonLeft.current) {
                        buttonLeft.current.blur();
                    }
                } else if (next == null) {
                    if (buttonRight.current && a === buttonRight.current) {
                        buttonRight.current.blur();
                    }
                }
            }
        }
    }["LeftRightDialogHeader.useEffect"], [
        nav,
        next,
        previous
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-dialog-left-right": true,
        className: className,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("nav", {
                ref: onNav,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        ref: buttonLeft,
                        type: "button",
                        disabled: previous == null ? true : undefined,
                        "aria-disabled": previous == null ? true : undefined,
                        onClick: previous != null ? previous : undefined,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                                    children: "previous"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                    d: "M6.99996 1.16666L1.16663 6.99999L6.99996 12.8333M12.8333 6.99999H1.99996H12.8333Z",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        ref: buttonRight,
                        type: "button",
                        disabled: next == null ? true : undefined,
                        "aria-disabled": next == null ? true : undefined,
                        onClick: next != null ? next : undefined,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                                    children: "next"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                    d: "M6.99996 1.16666L12.8333 6.99999L6.99996 12.8333M1.16663 6.99999H12H1.16663Z",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        })
                    }),
                    children
                ]
            }),
            close ? /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                "data-nextjs-errors-dialog-left-right-close-button": true,
                ref: buttonClose,
                type: "button",
                onClick: close,
                "aria-label": "Close",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_CloseIcon.CloseIcon, {})
                })
            }) : null
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=LeftRightDialogHeader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n\n    color: var(--color-font);\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LeftRightDialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LeftRightDialogHeader: function() {
        return _LeftRightDialogHeader.LeftRightDialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js [client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-toast {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n\n  @media (max-width: 440px) {\n    .nextjs-toast {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  .nextjs-toast-errors-parent {\n    padding: 16px;\n    border-radius: var(--size-gap-quad);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n  }\n\n  .nextjs-static-indicator-toast-wrapper {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border: 0;\n    border-radius: var(--size-gap-triple);\n    background: var(--color-background);\n    color: var(--color-font);\n    transition: all 0.3s ease-in-out;\n    box-shadow:\n      inset 0 0 0 1px var(--color-border-shadow),\n      0 11px 40px 0 rgba(0, 0, 0, 0.25),\n      0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  }\n\n  .nextjs-static-indicator-toast-wrapper:hover {\n    width: 140px;\n  }\n\n  .nextjs-static-indicator-toast-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n  }\n\n  .nextjs-static-indicator-toast-text {\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    white-space: nowrap;\n    transition: opacity 0.3s ease-in-out;\n    line-height: 30px;\n    position: absolute;\n    left: 30px;\n    top: 0;\n  }\n\n  .nextjs-static-indicator-toast-wrapper:hover\n    .nextjs-static-indicator-toast-text {\n    opacity: 1;\n  }\n\n  .nextjs-static-indicator-toast-wrapper button {\n    color: var(--color-font);\n    opacity: 0.8;\n    background: none;\n    border: none;\n    margin-left: 6px;\n    margin-top: -2px;\n    outline: 0;\n  }\n\n  .nextjs-static-indicator-toast-wrapper button:focus {\n    opacity: 1;\n  }\n\n  .nextjs-static-indicator-toast-wrapper button > svg {\n    width: 16px;\n    height: 16px;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Toast", {
    enumerable: true,
    get: function() {
        return Toast;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const Toast = function Toast(param) {
    let { onClick, children, className, ...props } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        ...props,
        onClick: (e)=>{
            e.preventDefault();
            return onClick == null ? void 0 : onClick();
        },
        className: "nextjs-toast" + (className ? ' ' + className : ''),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            "data-nextjs-toast-wrapper": true,
            children: children
        })
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Toast.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Toast: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Toast: function() {
        return _Toast.Toast;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/styles.js [client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/Toast.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return CodeFrame;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/anser/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [client] (ecmascript)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const CodeFrame = function CodeFrame(param) {
    let { stackFrame, codeFrame } = param;
    // Strip leading spaces out of the code frame:
    const formattedFrame = _react.useMemo({
        "CodeFrame.useMemo[formattedFrame]": ()=>{
            const lines = codeFrame.split(/\r?\n/g);
            // Find the minimum length of leading spaces after `|` in the code frame
            const miniLeadingSpacesLength = lines.map({
                "CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength": (line)=>/^>? +\d+ +\| [ ]+/.exec((0, _stripansi.default)(line)) === null ? null : /^>? +\d+ +\| ( *)/.exec((0, _stripansi.default)(line))
            }["CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength"]).filter(Boolean).map({
                "CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength": (v)=>v.pop()
            }["CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength"]).reduce({
                "CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength": (c, n)=>isNaN(c) ? n.length : Math.min(c, n.length)
            }["CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength"], NaN);
            // When the minimum length of leading spaces is greater than 1, remove them
            // from the code frame to help the indentation looks better when there's a lot leading spaces.
            if (miniLeadingSpacesLength > 1) {
                return lines.map({
                    "CodeFrame.useMemo[formattedFrame]": (line, a)=>~(a = line.indexOf('|')) ? line.substring(0, a) + line.substring(a).replace("^\\ {" + miniLeadingSpacesLength + "}", '') : line
                }["CodeFrame.useMemo[formattedFrame]"]).join('\n');
            }
            return lines.join('\n');
        }
    }["CodeFrame.useMemo[formattedFrame]"], [
        codeFrame
    ]);
    const decoded = _react.useMemo({
        "CodeFrame.useMemo[decoded]": ()=>{
            return _anser.default.ansiToJson(formattedFrame, {
                json: true,
                use_classes: true,
                remove_empty: true
            });
        }
    }["CodeFrame.useMemo[decoded]"], [
        formattedFrame
    ]);
    const open = (0, _useopenineditor.useOpenInEditor)({
        file: stackFrame.file,
        lineNumber: stackFrame.lineNumber,
        column: stackFrame.column
    });
    // TODO: make the caret absolute
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-codeframe": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                    role: "link",
                    onClick: open,
                    tabIndex: 1,
                    title: "Click to open in your editor",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                            children: [
                                (0, _stackframe.getFrameSource)(stackFrame),
                                " @",
                                ' ',
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                    text: stackFrame.methodName
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("polyline", {
                                    points: "15 3 21 3 21 9"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                                    x1: "10",
                                    y1: "14",
                                    x2: "21",
                                    y2: "3"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("pre", {
                children: decoded.map((entry, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        style: {
                            color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                            ...entry.decoration === 'bold' ? {
                                fontWeight: 800
                            } : entry.decoration === 'italic' ? {
                                fontStyle: 'italic'
                            } : undefined
                        },
                        children: entry.content
                    }, "frame-" + index))
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CodeFrame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return _CodeFrame.CodeFrame;
    }
});
const _CodeFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/CodeFrame.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CallStackFrame", {
    enumerable: true,
    get: function() {
        return CallStackFrame;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/stack-frame.js [client] (ecmascript)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-open-in-editor.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const CallStackFrame = function CallStackFrame(param) {
    let { frame } = param;
    var _frame_originalStackFrame;
    // TODO: ability to expand resolved frames
    // TODO: render error or external indicator
    const f = (_frame_originalStackFrame = frame.originalStackFrame) != null ? _frame_originalStackFrame : frame.sourceStackFrame;
    const hasSource = Boolean(frame.originalCodeFrame);
    const open = (0, _useopenineditor.useOpenInEditor)(hasSource ? {
        file: f.file,
        lineNumber: f.lineNumber,
        column: f.column
    } : undefined);
    // Format method to strip out the webpack layer prefix.
    // e.g. (app-pages-browser)/./app/page.tsx -> ./app/page.tsx
    const formattedMethod = f.methodName.replace(/^\([\w-]+\)\//, '');
    // Formatted file source could be empty. e.g. <anonymous> will be formatted to empty string,
    // we'll skip rendering the frame in this case.
    const fileSource = (0, _stackframe.getFrameSource)(f);
    if (!fileSource) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-call-stack-frame": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("h3", {
                "data-nextjs-frame-expanded": !frame.ignored,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                    text: formattedMethod
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                "data-has-source": hasSource ? 'true' : undefined,
                "data-no-source": hasSource ? undefined : 'true',
                tabIndex: hasSource ? 10 : undefined,
                role: hasSource ? 'link' : undefined,
                onClick: open,
                title: hasSource ? 'Click to open in your editor' : undefined,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        children: fileSource
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("polyline", {
                                points: "15 3 21 3 21 9"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                                x1: "10",
                                y1: "14",
                                x2: "21",
                                y2: "3"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CallStackFrame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RuntimeError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RuntimeError: function() {
        return RuntimeError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _CodeFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/index.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
const _CallStackFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/CallStackFrame.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-call-stack-frame]:not(:last-child),\n  [data-nextjs-component-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-expand-ignore-button]:focus:not(:focus-visible),\n  [data-expand-ignore-button] {\n    background: none;\n    border: none;\n    color: var(--color-font);\n    cursor: pointer;\n    font-size: var(--size-font);\n    margin: var(--size-gap) 0;\n    padding: 0;\n    text-decoration: underline;\n    outline: none;\n  }\n\n  [data-nextjs-data-runtime-error-copy-button],\n  [data-nextjs-data-runtime-error-copy-button]:focus:not(:focus-visible) {\n    position: relative;\n    margin-left: var(--size-gap);\n    padding: 0;\n    border: none;\n    background: none;\n    outline: none;\n  }\n  [data-nextjs-data-runtime-error-copy-button] > svg {\n    vertical-align: middle;\n  }\n  .nextjs-data-runtime-error-copy-button {\n    color: inherit;\n  }\n  .nextjs-data-runtime-error-copy-button--initial:hover {\n    cursor: pointer;\n  }\n  .nextjs-data-runtime-error-copy-button[aria-disabled='true'] {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n  .nextjs-data-runtime-error-copy-button--error,\n  .nextjs-data-runtime-error-copy-button--error:hover {\n    color: var(--color-ansi-red);\n  }\n  .nextjs-data-runtime-error-copy-button--success {\n    color: var(--color-ansi-green);\n  }\n\n  [data-nextjs-call-stack-frame] > h3,\n  [data-nextjs-component-stack-frame] > h3 {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font);\n  }\n  [data-nextjs-call-stack-frame] > h3[data-nextjs-frame-expanded='false'] {\n    color: #666;\n    display: inline-block;\n  }\n  [data-nextjs-call-stack-frame] > div,\n  [data-nextjs-component-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg,\n  [data-nextjs-component-stack-frame] > [role='link'] > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n    flex-shrink: 0;\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source],\n  [data-nextjs-component-stack-frame] > [role='link'] {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover,\n  [data-nextjs-component-stack-frame] > [role='link']:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg,\n  [data-nextjs-component-stack-frame] > [role='link'] > svg {\n    display: unset;\n  }\n\n  [data-nextjs-call-stack-framework-icon] {\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-call-stack-framework-icon='next'] > mask {\n    mask-type: alpha;\n  }\n  [data-nextjs-call-stack-framework-icon='react'] {\n    color: rgb(20, 158, 202);\n  }\n  [data-nextjs-collapsed-call-stack-details][open]\n    [data-nextjs-call-stack-chevron-icon] {\n    transform: rotate(90deg);\n  }\n  [data-nextjs-collapsed-call-stack-details] summary {\n    display: flex;\n    align-items: center;\n    margin-bottom: var(--size-gap);\n    list-style: none;\n  }\n  [data-nextjs-collapsed-call-stack-details] summary::-webkit-details-marker {\n    display: none;\n  }\n\n  [data-nextjs-collapsed-call-stack-details] h3 {\n    color: #666;\n  }\n  [data-nextjs-collapsed-call-stack-details] [data-nextjs-call-stack-frame] {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-container-errors-pseudo-html] {\n    position: relative;\n  }\n  [data-nextjs-container-errors-pseudo-html-collapse] {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    color: inherit;\n    background: none;\n    border: none;\n    padding: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='add'] {\n    color: var(--color-ansi-green);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='remove'] {\n    color: var(--color-ansi-red);\n  }\n  [data-nextjs-container-errors-pseudo-html--tag-error] {\n    color: var(--color-ansi-red);\n    font-weight: bold;\n  }\n  /* hide but text are still accessible in DOM */\n  [data-nextjs-container-errors-pseudo-html--hint] {\n    display: inline-block;\n    font-size: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html--tag-adjacent='false'] {\n    color: var(--color-accents-1);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function RuntimeError(param) {
    let { error } = param;
    const [isIgnoredExpanded, setIsIgnoredExpanded] = _react.useState(false);
    const { firstFrame, allLeadingFrames, trailingCallStackFrames, displayedFramesCount } = _react.useMemo({
        "RuntimeError.useMemo": ()=>{
            const filteredFrames = error.frames.filter({
                "RuntimeError.useMemo.filteredFrames": (frame)=>isIgnoredExpanded ? true : !frame.ignored
            }["RuntimeError.useMemo.filteredFrames"]);
            const firstFirstPartyFrameIndex = filteredFrames.findIndex({
                "RuntimeError.useMemo.firstFirstPartyFrameIndex": (entry)=>!entry.ignored && Boolean(entry.originalCodeFrame) && Boolean(entry.originalStackFrame)
            }["RuntimeError.useMemo.firstFirstPartyFrameIndex"]);
            var _filteredFrames_firstFirstPartyFrameIndex;
            return {
                displayedFramesCount: filteredFrames.length,
                firstFrame: (_filteredFrames_firstFirstPartyFrameIndex = filteredFrames[firstFirstPartyFrameIndex]) != null ? _filteredFrames_firstFirstPartyFrameIndex : null,
                allLeadingFrames: firstFirstPartyFrameIndex < 0 ? [] : filteredFrames.slice(0, firstFirstPartyFrameIndex),
                trailingCallStackFrames: filteredFrames.slice(firstFirstPartyFrameIndex + 1)
            };
        }
    }["RuntimeError.useMemo"], [
        error.frames,
        isIgnoredExpanded
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
        children: [
            firstFrame ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("h2", {
                        children: "Source"
                    }),
                    allLeadingFrames.map((frame, frameIndex)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_CallStackFrame.CallStackFrame, {
                            frame: frame
                        }, "call-stack-leading-" + frameIndex)),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_CodeFrame.CodeFrame, {
                        stackFrame: firstFrame.originalStackFrame,
                        codeFrame: firstFrame.originalCodeFrame
                    })
                ]
            }) : undefined,
            trailingCallStackFrames.map((frame, frameIndex)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_CallStackFrame.CallStackFrame, {
                    frame: frame
                }, "call-stack-leading-" + frameIndex)),
            // if the default displayed ignored frames count is equal equal to the total frames count, hide the button
            displayedFramesCount === error.frames.length && !isIgnoredExpanded ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                "data-expand-ignore-button": isIgnoredExpanded,
                onClick: ()=>setIsIgnoredExpanded(!isIgnoredExpanded),
                children: "" + (isIgnoredExpanded ? 'Hide' : 'Show') + " ignored frames"
            })
        ]
    });
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CollapseIcon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CollapseIcon", {
    enumerable: true,
    get: function() {
        return CollapseIcon;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function CollapseIcon(param) {
    let { collapsed } = param === void 0 ? {} : param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        "data-nextjs-call-stack-chevron-icon": true,
        "data-collapsed": collapsed,
        fill: "none",
        height: "20",
        width: "20",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        ...typeof collapsed === 'boolean' ? {
            style: {
                transform: collapsed ? undefined : 'rotate(90deg)'
            }
        } : {},
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M9 18l6-6-6-6"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CollapseIcon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/component-stack-pseudo-html.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PseudoHtmlDiff", {
    enumerable: true,
    get: function() {
        return PseudoHtmlDiff;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
const _CollapseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CollapseIcon.js [client] (ecmascript)");
function getAdjacentProps(isAdj) {
    return {
        'data-nextjs-container-errors-pseudo-html--tag-adjacent': isAdj
    };
}
function PseudoHtmlDiff(param) {
    let { componentStackFrames, firstContent, secondContent, hydrationMismatchType, reactOutputComponentDiff, ...props } = param;
    const isHtmlTagsWarning = hydrationMismatchType === 'tag';
    const isReactHydrationDiff = !!reactOutputComponentDiff;
    // For text mismatch, mismatched text will take 2 rows, so we display 4 rows of component stack
    const MAX_NON_COLLAPSED_FRAMES = isHtmlTagsWarning ? 6 : 4;
    const [isHtmlCollapsed, toggleCollapseHtml] = (0, _react.useState)(true);
    const htmlComponents = (0, _react.useMemo)(()=>{
        const componentStacks = [];
        // React 19 unified mismatch
        if (isReactHydrationDiff) {
            let currentComponentIndex = componentStackFrames.length - 1;
            const reactComponentDiffLines = reactOutputComponentDiff.split('\n');
            const diffHtmlStack = [];
            reactComponentDiffLines.forEach((line, index)=>{
                let trimmedLine = line.trim();
                const isDiffLine = trimmedLine[0] === '+' || trimmedLine[0] === '-';
                const spaces = ' '.repeat(Math.max(componentStacks.length * 2, 1));
                if (isDiffLine) {
                    const sign = trimmedLine[0];
                    trimmedLine = trimmedLine.slice(1).trim() // trim spaces after sign
                    ;
                    diffHtmlStack.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                        "data-nextjs-container-errors-pseudo-html--diff": sign === '+' ? 'add' : 'remove',
                        children: [
                            sign,
                            spaces,
                            trimmedLine,
                            '\n'
                        ]
                    }, 'comp-diff' + index));
                } else if (currentComponentIndex >= 0) {
                    const isUserLandComponent = trimmedLine.startsWith('<' + componentStackFrames[currentComponentIndex].component);
                    // If it's matched userland component or it's ... we will keep the component stack in diff
                    if (isUserLandComponent || trimmedLine === '...') {
                        currentComponentIndex--;
                        componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                            children: [
                                spaces,
                                trimmedLine,
                                '\n'
                            ]
                        }, 'comp-diff' + index));
                    } else if (!isHtmlCollapsed) {
                        componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                            children: [
                                spaces,
                                trimmedLine,
                                '\n'
                            ]
                        }, 'comp-diff' + index));
                    }
                } else if (!isHtmlCollapsed) {
                    // In general, if it's not collapsed, show the whole diff
                    componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                        children: [
                            spaces,
                            trimmedLine,
                            '\n'
                        ]
                    }, 'comp-diff' + index));
                }
            });
            return componentStacks.concat(diffHtmlStack);
        }
        const nestedHtmlStack = [];
        const tagNames = isHtmlTagsWarning ? [
            firstContent.replace(/<|>/g, ''),
            secondContent.replace(/<|>/g, '')
        ] : [];
        let lastText = '';
        const componentStack = componentStackFrames.map((frame)=>frame.component).reverse();
        // [child index, parent index]
        const matchedIndex = [
            -1,
            -1
        ];
        if (isHtmlTagsWarning) {
            // Reverse search for the child tag
            for(let i = componentStack.length - 1; i >= 0; i--){
                if (componentStack[i] === tagNames[0]) {
                    matchedIndex[0] = i;
                    break;
                }
            }
            // Start searching parent tag from child tag above
            for(let i = matchedIndex[0] - 1; i >= 0; i--){
                if (componentStack[i] === tagNames[1]) {
                    matchedIndex[1] = i;
                    break;
                }
            }
        }
        componentStack.forEach((component, index, componentList)=>{
            const spaces = ' '.repeat(nestedHtmlStack.length * 2);
            // When component is the server or client tag name, highlight it
            const isHighlightedTag = isHtmlTagsWarning ? index === matchedIndex[0] || index === matchedIndex[1] : tagNames.includes(component);
            const isAdjacentTag = isHighlightedTag || Math.abs(index - matchedIndex[0]) <= 1 || Math.abs(index - matchedIndex[1]) <= 1;
            const isLastFewFrames = !isHtmlTagsWarning && index >= componentList.length - 6;
            const adjProps = getAdjacentProps(isAdjacentTag);
            if (isHtmlTagsWarning && isAdjacentTag || isLastFewFrames) {
                const codeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                    children: [
                        spaces,
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            ...adjProps,
                            ...isHighlightedTag ? {
                                'data-nextjs-container-errors-pseudo-html--tag-error': true
                            } : undefined,
                            children: "<" + component + ">\n"
                        })
                    ]
                });
                lastText = component;
                const wrappedCodeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
                    children: [
                        codeLine,
                        isHighlightedTag && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--hint": true,
                            children: spaces + '^'.repeat(component.length + 2) + '\n'
                        })
                    ]
                }, nestedHtmlStack.length);
                nestedHtmlStack.push(wrappedCodeLine);
            } else {
                if (nestedHtmlStack.length >= MAX_NON_COLLAPSED_FRAMES && isHtmlCollapsed) {
                    return;
                }
                if (!isHtmlCollapsed || isLastFewFrames) {
                    nestedHtmlStack.push(/*#__PURE__*/ (0, _react.createElement)("span", {
                        ...adjProps,
                        key: nestedHtmlStack.length,
                        children: [
                            spaces,
                            '<' + component + '>\n'
                        ]
                    }));
                } else if (isHtmlCollapsed && lastText !== '...') {
                    lastText = '...';
                    nestedHtmlStack.push(/*#__PURE__*/ (0, _react.createElement)("span", {
                        ...adjProps,
                        key: nestedHtmlStack.length,
                        children: [
                            spaces,
                            '...\n'
                        ]
                    }));
                }
            }
        });
        // Hydration mismatch: text or text-tag
        if (!isHtmlTagsWarning) {
            const spaces = ' '.repeat(nestedHtmlStack.length * 2);
            let wrappedCodeLine;
            if (hydrationMismatchType === 'text') {
                // hydration type is "text", represent [server content, client content]
                wrappedCodeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--diff": "remove",
                            children: spaces + ('"' + firstContent + '"\n')
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--diff": "add",
                            children: spaces + ('"' + secondContent + '"\n')
                        })
                    ]
                }, nestedHtmlStack.length);
            } else if (hydrationMismatchType === 'text-in-tag') {
                // hydration type is "text-in-tag", represent [parent tag, mismatch content]
                wrappedCodeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--tag-adjacent": true,
                            children: spaces + ("<" + secondContent + ">\n")
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--diff": "remove",
                            children: spaces + ('  "' + firstContent + '"\n')
                        })
                    ]
                }, nestedHtmlStack.length);
            }
            nestedHtmlStack.push(wrappedCodeLine);
        }
        return nestedHtmlStack;
    }, [
        componentStackFrames,
        isHtmlCollapsed,
        firstContent,
        secondContent,
        isHtmlTagsWarning,
        hydrationMismatchType,
        MAX_NON_COLLAPSED_FRAMES,
        isReactHydrationDiff,
        reactOutputComponentDiff
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-container-errors-pseudo-html": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                tabIndex: 10,
                "data-nextjs-container-errors-pseudo-html-collapse": true,
                onClick: ()=>toggleCollapseHtml(!isHtmlCollapsed),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_CollapseIcon.CollapseIcon, {
                    collapsed: isHtmlCollapsed
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("pre", {
                ...props,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                    children: htmlComponents
                })
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=component-stack-pseudo-html.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/copy-button/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CopyButton", {
    enumerable: true,
    get: function() {
        return CopyButton;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
function useCopyLegacy(content) {
    // This would be simpler with useActionState but we need to support React 18 here.
    // React 18 also doesn't have async transitions.
    const [copyState, dispatch] = _react.useReducer({
        "useCopyLegacy.useReducer": (state, action)=>{
            if (action.type === 'reset') {
                return {
                    state: 'initial'
                };
            }
            if (action.type === 'copied') {
                return {
                    state: 'success'
                };
            }
            if (action.type === 'copying') {
                return {
                    state: 'pending'
                };
            }
            if (action.type === 'error') {
                return {
                    state: 'error',
                    error: action.error
                };
            }
            return state;
        }
    }["useCopyLegacy.useReducer"], {
        state: 'initial'
    });
    function copy() {
        if (isPending) {
            return;
        }
        if (!navigator.clipboard) {
            dispatch({
                type: 'error',
                error: Object.defineProperty(new Error('Copy to clipboard is not supported in this browser'), "__NEXT_ERROR_CODE", {
                    value: "E376",
                    enumerable: false
                })
            });
        } else {
            dispatch({
                type: 'copying'
            });
            navigator.clipboard.writeText(content).then(()=>{
                dispatch({
                    type: 'copied'
                });
            }, (error)=>{
                dispatch({
                    type: 'error',
                    error
                });
            });
        }
    }
    const reset = _react.useCallback({
        "useCopyLegacy.useCallback[reset]": ()=>{
            dispatch({
                type: 'reset'
            });
        }
    }["useCopyLegacy.useCallback[reset]"], []);
    const isPending = copyState.state === 'pending';
    return [
        copyState,
        copy,
        reset,
        isPending
    ];
}
function useCopyModern(content) {
    const [copyState, dispatch, isPending] = _react.useActionState({
        "useCopyModern.useActionState": (state, action)=>{
            if (action === 'reset') {
                return {
                    state: 'initial'
                };
            }
            if (action === 'copy') {
                if (!navigator.clipboard) {
                    return {
                        state: 'error',
                        error: Object.defineProperty(new Error('Copy to clipboard is not supported in this browser'), "__NEXT_ERROR_CODE", {
                            value: "E376",
                            enumerable: false
                        })
                    };
                }
                return navigator.clipboard.writeText(content).then({
                    "useCopyModern.useActionState": ()=>{
                        return {
                            state: 'success'
                        };
                    }
                }["useCopyModern.useActionState"], {
                    "useCopyModern.useActionState": (error)=>{
                        return {
                            state: 'error',
                            error
                        };
                    }
                }["useCopyModern.useActionState"]);
            }
            return state;
        }
    }["useCopyModern.useActionState"], {
        state: 'initial'
    });
    function copy() {
        _react.startTransition(()=>{
            dispatch('copy');
        });
    }
    const reset = _react.useCallback({
        "useCopyModern.useCallback[reset]": ()=>{
            dispatch('reset');
        }
    }["useCopyModern.useCallback[reset]"], [
        // TODO: `dispatch` from `useActionState` is not reactive.
        // Remove from dependencies once https://github.com/facebook/react/pull/29665 is released.
        dispatch
    ]);
    return [
        copyState,
        copy,
        reset,
        isPending
    ];
}
const useCopy = typeof _react.useActionState === 'function' ? useCopyModern : useCopyLegacy;
function CopyButton(param) {
    let { actionLabel, successLabel, content, icon, disabled, ...props } = param;
    const [copyState, copy, reset, isPending] = useCopy(content);
    const error = copyState.state === 'error' ? copyState.error : null;
    _react.useEffect({
        "CopyButton.useEffect": ()=>{
            if (error !== null) {
                // Additional console.error to get the stack.
                console.error(error);
            }
        }
    }["CopyButton.useEffect"], [
        error
    ]);
    _react.useEffect({
        "CopyButton.useEffect": ()=>{
            if (copyState.state === 'success') {
                const timeoutId = setTimeout({
                    "CopyButton.useEffect.timeoutId": ()=>{
                        reset();
                    }
                }["CopyButton.useEffect.timeoutId"], 2000);
                return ({
                    "CopyButton.useEffect": ()=>{
                        clearTimeout(timeoutId);
                    }
                })["CopyButton.useEffect"];
            }
        }
    }["CopyButton.useEffect"], [
        isPending,
        copyState.state,
        reset
    ]);
    const isDisabled = isPending || disabled;
    const label = copyState.state === 'success' ? successLabel : actionLabel;
    // Assign default icon
    const renderedIcon = copyState.state === 'success' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(CopySuccessIcon, {}) : icon || /*#__PURE__*/ (0, _jsxruntime.jsx)(CopyIcon, {});
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
        ...props,
        type: "button",
        title: label,
        "aria-label": label,
        "aria-disabled": isDisabled,
        "data-nextjs-data-runtime-error-copy-button": true,
        className: "nextjs-data-runtime-error-copy-button nextjs-data-runtime-error-copy-button--" + copyState.state,
        onClick: ()=>{
            if (!isDisabled) {
                copy();
            }
        },
        children: [
            renderedIcon,
            copyState.state === 'error' ? " " + copyState.error : null
        ]
    });
}
function CopyIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "transparent",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            })
        ]
    });
}
function CopySuccessIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        height: "16",
        xlinkTitle: "copied",
        viewBox: "0 0 16 16",
        width: "16",
        stroke: "currentColor",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/nodejs-inspector.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NodejsInspectorCopyButton", {
    enumerable: true,
    get: function() {
        return NodejsInspectorCopyButton;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _copybutton = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/copy-button/index.js [client] (ecmascript)");
// Inline this helper to avoid widely used across the codebase,
// as for this feature the Chrome detector doesn't need to be super accurate.
function isChrome() {
    if (typeof window === 'undefined') return false;
    const isChromium = 'chrome' in window && window.chrome;
    const vendorName = window.navigator.vendor;
    return isChromium !== null && isChromium !== undefined && vendorName === 'Google Inc.';
}
const isChromeBrowser = isChrome();
function NodeJsIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "44",
        height: "44",
        viewBox: "0 0 44 44",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                clipPath: "url(#clip0_1546_2)",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M22 0L41.0526 11V33L22 44L2.94744 33V11L22 0Z",
                        fill: "#71BD55"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M41.0493 11.0001L41.0493 33L22 1.5583e-07L41.0493 11.0001Z",
                        fill: "#A1DF83"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("defs", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("clipPath", {
                    id: "clip0_1546_2",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "44",
                        height: "44",
                        fill: "white"
                    })
                })
            })
        ]
    });
}
function NodeJsDisabledIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "44",
        height: "44",
        viewBox: "0 0 44 44",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M4.44744 11.866L22 1.73205L39.5526 11.866V32.134L22 42.2679L4.44744 32.134V11.866Z",
                stroke: "currentColor",
                fill: "transparent",
                strokeWidth: "3",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M22 2L39 32",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            })
        ]
    });
}
const label = 'Learn more about enabling Node.js inspector for server code with Chrome DevTools';
function NodejsInspectorCopyButton(param) {
    let { devtoolsFrontendUrl } = param;
    const content = devtoolsFrontendUrl || '';
    const disabled = !content || !isChromeBrowser;
    if (disabled) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            title: label,
            "aria-label": label,
            className: "nextjs-data-runtime-error-inspect-link",
            href: "https://nextjs.org/docs/app/building-your-application/configuring/debugging#server-side-code",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(NodeJsDisabledIcon, {
                width: 16,
                height: 16
            })
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_copybutton.CopyButton, {
        "data-nextjs-data-runtime-error-copy-devtools-url": true,
        actionLabel: 'Copy Chrome DevTools URL',
        successLabel: "Copied",
        content: content,
        icon: /*#__PURE__*/ (0, _jsxruntime.jsx)(NodeJsIcon, {
            width: 16,
            height: 16
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nodejs-inspector.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/console-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// To distinguish from React error.digest, we use a different symbol here to determine if the error is from console.error or unhandled promise rejection.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createUnhandledError: null,
    getUnhandledErrorType: null,
    isUnhandledConsoleOrRejection: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createUnhandledError: function() {
        return createUnhandledError;
    },
    getUnhandledErrorType: function() {
        return getUnhandledErrorType;
    },
    isUnhandledConsoleOrRejection: function() {
        return isUnhandledConsoleOrRejection;
    }
});
const digestSym = Symbol.for('next.console.error.digest');
const consoleTypeSym = Symbol.for('next.console.error.type');
function createUnhandledError(message) {
    const error = typeof message === 'string' ? Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    }) : message;
    error[digestSym] = 'NEXT_UNHANDLED_ERROR';
    error[consoleTypeSym] = typeof message === 'string' ? 'string' : 'error';
    return error;
}
const isUnhandledConsoleOrRejection = (error)=>{
    return error && error[digestSym] === 'NEXT_UNHANDLED_ERROR';
};
const getUnhandledErrorType = (error)=>{
    return error[consoleTypeSym];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Errors: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Errors: function() {
        return Errors;
    },
    styles: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [client] (ecmascript)");
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/index.js [client] (ecmascript)");
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/index.js [client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js [client] (ecmascript)");
const _geterrorbytype = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-error-by-type.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
const _CloseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/icons/CloseIcon.js [client] (ecmascript)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)");
const _errorsource = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const _componentstackpseudohtml = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/component-stack-pseudo-html.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [client] (ecmascript)");
const _nodejsinspector = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/nodejs-inspector.js [client] (ecmascript)");
const _copybutton = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/copy-button/index.js [client] (ecmascript)");
const _consoleerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/console-error.js [client] (ecmascript)");
const _errortelemetryutils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/error-telemetry-utils.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-error-with-static {\n    bottom: calc(var(--size-gap-double) * 4.5);\n  }\n  .nextjs-container-errors-header {\n    position: relative;\n  }\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: calc(var(--size-gap-double) * 1.5) 0;\n    color: var(--color-title-h1);\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header p {\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    white-space: pre-wrap;\n  }\n  .nextjs__container_errors_desc {\n    font-family: var(--font-stack-monospace);\n    padding: var(--size-gap) var(--size-gap-double);\n    border-left: 2px solid var(--color-text-color-red-1);\n    margin-top: var(--size-gap);\n    font-weight: bold;\n    color: var(--color-text-color-red-1);\n    background-color: var(--color-text-background-red-1);\n  }\n  p.nextjs__container_errors__link {\n    margin: var(--size-gap-double) auto;\n    color: var(--color-text-color-red-1);\n    font-weight: 600;\n    font-size: 15px;\n  }\n  p.nextjs__container_errors__notes {\n    margin: var(--size-gap-double) auto;\n    color: var(--color-stack-notes);\n    font-weight: 600;\n    font-size: 15px;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: inherit;\n    font-weight: bold;\n  }\n  .nextjs-container-errors-body > h2:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h2 {\n    color: var(--color-title-color);\n    margin-bottom: var(--size-gap);\n    font-size: var(--size-font-big);\n  }\n  .nextjs__container_errors__component-stack {\n    padding: 12px 32px;\n    color: var(--color-ansi-fg);\n    background: var(--color-ansi-bg);\n  }\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n  .nextjs-toast-hide-button {\n    margin-left: var(--size-gap-triple);\n    border: none;\n    background: none;\n    color: var(--color-ansi-bright-white);\n    padding: 0;\n    transition: opacity 0.25s ease;\n    opacity: 0.7;\n  }\n  .nextjs-toast-hide-button:hover {\n    opacity: 1;\n  }\n  .nextjs-container-errors-header\n    > .nextjs-container-build-error-version-status {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n  .nextjs__container_errors_inspect_copy_button {\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--color-ansi-bright-white);\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    margin-left: var(--size-gap);\n    transition: opacity 0.25s ease;\n  }\n  .nextjs__container_errors__error_title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .nextjs-data-runtime-error-inspect-link,\n  .nextjs-data-runtime-error-inspect-link:hover {\n    margin: 0 8px;\n    color: inherit;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function isNextjsLink(text) {
    return text.startsWith('https://nextjs.org');
}
function ErrorDescription(param) {
    let { error, hydrationWarning } = param;
    const isUnhandledOrReplayError = (0, _consoleerror.isUnhandledConsoleOrRejection)(error);
    const unhandledErrorType = isUnhandledOrReplayError ? (0, _consoleerror.getUnhandledErrorType)(error) : null;
    const isConsoleErrorStringMessage = unhandledErrorType === 'string';
    // If the error is:
    // - hydration warning
    // - captured console error or unhandled rejection
    // skip displaying the error name
    const title = isUnhandledOrReplayError && isConsoleErrorStringMessage || hydrationWarning ? '' : error.name + ': ';
    // If it's replayed error, display the environment name
    const environmentName = 'environmentName' in error ? error['environmentName'] : '';
    const envPrefix = environmentName ? "[ " + environmentName + " ] " : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            envPrefix,
            title,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                text: hydrationWarning || error.message,
                matcher: isNextjsLink
            })
        ]
    });
}
function getErrorSignature(ev) {
    const { event } = ev;
    switch(event.type){
        case _shared.ACTION_UNHANDLED_ERROR:
        case _shared.ACTION_UNHANDLED_REJECTION:
            {
                return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
            }
        default:
            {}
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    return '';
}
function Errors(param) {
    let { isAppDir, errors, initialDisplayState, versionInfo, hasStaticIndicator, debugInfo } = param;
    var _activeError_componentStackFrames;
    const [lookups, setLookups] = (0, _react.useState)({});
    const [readyErrors, nextError] = (0, _react.useMemo)(()=>{
        let ready = [];
        let next = null;
        // Ensure errors are displayed in the order they occurred in:
        for(let idx = 0; idx < errors.length; ++idx){
            const e = errors[idx];
            const { id } = e;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            // Check for duplicate errors
            if (idx > 0) {
                const prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [
            ready,
            next
        ];
    }, [
        errors,
        lookups
    ]);
    const isLoading = (0, _react.useMemo)(()=>{
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [
        errors.length,
        readyErrors.length
    ]);
    (0, _react.useEffect)(()=>{
        if (nextError == null) {
            return;
        }
        let mounted = true;
        (0, _geterrorbytype.getErrorByType)(nextError, isAppDir).then((resolved)=>{
            // We don't care if the desired error changed while we were resolving,
            // thus we're not tracking it using a ref. Once the work has been done,
            // we'll store it.
            if (mounted) {
                setLookups((m)=>({
                        ...m,
                        [resolved.id]: resolved
                    }));
            }
        }, ()=>{
        // TODO: handle this, though an edge case
        });
        return ()=>{
            mounted = false;
        };
    }, [
        nextError,
        isAppDir
    ]);
    const [displayState, setDisplayState] = (0, _react.useState)(initialDisplayState);
    const [activeIdx, setActiveIndex] = (0, _react.useState)(0);
    const previous = (0, _react.useCallback)(()=>setActiveIndex((v)=>Math.max(0, v - 1)), []);
    const next = (0, _react.useCallback)(()=>setActiveIndex((v)=>Math.max(0, Math.min(readyErrors.length - 1, v + 1))), [
        readyErrors.length
    ]);
    const activeError = (0, _react.useMemo)(()=>{
        var _readyErrors_activeIdx;
        return (_readyErrors_activeIdx = readyErrors[activeIdx]) != null ? _readyErrors_activeIdx : null;
    }, [
        activeIdx,
        readyErrors
    ]);
    // Reset component state when there are no errors to be displayed.
    // This should never happen, but lets handle it.
    (0, _react.useEffect)(()=>{
        if (errors.length < 1) {
            setLookups({});
            setDisplayState('hidden');
            setActiveIndex(0);
        }
    }, [
        errors.length
    ]);
    const minimize = (0, _react.useCallback)(()=>setDisplayState('minimized'), []);
    const hide = (0, _react.useCallback)(()=>setDisplayState('hidden'), []);
    const fullscreen = (0, _react.useCallback)(()=>setDisplayState('fullscreen'), []);
    // This component shouldn't be rendered with no errors, but if it is, let's
    // handle it gracefully by rendering nothing.
    if (errors.length < 1 || activeError == null) {
        return null;
    }
    if (isLoading) {
        // TODO: better loading state
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Overlay.Overlay, {});
    }
    if (displayState === 'hidden') {
        return null;
    }
    if (displayState === 'minimized') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Toast.Toast, {
            "data-nextjs-toast": true,
            className: "nextjs-toast-errors-parent" + (hasStaticIndicator ? ' nextjs-error-with-static' : ''),
            onClick: fullscreen,
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                className: "nextjs-toast-errors",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "24",
                        height: "24",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("circle", {
                                cx: "12",
                                cy: "12",
                                r: "10"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                                x1: "12",
                                y1: "8",
                                x2: "12",
                                y2: "12"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                                x1: "12",
                                y1: "16",
                                x2: "12.01",
                                y2: "16"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                        children: [
                            readyErrors.length,
                            " issue",
                            readyErrors.length > 1 ? 's' : ''
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        "data-nextjs-toast-errors-hide-button": true,
                        className: "nextjs-toast-hide-button",
                        type: "button",
                        onClick: (e)=>{
                            e.stopPropagation();
                            hide();
                        },
                        "aria-label": "Hide Issues",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_CloseIcon.CloseIcon, {})
                    })
                ]
            })
        });
    }
    const error = activeError.error;
    const isServerError = [
        'server',
        'edge-server'
    ].includes((0, _errorsource.getErrorSource)(error) || '');
    const isUnhandledError = (0, _consoleerror.isUnhandledConsoleOrRejection)(error);
    const errorDetails = error.details || {};
    const notes = errorDetails.notes || '';
    const [warningTemplate, serverContent, clientContent] = errorDetails.warning || [
        null,
        '',
        ''
    ];
    const hydrationErrorType = (0, _hydrationerrorinfo.getHydrationWarningType)(warningTemplate);
    const hydrationWarning = warningTemplate ? warningTemplate.replace('%s', serverContent).replace('%s', clientContent).replace('%s', '') // remove the %s for stack
    .replace(/%s$/, '') // If there's still a %s at the end, remove it
    .replace(/^Warning: /, '').replace(/^Error: /, '') : null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Overlay.Overlay, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Dialog.Dialog, {
            type: "error",
            "aria-labelledby": "nextjs__container_errors_label",
            "aria-describedby": "nextjs__container_errors_desc",
            onClose: isServerError ? undefined : minimize,
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogContent, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogHeader, {
                        className: "nextjs-container-errors-header",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_LeftRightDialogHeader.LeftRightDialogHeader, {
                                previous: activeIdx > 0 ? previous : null,
                                next: activeIdx < readyErrors.length - 1 ? next : null,
                                close: isServerError ? undefined : minimize,
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("small", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                children: activeIdx + 1
                                            }),
                                            " of",
                                            ' ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                "data-nextjs-dialog-header-total-count": true,
                                                children: readyErrors.length
                                            }),
                                            ' issue',
                                            readyErrors.length < 2 ? '' : 's'
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_VersionStalenessInfo.VersionStalenessInfo, {
                                        versionInfo: versionInfo
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                className: "nextjs__container_errors__error_title",
                                "data-nextjs-error-code": (0, _errortelemetryutils.extractNextErrorCode)(error),
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                        id: "nextjs__container_errors_label",
                                        className: "nextjs__container_errors_label",
                                        children: isServerError ? 'Server Error' : isUnhandledError ? 'Console Error' : 'Unhandled Runtime Error'
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_copybutton.CopyButton, {
                                                "data-nextjs-data-runtime-error-copy-stack": true,
                                                actionLabel: "Copy error stack",
                                                successLabel: "Copied",
                                                content: error.stack || '',
                                                disabled: !error.stack
                                            }),
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_nodejsinspector.NodejsInspectorCopyButton, {
                                                devtoolsFrontendUrl: debugInfo == null ? void 0 : debugInfo.devtoolsFrontendUrl
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                id: "nextjs__container_errors_desc",
                                className: "nextjs__container_errors_desc",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorDescription, {
                                    error: error,
                                    hydrationWarning: hydrationWarning
                                })
                            }),
                            notes ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    id: "nextjs__container_errors__notes",
                                    className: "nextjs__container_errors__notes",
                                    children: notes
                                })
                            }) : null,
                            hydrationWarning ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                id: "nextjs__container_errors__link",
                                className: "nextjs__container_errors__link",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                    text: "See more info here: https://nextjs.org/docs/messages/react-hydration-error"
                                })
                            }) : null,
                            hydrationWarning && (((_activeError_componentStackFrames = activeError.componentStackFrames) == null ? void 0 : _activeError_componentStackFrames.length) || !!errorDetails.reactOutputComponentDiff) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_componentstackpseudohtml.PseudoHtmlDiff, {
                                className: "nextjs__container_errors__component-stack",
                                hydrationMismatchType: hydrationErrorType,
                                componentStackFrames: activeError.componentStackFrames || [],
                                firstContent: serverContent,
                                secondContent: clientContent,
                                reactOutputComponentDiff: errorDetails.reactOutputComponentDiff
                            }) : null,
                            isServerError ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("small", {
                                    children: "This error happened while generating the page. Any console logs will be displayed in the terminal window."
                                })
                            }) : undefined
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_Dialog.DialogBody, {
                        className: "nextjs-container-errors-body",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_RuntimeError.RuntimeError, {
                            error: activeError
                        }, activeError.id.toString())
                    })
                ]
            })
        })
    });
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Errors.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorBoundary", {
    enumerable: true,
    get: function() {
        return ErrorBoundary;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
class ErrorBoundary extends _react.PureComponent {
    static getDerivedStateFromError(error) {
        return {
            error
        };
    }
    componentDidCatch(error, // accidentally excluded in some versions.
    errorInfo) {
        this.props.onError(error, (errorInfo == null ? void 0 : errorInfo.componentStack) || null);
        if (!this.props.globalOverlay) {
            this.setState({
                error
            });
        }
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        // The component has to be unmounted or else it would continue to error
        return this.state.error || this.props.globalOverlay && this.props.isMounted ? // we have to render the html shell otherwise the shadow root will not be able to attach
        this.props.globalOverlay ? /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("body", {})
            ]
        }) : null : this.props.children;
    }
    constructor(...args){
        super(...args), this.state = {
            error: null
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ErrorBoundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Base", {
    enumerable: true,
    get: function() {
        return Base;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          --size-gap-half: 4px;\n          --size-gap: 8px;\n          --size-gap-double: 16px;\n          --size-gap-triple: 24px;\n          --size-gap-quad: 32px;\n\n          --size-font-small: 14px;\n          --size-font: 16px;\n          --size-font-big: 20px;\n          --size-font-bigger: 24px;\n\n          --color-background: white;\n          --color-font: #757575;\n          --color-backdrop: rgba(17, 17, 17, 0.2);\n          --color-border-shadow: rgba(0, 0, 0, 0.145);\n\n          --color-title-color: #1f1f1f;\n          --color-stack-h6: #222;\n          --color-stack-headline: #666;\n          --color-stack-subline: #999;\n          --color-stack-notes: #777;\n\n          --color-accents-1: #808080;\n          --color-accents-2: #222222;\n          --color-accents-3: #404040;\n\n          --color-text-color-red-1: #ff5555;\n          --color-text-background-red-1: #fff9f9;\n\n          --font-stack-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono',\n            Menlo, Courier, monospace;\n          --font-stack-sans: -apple-system, 'Source Sans Pro', sans-serif;\n\n          --color-ansi-selection: rgba(95, 126, 151, 0.48);\n          --color-ansi-bg: #111111;\n          --color-ansi-fg: #cccccc;\n\n          --color-ansi-white: #777777;\n          --color-ansi-black: #141414;\n          --color-ansi-blue: #00aaff;\n          --color-ansi-cyan: #88ddff;\n          --color-ansi-green: #98ec65;\n          --color-ansi-magenta: #aa88ff;\n          --color-ansi-red: #ff5555;\n          --color-ansi-yellow: #ffcc33;\n          --color-ansi-bright-white: #ffffff;\n          --color-ansi-bright-black: #777777;\n          --color-ansi-bright-blue: #33bbff;\n          --color-ansi-bright-cyan: #bbecff;\n          --color-ansi-bright-green: #b6f292;\n          --color-ansi-bright-magenta: #cebbff;\n          --color-ansi-bright-red: #ff8888;\n          --color-ansi-bright-yellow: #ffd966;\n        }\n\n        @media (prefers-color-scheme: dark) {\n          :host {\n            --color-background: rgb(28, 28, 30);\n            --color-font: white;\n            --color-backdrop: rgb(44, 44, 46);\n            --color-border-shadow: rgba(255, 255, 255, 0.145);\n\n            --color-title-color: #fafafa;\n            --color-stack-h6: rgb(200, 200, 204);\n            --color-stack-headline: rgb(99, 99, 102);\n            --color-stack-notes: #a9a9a9;\n            --color-stack-subline: rgb(121, 121, 121);\n\n            --color-accents-3: rgb(118, 118, 118);\n\n            --color-text-background-red-1: #2a1e1e;\n          }\n        }\n\n        .mono {\n          font-family: var(--font-stack-monospace);\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-bottom: var(--size-gap);\n          font-weight: 500;\n          line-height: 1.5;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function Base() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _nooptemplate.noop)(_templateObject())
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Base.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-codeframe] {\n    overflow: auto;\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > div {\n    display: inline-block;\n    width: auto;\n    min-width: 100%;\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n  }\n  [data-nextjs-codeframe] > div > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    margin: 0;\n  }\n  [data-nextjs-codeframe] > div > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] div > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 8px;\n  }\n  [data-nextjs-codeframe] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--color-backdrop);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n\n  [data-with-open-in-editor-link] svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n  }\n  [data-with-open-in-editor-link] {\n    cursor: pointer;\n  }\n  [data-with-open-in-editor-link]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-with-open-in-editor-link-source-file] {\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    line-break: anywhere;\n  }\n  [data-with-open-in-editor-link-import-trace] {\n    margin-left: var(--size-gap-double);\n  }\n  [data-nextjs-terminal] a {\n    color: inherit;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentStyles", {
    enumerable: true,
    get: function() {
        return ComponentStyles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/CodeFrame/styles.js [client] (ecmascript)");
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Dialog/index.js [client] (ecmascript)");
const _styles1 = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/LeftRightDialogHeader/styles.js [client] (ecmascript)");
const _styles2 = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Overlay/styles.js [client] (ecmascript)");
const _styles3 = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Terminal/styles.js [client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/Toast/index.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)");
const _BuildError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js [client] (ecmascript)");
const _Errors = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js [client] (ecmascript)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/RuntimeError/index.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function ComponentStyles() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _nooptemplate.noop)(_templateObject(), _styles2.styles, _Toast.styles, _Dialog.styles, _styles1.styles, _styles.styles, _styles3.styles, _BuildError.styles, _Errors.styles, _RuntimeError.styles, _VersionStalenessInfo.styles)
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ComponentStyles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CssReset", {
    enumerable: true,
    get: function() {
        return CssReset;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          all: initial;\n\n          /* the direction property is not reset by 'all' */\n          direction: ltr;\n        }\n\n        /*!\n         * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n         * Copyright 2011-2019 The Bootstrap Authors\n         * Copyright 2011-2019 Twitter, Inc.\n         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n         * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n         */\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        :host {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        article,\n        aside,\n        figcaption,\n        figure,\n        footer,\n        header,\n        hgroup,\n        main,\n        nav,\n        section {\n          display: block;\n        }\n\n        :host {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n            'Noto Color Emoji';\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          color: var(--color-font);\n          text-align: left;\n          background-color: #fff;\n        }\n\n        [tabindex='-1']:focus:not(:focus-visible) {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 0;\n          overflow: visible;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-top: 0;\n          margin-bottom: 8px;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 16px;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        dt {\n          font-weight: 700;\n        }\n\n        dd {\n          margin-bottom: 8px;\n          margin-left: 0;\n        }\n\n        blockquote {\n          margin: 0 0 16px;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -0.25em;\n        }\n\n        sup {\n          top: -0.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n        }\n\n        a:hover {\n          color: #0056b3;\n          text-decoration: underline;\n        }\n\n        a:not([href]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):hover {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n            'Liberation Mono', 'Courier New', monospace;\n          font-size: 1em;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 16px;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 16px;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 8px;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type='button'],\n        [type='reset'],\n        [type='submit'] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type='button']:not(:disabled),\n        [type='reset']:not(:disabled),\n        [type='submit']:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type='button']::-moz-focus-inner,\n        [type='reset']::-moz-focus-inner,\n        [type='submit']::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type='radio'],\n        input[type='checkbox'] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type='date'],\n        input[type='time'],\n        input[type='datetime-local'],\n        input[type='month'] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: 8px;\n          font-size: 24px;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type='number']::-webkit-inner-spin-button,\n        [type='number']::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type='search'] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type='search']::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function CssReset() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _nooptemplate.noop)(_templateObject())
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CssReset.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/hooks.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "usePagesReactDevOverlay", {
    enumerable: true,
    get: function() {
        return usePagesReactDevOverlay;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _bus = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)"));
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const shouldPreventDisplay = (errorType, preventType)=>{
    if (!preventType || !errorType) {
        return false;
    }
    return preventType.includes(errorType);
};
const usePagesReactDevOverlay = (preventDisplay)=>{
    const [state, dispatch] = (0, _shared.useErrorOverlayReducer)();
    _react.default.useEffect({
        "usePagesReactDevOverlay.useEffect": ()=>{
            _bus.on(dispatch);
            return ({
                "usePagesReactDevOverlay.useEffect": function() {
                    _bus.off(dispatch);
                }
            })["usePagesReactDevOverlay.useEffect"];
        }
    }["usePagesReactDevOverlay.useEffect"], [
        dispatch
    ]);
    const onComponentError = _react.default.useCallback({
        "usePagesReactDevOverlay.useCallback[onComponentError]": (_error, _componentStack)=>{
        // TODO: special handling
        }
    }["usePagesReactDevOverlay.useCallback[onComponentError]"], []);
    const hasBuildError = state.buildError != null;
    const hasRuntimeErrors = Boolean(state.errors.length);
    const errorType = hasBuildError ? 'build' : hasRuntimeErrors ? 'runtime' : null;
    const isMounted = errorType !== null;
    const displayPrevented = shouldPreventDisplay(errorType, preventDisplay);
    return {
        isMounted,
        displayPrevented,
        hasBuildError,
        hasRuntimeErrors,
        state,
        onComponentError
    };
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/OldReactDevOverlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactDevOverlay;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _ShadowPortal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/components/ShadowPortal.js [client] (ecmascript)");
const _BuildError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/BuildError.js [client] (ecmascript)");
const _Errors = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/container/Errors.js [client] (ecmascript)");
const _ErrorBoundary = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js [client] (ecmascript)");
const _Base = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/Base.js [client] (ecmascript)");
const _ComponentStyles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/ComponentStyles.js [client] (ecmascript)");
const _CssReset = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/styles/CssReset.js [client] (ecmascript)");
const _hooks = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/hooks.js [client] (ecmascript)");
function ReactDevOverlay(param) {
    let { children, preventDisplay, globalOverlay } = param;
    const { isMounted, displayPrevented, hasBuildError, hasRuntimeErrors, state, onComponentError } = (0, _hooks.usePagesReactDevOverlay)(preventDisplay);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_ErrorBoundary.ErrorBoundary, {
                globalOverlay: globalOverlay,
                isMounted: isMounted,
                onError: onComponentError,
                children: children != null ? children : null
            }),
            isMounted ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_ShadowPortal.ShadowPortal, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_CssReset.CssReset, {}),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_Base.Base, {}),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_ComponentStyles.ComponentStyles, {}),
                    displayPrevented ? null : hasBuildError ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_BuildError.BuildError, {
                        message: state.buildError,
                        versionInfo: state.versionInfo
                    }) : hasRuntimeErrors ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_Errors.Errors, {
                        isAppDir: false,
                        errors: state.errors,
                        versionInfo: state.versionInfo,
                        initialDisplayState: 'fullscreen'
                    }) : undefined
                ]
            }) : undefined
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=OldReactDevOverlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/ShadowPortal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ShadowPortal", {
    enumerable: true,
    get: function() {
        return ShadowPortal;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _reactdom = __turbopack_require__("[project]/node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/index.js [client] (ecmascript)");
function ShadowPortal(param) {
    let { children } = param;
    let portalNode = _react.useRef(null);
    let shadowNode = _react.useRef(null);
    let [, forceUpdate] = _react.useState();
    _react.useLayoutEffect({
        "ShadowPortal.useLayoutEffect": ()=>{
            const ownerDocument = document;
            portalNode.current = ownerDocument.createElement('nextjs-portal');
            shadowNode.current = portalNode.current.attachShadow({
                mode: 'open'
            });
            ownerDocument.body.appendChild(portalNode.current);
            forceUpdate({});
            return ({
                "ShadowPortal.useLayoutEffect": ()=>{
                    if (portalNode.current && portalNode.current.ownerDocument) {
                        portalNode.current.ownerDocument.body.removeChild(portalNode.current);
                    }
                }
            })["ShadowPortal.useLayoutEffect"];
        }
    }["ShadowPortal.useLayoutEffect"], []);
    return shadowNode.current ? /*#__PURE__*/ (0, _reactdom.createPortal)(children, shadowNode.current) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ShadowPortal.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/hot-linked-text/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HotlinkedText", {
    enumerable: true,
    get: function() {
        return HotlinkedText;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _magicidentifier = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/magic-identifier.js [client] (ecmascript)");
const linkRegex = /https?:\/\/[^\s/$.?#].[^\s)'"]*/i;
const splitRegexp = new RegExp("(" + _magicidentifier.MAGIC_IDENTIFIER_REGEX.source + "|\\s+)");
const HotlinkedText = function HotlinkedText(props) {
    const { text, matcher } = props;
    const wordsAndWhitespaces = text.split(splitRegexp);
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: wordsAndWhitespaces.map((word, index)=>{
            if (linkRegex.test(word)) {
                const link = linkRegex.exec(word);
                const href = link[0];
                // If link matcher is present but the link doesn't match, don't turn it into a link
                if (typeof matcher === 'function' && !matcher(href)) {
                    return word;
                }
                return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                        href: href,
                        target: "_blank",
                        rel: "noreferrer noopener",
                        children: word
                    })
                }, "link-" + index);
            }
            try {
                const decodedWord = (0, _magicidentifier.decodeMagicIdentifier)(word);
                if (decodedWord !== word) {
                    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("i", {
                        children: [
                            '{',
                            decodedWord,
                            '}'
                        ]
                    }, "ident-" + index);
                }
            } catch (e) {
                return /*#__PURE__*/ (0, _jsxruntime.jsxs)("i", {
                    children: [
                        '{',
                        word,
                        " (decoding failed: ",
                        '' + e,
                        ")",
                        '}'
                    ]
                }, "ident-" + index);
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(_react.default.Fragment, {
                children: word
            }, "text-" + index);
        })
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/use-open-in-editor.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOpenInEditor", {
    enumerable: true,
    get: function() {
        return useOpenInEditor;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
function useOpenInEditor(param) {
    let { file, lineNumber, column } = param === void 0 ? {} : param;
    const openInEditor = (0, _react.useCallback)(()=>{
        if (file == null || lineNumber == null || column == null) return;
        const params = new URLSearchParams();
        params.append('file', file);
        params.append('lineNumber', String(lineNumber));
        params.append('column', String(column));
        self.fetch((("TURBOPACK compile-time value", "") || '') + "/__nextjs_launch-editor?" + params.toString()).then(()=>{}, ()=>{
            console.error('There was an issue opening this code in your editor.');
        });
    }, [
        file,
        lineNumber,
        column
    ]);
    return openInEditor;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-open-in-editor.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/EditorLink.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EditorLink", {
    enumerable: true,
    get: function() {
        return EditorLink;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/use-open-in-editor.js [client] (ecmascript)");
function EditorLink(param) {
    let { file, isSourceFile, location } = param;
    var _location_line, _location_column;
    const open = (0, _useopenineditor.useOpenInEditor)({
        file,
        lineNumber: (_location_line = location == null ? void 0 : location.line) != null ? _location_line : 1,
        column: (_location_column = location == null ? void 0 : location.column) != null ? _location_column : 0
    });
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-with-open-in-editor-link": true,
        "data-with-open-in-editor-link-source-file": isSourceFile ? true : undefined,
        "data-with-open-in-editor-link-import-trace": isSourceFile ? undefined : true,
        tabIndex: 10,
        role: 'link',
        onClick: open,
        title: 'Click to open in your editor',
        children: [
            file,
            location ? ":" + location.line + ":" + location.column : null,
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("polyline", {
                        points: "15 3 21 3 21 9"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                        x1: "10",
                        y1: "14",
                        x2: "21",
                        y2: "3"
                    })
                ]
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=EditorLink.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/Terminal.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return Terminal;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/anser/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const _EditorLink = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/EditorLink.js [client] (ecmascript)");
function getFile(lines) {
    const contentFileName = lines.shift();
    if (!contentFileName) return null;
    const [fileName, line, column] = contentFileName.split(':', 3);
    const parsedLine = Number(line);
    const parsedColumn = Number(column);
    const hasLocation = !Number.isNaN(parsedLine) && !Number.isNaN(parsedColumn);
    return {
        fileName: hasLocation ? fileName : contentFileName,
        location: hasLocation ? {
            line: parsedLine,
            column: parsedColumn
        } : undefined
    };
}
function getImportTraceFiles(lines) {
    if (lines.some((line)=>/ReactServerComponentsError:/.test(line)) || lines.some((line)=>/Import trace for requested module:/.test(line))) {
        // Grab the lines at the end containing the files
        const files = [];
        while(/.+\..+/.test(lines[lines.length - 1]) && !lines[lines.length - 1].includes(':')){
            const file = lines.pop().trim();
            files.unshift(file);
        }
        return files;
    }
    return [];
}
function getEditorLinks(content) {
    const lines = content.split('\n');
    const file = getFile(lines);
    const importTraceFiles = getImportTraceFiles(lines);
    return {
        file,
        source: lines.join('\n'),
        importTraceFiles
    };
}
const Terminal = function Terminal(param) {
    let { content } = param;
    const { file, source, importTraceFiles } = _react.useMemo({
        "Terminal.useMemo": ()=>getEditorLinks(content)
    }["Terminal.useMemo"], [
        content
    ]);
    const decoded = _react.useMemo({
        "Terminal.useMemo[decoded]": ()=>{
            return _anser.default.ansiToJson(source, {
                json: true,
                use_classes: true,
                remove_empty: true
            });
        }
    }["Terminal.useMemo[decoded]"], [
        source
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-terminal": true,
        children: [
            file && /*#__PURE__*/ (0, _jsxruntime.jsx)(_EditorLink.EditorLink, {
                isSourceFile: true,
                file: file.fileName,
                location: file.location
            }, file.fileName),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("pre", {
                children: [
                    decoded.map((entry, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            style: {
                                color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                                ...entry.decoration === 'bold' ? {
                                    fontWeight: 800
                                } : entry.decoration === 'italic' ? {
                                    fontStyle: 'italic'
                                } : undefined
                            },
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                text: entry.content
                            })
                        }, "terminal-entry-" + index)),
                    importTraceFiles.map((importTraceFile)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_EditorLink.EditorLink, {
                            isSourceFile: false,
                            file: importTraceFile
                        }, importTraceFile))
                ]
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Terminal.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Terminal", {
    enumerable: true,
    get: function() {
        return _Terminal.Terminal;
    }
});
const _Terminal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/Terminal.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "noop", {
    enumerable: true,
    get: function() {
        return noop;
    }
});
function noop(strings) {
    for(var _len = arguments.length, keys = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++){
        keys[_key - 1] = arguments[_key];
    }
    const lastIndex = strings.length - 1;
    return strings.slice(0, lastIndex).reduce((p, s, i)=>p + s + keys[i], '') + strings[lastIndex];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=noop-template.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/hooks/use-on-click-outside.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useOnClickOutside", {
    enumerable: true,
    get: function() {
        return useOnClickOutside;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
function useOnClickOutside(el, handler) {
    _react.useEffect({
        "useOnClickOutside.useEffect": ()=>{
            if (el == null || handler == null) {
                return;
            }
            const listener = {
                "useOnClickOutside.useEffect.listener": (e)=>{
                    // Do nothing if clicking ref's element or descendent elements
                    if (!el || el.contains(e.target)) {
                        return;
                    }
                    handler(e);
                }
            }["useOnClickOutside.useEffect.listener"];
            const root = el.getRootNode();
            root.addEventListener('mousedown', listener);
            root.addEventListener('touchstart', listener, {
                passive: false
            });
            return ({
                "useOnClickOutside.useEffect": function() {
                    root.removeEventListener('mousedown', listener);
                    root.removeEventListener('touchstart', listener);
                }
            })["useOnClickOutside.useEffect"];
        }
    }["useOnClickOutside.useEffect"], [
        handler,
        el
    ]);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-on-click-outside.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/Dialog.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Dialog", {
    enumerable: true,
    get: function() {
        return Dialog;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _useonclickoutside = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/hooks/use-on-click-outside.js [client] (ecmascript)");
const Dialog = function Dialog(param) {
    let { children, type, onClose, ...props } = param;
    const [dialog, setDialog] = _react.useState(null);
    const [role, setRole] = _react.useState(typeof document !== 'undefined' && document.hasFocus() ? 'dialog' : undefined);
    const onDialog = _react.useCallback({
        "Dialog.useCallback[onDialog]": (node)=>{
            setDialog(node);
        }
    }["Dialog.useCallback[onDialog]"], []);
    (0, _useonclickoutside.useOnClickOutside)(dialog, (e)=>{
        e.preventDefault();
        return onClose == null ? void 0 : onClose();
    });
    // Make HTMLElements with `role=link` accessible to be triggered by the
    // keyboard, i.e. [Enter].
    _react.useEffect({
        "Dialog.useEffect": ()=>{
            if (dialog == null) {
                return;
            }
            const root = dialog.getRootNode();
            // Always true, but we do this for TypeScript:
            if (!(root instanceof ShadowRoot)) {
                return;
            }
            const shadowRoot = root;
            function handler(e) {
                const el = shadowRoot.activeElement;
                if (e.key === 'Enter' && el instanceof HTMLElement && el.getAttribute('role') === 'link') {
                    e.preventDefault();
                    e.stopPropagation();
                    el.click();
                }
            }
            function handleFocus() {
                // safari will force itself as the active application when a background page triggers any sort of autofocus
                // this is a workaround to only set the dialog role if the document has focus
                setRole(document.hasFocus() ? 'dialog' : undefined);
            }
            shadowRoot.addEventListener('keydown', handler);
            window.addEventListener('focus', handleFocus);
            window.addEventListener('blur', handleFocus);
            return ({
                "Dialog.useEffect": ()=>{
                    shadowRoot.removeEventListener('keydown', handler);
                    window.removeEventListener('focus', handleFocus);
                    window.removeEventListener('blur', handleFocus);
                }
            })["Dialog.useEffect"];
        }
    }["Dialog.useEffect"], [
        dialog
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        ref: onDialog,
        "data-nextjs-dialog": true,
        tabIndex: -1,
        role: role,
        "aria-labelledby": props['aria-labelledby'],
        "aria-describedby": props['aria-describedby'],
        "aria-modal": "true",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "data-nextjs-dialog-banner": true,
                className: "banner-" + type
            }),
            children
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Dialog.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/DialogBody.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogBody", {
    enumerable: true,
    get: function() {
        return DialogBody;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const DialogBody = function DialogBody(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-body": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogBody.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/DialogContent.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogContent", {
    enumerable: true,
    get: function() {
        return DialogContent;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const DialogContent = function DialogContent(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-content": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogContent.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/DialogHeader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DialogHeader", {
    enumerable: true,
    get: function() {
        return DialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const DialogHeader = function DialogHeader(param) {
    let { children, className } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        "data-nextjs-dialog-header": true,
        className: className,
        children: children
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=DialogHeader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog] {\n    display: flex;\n    flex-direction: column;\n    width: 100%;\n    margin-right: auto;\n    margin-left: auto;\n    outline: none;\n    background: var(--color-background);\n    border-radius: var(--size-gap);\n    box-shadow: 0 var(--size-gap-half) var(--size-gap-double)\n      rgba(0, 0, 0, 0.25);\n    max-height: calc(100% - 56px);\n    overflow-y: hidden;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      max-height: calc(100% - 15px);\n    }\n  }\n\n  @media (min-width: 576px) {\n    [data-nextjs-dialog] {\n      max-width: 540px;\n      box-shadow: 0 var(--size-gap) var(--size-gap-quad) rgba(0, 0, 0, 0.25);\n    }\n  }\n\n  @media (min-width: 768px) {\n    [data-nextjs-dialog] {\n      max-width: 720px;\n    }\n  }\n\n  @media (min-width: 992px) {\n    [data-nextjs-dialog] {\n      max-width: 960px;\n    }\n  }\n\n  [data-nextjs-dialog-banner] {\n    position: relative;\n  }\n  [data-nextjs-dialog-banner].banner-warning {\n    border-color: var(--color-ansi-yellow);\n  }\n  [data-nextjs-dialog-banner].banner-error {\n    border-color: var(--color-ansi-red);\n  }\n\n  [data-nextjs-dialog-banner]::after {\n    z-index: 2;\n    content: '';\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 100%;\n    /* banner width: */\n    border-top-width: var(--size-gap-half);\n    border-bottom-width: 0;\n    border-top-style: solid;\n    border-bottom-style: solid;\n    border-top-color: inherit;\n    border-bottom-color: transparent;\n  }\n\n  [data-nextjs-dialog-content] {\n    overflow-y: auto;\n    border: none;\n    margin: 0;\n    /* calc(padding + banner width offset) */\n    padding: calc(var(--size-gap-double) + var(--size-gap-half))\n      var(--size-gap-double);\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-header] {\n    flex-shrink: 0;\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-dialog-content] > [data-nextjs-dialog-body] {\n    position: relative;\n    flex: 1 1 auto;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Dialog: null,
    DialogBody: null,
    DialogContent: null,
    DialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Dialog: function() {
        return _Dialog.Dialog;
    },
    DialogBody: function() {
        return _DialogBody.DialogBody;
    },
    DialogContent: function() {
        return _DialogContent.DialogContent;
    },
    DialogHeader: function() {
        return _DialogHeader.DialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/Dialog.js [client] (ecmascript)");
const _DialogBody = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/DialogBody.js [client] (ecmascript)");
const _DialogContent = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/DialogContent.js [client] (ecmascript)");
const _DialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/DialogHeader.js [client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/styles.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/maintain--tab-focus.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* eslint-disable */ // @ts-nocheck
// Copied from https://github.com/medialize/ally.js
// License: MIT
// Copyright (c) 2015 Rodney Rehm
//
// Entrypoint: ally.js/maintain/tab-focus
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _platform = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/platform/platform.js [client] (ecmascript)"));
const _cssescape = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/css.escape/css.escape.js [client] (ecmascript)"));
// input may be undefined, selector-tring, Node, NodeList, HTMLCollection, array of Nodes
// yes, to some extent this is a bad replica of jQuery's constructor function
function nodeArray(input) {
    if (!input) {
        return [];
    }
    if (Array.isArray(input)) {
        return input;
    }
    // instanceof Node - does not work with iframes
    if (input.nodeType !== undefined) {
        return [
            input
        ];
    }
    if (typeof input === 'string') {
        input = document.querySelectorAll(input);
    }
    if (input.length !== undefined) {
        return [].slice.call(input, 0);
    }
    throw Object.defineProperty(new TypeError('unexpected input ' + String(input)), "__NEXT_ERROR_CODE", {
        value: "E545",
        enumerable: false
    });
}
function contextToElement(_ref) {
    var context = _ref.context, _ref$label = _ref.label, label = _ref$label === undefined ? 'context-to-element' : _ref$label, resolveDocument = _ref.resolveDocument, defaultToDocument = _ref.defaultToDocument;
    var element = nodeArray(context)[0];
    if (resolveDocument && element && element.nodeType === Node.DOCUMENT_NODE) {
        element = element.documentElement;
    }
    if (!element && defaultToDocument) {
        return document.documentElement;
    }
    if (!element) {
        throw Object.defineProperty(new TypeError(label + ' requires valid options.context'), "__NEXT_ERROR_CODE", {
            value: "E604",
            enumerable: false
        });
    }
    if (element.nodeType !== Node.ELEMENT_NODE && element.nodeType !== Node.DOCUMENT_FRAGMENT_NODE) {
        throw Object.defineProperty(new TypeError(label + ' requires options.context to be an Element'), "__NEXT_ERROR_CODE", {
            value: "E554",
            enumerable: false
        });
    }
    return element;
}
function getShadowHost() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var element = contextToElement({
        label: 'get/shadow-host',
        context: context
    });
    // walk up to the root
    var container = null;
    while(element){
        container = element;
        element = element.parentNode;
    }
    // https://developer.mozilla.org/docs/Web/API/Node.nodeType
    // NOTE: Firefox 34 does not expose ShadowRoot.host (but 37 does)
    if (container.nodeType === container.DOCUMENT_FRAGMENT_NODE && container.host) {
        // the root is attached to a fragment node that has a host
        return container.host;
    }
    return null;
}
function getDocument(node) {
    if (!node) {
        return document;
    }
    if (node.nodeType === Node.DOCUMENT_NODE) {
        return node;
    }
    return node.ownerDocument || document;
}
function isActiveElement(context) {
    var element = contextToElement({
        label: 'is/active-element',
        resolveDocument: true,
        context: context
    });
    var _document = getDocument(element);
    if (_document.activeElement === element) {
        return true;
    }
    var shadowHost = getShadowHost({
        context: element
    });
    if (shadowHost && shadowHost.shadowRoot.activeElement === element) {
        return true;
    }
    return false;
}
// [elem, elem.parent, elem.parent.parent, …, html]
// will not contain the shadowRoot (DOCUMENT_FRAGMENT_NODE) and shadowHost
function getParents() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context;
    var list = [];
    var element = contextToElement({
        label: 'get/parents',
        context: context
    });
    while(element){
        list.push(element);
        // IE does know support parentElement on SVGElement
        element = element.parentNode;
        if (element && element.nodeType !== Node.ELEMENT_NODE) {
            element = null;
        }
    }
    return list;
}
// Element.prototype.matches may be available at a different name
// https://developer.mozilla.org/en/docs/Web/API/Element/matches
var names = [
    'matches',
    'webkitMatchesSelector',
    'mozMatchesSelector',
    'msMatchesSelector'
];
var name = null;
function findMethodName(element) {
    names.some(function(_name) {
        if (!element[_name]) {
            return false;
        }
        name = _name;
        return true;
    });
}
function elementMatches(element, selector) {
    if (!name) {
        findMethodName(element);
    }
    return element[name](selector);
}
// deep clone of original platform
var platform = JSON.parse(JSON.stringify(_platform.default));
// operating system
var os = platform.os.family || '';
var ANDROID = os === 'Android';
var WINDOWS = os.slice(0, 7) === 'Windows';
var OSX = os === 'OS X';
var IOS = os === 'iOS';
// layout
var BLINK = platform.layout === 'Blink';
var GECKO = platform.layout === 'Gecko';
var TRIDENT = platform.layout === 'Trident';
var EDGE = platform.layout === 'EdgeHTML';
var WEBKIT = platform.layout === 'WebKit';
// browser version (not layout engine version!)
var version = parseFloat(platform.version);
var majorVersion = Math.floor(version);
platform.majorVersion = majorVersion;
platform.is = {
    // operating system
    ANDROID: ANDROID,
    WINDOWS: WINDOWS,
    OSX: OSX,
    IOS: IOS,
    // layout
    BLINK: BLINK,
    GECKO: GECKO,
    TRIDENT: TRIDENT,
    EDGE: EDGE,
    WEBKIT: WEBKIT,
    // INTERNET EXPLORERS
    IE9: TRIDENT && majorVersion === 9,
    IE10: TRIDENT && majorVersion === 10,
    IE11: TRIDENT && majorVersion === 11
};
function before() {
    var data = {
        // remember what had focus to restore after test
        activeElement: document.activeElement,
        // remember scroll positions to restore after test
        windowScrollTop: window.scrollTop,
        windowScrollLeft: window.scrollLeft,
        bodyScrollTop: document.body.scrollTop,
        bodyScrollLeft: document.body.scrollLeft
    };
    // wrap tests in an element hidden from screen readers to prevent them
    // from announcing focus, which can be quite irritating to the user
    var iframe = document.createElement('iframe');
    iframe.setAttribute('style', 'position:absolute; position:fixed; top:0; left:-2px; width:1px; height:1px; overflow:hidden;');
    iframe.setAttribute('aria-live', 'off');
    iframe.setAttribute('aria-busy', 'true');
    iframe.setAttribute('aria-hidden', 'true');
    document.body.appendChild(iframe);
    var _window = iframe.contentWindow;
    var _document = _window.document;
    _document.open();
    _document.close();
    var wrapper = _document.createElement('div');
    _document.body.appendChild(wrapper);
    data.iframe = iframe;
    data.wrapper = wrapper;
    data.window = _window;
    data.document = _document;
    return data;
}
// options.element:
//  {string} element name
//  {function} callback(wrapper, document) to generate an element
// options.mutate: (optional)
//  {function} callback(element, wrapper, document) to manipulate element prior to focus-test.
//             Can return DOMElement to define focus target (default: element)
// options.validate: (optional)
//  {function} callback(element, focusTarget, document) to manipulate test-result
function test(data, options) {
    // make sure we operate on a clean slate
    data.wrapper.innerHTML = '';
    // create dummy element to test focusability of
    var element = typeof options.element === 'string' ? data.document.createElement(options.element) : options.element(data.wrapper, data.document);
    // allow callback to further specify dummy element
    // and optionally define element to focus
    var focus = options.mutate && options.mutate(element, data.wrapper, data.document);
    if (!focus && focus !== false) {
        focus = element;
    }
    // element needs to be part of the DOM to be focusable
    !element.parentNode && data.wrapper.appendChild(element);
    // test if the element with invalid tabindex can be focused
    focus && focus.focus && focus.focus();
    // validate test's result
    return options.validate ? options.validate(element, focus, data.document) : data.document.activeElement === focus;
}
function after(data) {
    // restore focus to what it was before test and cleanup
    if (data.activeElement === document.body) {
        document.activeElement && document.activeElement.blur && document.activeElement.blur();
        if (platform.is.IE10) {
            // IE10 does not redirect focus to <body> when the activeElement is removed
            document.body.focus();
        }
    } else {
        data.activeElement && data.activeElement.focus && data.activeElement.focus();
    }
    document.body.removeChild(data.iframe);
    // restore scroll position
    window.scrollTop = data.windowScrollTop;
    window.scrollLeft = data.windowScrollLeft;
    document.body.scrollTop = data.bodyScrollTop;
    document.body.scrollLeft = data.bodyScrollLeft;
}
function detectFocus(tests) {
    var data = before();
    var results = {};
    Object.keys(tests).map(function(key) {
        results[key] = test(data, tests[key]);
    });
    after(data);
    return results;
}
// this file is overwritten by `npm run build:pre`
var version$1 = '1.4.1';
/*
    Facility to cache test results in localStorage.

    USAGE:
      cache.get('key');
      cache.set('key', 'value');
 */ function readLocalStorage(key) {
    // allow reading from storage to retrieve previous support results
    // even while the document does not have focus
    var data = void 0;
    try {
        data = window.localStorage && window.localStorage.getItem(key);
        data = data ? JSON.parse(data) : {};
    } catch (e) {
        data = {};
    }
    return data;
}
function writeLocalStorage(key, value) {
    if (!document.hasFocus()) {
        // if the document does not have focus when tests are executed, focus() may
        // not be handled properly and events may not be dispatched immediately.
        // This can happen when a document is reloaded while Developer Tools have focus.
        try {
            window.localStorage && window.localStorage.removeItem(key);
        } catch (e) {
        // ignore
        }
        return;
    }
    try {
        window.localStorage && window.localStorage.setItem(key, JSON.stringify(value));
    } catch (e) {
    // ignore
    }
}
var userAgent = typeof window !== 'undefined' && window.navigator.userAgent || '';
var cacheKey = 'ally-supports-cache';
var cache = readLocalStorage(cacheKey);
// update the cache if ally or the user agent changed (newer version, etc)
if (cache.userAgent !== userAgent || cache.version !== version$1) {
    cache = {};
}
cache.userAgent = userAgent;
cache.version = version$1;
var cache$1 = {
    get: function get() {
        return cache;
    },
    set: function set(values) {
        Object.keys(values).forEach(function(key) {
            cache[key] = values[key];
        });
        cache.time = new Date().toISOString();
        writeLocalStorage(cacheKey, cache);
    }
};
function cssShadowPiercingDeepCombinator() {
    var combinator = void 0;
    // see https://dev.w3.org/csswg/css-scoping-1/#deep-combinator
    // https://bugzilla.mozilla.org/show_bug.cgi?id=1117572
    // https://code.google.com/p/chromium/issues/detail?id=446051
    try {
        document.querySelector('html >>> :first-child');
        combinator = '>>>';
    } catch (noArrowArrowArrow) {
        try {
            // old syntax supported at least up to Chrome 41
            // https://code.google.com/p/chromium/issues/detail?id=446051
            document.querySelector('html /deep/ :first-child');
            combinator = '/deep/';
        } catch (noDeep) {
            combinator = '';
        }
    }
    return combinator;
}
var gif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7';
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaImgTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" src="' + gif + '">';
        return element.querySelector('area');
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test">' + '<area href="#void" tabindex="-1" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" alt="" src="' + gif + '">';
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        var focus = element.querySelector('area');
        focus.focus();
        return _document.activeElement === focus;
    }
};
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusAreaWithoutHref = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-area-href-test">' + '<area shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-area-href-test" alt="" src="' + gif + '">';
        return element.querySelector('area');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // fixes https://github.com/medialize/ally.js/issues/35
            // Firefox loads the DataURI asynchronously, causing a false-negative
            return true;
        }
        return _document.activeElement === focusTarget;
    }
};
var focusAudioWithoutControls = {
    name: 'can-focus-audio-without-controls',
    element: 'audio',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
var invalidGif = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ';
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusBrokenImageMap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="broken-image-map-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#broken-image-map-test" alt="" src="' + invalidGif + '">';
        return element.querySelector('area');
    }
};
// Children of focusable elements with display:flex are focusable in IE10-11
var focusChildrenOfFocusableFlexbox = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
        return element.querySelector('span');
    }
};
// fieldset[tabindex=0][disabled] should not be focusable, but Blink and WebKit disagree
// @specification https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
// @browser-issue Chromium https://crbug.com/453847
// @browser-issue WebKit https://bugs.webkit.org/show_bug.cgi?id=141086
var focusFieldsetDisabled = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
var focusFieldset = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><p>content</p>';
    }
};
// elements with display:flex are focusable in IE10-11
var focusFlexboxContainer = {
    element: 'span',
    mutate: function mutate(element) {
        element.setAttribute('style', 'display: -webkit-flex; display: -ms-flexbox; display: flex;');
        element.innerHTML = '<span style="display: block;">hello</span>';
    }
};
// form[tabindex=0][disabled] should be focusable as the
// specification doesn't know the disabled attribute on the form element
// @specification https://www.w3.org/TR/html5/forms.html#the-form-element
var focusFormDisabled = {
    element: 'form',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 0);
        element.setAttribute('disabled', 'disabled');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// fixes https://github.com/medialize/ally.js/issues/20
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-ismap
var focusImgIsmap = {
    element: 'a',
    mutate: function mutate(element) {
        element.href = '#void';
        element.innerHTML = '<img ismap src="' + gif + '" alt="">';
        return element.querySelector('img');
    }
};
// NOTE: https://github.com/medialize/ally.js/issues/35
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
var focusImgUsemapTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="image-map-tabindex-test"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#image-map-tabindex-test" tabindex="-1" alt="" ' + 'src="' + gif + '">';
        return element.querySelector('img');
    }
};
var focusInHiddenIframe = {
    element: function element(wrapper, _document) {
        var iframe = _document.createElement('iframe');
        // iframe must be part of the DOM before accessing the contentWindow is possible
        wrapper.appendChild(iframe);
        // create the iframe's default document (<html><head></head><body></body></html>)
        var iframeDocument = iframe.contentWindow.document;
        iframeDocument.open();
        iframeDocument.close();
        return iframe;
    },
    mutate: function mutate(iframe) {
        iframe.style.visibility = 'hidden';
        var iframeDocument = iframe.contentWindow.document;
        var input = iframeDocument.createElement('input');
        iframeDocument.body.appendChild(input);
        return input;
    },
    validate: function validate(iframe) {
        var iframeDocument = iframe.contentWindow.document;
        var focus = iframeDocument.querySelector('input');
        return iframeDocument.activeElement === focus;
    }
};
var result = !platform.is.WEBKIT;
function focusInZeroDimensionObject() {
    return result;
}
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusInvalidTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', 'invalid-value');
    }
};
var focusLabelTabindex = {
    element: 'label',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '-1');
    },
    validate: function validate(element, focusTarget, _document) {
        // force layout in Chrome 49, otherwise the element won't be focusable
        /* eslint-disable no-unused-vars */ var variableToPreventDeadCodeElimination = element.offsetHeight;
        /* eslint-enable no-unused-vars */ element.focus();
        return _document.activeElement === element;
    }
};
var svg = 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtb' + 'G5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0ic3ZnIj48dGV4dCB4PSIxMCIgeT0iMjAiIGlkPSJ' + 'zdmctbGluay10ZXh0Ij50ZXh0PC90ZXh0Pjwvc3ZnPg==';
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvgHidden = {
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
        element.style.visibility = 'hidden';
    }
};
// Note: IE10 on BrowserStack does not like this test
var focusObjectSvg = {
    name: 'can-focus-object-svg',
    element: 'object',
    mutate: function mutate(element) {
        element.setAttribute('type', 'image/svg+xml');
        element.setAttribute('data', svg);
        element.setAttribute('width', '200');
        element.setAttribute('height', '50');
    },
    validate: function validate(element, focusTarget, _document) {
        if (platform.is.GECKO) {
            // Firefox seems to be handling the object creation asynchronously and thereby produces a false negative test result.
            // Because we know Firefox is able to focus object elements referencing SVGs, we simply cheat by sniffing the user agent string
            return true;
        }
        return _document.activeElement === element;
    }
};
// Every Environment except IE9 considers SWF objects focusable
var result$1 = !platform.is.IE9;
function focusObjectSwf() {
    return result$1;
}
var focusRedirectImgUsemap = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = '<map name="focus-redirect-img-usemap"><area href="#void" shape="rect" coords="63,19,144,45"></map>' + '<img usemap="#focus-redirect-img-usemap" alt="" ' + 'src="' + gif + '">';
        // focus the <img>, not the <div>
        return element.querySelector('img');
    },
    validate: function validate(element, focusTarget, _document) {
        var target = element.querySelector('area');
        return _document.activeElement === target;
    }
};
// see https://jsbin.com/nenirisage/edit?html,js,console,output
var focusRedirectLegend = {
    element: 'fieldset',
    mutate: function mutate(element) {
        element.innerHTML = '<legend>legend</legend><input tabindex="-1"><input tabindex="0">';
        // take care of focus in validate();
        return false;
    },
    validate: function validate(element, focusTarget, _document) {
        var focusable = element.querySelector('input[tabindex="-1"]');
        var tabbable = element.querySelector('input[tabindex="0"]');
        // Firefox requires this test to focus the <fieldset> first, while this is not necessary in
        // https://jsbin.com/nenirisage/edit?html,js,console,output
        element.focus();
        element.querySelector('legend').focus();
        return _document.activeElement === focusable && 'focusable' || _document.activeElement === tabbable && 'tabbable' || '';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollBody = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
        return element.querySelector('div');
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainerWithoutOverflow = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
// https://github.com/medialize/ally.js/issues/21
var focusScrollContainer = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('style', 'width: 100px; height: 50px; overflow: auto;');
        element.innerHTML = '<div style="width: 500px; height: 40px;">scrollable content</div>';
    }
};
var focusSummary = {
    element: 'details',
    mutate: function mutate(element) {
        element.innerHTML = '<summary>foo</summary><p>content</p>';
        return element.firstElementChild;
    }
};
function makeFocusableForeignObject() {
    // Constructs <foreignObject width="30" height="30"><input type="text"/></foreignObject>
    // without raising a Trusted Types violation
    var foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignObject.width.baseVal.value = 30;
    foreignObject.height.baseVal.value = 30;
    foreignObject.appendChild(document.createElement('input'));
    foreignObject.lastChild.type = 'text';
    return foreignObject;
}
function focusSvgForeignObjectHack(element) {
    // Edge13, Edge14: foreignObject focus hack
    // https://jsbin.com/kunehinugi/edit?html,js,output
    // https://jsbin.com/fajagi/3/edit?html,js,output
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (!isSvgElement) {
        return false;
    }
    // inject and focus an <input> element into the SVG element to receive focus
    var foreignObject = makeFocusableForeignObject();
    element.appendChild(foreignObject);
    var input = foreignObject.querySelector('input');
    input.focus();
    // upon disabling the activeElement, IE and Edge
    // will not shift focus to <body> like all the other
    // browsers, but instead find the first focusable
    // ancestor and shift focus to that
    input.disabled = true;
    // clean up
    element.removeChild(foreignObject);
    return true;
}
function generate(element) {
    return '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">' + element + '</svg>';
}
function focus(element) {
    if (element.focus) {
        return;
    }
    try {
        HTMLElement.prototype.focus.call(element);
    } catch (e) {
        focusSvgForeignObjectHack(element);
    }
}
function validate(element, focusTarget, _document) {
    focus(focusTarget);
    return _document.activeElement === focusTarget;
}
var focusSvgFocusableAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text focusable="true">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="0">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgNegativeTabindexAttribute = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<text tabindex="-1">a</text>');
        return element.querySelector('text');
    },
    validate: validate
};
var focusSvgUseTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate([
            '<g id="ally-test-target"><a xlink:href="#void"><text>link</text></a></g>',
            '<use xlink:href="#ally-test-target" x="0" y="0" tabindex="-1" />'
        ].join(''));
        return element.querySelector('use');
    },
    validate: validate
};
var focusSvgForeignobjectTabindex = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('<foreignObject tabindex="-1"><input type="text" /></foreignObject>');
        // Safari 8's querySelector() can't identify foreignObject, but getElementsByTagName() can
        return element.querySelector('foreignObject') || element.getElementsByTagName('foreignObject')[0];
    },
    validate: validate
};
// Firefox seems to be handling the SVG-document-in-iframe creation asynchronously
// and thereby produces a false negative test result. Thus the test is pointless
// and we resort to UA sniffing once again.
// see http://jsbin.com/vunadohoko/1/edit?js,console,output
var result$2 = Boolean(platform.is.GECKO && typeof SVGElement !== 'undefined' && SVGElement.prototype.focus);
function focusSvgInIframe() {
    return result$2;
}
var focusSvg = {
    element: 'div',
    mutate: function mutate(element) {
        element.innerHTML = generate('');
        return element.firstChild;
    },
    validate: validate
};
// Firefox allows *any* value and treats invalid values like tabindex="-1"
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
var focusTabindexTrailingCharacters = {
    element: 'div',
    mutate: function mutate(element) {
        element.setAttribute('tabindex', '3x');
    }
};
var focusTable = {
    element: 'table',
    mutate: function mutate(element, wrapper, _document) {
        // IE9 has a problem replacing TBODY contents with innerHTML.
        // https://stackoverflow.com/a/8097055/515124
        // element.innerHTML = '<tr><td>cell</td></tr>';
        var fragment = _document.createDocumentFragment();
        fragment.innerHTML = '<tr><td>cell</td></tr>';
        element.appendChild(fragment);
    }
};
var focusVideoWithoutControls = {
    element: 'video',
    mutate: function mutate(element) {
        try {
            // invalid media file can trigger warning in console, data-uri to prevent HTTP request
            element.setAttribute('src', gif);
        } catch (e) {
        // IE9 may throw "Error: Not implemented"
        }
    }
};
// https://jsbin.com/vafaba/3/edit?html,js,console,output
var result$3 = platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE;
function tabsequenceAreaAtImgPosition() {
    return result$3;
}
var testCallbacks = {
    cssShadowPiercingDeepCombinator: cssShadowPiercingDeepCombinator,
    focusInZeroDimensionObject: focusInZeroDimensionObject,
    focusObjectSwf: focusObjectSwf,
    focusSvgInIframe: focusSvgInIframe,
    tabsequenceAreaAtImgPosition: tabsequenceAreaAtImgPosition
};
var testDescriptions = {
    focusAreaImgTabindex: focusAreaImgTabindex,
    focusAreaTabindex: focusAreaTabindex,
    focusAreaWithoutHref: focusAreaWithoutHref,
    focusAudioWithoutControls: focusAudioWithoutControls,
    focusBrokenImageMap: focusBrokenImageMap,
    focusChildrenOfFocusableFlexbox: focusChildrenOfFocusableFlexbox,
    focusFieldsetDisabled: focusFieldsetDisabled,
    focusFieldset: focusFieldset,
    focusFlexboxContainer: focusFlexboxContainer,
    focusFormDisabled: focusFormDisabled,
    focusImgIsmap: focusImgIsmap,
    focusImgUsemapTabindex: focusImgUsemapTabindex,
    focusInHiddenIframe: focusInHiddenIframe,
    focusInvalidTabindex: focusInvalidTabindex,
    focusLabelTabindex: focusLabelTabindex,
    focusObjectSvg: focusObjectSvg,
    focusObjectSvgHidden: focusObjectSvgHidden,
    focusRedirectImgUsemap: focusRedirectImgUsemap,
    focusRedirectLegend: focusRedirectLegend,
    focusScrollBody: focusScrollBody,
    focusScrollContainerWithoutOverflow: focusScrollContainerWithoutOverflow,
    focusScrollContainer: focusScrollContainer,
    focusSummary: focusSummary,
    focusSvgFocusableAttribute: focusSvgFocusableAttribute,
    focusSvgTabindexAttribute: focusSvgTabindexAttribute,
    focusSvgNegativeTabindexAttribute: focusSvgNegativeTabindexAttribute,
    focusSvgUseTabindex: focusSvgUseTabindex,
    focusSvgForeignobjectTabindex: focusSvgForeignobjectTabindex,
    focusSvg: focusSvg,
    focusTabindexTrailingCharacters: focusTabindexTrailingCharacters,
    focusTable: focusTable,
    focusVideoWithoutControls: focusVideoWithoutControls
};
function executeTests() {
    var results = detectFocus(testDescriptions);
    Object.keys(testCallbacks).forEach(function(key) {
        results[key] = testCallbacks[key]();
    });
    return results;
}
var supportsCache = null;
function _supports() {
    if (supportsCache) {
        return supportsCache;
    }
    supportsCache = cache$1.get();
    if (!supportsCache.time) {
        cache$1.set(executeTests());
        supportsCache = cache$1.get();
    }
    return supportsCache;
}
var supports = void 0;
// https://www.w3.org/TR/html5/infrastructure.html#rules-for-parsing-integers
// NOTE: all browsers agree to allow trailing spaces as well
var validIntegerPatternNoTrailing = /^\s*(-|\+)?[0-9]+\s*$/;
var validIntegerPatternWithTrailing = /^\s*(-|\+)?[0-9]+.*$/;
function isValidTabindex(context) {
    if (!supports) {
        supports = _supports();
    }
    var validIntegerPattern = supports.focusTabindexTrailingCharacters ? validIntegerPatternWithTrailing : validIntegerPatternNoTrailing;
    var element = contextToElement({
        label: 'is/valid-tabindex',
        resolveDocument: true,
        context: context
    });
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var hasTabIndex = element.hasAttribute('tabIndex');
    if (!hasTabindex && !hasTabIndex) {
        return false;
    }
    // older Firefox and Internet Explorer don't support tabindex on SVG elements
    var isSvgElement = element.ownerSVGElement || element.nodeName.toLowerCase() === 'svg';
    if (isSvgElement && !supports.focusSvgTabindexAttribute) {
        return false;
    }
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    if (supports.focusInvalidTabindex) {
        return true;
    }
    // an element matches the tabindex selector even if its value is invalid
    var tabindex = element.getAttribute(hasTabindex ? 'tabindex' : 'tabIndex');
    // IE11 parses tabindex="" as the value "-32768"
    // @browser-issue Trident https://connect.microsoft.com/IE/feedback/details/1072965
    if (tabindex === '-32768') {
        return false;
    }
    return Boolean(tabindex && validIntegerPattern.test(tabindex));
}
function tabindexValue(element) {
    if (!isValidTabindex(element)) {
        return null;
    }
    // Edge 14 has a capitalization problem on SVG elements,
    // see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/9282058/
    var hasTabindex = element.hasAttribute('tabindex');
    var attributeName = hasTabindex ? 'tabindex' : 'tabIndex';
    // @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=1128054
    var tabindex = parseInt(element.getAttribute(attributeName), 10);
    return isNaN(tabindex) ? -1 : tabindex;
}
// this is a shared utility file for focus-relevant.js and tabbable.js
// separate testing of this file's functions is not necessary,
// as they're implicitly tested by way of the consumers
function isUserModifyWritable(style) {
    // https://www.w3.org/TR/1999/WD-css3-userint-19990916#user-modify
    // https://github.com/medialize/ally.js/issues/17
    var userModify = style.webkitUserModify || '';
    return Boolean(userModify && userModify.indexOf('write') !== -1);
}
function hasCssOverflowScroll(style) {
    return [
        style.getPropertyValue('overflow'),
        style.getPropertyValue('overflow-x'),
        style.getPropertyValue('overflow-y')
    ].some(function(overflow) {
        return overflow === 'auto' || overflow === 'scroll';
    });
}
function hasCssDisplayFlex(style) {
    return style.display.indexOf('flex') > -1;
}
function isScrollableContainer(element, nodeName, parentNodeName, parentStyle) {
    if (nodeName !== 'div' && nodeName !== 'span') {
        // Internet Explorer advances scrollable containers and bodies to focusable
        // only if the scrollable container is <div> or <span> - this does *not*
        // happen for <section>, <article>, …
        return false;
    }
    if (parentNodeName && parentNodeName !== 'div' && parentNodeName !== 'span' && !hasCssOverflowScroll(parentStyle)) {
        return false;
    }
    return element.offsetHeight < element.scrollHeight || element.offsetWidth < element.scrollWidth;
}
var supports$1 = void 0;
function isFocusRelevantRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false
    } : _ref$except;
    if (!supports$1) {
        supports$1 = _supports();
    }
    var element = contextToElement({
        label: 'is/focus-relevant',
        resolveDocument: true,
        context: context
    });
    if (!except.shadow && element.shadowRoot) {
        // a ShadowDOM host receives focus when the focus moves to its content
        return true;
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'input' && element.type === 'hidden') {
        // input[type="hidden"] supports.cannot be focused
        return false;
    }
    if (nodeName === 'input' || nodeName === 'select' || nodeName === 'button' || nodeName === 'textarea') {
        return true;
    }
    if (nodeName === 'legend' && supports$1.focusRedirectLegend) {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'label') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'area') {
        // specifics filtered in is/focusable
        return true;
    }
    if (nodeName === 'a' && element.hasAttribute('href')) {
        return true;
    }
    if (nodeName === 'object' && element.hasAttribute('usemap')) {
        // object[usemap] is not focusable in any browser
        return false;
    }
    if (nodeName === 'object') {
        var svgType = element.getAttribute('type');
        if (!supports$1.focusObjectSvg && svgType === 'image/svg+xml') {
            // object[type="image/svg+xml"] is not focusable in Internet Explorer
            return false;
        } else if (!supports$1.focusObjectSwf && svgType === 'application/x-shockwave-flash') {
            // object[type="application/x-shockwave-flash"] is not focusable in Internet Explorer 9
            return false;
        }
    }
    if (nodeName === 'iframe' || nodeName === 'object') {
        // browsing context containers
        return true;
    }
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    if (element.hasAttribute('contenteditable')) {
        // also see CSS property user-modify below
        return true;
    }
    if (nodeName === 'audio' && (supports$1.focusAudioWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (nodeName === 'video' && (supports$1.focusVideoWithoutControls || element.hasAttribute('controls'))) {
        return true;
    }
    if (supports$1.focusSummary && nodeName === 'summary') {
        return true;
    }
    var validTabindex = isValidTabindex(element);
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return validTabindex && supports$1.focusImgUsemapTabindex || supports$1.focusRedirectImgUsemap;
    }
    if (supports$1.focusTable && (nodeName === 'table' || nodeName === 'td')) {
        // IE10-11 supports.can focus <table> and <td>
        return true;
    }
    if (supports$1.focusFieldset && nodeName === 'fieldset') {
        // IE10-11 supports.can focus <fieldset>
        return true;
    }
    var isSvgElement = nodeName === 'svg';
    var isSvgContent = element.ownerSVGElement;
    var focusableAttribute = element.getAttribute('focusable');
    var tabindex = tabindexValue(element);
    if (nodeName === 'use' && tabindex !== null && !supports$1.focusSvgUseTabindex) {
        // <use> cannot be made focusable by adding a tabindex attribute anywhere but Blink and WebKit
        return false;
    }
    if (nodeName === 'foreignobject') {
        // <use> can only be made focusable in Blink and WebKit
        return tabindex !== null && supports$1.focusSvgForeignobjectTabindex;
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        return true;
    }
    if ((isSvgElement || isSvgContent) && element.focus && !supports$1.focusSvgNegativeTabindexAttribute && tabindex < 0) {
        // Firefox 51 and 52 treat any natively tabbable SVG element with
        // tabindex="-1" as tabbable and everything else as inert
        // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
        return false;
    }
    if (isSvgElement) {
        return validTabindex || supports$1.focusSvg || supports$1.focusSvgInIframe || // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        Boolean(supports$1.focusSvgFocusableAttribute && focusableAttribute && focusableAttribute === 'true');
    }
    if (isSvgContent) {
        if (supports$1.focusSvgTabindexAttribute && validTabindex) {
            return true;
        }
        if (supports$1.focusSvgFocusableAttribute) {
            // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
            return focusableAttribute === 'true';
        }
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    if (validTabindex) {
        return true;
    }
    var style = window.getComputedStyle(element, null);
    if (isUserModifyWritable(style)) {
        return true;
    }
    if (supports$1.focusImgIsmap && nodeName === 'img' && element.hasAttribute('ismap')) {
        // IE10-11 considers the <img> in <a href><img ismap> focusable
        // https://github.com/medialize/ally.js/issues/20
        var hasLinkParent = getParents({
            context: element
        }).some(function(parent) {
            return parent.nodeName.toLowerCase() === 'a' && parent.hasAttribute('href');
        });
        if (hasLinkParent) {
            return true;
        }
    }
    // https://github.com/medialize/ally.js/issues/21
    if (!except.scrollable && supports$1.focusScrollContainer) {
        if (supports$1.focusScrollContainerWithoutOverflow) {
            // Internet Explorer does will consider the scrollable area focusable
            // if the element is a <div> or a <span> and it is in fact scrollable,
            // regardless of the CSS overflow property
            if (isScrollableContainer(element, nodeName)) {
                return true;
            }
        } else if (hasCssOverflowScroll(style)) {
            // Firefox requires proper overflow setting, IE does not necessarily
            // https://developer.mozilla.org/docs/Web/CSS/overflow
            return true;
        }
    }
    if (!except.flexbox && supports$1.focusFlexboxContainer && hasCssDisplayFlex(style)) {
        // elements with display:flex are focusable in IE10-11
        return true;
    }
    var parent = element.parentElement;
    if (!except.scrollable && parent) {
        var parentNodeName = parent.nodeName.toLowerCase();
        var parentStyle = window.getComputedStyle(parent, null);
        if (supports$1.focusScrollBody && isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
            // scrollable bodies are focusable Internet Explorer
            // https://github.com/medialize/ally.js/issues/21
            return true;
        }
        // Children of focusable elements with display:flex are focusable in IE10-11
        if (supports$1.focusChildrenOfFocusableFlexbox) {
            if (hasCssDisplayFlex(parentStyle)) {
                return true;
            }
        }
    }
    // NOTE: elements marked as inert are not focusable,
    // but that property is not exposed to the DOM
    // https://www.w3.org/TR/html5/editing.html#inert
    return false;
}
// bind exceptions to an iterator callback
isFocusRelevantRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusRelevant = function isFocusRelevant(context) {
        return isFocusRelevantRules({
            context: context,
            except: except
        });
    };
    isFocusRelevant.rules = isFocusRelevantRules;
    return isFocusRelevant;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusRelevant = isFocusRelevantRules.except({});
function findIndex(array, callback) {
    // attempt to use native or polyfilled Array#findIndex first
    if (array.findIndex) {
        return array.findIndex(callback);
    }
    var length = array.length;
    // shortcut if the array is empty
    if (length === 0) {
        return -1;
    }
    // otherwise loop over array
    for(var i = 0; i < length; i++){
        if (callback(array[i], i, array)) {
            return i;
        }
    }
    return -1;
}
function getContentDocument(node) {
    try {
        // works on <object> and <iframe>
        return node.contentDocument || // works on <object> and <iframe>
        node.contentWindow && node.contentWindow.document || // works on <object> and <iframe> that contain SVG
        node.getSVGDocument && node.getSVGDocument() || null;
    } catch (e) {
        // SecurityError: Failed to read the 'contentDocument' property from 'HTMLObjectElement'
        // also IE may throw member not found exception e.g. on <object type="image/png">
        return null;
    }
}
function getWindow(node) {
    var _document = getDocument(node);
    return _document.defaultView || window;
}
var shadowPrefix = void 0;
function selectInShadows(selector) {
    if (typeof shadowPrefix !== 'string') {
        var operator = cssShadowPiercingDeepCombinator();
        if (operator) {
            shadowPrefix = ', html ' + operator + ' ';
        }
    }
    if (!shadowPrefix) {
        return selector;
    }
    return selector + shadowPrefix + selector.replace(/\s*,\s*/g, ',').split(',').join(shadowPrefix);
}
var selector = void 0;
function findDocumentHostElement(_window) {
    if (!selector) {
        selector = selectInShadows('object, iframe');
    }
    if (_window._frameElement !== undefined) {
        return _window._frameElement;
    }
    _window._frameElement = null;
    var potentialHosts = _window.parent.document.querySelectorAll(selector);
    [].some.call(potentialHosts, function(element) {
        var _document = getContentDocument(element);
        if (_document !== _window.document) {
            return false;
        }
        _window._frameElement = element;
        return true;
    });
    return _window._frameElement;
}
function getFrameElement(element) {
    var _window = getWindow(element);
    if (!_window.parent || _window.parent === _window) {
        // if there is no parent browsing context,
        // we're not going to get a frameElement either way
        return null;
    }
    try {
        // see https://developer.mozilla.org/docs/Web/API/Window/frameElement
        // does not work within <embed> anywhere, and not within in <object> in IE
        return _window.frameElement || findDocumentHostElement(_window);
    } catch (e) {
        return null;
    }
}
// https://www.w3.org/TR/html5/rendering.html#being-rendered
// <area> is not rendered, but we *consider* it visible to simplfiy this function's usage
var notRenderedElementsPattern = /^(area)$/;
function computedStyle(element, property) {
    return window.getComputedStyle(element, null).getPropertyValue(property);
}
function notDisplayed(_path) {
    return _path.some(function(element) {
        // display:none is not visible (optimized away at layout)
        return computedStyle(element, 'display') === 'none';
    });
}
function notVisible(_path) {
    // https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L109-L114
    // NOTE: a nested element can reverse visibility:hidden|collapse by explicitly setting visibility:visible
    // NOTE: visibility can be ["", "visible", "hidden", "collapse"]
    var hidden = findIndex(_path, function(element) {
        var visibility = computedStyle(element, 'visibility');
        return visibility === 'hidden' || visibility === 'collapse';
    });
    if (hidden === -1) {
        // there is no hidden element
        return false;
    }
    var visible = findIndex(_path, function(element) {
        return computedStyle(element, 'visibility') === 'visible';
    });
    if (visible === -1) {
        // there is no visible element (but a hidden element)
        return true;
    }
    if (hidden < visible) {
        // there is a hidden element and it's closer than the first visible element
        return true;
    }
    // there may be a hidden element, but the closest element is visible
    return false;
}
function collapsedParent(_path) {
    var offset = 1;
    if (_path[0].nodeName.toLowerCase() === 'summary') {
        offset = 2;
    }
    return _path.slice(offset).some(function(element) {
        // "content children" of a closed details element are not visible
        return element.nodeName.toLowerCase() === 'details' && element.open === false;
    });
}
function isVisibleRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        notRendered: false,
        cssDisplay: false,
        cssVisibility: false,
        detailsElement: false,
        browsingContext: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/visible',
        resolveDocument: true,
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (!except.notRendered && notRenderedElementsPattern.test(nodeName)) {
        return true;
    }
    var _path = getParents({
        context: element
    });
    // in Internet Explorer <audio> has a default display: none, where others have display: inline
    // but IE allows focusing <audio style="display:none">, but not <div display:none><audio>
    // this is irrelevant to other browsers, as the controls attribute is required to make <audio> focusable
    var isAudioWithoutControls = nodeName === 'audio' && !element.hasAttribute('controls');
    if (!except.cssDisplay && notDisplayed(isAudioWithoutControls ? _path.slice(1) : _path)) {
        return false;
    }
    if (!except.cssVisibility && notVisible(_path)) {
        return false;
    }
    if (!except.detailsElement && collapsedParent(_path)) {
        return false;
    }
    if (!except.browsingContext) {
        // elements within a browsing context are affected by the
        // browsing context host element's visibility and tabindex
        var frameElement = getFrameElement(element);
        var _isVisible = isVisibleRules.except(except);
        if (frameElement && !_isVisible(frameElement)) {
            return false;
        }
    }
    return true;
}
// bind exceptions to an iterator callback
isVisibleRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isVisible = function isVisible(context) {
        return isVisibleRules({
            context: context,
            except: except
        });
    };
    isVisible.rules = isVisibleRules;
    return isVisible;
};
// provide isVisible(context) as default iterator callback
var isVisible = isVisibleRules.except({});
function getMapByName(name, _document) {
    // apparently getElementsByName() also considers id attribute in IE & opera
    // https://developer.mozilla.org/docs/Web/API/Document/getElementsByName
    var map = _document.querySelector('map[name="' + (0, _cssescape.default)(name) + '"]');
    return map || null;
}
function getImageOfArea(element) {
    var map = element.parentElement;
    if (!map.name || map.nodeName.toLowerCase() !== 'map') {
        return null;
    }
    // NOTE: image maps can also be applied to <object> with image content,
    // but no browser supports this at the moment
    // HTML5 specifies HTMLMapElement.images to be an HTMLCollection of all
    // <img> and <object> referencing the <map> element, but no browser implements this
    //   https://www.w3.org/TR/html5/embedded-content-0.html#the-map-element
    //   https://developer.mozilla.org/docs/Web/API/HTMLMapElement
    // the image must be valid and loaded for the map to take effect
    var _document = getDocument(element);
    return _document.querySelector('img[usemap="#' + (0, _cssescape.default)(map.name) + '"]') || null;
}
var supports$2 = void 0;
// https://developer.mozilla.org/docs/Web/HTML/Element/map
// https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
// https://github.com/jquery/jquery-ui/blob/master/ui/core.js#L88-L107
function isValidArea(context) {
    if (!supports$2) {
        supports$2 = _supports();
    }
    var element = contextToElement({
        label: 'is/valid-area',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName !== 'area') {
        return false;
    }
    var hasTabindex = element.hasAttribute('tabindex');
    if (!supports$2.focusAreaTabindex && hasTabindex) {
        // Blink and WebKit do not consider <area tabindex="-1" href="#void"> focusable
        return false;
    }
    var img = getImageOfArea(element);
    if (!img || !isVisible(img)) {
        return false;
    }
    // Firefox only allows fully loaded images to reference image maps
    // https://stereochro.me/ideas/detecting-broken-images-js
    if (!supports$2.focusBrokenImageMap && (!img.complete || !img.naturalHeight || img.offsetWidth <= 0 || img.offsetHeight <= 0)) {
        return false;
    }
    // Firefox supports.can focus area elements even if they don't have an href attribute
    if (!supports$2.focusAreaWithoutHref && !element.href) {
        // Internet explorer supports.can focus area elements without href if either
        // the area element or the image element has a tabindex attribute
        return supports$2.focusAreaTabindex && hasTabindex || supports$2.focusAreaImgTabindex && img.hasAttribute('tabindex');
    }
    // https://developer.mozilla.org/docs/Web/HTML/Element/img#attr-usemap
    var childOfInteractive = getParents({
        context: img
    }).slice(1).some(function(_element) {
        var name = _element.nodeName.toLowerCase();
        return name === 'button' || name === 'a';
    });
    if (childOfInteractive) {
        return false;
    }
    return true;
}
var supports$3 = void 0;
// https://www.w3.org/TR/html5/disabled-elements.html#concept-element-disabled
var disabledElementsPattern = void 0;
var disabledElements = {
    input: true,
    select: true,
    textarea: true,
    button: true,
    fieldset: true,
    form: true
};
function isNativeDisabledSupported(context) {
    if (!supports$3) {
        supports$3 = _supports();
        if (supports$3.focusFieldsetDisabled) {
            delete disabledElements.fieldset;
        }
        if (supports$3.focusFormDisabled) {
            delete disabledElements.form;
        }
        disabledElementsPattern = new RegExp('^(' + Object.keys(disabledElements).join('|') + ')$');
    }
    var element = contextToElement({
        label: 'is/native-disabled-supported',
        context: context
    });
    var nodeName = element.nodeName.toLowerCase();
    return Boolean(disabledElementsPattern.test(nodeName));
}
var supports$4 = void 0;
function isDisabledFieldset(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'fieldset' && element.disabled;
}
function isDisabledForm(element) {
    var nodeName = element.nodeName.toLowerCase();
    return nodeName === 'form' && element.disabled;
}
function isDisabled(context) {
    if (!supports$4) {
        supports$4 = _supports();
    }
    var element = contextToElement({
        label: 'is/disabled',
        context: context
    });
    if (element.hasAttribute('data-ally-disabled')) {
        // treat ally's element/disabled like the DOM native element.disabled
        return true;
    }
    if (!isNativeDisabledSupported(element)) {
        // non-form elements do not support the disabled attribute
        return false;
    }
    if (element.disabled) {
        // the element itself is disabled
        return true;
    }
    var parents = getParents({
        context: element
    });
    if (parents.some(isDisabledFieldset)) {
        // a parental <fieldset> is disabld and inherits the state onto this element
        return true;
    }
    if (!supports$4.focusFormDisabled && parents.some(isDisabledForm)) {
        // a parental <form> is disabld and inherits the state onto this element
        return true;
    }
    return false;
}
function isOnlyTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        onlyFocusableBrowsingContext: false,
        visible: false
    } : _ref$except;
    var element = contextToElement({
        label: 'is/only-tabbable',
        resolveDocument: true,
        context: context
    });
    if (!except.visible && !isVisible(element)) {
        return false;
    }
    if (!except.onlyFocusableBrowsingContext && (platform.is.GECKO || platform.is.TRIDENT || platform.is.EDGE)) {
        var frameElement = getFrameElement(element);
        if (frameElement) {
            if (tabindexValue(frameElement) < 0) {
                // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
                // tabbable demotion onto elements of their browsing contexts
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var tabindex = tabindexValue(element);
    if (nodeName === 'label' && platform.is.GECKO) {
        // Firefox cannot focus, but tab to: label[tabindex=0]
        return tabindex !== null && tabindex >= 0;
    }
    // SVG Elements were keyboard focusable but not script focusable before Firefox 51.
    // Firefox 51 added the focus management DOM API (.focus and .blur) to SVGElement,
    // see https://bugzilla.mozilla.org/show_bug.cgi?id=778654
    if (platform.is.GECKO && element.ownerSVGElement && !element.focus) {
        if (nodeName === 'a' && element.hasAttribute('xlink:href')) {
            // any focusable child of <svg> cannot be focused, but tabbed to
            if (platform.is.GECKO) {
                return true;
            }
        }
    }
    return false;
}
// bind exceptions to an iterator callback
isOnlyTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isOnlyTabbable = function isOnlyTabbable(context) {
        return isOnlyTabbableRules({
            context: context,
            except: except
        });
    };
    isOnlyTabbable.rules = isOnlyTabbableRules;
    return isOnlyTabbable;
};
// provide isOnlyTabbable(context) as default iterator callback
var isOnlyTabbable = isOnlyTabbableRules.except({});
var supports$5 = void 0;
function isOnlyFocusRelevant(element) {
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'embed' || nodeName === 'keygen') {
        // embed is considered focus-relevant but not focusable
        // see https://github.com/medialize/ally.js/issues/82
        return true;
    }
    var _tabindex = tabindexValue(element);
    if (element.shadowRoot && _tabindex === null) {
        // ShadowDOM host elements *may* receive focus
        // even though they are not considered focuable
        return true;
    }
    if (nodeName === 'label') {
        // <label tabindex="0"> is only tabbable in Firefox, not script-focusable
        // there's no way to make an element focusable other than by adding a tabindex,
        // and focus behavior of the label element seems hard-wired to ignore tabindex
        // in some browsers (like Gecko, Blink and WebKit)
        return !supports$5.focusLabelTabindex || _tabindex === null;
    }
    if (nodeName === 'legend') {
        return _tabindex === null;
    }
    if (supports$5.focusSvgFocusableAttribute && (element.ownerSVGElement || nodeName === 'svg')) {
        // Internet Explorer understands the focusable attribute introduced in SVG Tiny 1.2
        var focusableAttribute = element.getAttribute('focusable');
        return focusableAttribute && focusableAttribute === 'false';
    }
    if (nodeName === 'img' && element.hasAttribute('usemap')) {
        // Gecko, Trident and Edge do not allow an image with an image map and tabindex to be focused,
        // it appears the tabindex is overruled so focus is still forwarded to the <map>
        return _tabindex === null || !supports$5.focusImgUsemapTabindex;
    }
    if (nodeName === 'area') {
        // all <area>s are considered relevant,
        // but only the valid <area>s are focusable
        return !isValidArea(element);
    }
    return false;
}
function isFocusableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        disabled: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$5) {
        supports$5 = _supports();
    }
    var _isOnlyTabbable = isOnlyTabbable.rules.except({
        onlyFocusableBrowsingContext: true,
        visible: except.visible
    });
    var element = contextToElement({
        label: 'is/focusable',
        resolveDocument: true,
        context: context
    });
    var focusRelevant = isFocusRelevant.rules({
        context: element,
        except: except
    });
    if (!focusRelevant || isOnlyFocusRelevant(element)) {
        return false;
    }
    if (!except.disabled && isDisabled(element)) {
        return false;
    }
    if (!except.onlyTabbable && _isOnlyTabbable(element)) {
        // some elements may be keyboard focusable, but not script focusable
        return false;
    }
    // elements that are not rendered, cannot be focused
    if (!except.visible) {
        var visibilityOptions = {
            context: element,
            except: {}
        };
        if (supports$5.focusInHiddenIframe) {
            // WebKit and Blink can focus content in hidden <iframe> and <object>
            visibilityOptions.except.browsingContext = true;
        }
        if (supports$5.focusObjectSvgHidden) {
            // Blink allows focusing the object element, even if it has visibility: hidden;
            // @browser-issue Blink https://code.google.com/p/chromium/issues/detail?id=586191
            var _nodeName2 = element.nodeName.toLowerCase();
            if (_nodeName2 === 'object') {
                visibilityOptions.except.cssVisibility = true;
            }
        }
        if (!isVisible.rules(visibilityOptions)) {
            return false;
        }
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        var _nodeName = frameElement.nodeName.toLowerCase();
        if (_nodeName === 'object' && !supports$5.focusInZeroDimensionObject) {
            if (!frameElement.offsetWidth || !frameElement.offsetHeight) {
                // WebKit can not focus content in <object> if it doesn't have dimensions
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    if (nodeName === 'svg' && supports$5.focusSvgInIframe && !frameElement && element.getAttribute('tabindex') === null) {
        return false;
    }
    return true;
}
// bind exceptions to an iterator callback
isFocusableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isFocusable = function isFocusable(context) {
        return isFocusableRules({
            context: context,
            except: except
        });
    };
    isFocusable.rules = isFocusableRules;
    return isFocusable;
};
// provide isFocusRelevant(context) as default iterator callback
var isFocusable = isFocusableRules.except({});
function createFilter(condition) {
    // see https://developer.mozilla.org/docs/Web/API/NodeFilter
    var filter = function filter(node) {
        if (node.shadowRoot) {
            // return ShadowRoot elements regardless of them being focusable,
            // so they can be walked recursively later
            return NodeFilter.FILTER_ACCEPT;
        }
        if (condition(node)) {
            // finds elements that could have been found by document.querySelectorAll()
            return NodeFilter.FILTER_ACCEPT;
        }
        return NodeFilter.FILTER_SKIP;
    };
    // IE requires a function, Browsers require {acceptNode: function}
    // see http://www.bennadel.com/blog/2607-finding-html-comment-nodes-in-the-dom-using-treewalker.htm
    filter.acceptNode = filter;
    return filter;
}
var PossiblyFocusableFilter = createFilter(isFocusRelevant);
function queryFocusableStrict() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!context) {
        context = document.documentElement;
    }
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var _document = getDocument(context);
    // see https://developer.mozilla.org/docs/Web/API/Document/createTreeWalker
    var walker = _document.createTreeWalker(context, NodeFilter.SHOW_ELEMENT, strategy === 'all' ? PossiblyFocusableFilter : createFilter(_isFocusable), false);
    var list = [];
    while(walker.nextNode()){
        if (walker.currentNode.shadowRoot) {
            if (_isFocusable(walker.currentNode)) {
                list.push(walker.currentNode);
            }
            list = list.concat(queryFocusableStrict({
                context: walker.currentNode.shadowRoot,
                includeOnlyTabbable: includeOnlyTabbable,
                strategy: strategy
            }));
        } else {
            list.push(walker.currentNode);
        }
    }
    // add context if requested and focusable
    if (includeContext) {
        if (strategy === 'all') {
            if (isFocusRelevant(context)) {
                list.unshift(context);
            }
        } else if (_isFocusable(context)) {
            list.unshift(context);
        }
    }
    return list;
}
// NOTE: this selector MUST *never* be used directly,
var supports$6 = void 0;
var selector$1 = void 0;
function selector$2() {
    if (!supports$6) {
        supports$6 = _supports();
    }
    if (typeof selector$1 === 'string') {
        return selector$1;
    }
    // https://www.w3.org/TR/html5/editing.html#sequential-focus-navigation-and-the-tabindex-attribute
    selector$1 = '' + // IE11 supports.can focus <table> and <td>
    (supports$6.focusTable ? 'table, td,' : '') + // IE11 supports.can focus <fieldset>
    (supports$6.focusFieldset ? 'fieldset,' : '') + // Namespace problems of [xlink:href] explained in https://stackoverflow.com/a/23047888/515124
    // svg a[*|href] does not match in IE9, but since we're filtering
    // through is/focusable we can include all <a> from SVG
    'svg a,' + // may behave as 'svg, svg *,' in chrome as *every* svg element with a focus event listener is focusable
    // navigational elements
    'a[href],' + // validity determined by is/valid-area.js
    'area[href],' + // validity determined by is/disabled.js
    'input, select, textarea, button,' + // browsing context containers
    'iframe, object, embed,' + // interactive content
    'keygen,' + (supports$6.focusAudioWithoutControls ? 'audio,' : 'audio[controls],') + (supports$6.focusVideoWithoutControls ? 'video,' : 'video[controls],') + (supports$6.focusSummary ? 'summary,' : '') + // validity determined by is/valid-tabindex.js
    '[tabindex],' + // editing hosts
    '[contenteditable]';
    // where ShadowDOM is supported, we also want the shadowed focusable elements (via ">>>" or "/deep/")
    selector$1 = selectInShadows(selector$1);
    return selector$1;
}
function queryFocusableQuick() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable;
    var _selector = selector$2();
    var elements = context.querySelectorAll(_selector);
    // the selector potentially matches more than really is focusable
    var _isFocusable = isFocusable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    var result = [].filter.call(elements, _isFocusable);
    // add context if requested and focusable
    if (includeContext && _isFocusable(context)) {
        result.unshift(context);
    }
    return result;
}
function queryFocusable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, _ref$strategy = _ref.strategy, strategy = _ref$strategy === undefined ? 'quick' : _ref$strategy;
    var element = contextToElement({
        label: 'query/focusable',
        resolveDocument: true,
        defaultToDocument: true,
        context: context
    });
    var options = {
        context: element,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    };
    if (strategy === 'quick') {
        return queryFocusableQuick(options);
    } else if (strategy === 'strict' || strategy === 'all') {
        return queryFocusableStrict(options);
    }
    throw Object.defineProperty(new TypeError('query/focusable requires option.strategy to be one of ["quick", "strict", "all"]'), "__NEXT_ERROR_CODE", {
        value: "E594",
        enumerable: false
    });
}
var supports$7 = void 0;
// Internet Explorer 11 considers fieldset, table, td focusable, but not tabbable
// Internet Explorer 11 considers body to have [tabindex=0], but does not allow tabbing to it
var focusableElementsPattern = /^(fieldset|table|td|body)$/;
function isTabbableRules() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, _ref$except = _ref.except, except = _ref$except === undefined ? {
        flexbox: false,
        scrollable: false,
        shadow: false,
        visible: false,
        onlyTabbable: false
    } : _ref$except;
    if (!supports$7) {
        supports$7 = _supports();
    }
    var element = contextToElement({
        label: 'is/tabbable',
        resolveDocument: true,
        context: context
    });
    if (platform.is.BLINK && platform.is.ANDROID && platform.majorVersion > 42) {
        // External keyboard support worked fine in CHrome 42, but stopped working in Chrome 45.
        // The on-screen keyboard does not provide a way to focus the next input element (like iOS does).
        // That leaves us with no option to advance focus by keyboard, ergo nothing is tabbable (keyboard focusable).
        return false;
    }
    var frameElement = getFrameElement(element);
    if (frameElement) {
        if (platform.is.WEBKIT && platform.is.IOS) {
            // iOS only does not consider anything from another browsing context keyboard focusable
            return false;
        }
        // iframe[tabindex="-1"] and object[tabindex="-1"] inherit the
        // tabbable demotion onto elements of their browsing contexts
        if (tabindexValue(frameElement) < 0) {
            return false;
        }
        if (!except.visible && (platform.is.BLINK || platform.is.WEBKIT) && !isVisible(frameElement)) {
            // Blink and WebKit consider elements in hidden browsing contexts focusable, but not tabbable
            return false;
        }
        // Webkit and Blink don't consider anything in <object> tabbable
        // Blink fixed that fixed in Chrome 54, Opera 41
        var frameNodeName = frameElement.nodeName.toLowerCase();
        if (frameNodeName === 'object') {
            var isFixedBlink = platform.name === 'Chrome' && platform.majorVersion >= 54 || platform.name === 'Opera' && platform.majorVersion >= 41;
            if (platform.is.WEBKIT || platform.is.BLINK && !isFixedBlink) {
                return false;
            }
        }
    }
    var nodeName = element.nodeName.toLowerCase();
    var _tabindex = tabindexValue(element);
    var tabindex = _tabindex === null ? null : _tabindex >= 0;
    if (platform.is.EDGE && platform.majorVersion >= 14 && frameElement && element.ownerSVGElement && _tabindex < 0) {
        // Edge 14+ considers <a xlink:href="…" tabindex="-1"> keyboard focusable
        // if the element is in a nested browsing context
        return true;
    }
    var hasTabbableTabindexOrNone = tabindex !== false;
    var hasTabbableTabindex = _tabindex !== null && _tabindex >= 0;
    // NOTE: Firefox 31 considers [contenteditable] to have [tabindex=-1], but allows tabbing to it
    // fixed in Firefox 40 the latest - https://bugzilla.mozilla.org/show_bug.cgi?id=1185657
    if (element.hasAttribute('contenteditable')) {
        // tabbing can still be disabled by explicitly providing [tabindex="-1"]
        return hasTabbableTabindexOrNone;
    }
    if (focusableElementsPattern.test(nodeName) && tabindex !== true) {
        return false;
    }
    if (platform.is.WEBKIT && platform.is.IOS) {
        // iOS only considers a hand full of elements tabbable (keyboard focusable)
        // this holds true even with external keyboards
        var potentiallyTabbable = nodeName === 'input' && element.type === 'text' || element.type === 'password' || nodeName === 'select' || nodeName === 'textarea' || element.hasAttribute('contenteditable');
        if (!potentiallyTabbable) {
            var style = window.getComputedStyle(element, null);
            potentiallyTabbable = isUserModifyWritable(style);
        }
        if (!potentiallyTabbable) {
            return false;
        }
    }
    if (nodeName === 'use' && _tabindex !== null) {
        if (platform.is.BLINK || platform.is.WEBKIT && platform.majorVersion === 9) {
            // In Chrome and Safari 9 the <use> element is keyboard focusable even for tabindex="-1"
            return true;
        }
    }
    if (elementMatches(element, 'svg a') && element.hasAttribute('xlink:href')) {
        if (hasTabbableTabindexOrNone) {
            // in Trident and Gecko SVGElement does not handle the tabIndex property properly
            return true;
        }
        if (element.focus && !supports$7.focusSvgNegativeTabindexAttribute) {
            // Firefox 51 and 52 treat any natively tabbable SVG element with
            // tabindex="-1" as tabbable and everything else as inert
            // see https://bugzilla.mozilla.org/show_bug.cgi?id=1302340
            return true;
        }
    }
    if (nodeName === 'svg' && supports$7.focusSvgInIframe && hasTabbableTabindexOrNone) {
        return true;
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        if (nodeName === 'svg') {
            if (supports$7.focusSvg) {
                // older Internet Explorers consider <svg> keyboard focusable
                // unless they have focsable="false", but then they wouldn't
                // be focusable and thus not even reach this filter
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable') || hasTabbableTabindex;
        }
        if (element.ownerSVGElement) {
            if (supports$7.focusSvgTabindexAttribute && hasTabbableTabindex) {
                return true;
            }
            // elements that have [focusable] are automatically keyboard focusable regardless of the attribute's value
            return element.hasAttribute('focusable');
        }
    }
    if (element.tabIndex === undefined) {
        return Boolean(except.onlyTabbable);
    }
    if (nodeName === 'audio') {
        if (!element.hasAttribute('controls')) {
            // In Internet Explorer the <audio> element is focusable, but not tabbable, and tabIndex property is wrong
            return false;
        } else if (platform.is.BLINK) {
            // In Chrome <audio controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'video') {
        if (!element.hasAttribute('controls')) {
            if (platform.is.TRIDENT || platform.is.EDGE) {
                // In Internet Explorer and Edge the <video> element is focusable, but not tabbable, and tabIndex property is wrong
                return false;
            }
        } else if (platform.is.BLINK || platform.is.GECKO) {
            // In Chrome and Firefox <video controls tabindex="-1"> remains keyboard focusable
            return true;
        }
    }
    if (nodeName === 'object') {
        if (platform.is.BLINK || platform.is.WEBKIT) {
            // In all Blink and WebKit based browsers <embed> and <object> are never keyboard focusable, even with tabindex="0" set
            return false;
        }
    }
    if (nodeName === 'iframe') {
        // In Internet Explorer all iframes are only focusable
        // In WebKit, Blink and Gecko iframes may be tabbable depending on content.
        // Since we can't reliably investigate iframe documents because of the
        // SameOriginPolicy, we're declaring everything only focusable.
        return false;
    }
    if (!except.scrollable && platform.is.GECKO) {
        // Firefox considers scrollable containers keyboard focusable,
        // even though their tabIndex property is -1
        var _style = window.getComputedStyle(element, null);
        if (hasCssOverflowScroll(_style)) {
            return hasTabbableTabindexOrNone;
        }
    }
    if (platform.is.TRIDENT || platform.is.EDGE) {
        // IE and Edge degrade <area> to script focusable, if the image
        // using the <map> has been given tabindex="-1"
        if (nodeName === 'area') {
            var img = getImageOfArea(element);
            if (img && tabindexValue(img) < 0) {
                return false;
            }
        }
        var _style2 = window.getComputedStyle(element, null);
        if (isUserModifyWritable(_style2)) {
            // prevent being swallowed by the overzealous isScrollableContainer() below
            return element.tabIndex >= 0;
        }
        if (!except.flexbox && hasCssDisplayFlex(_style2)) {
            if (_tabindex !== null) {
                return hasTabbableTabindex;
            }
            return isFocusRelevantWithoutFlexbox(element) && isTabbableWithoutFlexbox(element);
        }
        // IE considers scrollable containers script focusable only,
        // even though their tabIndex property is 0
        if (isScrollableContainer(element, nodeName)) {
            return false;
        }
        var parent = element.parentElement;
        if (parent) {
            var parentNodeName = parent.nodeName.toLowerCase();
            var parentStyle = window.getComputedStyle(parent, null);
            // IE considers scrollable bodies script focusable only,
            if (isScrollableContainer(parent, nodeName, parentNodeName, parentStyle)) {
                return false;
            }
            // Children of focusable elements with display:flex are focusable in IE10-11,
            // even though their tabIndex property suggests otherwise
            if (hasCssDisplayFlex(parentStyle)) {
                // value of tabindex takes precedence
                return hasTabbableTabindex;
            }
        }
    }
    // https://www.w3.org/WAI/PF/aria-practices/#focus_tabindex
    return element.tabIndex >= 0;
}
// bind exceptions to an iterator callback
isTabbableRules.except = function() {
    var except = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var isTabbable = function isTabbable(context) {
        return isTabbableRules({
            context: context,
            except: except
        });
    };
    isTabbable.rules = isTabbableRules;
    return isTabbable;
};
var isFocusRelevantWithoutFlexbox = isFocusRelevant.rules.except({
    flexbox: true
});
var isTabbableWithoutFlexbox = isTabbableRules.except({
    flexbox: true
});
// provide isTabbable(context) as default iterator callback
var isTabbable = isTabbableRules.except({});
function queryTabbable() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    var _isTabbable = isTabbable.rules.except({
        onlyTabbable: includeOnlyTabbable
    });
    return queryFocusable({
        context: context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    }).filter(_isTabbable);
}
// sorts a list of elements according to their order in the DOM
function compareDomPosition(a, b) {
    return a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1;
}
function sortDomOrder(elements) {
    return elements.sort(compareDomPosition);
}
function getFirstSuccessorOffset(list, target) {
    // find the first element that comes AFTER the target element
    return findIndex(list, function(element) {
        return target.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_FOLLOWING;
    });
}
function findInsertionOffsets(list, elements, resolveElement) {
    // instead of mutating the elements list directly, remember position and map
    // to inject later, when we can do this more efficiently
    var insertions = [];
    elements.forEach(function(element) {
        var replace = true;
        var offset = list.indexOf(element);
        if (offset === -1) {
            // element is not in target list
            offset = getFirstSuccessorOffset(list, element);
            replace = false;
        }
        if (offset === -1) {
            // there is no successor in the tabsequence,
            // meaning the image must be the last element
            offset = list.length;
        }
        // allow the consumer to replace the injected element
        var injections = nodeArray(resolveElement ? resolveElement(element) : element);
        if (!injections.length) {
            // we can't inject zero elements
            return;
        }
        insertions.push({
            offset: offset,
            replace: replace,
            elements: injections
        });
    });
    return insertions;
}
function insertElementsAtOffsets(list, insertions) {
    // remember the number of elements we have already injected
    // so we account for the caused index offset
    var inserted = 0;
    // make sure that we insert the elements in sequence,
    // otherwise the offset compensation won't work
    insertions.sort(function(a, b) {
        return a.offset - b.offset;
    });
    insertions.forEach(function(insertion) {
        // array.splice has an annoying function signature :(
        var remove = insertion.replace ? 1 : 0;
        var args = [
            insertion.offset + inserted,
            remove
        ].concat(insertion.elements);
        list.splice.apply(list, args);
        inserted += insertion.elements.length - remove;
    });
}
function mergeInDomOrder() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, list = _ref.list, elements = _ref.elements, resolveElement = _ref.resolveElement;
    // operate on a copy so we don't mutate the original array
    var _list = list.slice(0);
    // make sure the elements we're injecting are provided in DOM order
    var _elements = nodeArray(elements).slice(0);
    sortDomOrder(_elements);
    // find the offsets within the target array (list) at which to inject
    // each individual element (from elements)
    var insertions = findInsertionOffsets(_list, _elements, resolveElement);
    // actually inject the elements into the target array at the identified positions
    insertElementsAtOffsets(_list, insertions);
    return _list;
}
var _createClass = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw Object.defineProperty(new TypeError('Cannot call a class as a function'), "__NEXT_ERROR_CODE", {
            value: "E601",
            enumerable: false
        });
    }
}
var Maps = function() {
    function Maps(context) {
        _classCallCheck(this, Maps);
        this._document = getDocument(context);
        this.maps = {};
    }
    _createClass(Maps, [
        {
            key: 'getAreasFor',
            value: function getAreasFor(name) {
                if (!this.maps[name]) {
                    // the map is not defined within the context, so we
                    // have to go find it elsewhere in the document
                    this.addMapByName(name);
                }
                return this.maps[name];
            }
        },
        {
            key: 'addMapByName',
            value: function addMapByName(name) {
                var map = getMapByName(name, this._document);
                if (!map) {
                    // if there is no map, the img[usemap] wasn't doing anything anyway
                    return;
                }
                this.maps[map.name] = queryTabbable({
                    context: map
                });
            }
        },
        {
            key: 'extractAreasFromList',
            value: function extractAreasFromList(elements) {
                // remove all <area> elements from the elements list,
                // but put them the map for later retrieval
                return elements.filter(function(element) {
                    var nodeName = element.nodeName.toLowerCase();
                    if (nodeName !== 'area') {
                        return true;
                    }
                    var map = element.parentNode;
                    if (!this.maps[map.name]) {
                        this.maps[map.name] = [];
                    }
                    this.maps[map.name].push(element);
                    return false;
                }, this);
            }
        }
    ]);
    return Maps;
}();
function sortArea(elements, context) {
    // images - unless they are focusable themselves, likely not
    // part of the elements list, so we'll have to find them and
    // sort them into the elements list manually
    var usemaps = context.querySelectorAll('img[usemap]');
    var maps = new Maps(context);
    // remove all <area> elements from the elements list,
    // but put them the map for later retrieval
    var _elements = maps.extractAreasFromList(elements);
    if (!usemaps.length) {
        // the context does not contain any <area>s so no need
        // to replace anything, just remove any maps
        return _elements;
    }
    return mergeInDomOrder({
        list: _elements,
        elements: usemaps,
        resolveElement: function resolveElement(image) {
            var name = image.getAttribute('usemap').slice(1);
            return maps.getAreasFor(name);
        }
    });
}
var _createClass$1 = function() {
    function defineProperties(target, props) {
        for(var i = 0; i < props.length; i++){
            var descriptor = props[i];
            descriptor.enumerable = descriptor.enumerable || false;
            descriptor.configurable = true;
            if ('value' in descriptor) descriptor.writable = true;
            Object.defineProperty(target, descriptor.key, descriptor);
        }
    }
    return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
    };
}();
function _classCallCheck$1(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw Object.defineProperty(new TypeError('Cannot call a class as a function'), "__NEXT_ERROR_CODE", {
            value: "E601",
            enumerable: false
        });
    }
}
var Shadows = function() {
    function Shadows(context, sortElements) {
        _classCallCheck$1(this, Shadows);
        // document context we're working with
        this.context = context;
        // callback that sorts an array of elements
        this.sortElements = sortElements;
        // reference to create unique IDs for each ShadowHost
        this.hostCounter = 1;
        // reference map for child-ShadowHosts of a ShadowHost
        this.inHost = {};
        // reference map for child-ShadowHost of the document
        this.inDocument = [];
        // reference map for ShadowHosts
        this.hosts = {};
        // reference map for tabbable elements of a ShadowHost
        this.elements = {};
    }
    // remember which hosts we have to sort within later
    _createClass$1(Shadows, [
        {
            key: '_registerHost',
            value: function _registerHost(host) {
                if (host._sortingId) {
                    return;
                }
                // make the ShadowHost identifiable (see cleanup() for undo)
                host._sortingId = 'shadow-' + this.hostCounter++;
                this.hosts[host._sortingId] = host;
                // hosts may contain other hosts
                var parentHost = getShadowHost({
                    context: host
                });
                if (parentHost) {
                    this._registerHost(parentHost);
                    this._registerHostParent(host, parentHost);
                } else {
                    this.inDocument.push(host);
                }
            }
        },
        {
            key: '_registerHostParent',
            value: function _registerHostParent(host, parent) {
                if (!this.inHost[parent._sortingId]) {
                    this.inHost[parent._sortingId] = [];
                }
                this.inHost[parent._sortingId].push(host);
            }
        },
        {
            key: '_registerElement',
            value: function _registerElement(element, host) {
                if (!this.elements[host._sortingId]) {
                    this.elements[host._sortingId] = [];
                }
                this.elements[host._sortingId].push(element);
            }
        },
        {
            key: 'extractElements',
            value: function extractElements(elements) {
                return elements.filter(function(element) {
                    var host = getShadowHost({
                        context: element
                    });
                    if (!host) {
                        return true;
                    }
                    this._registerHost(host);
                    this._registerElement(element, host);
                    return false;
                }, this);
            }
        },
        {
            key: 'sort',
            value: function sort(elements) {
                var _elements = this._injectHosts(elements);
                _elements = this._replaceHosts(_elements);
                this._cleanup();
                return _elements;
            }
        },
        {
            key: '_injectHosts',
            value: function _injectHosts(elements) {
                Object.keys(this.hosts).forEach(function(_sortingId) {
                    var _list = this.elements[_sortingId];
                    var _elements = this.inHost[_sortingId];
                    var _context = this.hosts[_sortingId].shadowRoot;
                    this.elements[_sortingId] = this._merge(_list, _elements, _context);
                }, this);
                return this._merge(elements, this.inDocument, this.context);
            }
        },
        {
            key: '_merge',
            value: function _merge(list, elements, context) {
                var merged = mergeInDomOrder({
                    list: list,
                    elements: elements
                });
                return this.sortElements(merged, context);
            }
        },
        {
            key: '_replaceHosts',
            value: function _replaceHosts(elements) {
                return mergeInDomOrder({
                    list: elements,
                    elements: this.inDocument,
                    resolveElement: this._resolveHostElement.bind(this)
                });
            }
        },
        {
            key: '_resolveHostElement',
            value: function _resolveHostElement(host) {
                var merged = mergeInDomOrder({
                    list: this.elements[host._sortingId],
                    elements: this.inHost[host._sortingId],
                    resolveElement: this._resolveHostElement.bind(this)
                });
                var _tabindex = tabindexValue(host);
                if (_tabindex !== null && _tabindex > -1) {
                    return [
                        host
                    ].concat(merged);
                }
                return merged;
            }
        },
        {
            key: '_cleanup',
            value: function _cleanup() {
                // remove those identifers we put on the ShadowHost to avoid using Map()
                Object.keys(this.hosts).forEach(function(key) {
                    delete this.hosts[key]._sortingId;
                }, this);
            }
        }
    ]);
    return Shadows;
}();
function sortShadowed(elements, context, sortElements) {
    var shadows = new Shadows(context, sortElements);
    var _elements = shadows.extractElements(elements);
    if (_elements.length === elements.length) {
        // no shadowed content found, no need to continue
        return sortElements(elements);
    }
    return shadows.sort(_elements);
}
function sortTabindex(elements) {
    // https://developer.mozilla.org/docs/Web/API/HTMLElement.tabIndex
    // elements with tabIndex "0" (including tabbableElements without tabIndex) should be navigated in the order they appear.
    // elements with a positive tabIndex:
    //   Elements that have identical tabIndexes should be navigated in the order they appear.
    //   Navigation proceeds from the lowest tabIndex to the highest tabIndex.
    // NOTE: sort implementation may be unstable and thus mess up DOM order,
    // that's why we build a map that's being sorted instead. If we were able to rely
    // on a stable sorting algorithm, sortTabindex() could be as simple as
    // elements.sort(function(a, b) { return a.tabIndex - b.tabIndex; });
    // at this time Chrome does not use a stable sorting algorithm
    // see http://blog.rodneyrehm.de/archives/14-Sorting-Were-Doing-It-Wrong.html#stability
    // NOTE: compareDocumentPosition seemed like more overhead than just sorting this with buckets
    // https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
    var map = {};
    var indexes = [];
    var normal = elements.filter(function(element) {
        // in Trident and Gecko SVGElement does not know about the tabIndex property
        var tabIndex = element.tabIndex;
        if (tabIndex === undefined) {
            tabIndex = tabindexValue(element);
        }
        // extract elements that don't need sorting
        if (tabIndex <= 0 || tabIndex === null || tabIndex === undefined) {
            return true;
        }
        if (!map[tabIndex]) {
            // create sortable bucket for dom-order-preservation of elements with the same tabIndex
            map[tabIndex] = [];
            // maintain a list of unique tabIndexes
            indexes.push(tabIndex);
        }
        // sort element into the proper bucket
        map[tabIndex].push(element);
        // element moved to sorting map, so not "normal" anymore
        return false;
    });
    // sort the tabindex ascending,
    // then resolve them to their appropriate buckets,
    // then flatten the array of arrays to an array
    var _elements = indexes.sort().map(function(tabIndex) {
        return map[tabIndex];
    }).reduceRight(function(previous, current) {
        return current.concat(previous);
    }, normal);
    return _elements;
}
var supports$8 = void 0;
function moveContextToBeginning(elements, context) {
    var pos = elements.indexOf(context);
    if (pos > 0) {
        var tmp = elements.splice(pos, 1);
        return tmp.concat(elements);
    }
    return elements;
}
function sortElements(elements, _context) {
    if (supports$8.tabsequenceAreaAtImgPosition) {
        // Some browsers sort <area> in DOM order, some place the <area>s
        // where the <img> referecing them would've been in DOM order.
        // https://github.com/medialize/ally.js/issues/5
        elements = sortArea(elements, _context);
    }
    elements = sortTabindex(elements);
    return elements;
}
function queryTabsequence() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, context = _ref.context, includeContext = _ref.includeContext, includeOnlyTabbable = _ref.includeOnlyTabbable, strategy = _ref.strategy;
    if (!supports$8) {
        supports$8 = _supports();
    }
    var _context = nodeArray(context)[0] || document.documentElement;
    var elements = queryTabbable({
        context: _context,
        includeContext: includeContext,
        includeOnlyTabbable: includeOnlyTabbable,
        strategy: strategy
    });
    if (document.body.createShadowRoot && platform.is.BLINK) {
        // sort tabindex localized to shadow dom
        // see https://github.com/medialize/ally.js/issues/6
        elements = sortShadowed(elements, _context, sortElements);
    } else {
        elements = sortElements(elements, _context);
    }
    if (includeContext) {
        // if we include the context itself, it has to be the first
        // element of the sequence
        elements = moveContextToBeginning(elements, _context);
    }
    return elements;
}
// codes mostly cloned from https://github.com/keithamus/jwerty/blob/master/jwerty.js
// deliberately not exposing characters like <,.-#* because they vary *wildly*
// across keyboard layouts and may cause various problems
// (e.g. "*" is "Shift +" on a German Mac keyboard)
// (e.g. "@" is "Alt L" on a German Mac keyboard)
var keycode = {
    // Element Focus
    tab: 9,
    // Navigation
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    pageUp: 33,
    'page-up': 33,
    pageDown: 34,
    'page-down': 34,
    end: 35,
    home: 36,
    // Action
    enter: 13,
    escape: 27,
    space: 32,
    // Modifier
    shift: 16,
    capsLock: 20,
    'caps-lock': 20,
    ctrl: 17,
    alt: 18,
    meta: 91,
    // in firefox: 224
    // on mac (chrome): meta-left=91, meta-right=93
    // on win (IE11): meta-left=91, meta-right=92
    pause: 19,
    // Content Manipulation
    insert: 45,
    delete: 46,
    backspace: 8,
    // the same logical key may be identified through different keyCodes
    _alias: {
        91: [
            92,
            93,
            224
        ]
    }
};
// Function keys (112 - 137)
// NOTE: not every keyboard knows F13+
for(var n = 1; n < 26; n++){
    keycode['f' + n] = n + 111;
}
// Number keys (48-57, numpad 96-105)
// NOTE: not every keyboard knows num-0+
for(var _n = 0; _n < 10; _n++){
    var code = _n + 48;
    var numCode = _n + 96;
    keycode[_n] = code;
    keycode['num-' + _n] = numCode;
    keycode._alias[code] = [
        numCode
    ];
}
// Latin characters (65 - 90)
for(var _n2 = 0; _n2 < 26; _n2++){
    var _code = _n2 + 65;
    var name$1 = String.fromCharCode(_code).toLowerCase();
    keycode[name$1] = _code;
}
var modifier = {
    alt: 'altKey',
    ctrl: 'ctrlKey',
    meta: 'metaKey',
    shift: 'shiftKey'
};
var modifierSequence = Object.keys(modifier).map(function(name) {
    return modifier[name];
});
function createExpectedModifiers(ignoreModifiers) {
    var value = ignoreModifiers ? null : false;
    return {
        altKey: value,
        ctrlKey: value,
        metaKey: value,
        shiftKey: value
    };
}
function resolveModifiers(modifiers) {
    var ignoreModifiers = modifiers.indexOf('*') !== -1;
    var expected = createExpectedModifiers(ignoreModifiers);
    modifiers.forEach(function(token) {
        if (token === '*') {
            // we've already covered the all-in operator
            return;
        }
        // we want the modifier pressed
        var value = true;
        var operator = token.slice(0, 1);
        if (operator === '?') {
            // we don't care if the modifier is pressed
            value = null;
        } else if (operator === '!') {
            // we do not want the modifier pressed
            value = false;
        }
        if (value !== true) {
            // compensate for the modifier's operator
            token = token.slice(1);
        }
        var propertyName = modifier[token];
        if (!propertyName) {
            throw Object.defineProperty(new TypeError('Unknown modifier "' + token + '"'), "__NEXT_ERROR_CODE", {
                value: "E530",
                enumerable: false
            });
        }
        expected[propertyName] = value;
    });
    return expected;
}
function resolveKey(key) {
    var code = keycode[key] || parseInt(key, 10);
    if (!code || typeof code !== 'number' || isNaN(code)) {
        throw Object.defineProperty(new TypeError('Unknown key "' + key + '"'), "__NEXT_ERROR_CODE", {
            value: "E536",
            enumerable: false
        });
    }
    return [
        code
    ].concat(keycode._alias[code] || []);
}
function matchModifiers(expected, event) {
    // returns true on match
    return !modifierSequence.some(function(prop) {
        // returns true on mismatch
        return typeof expected[prop] === 'boolean' && Boolean(event[prop]) !== expected[prop];
    });
}
function keyBinding(text) {
    return text.split(/\s+/).map(function(_text) {
        var tokens = _text.split('+');
        var _modifiers = resolveModifiers(tokens.slice(0, -1));
        var _keyCodes = resolveKey(tokens.slice(-1));
        return {
            keyCodes: _keyCodes,
            modifiers: _modifiers,
            matchModifiers: matchModifiers.bind(null, _modifiers)
        };
    });
}
// Node.compareDocumentPosition is available since IE9
// see https://developer.mozilla.org/docs/Web/API/Node.compareDocumentPosition
// callback returns true when element is contained by parent or is the parent suited for use with Array.some()
/*
  USAGE:
    var isChildOf = getParentComparator({parent: someNode});
    listOfElements.some(isChildOf)
*/ function getParentComparator() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {}, parent = _ref.parent, element = _ref.element, includeSelf = _ref.includeSelf;
    if (parent) {
        return function isChildOf(node) {
            return Boolean(includeSelf && node === parent || parent.compareDocumentPosition(node) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    } else if (element) {
        return function isParentOf(node) {
            return Boolean(includeSelf && element === node || node.compareDocumentPosition(element) & Node.DOCUMENT_POSITION_CONTAINED_BY);
        };
    }
    throw Object.defineProperty(new TypeError('util/compare-position#getParentComparator required either options.parent or options.element'), "__NEXT_ERROR_CODE", {
        value: "E578",
        enumerable: false
    });
}
// Bug 286933 - Key events in the autocomplete popup should be hidden from page scripts
// @browser-issue Gecko https://bugzilla.mozilla.org/show_bug.cgi?id=286933
function whenKey() {
    var map = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var bindings = {};
    var context = nodeArray(map.context)[0] || document.documentElement;
    delete map.context;
    var filter = nodeArray(map.filter);
    delete map.filter;
    var mapKeys = Object.keys(map);
    if (!mapKeys.length) {
        throw Object.defineProperty(new TypeError('when/key requires at least one option key'), "__NEXT_ERROR_CODE", {
            value: "E566",
            enumerable: false
        });
    }
    var registerBinding = function registerBinding(event) {
        event.keyCodes.forEach(function(code) {
            if (!bindings[code]) {
                bindings[code] = [];
            }
            bindings[code].push(event);
        });
    };
    mapKeys.forEach(function(text) {
        if (typeof map[text] !== 'function') {
            throw Object.defineProperty(new TypeError('when/key requires option["' + text + '"] to be a function'), "__NEXT_ERROR_CODE", {
                value: "E595",
                enumerable: false
            });
        }
        var addCallback = function addCallback(event) {
            event.callback = map[text];
            return event;
        };
        keyBinding(text).map(addCallback).forEach(registerBinding);
    });
    var handleKeyDown = function handleKeyDown(event) {
        if (event.defaultPrevented) {
            return;
        }
        if (filter.length) {
            // ignore elements within the exempted sub-trees
            var isParentOfElement = getParentComparator({
                element: event.target,
                includeSelf: true
            });
            if (filter.some(isParentOfElement)) {
                return;
            }
        }
        var key = event.keyCode || event.which;
        if (!bindings[key]) {
            return;
        }
        bindings[key].forEach(function(_event) {
            if (!_event.matchModifiers(event)) {
                return;
            }
            _event.callback.call(context, event, disengage);
        });
    };
    context.addEventListener('keydown', handleKeyDown, false);
    var disengage = function disengage() {
        context.removeEventListener('keydown', handleKeyDown, false);
    };
    return {
        disengage: disengage
    };
}
function _default(param) {
    let { context } = param === void 0 ? {} : param;
    if (!context) {
        context = document.documentElement;
    }
    // Make sure the supports tests are run before intercepting the Tab key,
    // or IE10 and IE11 will fail to process the first Tab key event. Not
    // limiting this warm-up to IE because it may be a problem elsewhere, too.
    queryTabsequence();
    return whenKey({
        // Safari on OSX may require ALT+TAB to reach links,
        // see https://github.com/medialize/ally.js/issues/146
        '?alt+?shift+tab': function altShiftTab(event) {
            // we're completely taking over the Tab key handling
            event.preventDefault();
            var sequence = queryTabsequence({
                context: context
            });
            var backward = event.shiftKey;
            var first = sequence[0];
            var last = sequence[sequence.length - 1];
            // wrap around first to last, last to first
            var source = backward ? first : last;
            var target = backward ? last : first;
            if (isActiveElement(source)) {
                target.focus();
                return;
            }
            // find current position in tabsequence
            var currentIndex = void 0;
            var found = sequence.some(function(element, index) {
                if (!isActiveElement(element)) {
                    return false;
                }
                currentIndex = index;
                return true;
            });
            if (!found) {
                // redirect to first as we're not in our tabsequence
                first.focus();
                return;
            }
            // shift focus to previous/next element in the sequence
            var offset = backward ? -1 : 1;
            sequence[currentIndex + offset].focus();
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=maintain--tab-focus.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/body-locker.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    lock: null,
    unlock: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    lock: function() {
        return lock;
    },
    unlock: function() {
        return unlock;
    }
});
let previousBodyPaddingRight;
let previousBodyOverflowSetting;
let activeLocks = 0;
function lock() {
    setTimeout(()=>{
        if (activeLocks++ > 0) {
            return;
        }
        const scrollBarGap = window.innerWidth - document.documentElement.clientWidth;
        if (scrollBarGap > 0) {
            previousBodyPaddingRight = document.body.style.paddingRight;
            document.body.style.paddingRight = "" + scrollBarGap + "px";
        }
        previousBodyOverflowSetting = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
    });
}
function unlock() {
    setTimeout(()=>{
        if (activeLocks === 0 || --activeLocks !== 0) {
            return;
        }
        if (previousBodyPaddingRight !== undefined) {
            document.body.style.paddingRight = previousBodyPaddingRight;
            previousBodyPaddingRight = undefined;
        }
        if (previousBodyOverflowSetting !== undefined) {
            document.body.style.overflow = previousBodyOverflowSetting;
            previousBodyOverflowSetting = undefined;
        }
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=body-locker.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/Overlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return Overlay;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _maintaintabfocus = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/maintain--tab-focus.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _bodylocker = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/body-locker.js [client] (ecmascript)");
const Overlay = function Overlay(param) {
    let { className, children, fixed } = param;
    _react.useEffect({
        "Overlay.useEffect": ()=>{
            (0, _bodylocker.lock)();
            return ({
                "Overlay.useEffect": ()=>{
                    (0, _bodylocker.unlock)();
                }
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], []);
    const [overlay, setOverlay] = _react.useState(null);
    const onOverlay = _react.useCallback({
        "Overlay.useCallback[onOverlay]": (el)=>{
            setOverlay(el);
        }
    }["Overlay.useCallback[onOverlay]"], []);
    _react.useEffect({
        "Overlay.useEffect": ()=>{
            if (overlay == null) {
                return;
            }
            const handle2 = (0, _maintaintabfocus.default)({
                context: overlay
            });
            return ({
                "Overlay.useEffect": ()=>{
                    handle2.disengage();
                }
            })["Overlay.useEffect"];
        }
    }["Overlay.useEffect"], [
        overlay
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-dialog-overlay": true,
        className: className,
        ref: onOverlay,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                "data-nextjs-dialog-backdrop": true,
                "data-nextjs-dialog-backdrop-fixed": fixed ? true : undefined
            }),
            children
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Overlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Overlay", {
    enumerable: true,
    get: function() {
        return _Overlay.Overlay;
    }
});
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/Overlay.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-container-build-error-version-status {\n    flex: 1;\n    text-align: right;\n    font-size: var(--size-font-small);\n  }\n  .nextjs-container-build-error-version-status span {\n    display: inline-block;\n    width: 10px;\n    height: 10px;\n    border-radius: 5px;\n    background: var(--color-ansi-bright-black);\n  }\n  .nextjs-container-build-error-version-status span.fresh {\n    background: var(--color-ansi-green);\n  }\n  .nextjs-container-build-error-version-status span.stale {\n    background: var(--color-ansi-yellow);\n  }\n  .nextjs-container-build-error-version-status span.outdated {\n    background: var(--color-ansi-red);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VersionStalenessInfo: null,
    getStaleness: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VersionStalenessInfo: function() {
        return VersionStalenessInfo;
    },
    getStaleness: function() {
        return getStaleness;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function VersionStalenessInfo(param) {
    let { versionInfo } = param;
    if (!versionInfo) return null;
    const { staleness } = versionInfo;
    let { text, indicatorClass, title } = getStaleness(versionInfo);
    if (!text) return null;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
        className: "nextjs-container-build-error-version-status",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                className: indicatorClass
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("small", {
                "data-nextjs-version-checker": true,
                title: title,
                children: text
            }),
            ' ',
            staleness === 'fresh' || staleness === 'newer-than-npm' || staleness === 'unknown' ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
                target: "_blank",
                rel: "noopener noreferrer",
                href: "https://nextjs.org/docs/messages/version-staleness",
                children: "(learn more)"
            }),
            ("TURBOPACK compile-time truthy", 1) ? ' (Turbopack)' : ("TURBOPACK unreachable", undefined)
        ]
    });
}
function getStaleness(param) {
    let { installed, staleness, expected } = param;
    let text = '';
    let title = '';
    let indicatorClass = '';
    const versionLabel = "Next.js (" + installed + ")";
    switch(staleness){
        case 'newer-than-npm':
        case 'fresh':
            text = versionLabel;
            title = "Latest available version is detected (" + installed + ").";
            indicatorClass = 'fresh';
            break;
        case 'stale-patch':
        case 'stale-minor':
            text = "" + versionLabel + " out of date";
            title = "There is a newer version (" + expected + ") available, upgrade recommended! ";
            indicatorClass = 'stale';
            break;
        case 'stale-major':
            {
                text = "" + versionLabel + " is outdated";
                title = "An outdated version detected (latest is " + expected + "), upgrade is highly recommended!";
                indicatorClass = 'outdated';
                break;
            }
        case 'stale-prerelease':
            {
                text = "" + versionLabel + " is outdated";
                title = "There is a newer canary version (" + expected + ") available, please upgrade! ";
                indicatorClass = 'stale';
                break;
            }
        case 'unknown':
            break;
        default:
            break;
    }
    return {
        text,
        indicatorClass,
        title
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=VersionStalenessInfo.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    VersionStalenessInfo: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    VersionStalenessInfo: function() {
        return _VersionStalenessInfo.VersionStalenessInfo;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/styles.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/VersionStalenessInfo.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Errors/ErrorOverlayLayout/ErrorOverlayLayout.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorOverlayLayout", {
    enumerable: true,
    get: function() {
        return ErrorOverlayLayout;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/index.js [client] (ecmascript)");
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/index.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)");
function ErrorOverlayLayout(param) {
    let { errorType, errorMessage, onClose, children, versionInfo, isBuildError } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Overlay.Overlay, {
        fixed: isBuildError,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Dialog.Dialog, {
            type: "error",
            "aria-labelledby": "nextjs__container_errors_label",
            "aria-describedby": "nextjs__container_errors_desc",
            onClose: onClose,
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogContent, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogHeader, {
                        className: "nextjs-container-errors-header",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                id: "nextjs__container_errors_label",
                                className: "nextjs__container_errors_label",
                                children: errorType
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_VersionStalenessInfo.VersionStalenessInfo, {
                                versionInfo: versionInfo
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                id: "nextjs__container_errors_desc",
                                className: "nextjs__container_errors_desc",
                                children: errorMessage
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_Dialog.DialogBody, {
                        className: "nextjs-container-errors-body",
                        children: children
                    })
                ]
            })
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ErrorOverlayLayout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/BuildError.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    BuildError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    BuildError: function() {
        return BuildError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _Terminal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/index.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
const _ErrorOverlayLayout = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Errors/ErrorOverlayLayout/ErrorOverlayLayout.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  h1.nextjs__container_errors_label {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: var(--size-gap-double) 0;\n  }\n  .nextjs-container-errors-header p {\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    white-space: pre-wrap;\n  }\n  .nextjs-container-errors-body footer {\n    margin-top: var(--size-gap);\n  }\n  .nextjs-container-errors-body footer p {\n    margin: 0;\n  }\n\n  .nextjs-container-errors-body small {\n    color: var(--color-font);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const BuildError = function BuildError(param) {
    let { message, versionInfo } = param;
    const noop = _react.useCallback({
        "BuildError.useCallback[noop]": ()=>{}
    }["BuildError.useCallback[noop]"], []);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_ErrorOverlayLayout.ErrorOverlayLayout, {
        errorType: "Build Error",
        errorMessage: "Failed to compile",
        onClose: noop,
        versionInfo: versionInfo,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_Terminal.Terminal, {
                content: message
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("footer", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                    id: "nextjs__container_build_error_desc",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("small", {
                        children: "This error occurred during the build process and can only be dismissed by fixing the error."
                    })
                })
            })
        ]
    });
};
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=BuildError.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/icons/CloseIcon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CloseIcon", {
    enumerable: true,
    get: function() {
        return CloseIcon;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const CloseIcon = ()=>{
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M18 6L6 18",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M6 6L18 18",
                stroke: "currentColor",
                strokeWidth: "2",
                strokeLinecap: "round",
                strokeLinejoin: "round"
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CloseIcon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LeftRightDialogHeader", {
    enumerable: true,
    get: function() {
        return LeftRightDialogHeader;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _CloseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/icons/CloseIcon.js [client] (ecmascript)");
const LeftRightDialogHeader = function LeftRightDialogHeader(param) {
    let { children, className, previous, next, close } = param;
    const buttonLeft = _react.useRef(null);
    const buttonRight = _react.useRef(null);
    const buttonClose = _react.useRef(null);
    const [nav, setNav] = _react.useState(null);
    const onNav = _react.useCallback({
        "LeftRightDialogHeader.useCallback[onNav]": (el)=>{
            setNav(el);
        }
    }["LeftRightDialogHeader.useCallback[onNav]"], []);
    _react.useEffect({
        "LeftRightDialogHeader.useEffect": ()=>{
            if (nav == null) {
                return;
            }
            const root = nav.getRootNode();
            const d = self.document;
            function handler(e) {
                if (e.key === 'ArrowLeft') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (buttonLeft.current) {
                        buttonLeft.current.focus();
                    }
                    previous && previous();
                } else if (e.key === 'ArrowRight') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (buttonRight.current) {
                        buttonRight.current.focus();
                    }
                    next && next();
                } else if (e.key === 'Escape') {
                    e.preventDefault();
                    e.stopPropagation();
                    if (root instanceof ShadowRoot) {
                        const a = root.activeElement;
                        if (a && a !== buttonClose.current && a instanceof HTMLElement) {
                            a.blur();
                            return;
                        }
                    }
                    close == null ? void 0 : close();
                }
            }
            root.addEventListener('keydown', handler);
            if (root !== d) {
                d.addEventListener('keydown', handler);
            }
            return ({
                "LeftRightDialogHeader.useEffect": function() {
                    root.removeEventListener('keydown', handler);
                    if (root !== d) {
                        d.removeEventListener('keydown', handler);
                    }
                }
            })["LeftRightDialogHeader.useEffect"];
        }
    }["LeftRightDialogHeader.useEffect"], [
        close,
        nav,
        next,
        previous
    ]);
    // Unlock focus for browsers like Firefox, that break all user focus if the
    // currently focused item becomes disabled.
    _react.useEffect({
        "LeftRightDialogHeader.useEffect": ()=>{
            if (nav == null) {
                return;
            }
            const root = nav.getRootNode();
            // Always true, but we do this for TypeScript:
            if (root instanceof ShadowRoot) {
                const a = root.activeElement;
                if (previous == null) {
                    if (buttonLeft.current && a === buttonLeft.current) {
                        buttonLeft.current.blur();
                    }
                } else if (next == null) {
                    if (buttonRight.current && a === buttonRight.current) {
                        buttonRight.current.blur();
                    }
                }
            }
        }
    }["LeftRightDialogHeader.useEffect"], [
        nav,
        next,
        previous
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-dialog-left-right": true,
        className: className,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("nav", {
                ref: onNav,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        ref: buttonLeft,
                        type: "button",
                        disabled: previous == null ? true : undefined,
                        "aria-disabled": previous == null ? true : undefined,
                        onClick: previous != null ? previous : undefined,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                                    children: "previous"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                    d: "M6.99996 1.16666L1.16663 6.99999L6.99996 12.8333M12.8333 6.99999H1.99996H12.8333Z",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                        ref: buttonRight,
                        type: "button",
                        disabled: next == null ? true : undefined,
                        "aria-disabled": next == null ? true : undefined,
                        onClick: next != null ? next : undefined,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                            viewBox: "0 0 14 14",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("title", {
                                    children: "next"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                    d: "M6.99996 1.16666L12.8333 6.99999L6.99996 12.8333M1.16663 6.99999H12H1.16663Z",
                                    stroke: "currentColor",
                                    strokeWidth: "2",
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round"
                                })
                            ]
                        })
                    }),
                    children
                ]
            }),
            close ? /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                "data-nextjs-errors-dialog-left-right-close-button": true,
                ref: buttonClose,
                type: "button",
                onClick: close,
                "aria-label": "Close",
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                    "aria-hidden": "true",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_CloseIcon.CloseIcon, {})
                })
            }) : null
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=LeftRightDialogHeader.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/LeftRightDialogHeader/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-left-right] {\n    display: flex;\n    flex-direction: row;\n    align-content: center;\n    align-items: center;\n    justify-content: space-between;\n  }\n  [data-nextjs-dialog-left-right] > nav {\n    flex: 1;\n    display: flex;\n    align-items: center;\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-dialog-left-right] > nav > button {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n\n    width: calc(var(--size-gap-double) + var(--size-gap));\n    height: calc(var(--size-gap-double) + var(--size-gap));\n    font-size: 0;\n    border: none;\n    background-color: rgba(255, 85, 85, 0.1);\n    color: var(--color-ansi-red);\n    cursor: pointer;\n    transition: background-color 0.25s ease;\n  }\n  [data-nextjs-dialog-left-right] > nav > button > svg {\n    width: auto;\n    height: calc(var(--size-gap) + var(--size-gap-half));\n  }\n  [data-nextjs-dialog-left-right] > nav > button:hover {\n    background-color: rgba(255, 85, 85, 0.2);\n  }\n  [data-nextjs-dialog-left-right] > nav > button:disabled {\n    background-color: rgba(255, 85, 85, 0.1);\n    color: rgba(255, 85, 85, 0.4);\n    cursor: not-allowed;\n  }\n\n  [data-nextjs-dialog-left-right] > nav > button:first-of-type {\n    border-radius: var(--size-gap-half) 0 0 var(--size-gap-half);\n    margin-right: 1px;\n  }\n  [data-nextjs-dialog-left-right] > nav > button:last-of-type {\n    border-radius: 0 var(--size-gap-half) var(--size-gap-half) 0;\n  }\n\n  [data-nextjs-dialog-left-right] > button:last-of-type {\n    border: 0;\n    padding: 0;\n\n    background-color: transparent;\n    appearance: none;\n\n    opacity: 0.4;\n    transition: opacity 0.25s ease;\n\n    color: var(--color-font);\n  }\n  [data-nextjs-dialog-left-right] > button:last-of-type:hover {\n    opacity: 0.7;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/LeftRightDialogHeader/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    LeftRightDialogHeader: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    LeftRightDialogHeader: function() {
        return _LeftRightDialogHeader.LeftRightDialogHeader;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/LeftRightDialogHeader/LeftRightDialogHeader.js [client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/LeftRightDialogHeader/styles.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/webpack-module-path.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatFrameSourceFile: null,
    isWebpackInternalResource: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatFrameSourceFile: function() {
        return formatFrameSourceFile;
    },
    isWebpackInternalResource: function() {
        return isWebpackInternalResource;
    }
});
const replacementRegExes = [
    /^(rsc:\/\/React\/[^/]+\/)/,
    /^webpack-internal:\/\/\/(\([\w-]+\)\/)?/,
    /^(webpack:\/\/\/|webpack:\/\/(_N_E\/)?)(\([\w-]+\)\/)?/,
    /\?\w+(\?\d+)?$/,
    /\?\d+$/
];
function isWebpackInternalResource(file) {
    for (const regex of replacementRegExes){
        if (regex.test(file)) return true;
        file = file.replace(regex, '');
    }
    return false;
}
function formatFrameSourceFile(file) {
    for (const regex of replacementRegExes){
        file = file.replace(regex, '');
    }
    return file;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=webpack-module-path.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/stack-frame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getFrameSource: null,
    getOriginalStackFrames: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getFrameSource: function() {
        return getFrameSource;
    },
    getOriginalStackFrames: function() {
        return getOriginalStackFrames;
    }
});
const _webpackmodulepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/webpack-module-path.js [client] (ecmascript)");
function getOriginalStackFrame(source, type, isAppDir, errorMessage) {
    var _source_file, _source_file1;
    async function _getOriginalStackFrame() {
        var _body_originalStackFrame;
        const params = new URLSearchParams();
        params.append('isServer', String(type === 'server'));
        params.append('isEdgeServer', String(type === 'edge-server'));
        params.append('isAppDirectory', String(isAppDir));
        params.append('errorMessage', errorMessage);
        for(const key in source){
            var _source_key;
            params.append(key, ((_source_key = source[key]) != null ? _source_key : '').toString());
        }
        const controller = new AbortController();
        const tm = setTimeout(()=>controller.abort(), 3000);
        const res = await self.fetch((("TURBOPACK compile-time value", "") || '') + "/__nextjs_original-stack-frame?" + params.toString(), {
            signal: controller.signal
        }).finally(()=>{
            clearTimeout(tm);
        });
        if (!res.ok || res.status === 204) {
            return Promise.reject(Object.defineProperty(new Error(await res.text()), "__NEXT_ERROR_CODE", {
                value: "E394",
                enumerable: false
            }));
        }
        const body = await res.json();
        return {
            error: false,
            reason: null,
            external: false,
            sourceStackFrame: source,
            originalStackFrame: body.originalStackFrame,
            originalCodeFrame: body.originalCodeFrame || null,
            sourcePackage: body.sourcePackage,
            ignored: ((_body_originalStackFrame = body.originalStackFrame) == null ? void 0 : _body_originalStackFrame.ignored) || false
        };
    }
    // TODO: merge this section into ignoredList handling
    if (source.file === 'file://' || ((_source_file = source.file) == null ? void 0 : _source_file.match(/^node:/)) || ((_source_file1 = source.file) == null ? void 0 : _source_file1.match(/https?:\/\//))) {
        return Promise.resolve({
            error: false,
            reason: null,
            external: true,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null,
            sourcePackage: null,
            ignored: true
        });
    }
    return _getOriginalStackFrame().catch((err)=>{
        var _err_message, _ref;
        return {
            error: true,
            reason: (_ref = (_err_message = err == null ? void 0 : err.message) != null ? _err_message : err == null ? void 0 : err.toString()) != null ? _ref : 'Unknown Error',
            external: false,
            sourceStackFrame: source,
            originalStackFrame: null,
            originalCodeFrame: null,
            sourcePackage: null,
            ignored: false
        };
    });
}
function getOriginalStackFrames(frames, type, isAppDir, errorMessage) {
    return Promise.all(frames.map((frame)=>getOriginalStackFrame(frame, type, isAppDir, errorMessage)));
}
function getFrameSource(frame) {
    if (!frame.file) return '';
    const isWebpackFrame = (0, _webpackmodulepath.isWebpackInternalResource)(frame.file);
    let str = '';
    // Skip URL parsing for webpack internal file paths.
    if (isWebpackFrame) {
        str = (0, _webpackmodulepath.formatFrameSourceFile)(frame.file);
    } else {
        try {
            var _globalThis_location;
            const u = new URL(frame.file);
            let parsedPath = '';
            // Strip the origin for same-origin scripts.
            if (((_globalThis_location = globalThis.location) == null ? void 0 : _globalThis_location.origin) !== u.origin) {
                // URLs can be valid without an `origin`, so long as they have a
                // `protocol`. However, `origin` is preferred.
                if (u.origin === 'null') {
                    parsedPath += u.protocol;
                } else {
                    parsedPath += u.origin;
                }
            }
            // Strip query string information as it's typically too verbose to be
            // meaningful.
            parsedPath += u.pathname;
            str = (0, _webpackmodulepath.formatFrameSourceFile)(parsedPath);
        } catch (e) {
            str = (0, _webpackmodulepath.formatFrameSourceFile)(frame.file);
        }
    }
    if (!(0, _webpackmodulepath.isWebpackInternalResource)(frame.file) && frame.lineNumber != null) {
        if (str) {
            if (frame.column != null) {
                str += " (" + frame.lineNumber + ":" + frame.column + ")";
            } else {
                str += " (" + frame.lineNumber + ")";
            }
        }
    }
    return str;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=stack-frame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/get-error-by-type.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getErrorByType", {
    enumerable: true,
    get: function() {
        return getErrorByType;
    }
});
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/stack-frame.js [client] (ecmascript)");
const _errorsource = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
async function getErrorByType(ev, isAppDir) {
    const { id, event } = ev;
    switch(event.type){
        case _shared.ACTION_UNHANDLED_ERROR:
        case _shared.ACTION_UNHANDLED_REJECTION:
            {
                const readyRuntimeError = {
                    id,
                    runtime: true,
                    error: event.reason,
                    frames: await (0, _stackframe.getOriginalStackFrames)(event.frames, (0, _errorsource.getErrorSource)(event.reason), isAppDir, event.reason.toString())
                };
                if (event.type === _shared.ACTION_UNHANDLED_ERROR) {
                    readyRuntimeError.componentStackFrames = event.componentStackFrames;
                }
                return readyRuntimeError;
            }
        default:
            {
                break;
            }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    throw Object.defineProperty(new Error('type system invariant violation'), "__NEXT_ERROR_CODE", {
        value: "E335",
        enumerable: false
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=get-error-by-type.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/CodeFrame/CodeFrame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return CodeFrame;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _anser = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/anser/index.js [client] (ecmascript)"));
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/stack-frame.js [client] (ecmascript)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/use-open-in-editor.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const CodeFrame = function CodeFrame(param) {
    let { stackFrame, codeFrame } = param;
    // Strip leading spaces out of the code frame:
    const formattedFrame = _react.useMemo({
        "CodeFrame.useMemo[formattedFrame]": ()=>{
            const lines = codeFrame.split(/\r?\n/g);
            // Find the minimum length of leading spaces after `|` in the code frame
            const miniLeadingSpacesLength = lines.map({
                "CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength": (line)=>/^>? +\d+ +\| [ ]+/.exec((0, _stripansi.default)(line)) === null ? null : /^>? +\d+ +\| ( *)/.exec((0, _stripansi.default)(line))
            }["CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength"]).filter(Boolean).map({
                "CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength": (v)=>v.pop()
            }["CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength"]).reduce({
                "CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength": (c, n)=>isNaN(c) ? n.length : Math.min(c, n.length)
            }["CodeFrame.useMemo[formattedFrame].miniLeadingSpacesLength"], NaN);
            // When the minimum length of leading spaces is greater than 1, remove them
            // from the code frame to help the indentation looks better when there's a lot leading spaces.
            if (miniLeadingSpacesLength > 1) {
                return lines.map({
                    "CodeFrame.useMemo[formattedFrame]": (line, a)=>~(a = line.indexOf('|')) ? line.substring(0, a) + line.substring(a).replace("^\\ {" + miniLeadingSpacesLength + "}", '') : line
                }["CodeFrame.useMemo[formattedFrame]"]).join('\n');
            }
            return lines.join('\n');
        }
    }["CodeFrame.useMemo[formattedFrame]"], [
        codeFrame
    ]);
    const decoded = _react.useMemo({
        "CodeFrame.useMemo[decoded]": ()=>{
            return _anser.default.ansiToJson(formattedFrame, {
                json: true,
                use_classes: true,
                remove_empty: true
            });
        }
    }["CodeFrame.useMemo[decoded]"], [
        formattedFrame
    ]);
    const open = (0, _useopenineditor.useOpenInEditor)({
        file: stackFrame.file,
        lineNumber: stackFrame.lineNumber,
        column: stackFrame.column
    });
    // TODO: make the caret absolute
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-codeframe": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("p", {
                    role: "link",
                    onClick: open,
                    tabIndex: 1,
                    title: "Click to open in your editor",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                            children: [
                                (0, _stackframe.getFrameSource)(stackFrame),
                                " @",
                                ' ',
                                /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                    text: stackFrame.methodName
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                            xmlns: "http://www.w3.org/2000/svg",
                            viewBox: "0 0 24 24",
                            fill: "none",
                            stroke: "currentColor",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round",
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                    d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("polyline", {
                                    points: "15 3 21 3 21 9"
                                }),
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                                    x1: "10",
                                    y1: "14",
                                    x2: "21",
                                    y2: "3"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("pre", {
                children: decoded.map((entry, index)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        style: {
                            color: entry.fg ? "var(--color-" + entry.fg + ")" : undefined,
                            ...entry.decoration === 'bold' ? {
                                fontWeight: 800
                            } : entry.decoration === 'italic' ? {
                                fontStyle: 'italic'
                            } : undefined
                        },
                        children: entry.content
                    }, "frame-" + index))
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CodeFrame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/CodeFrame/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CodeFrame", {
    enumerable: true,
    get: function() {
        return _CodeFrame.CodeFrame;
    }
});
const _CodeFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/CodeFrame/CodeFrame.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/RuntimeError/CallStackFrame.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CallStackFrame", {
    enumerable: true,
    get: function() {
        return CallStackFrame;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _stackframe = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/stack-frame.js [client] (ecmascript)");
const _useopenineditor = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/use-open-in-editor.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const CallStackFrame = function CallStackFrame(param) {
    let { frame } = param;
    var _frame_originalStackFrame;
    // TODO: ability to expand resolved frames
    // TODO: render error or external indicator
    const f = (_frame_originalStackFrame = frame.originalStackFrame) != null ? _frame_originalStackFrame : frame.sourceStackFrame;
    const hasSource = Boolean(frame.originalCodeFrame);
    const open = (0, _useopenineditor.useOpenInEditor)(hasSource ? {
        file: f.file,
        lineNumber: f.lineNumber,
        column: f.column
    } : undefined);
    // Format method to strip out the webpack layer prefix.
    // e.g. (app-pages-browser)/./app/page.tsx -> ./app/page.tsx
    const formattedMethod = f.methodName.replace(/^\([\w-]+\)\//, '');
    // Formatted file source could be empty. e.g. <anonymous> will be formatted to empty string,
    // we'll skip rendering the frame in this case.
    const fileSource = (0, _stackframe.getFrameSource)(f);
    if (!fileSource) {
        return null;
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-call-stack-frame": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("h3", {
                "data-nextjs-frame-expanded": !frame.ignored,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                    text: formattedMethod
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                "data-has-source": hasSource ? 'true' : undefined,
                "data-no-source": hasSource ? undefined : 'true',
                tabIndex: hasSource ? 10 : undefined,
                role: hasSource ? 'link' : undefined,
                onClick: open,
                title: hasSource ? 'Click to open in your editor' : undefined,
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                        children: fileSource
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                                d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("polyline", {
                                points: "15 3 21 3 21 9"
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                                x1: "10",
                                y1: "14",
                                x2: "21",
                                y2: "3"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CallStackFrame.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/RuntimeError/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RuntimeError: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RuntimeError: function() {
        return RuntimeError;
    },
    styles: function() {
        return styles;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _CodeFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/CodeFrame/index.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
const _CallStackFrame = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/RuntimeError/CallStackFrame.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-call-stack-frame]:not(:last-child),\n  [data-nextjs-component-stack-frame]:not(:last-child) {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-expand-ignore-button]:focus:not(:focus-visible),\n  [data-expand-ignore-button] {\n    background: none;\n    border: none;\n    color: var(--color-font);\n    cursor: pointer;\n    font-size: var(--size-font);\n    margin: var(--size-gap) 0;\n    padding: 0;\n    text-decoration: underline;\n    outline: none;\n  }\n\n  [data-nextjs-data-runtime-error-copy-button],\n  [data-nextjs-data-runtime-error-copy-button]:focus:not(:focus-visible) {\n    position: relative;\n    margin-left: var(--size-gap);\n    padding: 0;\n    border: none;\n    background: none;\n    outline: none;\n  }\n  [data-nextjs-data-runtime-error-copy-button] > svg {\n    vertical-align: middle;\n  }\n  .nextjs-data-runtime-error-copy-button {\n    color: inherit;\n  }\n  .nextjs-data-runtime-error-copy-button--initial:hover {\n    cursor: pointer;\n  }\n  .nextjs-data-runtime-error-copy-button[aria-disabled='true'] {\n    opacity: 0.3;\n    cursor: not-allowed;\n  }\n  .nextjs-data-runtime-error-copy-button--error,\n  .nextjs-data-runtime-error-copy-button--error:hover {\n    color: var(--color-ansi-red);\n  }\n  .nextjs-data-runtime-error-copy-button--success {\n    color: var(--color-ansi-green);\n  }\n\n  [data-nextjs-call-stack-frame] > h3,\n  [data-nextjs-component-stack-frame] > h3 {\n    margin-top: 0;\n    margin-bottom: 0;\n    font-family: var(--font-stack-monospace);\n    font-size: var(--size-font);\n  }\n  [data-nextjs-call-stack-frame] > h3[data-nextjs-frame-expanded='false'] {\n    color: #666;\n    display: inline-block;\n  }\n  [data-nextjs-call-stack-frame] > div,\n  [data-nextjs-component-stack-frame] > div {\n    display: flex;\n    align-items: center;\n    padding-left: calc(var(--size-gap) + var(--size-gap-half));\n    font-size: var(--size-font-small);\n    color: #999;\n  }\n  [data-nextjs-call-stack-frame] > div > svg,\n  [data-nextjs-component-stack-frame] > [role='link'] > svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n    flex-shrink: 0;\n    display: none;\n  }\n\n  [data-nextjs-call-stack-frame] > div[data-has-source],\n  [data-nextjs-component-stack-frame] > [role='link'] {\n    cursor: pointer;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source]:hover,\n  [data-nextjs-component-stack-frame] > [role='link']:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-call-stack-frame] > div[data-has-source] > svg,\n  [data-nextjs-component-stack-frame] > [role='link'] > svg {\n    display: unset;\n  }\n\n  [data-nextjs-call-stack-framework-icon] {\n    margin-right: var(--size-gap);\n  }\n  [data-nextjs-call-stack-framework-icon='next'] > mask {\n    mask-type: alpha;\n  }\n  [data-nextjs-call-stack-framework-icon='react'] {\n    color: rgb(20, 158, 202);\n  }\n  [data-nextjs-collapsed-call-stack-details][open]\n    [data-nextjs-call-stack-chevron-icon] {\n    transform: rotate(90deg);\n  }\n  [data-nextjs-collapsed-call-stack-details] summary {\n    display: flex;\n    align-items: center;\n    margin-bottom: var(--size-gap);\n    list-style: none;\n  }\n  [data-nextjs-collapsed-call-stack-details] summary::-webkit-details-marker {\n    display: none;\n  }\n\n  [data-nextjs-collapsed-call-stack-details] h3 {\n    color: #666;\n  }\n  [data-nextjs-collapsed-call-stack-details] [data-nextjs-call-stack-frame] {\n    margin-bottom: var(--size-gap-double);\n  }\n\n  [data-nextjs-container-errors-pseudo-html] {\n    position: relative;\n  }\n  [data-nextjs-container-errors-pseudo-html-collapse] {\n    position: absolute;\n    left: 10px;\n    top: 10px;\n    color: inherit;\n    background: none;\n    border: none;\n    padding: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='add'] {\n    color: var(--color-ansi-green);\n  }\n  [data-nextjs-container-errors-pseudo-html--diff='remove'] {\n    color: var(--color-ansi-red);\n  }\n  [data-nextjs-container-errors-pseudo-html--tag-error] {\n    color: var(--color-ansi-red);\n    font-weight: bold;\n  }\n  /* hide but text are still accessible in DOM */\n  [data-nextjs-container-errors-pseudo-html--hint] {\n    display: inline-block;\n    font-size: 0;\n  }\n  [data-nextjs-container-errors-pseudo-html--tag-adjacent='false'] {\n    color: var(--color-accents-1);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function RuntimeError(param) {
    let { error } = param;
    const [isIgnoredExpanded, setIsIgnoredExpanded] = _react.useState(false);
    const { firstFrame, allLeadingFrames, trailingCallStackFrames, displayedFramesCount } = _react.useMemo({
        "RuntimeError.useMemo": ()=>{
            const filteredFrames = error.frames.filter({
                "RuntimeError.useMemo.filteredFrames": (frame)=>isIgnoredExpanded ? true : !frame.ignored
            }["RuntimeError.useMemo.filteredFrames"]);
            const firstFirstPartyFrameIndex = filteredFrames.findIndex({
                "RuntimeError.useMemo.firstFirstPartyFrameIndex": (entry)=>!entry.ignored && Boolean(entry.originalCodeFrame) && Boolean(entry.originalStackFrame)
            }["RuntimeError.useMemo.firstFirstPartyFrameIndex"]);
            var _filteredFrames_firstFirstPartyFrameIndex;
            return {
                displayedFramesCount: filteredFrames.length,
                firstFrame: (_filteredFrames_firstFirstPartyFrameIndex = filteredFrames[firstFirstPartyFrameIndex]) != null ? _filteredFrames_firstFirstPartyFrameIndex : null,
                allLeadingFrames: firstFirstPartyFrameIndex < 0 ? [] : filteredFrames.slice(0, firstFirstPartyFrameIndex),
                trailingCallStackFrames: filteredFrames.slice(firstFirstPartyFrameIndex + 1)
            };
        }
    }["RuntimeError.useMemo"], [
        error.frames,
        isIgnoredExpanded
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
        children: [
            firstFrame ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("h2", {
                        children: "Source"
                    }),
                    allLeadingFrames.map((frame, frameIndex)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_CallStackFrame.CallStackFrame, {
                            frame: frame
                        }, "call-stack-leading-" + frameIndex)),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_CodeFrame.CodeFrame, {
                        stackFrame: firstFrame.originalStackFrame,
                        codeFrame: firstFrame.originalCodeFrame
                    })
                ]
            }) : undefined,
            trailingCallStackFrames.map((frame, frameIndex)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(_CallStackFrame.CallStackFrame, {
                    frame: frame
                }, "call-stack-leading-" + frameIndex)),
            // if the default displayed ignored frames count is equal equal to the total frames count, hide the button
            displayedFramesCount === error.frames.length && !isIgnoredExpanded ? null : /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                "data-expand-ignore-button": isIgnoredExpanded,
                onClick: ()=>setIsIgnoredExpanded(!isIgnoredExpanded),
                children: "" + (isIgnoredExpanded ? 'Hide' : 'Show') + " ignored frames"
            })
        ]
    });
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/icons/CollapseIcon.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CollapseIcon", {
    enumerable: true,
    get: function() {
        return CollapseIcon;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
function CollapseIcon(param) {
    let { collapsed } = param === void 0 ? {} : param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        "data-nextjs-call-stack-chevron-icon": true,
        "data-collapsed": collapsed,
        fill: "none",
        height: "20",
        width: "20",
        shapeRendering: "geometricPrecision",
        stroke: "currentColor",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "2",
        viewBox: "0 0 24 24",
        ...typeof collapsed === 'boolean' ? {
            style: {
                transform: collapsed ? undefined : 'rotate(90deg)'
            }
        } : {},
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M9 18l6-6-6-6"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CollapseIcon.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/RuntimeError/component-stack-pseudo-html.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PseudoHtmlDiff", {
    enumerable: true,
    get: function() {
        return PseudoHtmlDiff;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
const _CollapseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/icons/CollapseIcon.js [client] (ecmascript)");
function getAdjacentProps(isAdj) {
    return {
        'data-nextjs-container-errors-pseudo-html--tag-adjacent': isAdj
    };
}
function PseudoHtmlDiff(param) {
    let { componentStackFrames, firstContent, secondContent, hydrationMismatchType, reactOutputComponentDiff, ...props } = param;
    const isHtmlTagsWarning = hydrationMismatchType === 'tag';
    const isReactHydrationDiff = !!reactOutputComponentDiff;
    // For text mismatch, mismatched text will take 2 rows, so we display 4 rows of component stack
    const MAX_NON_COLLAPSED_FRAMES = isHtmlTagsWarning ? 6 : 4;
    const [isHtmlCollapsed, toggleCollapseHtml] = (0, _react.useState)(true);
    const htmlComponents = (0, _react.useMemo)(()=>{
        const componentStacks = [];
        // React 19 unified mismatch
        if (isReactHydrationDiff) {
            let currentComponentIndex = componentStackFrames.length - 1;
            const reactComponentDiffLines = reactOutputComponentDiff.split('\n');
            const diffHtmlStack = [];
            reactComponentDiffLines.forEach((line, index)=>{
                let trimmedLine = line.trim();
                const isDiffLine = trimmedLine[0] === '+' || trimmedLine[0] === '-';
                const spaces = ' '.repeat(Math.max(componentStacks.length * 2, 1));
                if (isDiffLine) {
                    const sign = trimmedLine[0];
                    trimmedLine = trimmedLine.slice(1).trim() // trim spaces after sign
                    ;
                    diffHtmlStack.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                        "data-nextjs-container-errors-pseudo-html--diff": sign === '+' ? 'add' : 'remove',
                        children: [
                            sign,
                            spaces,
                            trimmedLine,
                            '\n'
                        ]
                    }, 'comp-diff' + index));
                } else if (currentComponentIndex >= 0) {
                    const isUserLandComponent = trimmedLine.startsWith('<' + componentStackFrames[currentComponentIndex].component);
                    // If it's matched userland component or it's ... we will keep the component stack in diff
                    if (isUserLandComponent || trimmedLine === '...') {
                        currentComponentIndex--;
                        componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                            children: [
                                spaces,
                                trimmedLine,
                                '\n'
                            ]
                        }, 'comp-diff' + index));
                    } else if (!isHtmlCollapsed) {
                        componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                            children: [
                                spaces,
                                trimmedLine,
                                '\n'
                            ]
                        }, 'comp-diff' + index));
                    }
                } else if (!isHtmlCollapsed) {
                    // In general, if it's not collapsed, show the whole diff
                    componentStacks.push(/*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                        children: [
                            spaces,
                            trimmedLine,
                            '\n'
                        ]
                    }, 'comp-diff' + index));
                }
            });
            return componentStacks.concat(diffHtmlStack);
        }
        const nestedHtmlStack = [];
        const tagNames = isHtmlTagsWarning ? [
            firstContent.replace(/<|>/g, ''),
            secondContent.replace(/<|>/g, '')
        ] : [];
        let lastText = '';
        const componentStack = componentStackFrames.map((frame)=>frame.component).reverse();
        // [child index, parent index]
        const matchedIndex = [
            -1,
            -1
        ];
        if (isHtmlTagsWarning) {
            // Reverse search for the child tag
            for(let i = componentStack.length - 1; i >= 0; i--){
                if (componentStack[i] === tagNames[0]) {
                    matchedIndex[0] = i;
                    break;
                }
            }
            // Start searching parent tag from child tag above
            for(let i = matchedIndex[0] - 1; i >= 0; i--){
                if (componentStack[i] === tagNames[1]) {
                    matchedIndex[1] = i;
                    break;
                }
            }
        }
        componentStack.forEach((component, index, componentList)=>{
            const spaces = ' '.repeat(nestedHtmlStack.length * 2);
            // When component is the server or client tag name, highlight it
            const isHighlightedTag = isHtmlTagsWarning ? index === matchedIndex[0] || index === matchedIndex[1] : tagNames.includes(component);
            const isAdjacentTag = isHighlightedTag || Math.abs(index - matchedIndex[0]) <= 1 || Math.abs(index - matchedIndex[1]) <= 1;
            const isLastFewFrames = !isHtmlTagsWarning && index >= componentList.length - 6;
            const adjProps = getAdjacentProps(isAdjacentTag);
            if (isHtmlTagsWarning && isAdjacentTag || isLastFewFrames) {
                const codeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                    children: [
                        spaces,
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            ...adjProps,
                            ...isHighlightedTag ? {
                                'data-nextjs-container-errors-pseudo-html--tag-error': true
                            } : undefined,
                            children: "<" + component + ">\n"
                        })
                    ]
                });
                lastText = component;
                const wrappedCodeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
                    children: [
                        codeLine,
                        isHighlightedTag && /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--hint": true,
                            children: spaces + '^'.repeat(component.length + 2) + '\n'
                        })
                    ]
                }, nestedHtmlStack.length);
                nestedHtmlStack.push(wrappedCodeLine);
            } else {
                if (nestedHtmlStack.length >= MAX_NON_COLLAPSED_FRAMES && isHtmlCollapsed) {
                    return;
                }
                if (!isHtmlCollapsed || isLastFewFrames) {
                    nestedHtmlStack.push(/*#__PURE__*/ (0, _react.createElement)("span", {
                        ...adjProps,
                        key: nestedHtmlStack.length,
                        children: [
                            spaces,
                            '<' + component + '>\n'
                        ]
                    }));
                } else if (isHtmlCollapsed && lastText !== '...') {
                    lastText = '...';
                    nestedHtmlStack.push(/*#__PURE__*/ (0, _react.createElement)("span", {
                        ...adjProps,
                        key: nestedHtmlStack.length,
                        children: [
                            spaces,
                            '...\n'
                        ]
                    }));
                }
            }
        });
        // Hydration mismatch: text or text-tag
        if (!isHtmlTagsWarning) {
            const spaces = ' '.repeat(nestedHtmlStack.length * 2);
            let wrappedCodeLine;
            if (hydrationMismatchType === 'text') {
                // hydration type is "text", represent [server content, client content]
                wrappedCodeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--diff": "remove",
                            children: spaces + ('"' + firstContent + '"\n')
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--diff": "add",
                            children: spaces + ('"' + secondContent + '"\n')
                        })
                    ]
                }, nestedHtmlStack.length);
            } else if (hydrationMismatchType === 'text-in-tag') {
                // hydration type is "text-in-tag", represent [parent tag, mismatch content]
                wrappedCodeLine = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_react.Fragment, {
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--tag-adjacent": true,
                            children: spaces + ("<" + secondContent + ">\n")
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                            "data-nextjs-container-errors-pseudo-html--diff": "remove",
                            children: spaces + ('  "' + firstContent + '"\n')
                        })
                    ]
                }, nestedHtmlStack.length);
            }
            nestedHtmlStack.push(wrappedCodeLine);
        }
        return nestedHtmlStack;
    }, [
        componentStackFrames,
        isHtmlCollapsed,
        firstContent,
        secondContent,
        isHtmlTagsWarning,
        hydrationMismatchType,
        MAX_NON_COLLAPSED_FRAMES,
        isReactHydrationDiff,
        reactOutputComponentDiff
    ]);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
        "data-nextjs-container-errors-pseudo-html": true,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                tabIndex: 10,
                "data-nextjs-container-errors-pseudo-html-collapse": true,
                onClick: ()=>toggleCollapseHtml(!isHtmlCollapsed),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_CollapseIcon.CollapseIcon, {
                    collapsed: isHtmlCollapsed
                })
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("pre", {
                ...props,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("code", {
                    children: htmlComponents
                })
            })
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=component-stack-pseudo-html.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/hydration-error-info.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getHydrationWarningType: null,
    getReactHydrationDiffSegments: null,
    hydrationErrorState: null,
    storeHydrationErrorStateFromConsoleArgs: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getHydrationWarningType: function() {
        return getHydrationWarningType;
    },
    getReactHydrationDiffSegments: function() {
        return getReactHydrationDiffSegments;
    },
    hydrationErrorState: function() {
        return hydrationErrorState;
    },
    storeHydrationErrorStateFromConsoleArgs: function() {
        return storeHydrationErrorStateFromConsoleArgs;
    }
});
const _ishydrationerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-hydration-error.js [client] (ecmascript)");
const hydrationErrorState = {};
// https://github.com/facebook/react/blob/main/packages/react-dom/src/__tests__/ReactDOMHydrationDiff-test.js used as a reference
const htmlTagsWarnings = new Set([
    'Warning: In HTML, %s cannot be a child of <%s>.%s\nThis will cause a hydration error.%s',
    'Warning: In HTML, %s cannot be a descendant of <%s>.\nThis will cause a hydration error.%s',
    'Warning: In HTML, text nodes cannot be a child of <%s>.\nThis will cause a hydration error.',
    "Warning: In HTML, whitespace text nodes cannot be a child of <%s>. Make sure you don't have any extra whitespace between tags on each line of your source code.\nThis will cause a hydration error.",
    'Warning: Expected server HTML to contain a matching <%s> in <%s>.%s',
    'Warning: Did not expect server HTML to contain a <%s> in <%s>.%s'
]);
const textAndTagsMismatchWarnings = new Set([
    'Warning: Expected server HTML to contain a matching text node for "%s" in <%s>.%s',
    'Warning: Did not expect server HTML to contain the text node "%s" in <%s>.%s'
]);
const textMismatchWarning = 'Warning: Text content did not match. Server: "%s" Client: "%s"%s';
const getHydrationWarningType = (message)=>{
    if (typeof message !== 'string') {
        // TODO: Doesn't make sense to treat no message as a hydration error message.
        // We should bail out somewhere earlier.
        return 'text';
    }
    const normalizedMessage = message.startsWith('Warning: ') ? message : "Warning: " + message;
    if (isHtmlTagsWarning(normalizedMessage)) return 'tag';
    if (isTextInTagsMismatchWarning(normalizedMessage)) return 'text-in-tag';
    return 'text';
};
const isHtmlTagsWarning = (message)=>htmlTagsWarnings.has(message);
const isTextMismatchWarning = (message)=>textMismatchWarning === message;
const isTextInTagsMismatchWarning = (msg)=>textAndTagsMismatchWarnings.has(msg);
const isKnownHydrationWarning = (message)=>{
    if (typeof message !== 'string') {
        return false;
    }
    // React 18 has the `Warning: ` prefix.
    // React 19 does not.
    const normalizedMessage = message.startsWith('Warning: ') ? message : "Warning: " + message;
    return isHtmlTagsWarning(normalizedMessage) || isTextInTagsMismatchWarning(normalizedMessage) || isTextMismatchWarning(normalizedMessage);
};
const getReactHydrationDiffSegments = (msg)=>{
    if (msg) {
        const { message, diff } = (0, _ishydrationerror.getHydrationErrorStackInfo)(msg);
        if (message) return [
            message,
            diff
        ];
    }
    return undefined;
};
function storeHydrationErrorStateFromConsoleArgs() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    const [msg, serverContent, clientContent, componentStack] = args;
    if (isKnownHydrationWarning(msg)) {
        hydrationErrorState.warning = [
            // remove the last %s from the message
            msg,
            serverContent,
            clientContent
        ];
        hydrationErrorState.componentStack = componentStack;
        hydrationErrorState.serverContent = serverContent;
        hydrationErrorState.clientContent = clientContent;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hydration-error-info.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/copy-button/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CopyButton", {
    enumerable: true,
    get: function() {
        return CopyButton;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
function useCopyLegacy(content) {
    // This would be simpler with useActionState but we need to support React 18 here.
    // React 18 also doesn't have async transitions.
    const [copyState, dispatch] = _react.useReducer({
        "useCopyLegacy.useReducer": (state, action)=>{
            if (action.type === 'reset') {
                return {
                    state: 'initial'
                };
            }
            if (action.type === 'copied') {
                return {
                    state: 'success'
                };
            }
            if (action.type === 'copying') {
                return {
                    state: 'pending'
                };
            }
            if (action.type === 'error') {
                return {
                    state: 'error',
                    error: action.error
                };
            }
            return state;
        }
    }["useCopyLegacy.useReducer"], {
        state: 'initial'
    });
    function copy() {
        if (isPending) {
            return;
        }
        if (!navigator.clipboard) {
            dispatch({
                type: 'error',
                error: Object.defineProperty(new Error('Copy to clipboard is not supported in this browser'), "__NEXT_ERROR_CODE", {
                    value: "E376",
                    enumerable: false
                })
            });
        } else {
            dispatch({
                type: 'copying'
            });
            navigator.clipboard.writeText(content).then(()=>{
                dispatch({
                    type: 'copied'
                });
            }, (error)=>{
                dispatch({
                    type: 'error',
                    error
                });
            });
        }
    }
    const reset = _react.useCallback({
        "useCopyLegacy.useCallback[reset]": ()=>{
            dispatch({
                type: 'reset'
            });
        }
    }["useCopyLegacy.useCallback[reset]"], []);
    const isPending = copyState.state === 'pending';
    return [
        copyState,
        copy,
        reset,
        isPending
    ];
}
function useCopyModern(content) {
    const [copyState, dispatch, isPending] = _react.useActionState({
        "useCopyModern.useActionState": (state, action)=>{
            if (action === 'reset') {
                return {
                    state: 'initial'
                };
            }
            if (action === 'copy') {
                if (!navigator.clipboard) {
                    return {
                        state: 'error',
                        error: Object.defineProperty(new Error('Copy to clipboard is not supported in this browser'), "__NEXT_ERROR_CODE", {
                            value: "E376",
                            enumerable: false
                        })
                    };
                }
                return navigator.clipboard.writeText(content).then({
                    "useCopyModern.useActionState": ()=>{
                        return {
                            state: 'success'
                        };
                    }
                }["useCopyModern.useActionState"], {
                    "useCopyModern.useActionState": (error)=>{
                        return {
                            state: 'error',
                            error
                        };
                    }
                }["useCopyModern.useActionState"]);
            }
            return state;
        }
    }["useCopyModern.useActionState"], {
        state: 'initial'
    });
    function copy() {
        _react.startTransition(()=>{
            dispatch('copy');
        });
    }
    const reset = _react.useCallback({
        "useCopyModern.useCallback[reset]": ()=>{
            dispatch('reset');
        }
    }["useCopyModern.useCallback[reset]"], [
        // TODO: `dispatch` from `useActionState` is not reactive.
        // Remove from dependencies once https://github.com/facebook/react/pull/29665 is released.
        dispatch
    ]);
    return [
        copyState,
        copy,
        reset,
        isPending
    ];
}
const useCopy = typeof _react.useActionState === 'function' ? useCopyModern : useCopyLegacy;
function CopyButton(param) {
    let { actionLabel, successLabel, content, icon, disabled, ...props } = param;
    const [copyState, copy, reset, isPending] = useCopy(content);
    const error = copyState.state === 'error' ? copyState.error : null;
    _react.useEffect({
        "CopyButton.useEffect": ()=>{
            if (error !== null) {
                // Additional console.error to get the stack.
                console.error(error);
            }
        }
    }["CopyButton.useEffect"], [
        error
    ]);
    _react.useEffect({
        "CopyButton.useEffect": ()=>{
            if (copyState.state === 'success') {
                const timeoutId = setTimeout({
                    "CopyButton.useEffect.timeoutId": ()=>{
                        reset();
                    }
                }["CopyButton.useEffect.timeoutId"], 2000);
                return ({
                    "CopyButton.useEffect": ()=>{
                        clearTimeout(timeoutId);
                    }
                })["CopyButton.useEffect"];
            }
        }
    }["CopyButton.useEffect"], [
        isPending,
        copyState.state,
        reset
    ]);
    const isDisabled = isPending || disabled;
    const label = copyState.state === 'success' ? successLabel : actionLabel;
    // Assign default icon
    const renderedIcon = copyState.state === 'success' ? /*#__PURE__*/ (0, _jsxruntime.jsx)(CopySuccessIcon, {}) : icon || /*#__PURE__*/ (0, _jsxruntime.jsx)(CopyIcon, {});
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("button", {
        ...props,
        type: "button",
        title: label,
        "aria-label": label,
        "aria-disabled": isDisabled,
        "data-nextjs-data-runtime-error-copy-button": true,
        className: "nextjs-data-runtime-error-copy-button nextjs-data-runtime-error-copy-button--" + copyState.state,
        onClick: ()=>{
            if (!isDisabled) {
                copy();
            }
        },
        children: [
            renderedIcon,
            copyState.state === 'error' ? " " + copyState.error : null
        ]
    });
}
function CopyIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "16",
        height: "16",
        viewBox: "0 0 24 24",
        fill: "transparent",
        stroke: "currentColor",
        strokeWidth: "1.5",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                width: "14",
                height: "14",
                x: "8",
                y: "8",
                rx: "2",
                ry: "2"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"
            })
        ]
    });
}
function CopySuccessIcon() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("svg", {
        height: "16",
        xlinkTitle: "copied",
        viewBox: "0 0 16 16",
        width: "16",
        stroke: "currentColor",
        fill: "currentColor",
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
            d: "M13.78 4.22a.75.75 0 0 1 0 1.06l-7.25 7.25a.75.75 0 0 1-1.06 0L2.22 9.28a.751.751 0 0 1 .018-1.042.751.751 0 0 1 1.042-.018L6 10.94l6.72-6.72a.75.75 0 0 1 1.06 0Z"
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/nodejs-inspector.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "NodejsInspectorCopyButton", {
    enumerable: true,
    get: function() {
        return NodejsInspectorCopyButton;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _copybutton = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/copy-button/index.js [client] (ecmascript)");
// Inline this helper to avoid widely used across the codebase,
// as for this feature the Chrome detector doesn't need to be super accurate.
function isChrome() {
    if (typeof window === 'undefined') return false;
    const isChromium = 'chrome' in window && window.chrome;
    const vendorName = window.navigator.vendor;
    return isChromium !== null && isChromium !== undefined && vendorName === 'Google Inc.';
}
const isChromeBrowser = isChrome();
function NodeJsIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "44",
        height: "44",
        viewBox: "0 0 44 44",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("g", {
                clipPath: "url(#clip0_1546_2)",
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M22 0L41.0526 11V33L22 44L2.94744 33V11L22 0Z",
                        fill: "#71BD55"
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                        d: "M41.0493 11.0001L41.0493 33L22 1.5583e-07L41.0493 11.0001Z",
                        fill: "#A1DF83"
                    })
                ]
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("defs", {
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("clipPath", {
                    id: "clip0_1546_2",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)("rect", {
                        width: "44",
                        height: "44",
                        fill: "white"
                    })
                })
            })
        ]
    });
}
function NodeJsDisabledIcon(props) {
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
        width: "44",
        height: "44",
        viewBox: "0 0 44 44",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        ...props,
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M4.44744 11.866L22 1.73205L39.5526 11.866V32.134L22 42.2679L4.44744 32.134V11.866Z",
                stroke: "currentColor",
                fill: "transparent",
                strokeWidth: "3",
                strokeLinejoin: "round"
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)("path", {
                d: "M22 2L39 32",
                stroke: "currentColor",
                strokeWidth: "3",
                strokeLinecap: "round"
            })
        ]
    });
}
const label = 'Learn more about enabling Node.js inspector for server code with Chrome DevTools';
function NodejsInspectorCopyButton(param) {
    let { devtoolsFrontendUrl } = param;
    const content = devtoolsFrontendUrl || '';
    const disabled = !content || !isChromeBrowser;
    if (disabled) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            title: label,
            "aria-label": label,
            className: "nextjs-data-runtime-error-inspect-link",
            href: "https://nextjs.org/docs/app/building-your-application/configuring/debugging#server-side-code",
            target: "_blank",
            rel: "noopener noreferrer",
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(NodeJsDisabledIcon, {
                width: 16,
                height: 16
            })
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_copybutton.CopyButton, {
        "data-nextjs-data-runtime-error-copy-devtools-url": true,
        actionLabel: 'Copy Chrome DevTools URL',
        successLabel: "Copied",
        content: content,
        icon: /*#__PURE__*/ (0, _jsxruntime.jsx)(NodeJsIcon, {
            width: 16,
            height: 16
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nodejs-inspector.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/console-error.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// To distinguish from React error.digest, we use a different symbol here to determine if the error is from console.error or unhandled promise rejection.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createUnhandledError: null,
    getUnhandledErrorType: null,
    isUnhandledConsoleOrRejection: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createUnhandledError: function() {
        return createUnhandledError;
    },
    getUnhandledErrorType: function() {
        return getUnhandledErrorType;
    },
    isUnhandledConsoleOrRejection: function() {
        return isUnhandledConsoleOrRejection;
    }
});
const digestSym = Symbol.for('next.console.error.digest');
const consoleTypeSym = Symbol.for('next.console.error.type');
function createUnhandledError(message) {
    const error = typeof message === 'string' ? Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    }) : message;
    error[digestSym] = 'NEXT_UNHANDLED_ERROR';
    error[consoleTypeSym] = typeof message === 'string' ? 'string' : 'error';
    return error;
}
const isUnhandledConsoleOrRejection = (error)=>{
    return error && error[digestSym] === 'NEXT_UNHANDLED_ERROR';
};
const getUnhandledErrorType = (error)=>{
    return error[consoleTypeSym];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=console-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Toast/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-toast {\n    position: fixed;\n    bottom: var(--size-gap-double);\n    left: var(--size-gap-double);\n    max-width: 420px;\n    z-index: 9000;\n    box-shadow: 0px var(--size-gap-double) var(--size-gap-quad)\n      rgba(0, 0, 0, 0.25);\n  }\n\n  @media (max-width: 440px) {\n    .nextjs-toast {\n      max-width: 90vw;\n      left: 5vw;\n    }\n  }\n\n  .nextjs-toast-errors-parent {\n    padding: 16px;\n    border-radius: var(--size-gap-quad);\n    font-weight: 500;\n    color: var(--color-ansi-bright-white);\n    background-color: var(--color-ansi-red);\n  }\n\n  .nextjs-static-indicator-toast-wrapper {\n    width: 30px;\n    height: 30px;\n    overflow: hidden;\n    border: 0;\n    border-radius: var(--size-gap-triple);\n    background: var(--color-background);\n    color: var(--color-font);\n    transition: all 0.3s ease-in-out;\n    box-shadow:\n      inset 0 0 0 1px var(--color-border-shadow),\n      0 11px 40px 0 rgba(0, 0, 0, 0.25),\n      0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  }\n\n  .nextjs-static-indicator-toast-wrapper:hover {\n    width: 140px;\n  }\n\n  .nextjs-static-indicator-toast-icon {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    width: 30px;\n    height: 30px;\n  }\n\n  .nextjs-static-indicator-toast-text {\n    font-size: 14px;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    opacity: 0;\n    white-space: nowrap;\n    transition: opacity 0.3s ease-in-out;\n    line-height: 30px;\n    position: absolute;\n    left: 30px;\n    top: 0;\n  }\n\n  .nextjs-static-indicator-toast-wrapper:hover\n    .nextjs-static-indicator-toast-text {\n    opacity: 1;\n  }\n\n  .nextjs-static-indicator-toast-wrapper button {\n    color: var(--color-font);\n    opacity: 0.8;\n    background: none;\n    border: none;\n    margin-left: 6px;\n    margin-top: -2px;\n    outline: 0;\n  }\n\n  .nextjs-static-indicator-toast-wrapper button:focus {\n    opacity: 1;\n  }\n\n  .nextjs-static-indicator-toast-wrapper button > svg {\n    width: 16px;\n    height: 16px;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Toast/Toast.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Toast", {
    enumerable: true,
    get: function() {
        return Toast;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const Toast = function Toast(param) {
    let { onClick, children, className, ...props } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
        ...props,
        onClick: (e)=>{
            e.preventDefault();
            return onClick == null ? void 0 : onClick();
        },
        className: "nextjs-toast" + (className ? ' ' + className : ''),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
            "data-nextjs-toast-wrapper": true,
            children: children
        })
    });
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Toast.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Toast/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Toast: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Toast: function() {
        return _Toast.Toast;
    },
    styles: function() {
        return _styles.styles;
    }
});
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Toast/styles.js [client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Toast/Toast.js [client] (ecmascript)");
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Errors/ErrorIndicator/ErrorIndicator.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ErrorIndicator", {
    enumerable: true,
    get: function() {
        return ErrorIndicator;
    }
});
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Toast/index.js [client] (ecmascript)");
const _CloseIcon = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/icons/CloseIcon.js [client] (ecmascript)");
function ErrorIndicator(param) {
    let { hasStaticIndicator, readyErrors, fullscreen, hide } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Toast.Toast, {
        "data-nextjs-toast": true,
        className: "nextjs-toast-errors-parent" + (hasStaticIndicator ? ' nextjs-error-with-static' : ''),
        onClick: fullscreen,
        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
            className: "nextjs-toast-errors",
            children: [
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("svg", {
                    xmlns: "http://www.w3.org/2000/svg",
                    width: "24",
                    height: "24",
                    viewBox: "0 0 24 24",
                    fill: "none",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round",
                    children: [
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("circle", {
                            cx: "12",
                            cy: "12",
                            r: "10"
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                            x1: "12",
                            y1: "8",
                            x2: "12",
                            y2: "12"
                        }),
                        /*#__PURE__*/ (0, _jsxruntime.jsx)("line", {
                            x1: "12",
                            y1: "16",
                            x2: "12.01",
                            y2: "16"
                        })
                    ]
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                    children: [
                        readyErrors.length,
                        " issue",
                        readyErrors.length > 1 ? 's' : ''
                    ]
                }),
                /*#__PURE__*/ (0, _jsxruntime.jsx)("button", {
                    "data-nextjs-toast-errors-hide-button": true,
                    className: "nextjs-toast-hide-button",
                    type: "button",
                    onClick: (e)=>{
                        e.stopPropagation();
                        hide();
                    },
                    "aria-label": "Hide Issues",
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_CloseIcon.CloseIcon, {})
                })
            ]
        })
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ErrorIndicator.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/Errors.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    Errors: null,
    styles: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    Errors: function() {
        return Errors;
    },
    styles: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)");
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/index.js [client] (ecmascript)");
const _LeftRightDialogHeader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/LeftRightDialogHeader/index.js [client] (ecmascript)");
const _Overlay = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/index.js [client] (ecmascript)");
const _geterrorbytype = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/get-error-by-type.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/RuntimeError/index.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)");
const _errorsource = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/error-source.js [client] (ecmascript)");
const _hotlinkedtext = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/hot-linked-text/index.js [client] (ecmascript)");
const _componentstackpseudohtml = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/RuntimeError/component-stack-pseudo-html.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/hydration-error-info.js [client] (ecmascript)");
const _nodejsinspector = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/nodejs-inspector.js [client] (ecmascript)");
const _copybutton = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/copy-button/index.js [client] (ecmascript)");
const _consoleerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/console-error.js [client] (ecmascript)");
const _errortelemetryutils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/error-telemetry-utils.js [client] (ecmascript)");
const _ErrorIndicator = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Errors/ErrorIndicator/ErrorIndicator.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  .nextjs-error-with-static {\n    bottom: calc(var(--size-gap-double) * 4.5);\n  }\n  .nextjs-container-errors-header {\n    position: relative;\n  }\n  .nextjs-container-errors-header > h1 {\n    font-size: var(--size-font-big);\n    line-height: var(--size-font-bigger);\n    font-weight: bold;\n    margin: calc(var(--size-gap-double) * 1.5) 0;\n    color: var(--color-title-h1);\n  }\n  .nextjs-container-errors-header small {\n    font-size: var(--size-font-small);\n    color: var(--color-accents-1);\n    margin-left: var(--size-gap-double);\n  }\n  .nextjs-container-errors-header small > span {\n    font-family: var(--font-stack-monospace);\n  }\n  .nextjs-container-errors-header p {\n    font-size: var(--size-font-small);\n    line-height: var(--size-font-big);\n    white-space: pre-wrap;\n  }\n  .nextjs__container_errors_desc {\n    font-family: var(--font-stack-monospace);\n    padding: var(--size-gap) var(--size-gap-double);\n    border-left: 2px solid var(--color-text-color-red-1);\n    margin-top: var(--size-gap);\n    font-weight: bold;\n    color: var(--color-text-color-red-1);\n    background-color: var(--color-text-background-red-1);\n  }\n  p.nextjs__container_errors__link {\n    margin: var(--size-gap-double) auto;\n    color: var(--color-text-color-red-1);\n    font-weight: 600;\n    font-size: 15px;\n  }\n  p.nextjs__container_errors__notes {\n    margin: var(--size-gap-double) auto;\n    color: var(--color-stack-notes);\n    font-weight: 600;\n    font-size: 15px;\n  }\n  .nextjs-container-errors-header > div > small {\n    margin: 0;\n    margin-top: var(--size-gap-half);\n  }\n  .nextjs-container-errors-header > p > a {\n    color: inherit;\n    font-weight: bold;\n  }\n  .nextjs-container-errors-body > h2:not(:first-child) {\n    margin-top: calc(var(--size-gap-double) + var(--size-gap));\n  }\n  .nextjs-container-errors-body > h2 {\n    color: var(--color-title-color);\n    margin-bottom: var(--size-gap);\n    font-size: var(--size-font-big);\n  }\n  .nextjs__container_errors__component-stack {\n    padding: 12px 32px;\n    color: var(--color-ansi-fg);\n    background: var(--color-ansi-bg);\n  }\n  .nextjs-toast-errors-parent {\n    cursor: pointer;\n    transition: transform 0.2s ease;\n  }\n  .nextjs-toast-errors-parent:hover {\n    transform: scale(1.1);\n  }\n  .nextjs-toast-errors {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n  }\n  .nextjs-toast-errors > svg {\n    margin-right: var(--size-gap);\n  }\n  .nextjs-toast-hide-button {\n    margin-left: var(--size-gap-triple);\n    border: none;\n    background: none;\n    color: var(--color-ansi-bright-white);\n    padding: 0;\n    transition: opacity 0.25s ease;\n    opacity: 0.7;\n  }\n  .nextjs-toast-hide-button:hover {\n    opacity: 1;\n  }\n  .nextjs-container-errors-header\n    > .nextjs-container-build-error-version-status {\n    position: absolute;\n    top: 0;\n    right: 0;\n  }\n  .nextjs__container_errors_inspect_copy_button {\n    cursor: pointer;\n    background: none;\n    border: none;\n    color: var(--color-ansi-bright-white);\n    font-size: 1.5rem;\n    padding: 0;\n    margin: 0;\n    margin-left: var(--size-gap);\n    transition: opacity 0.25s ease;\n  }\n  .nextjs__container_errors__error_title {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n  .nextjs-data-runtime-error-inspect-link,\n  .nextjs-data-runtime-error-inspect-link:hover {\n    margin: 0 8px;\n    color: inherit;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function isNextjsLink(text) {
    return text.startsWith('https://nextjs.org');
}
function ErrorDescription(param) {
    let { error, hydrationWarning } = param;
    const isUnhandledOrReplayError = (0, _consoleerror.isUnhandledConsoleOrRejection)(error);
    const unhandledErrorType = isUnhandledOrReplayError ? (0, _consoleerror.getUnhandledErrorType)(error) : null;
    const isConsoleErrorStringMessage = unhandledErrorType === 'string';
    // If the error is:
    // - hydration warning
    // - captured console error or unhandled rejection
    // skip displaying the error name
    const title = isUnhandledOrReplayError && isConsoleErrorStringMessage || hydrationWarning ? '' : error.name + ': ';
    // If it's replayed error, display the environment name
    const environmentName = 'environmentName' in error ? error['environmentName'] : '';
    const envPrefix = environmentName ? "[ " + environmentName + " ] " : '';
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            envPrefix,
            title,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                text: hydrationWarning || error.message,
                matcher: isNextjsLink
            })
        ]
    });
}
function getErrorSignature(ev) {
    const { event } = ev;
    switch(event.type){
        case _shared.ACTION_UNHANDLED_ERROR:
        case _shared.ACTION_UNHANDLED_REJECTION:
            {
                return event.reason.name + "::" + event.reason.message + "::" + event.reason.stack;
            }
        default:
            {}
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const _ = event;
    return '';
}
function Errors(param) {
    let { isAppDir, errors, initialDisplayState, versionInfo, hasStaticIndicator, debugInfo } = param;
    var _activeError_componentStackFrames;
    const [lookups, setLookups] = (0, _react.useState)({});
    const [readyErrors, nextError] = (0, _react.useMemo)(()=>{
        let ready = [];
        let next = null;
        // Ensure errors are displayed in the order they occurred in:
        for(let idx = 0; idx < errors.length; ++idx){
            const e = errors[idx];
            const { id } = e;
            if (id in lookups) {
                ready.push(lookups[id]);
                continue;
            }
            // Check for duplicate errors
            if (idx > 0) {
                const prev = errors[idx - 1];
                if (getErrorSignature(prev) === getErrorSignature(e)) {
                    continue;
                }
            }
            next = e;
            break;
        }
        return [
            ready,
            next
        ];
    }, [
        errors,
        lookups
    ]);
    const isLoading = (0, _react.useMemo)(()=>{
        return readyErrors.length < 1 && Boolean(errors.length);
    }, [
        errors.length,
        readyErrors.length
    ]);
    (0, _react.useEffect)(()=>{
        if (nextError == null) {
            return;
        }
        let mounted = true;
        (0, _geterrorbytype.getErrorByType)(nextError, isAppDir).then((resolved)=>{
            // We don't care if the desired error changed while we were resolving,
            // thus we're not tracking it using a ref. Once the work has been done,
            // we'll store it.
            if (mounted) {
                setLookups((m)=>({
                        ...m,
                        [resolved.id]: resolved
                    }));
            }
        }, ()=>{
        // TODO: handle this, though an edge case
        });
        return ()=>{
            mounted = false;
        };
    }, [
        nextError,
        isAppDir
    ]);
    const [displayState, setDisplayState] = (0, _react.useState)(initialDisplayState);
    const [activeIdx, setActiveIndex] = (0, _react.useState)(0);
    const previous = (0, _react.useCallback)(()=>setActiveIndex((v)=>Math.max(0, v - 1)), []);
    const next = (0, _react.useCallback)(()=>setActiveIndex((v)=>Math.max(0, Math.min(readyErrors.length - 1, v + 1))), [
        readyErrors.length
    ]);
    const activeError = (0, _react.useMemo)(()=>{
        var _readyErrors_activeIdx;
        return (_readyErrors_activeIdx = readyErrors[activeIdx]) != null ? _readyErrors_activeIdx : null;
    }, [
        activeIdx,
        readyErrors
    ]);
    // Reset component state when there are no errors to be displayed.
    // This should never happen, but lets handle it.
    (0, _react.useEffect)(()=>{
        if (errors.length < 1) {
            setLookups({});
            setDisplayState('hidden');
            setActiveIndex(0);
        }
    }, [
        errors.length
    ]);
    const minimize = (0, _react.useCallback)(()=>setDisplayState('minimized'), []);
    const hide = (0, _react.useCallback)(()=>setDisplayState('hidden'), []);
    const fullscreen = (0, _react.useCallback)(()=>setDisplayState('fullscreen'), []);
    // This component shouldn't be rendered with no errors, but if it is, let's
    // handle it gracefully by rendering nothing.
    if (errors.length < 1 || activeError == null) {
        return null;
    }
    if (isLoading) {
        // TODO: better loading state
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Overlay.Overlay, {});
    }
    if (displayState === 'hidden') {
        return null;
    }
    if (displayState === 'minimized') {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(_ErrorIndicator.ErrorIndicator, {
            hasStaticIndicator: hasStaticIndicator,
            readyErrors: readyErrors,
            fullscreen: fullscreen,
            hide: hide
        });
    }
    const error = activeError.error;
    const isServerError = [
        'server',
        'edge-server'
    ].includes((0, _errorsource.getErrorSource)(error) || '');
    const isUnhandledError = (0, _consoleerror.isUnhandledConsoleOrRejection)(error);
    const errorDetails = error.details || {};
    const notes = errorDetails.notes || '';
    const [warningTemplate, serverContent, clientContent] = errorDetails.warning || [
        null,
        '',
        ''
    ];
    const hydrationErrorType = (0, _hydrationerrorinfo.getHydrationWarningType)(warningTemplate);
    const hydrationWarning = warningTemplate ? warningTemplate.replace('%s', serverContent).replace('%s', clientContent).replace('%s', '') // remove the %s for stack
    .replace(/%s$/, '') // If there's still a %s at the end, remove it
    .replace(/^Warning: /, '').replace(/^Error: /, '') : null;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_Overlay.Overlay, {
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_Dialog.Dialog, {
            type: "error",
            "aria-labelledby": "nextjs__container_errors_label",
            "aria-describedby": "nextjs__container_errors_desc",
            onClose: isServerError ? undefined : minimize,
            children: /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogContent, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsxs)(_Dialog.DialogHeader, {
                        className: "nextjs-container-errors-header",
                        children: [
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)(_LeftRightDialogHeader.LeftRightDialogHeader, {
                                previous: activeIdx > 0 ? previous : null,
                                next: activeIdx < readyErrors.length - 1 ? next : null,
                                close: isServerError ? undefined : minimize,
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("small", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                children: activeIdx + 1
                                            }),
                                            " of",
                                            ' ',
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)("span", {
                                                "data-nextjs-dialog-header-total-count": true,
                                                children: readyErrors.length
                                            }),
                                            ' issue',
                                            readyErrors.length < 2 ? '' : 's'
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_VersionStalenessInfo.VersionStalenessInfo, {
                                        versionInfo: versionInfo
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                                className: "nextjs__container_errors__error_title",
                                "data-nextjs-error-code": (0, _errortelemetryutils.extractNextErrorCode)(error),
                                children: [
                                    /*#__PURE__*/ (0, _jsxruntime.jsx)("h1", {
                                        id: "nextjs__container_errors_label",
                                        className: "nextjs__container_errors_label",
                                        children: isServerError ? 'Server Error' : isUnhandledError ? 'Console Error' : 'Unhandled Runtime Error'
                                    }),
                                    /*#__PURE__*/ (0, _jsxruntime.jsxs)("span", {
                                        children: [
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_copybutton.CopyButton, {
                                                "data-nextjs-data-runtime-error-copy-stack": true,
                                                actionLabel: "Copy error stack",
                                                successLabel: "Copied",
                                                content: error.stack || '',
                                                disabled: !error.stack
                                            }),
                                            /*#__PURE__*/ (0, _jsxruntime.jsx)(_nodejsinspector.NodejsInspectorCopyButton, {
                                                devtoolsFrontendUrl: debugInfo == null ? void 0 : debugInfo.devtoolsFrontendUrl
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                id: "nextjs__container_errors_desc",
                                className: "nextjs__container_errors_desc",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorDescription, {
                                    error: error,
                                    hydrationWarning: hydrationWarning
                                })
                            }),
                            notes ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    id: "nextjs__container_errors__notes",
                                    className: "nextjs__container_errors__notes",
                                    children: notes
                                })
                            }) : null,
                            hydrationWarning ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                id: "nextjs__container_errors__link",
                                className: "nextjs__container_errors__link",
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hotlinkedtext.HotlinkedText, {
                                    text: "See more info here: https://nextjs.org/docs/messages/react-hydration-error"
                                })
                            }) : null,
                            hydrationWarning && (((_activeError_componentStackFrames = activeError.componentStackFrames) == null ? void 0 : _activeError_componentStackFrames.length) || !!errorDetails.reactOutputComponentDiff) ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_componentstackpseudohtml.PseudoHtmlDiff, {
                                className: "nextjs__container_errors__component-stack",
                                hydrationMismatchType: hydrationErrorType,
                                componentStackFrames: activeError.componentStackFrames || [],
                                firstContent: serverContent,
                                secondContent: clientContent,
                                reactOutputComponentDiff: errorDetails.reactOutputComponentDiff
                            }) : null,
                            isServerError ? /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)("small", {
                                    children: "This error happened while generating the page. Any console logs will be displayed in the terminal window."
                                })
                            }) : undefined
                        ]
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_Dialog.DialogBody, {
                        className: "nextjs-container-errors-body",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_RuntimeError.RuntimeError, {
                            error: activeError
                        }, activeError.id.toString())
                    })
                ]
            })
        })
    });
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Errors.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/styles/Base.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Base", {
    enumerable: true,
    get: function() {
        return Base;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          --size-gap-half: 4px;\n          --size-gap: 8px;\n          --size-gap-double: 16px;\n          --size-gap-triple: 24px;\n          --size-gap-quad: 32px;\n\n          --size-font-small: 14px;\n          --size-font: 16px;\n          --size-font-big: 20px;\n          --size-font-bigger: 24px;\n\n          --color-background: white;\n          --color-font: #757575;\n          --color-backdrop: rgba(17, 17, 17, 0.2);\n          --color-border-shadow: rgba(0, 0, 0, 0.145);\n\n          --color-title-color: #1f1f1f;\n          --color-stack-h6: #222;\n          --color-stack-headline: #666;\n          --color-stack-subline: #999;\n          --color-stack-notes: #777;\n\n          --color-accents-1: #808080;\n          --color-accents-2: #222222;\n          --color-accents-3: #404040;\n\n          --color-text-color-red-1: #ff5555;\n          --color-text-background-red-1: #fff9f9;\n\n          --font-stack-monospace: 'SFMono-Regular', Consolas, 'Liberation Mono',\n            Menlo, Courier, monospace;\n          --font-stack-sans: -apple-system, 'Source Sans Pro', sans-serif;\n\n          --color-ansi-selection: rgba(95, 126, 151, 0.48);\n          --color-ansi-bg: #111111;\n          --color-ansi-fg: #cccccc;\n\n          --color-ansi-white: #777777;\n          --color-ansi-black: #141414;\n          --color-ansi-blue: #00aaff;\n          --color-ansi-cyan: #88ddff;\n          --color-ansi-green: #98ec65;\n          --color-ansi-magenta: #aa88ff;\n          --color-ansi-red: #ff5555;\n          --color-ansi-yellow: #ffcc33;\n          --color-ansi-bright-white: #ffffff;\n          --color-ansi-bright-black: #777777;\n          --color-ansi-bright-blue: #33bbff;\n          --color-ansi-bright-cyan: #bbecff;\n          --color-ansi-bright-green: #b6f292;\n          --color-ansi-bright-magenta: #cebbff;\n          --color-ansi-bright-red: #ff8888;\n          --color-ansi-bright-yellow: #ffd966;\n        }\n\n        @media (prefers-color-scheme: dark) {\n          :host {\n            --color-background: rgb(28, 28, 30);\n            --color-font: white;\n            --color-backdrop: rgb(44, 44, 46);\n            --color-border-shadow: rgba(255, 255, 255, 0.145);\n\n            --color-title-color: #fafafa;\n            --color-stack-h6: rgb(200, 200, 204);\n            --color-stack-headline: rgb(99, 99, 102);\n            --color-stack-notes: #a9a9a9;\n            --color-stack-subline: rgb(121, 121, 121);\n\n            --color-accents-3: rgb(118, 118, 118);\n\n            --color-text-background-red-1: #2a1e1e;\n          }\n        }\n\n        .mono {\n          font-family: var(--font-stack-monospace);\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-bottom: var(--size-gap);\n          font-weight: 500;\n          line-height: 1.5;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function Base() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _nooptemplate.noop)(_templateObject())
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=Base.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/CodeFrame/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-codeframe] {\n    overflow: auto;\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n    margin-bottom: var(--size-gap-double);\n  }\n  [data-nextjs-codeframe]::selection,\n  [data-nextjs-codeframe] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-codeframe] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n\n  [data-nextjs-codeframe] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n  [data-nextjs-codeframe] > div {\n    display: inline-block;\n    width: auto;\n    min-width: 100%;\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n  }\n  [data-nextjs-codeframe] > div > p {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    cursor: pointer;\n    margin: 0;\n  }\n  [data-nextjs-codeframe] > div > p:hover {\n    text-decoration: underline dotted;\n  }\n  [data-nextjs-codeframe] div > p > svg {\n    width: auto;\n    height: 1em;\n    margin-left: 8px;\n  }\n  [data-nextjs-codeframe] div > pre {\n    overflow: hidden;\n    display: inline-block;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-dialog-overlay] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    overflow: auto;\n    z-index: 9000;\n\n    display: flex;\n    align-content: center;\n    align-items: center;\n    flex-direction: column;\n    padding: 10vh 15px 0;\n  }\n\n  @media (max-height: 812px) {\n    [data-nextjs-dialog-overlay] {\n      padding: 15px 15px 0;\n    }\n  }\n\n  [data-nextjs-dialog-backdrop] {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: var(--color-backdrop);\n    pointer-events: all;\n    z-index: -1;\n  }\n\n  [data-nextjs-dialog-backdrop-fixed] {\n    cursor: not-allowed;\n    -webkit-backdrop-filter: blur(8px);\n    backdrop-filter: blur(8px);\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/styles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "styles", {
    enumerable: true,
    get: function() {
        return styles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n  [data-nextjs-terminal] {\n    border-radius: var(--size-gap-half);\n    background-color: var(--color-ansi-bg);\n    color: var(--color-ansi-fg);\n  }\n  [data-nextjs-terminal]::selection,\n  [data-nextjs-terminal] *::selection {\n    background-color: var(--color-ansi-selection);\n  }\n  [data-nextjs-terminal] * {\n    color: inherit;\n    background-color: transparent;\n    font-family: var(--font-stack-monospace);\n  }\n  [data-nextjs-terminal] > * {\n    margin: 0;\n    padding: calc(var(--size-gap) + var(--size-gap-half))\n      calc(var(--size-gap-double) + var(--size-gap-half));\n  }\n\n  [data-nextjs-terminal] pre {\n    white-space: pre-wrap;\n    word-break: break-word;\n  }\n\n  [data-with-open-in-editor-link] svg {\n    width: auto;\n    height: var(--size-font-small);\n    margin-left: var(--size-gap);\n  }\n  [data-with-open-in-editor-link] {\n    cursor: pointer;\n  }\n  [data-with-open-in-editor-link]:hover {\n    text-decoration: underline dotted;\n  }\n  [data-with-open-in-editor-link-source-file] {\n    border-bottom: 1px solid var(--color-ansi-bright-black);\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    line-break: anywhere;\n  }\n  [data-with-open-in-editor-link-import-trace] {\n    margin-left: var(--size-gap-double);\n  }\n  [data-nextjs-terminal] a {\n    color: inherit;\n  }\n"
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
const styles = (0, _nooptemplate.noop)(_templateObject());
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=styles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/styles/ComponentStyles.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ComponentStyles", {
    enumerable: true,
    get: function() {
        return ComponentStyles;
    }
});
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _styles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/CodeFrame/styles.js [client] (ecmascript)");
const _Dialog = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Dialog/index.js [client] (ecmascript)");
const _styles1 = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/LeftRightDialogHeader/styles.js [client] (ecmascript)");
const _styles2 = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Overlay/styles.js [client] (ecmascript)");
const _styles3 = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Terminal/styles.js [client] (ecmascript)");
const _Toast = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/Toast/index.js [client] (ecmascript)");
const _VersionStalenessInfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/VersionStalenessInfo/index.js [client] (ecmascript)");
const _BuildError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/BuildError.js [client] (ecmascript)");
const _Errors = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/Errors.js [client] (ecmascript)");
const _RuntimeError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/RuntimeError/index.js [client] (ecmascript)");
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n        ",
        "\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function ComponentStyles() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _nooptemplate.noop)(_templateObject(), _styles2.styles, _Toast.styles, _Dialog.styles, _styles1.styles, _styles.styles, _styles3.styles, _BuildError.styles, _Errors.styles, _RuntimeError.styles, _VersionStalenessInfo.styles)
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ComponentStyles.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/styles/CssReset.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CssReset", {
    enumerable: true,
    get: function() {
        return CssReset;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _tagged_template_literal_loose = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_tagged_template_literal_loose.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _nooptemplate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/helpers/noop-template.js [client] (ecmascript)");
function _templateObject() {
    const data = _tagged_template_literal_loose._([
        "\n        :host {\n          all: initial;\n\n          /* the direction property is not reset by 'all' */\n          direction: ltr;\n        }\n\n        /*!\n         * Bootstrap Reboot v4.4.1 (https://getbootstrap.com/)\n         * Copyright 2011-2019 The Bootstrap Authors\n         * Copyright 2011-2019 Twitter, Inc.\n         * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n         * Forked from Normalize.css, licensed MIT (https://github.com/necolas/normalize.css/blob/master/LICENSE.md)\n         */\n        *,\n        *::before,\n        *::after {\n          box-sizing: border-box;\n        }\n\n        :host {\n          font-family: sans-serif;\n          line-height: 1.15;\n          -webkit-text-size-adjust: 100%;\n          -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n        }\n\n        article,\n        aside,\n        figcaption,\n        figure,\n        footer,\n        header,\n        hgroup,\n        main,\n        nav,\n        section {\n          display: block;\n        }\n\n        :host {\n          margin: 0;\n          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,\n            'Helvetica Neue', Arial, 'Noto Sans', sans-serif,\n            'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',\n            'Noto Color Emoji';\n          font-size: 16px;\n          font-weight: 400;\n          line-height: 1.5;\n          color: var(--color-font);\n          text-align: left;\n          background-color: #fff;\n        }\n\n        [tabindex='-1']:focus:not(:focus-visible) {\n          outline: 0 !important;\n        }\n\n        hr {\n          box-sizing: content-box;\n          height: 0;\n          overflow: visible;\n        }\n\n        h1,\n        h2,\n        h3,\n        h4,\n        h5,\n        h6 {\n          margin-top: 0;\n          margin-bottom: 8px;\n        }\n\n        p {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        abbr[title],\n        abbr[data-original-title] {\n          text-decoration: underline;\n          -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n          cursor: help;\n          border-bottom: 0;\n          -webkit-text-decoration-skip-ink: none;\n          text-decoration-skip-ink: none;\n        }\n\n        address {\n          margin-bottom: 16px;\n          font-style: normal;\n          line-height: inherit;\n        }\n\n        ol,\n        ul,\n        dl {\n          margin-top: 0;\n          margin-bottom: 16px;\n        }\n\n        ol ol,\n        ul ul,\n        ol ul,\n        ul ol {\n          margin-bottom: 0;\n        }\n\n        dt {\n          font-weight: 700;\n        }\n\n        dd {\n          margin-bottom: 8px;\n          margin-left: 0;\n        }\n\n        blockquote {\n          margin: 0 0 16px;\n        }\n\n        b,\n        strong {\n          font-weight: bolder;\n        }\n\n        small {\n          font-size: 80%;\n        }\n\n        sub,\n        sup {\n          position: relative;\n          font-size: 75%;\n          line-height: 0;\n          vertical-align: baseline;\n        }\n\n        sub {\n          bottom: -0.25em;\n        }\n\n        sup {\n          top: -0.5em;\n        }\n\n        a {\n          color: #007bff;\n          text-decoration: none;\n          background-color: transparent;\n        }\n\n        a:hover {\n          color: #0056b3;\n          text-decoration: underline;\n        }\n\n        a:not([href]) {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        a:not([href]):hover {\n          color: inherit;\n          text-decoration: none;\n        }\n\n        pre,\n        code,\n        kbd,\n        samp {\n          font-family: SFMono-Regular, Menlo, Monaco, Consolas,\n            'Liberation Mono', 'Courier New', monospace;\n          font-size: 1em;\n        }\n\n        pre {\n          margin-top: 0;\n          margin-bottom: 16px;\n          overflow: auto;\n        }\n\n        figure {\n          margin: 0 0 16px;\n        }\n\n        img {\n          vertical-align: middle;\n          border-style: none;\n        }\n\n        svg {\n          overflow: hidden;\n          vertical-align: middle;\n        }\n\n        table {\n          border-collapse: collapse;\n        }\n\n        caption {\n          padding-top: 12px;\n          padding-bottom: 12px;\n          color: #6c757d;\n          text-align: left;\n          caption-side: bottom;\n        }\n\n        th {\n          text-align: inherit;\n        }\n\n        label {\n          display: inline-block;\n          margin-bottom: 8px;\n        }\n\n        button {\n          border-radius: 0;\n        }\n\n        button:focus {\n          outline: 1px dotted;\n          outline: 5px auto -webkit-focus-ring-color;\n        }\n\n        input,\n        button,\n        select,\n        optgroup,\n        textarea {\n          margin: 0;\n          font-family: inherit;\n          font-size: inherit;\n          line-height: inherit;\n        }\n\n        button,\n        input {\n          overflow: visible;\n        }\n\n        button,\n        select {\n          text-transform: none;\n        }\n\n        select {\n          word-wrap: normal;\n        }\n\n        button,\n        [type='button'],\n        [type='reset'],\n        [type='submit'] {\n          -webkit-appearance: button;\n        }\n\n        button:not(:disabled),\n        [type='button']:not(:disabled),\n        [type='reset']:not(:disabled),\n        [type='submit']:not(:disabled) {\n          cursor: pointer;\n        }\n\n        button::-moz-focus-inner,\n        [type='button']::-moz-focus-inner,\n        [type='reset']::-moz-focus-inner,\n        [type='submit']::-moz-focus-inner {\n          padding: 0;\n          border-style: none;\n        }\n\n        input[type='radio'],\n        input[type='checkbox'] {\n          box-sizing: border-box;\n          padding: 0;\n        }\n\n        input[type='date'],\n        input[type='time'],\n        input[type='datetime-local'],\n        input[type='month'] {\n          -webkit-appearance: listbox;\n        }\n\n        textarea {\n          overflow: auto;\n          resize: vertical;\n        }\n\n        fieldset {\n          min-width: 0;\n          padding: 0;\n          margin: 0;\n          border: 0;\n        }\n\n        legend {\n          display: block;\n          width: 100%;\n          max-width: 100%;\n          padding: 0;\n          margin-bottom: 8px;\n          font-size: 24px;\n          line-height: inherit;\n          color: inherit;\n          white-space: normal;\n        }\n\n        progress {\n          vertical-align: baseline;\n        }\n\n        [type='number']::-webkit-inner-spin-button,\n        [type='number']::-webkit-outer-spin-button {\n          height: auto;\n        }\n\n        [type='search'] {\n          outline-offset: -2px;\n          -webkit-appearance: none;\n        }\n\n        [type='search']::-webkit-search-decoration {\n          -webkit-appearance: none;\n        }\n\n        ::-webkit-file-upload-button {\n          font: inherit;\n          -webkit-appearance: button;\n        }\n\n        output {\n          display: inline-block;\n        }\n\n        summary {\n          display: list-item;\n          cursor: pointer;\n        }\n\n        template {\n          display: none;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      "
    ]);
    _templateObject = function() {
        return data;
    };
    return data;
}
function CssReset() {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)("style", {
        children: (0, _nooptemplate.noop)(_templateObject())
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=CssReset.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/pages/ReactDevOverlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return ReactDevOverlay;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _ShadowPortal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/components/ShadowPortal.js [client] (ecmascript)");
const _BuildError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/BuildError.js [client] (ecmascript)");
const _Errors = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/container/Errors.js [client] (ecmascript)");
const _Base = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/styles/Base.js [client] (ecmascript)");
const _ComponentStyles = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/styles/ComponentStyles.js [client] (ecmascript)");
const _CssReset = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/internal/styles/CssReset.js [client] (ecmascript)");
const _ErrorBoundary = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/ErrorBoundary.js [client] (ecmascript)");
const _hooks = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/hooks.js [client] (ecmascript)");
function ReactDevOverlay(param) {
    let { children, preventDisplay, globalOverlay } = param;
    const { isMounted, displayPrevented, hasBuildError, hasRuntimeErrors, state, onComponentError } = (0, _hooks.usePagesReactDevOverlay)(preventDisplay);
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_ErrorBoundary.ErrorBoundary, {
                globalOverlay: globalOverlay,
                isMounted: isMounted,
                onError: onComponentError,
                children: children != null ? children : null
            }),
            isMounted ? /*#__PURE__*/ (0, _jsxruntime.jsxs)(_ShadowPortal.ShadowPortal, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_CssReset.CssReset, {}),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_Base.Base, {}),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_ComponentStyles.ComponentStyles, {}),
                    displayPrevented ? null : hasBuildError ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_BuildError.BuildError, {
                        message: state.buildError,
                        versionInfo: state.versionInfo
                    }) : hasRuntimeErrors ? /*#__PURE__*/ (0, _jsxruntime.jsx)(_Errors.Errors, {
                        isAppDir: false,
                        errors: state.errors,
                        versionInfo: state.versionInfo,
                        initialDisplayState: 'fullscreen'
                    }) : undefined
                ]
            }) : undefined
        ]
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ReactDevOverlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _OldReactDevOverlay = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/OldReactDevOverlay.js [client] (ecmascript)"));
const _ReactDevOverlay = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/_experimental/pages/ReactDevOverlay.js [client] (ecmascript)"));
const _default = Boolean(("TURBOPACK compile-time value", false)) ? _ReactDevOverlay.default : _OldReactDevOverlay.default;
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=ReactDevOverlay.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReactDevOverlay: null,
    getErrorByType: null,
    getServerError: null,
    onBeforeRefresh: null,
    onBuildError: null,
    onBuildOk: null,
    onRefresh: null,
    onVersionInfo: null,
    register: null,
    unregister: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReactDevOverlay: function() {
        return _ReactDevOverlay.default;
    },
    getErrorByType: function() {
        return _geterrorbytype.getErrorByType;
    },
    getServerError: function() {
        return _nodestackframes.getServerError;
    },
    onBeforeRefresh: function() {
        return onBeforeRefresh;
    },
    onBuildError: function() {
        return onBuildError;
    },
    onBuildOk: function() {
        return onBuildOk;
    },
    onRefresh: function() {
        return onRefresh;
    },
    onVersionInfo: function() {
        return onVersionInfo;
    },
    register: function() {
        return register;
    },
    unregister: function() {
        return unregister;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [client] (ecmascript)");
const _bus = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/bus.js [client] (ecmascript)"));
const _parsestack = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-stack.js [client] (ecmascript)");
const _parsecomponentstack = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/parse-component-stack.js [client] (ecmascript)");
const _hydrationerrorinfo = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/hydration-error-info.js [client] (ecmascript)");
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _attachhydrationerrorstate = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/attach-hydration-error-state.js [client] (ecmascript)");
const _geterrorbytype = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/get-error-by-type.js [client] (ecmascript)");
const _nodestackframes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/node-stack-frames.js [client] (ecmascript)");
const _ReactDevOverlay = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/ReactDevOverlay.js [client] (ecmascript)"));
let isRegistered = false;
let stackTraceLimit = undefined;
function handleError(error) {
    if (!error || !(error instanceof Error) || typeof error.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    (0, _attachhydrationerrorstate.attachHydrationErrorState)(error);
    const componentStackTrace = error._componentStack || _hydrationerrorinfo.hydrationErrorState.componentStack;
    const componentStackFrames = typeof componentStackTrace === 'string' ? (0, _parsecomponentstack.parseComponentStack)(componentStackTrace) : undefined;
    // Skip ModuleBuildError and ModuleNotFoundError, as it will be sent through onBuildError callback.
    // This is to avoid same error as different type showing up on client to cause flashing.
    if (error.name !== 'ModuleBuildError' && error.name !== 'ModuleNotFoundError') {
        _bus.emit({
            type: _shared.ACTION_UNHANDLED_ERROR,
            reason: error,
            frames: (0, _parsestack.parseStack)(error.stack),
            componentStackFrames
        });
    }
}
let origConsoleError = console.error;
function nextJsHandleConsoleError() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    // See https://github.com/facebook/react/blob/d50323eb845c5fde0d720cae888bf35dedd05506/packages/react-reconciler/src/ReactFiberErrorLogger.js#L78
    const error = ("TURBOPACK compile-time truthy", 1) ? args[1] : ("TURBOPACK unreachable", undefined);
    (0, _hydrationerrorinfo.storeHydrationErrorStateFromConsoleArgs)(...args);
    handleError(error);
    origConsoleError.apply(window.console, args);
}
function onUnhandledError(event) {
    const error = event == null ? void 0 : event.error;
    handleError(error);
}
function onUnhandledRejection(ev) {
    const reason = ev == null ? void 0 : ev.reason;
    if (!reason || !(reason instanceof Error) || typeof reason.stack !== 'string') {
        // A non-error was thrown, we don't have anything to show. :-(
        return;
    }
    const e = reason;
    _bus.emit({
        type: _shared.ACTION_UNHANDLED_REJECTION,
        reason: reason,
        frames: (0, _parsestack.parseStack)(e.stack)
    });
}
function register() {
    if (isRegistered) {
        return;
    }
    isRegistered = true;
    try {
        const limit = Error.stackTraceLimit;
        Error.stackTraceLimit = 50;
        stackTraceLimit = limit;
    } catch (e) {}
    window.addEventListener('error', onUnhandledError);
    window.addEventListener('unhandledrejection', onUnhandledRejection);
    window.console.error = nextJsHandleConsoleError;
}
function unregister() {
    if (!isRegistered) {
        return;
    }
    isRegistered = false;
    if (stackTraceLimit !== undefined) {
        try {
            Error.stackTraceLimit = stackTraceLimit;
        } catch (e) {}
        stackTraceLimit = undefined;
    }
    window.removeEventListener('error', onUnhandledError);
    window.removeEventListener('unhandledrejection', onUnhandledRejection);
    window.console.error = origConsoleError;
}
function onBuildOk() {
    _bus.emit({
        type: _shared.ACTION_BUILD_OK
    });
}
function onBuildError(message) {
    _bus.emit({
        type: _shared.ACTION_BUILD_ERROR,
        message
    });
}
function onRefresh() {
    _bus.emit({
        type: _shared.ACTION_REFRESH
    });
}
function onBeforeRefresh() {
    _bus.emit({
        type: _shared.ACTION_BEFORE_REFRESH
    });
}
function onVersionInfo(versionInfo) {
    _bus.emit({
        type: _shared.ACTION_VERSION_INFO,
        versionInfo
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/index.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* global location */ // imports polyfill from `@next/polyfill-module` after build.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    emitter: null,
    hydrate: null,
    initialize: null,
    router: null,
    version: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    emitter: function() {
        return emitter;
    },
    hydrate: function() {
        return hydrate;
    },
    initialize: function() {
        return initialize;
    },
    router: function() {
        return router;
    },
    version: function() {
        return version;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/jsx-runtime.js [client] (ecmascript)");
__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/polyfill-module.js [client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react@19.0.0/node_modules/react/index.js [client] (ecmascript)"));
const _client = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/react-dom@19.0.0_react@19.0.0/node_modules/react-dom/client.js [client] (ecmascript)"));
const _headmanagercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/head-manager-context.shared-runtime.js [client] (ecmascript)");
const _mitt = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/mitt.js [client] (ecmascript)"));
const _routercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router-context.shared-runtime.js [client] (ecmascript)");
const _handlesmoothscroll = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/handle-smooth-scroll.js [client] (ecmascript)");
const _isdynamic = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/is-dynamic.js [client] (ecmascript)");
const _querystring = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _runtimeconfigexternal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/runtime-config.external.js [client] (ecmascript)");
const _utils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/utils.js [client] (ecmascript)");
const _portal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/portal/index.js [client] (ecmascript)");
const _headmanager = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/head-manager.js [client] (ecmascript)"));
const _pageloader = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/page-loader.js [client] (ecmascript)"));
const _routeannouncer = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/route-announcer.js [client] (ecmascript)");
const _router = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/router.js [client] (ecmascript)");
const _iserror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/is-error.js [client] (ecmascript)");
const _imageconfigcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/image-config-context.shared-runtime.js [client] (ecmascript)");
const _removebasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/remove-base-path.js [client] (ecmascript)");
const _hasbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/has-base-path.js [client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [client] (ecmascript)");
const _adapters = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/adapters.js [client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [client] (ecmascript)");
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/react-client-callbacks/shared.js [client] (ecmascript)");
const _tracer = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/tracing/tracer.js [client] (ecmascript)"));
const _reporttosocket = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/tracing/report-to-socket.js [client] (ecmascript)"));
const _isnextroutererror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-next-router-error.js [client] (ecmascript)");
const version = "15.1.1-canary.14";
let router;
const emitter = (0, _mitt.default)();
const looseToArray = (input)=>[].slice.call(input);
let initialData;
let defaultLocale = undefined;
let asPath;
let pageLoader;
let appElement;
let headManager;
let initialMatchesMiddleware = false;
let lastAppProps;
let lastRenderReject;
let devClient;
let CachedApp, onPerfEntry;
let CachedComponent;
class Container extends _react.default.Component {
    componentDidCatch(componentErr, info) {
        this.props.fn(componentErr, info);
    }
    componentDidMount() {
        this.scrollToHash();
        // We need to replace the router state if:
        // - the page was (auto) exported and has a query string or search (hash)
        // - it was auto exported and is a dynamic route (to provide params)
        // - if it is a client-side skeleton (fallback render)
        // - if middleware matches the current page (may have rewrite params)
        // - if rewrites in next.config.js match (may have rewrite params)
        if (router.isSsr && (initialData.isFallback || initialData.nextExport && ((0, _isdynamic.isDynamicRoute)(router.pathname) || location.search || ("TURBOPACK compile-time value", false) || initialMatchesMiddleware) || initialData.props && initialData.props.__N_SSG && (location.search || ("TURBOPACK compile-time value", false) || initialMatchesMiddleware))) {
            // update query on mount for exported pages
            router.replace(router.pathname + '?' + String((0, _querystring.assign)((0, _querystring.urlQueryToSearchParams)(router.query), new URLSearchParams(location.search))), asPath, {
                // @ts-ignore
                // WARNING: `_h` is an internal option for handing Next.js
                // client-side hydration. Your app should _never_ use this property.
                // It may change at any time without notice.
                _h: 1,
                // Fallback pages must trigger the data fetch, so the transition is
                // not shallow.
                // Other pages (strictly updating query) happens shallowly, as data
                // requirements would already be present.
                shallow: !initialData.isFallback && !initialMatchesMiddleware
            }).catch((err)=>{
                if (!err.cancelled) throw err;
            });
        }
    }
    componentDidUpdate() {
        this.scrollToHash();
    }
    scrollToHash() {
        let { hash } = location;
        hash = hash && hash.substring(1);
        if (!hash) return;
        const el = document.getElementById(hash);
        if (!el) return;
        // If we call scrollIntoView() in here without a setTimeout
        // it won't scroll properly.
        setTimeout(()=>el.scrollIntoView(), 0);
    }
    render() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        } else {
            const ReactDevOverlay = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)").ReactDevOverlay;
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(ReactDevOverlay, {
                children: this.props.children
            });
        }
    }
}
async function initialize(opts) {
    if (opts === void 0) opts = {};
    _tracer.default.onSpanEnd(_reporttosocket.default);
    // This makes sure this specific lines are removed in production
    if ("TURBOPACK compile-time truthy", 1) {
        devClient = opts.devClient;
    }
    initialData = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
    window.__NEXT_DATA__ = initialData;
    defaultLocale = initialData.defaultLocale;
    const prefix = initialData.assetPrefix || '';
    self.__next_set_public_path__("" + prefix + "/_next/") //eslint-disable-line
    ;
    // Initialize next/config with the environment configuration
    (0, _runtimeconfigexternal.setConfig)({
        serverRuntimeConfig: {},
        publicRuntimeConfig: initialData.runtimeConfig || {}
    });
    asPath = (0, _utils.getURL)();
    // make sure not to attempt stripping basePath for 404s
    if ((0, _hasbasepath.hasBasePath)(asPath)) {
        asPath = (0, _removebasepath.removeBasePath)(asPath);
    }
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    if (initialData.scriptLoader) {
        const { initScriptLoader } = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/script.js [client] (ecmascript)");
        initScriptLoader(initialData.scriptLoader);
    }
    pageLoader = new _pageloader.default(initialData.buildId, prefix);
    const register = (param)=>{
        let [r, f] = param;
        return pageLoader.routeLoader.onEntrypoint(r, f);
    };
    if (window.__NEXT_P) {
        // Defer page registration for another tick. This will increase the overall
        // latency in hydrating the page, but reduce the total blocking time.
        window.__NEXT_P.map((p)=>setTimeout(()=>register(p), 0));
    }
    window.__NEXT_P = [];
    window.__NEXT_P.push = register;
    headManager = (0, _headmanager.default)();
    headManager.getIsSsr = ()=>{
        return router.isSsr;
    };
    appElement = document.getElementById('__next');
    return {
        assetPrefix: prefix
    };
}
function renderApp(App, appProps) {
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(App, {
        ...appProps
    });
}
function AppContainer(param) {
    let { children } = param;
    // Create a memoized value for next/navigation router context.
    const adaptedForAppRouter = _react.default.useMemo({
        "AppContainer.useMemo[adaptedForAppRouter]": ()=>{
            return (0, _adapters.adaptForAppRouterInstance)(router);
        }
    }["AppContainer.useMemo[adaptedForAppRouter]"], []);
    var _self___NEXT_DATA___autoExport;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(Container, {
        fn: (error)=>// eslint-disable-next-line @typescript-eslint/no-use-before-define
            renderError({
                App: CachedApp,
                err: error
            }).catch((err)=>console.error('Error rendering page: ', err)),
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
            value: adaptedForAppRouter,
            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                value: (0, _adapters.adaptForSearchParams)(router),
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_adapters.PathnameContextProviderAdapter, {
                    router: router,
                    isAutoExport: (_self___NEXT_DATA___autoExport = self.__NEXT_DATA__.autoExport) != null ? _self___NEXT_DATA___autoExport : false,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                        value: (0, _adapters.adaptForPathParams)(router),
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_routercontextsharedruntime.RouterContext.Provider, {
                            value: (0, _router.makePublicRouterInstance)(router),
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_headmanagercontextsharedruntime.HeadManagerContext.Provider, {
                                value: headManager,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_imageconfigcontextsharedruntime.ImageConfigContext.Provider, {
                                    value: ("TURBOPACK compile-time value", JSON.parse('{"deviceSizes":[640,750,828,1080,1200,1920,2048,3840],"imageSizes":[16,32,48,64,96,128,256,384],"path":"/_next/image","loader":"default","dangerouslyAllowSVG":false,"unoptimized":false,"domains":[],"remotePatterns":[]}')),
                                    children: children
                                })
                            })
                        })
                    })
                })
            })
        })
    });
}
const wrapApp = (App)=>(wrappedAppProps)=>{
        const appProps = {
            ...wrappedAppProps,
            Component: CachedComponent,
            err: initialData.err,
            router
        };
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(AppContainer, {
            children: renderApp(App, appProps)
        });
    };
// This method handles all runtime and debug errors.
// 404 and 500 errors are special kind of errors
// and they are still handle via the main render method.
function renderError(renderErrorProps) {
    let { App, err } = renderErrorProps;
    // In development runtime errors are caught by our overlay
    // In production we catch runtime errors using componentDidCatch which will trigger renderError
    if ("TURBOPACK compile-time truthy", 1) {
        // A Next.js rendering runtime error is always unrecoverable
        // FIXME: let's make this recoverable (error in GIP client-transition)
        devClient.onUnrecoverableError();
        // We need to render an empty <App> so that the `<ReactDevOverlay>` can
        // render itself.
        // TODO: Fix disabled eslint rule
        // eslint-disable-next-line @typescript-eslint/no-use-before-define
        return doRender({
            App: ()=>null,
            props: {},
            Component: ()=>null,
            styleSheets: []
        });
    }
    "TURBOPACK unreachable";
}
// Dummy component that we render as a child of Root so that we can
// toggle the correct styles before the page is rendered.
function Head(param) {
    let { callback } = param;
    // We use `useLayoutEffect` to guarantee the callback is executed
    // as soon as React flushes the update.
    _react.default.useLayoutEffect({
        "Head.useLayoutEffect": ()=>callback()
    }["Head.useLayoutEffect"], [
        callback
    ]);
    return null;
}
const performanceMarks = {
    navigationStart: 'navigationStart',
    beforeRender: 'beforeRender',
    afterRender: 'afterRender',
    afterHydrate: 'afterHydrate',
    routeChange: 'routeChange'
};
const performanceMeasures = {
    hydration: 'Next.js-hydration',
    beforeHydration: 'Next.js-before-hydration',
    routeChangeToRender: 'Next.js-route-change-to-render',
    render: 'Next.js-render'
};
let reactRoot = null;
// On initial render a hydrate should always happen
let shouldHydrate = true;
function clearMarks() {
    ;
    [
        performanceMarks.beforeRender,
        performanceMarks.afterHydrate,
        performanceMarks.afterRender,
        performanceMarks.routeChange
    ].forEach((mark)=>performance.clearMarks(mark));
}
function markHydrateComplete() {
    if (!_utils.ST) return;
    performance.mark(performanceMarks.afterHydrate) // mark end of hydration
    ;
    const hasBeforeRenderMark = performance.getEntriesByName(performanceMarks.beforeRender, 'mark').length;
    if (hasBeforeRenderMark) {
        const beforeHydrationMeasure = performance.measure(performanceMeasures.beforeHydration, performanceMarks.navigationStart, performanceMarks.beforeRender);
        const hydrationMeasure = performance.measure(performanceMeasures.hydration, performanceMarks.beforeRender, performanceMarks.afterHydrate);
        if (("TURBOPACK compile-time value", "development") === 'development' && // Old versions of Safari don't return `PerformanceMeasure`s from `performance.measure()`
        beforeHydrationMeasure && hydrationMeasure) {
            _tracer.default.startSpan('navigation-to-hydration', {
                startTime: performance.timeOrigin + beforeHydrationMeasure.startTime,
                attributes: {
                    pathname: location.pathname,
                    query: location.search
                }
            }).end(performance.timeOrigin + hydrationMeasure.startTime + hydrationMeasure.duration);
        }
    }
    if (onPerfEntry) {
        performance.getEntriesByName(performanceMeasures.hydration).forEach(onPerfEntry);
    }
    clearMarks();
}
function markRenderComplete() {
    if (!_utils.ST) return;
    performance.mark(performanceMarks.afterRender) // mark end of render
    ;
    const navStartEntries = performance.getEntriesByName(performanceMarks.routeChange, 'mark');
    if (!navStartEntries.length) return;
    const hasBeforeRenderMark = performance.getEntriesByName(performanceMarks.beforeRender, 'mark').length;
    if (hasBeforeRenderMark) {
        performance.measure(performanceMeasures.routeChangeToRender, navStartEntries[0].name, performanceMarks.beforeRender);
        performance.measure(performanceMeasures.render, performanceMarks.beforeRender, performanceMarks.afterRender);
        if (onPerfEntry) {
            performance.getEntriesByName(performanceMeasures.render).forEach(onPerfEntry);
            performance.getEntriesByName(performanceMeasures.routeChangeToRender).forEach(onPerfEntry);
        }
    }
    clearMarks();
    [
        performanceMeasures.routeChangeToRender,
        performanceMeasures.render
    ].forEach((measure)=>performance.clearMeasures(measure));
}
function renderReactElement(domEl, fn) {
    // mark start of hydrate/render
    if (_utils.ST) {
        performance.mark(performanceMarks.beforeRender);
    }
    const reactEl = fn(shouldHydrate ? markHydrateComplete : markRenderComplete);
    if (!reactRoot) {
        // Unlike with createRoot, you don't need a separate root.render() call here
        reactRoot = _client.default.hydrateRoot(domEl, reactEl, {
            onRecoverableError: _shared.onRecoverableError
        });
        // TODO: Remove shouldHydrate variable when React 18 is stable as it can depend on `reactRoot` existing
        shouldHydrate = false;
    } else {
        const startTransition = _react.default.startTransition;
        startTransition(()=>{
            reactRoot.render(reactEl);
        });
    }
}
function Root(param) {
    let { callbacks, children } = param;
    // We use `useLayoutEffect` to guarantee the callbacks are executed
    // as soon as React flushes the update
    _react.default.useLayoutEffect({
        "Root.useLayoutEffect": ()=>callbacks.forEach({
                "Root.useLayoutEffect": (callback)=>callback()
            }["Root.useLayoutEffect"])
    }["Root.useLayoutEffect"], [
        callbacks
    ]);
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
    return children;
}
function doRender(input) {
    let { App, Component, props, err } = input;
    let styleSheets = 'initial' in input ? undefined : input.styleSheets;
    Component = Component || lastAppProps.Component;
    props = props || lastAppProps.props;
    const appProps = {
        ...props,
        Component,
        err,
        router
    };
    // lastAppProps has to be set before ReactDom.render to account for ReactDom throwing an error.
    lastAppProps = appProps;
    let canceled = false;
    let resolvePromise;
    const renderPromise = new Promise((resolve, reject)=>{
        if (lastRenderReject) {
            lastRenderReject();
        }
        resolvePromise = ()=>{
            lastRenderReject = null;
            resolve();
        };
        lastRenderReject = ()=>{
            canceled = true;
            lastRenderReject = null;
            const error = Object.defineProperty(new Error('Cancel rendering route'), "__NEXT_ERROR_CODE", {
                value: "E503",
                enumerable: false
            });
            error.cancelled = true;
            reject(error);
        };
    });
    // This function has a return type to ensure it doesn't start returning a
    // Promise. It should remain synchronous.
    function onStart() {
        if ("TURBOPACK compile-time truthy", 1) {
            return false;
        }
        "TURBOPACK unreachable";
        const currentStyleTags = undefined;
        const currentHrefs = undefined;
        const noscript = undefined;
        const nonce = undefined;
    }
    function onHeadCommit() {
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        if (input.scroll) {
            const { x, y } = input.scroll;
            (0, _handlesmoothscroll.handleSmoothScroll)(()=>{
                window.scrollTo(x, y);
            });
        }
    }
    function onRootCommit() {
        resolvePromise();
    }
    onStart();
    const elem = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
                callback: onHeadCommit
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)(AppContainer, {
                children: [
                    renderApp(App, appProps),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(_portal.Portal, {
                        type: "next-route-announcer",
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_routeannouncer.RouteAnnouncer, {})
                    })
                ]
            })
        ]
    });
    // We catch runtime errors using componentDidCatch which will trigger renderError
    renderReactElement(appElement, (callback)=>/*#__PURE__*/ (0, _jsxruntime.jsx)(Root, {
            callbacks: [
                callback,
                onRootCommit
            ],
            children: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : elem
        }));
    return renderPromise;
}
async function render(renderingProps) {
    // if an error occurs in a server-side page (e.g. in getInitialProps),
    // skip re-rendering the error page client-side as data-fetching operations
    // will already have been done on the server and NEXT_DATA contains the correct
    // data for straight-forward hydration of the error page
    if (renderingProps.err && // renderingProps.Component might be undefined if there is a top/module-level error
    (typeof renderingProps.Component === 'undefined' || !renderingProps.isHydratePass)) {
        await renderError(renderingProps);
        return;
    }
    try {
        await doRender(renderingProps);
    } catch (err) {
        const renderErr = (0, _iserror.getProperError)(err);
        // bubble up cancelation errors
        if (renderErr.cancelled) {
            throw renderErr;
        }
        if ("TURBOPACK compile-time truthy", 1) {
            // Ensure this error is displayed in the overlay in development
            setTimeout(()=>{
                throw renderErr;
            });
        }
        await renderError({
            ...renderingProps,
            err: renderErr
        });
    }
}
async function hydrate(opts) {
    let initialErr = initialData.err;
    try {
        const appEntrypoint = await pageLoader.routeLoader.whenEntrypoint('/_app');
        if ('error' in appEntrypoint) {
            throw appEntrypoint.error;
        }
        const { component: app, exports: mod } = appEntrypoint;
        CachedApp = app;
        if (mod && mod.reportWebVitals) {
            onPerfEntry = (param)=>{
                let { id, name, startTime, value, duration, entryType, entries, attribution } = param;
                // Combines timestamp with random number for unique ID
                const uniqueID = Date.now() + "-" + (Math.floor(Math.random() * (9e12 - 1)) + 1e12);
                let perfStartEntry;
                if (entries && entries.length) {
                    perfStartEntry = entries[0].startTime;
                }
                const webVitals = {
                    id: id || uniqueID,
                    name,
                    startTime: startTime || perfStartEntry,
                    value: value == null ? duration : value,
                    label: entryType === 'mark' || entryType === 'measure' ? 'custom' : 'web-vital'
                };
                if (attribution) {
                    webVitals.attribution = attribution;
                }
                mod.reportWebVitals(webVitals);
            };
        }
        const pageEntrypoint = // error, so we need to skip waiting for the entrypoint.
        ("TURBOPACK compile-time value", "development") === 'development' && initialData.err ? {
            error: initialData.err
        } : await pageLoader.routeLoader.whenEntrypoint(initialData.page);
        if ('error' in pageEntrypoint) {
            throw pageEntrypoint.error;
        }
        CachedComponent = pageEntrypoint.component;
        if ("TURBOPACK compile-time truthy", 1) {
            const { isValidElementType } = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-is/index.js [client] (ecmascript)");
            if (!isValidElementType(CachedComponent)) {
                throw Object.defineProperty(new Error('The default export is not a React Component in page: "' + initialData.page + '"'), "__NEXT_ERROR_CODE", {
                    value: "E286",
                    enumerable: false
                });
            }
        }
    } catch (error) {
        // This catches errors like throwing in the top level of a module
        initialErr = (0, _iserror.getProperError)(error);
    }
    if ("TURBOPACK compile-time truthy", 1) {
        const getServerError = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)").getServerError;
        // Server-side runtime errors need to be re-thrown on the client-side so
        // that the overlay is rendered.
        if (initialErr) {
            if (initialErr === initialData.err) {
                setTimeout(()=>{
                    let error;
                    try {
                        // Generate a new error object. We `throw` it because some browsers
                        // will set the `stack` when thrown, and we want to ensure ours is
                        // not overridden when we re-throw it below.
                        throw Object.defineProperty(new Error(initialErr.message), "__NEXT_ERROR_CODE", {
                            value: "E394",
                            enumerable: false
                        });
                    } catch (e) {
                        error = e;
                    }
                    error.name = initialErr.name;
                    error.stack = initialErr.stack;
                    const errSource = initialErr.source;
                    // In development, error the navigation API usage in runtime,
                    // since it's not allowed to be used in pages router as it doesn't contain error boundary like app router.
                    if ((0, _isnextroutererror.isNextRouterError)(initialErr)) {
                        error.message = 'Next.js navigation API is not allowed to be used in Pages Router.';
                    }
                    throw getServerError(error, errSource);
                });
            } else {
                setTimeout(()=>{
                    throw initialErr;
                });
            }
        }
    }
    if (window.__NEXT_PRELOADREADY) {
        await window.__NEXT_PRELOADREADY(initialData.dynamicIds);
    }
    router = (0, _router.createRouter)(initialData.page, initialData.query, asPath, {
        initialProps: initialData.props,
        pageLoader,
        App: CachedApp,
        Component: CachedComponent,
        wrapApp,
        err: initialErr,
        isFallback: Boolean(initialData.isFallback),
        subscription: (info, App, scroll)=>render(Object.assign({}, info, {
                App,
                scroll
            })),
        locale: initialData.locale,
        locales: initialData.locales,
        defaultLocale,
        domainLocales: initialData.domainLocales,
        isPreview: initialData.isPreview
    });
    initialMatchesMiddleware = await router._initialMatchesMiddlewarePromise;
    const renderCtx = {
        App: CachedApp,
        initial: true,
        Component: CachedComponent,
        props: initialData.props,
        err: initialErr,
        isHydratePass: true
    };
    if (opts == null ? void 0 : opts.beforeRender) {
        await opts.beforeRender();
    }
    render(renderCtx);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=index.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/format-webpack-messages.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
MIT License

Copyright (c) 2015-present, Facebook, Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return formatWebpackMessages;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
// This file is based on https://github.com/facebook/create-react-app/blob/7b1a32be6ec9f99a6c9a3c66813f3ac09c4736b9/packages/react-dev-utils/formatWebpackMessages.js
// It's been edited to remove chalk and CRA-specific logic
const friendlySyntaxErrorLabel = 'Syntax error:';
const WEBPACK_BREAKING_CHANGE_POLYFILLS = '\n\nBREAKING CHANGE: webpack < 5 used to include polyfills for node.js core modules by default.';
function isLikelyASyntaxError(message) {
    return (0, _stripansi.default)(message).includes(friendlySyntaxErrorLabel);
}
let hadMissingSassError = false;
// Cleans up webpack error messages.
function formatMessage(message, verbose, importTraceNote) {
    // TODO: Replace this once webpack 5 is stable
    if (typeof message === 'object' && message.message) {
        const filteredModuleTrace = message.moduleTrace && message.moduleTrace.filter((trace)=>!/next-(middleware|client-pages|route|edge-function)-loader\.js/.test(trace.originName));
        let body = message.message;
        const breakingChangeIndex = body.indexOf(WEBPACK_BREAKING_CHANGE_POLYFILLS);
        if (breakingChangeIndex >= 0) {
            body = body.slice(0, breakingChangeIndex);
        }
        message = (message.moduleName ? (0, _stripansi.default)(message.moduleName) + '\n' : '') + (message.file ? (0, _stripansi.default)(message.file) + '\n' : '') + body + (message.details && verbose ? '\n' + message.details : '') + (filteredModuleTrace && filteredModuleTrace.length ? (importTraceNote || '\n\nImport trace for requested module:') + filteredModuleTrace.map((trace)=>"\n" + trace.moduleName).join('') : '') + (message.stack && verbose ? '\n' + message.stack : '');
    }
    let lines = message.split('\n');
    // Strip Webpack-added headers off errors/warnings
    // https://github.com/webpack/webpack/blob/master/lib/ModuleError.js
    lines = lines.filter((line)=>!/Module [A-z ]+\(from/.test(line));
    // Transform parsing error into syntax error
    // TODO: move this to our ESLint formatter?
    lines = lines.map((line)=>{
        const parsingError = /Line (\d+):(?:(\d+):)?\s*Parsing error: (.+)$/.exec(line);
        if (!parsingError) {
            return line;
        }
        const [, errorLine, errorColumn, errorMessage] = parsingError;
        return friendlySyntaxErrorLabel + " " + errorMessage + " (" + errorLine + ":" + errorColumn + ")";
    });
    message = lines.join('\n');
    // Smoosh syntax errors (commonly found in CSS)
    message = message.replace(/SyntaxError\s+\((\d+):(\d+)\)\s*(.+?)\n/g, "" + friendlySyntaxErrorLabel + " $3 ($1:$2)\n");
    // Clean up export errors
    message = message.replace(/^.*export '(.+?)' was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$2'.");
    message = message.replace(/^.*export 'default' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$2' does not contain a default export (imported as '$1').");
    message = message.replace(/^.*export '(.+?)' \(imported as '(.+?)'\) was not found in '(.+?)'.*$/gm, "Attempted import error: '$1' is not exported from '$3' (imported as '$2').");
    lines = message.split('\n');
    // Remove leading newline
    if (lines.length > 2 && lines[1].trim() === '') {
        lines.splice(1, 1);
    }
    // Cleans up verbose "module not found" messages for files and packages.
    if (lines[1] && lines[1].startsWith('Module not found: ')) {
        lines = [
            lines[0],
            lines[1].replace('Error: ', '').replace('Module not found: Cannot find file:', 'Cannot find file:'),
            ...lines.slice(2)
        ];
    }
    // Add helpful message for users trying to use Sass for the first time
    if (lines[1] && lines[1].match(/Cannot find module.+sass/)) {
        // ./file.module.scss (<<loader info>>) => ./file.module.scss
        const firstLine = lines[0].split('!');
        lines[0] = firstLine[firstLine.length - 1];
        lines[1] = "To use Next.js' built-in Sass support, you first need to install `sass`.\n";
        lines[1] += 'Run `npm i sass` or `yarn add sass` inside your workspace.\n';
        lines[1] += '\nLearn more: https://nextjs.org/docs/messages/install-sass';
        // dispose of unhelpful stack trace
        lines = lines.slice(0, 2);
        hadMissingSassError = true;
    } else if (hadMissingSassError && message.match(/(sass-loader|resolve-url-loader: CSS error)/)) {
        // dispose of unhelpful stack trace following missing sass module
        lines = [];
    }
    if (!verbose) {
        message = lines.join('\n');
        // Internal stacks are generally useless so we strip them... with the
        // exception of stacks containing `webpack:` because they're normally
        // from user code generated by Webpack. For more information see
        // https://github.com/facebook/create-react-app/pull/1050
        message = message.replace(/^\s*at\s((?!webpack:).)*:\d+:\d+[\s)]*(\n|$)/gm, '') // at ... ...:x:y
        ;
        message = message.replace(/^\s*at\s<anonymous>(\n|$)/gm, '') // at <anonymous>
        ;
        message = message.replace(/File was processed with these loaders:\n(.+[\\/](next[\\/]dist[\\/].+|@next[\\/]react-refresh-utils[\\/]loader)\.js\n)*You may need an additional loader to handle the result of these loaders.\n/g, '');
        lines = message.split('\n');
    }
    // Remove duplicated newlines
    lines = lines.filter((line, index, arr)=>index === 0 || line.trim() !== '' || line.trim() !== arr[index - 1].trim());
    // Reassemble the message
    message = lines.join('\n');
    return message.trim();
}
function formatWebpackMessages(json, verbose) {
    const formattedErrors = json.errors.map((message)=>{
        const isUnknownNextFontError = message.message.includes('An error occurred in `next/font`.');
        return formatMessage(message, isUnknownNextFontError || verbose);
    });
    const formattedWarnings = json.warnings.map((message)=>{
        return formatMessage(message, verbose);
    });
    // Reorder errors to put the most relevant ones first.
    let reactServerComponentsError = -1;
    for(let i = 0; i < formattedErrors.length; i++){
        const error = formattedErrors[i];
        if (error.includes('ReactServerComponentsError')) {
            reactServerComponentsError = i;
            break;
        }
    }
    // Move the reactServerComponentsError to the top if it exists
    if (reactServerComponentsError !== -1) {
        const error = formattedErrors.splice(reactServerComponentsError, 1);
        formattedErrors.unshift(error[0]);
    }
    const result = {
        ...json,
        errors: formattedErrors,
        warnings: formattedWarnings
    };
    if (!verbose && result.errors.some(isLikelyASyntaxError)) {
        // If there are any syntax errors, show just them.
        result.errors = result.errors.filter(isLikelyASyntaxError);
        result.warnings = [];
    }
    return result;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=format-webpack-messages.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/runtime-error-handler.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RuntimeErrorHandler", {
    enumerable: true,
    get: function() {
        return RuntimeErrorHandler;
    }
});
const RuntimeErrorHandler = {
    hadRuntimeError: false
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=runtime-error-handler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// TODO: Remove use of `any` type. Fix no-use-before-define violations.
/* eslint-disable @typescript-eslint/no-use-before-define */ /**
 * MIT License
 *
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */ // This file is a modified version of the Create React App HMR dev client that
// can be found here:
// https://github.com/facebook/create-react-app/blob/v3.4.1/packages/react-dev-utils/webpackHotDevClient.js
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    performFullReload: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    default: function() {
        return connect;
    },
    performFullReload: function() {
        return performFullReload;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _client = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/client.js [client] (ecmascript)");
const _stripansi = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/strip-ansi/index.js [client] (ecmascript)"));
const _websocket = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
const _formatwebpackmessages = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/format-webpack-messages.js [client] (ecmascript)"));
const _hotreloadertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _extractmodulesfromturbopackmessage = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/dev/extract-modules-from-turbopack-message.js [client] (ecmascript)");
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _runtimeerrorhandler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/runtime-error-handler.js [client] (ecmascript)");
window.__nextDevClientId = Math.round(Math.random() * 100 + Date.now());
let customHmrEventHandler;
let turbopackMessageListeners = [];
let MODE = 'webpack';
function connect(mode) {
    MODE = mode;
    (0, _client.register)();
    (0, _websocket.addMessageListener)((payload)=>{
        if (!('action' in payload)) {
            return;
        }
        try {
            processMessage(payload);
        } catch (err) {
            var _err_stack;
            console.warn('[HMR] Invalid message: ' + JSON.stringify(payload) + '\n' + ((_err_stack = err == null ? void 0 : err.stack) != null ? _err_stack : ''));
        }
    });
    return {
        subscribeToHmrEvent (handler) {
            customHmrEventHandler = handler;
        },
        onUnrecoverableError () {
            _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError = true;
        },
        addTurbopackMessageListener (cb) {
            turbopackMessageListeners.push(cb);
        },
        sendTurbopackMessage (msg) {
            (0, _websocket.sendMessage)(msg);
        },
        handleUpdateError (err) {
            performFullReload(err);
        }
    };
}
// Remember some state related to hot module replacement.
var isFirstCompilation = true;
var mostRecentCompilationHash = null;
var hasCompileErrors = false;
function clearOutdatedErrors() {
    // Clean up outdated compile errors, if any.
    if (typeof console !== 'undefined' && typeof console.clear === 'function') {
        if (hasCompileErrors) {
            console.clear();
        }
    }
}
// Successful compilation.
function handleSuccess() {
    clearOutdatedErrors();
    if (MODE === 'webpack') {
        const isHotUpdate = !isFirstCompilation || window.__NEXT_DATA__.page !== '/_error' && isUpdateAvailable();
        isFirstCompilation = false;
        hasCompileErrors = false;
        // Attempt to apply hot updates or reload.
        if (isHotUpdate) {
            tryApplyUpdates(onBeforeFastRefresh, onFastRefresh);
        }
    } else {
        (0, _client.onBuildOk)();
    }
}
// Compilation with warnings (e.g. ESLint).
function handleWarnings(warnings) {
    clearOutdatedErrors();
    const isHotUpdate = !isFirstCompilation;
    isFirstCompilation = false;
    hasCompileErrors = false;
    function printWarnings() {
        // Print warnings to the console.
        const formatted = (0, _formatwebpackmessages.default)({
            warnings: warnings,
            errors: []
        });
        if (typeof console !== 'undefined' && typeof console.warn === 'function') {
            var _formatted_warnings;
            for(let i = 0; i < ((_formatted_warnings = formatted.warnings) == null ? void 0 : _formatted_warnings.length); i++){
                if (i === 5) {
                    console.warn('There were more warnings in other files.\n' + 'You can find a complete log in the terminal.');
                    break;
                }
                console.warn((0, _stripansi.default)(formatted.warnings[i]));
            }
        }
    }
    printWarnings();
    // Attempt to apply hot updates or reload.
    if (isHotUpdate) {
        tryApplyUpdates(onBeforeFastRefresh, onFastRefresh);
    }
}
// Compilation with errors (e.g. syntax error or missing modules).
function handleErrors(errors) {
    clearOutdatedErrors();
    isFirstCompilation = false;
    hasCompileErrors = true;
    // "Massage" webpack messages.
    var formatted = (0, _formatwebpackmessages.default)({
        errors: errors,
        warnings: []
    });
    // Only show the first error.
    (0, _client.onBuildError)(formatted.errors[0]);
    // Also log them to the console.
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
        for(var i = 0; i < formatted.errors.length; i++){
            console.error((0, _stripansi.default)(formatted.errors[i]));
        }
    }
    // Do not attempt to reload now.
    // We will reload on next success instead.
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
}
let startLatency = undefined;
function onBeforeFastRefresh(updatedModules) {
    if (updatedModules.length > 0) {
        // Only trigger a pending state if we have updates to apply
        // (cf. onFastRefresh)
        (0, _client.onBeforeRefresh)();
    }
}
function onFastRefresh(updatedModules) {
    if (updatedModules === void 0) updatedModules = [];
    (0, _client.onBuildOk)();
    if (updatedModules.length === 0) {
        return;
    }
    (0, _client.onRefresh)();
    reportHmrLatency();
}
function reportHmrLatency(updatedModules) {
    if (updatedModules === void 0) updatedModules = [];
    if (startLatency) {
        const endLatency = Date.now();
        const latency = endLatency - startLatency;
        console.log("[Fast Refresh] done in " + latency + "ms");
        (0, _websocket.sendMessage)(JSON.stringify({
            event: 'client-hmr-latency',
            id: window.__nextDevClientId,
            startTime: startLatency,
            endTime: endLatency,
            page: window.location.pathname,
            updatedModules,
            // Whether the page (tab) was hidden at the time the event occurred.
            // This can impact the accuracy of the event's timing.
            isPageHidden: document.visibilityState === 'hidden'
        }));
        if (self.__NEXT_HMR_LATENCY_CB) {
            self.__NEXT_HMR_LATENCY_CB(latency);
        }
    }
}
// There is a newer version of the code available.
function handleAvailableHash(hash) {
    // Update last known compilation hash.
    mostRecentCompilationHash = hash;
}
/** Handles messages from the sevrer for the Pages Router. */ function processMessage(obj) {
    if (!('action' in obj)) {
        return;
    }
    // Use turbopack message for analytics, (still need built for webpack)
    switch(obj.action){
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
            {
                startLatency = Date.now();
                console.log('[Fast Refresh] rebuilding');
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
            {
                if (obj.hash) handleAvailableHash(obj.hash);
                const { errors, warnings } = obj;
                // Is undefined when it's a 'built' event
                if ('versionInfo' in obj) (0, _client.onVersionInfo)(obj.versionInfo);
                const hasErrors = Boolean(errors && errors.length);
                if (hasErrors) {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: 'client-error',
                        errorCount: errors.length,
                        clientId: window.__nextDevClientId
                    }));
                    return handleErrors(errors);
                }
                const hasWarnings = Boolean(warnings && warnings.length);
                if (hasWarnings) {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: 'client-warning',
                        warningCount: warnings.length,
                        clientId: window.__nextDevClientId
                    }));
                    return handleWarnings(warnings);
                }
                (0, _websocket.sendMessage)(JSON.stringify({
                    event: 'client-success',
                    clientId: window.__nextDevClientId
                }));
                return handleSuccess();
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_COMPONENT_CHANGES:
            {
                if (hasCompileErrors || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    window.location.reload();
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
            {
                const { errorJSON } = obj;
                if (errorJSON) {
                    const { message, stack } = JSON.parse(errorJSON);
                    const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                        value: "E394",
                        enumerable: false
                    });
                    error.stack = stack;
                    handleErrors([
                        error
                    ]);
                }
                return;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED:
            {
                for (const listener of turbopackMessageListeners){
                    listener({
                        type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_CONNECTED,
                        data: obj.data
                    });
                }
                break;
            }
        case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE:
            {
                const updatedModules = (0, _extractmodulesfromturbopackmessage.extractModulesFromTurbopackMessage)(obj.data);
                onBeforeFastRefresh(updatedModules);
                for (const listener of turbopackMessageListeners){
                    listener({
                        type: _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.TURBOPACK_MESSAGE,
                        data: obj.data
                    });
                }
                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                    performFullReload(null);
                }
                (0, _client.onRefresh)();
                reportHmrLatency(updatedModules);
                break;
            }
        default:
            {
                if (customHmrEventHandler) {
                    customHmrEventHandler(obj);
                    break;
                }
                break;
            }
    }
}
// Is there a newer version of this code available?
function isUpdateAvailable() {
    /* globals __webpack_hash__ */ // __webpack_hash__ is the hash of the current compilation.
    // It's a global variable injected by Webpack.
    return mostRecentCompilationHash !== __webpack_hash__;
}
// Webpack disallows updates in other states.
function canApplyUpdates() {
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    return module.hot.status() === 'idle';
}
function afterApplyUpdates(fn) {
    if (canApplyUpdates()) {
        fn();
    } else {
        function handler(status) {
            if (status === 'idle') {
                // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
                module.hot.removeStatusHandler(handler);
                fn();
            }
        }
        // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
        module.hot.addStatusHandler(handler);
    }
}
// Attempt to update code on the fly, fall back to a hard reload.
function tryApplyUpdates(onBeforeHotUpdate, onHotUpdateSuccess) {
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    if (!module.hot) {
        // HotModuleReplacementPlugin is not in Webpack configuration.
        console.error('HotModuleReplacementPlugin is not in Webpack configuration.');
        // window.location.reload();
        return;
    }
    if (!isUpdateAvailable() || !canApplyUpdates()) {
        (0, _client.onBuildOk)();
        return;
    }
    function handleApplyUpdates(err, updatedModules) {
        if (err || _runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError || !updatedModules) {
            if (err) {
                console.warn('[Fast Refresh] performing full reload\n\n' + "Fast Refresh will perform a full reload when you edit a file that's imported by modules outside of the React rendering tree.\n" + 'You might have a file which exports a React component but also exports a value that is imported by a non-React component file.\n' + 'Consider migrating the non-React component export to a separate file and importing it into both files.\n\n' + 'It is also possible the parent component of the component you edited is a class component, which disables Fast Refresh.\n' + 'Fast Refresh requires at least one parent function component in your React tree.');
            } else if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                console.warn('[Fast Refresh] performing full reload because your application had an unrecoverable error');
            }
            performFullReload(err);
            return;
        }
        if (typeof onHotUpdateSuccess === 'function') {
            // Maybe we want to do something.
            onHotUpdateSuccess(updatedModules);
        }
        if (isUpdateAvailable()) {
            // While we were updating, there was a new update! Do it again.
            // However, this time, don't trigger a pending refresh state.
            tryApplyUpdates(updatedModules.length > 0 ? undefined : onBeforeHotUpdate, updatedModules.length > 0 ? _client.onBuildOk : onHotUpdateSuccess);
        } else {
            (0, _client.onBuildOk)();
            if ("TURBOPACK compile-time falsy", 0) {
                "TURBOPACK unreachable";
            }
        }
    }
    // https://webpack.js.org/api/hot-module-replacement/#check
    // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
    module.hot.check(/* autoApply */ false).then((updatedModules)=>{
        if (!updatedModules) {
            return null;
        }
        if (typeof onBeforeHotUpdate === 'function') {
            onBeforeHotUpdate(updatedModules);
        }
        // @ts-expect-error TODO: module.hot exists but type needs to be added. Can't use `as any` here as webpack parses for `module.hot` calls.
        return module.hot.apply();
    }).then((updatedModules)=>{
        handleApplyUpdates(null, updatedModules);
    }, (err)=>{
        handleApplyUpdates(err, null);
    });
}
function performFullReload(err) {
    const stackTrace = err && (err.stack && err.stack.split('\n').slice(0, 5).join('\n') || err.message || err + '');
    (0, _websocket.sendMessage)(JSON.stringify({
        event: 'client-full-reload',
        stackTrace,
        hadRuntimeError: !!_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError,
        dependencyChain: err ? err.dependencyChain : undefined
    }));
    window.location.reload();
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-reloader-client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/hot-middleware-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _hotreloaderclient = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)"));
const _websocket = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
let reloading = false;
const _default = (mode)=>{
    const devClient = (0, _hotreloaderclient.default)(mode);
    devClient.subscribeToHmrEvent((obj)=>{
        if (reloading) return;
        // if we're on an error/404 page, we can't reliably tell if the newly added/removed page
        // matches the current path. In that case, assume any added/removed entries should trigger a reload of the current page
        const isOnErrorPage = window.next.router.pathname === '/404' || window.next.router.pathname === '/_error';
        switch(obj.action){
            case 'reloadPage':
                {
                    (0, _websocket.sendMessage)(JSON.stringify({
                        event: 'client-reload-page',
                        clientId: window.__nextDevClientId
                    }));
                    reloading = true;
                    return window.location.reload();
                }
            case 'removedPage':
                {
                    const [page] = obj.data;
                    if (page === window.next.router.pathname || isOnErrorPage) {
                        (0, _websocket.sendMessage)(JSON.stringify({
                            event: 'client-removed-page',
                            clientId: window.__nextDevClientId,
                            page
                        }));
                        return window.location.reload();
                    }
                    return;
                }
            case 'addedPage':
                {
                    const [page] = obj.data;
                    if (page === window.next.router.pathname && typeof window.next.router.components[page] === 'undefined' || isOnErrorPage) {
                        (0, _websocket.sendMessage)(JSON.stringify({
                            event: 'client-added-page',
                            clientId: window.__nextDevClientId,
                            page
                        }));
                        return window.location.reload();
                    }
                    return;
                }
            case 'serverError':
            case 'devPagesManifestUpdate':
            case 'appIsrManifest':
            case 'building':
            case 'finishBuilding':
                {
                    return;
                }
            default:
                {
                    throw Object.defineProperty(new Error('Unexpected action ' + obj.action), "__NEXT_ERROR_CODE", {
                        value: "E59",
                        enumerable: false
                    });
                }
        }
    });
    return devClient;
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hot-middleware-client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/on-demand-entries-client.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _router = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/router.js [client] (ecmascript)"));
const _websocket = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
const _default = async (page)=>{
    if (page) {
        // in AMP the router isn't initialized on the client and
        // client-transitions don't occur so ping initial page
        setInterval(()=>{
            (0, _websocket.sendMessage)(JSON.stringify({
                event: 'ping',
                page
            }));
        }, 2500);
    } else {
        _router.default.ready(()=>{
            setInterval(()=>{
                // when notFound: true is returned we should use the notFoundPage
                // as the Router.pathname will point to the 404 page but we want
                // to ping the source page that returned notFound: true instead
                const notFoundSrcPage = self.__NEXT_DATA__.notFoundSrcPage;
                const pathname = (_router.default.pathname === '/404' || _router.default.pathname === '/_error') && notFoundSrcPage ? notFoundSrcPage : _router.default.pathname;
                (0, _websocket.sendMessage)(JSON.stringify({
                    event: 'ping',
                    page: pathname
                }));
            }, 2500);
        });
    }
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=on-demand-entries-client.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/dev-build-watcher.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/* eslint-disable @typescript-eslint/no-use-before-define */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return initializeBuildWatcher;
    }
});
const _hotreloadertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _websocket = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
function initializeBuildWatcher(toggleCallback, position) {
    if (position === void 0) position = 'bottom-right';
    const shadowHost = document.createElement('div');
    const [verticalProperty, horizontalProperty] = position.split('-', 2);
    shadowHost.id = '__next-build-watcher';
    // Make sure container is fixed and on a high zIndex so it shows
    shadowHost.style.position = 'fixed';
    // Ensure container's position to be top or bottom (default)
    shadowHost.style[verticalProperty] = '10px';
    // Ensure container's position to be left or right (default)
    shadowHost.style[horizontalProperty] = '20px';
    shadowHost.style.width = '0';
    shadowHost.style.height = '0';
    shadowHost.style.zIndex = '99999';
    document.body.appendChild(shadowHost);
    let shadowRoot;
    let prefix = '';
    if (shadowHost.attachShadow) {
        shadowRoot = shadowHost.attachShadow({
            mode: 'open'
        });
    } else {
        // If attachShadow is undefined then the browser does not support
        // the Shadow DOM, we need to prefix all the names so there
        // will be no conflicts
        shadowRoot = shadowHost;
        prefix = '__next-build-watcher-';
    }
    // Container
    const container = createContainer(prefix);
    shadowRoot.appendChild(container);
    // CSS
    const css = createCss(prefix, {
        horizontalProperty,
        verticalProperty
    });
    shadowRoot.appendChild(css);
    // State
    let isVisible = false;
    let isBuilding = false;
    let timeoutId = null;
    // Handle events
    (0, _websocket.addMessageListener)((obj)=>{
        try {
            handleMessage(obj);
        } catch (e) {}
    });
    function show() {
        timeoutId && clearTimeout(timeoutId);
        isVisible = true;
        isBuilding = true;
        updateContainer();
    }
    function hide() {
        isBuilding = false;
        // Wait for the fade out transition to complete
        timeoutId = setTimeout(()=>{
            isVisible = false;
            updateContainer();
        }, 100);
        updateContainer();
    }
    function handleMessage(obj) {
        if (!('action' in obj)) {
            return;
        }
        // eslint-disable-next-line default-case
        switch(obj.action){
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILDING:
                show();
                break;
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.BUILT:
            case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SYNC:
                hide();
                break;
        }
    }
    toggleCallback({
        show,
        hide
    });
    function updateContainer() {
        if (isBuilding) {
            container.classList.add("" + prefix + "building");
        } else {
            container.classList.remove("" + prefix + "building");
        }
        if (isVisible) {
            container.classList.add("" + prefix + "visible");
        } else {
            container.classList.remove("" + prefix + "visible");
        }
    }
}
function createContainer(prefix) {
    const container = document.createElement('div');
    container.id = "" + prefix + "container";
    container.innerHTML = '\n    <div id="' + prefix + 'icon-wrapper">\n      <svg viewBox="0 0 226 200">\n        <defs>\n          <linearGradient\n            x1="114.720775%"\n            y1="181.283245%"\n            x2="39.5399306%"\n            y2="100%"\n            id="' + prefix + 'linear-gradient"\n          >\n            <stop stop-color="#000000" offset="0%" />\n            <stop stop-color="#FFFFFF" offset="100%" />\n          </linearGradient>\n        </defs>\n        <g id="' + prefix + 'icon-group" fill="none" stroke="url(#' + prefix + 'linear-gradient)" stroke-width="18">\n          <path d="M113,5.08219117 L4.28393801,197.5 L221.716062,197.5 L113,5.08219117 Z" />\n        </g>\n      </svg>\n    </div>\n  ';
    return container;
}
function createCss(prefix, param) {
    let { horizontalProperty, verticalProperty } = param;
    const css = document.createElement('style');
    css.textContent = "\n    #" + prefix + "container {\n      position: absolute;\n      " + verticalProperty + ": 10px;\n      " + horizontalProperty + ": 30px;\n\n      border-radius: 3px;\n      background: #000;\n      color: #fff;\n      font: initial;\n      cursor: initial;\n      letter-spacing: initial;\n      text-shadow: initial;\n      text-transform: initial;\n      visibility: initial;\n\n      padding: 7px 10px 8px 10px;\n      align-items: center;\n      box-shadow: 0 11px 40px 0 rgba(0, 0, 0, 0.25), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n\n      display: none;\n      opacity: 0;\n      transition: opacity 0.1s ease, " + verticalProperty + " 0.1s ease;\n      animation: " + prefix + "fade-in 0.1s ease-in-out;\n    }\n\n    #" + prefix + "container." + prefix + "visible {\n      display: flex;\n    }\n\n    #" + prefix + "container." + prefix + "building {\n      " + verticalProperty + ": 20px;\n      opacity: 1;\n    }\n\n    #" + prefix + "icon-wrapper {\n      width: 16px;\n      height: 16px;\n    }\n\n    #" + prefix + "icon-wrapper > svg {\n      width: 100%;\n      height: 100%;\n    }\n\n    #" + prefix + "icon-group {\n      animation: " + prefix + "strokedash 1s ease-in-out both infinite;\n    }\n\n    @keyframes " + prefix + "fade-in {\n      from {\n        " + verticalProperty + ": 10px;\n        opacity: 0;\n      }\n      to {\n        " + verticalProperty + ": 20px;\n        opacity: 1;\n      }\n    }\n\n    @keyframes " + prefix + "strokedash {\n      0% {\n        stroke-dasharray: 0 226;\n      }\n      80%,\n      100% {\n        stroke-dasharray: 659 226;\n      }\n    }\n  ";
    return css;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-build-watcher.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/fouc.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// This wrapper function is used to safely select the best available function
// to schedule removal of the no-FOUC styles workaround. requestAnimationFrame
// is the ideal choice, but when used in iframes, there are no guarantees that
// the callback will actually be called, which could stall the promise returned
// from displayContent.
//
// See: https://www.vector-logic.com/blog/posts/on-request-animation-frame-and-embedded-iframes
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "displayContent", {
    enumerable: true,
    get: function() {
        return displayContent;
    }
});
const safeCallbackQueue = (callback)=>{
    if (window.requestAnimationFrame && window.self === window.top) {
        window.requestAnimationFrame(callback);
    } else {
        window.setTimeout(callback);
    }
};
function displayContent() {
    return new Promise((resolve)=>{
        safeCallbackQueue(function() {
            for(var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;){
                x[i].parentNode.removeChild(x[i]);
            }
            resolve();
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=fouc.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "pageBootstrap", {
    enumerable: true,
    get: function() {
        return pageBootstrap;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _ = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/index.js [client] (ecmascript)");
const _ondemandentriesclient = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/on-demand-entries-client.js [client] (ecmascript)"));
const _devbuildwatcher = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/dev-build-watcher.js [client] (ecmascript)"));
const _fouc = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/fouc.js [client] (ecmascript)");
const _websocket = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/websocket.js [client] (ecmascript)");
const _querystring = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/querystring.js [client] (ecmascript)");
const _hotreloadertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/dev/hot-reloader-types.js [client] (ecmascript)");
const _runtimeerrorhandler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/runtime-error-handler.js [client] (ecmascript)");
const _shared = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/shared.js [client] (ecmascript)");
const _hotreloaderclient = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/pages/hot-reloader-client.js [client] (ecmascript)");
function pageBootstrap(assetPrefix) {
    (0, _websocket.connectHMR)({
        assetPrefix,
        path: '/_next/webpack-hmr'
    });
    return (0, _.hydrate)({
        beforeRender: _fouc.displayContent
    }).then(()=>{
        (0, _ondemandentriesclient.default)();
        let buildIndicatorHandler;
        if ("TURBOPACK compile-time truthy", 1) {
            (0, _devbuildwatcher.default)((handler)=>{
                buildIndicatorHandler = handler;
            }, ("TURBOPACK compile-time value", "bottom-right"));
        }
        let reloading = false;
        (0, _websocket.addMessageListener)((payload)=>{
            if (reloading) return;
            if ('action' in payload) {
                switch(payload.action){
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ERROR:
                        {
                            const { stack, message } = JSON.parse(payload.errorJSON);
                            const error = Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
                                value: "E394",
                                enumerable: false
                            });
                            error.stack = stack;
                            throw error;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.RELOAD_PAGE:
                        {
                            reloading = true;
                            window.location.reload();
                            break;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.DEV_PAGES_MANIFEST_UPDATE:
                        {
                            fetch("" + assetPrefix + "/_next/static/development/_devPagesManifest.json").then((res)=>res.json()).then((manifest)=>{
                                window.__DEV_PAGES_MANIFEST = manifest;
                            }).catch((err)=>{
                                console.log("Failed to fetch devPagesManifest", err);
                            });
                            break;
                        }
                    default:
                        break;
                }
            } else if ('event' in payload) {
                switch(payload.event){
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.MIDDLEWARE_CHANGES:
                        {
                            return window.location.reload();
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.CLIENT_CHANGES:
                        {
                            // This is used in `../server/dev/turbopack-utils.ts`.
                            const isOnErrorPage = window.next.router.pathname === '/_error';
                            // On the error page we want to reload the page when a page was changed
                            if (isOnErrorPage) {
                                if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                                    console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                                }
                                reloading = true;
                                (0, _hotreloaderclient.performFullReload)(null);
                            }
                            break;
                        }
                    case _hotreloadertypes.HMR_ACTIONS_SENT_TO_BROWSER.SERVER_ONLY_CHANGES:
                        {
                            if (_runtimeerrorhandler.RuntimeErrorHandler.hadRuntimeError) {
                                console.warn(_shared.REACT_REFRESH_FULL_RELOAD_FROM_ERROR);
                                (0, _hotreloaderclient.performFullReload)(null);
                            }
                            const { pages } = payload;
                            // Make sure to reload when the dev-overlay is showing for an
                            // API route
                            // TODO: Fix `__NEXT_PAGE` type
                            if (pages.includes(_.router.query.__NEXT_PAGE)) {
                                return window.location.reload();
                            }
                            if (!_.router.clc && pages.includes(_.router.pathname)) {
                                console.log('Refreshing page data due to server-side change');
                                buildIndicatorHandler == null ? void 0 : buildIndicatorHandler.show();
                                const clearIndicator = ()=>buildIndicatorHandler == null ? void 0 : buildIndicatorHandler.hide();
                                _.router.replace(_.router.pathname + '?' + String((0, _querystring.assign)((0, _querystring.urlQueryToSearchParams)(_.router.query), new URLSearchParams(location.search))), _.router.asPath, {
                                    scroll: false
                                }).catch(()=>{
                                    // trigger hard reload when failing to refresh data
                                    // to show error overlay properly
                                    location.reload();
                                }).finally(clearIndicator);
                            }
                            break;
                        }
                    default:
                        break;
                }
            }
        });
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=page-bootstrap.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/next-dev-turbopack.js [client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// TODO: Remove use of `any` type.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [client] (ecmascript)");
const _ = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/index.js [client] (ecmascript)");
const _hotmiddlewareclient = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/dev/hot-middleware-client.js [client] (ecmascript)"));
const _pagebootstrap = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/page-bootstrap.js [client] (ecmascript)");
const _hmrclientts = __turbopack_require__("[turbopack]/browser/dev/hmr-client/hmr-client.ts [client] (ecmascript)");
window.next = {
    version: "" + _.version + "-turbo",
    // router is initialized later so it has to be live-binded
    get router () {
        return _.router;
    },
    emitter: _.emitter
};
self.__next_set_public_path__ = ()=>{};
self.__webpack_hash__ = '';
const devClient = (0, _hotmiddlewareclient.default)('turbopack');
(0, _.initialize)({
    devClient
}).then((param)=>{
    let { assetPrefix } = param;
    // for the page loader
    ;
    self.__turbopack_load_page_chunks__ = (page, chunksData)=>{
        const chunkPromises = chunksData.map(__turbopack_load__);
        Promise.all(chunkPromises).catch((err)=>console.error('failed to load chunks for page ' + page, err));
    };
    (0, _hmrclientts.connect)({
        addMessageListener (cb) {
            devClient.addTurbopackMessageListener(cb);
        },
        sendMessage: devClient.sendTurbopackMessage,
        onUpdateError: devClient.handleUpdateError
    });
    return (0, _pagebootstrap.pageBootstrap)(assetPrefix);
}).catch((err)=>{
    console.error('Error was not caught', err);
});
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=next-dev-turbopack.js.map
}}),
}]);

//# sourceMappingURL=a2c54_next_dist_client_b01348._.js.map