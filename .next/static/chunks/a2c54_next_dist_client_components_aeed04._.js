(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/a2c54_next_dist_client_components_aeed04._.js", {

"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)": (function(__turbopack_context__) {

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
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HTTPAccessFallbackBoundary", {
    enumerable: true,
    get: function() {
        return HTTPAccessFallbackBoundary;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _httpaccessfallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _warnonce = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/utils/warn-once.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
class HTTPAccessFallbackErrorBoundary extends _react.default.Component {
    componentDidCatch() {
        if (("TURBOPACK compile-time value", "development") === 'development' && this.props.missingSlots && // A missing children slot is the typical not-found case, so no need to warn
        !this.props.missingSlots.has('children')) {
            let warningMessage = 'No default component was found for a parallel route rendered on this page. Falling back to nearest NotFound boundary.\n' + 'Learn more: https://nextjs.org/docs/app/building-your-application/routing/parallel-routes#defaultjs\n\n';
            if (this.props.missingSlots.size > 0) {
                const formattedSlots = Array.from(this.props.missingSlots).sort((a, b)=>a.localeCompare(b)).map((slot)=>"@" + slot).join(', ');
                warningMessage += 'Missing slots: ' + formattedSlots;
            }
            (0, _warnonce.warnOnce)(warningMessage);
        }
    }
    static getDerivedStateFromError(error) {
        if ((0, _httpaccessfallback.isHTTPAccessFallbackError)(error)) {
            const httpStatus = (0, _httpaccessfallback.getAccessFallbackHTTPStatus)(error);
            return {
                triggeredStatus: httpStatus
            };
        }
        // Re-throw if error is not for 404
        throw error;
    }
    static getDerivedStateFromProps(props, state) {
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.triggeredStatus) {
            return {
                triggeredStatus: undefined,
                previousPathname: props.pathname
            };
        }
        return {
            triggeredStatus: state.triggeredStatus,
            previousPathname: props.pathname
        };
    }
    render() {
        const { notFound, forbidden, unauthorized, children } = this.props;
        const { triggeredStatus } = this.state;
        const errorComponents = {
            [_httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND]: notFound,
            [_httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN]: forbidden,
            [_httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED]: unauthorized
        };
        if (triggeredStatus) {
            const isNotFound = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.NOT_FOUND && notFound;
            const isForbidden = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.FORBIDDEN && forbidden;
            const isUnauthorized = triggeredStatus === _httpaccessfallback.HTTPAccessErrorStatus.UNAUTHORIZED && unauthorized;
            // If there's no matched boundary in this layer, keep throwing the error by rendering the children
            if (!(isNotFound || isForbidden || isUnauthorized)) {
                return children;
            }
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "robots",
                        content: "noindex"
                    }),
                    ("TURBOPACK compile-time value", "development") === 'development' && /*#__PURE__*/ (0, _jsxruntime.jsx)("meta", {
                        name: "next-error",
                        content: (0, _httpaccessfallback.getAccessFallbackErrorTypeByStatus)(triggeredStatus)
                    }),
                    errorComponents[triggeredStatus]
                ]
            });
        }
        return children;
    }
    constructor(props){
        super(props);
        this.state = {
            triggeredStatus: undefined,
            previousPathname: props.pathname
        };
    }
}
function HTTPAccessFallbackBoundary(param) {
    let { notFound, forbidden, unauthorized, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these error can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    const missingSlots = (0, _react.useContext)(_approutercontextsharedruntime.MissingSlotContext);
    const hasErrorFallback = !!(notFound || forbidden || unauthorized);
    if (hasErrorFallback) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(HTTPAccessFallbackErrorBoundary, {
            pathname: pathname,
            notFound: notFound,
            forbidden: forbidden,
            unauthorized: unauthorized,
            missingSlots: missingSlots,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)": (function(__turbopack_context__) {

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
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)": (function(__turbopack_context__) {

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
const _redirectstatuscode = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
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
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)": (function(__turbopack_context__) {

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
const _httpaccessfallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
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
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-hydration-error.js [app-client] (ecmascript)": (function(__turbopack_context__) {

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
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
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
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/globals/intercept-console-error.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    originConsoleError: null,
    patchConsoleError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    originConsoleError: function() {
        return originConsoleError;
    },
    patchConsoleError: function() {
        return patchConsoleError;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _iserror = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/lib/is-error.js [app-client] (ecmascript)"));
const _isnextroutererror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _useerrorhandler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js [app-client] (ecmascript)");
const originConsoleError = window.console.error;
function patchConsoleError() {
    // Ensure it's only patched once
    if (typeof window === 'undefined') {
        return;
    }
    window.console.error = function error() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        let maybeError;
        if ("TURBOPACK compile-time truthy", 1) {
            const replayedError = matchReplayedError(...args);
            if (replayedError) {
                maybeError = replayedError;
            } else if ((0, _iserror.default)(args[0])) {
                maybeError = args[0];
            } else {
                // See https://github.com/facebook/react/blob/d50323eb845c5fde0d720cae888bf35dedd05506/packages/react-reconciler/src/ReactFiberErrorLogger.js#L78
                maybeError = args[1];
            }
        } else {
            "TURBOPACK unreachable";
        }
        if (!(0, _isnextroutererror.isNextRouterError)(maybeError)) {
            if ("TURBOPACK compile-time truthy", 1) {
                (0, _useerrorhandler.handleClientError)(// but if we pass the error directly, `handleClientError` will ignore it
                maybeError, args, true);
            }
            originConsoleError.apply(window.console, args);
        }
    };
}
function matchReplayedError() {
    for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
        args[_key] = arguments[_key];
    }
    // See
    // https://github.com/facebook/react/blob/65a56d0e99261481c721334a3ec4561d173594cd/packages/react-devtools-shared/src/backend/flight/renderer.js#L88-L93
    //
    // Logs replayed from the server look like this:
    // [
    //   "%c%s%c %o\n\n%s\n\n%s\n",
    //   "background: #e6e6e6; ...",
    //   " Server ", // can also be e.g. " Prerender "
    //   "",
    //   Error
    //   "The above error occurred in the <Page> component."
    //   ...
    // ]
    if (args.length > 3 && typeof args[0] === 'string' && args[0].startsWith('%c%s%c ') && typeof args[1] === 'string' && typeof args[2] === 'string' && typeof args[3] === 'string') {
        const maybeError = args[4];
        if ((0, _iserror.default)(maybeError)) {
            return maybeError;
        }
    }
    return null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=intercept-console-error.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/globals/patch-console.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _interceptconsoleerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/globals/intercept-console-error.js [app-client] (ecmascript)");
(0, _interceptconsoleerror.patchConsoleError)();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=patch-console.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/globals/handle-global-errors.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
const _useerrorhandler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/internal/helpers/use-error-handler.js [app-client] (ecmascript)");
(0, _useerrorhandler.handleGlobalErrors)();
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=handle-global-errors.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)": (function(__turbopack_context__) {

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
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    canSegmentBeOverridden: null,
    matchSegment: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    canSegmentBeOverridden: function() {
        return canSegmentBeOverridden;
    },
    matchSegment: function() {
        return matchSegment;
    }
});
const _getsegmentparam = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/app-render/get-segment-param.js [app-client] (ecmascript)");
const matchSegment = (existingSegment, segment)=>{
    // segment is either Array or string
    if (typeof existingSegment === 'string') {
        if (typeof segment === 'string') {
            // Common case: segment is just a string
            return existingSegment === segment;
        }
        return false;
    }
    if (typeof segment === 'string') {
        return false;
    }
    return existingSegment[0] === segment[0] && existingSegment[1] === segment[1];
};
const canSegmentBeOverridden = (existingSegment, segment)=>{
    var _getSegmentParam;
    if (Array.isArray(existingSegment) || !Array.isArray(segment)) {
        return false;
    }
    return ((_getSegmentParam = (0, _getsegmentparam.getSegmentParam)(existingSegment)) == null ? void 0 : _getSegmentParam.param) === segment[0];
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=match-segments.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/promise-queue.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/*
    This is a simple promise queue that allows you to limit the number of concurrent promises
    that are running at any given time. It's used to limit the number of concurrent
    prefetch requests that are being made to the server but could be used for other
    things as well.
*/ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PromiseQueue", {
    enumerable: true,
    get: function() {
        return PromiseQueue;
    }
});
const _class_private_field_loose_base = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_loose_base.cjs [app-client] (ecmascript)");
const _class_private_field_loose_key = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_class_private_field_loose_key.cjs [app-client] (ecmascript)");
var _maxConcurrency = /*#__PURE__*/ _class_private_field_loose_key._("_maxConcurrency"), _runningCount = /*#__PURE__*/ _class_private_field_loose_key._("_runningCount"), _queue = /*#__PURE__*/ _class_private_field_loose_key._("_queue"), _processNext = /*#__PURE__*/ _class_private_field_loose_key._("_processNext");
class PromiseQueue {
    enqueue(promiseFn) {
        let taskResolve;
        let taskReject;
        const taskPromise = new Promise((resolve, reject)=>{
            taskResolve = resolve;
            taskReject = reject;
        });
        const task = async ()=>{
            try {
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]++;
                const result = await promiseFn();
                taskResolve(result);
            } catch (error) {
                taskReject(error);
            } finally{
                _class_private_field_loose_base._(this, _runningCount)[_runningCount]--;
                _class_private_field_loose_base._(this, _processNext)[_processNext]();
            }
        };
        const enqueueResult = {
            promiseFn: taskPromise,
            task
        };
        // wonder if we should take a LIFO approach here
        _class_private_field_loose_base._(this, _queue)[_queue].push(enqueueResult);
        _class_private_field_loose_base._(this, _processNext)[_processNext]();
        return taskPromise;
    }
    bump(promiseFn) {
        const index = _class_private_field_loose_base._(this, _queue)[_queue].findIndex((item)=>item.promiseFn === promiseFn);
        if (index > -1) {
            const bumpedItem = _class_private_field_loose_base._(this, _queue)[_queue].splice(index, 1)[0];
            _class_private_field_loose_base._(this, _queue)[_queue].unshift(bumpedItem);
            _class_private_field_loose_base._(this, _processNext)[_processNext](true);
        }
    }
    constructor(maxConcurrency = 5){
        Object.defineProperty(this, _processNext, {
            value: processNext
        });
        Object.defineProperty(this, _maxConcurrency, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _runningCount, {
            writable: true,
            value: void 0
        });
        Object.defineProperty(this, _queue, {
            writable: true,
            value: void 0
        });
        _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] = maxConcurrency;
        _class_private_field_loose_base._(this, _runningCount)[_runningCount] = 0;
        _class_private_field_loose_base._(this, _queue)[_queue] = [];
    }
}
function processNext(forced) {
    if (forced === void 0) forced = false;
    if ((_class_private_field_loose_base._(this, _runningCount)[_runningCount] < _class_private_field_loose_base._(this, _maxConcurrency)[_maxConcurrency] || forced) && _class_private_field_loose_base._(this, _queue)[_queue].length > 0) {
        var _class_private_field_loose_base__queue_shift;
        (_class_private_field_loose_base__queue_shift = _class_private_field_loose_base._(this, _queue)[_queue].shift()) == null ? void 0 : _class_private_field_loose_base__queue_shift.task();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=promise-queue.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/use-reducer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    useReducer: null,
    useUnwrapState: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    useReducer: function() {
        return useReducer;
    },
    useUnwrapState: function() {
        return useUnwrapState;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)"));
const _isthenable = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/is-thenable.js [app-client] (ecmascript)");
function useUnwrapState(state) {
    // reducer actions can be async, so sometimes we need to suspend until the state is resolved
    if ((0, _isthenable.isThenable)(state)) {
        const result = (0, _react.use)(state);
        return result;
    }
    return state;
}
function useReducer(actionQueue) {
    const [state, setState] = _react.default.useState(actionQueue.state);
    const dispatch = (0, _react.useCallback)((action)=>{
        actionQueue.dispatch(action, setState);
    }, [
        actionQueue
    ]);
    return [
        state,
        dispatch
    ];
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=use-reducer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useUntrackedPathname", {
    enumerable: true,
    get: function() {
        return useUntrackedPathname;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
/**
 * This checks to see if the current render has any unknown route parameters.
 * It's used to trigger a different render path in the error boundary.
 *
 * @returns true if there are any unknown route parameters, false otherwise
 */ function hasFallbackRouteParams() {
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { workAsyncStorage } = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
        const workStore = workAsyncStorage.getStore();
        if (!workStore) return false;
        const { fallbackRouteParams } = workStore;
        if (!fallbackRouteParams || fallbackRouteParams.size === 0) return false;
        return true;
    }
    return false;
}
function useUntrackedPathname() {
    // If there are any unknown route parameters we would typically throw
    // an error, but this internal method allows us to return a null value instead
    // for components that do not propagate the pathname to the static shell (like
    // the error boundary).
    if (hasFallbackRouteParams()) {
        return null;
    }
    // This shouldn't cause any issues related to conditional rendering because
    // the environment will be consistent for the render.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation-untracked.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    handleHardNavError: null,
    useNavFailureHandler: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    handleHardNavError: function() {
        return handleHardNavError;
    },
    useNavFailureHandler: function() {
        return useNavFailureHandler;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
function handleHardNavError(error) {
    if (error && typeof window !== 'undefined' && window.next.__pendingUrl && (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== (0, _createhreffromurl.createHrefFromUrl)(window.next.__pendingUrl)) {
        console.error("Error occurred during navigation, falling back to hard navigation", error);
        window.location.href = window.next.__pendingUrl.toString();
        return true;
    }
    return false;
}
function useNavFailureHandler() {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=nav-failure-handler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ErrorBoundary: null,
    ErrorBoundaryHandler: null,
    GlobalError: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ErrorBoundary: function() {
        return ErrorBoundary;
    },
    ErrorBoundaryHandler: function() {
        return ErrorBoundaryHandler;
    },
    GlobalError: function() {
        return GlobalError;
    },
    // Exported so that the import signature in the loaders can be identical to user
    // supplied custom global error signatures.
    default: function() {
        return _default;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)"));
const _navigationuntracked = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/navigation-untracked.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
const _navfailurehandler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
const styles = {
    error: {
        // https://github.com/sindresorhus/modern-normalize/blob/main/modern-normalize.css#L38-L52
        fontFamily: 'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',
        height: '100vh',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '28px',
        margin: '0 8px'
    }
};
// if we are revalidating we want to re-throw the error so the
// function crashes so we can maintain our previous cache
// instead of caching the error page
function HandleISRError(param) {
    let { error } = param;
    const store = _workasyncstorageexternal.workAsyncStorage.getStore();
    if ((store == null ? void 0 : store.isRevalidate) || (store == null ? void 0 : store.isStaticGeneration)) {
        console.error(error);
        throw error;
    }
    return null;
}
class ErrorBoundaryHandler extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _isnextroutererror.isNextRouterError)(error)) {
            // Re-throw if an expected internal Next.js router error occurs
            // this means it should be handled by a different boundary (such as a NotFound boundary in a parent segment)
            throw error;
        }
        return {
            error
        };
    }
    static getDerivedStateFromProps(props, state) {
        const { error } = state;
        // if we encounter an error while
        // a navigation is pending we shouldn't render
        // the error boundary and instead should fallback
        // to a hard navigation to attempt recovering
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        /**
     * Handles reset of the error boundary when a navigation happens.
     * Ensures the error boundary does not stay enabled when navigating to a new page.
     * Approach of setState in render is safe as it checks the previous pathname and then overrides
     * it as outlined in https://react.dev/reference/react/useState#storing-information-from-previous-renders
     */ if (props.pathname !== state.previousPathname && state.error) {
            return {
                error: null,
                previousPathname: props.pathname
            };
        }
        return {
            error: state.error,
            previousPathname: props.pathname
        };
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        if (this.state.error) {
            return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: this.state.error
                    }),
                    this.props.errorStyles,
                    this.props.errorScripts,
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(this.props.errorComponent, {
                        error: this.state.error,
                        reset: this.reset
                    })
                ]
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props), this.reset = ()=>{
            this.setState({
                error: null
            });
        };
        this.state = {
            error: null,
            previousPathname: this.props.pathname
        };
    }
}
function GlobalError(param) {
    let { error } = param;
    const digest = error == null ? void 0 : error.digest;
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)("html", {
        id: "__next_error__",
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)("head", {}),
            /*#__PURE__*/ (0, _jsxruntime.jsxs)("body", {
                children: [
                    /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleISRError, {
                        error: error
                    }),
                    /*#__PURE__*/ (0, _jsxruntime.jsx)("div", {
                        style: styles.error,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0, _jsxruntime.jsx)("h2", {
                                    style: styles.text,
                                    children: "Application error: a " + (digest ? 'server' : 'client') + "-side exception has occurred (see the " + (digest ? 'server logs' : 'browser console') + " for more information)."
                                }),
                                digest ? /*#__PURE__*/ (0, _jsxruntime.jsx)("p", {
                                    style: styles.text,
                                    children: "Digest: " + digest
                                }) : null
                            ]
                        })
                    })
                ]
            })
        ]
    });
}
const _default = GlobalError;
function ErrorBoundary(param) {
    let { errorComponent, errorStyles, errorScripts, children } = param;
    // When we're rendering the missing params shell, this will return null. This
    // is because we won't be rendering any not found boundaries or error
    // boundaries for the missing params shell. When this runs on the client
    // (where these errors can occur), we will get the correct pathname.
    const pathname = (0, _navigationuntracked.useUntrackedPathname)();
    if (errorComponent) {
        return /*#__PURE__*/ (0, _jsxruntime.jsx)(ErrorBoundaryHandler, {
            pathname: pathname,
            errorComponent: errorComponent,
            errorStyles: errorStyles,
            errorScripts: errorScripts,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=error-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AppRouterAnnouncer", {
    enumerable: true,
    get: function() {
        return AppRouterAnnouncer;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
const _reactdom = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-dom-experimental/index.js [app-client] (ecmascript)");
const ANNOUNCER_TYPE = 'next-route-announcer';
const ANNOUNCER_ID = '__next-route-announcer__';
function getAnnouncerNode() {
    var _existingAnnouncer_shadowRoot;
    const existingAnnouncer = document.getElementsByName(ANNOUNCER_TYPE)[0];
    if (existingAnnouncer == null ? void 0 : (_existingAnnouncer_shadowRoot = existingAnnouncer.shadowRoot) == null ? void 0 : _existingAnnouncer_shadowRoot.childNodes[0]) {
        return existingAnnouncer.shadowRoot.childNodes[0];
    } else {
        const container = document.createElement(ANNOUNCER_TYPE);
        container.style.cssText = 'position:absolute';
        const announcer = document.createElement('div');
        announcer.ariaLive = 'assertive';
        announcer.id = ANNOUNCER_ID;
        announcer.role = 'alert';
        announcer.style.cssText = 'position:absolute;border:0;height:1px;margin:-1px;padding:0;width:1px;clip:rect(0 0 0 0);overflow:hidden;white-space:nowrap;word-wrap:normal';
        // Use shadow DOM here to avoid any potential CSS bleed
        const shadow = container.attachShadow({
            mode: 'open'
        });
        shadow.appendChild(announcer);
        document.body.appendChild(container);
        return announcer;
    }
}
function AppRouterAnnouncer(param) {
    let { tree } = param;
    const [portalNode, setPortalNode] = (0, _react.useState)(null);
    (0, _react.useEffect)(()=>{
        const announcer = getAnnouncerNode();
        setPortalNode(announcer);
        return ()=>{
            const container = document.getElementsByTagName(ANNOUNCER_TYPE)[0];
            if (container == null ? void 0 : container.isConnected) {
                document.body.removeChild(container);
            }
        };
    }, []);
    const [routeAnnouncement, setRouteAnnouncement] = (0, _react.useState)('');
    const previousTitle = (0, _react.useRef)(undefined);
    (0, _react.useEffect)(()=>{
        let currentTitle = '';
        if (document.title) {
            currentTitle = document.title;
        } else {
            const pageHeader = document.querySelector('h1');
            if (pageHeader) {
                currentTitle = pageHeader.innerText || pageHeader.textContent || '';
            }
        }
        // Only announce the title change, but not for the first load because screen
        // readers do that automatically.
        if (previousTitle.current !== undefined && previousTitle.current !== currentTitle) {
            setRouteAnnouncement(currentTitle);
        }
        previousTitle.current = currentTitle;
    }, [
        tree
    ]);
    return portalNode ? /*#__PURE__*/ (0, _reactdom.createPortal)(routeAnnouncement, portalNode) : null;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router-announcer.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    getRedirectError: null,
    getRedirectStatusCodeFromError: null,
    getRedirectTypeFromError: null,
    getURLFromRedirectError: null,
    permanentRedirect: null,
    redirect: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    getRedirectError: function() {
        return getRedirectError;
    },
    getRedirectStatusCodeFromError: function() {
        return getRedirectStatusCodeFromError;
    },
    getRedirectTypeFromError: function() {
        return getRedirectTypeFromError;
    },
    getURLFromRedirectError: function() {
        return getURLFromRedirectError;
    },
    permanentRedirect: function() {
        return permanentRedirect;
    },
    redirect: function() {
        return redirect;
    }
});
const _actionasyncstorageexternal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/app-render/action-async-storage.external.js [app-client] (ecmascript)");
const _redirectstatuscode = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-status-code.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function getRedirectError(url, type, statusCode) {
    if (statusCode === void 0) statusCode = _redirectstatuscode.RedirectStatusCode.TemporaryRedirect;
    const error = Object.defineProperty(new Error(_redirecterror.REDIRECT_ERROR_CODE), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    });
    error.digest = _redirecterror.REDIRECT_ERROR_CODE + ";" + type + ";" + url + ";" + statusCode + ";";
    return error;
}
function redirect(/** The URL to redirect to */ url, type) {
    const actionStore = _actionasyncstorageexternal.actionAsyncStorage.getStore();
    const redirectType = type || ((actionStore == null ? void 0 : actionStore.isAction) ? _redirecterror.RedirectType.push : _redirecterror.RedirectType.replace);
    throw getRedirectError(url, redirectType, _redirectstatuscode.RedirectStatusCode.TemporaryRedirect);
}
function permanentRedirect(/** The URL to redirect to */ url, type) {
    if (type === void 0) type = _redirecterror.RedirectType.replace;
    throw getRedirectError(url, type, _redirectstatuscode.RedirectStatusCode.PermanentRedirect);
}
function getURLFromRedirectError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) return null;
    // Slices off the beginning of the digest that contains the code and the
    // separating ';'.
    return error.digest.split(';').slice(2, -2).join(';');
}
function getRedirectTypeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false
        });
    }
    return error.digest.split(';', 2)[1];
}
function getRedirectStatusCodeFromError(error) {
    if (!(0, _redirecterror.isRedirectError)(error)) {
        throw Object.defineProperty(new Error('Not a redirect error'), "__NEXT_ERROR_CODE", {
            value: "E260",
            enumerable: false
        });
    }
    return Number(error.digest.split(';').at(-2));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "notFound", {
    enumerable: true,
    get: function() {
        return notFound;
    }
});
const _httpaccessfallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
/**
 * This function allows you to render the [not-found.js file](https://nextjs.org/docs/app/api-reference/file-conventions/not-found)
 * within a route segment as well as inject a tag.
 *
 * `notFound()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * - In a Server Component, this will insert a `<meta name="robots" content="noindex" />` meta tag and set the status code to 404.
 * - In a Route Handler or Server Action, it will serve a 404 to the caller.
 *
 * Read more: [Next.js Docs: `notFound`](https://nextjs.org/docs/app/api-reference/functions/not-found)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";404";
function notFound() {
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=not-found.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "forbidden", {
    enumerable: true,
    get: function() {
        return forbidden;
    }
});
const _httpaccessfallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `forbidden` docs
/**
 * @experimental
 * This function allows you to render the [forbidden.js file](https://nextjs.org/docs/app/api-reference/file-conventions/forbidden)
 * within a route segment as well as inject a tag.
 *
 * `forbidden()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 * Read more: [Next.js Docs: `forbidden`](https://nextjs.org/docs/app/api-reference/functions/forbidden)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";403";
function forbidden() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`forbidden()` is experimental and only allowed to be enabled when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E488",
            enumerable: false
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=forbidden.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unauthorized", {
    enumerable: true,
    get: function() {
        return unauthorized;
    }
});
const _httpaccessfallback = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/http-access-fallback.js [app-client] (ecmascript)");
// TODO: Add `unauthorized` docs
/**
 * @experimental
 * This function allows you to render the [unauthorized.js file](https://nextjs.org/docs/app/api-reference/file-conventions/unauthorized)
 * within a route segment as well as inject a tag.
 *
 * `unauthorized()` can be used in
 * [Server Components](https://nextjs.org/docs/app/building-your-application/rendering/server-components),
 * [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers), and
 * [Server Actions](https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations).
 *
 *
 * Read more: [Next.js Docs: `unauthorized`](https://nextjs.org/docs/app/api-reference/functions/unauthorized)
 */ const DIGEST = "" + _httpaccessfallback.HTTP_ERROR_FALLBACK_ERROR_CODE + ";401";
function unauthorized() {
    if ("TURBOPACK compile-time truthy", 1) {
        throw Object.defineProperty(new Error("`unauthorized()` is experimental and only allowed to be used when `experimental.authInterrupts` is enabled."), "__NEXT_ERROR_CODE", {
            value: "E411",
            enumerable: false
        });
    }
    // eslint-disable-next-line no-throw-literal
    const error = Object.defineProperty(new Error(DIGEST), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    });
    error.digest = DIGEST;
    throw error;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unauthorized.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/hooks-server-context.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DynamicServerError: null,
    isDynamicServerError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DynamicServerError: function() {
        return DynamicServerError;
    },
    isDynamicServerError: function() {
        return isDynamicServerError;
    }
});
const DYNAMIC_ERROR_CODE = 'DYNAMIC_SERVER_USAGE';
class DynamicServerError extends Error {
    constructor(description){
        super("Dynamic server usage: " + description), this.description = description, this.digest = DYNAMIC_ERROR_CODE;
    }
}
function isDynamicServerError(err) {
    if (typeof err !== 'object' || err === null || !('digest' in err) || typeof err.digest !== 'string') {
        return false;
    }
    return err.digest === DYNAMIC_ERROR_CODE;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=hooks-server-context.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/static-generation-bailout.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    StaticGenBailoutError: null,
    isStaticGenBailoutError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    StaticGenBailoutError: function() {
        return StaticGenBailoutError;
    },
    isStaticGenBailoutError: function() {
        return isStaticGenBailoutError;
    }
});
const NEXT_STATIC_GEN_BAILOUT = 'NEXT_STATIC_GEN_BAILOUT';
class StaticGenBailoutError extends Error {
    constructor(...args){
        super(...args), this.code = NEXT_STATIC_GEN_BAILOUT;
    }
}
function isStaticGenBailoutError(error) {
    if (typeof error !== 'object' || error === null || !('code' in error)) {
        return false;
    }
    return error.code === NEXT_STATIC_GEN_BAILOUT;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=static-generation-bailout.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unstable_rethrow", {
    enumerable: true,
    get: function() {
        return unstable_rethrow;
    }
});
const _isdynamicusageerror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/export/helpers/is-dynamic-usage-error.js [app-client] (ecmascript)");
const _ispostpone = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/lib/router-utils/is-postpone.js [app-client] (ecmascript)");
const _bailouttocsr = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _isnextroutererror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/is-next-router-error.js [app-client] (ecmascript)");
function unstable_rethrow(error) {
    if ((0, _isnextroutererror.isNextRouterError)(error) || (0, _bailouttocsr.isBailoutToCSRError)(error) || (0, _isdynamicusageerror.isDynamicUsageError)(error) || (0, _ispostpone.isPostpone)(error)) {
        throw error;
    }
    if (error instanceof Error && 'cause' in error) {
        unstable_rethrow(error.cause);
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unstable-rethrow.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/** @internal */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _redirecterror.RedirectType;
    },
    forbidden: function() {
        return _forbidden.forbidden;
    },
    notFound: function() {
        return _notfound.notFound;
    },
    permanentRedirect: function() {
        return _redirect.permanentRedirect;
    },
    redirect: function() {
        return _redirect.redirect;
    },
    unauthorized: function() {
        return _unauthorized.unauthorized;
    },
    unstable_rethrow: function() {
        return _unstablerethrow.unstable_rethrow;
    }
});
const _redirect = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const _notfound = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/not-found.js [app-client] (ecmascript)");
const _forbidden = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/forbidden.js [app-client] (ecmascript)");
const _unauthorized = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/unauthorized.js [app-client] (ecmascript)");
const _unstablerethrow = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/unstable-rethrow.js [app-client] (ecmascript)");
class ReadonlyURLSearchParamsError extends Error {
    constructor(){
        super('Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams');
    }
}
class ReadonlyURLSearchParams extends URLSearchParams {
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ append() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ delete() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ set() {
        throw new ReadonlyURLSearchParamsError();
    }
    /** @deprecated Method unavailable on `ReadonlyURLSearchParams`. Read more: https://nextjs.org/docs/app/api-reference/functions/use-search-params#updating-searchparams */ sort() {
        throw new ReadonlyURLSearchParamsError();
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.react-server.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "bailoutToClientRendering", {
    enumerable: true,
    get: function() {
        return bailoutToClientRendering;
    }
});
const _bailouttocsr = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/lazy-dynamic/bailout-to-csr.js [app-client] (ecmascript)");
const _workasyncstorageexternal = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/app-render/work-async-storage.external.js [app-client] (ecmascript)");
function bailoutToClientRendering(reason) {
    const workStore = _workasyncstorageexternal.workAsyncStorage.getStore();
    if (workStore == null ? void 0 : workStore.forceStatic) return;
    if (workStore == null ? void 0 : workStore.isStaticGeneration) throw Object.defineProperty(new _bailouttocsr.BailoutToCSRError(reason), "__NEXT_ERROR_CODE", {
        value: "E394",
        enumerable: false
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=bailout-to-client-rendering.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    ReadonlyURLSearchParams: null,
    RedirectType: null,
    ServerInsertedHTMLContext: null,
    forbidden: null,
    notFound: null,
    permanentRedirect: null,
    redirect: null,
    unauthorized: null,
    unstable_rethrow: null,
    useParams: null,
    usePathname: null,
    useRouter: null,
    useSearchParams: null,
    useSelectedLayoutSegment: null,
    useSelectedLayoutSegments: null,
    useServerInsertedHTML: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    ReadonlyURLSearchParams: function() {
        return _navigationreactserver.ReadonlyURLSearchParams;
    },
    RedirectType: function() {
        return _navigationreactserver.RedirectType;
    },
    ServerInsertedHTMLContext: function() {
        return _serverinsertedhtmlsharedruntime.ServerInsertedHTMLContext;
    },
    forbidden: function() {
        return _navigationreactserver.forbidden;
    },
    notFound: function() {
        return _navigationreactserver.notFound;
    },
    permanentRedirect: function() {
        return _navigationreactserver.permanentRedirect;
    },
    redirect: function() {
        return _navigationreactserver.redirect;
    },
    unauthorized: function() {
        return _navigationreactserver.unauthorized;
    },
    unstable_rethrow: function() {
        return _navigationreactserver.unstable_rethrow;
    },
    useParams: function() {
        return useParams;
    },
    usePathname: function() {
        return usePathname;
    },
    useRouter: function() {
        return useRouter;
    },
    useSearchParams: function() {
        return useSearchParams;
    },
    useSelectedLayoutSegment: function() {
        return useSelectedLayoutSegment;
    },
    useSelectedLayoutSegments: function() {
        return useSelectedLayoutSegments;
    },
    useServerInsertedHTML: function() {
        return _serverinsertedhtmlsharedruntime.useServerInsertedHTML;
    }
});
const _react = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)");
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _getsegmentvalue = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/reducers/get-segment-value.js [app-client] (ecmascript)");
const _segment = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/segment.js [app-client] (ecmascript)");
const _navigationreactserver = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/navigation.react-server.js [app-client] (ecmascript)");
const _dynamicrendering = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/app-render/dynamic-rendering.js [app-client] (ecmascript)");
const _serverinsertedhtmlsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/server-inserted-html.shared-runtime.js [app-client] (ecmascript)");
function useSearchParams() {
    const searchParams = (0, _react.useContext)(_hooksclientcontextsharedruntime.SearchParamsContext);
    // In the case where this is `null`, the compat types added in
    // `next-env.d.ts` will add a new overload that changes the return type to
    // include `null`.
    const readonlySearchParams = (0, _react.useMemo)(()=>{
        if (!searchParams) {
            // When the router is not ready in pages, we won't have the search params
            // available.
            return null;
        }
        return new _navigationreactserver.ReadonlyURLSearchParams(searchParams);
    }, [
        searchParams
    ]);
    if (typeof window === 'undefined') {
        // AsyncLocalStorage should not be included in the client bundle.
        const { bailoutToClientRendering } = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/bailout-to-client-rendering.js [app-client] (ecmascript)");
        // TODO-APP: handle dynamic = 'force-static' here and on the client
        bailoutToClientRendering('useSearchParams()');
    }
    return readonlySearchParams;
}
function usePathname() {
    (0, _dynamicrendering.useDynamicRouteParams)('usePathname()');
    // In the case where this is `null`, the compat types added in `next-env.d.ts`
    // will add a new overload that changes the return type to include `null`.
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathnameContext);
}
function useRouter() {
    const router = (0, _react.useContext)(_approutercontextsharedruntime.AppRouterContext);
    if (router === null) {
        throw Object.defineProperty(new Error('invariant expected app router to be mounted'), "__NEXT_ERROR_CODE", {
            value: "E238",
            enumerable: false
        });
    }
    return router;
}
function useParams() {
    (0, _dynamicrendering.useDynamicRouteParams)('useParams()');
    return (0, _react.useContext)(_hooksclientcontextsharedruntime.PathParamsContext);
}
/** Get the canonical parameters from the current level to the leaf node. */ // Client components API
function getSelectedLayoutSegmentPath(tree, parallelRouteKey, first, segmentPath) {
    if (first === void 0) first = true;
    if (segmentPath === void 0) segmentPath = [];
    let node;
    if (first) {
        // Use the provided parallel route key on the first parallel route
        node = tree[1][parallelRouteKey];
    } else {
        // After first parallel route prefer children, if there's no children pick the first parallel route.
        const parallelRoutes = tree[1];
        var _parallelRoutes_children;
        node = (_parallelRoutes_children = parallelRoutes.children) != null ? _parallelRoutes_children : Object.values(parallelRoutes)[0];
    }
    if (!node) return segmentPath;
    const segment = node[0];
    let segmentValue = (0, _getsegmentvalue.getSegmentValue)(segment);
    if (!segmentValue || segmentValue.startsWith(_segment.PAGE_SEGMENT_KEY)) {
        return segmentPath;
    }
    segmentPath.push(segmentValue);
    return getSelectedLayoutSegmentPath(node, parallelRouteKey, false, segmentPath);
}
function useSelectedLayoutSegments(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    (0, _dynamicrendering.useDynamicRouteParams)('useSelectedLayoutSegments()');
    const context = (0, _react.useContext)(_approutercontextsharedruntime.LayoutRouterContext);
    // @ts-expect-error This only happens in `pages`. Type is overwritten in navigation.d.ts
    if (!context) return null;
    return getSelectedLayoutSegmentPath(context.parentTree, parallelRouteKey);
}
function useSelectedLayoutSegment(parallelRouteKey) {
    if (parallelRouteKey === void 0) parallelRouteKey = 'children';
    (0, _dynamicrendering.useDynamicRouteParams)('useSelectedLayoutSegment()');
    const selectedLayoutSegments = useSelectedLayoutSegments(parallelRouteKey);
    if (!selectedLayoutSegments || selectedLayoutSegments.length === 0) {
        return null;
    }
    const selectedLayoutSegment = parallelRouteKey === 'children' ? selectedLayoutSegments[0] : selectedLayoutSegments[selectedLayoutSegments.length - 1];
    // if the default slot is showing, we return null since it's not technically "selected" (it's a fallback)
    // and returning an internal value like `__DEFAULT__` would be confusing.
    return selectedLayoutSegment === _segment.DEFAULT_SEGMENT_KEY ? null : selectedLayoutSegment;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    RedirectBoundary: null,
    RedirectErrorBoundary: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    RedirectBoundary: function() {
        return RedirectBoundary;
    },
    RedirectErrorBoundary: function() {
        return RedirectErrorBoundary;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)"));
const _navigation = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/navigation.js [app-client] (ecmascript)");
const _redirect = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
function HandleRedirect(param) {
    let { redirect, reset, redirectType } = param;
    const router = (0, _navigation.useRouter)();
    (0, _react.useEffect)(()=>{
        _react.default.startTransition(()=>{
            if (redirectType === _redirecterror.RedirectType.push) {
                router.push(redirect, {});
            } else {
                router.replace(redirect, {});
            }
            reset();
        });
    }, [
        redirect,
        redirectType,
        reset,
        router
    ]);
    return null;
}
class RedirectErrorBoundary extends _react.default.Component {
    static getDerivedStateFromError(error) {
        if ((0, _redirecterror.isRedirectError)(error)) {
            const url = (0, _redirect.getURLFromRedirectError)(error);
            const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
            return {
                redirect: url,
                redirectType
            };
        }
        // Re-throw if error is not for redirect
        throw error;
    }
    // Explicit type is needed to avoid the generated `.d.ts` having a wide return type that could be specific to the `@types/react` version.
    render() {
        const { redirect, redirectType } = this.state;
        if (redirect !== null && redirectType !== null) {
            return /*#__PURE__*/ (0, _jsxruntime.jsx)(HandleRedirect, {
                redirect: redirect,
                redirectType: redirectType,
                reset: ()=>this.setState({
                        redirect: null
                    })
            });
        }
        return this.props.children;
    }
    constructor(props){
        super(props);
        this.state = {
            redirect: null,
            redirectType: null
        };
    }
}
function RedirectBoundary(param) {
    let { children } = param;
    const router = (0, _navigation.useRouter)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(RedirectErrorBoundary, {
        router: router,
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=redirect-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
/**
 * Create a "Thenable" that does not resolve. This is used to suspend indefinitely when data is not available yet.
 */ "use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "unresolvedThenable", {
    enumerable: true,
    get: function() {
        return unresolvedThenable;
    }
});
const unresolvedThenable = {
    then: ()=>{}
};
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=unresolved-thenable.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// TypeScript trick to simulate opaque types, like in Flow.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createCacheKey", {
    enumerable: true,
    get: function() {
        return createCacheKey;
    }
});
function createCacheKey(originalHref, nextUrl) {
    const originalUrl = new URL(originalHref);
    // TODO: As of now, we never include search params in the cache key because
    // per-segment prefetch requests are always static, and cannot contain search
    // params. But to support <Link prefetch={true}>, we will sometimes populate
    // the cache with dynamic data, so this will have to change.
    originalUrl.search = '';
    const normalizedHref = originalUrl.href;
    const normalizedNextUrl = nextUrl;
    const cacheKey = {
        href: normalizedHref,
        nextUrl: normalizedNextUrl
    };
    return cacheKey;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache-key.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/tuple-map.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
// Utility type. Prefix<[A, B, C, D]> matches [A], [A, B], [A, B, C] etc.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createTupleMap", {
    enumerable: true,
    get: function() {
        return createTupleMap;
    }
});
function createTupleMap() {
    let rootEntry = {
        parent: null,
        key: null,
        hasValue: false,
        value: null,
        map: null
    };
    // To optimize successive lookups, we cache the last accessed keypath.
    // Although it's not encoded in the type, these are both null or
    // both non-null. It uses object equality, so to take advantage of this
    // optimization, you must pass the same array instance to each successive
    // method call, and you must also not mutate the array between calls.
    let lastAccessedEntry = null;
    let lastAccessedKeys = null;
    function getOrCreateEntry(keys) {
        if (lastAccessedKeys === keys) {
            return lastAccessedEntry;
        }
        // Go through each level of keys until we find the entry that matches,
        // or create a new one if it doesn't already exist.
        let entry = rootEntry;
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            let map = entry.map;
            if (map !== null) {
                const existingEntry = map.get(key);
                if (existingEntry !== undefined) {
                    // Found a match. Keep going.
                    entry = existingEntry;
                    continue;
                }
            } else {
                map = new Map();
                entry.map = map;
            }
            // No entry exists yet at this level. Create a new one.
            const newEntry = {
                parent: entry,
                key,
                value: null,
                hasValue: false,
                map: null
            };
            map.set(key, newEntry);
            entry = newEntry;
        }
        lastAccessedKeys = keys;
        lastAccessedEntry = entry;
        return entry;
    }
    function getEntryIfExists(keys) {
        if (lastAccessedKeys === keys) {
            return lastAccessedEntry;
        }
        // Go through each level of keys until we find the entry that matches, or
        // return null if no match exists.
        let entry = rootEntry;
        for(let i = 0; i < keys.length; i++){
            const key = keys[i];
            let map = entry.map;
            if (map !== null) {
                const existingEntry = map.get(key);
                if (existingEntry !== undefined) {
                    // Found a match. Keep going.
                    entry = existingEntry;
                    continue;
                }
            }
            // No entry exists at this level.
            return null;
        }
        lastAccessedKeys = keys;
        lastAccessedEntry = entry;
        return entry;
    }
    function set(keys, value) {
        const entry = getOrCreateEntry(keys);
        entry.hasValue = true;
        entry.value = value;
    }
    function get(keys) {
        const entry = getEntryIfExists(keys);
        if (entry === null || !entry.hasValue) {
            return null;
        }
        return entry.value;
    }
    function deleteEntry(keys) {
        const entry = getEntryIfExists(keys);
        if (entry === null || !entry.hasValue) {
            return;
        }
        // Found a match. Delete it from the cache.
        const deletedEntry = entry;
        deletedEntry.hasValue = false;
        deletedEntry.value = null;
        // Check if we can garbage collect the entry.
        if (deletedEntry.map === null) {
            // Since this entry has no value, and also no child entries, we can
            // garbage collect it. Remove it from its parent, and keep garbage
            // collecting the parents until we reach a non-empty entry.
            // Unlike a `set` operation, these are no longer valid because the entry
            // itself is being modified, not just the value it contains.
            lastAccessedEntry = null;
            lastAccessedKeys = null;
            let parent = deletedEntry.parent;
            let key = deletedEntry.key;
            while(parent !== null){
                const parentMap = parent.map;
                if (parentMap !== null) {
                    parentMap.delete(key);
                    if (parentMap.size === 0) {
                        // We just removed the last entry in the parent map.
                        parent.map = null;
                        if (parent.value === null) {
                            // The parent node has no child entries, nor does it have a value
                            // on itself. It can be garbage collected. Keep going.
                            key = parent.key;
                            parent = parent.parent;
                            continue;
                        }
                    }
                }
                break;
            }
        }
    }
    return {
        set,
        get,
        delete: deleteEntry
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=tuple-map.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createLRU", {
    enumerable: true,
    get: function() {
        return createLRU;
    }
});
function createLRU(// purposes this is the byte size.
maxLruSize, onEviction) {
    let head = null;
    let didScheduleCleanup = false;
    let lruSize = 0;
    function put(node) {
        if (head === node) {
            // Already at the head
            return;
        }
        const prev = node.prev;
        const next = node.next;
        if (next === null || prev === null) {
            // This is an insertion
            lruSize += node.size;
            // Whenever we add an entry, we need to check if we've exceeded the
            // max size. We don't evict entries immediately; they're evicted later in
            // an asynchronous task.
            ensureCleanupIsScheduled();
        } else {
            // This is a move. Remove from its current position.
            prev.next = next;
            next.prev = prev;
        }
        // Move to the front of the list
        if (head === null) {
            // This is the first entry
            node.prev = node;
            node.next = node;
        } else {
            // Add to the front of the list
            const tail = head.prev;
            node.prev = tail;
            tail.next = node;
            node.next = head;
            head.prev = node;
        }
        head = node;
    }
    function updateSize(node, newNodeSize) {
        // This is a separate function so that we can resize the entry after it's
        // already been inserted.
        if (node.next === null) {
            // No longer part of LRU.
            return;
        }
        const prevNodeSize = node.size;
        node.size = newNodeSize;
        lruSize = lruSize - prevNodeSize + newNodeSize;
        ensureCleanupIsScheduled();
    }
    function deleteNode(deleted) {
        const next = deleted.next;
        const prev = deleted.prev;
        if (next !== null && prev !== null) {
            lruSize -= deleted.size;
            deleted.next = null;
            deleted.prev = null;
            // Remove from the list
            if (head === deleted) {
                // Update the head
                if (next === head) {
                    // This was the last entry
                    head = null;
                } else {
                    head = next;
                }
            } else {
                prev.next = next;
                next.prev = prev;
            }
        } else {
        // Already deleted
        }
    }
    function ensureCleanupIsScheduled() {
        if (didScheduleCleanup || lruSize <= maxLruSize) {
            return;
        }
        didScheduleCleanup = true;
        requestCleanupCallback(cleanup);
    }
    function cleanup() {
        didScheduleCleanup = false;
        // Evict entries until we're at 90% capacity. We can assume this won't
        // infinite loop because even if `maxLruSize` were 0, eventually
        // `deleteNode` sets `head` to `null` when we run out entries.
        const ninetyPercentMax = maxLruSize * 0.9;
        while(lruSize > ninetyPercentMax && head !== null){
            const tail = head.prev;
            deleteNode(tail);
            onEviction(tail);
        }
    }
    return {
        put,
        delete: deleteNode,
        updateSize
    };
}
const requestCleanupCallback = typeof requestIdleCallback === 'function' ? requestIdleCallback : (cb)=>setTimeout(cb, 0);
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=lru.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    EntryStatus: null,
    convertRouteTreeToFlightRouterState: null,
    fetchRouteOnCacheMiss: null,
    fetchSegmentOnCacheMiss: null,
    fetchSegmentPrefetchesForPPRDisabledRoute: null,
    readExactRouteCacheEntry: null,
    readOrCreateRouteCacheEntry: null,
    readOrCreateSegmentCacheEntry: null,
    readRouteCacheEntry: null,
    readSegmentCacheEntry: null,
    waitForSegmentCacheEntry: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    EntryStatus: function() {
        return EntryStatus;
    },
    convertRouteTreeToFlightRouterState: function() {
        return convertRouteTreeToFlightRouterState;
    },
    fetchRouteOnCacheMiss: function() {
        return fetchRouteOnCacheMiss;
    },
    fetchSegmentOnCacheMiss: function() {
        return fetchSegmentOnCacheMiss;
    },
    fetchSegmentPrefetchesForPPRDisabledRoute: function() {
        return fetchSegmentPrefetchesForPPRDisabledRoute;
    },
    readExactRouteCacheEntry: function() {
        return readExactRouteCacheEntry;
    },
    readOrCreateRouteCacheEntry: function() {
        return readOrCreateRouteCacheEntry;
    },
    readOrCreateSegmentCacheEntry: function() {
        return readOrCreateSegmentCacheEntry;
    },
    readRouteCacheEntry: function() {
        return readRouteCacheEntry;
    },
    readSegmentCacheEntry: function() {
        return readSegmentCacheEntry;
    },
    waitForSegmentCacheEntry: function() {
        return waitForSegmentCacheEntry;
    }
});
const _approuterheaders = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/app-router-headers.js [app-client] (ecmascript)");
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _scheduler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
const _appbuildid = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/app-build-id.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _tuplemap = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/tuple-map.js [app-client] (ecmascript)");
const _lru = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/lru.js [app-client] (ecmascript)");
const _segmentvalueencoding = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/server/app-render/segment-value-encoding.js [app-client] (ecmascript)");
const _flightdatahelpers = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/flight-data-helpers.js [app-client] (ecmascript)");
const _prefetchcacheutils = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/prefetch-cache-utils.js [app-client] (ecmascript)");
var EntryStatus = /*#__PURE__*/ function(EntryStatus) {
    EntryStatus[EntryStatus["Empty"] = 0] = "Empty";
    EntryStatus[EntryStatus["Pending"] = 1] = "Pending";
    EntryStatus[EntryStatus["Fulfilled"] = 2] = "Fulfilled";
    EntryStatus[EntryStatus["Rejected"] = 3] = "Rejected";
    return EntryStatus;
}({});
const routeCacheMap = (0, _tuplemap.createTupleMap)();
// We use an LRU for memory management. We must update this whenever we add or
// remove a new cache entry, or when an entry changes size.
// TODO: I chose the max size somewhat arbitrarily. Consider setting this based
// on navigator.deviceMemory, or some other heuristic. We should make this
// customizable via the Next.js config, too.
const maxRouteLruSize = 10 * 1024 * 1024 // 10 MB
;
const routeCacheLru = (0, _lru.createLRU)(maxRouteLruSize, onRouteLRUEviction);
// TODO: We may eventually store segment entries in a tuple map, too, to
// account for search params.
const segmentCacheMap = new Map();
// NOTE: Segments and Route entries are managed by separate LRUs. We could
// combine them into a single LRU, but because they are separate types, we'd
// need to wrap each one in an extra LRU node (to maintain monomorphism, at the
// cost of additional memory).
const maxSegmentLruSize = 50 * 1024 * 1024 // 50 MB
;
const segmentCacheLru = (0, _lru.createLRU)(maxSegmentLruSize, onSegmentLRUEviction);
function readExactRouteCacheEntry(now, href, nextUrl) {
    const keypath = nextUrl === null ? [
        href
    ] : [
        href,
        nextUrl
    ];
    const existingEntry = routeCacheMap.get(keypath);
    if (existingEntry !== null) {
        // Check if the entry is stale
        if (existingEntry.staleAt > now) {
            // Reuse the existing entry.
            // Since this is an access, move the entry to the front of the LRU.
            routeCacheLru.put(existingEntry);
            return existingEntry;
        } else {
            // Evict the stale entry from the cache.
            deleteRouteFromCache(existingEntry, keypath);
        }
    }
    return null;
}
function readRouteCacheEntry(now, key) {
    // First check if there's a non-intercepted entry. Most routes cannot be
    // intercepted, so this is the common case.
    const nonInterceptedEntry = readExactRouteCacheEntry(now, key.href, null);
    if (nonInterceptedEntry !== null && !nonInterceptedEntry.couldBeIntercepted) {
        // Found a match, and the route cannot be intercepted. We can reuse it.
        return nonInterceptedEntry;
    }
    // There was no match. Check again but include the Next-Url this time.
    return readExactRouteCacheEntry(now, key.href, key.nextUrl);
}
function readSegmentCacheEntry(now, path) {
    const existingEntry = segmentCacheMap.get(path);
    if (existingEntry !== undefined) {
        // Check if the entry is stale
        if (existingEntry.staleAt > now) {
            // Reuse the existing entry.
            // Since this is an access, move the entry to the front of the LRU.
            segmentCacheLru.put(existingEntry);
            return existingEntry;
        } else {
            // Evict the stale entry from the cache.
            deleteSegmentFromCache(existingEntry, path);
        }
    }
    return null;
}
function waitForSegmentCacheEntry(pendingEntry) {
    // Because the entry is pending, there's already a in-progress request.
    // Attach a promise to the entry that will resolve when the server responds.
    let promiseWithResolvers = pendingEntry.promise;
    if (promiseWithResolvers === null) {
        promiseWithResolvers = pendingEntry.promise = createPromiseWithResolvers();
    } else {
    // There's already a promise we can use
    }
    return promiseWithResolvers.promise;
}
function readOrCreateRouteCacheEntry(now, task) {
    const key = task.key;
    const existingEntry = readRouteCacheEntry(now, key);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const pendingEntry = {
        canonicalUrl: null,
        status: 0,
        blockedTasks: null,
        tree: null,
        head: [
            null,
            null
        ],
        isHeadPartial: true,
        // Since this is an empty entry, there's no reason to ever evict it. It will
        // be updated when the data is populated.
        staleAt: Infinity,
        // This is initialized to true because we don't know yet whether the route
        // could be intercepted. It's only set to false once we receive a response
        // from the server.
        couldBeIntercepted: true,
        // Similarly, we don't yet know if the route supports PPR.
        isPPREnabled: false,
        // LRU-related fields
        keypath: null,
        next: null,
        prev: null,
        size: 0
    };
    const keypath = key.nextUrl === null ? [
        key.href
    ] : [
        key.href,
        key.nextUrl
    ];
    routeCacheMap.set(keypath, pendingEntry);
    // Stash the keypath on the entry so we know how to remove it from the map
    // if it gets evicted from the LRU.
    pendingEntry.keypath = keypath;
    routeCacheLru.put(pendingEntry);
    return pendingEntry;
}
function readOrCreateSegmentCacheEntry(now, route, path) {
    const existingEntry = readSegmentCacheEntry(now, path);
    if (existingEntry !== null) {
        return existingEntry;
    }
    // Create a pending entry and add it to the cache.
    const pendingEntry = {
        status: 0,
        rsc: null,
        loading: null,
        staleAt: route.staleAt,
        isPartial: true,
        promise: null,
        // LRU-related fields
        key: null,
        next: null,
        prev: null,
        size: 0
    };
    segmentCacheMap.set(path, pendingEntry);
    // Stash the keypath on the entry so we know how to remove it from the map
    // if it gets evicted from the LRU.
    pendingEntry.key = path;
    segmentCacheLru.put(pendingEntry);
    return pendingEntry;
}
function deleteRouteFromCache(entry, keypath) {
    pingBlockedTasks(entry);
    routeCacheMap.delete(keypath);
    routeCacheLru.delete(entry);
}
function deleteSegmentFromCache(entry, key) {
    cancelEntryListeners(entry);
    segmentCacheMap.delete(key);
    segmentCacheLru.delete(entry);
}
function onRouteLRUEviction(entry) {
    // The LRU evicted this entry. Remove it from the map.
    const keypath = entry.keypath;
    if (keypath !== null) {
        entry.keypath = null;
        pingBlockedTasks(entry);
        routeCacheMap.delete(keypath);
    }
}
function onSegmentLRUEviction(entry) {
    // The LRU evicted this entry. Remove it from the map.
    const key = entry.key;
    if (key !== null) {
        entry.key = null;
        cancelEntryListeners(entry);
        segmentCacheMap.delete(key);
    }
}
function cancelEntryListeners(entry) {
    if (entry.status === 1 && entry.promise !== null) {
        // There were listeners for this entry. Resolve them with `null` to indicate
        // that the prefetch failed. It's up to the listener to decide how to handle
        // this case.
        // NOTE: We don't currently propagate the reason the prefetch was canceled
        // but we could by accepting a `reason` argument.
        entry.promise.resolve(null);
        entry.promise = null;
    }
}
function pingBlockedTasks(entry) {
    const blockedTasks = entry.blockedTasks;
    if (blockedTasks !== null) {
        for (const task of blockedTasks){
            (0, _scheduler.pingPrefetchTask)(task);
        }
        entry.blockedTasks = null;
    }
}
function fulfillRouteCacheEntry(entry, tree, head, isHeadPartial, staleAt, couldBeIntercepted, canonicalUrl, isPPREnabled) {
    const fulfilledEntry = entry;
    fulfilledEntry.status = 2;
    fulfilledEntry.tree = tree;
    fulfilledEntry.head = head;
    fulfilledEntry.isHeadPartial = isHeadPartial;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.couldBeIntercepted = couldBeIntercepted;
    fulfilledEntry.canonicalUrl = canonicalUrl;
    fulfilledEntry.isPPREnabled = isPPREnabled;
    pingBlockedTasks(entry);
    return fulfilledEntry;
}
function fulfillSegmentCacheEntry(segmentCacheEntry, rsc, loading, staleAt, isPartial) {
    const fulfilledEntry = segmentCacheEntry;
    fulfilledEntry.status = 2;
    fulfilledEntry.rsc = rsc;
    fulfilledEntry.loading = loading;
    fulfilledEntry.staleAt = staleAt;
    fulfilledEntry.isPartial = isPartial;
    // Resolve any listeners that were waiting for this data.
    if (segmentCacheEntry.promise !== null) {
        segmentCacheEntry.promise.resolve(fulfilledEntry);
        // Free the promise for garbage collection.
        fulfilledEntry.promise = null;
    }
}
function rejectRouteCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    pingBlockedTasks(entry);
}
function rejectSegmentCacheEntry(entry, staleAt) {
    const rejectedEntry = entry;
    rejectedEntry.status = 3;
    rejectedEntry.staleAt = staleAt;
    if (entry.promise !== null) {
        // NOTE: We don't currently propagate the reason the prefetch was canceled
        // but we could by accepting a `reason` argument.
        entry.promise.resolve(null);
        entry.promise = null;
    }
}
function convertRootTreePrefetchToRouteTree(rootTree) {
    return convertTreePrefetchToRouteTree(rootTree.tree, _segmentvalueencoding.ROOT_SEGMENT_KEY);
}
function convertTreePrefetchToRouteTree(prefetch, key) {
    // Converts the route tree sent by the server into the format used by the
    // cache. The cached version of the tree includes additional fields, such as a
    // cache key for each segment. Since this is frequently accessed, we compute
    // it once instead of on every access. This same cache key is also used to
    // request the segment from the server.
    let slots = null;
    const prefetchSlots = prefetch.slots;
    if (prefetchSlots !== null) {
        slots = {};
        for(let parallelRouteKey in prefetchSlots){
            const childPrefetch = prefetchSlots[parallelRouteKey];
            const childSegment = childPrefetch.segment;
            // TODO: Eventually, the param values will not be included in the response
            // from the server. We'll instead fill them in on the client by parsing
            // the URL. This is where we'll do that.
            const childKey = (0, _segmentvalueencoding.encodeChildSegmentKey)(key, parallelRouteKey, (0, _segmentvalueencoding.encodeSegment)(childSegment));
            slots[parallelRouteKey] = convertTreePrefetchToRouteTree(childPrefetch, childKey);
        }
    }
    return {
        key,
        token: prefetch.token,
        segment: prefetch.segment,
        slots,
        isRootLayout: prefetch.isRootLayout
    };
}
function convertRootFlightRouterStateToRouteTree(flightRouterState) {
    return convertFlightRouterStateToRouteTree(flightRouterState, _segmentvalueencoding.ROOT_SEGMENT_KEY);
}
function convertFlightRouterStateToRouteTree(flightRouterState, key) {
    let slots = null;
    const parallelRoutes = flightRouterState[1];
    for(let parallelRouteKey in parallelRoutes){
        const childRouterState = parallelRoutes[parallelRouteKey];
        const childSegment = childRouterState[0];
        // TODO: Eventually, the param values will not be included in the response
        // from the server. We'll instead fill them in on the client by parsing
        // the URL. This is where we'll do that.
        const childKey = (0, _segmentvalueencoding.encodeChildSegmentKey)(key, parallelRouteKey, (0, _segmentvalueencoding.encodeSegment)(childSegment));
        const childTree = convertFlightRouterStateToRouteTree(childRouterState, childKey);
        if (slots === null) {
            slots = {
                [parallelRouteKey]: childTree
            };
        } else {
            slots[parallelRouteKey] = childTree;
        }
    }
    return {
        key,
        // NOTE: Dynamic server responses do not currently include an access token.
        // (They may in the future.) Which means this tree cannot be used to issue
        // a per-segment prefetch.
        token: null,
        segment: flightRouterState[0],
        slots,
        isRootLayout: flightRouterState[4] === true
    };
}
function convertRouteTreeToFlightRouterState(routeTree) {
    const parallelRoutes = {};
    if (routeTree.slots !== null) {
        for(const parallelRouteKey in routeTree.slots){
            parallelRoutes[parallelRouteKey] = convertRouteTreeToFlightRouterState(routeTree.slots[parallelRouteKey]);
        }
    }
    const flightRouterState = [
        routeTree.segment,
        parallelRoutes,
        null,
        null,
        routeTree.isRootLayout
    ];
    return flightRouterState;
}
async function fetchRouteOnCacheMiss(entry, task) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice though that it does not
    // return anything; it writes the result to the cache entry directly, then
    // pings the scheduler to unblock the corresponding prefetch task.
    const key = task.key;
    const href = key.href;
    const nextUrl = key.nextUrl;
    try {
        const response = await fetchSegmentPrefetchResponse(href, '/_tree', nextUrl);
        if (!response || !response.ok || // 204 is a Cache miss. Though theoretically this shouldn't happen when
        // PPR is enabled, because we always respond to route tree requests, even
        // if it needs to be blockingly generated on demand.
        response.status === 204 || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
            return null;
        }
        // This is a bit convoluted but it's taken from router-reducer and
        // fetch-server-response
        const canonicalUrl = response.redirected ? (0, _createhreffromurl.createHrefFromUrl)((0, _fetchserverresponse.urlToUrlWithoutFlightMarker)(response.url)) : href;
        // Check whether the response varies based on the Next-Url header.
        const varyHeader = response.headers.get('vary');
        const couldBeIntercepted = varyHeader !== null && varyHeader.includes(_approuterheaders.NEXT_URL);
        // Track when the network connection closes.
        const closed = createPromiseWithResolvers();
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route.
        // TODO: Add support for non-PPR routes.
        const routeIsPPREnabled = response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) === '2';
        if (routeIsPPREnabled) {
            const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
                routeCacheLru.updateSize(entry, size);
            });
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream);
            if (serverData.buildId !== (0, _appbuildid.getAppBuildId)()) {
                // The server build does not match the client. Treat as a 404. During
                // an actual navigation, the router will trigger an MPA navigation.
                // TODO: Consider moving the build ID to a response header so we can check
                // it before decoding the response, and so there's one way of checking
                // across all response types.
                rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
                return null;
            }
            fulfillRouteCacheEntry(entry, convertRootTreePrefetchToRouteTree(serverData), serverData.head, serverData.isHeadPartial, Date.now() + serverData.staleTime, couldBeIntercepted, canonicalUrl, routeIsPPREnabled);
        } else {
            // PPR is not enabled for this route. The server responds with a
            // different format (FlightRouterState) that we need to convert.
            // TODO: We will unify the responses eventually. I'm keeping the types
            // separate for now because FlightRouterState has so many
            // overloaded concerns.
            const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
                routeCacheLru.updateSize(entry, size);
            });
            const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream);
            writeDynamicTreeResponseIntoCache(Date.now(), response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled);
        }
        if (!couldBeIntercepted && nextUrl !== null) {
            // This route will never be intercepted. So we can use this entry for all
            // requests to this route, regardless of the Next-Url header. This works
            // because when reading the cache we always check for a valid
            // non-intercepted entry first.
            //
            // Re-key the entry. Since we're in an async task, we must first confirm
            // that the entry hasn't been concurrently modified by a different task.
            const currentKeypath = [
                href,
                nextUrl
            ];
            const expectedEntry = routeCacheMap.get(currentKeypath);
            if (expectedEntry === entry) {
                routeCacheMap.delete(currentKeypath);
                const newKeypath = [
                    href
                ];
                routeCacheMap.set(newKeypath, entry);
                // We don't need to update the LRU because the entry is already in it.
                // But since we changed the keypath, we do need to update that, so we
                // know how to remove it from the map if it gets evicted from the LRU.
                entry.keypath = newKeypath;
            } else {
            // Something else modified this entry already. Since the re-keying is
            // just a performance optimization, we can safely skip it.
            }
        }
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectRouteCacheEntry(entry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchSegmentOnCacheMiss(route, segmentCacheEntry, routeKey, segmentKeyPath, accessToken) {
    // This function is allowed to use async/await because it contains the actual
    // fetch that gets issued on a cache miss. Notice though that it does not
    // return anything; it writes the result to the cache entry directly.
    //
    // Segment fetches are non-blocking so we don't need to ping the scheduler
    // on completion.
    const href = routeKey.href;
    try {
        const response = await fetchSegmentPrefetchResponse(href, accessToken === '' ? segmentKeyPath : segmentKeyPath + "." + accessToken, routeKey.nextUrl);
        if (!response || !response.ok || response.status === 204 || // Cache miss
        // This checks whether the response was served from the per-segment cache,
        // rather than the old prefetching flow. If it fails, it implies that PPR
        // is disabled on this route. Theoretically this should never happen
        // because we only issue requests for segments once we've verified that
        // the route supports PPR.
        response.headers.get(_approuterheaders.NEXT_DID_POSTPONE_HEADER) !== '2' || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        // Track when the network connection closes.
        const closed = createPromiseWithResolvers();
        // Wrap the original stream in a new stream that never closes. That way the
        // Flight client doesn't error if there's a hanging promise.
        const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(size) {
            segmentCacheLru.updateSize(segmentCacheEntry, size);
        });
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream);
        if (serverData.buildId !== (0, _appbuildid.getAppBuildId)()) {
            // The server build does not match the client. Treat as a 404. During
            // an actual navigation, the router will trigger an MPA navigation.
            // TODO: Consider moving the build ID to a response header so we can check
            // it before decoding the response, and so there's one way of checking
            // across all response types.
            rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
            return null;
        }
        fulfillSegmentCacheEntry(segmentCacheEntry, serverData.rsc, serverData.loading, // So we use the stale time of the route.
        route.staleAt, serverData.isPartial);
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            closed: closed.promise
        };
    } catch (error) {
        // Either the connection itself failed, or something bad happened while
        // decoding the response.
        rejectSegmentCacheEntry(segmentCacheEntry, Date.now() + 10 * 1000);
        return null;
    }
}
async function fetchSegmentPrefetchesForPPRDisabledRoute(task, route, dynamicRequestTree, spawnedEntries) {
    const href = task.key.href;
    const nextUrl = task.key.nextUrl;
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_STATE_TREE_HEADER]: encodeURIComponent(JSON.stringify(dynamicRequestTree))
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    try {
        const response = await fetchPrefetchResponse(href, headers);
        if (!response || !response.ok || !response.body) {
            // Server responded with an error, or with a miss. We should still cache
            // the response, but we can try again after 10 seconds.
            rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
            return null;
        }
        // Track when the network connection closes.
        const closed = createPromiseWithResolvers();
        let fulfilledEntries = null;
        const prefetchStream = createPrefetchResponseStream(response.body, closed.resolve, function onResponseSizeUpdate(totalBytesReceivedSoFar) {
            // When processing a dynamic response, we don't know how large each
            // individual segment is, so approximate by assiging each segment
            // the average of the total response size.
            if (fulfilledEntries === null) {
                // Haven't received enough data yet to know which segments
                // were included.
                return;
            }
            const averageSize = totalBytesReceivedSoFar / fulfilledEntries.length;
            for (const entry of fulfilledEntries){
                segmentCacheLru.updateSize(entry, averageSize);
            }
        });
        const serverData = await (0, _fetchserverresponse.createFromNextReadableStream)(prefetchStream);
        // Aside from writing the data into the cache, this function also returns
        // the entries that were fulfilled, so we can streamingly update their sizes
        // in the LRU as more data comes in.
        fulfilledEntries = writeDynamicRenderResponseIntoCache(Date.now(), response, serverData, route, spawnedEntries);
        // Return a promise that resolves when the network connection closes, so
        // the scheduler can track the number of concurrent network connections.
        return {
            closed: closed.promise
        };
    } catch (error) {
        rejectSegmentEntriesIfStillPending(spawnedEntries, Date.now() + 10 * 1000);
        return null;
    }
}
function writeDynamicTreeResponseIntoCache(now, response, serverData, entry, couldBeIntercepted, canonicalUrl, routeIsPPREnabled) {
    if (serverData.b !== (0, _appbuildid.getAppBuildId)()) {
        // The server build does not match the client. Treat as a 404. During
        // an actual navigation, the router will trigger an MPA navigation.
        // TODO: Consider moving the build ID to a response header so we can check
        // it before decoding the response, and so there's one way of checking
        // across all response types.
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const normalizedFlightDataResult = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (// MPA navigation.
    typeof normalizedFlightDataResult === 'string' || normalizedFlightDataResult.length !== 1) {
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightData = normalizedFlightDataResult[0];
    if (!flightData.isRootRender) {
        // Unexpected response format.
        rejectRouteCacheEntry(entry, now + 10 * 1000);
        return;
    }
    const flightRouterState = flightData.tree;
    // TODO: Extract to function
    const staleTimeHeader = response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER);
    const staleTime = staleTimeHeader !== null ? parseInt(staleTimeHeader, 10) : _prefetchcacheutils.STATIC_STALETIME_MS;
    fulfillRouteCacheEntry(entry, convertRootFlightRouterStateToRouteTree(flightRouterState), flightData.head, flightData.isHeadPartial, now + staleTime, couldBeIntercepted, canonicalUrl, routeIsPPREnabled);
}
function rejectSegmentEntriesIfStillPending(entries, staleAt) {
    const fulfilledEntries = [];
    for (const entry of entries.values()){
        if (entry.status === 1) {
            rejectSegmentCacheEntry(entry, staleAt);
        } else if (entry.status === 2) {
            fulfilledEntries.push(entry);
        }
    }
    return fulfilledEntries;
}
function writeDynamicRenderResponseIntoCache(now, response, serverData, route, spawnedEntries) {
    if (serverData.b !== (0, _appbuildid.getAppBuildId)()) {
        // The server build does not match the client. Treat as a 404. During
        // an actual navigation, the router will trigger an MPA navigation.
        // TODO: Consider moving the build ID to a response header so we can check
        // it before decoding the response, and so there's one way of checking
        // across all response types.
        rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
        return null;
    }
    const flightDatas = (0, _flightdatahelpers.normalizeFlightData)(serverData.f);
    if (typeof flightDatas === 'string') {
        // This means navigating to this route will result in an MPA navigation.
        // TODO: We should cache this, too, so that the MPA navigation is immediate.
        return null;
    }
    for (const flightData of flightDatas){
        const seedData = flightData.seedData;
        if (seedData !== null) {
            // The data sent by the server represents only a subtree of the app. We
            // need to find the part of the task tree that matches the response.
            //
            // segmentPath represents the parent path of subtree. It's a repeating
            // pattern of parallel route key and segment:
            //
            //   [string, Segment, string, Segment, string, Segment, ...]
            const segmentPath = flightData.segmentPath;
            let segmentKey = _segmentvalueencoding.ROOT_SEGMENT_KEY;
            for(let i = 0; i < segmentPath.length; i += 2){
                const parallelRouteKey = segmentPath[i];
                const segment = segmentPath[i + 1];
                segmentKey = (0, _segmentvalueencoding.encodeChildSegmentKey)(segmentKey, parallelRouteKey, (0, _segmentvalueencoding.encodeSegment)(segment));
            }
            const staleTimeHeader = response.headers.get(_approuterheaders.NEXT_ROUTER_STALE_TIME_HEADER);
            const staleTime = staleTimeHeader !== null ? parseInt(staleTimeHeader, 10) : _prefetchcacheutils.STATIC_STALETIME_MS;
            writeSeedDataIntoCache(now, route, now + staleTime, seedData, segmentKey, spawnedEntries);
        }
    }
    // Any entry that's still pending was intentionally not rendered by the
    // server, because it was inside the loading boundary. Mark them as rejected
    // so we know not to fetch them again.
    // TODO: If PPR is enabled on some routes but not others, then it's possible
    // that a different page is able to do a per-segment prefetch of one of the
    // segments we're marking as rejected here. We should mark on the segment
    // somehow that the reason for the rejection is because of a non-PPR prefetch.
    // That way a per-segment prefetch knows to disregard the rejection.
    const fulfilledEntries = rejectSegmentEntriesIfStillPending(spawnedEntries, now + 10 * 1000);
    return fulfilledEntries;
}
function writeSeedDataIntoCache(now, route, staleAt, seedData, key, entriesOwnedByCurrentTask) {
    // This function is used to write the result of a dynamic server request
    // (CacheNodeSeedData) into the prefetch cache. It's used in cases where we
    // want to treat a dynamic response as if it were static. The two examples
    // where this happens are <Link prefetch={true}> (which implicitly opts
    // dynamic data into being static) and when prefetching a PPR-disabled route
    const rsc = seedData[1];
    const loading = seedData[3];
    const isPartial = rsc === null;
    // We should only write into cache entries that are owned by us. Or create
    // a new one and write into that. We must never write over an entry that was
    // created by a different task, because that causes data races.
    const ownedEntry = entriesOwnedByCurrentTask.get(key);
    if (ownedEntry !== undefined) {
        fulfillSegmentCacheEntry(ownedEntry, rsc, loading, staleAt, isPartial);
    } else {
        // There's no matching entry. Attempt to create a new one.
        const possiblyNewEntry = readOrCreateSegmentCacheEntry(now, route, key);
        if (possiblyNewEntry.status === 0) {
            // Confirmed this is a new entry. We can fulfill it.
            const newEntry = possiblyNewEntry;
            fulfillSegmentCacheEntry(newEntry, rsc, loading, staleAt, isPartial);
        } else {
        // There was already an entry in the cache. We must not write over it.
        }
    }
    // Recursively write the child data into the cache.
    const seedDataChildren = seedData[2];
    if (seedDataChildren !== null) {
        for(const parallelRouteKey in seedDataChildren){
            const childSeedData = seedDataChildren[parallelRouteKey];
            if (childSeedData !== null) {
                const childSegment = childSeedData[0];
                writeSeedDataIntoCache(now, route, staleAt, childSeedData, (0, _segmentvalueencoding.encodeChildSegmentKey)(key, parallelRouteKey, (0, _segmentvalueencoding.encodeSegment)(childSegment)), entriesOwnedByCurrentTask);
            }
        }
    }
}
async function fetchSegmentPrefetchResponse(href, segmentPath, nextUrl) {
    const headers = {
        [_approuterheaders.RSC_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_PREFETCH_HEADER]: '1',
        [_approuterheaders.NEXT_ROUTER_SEGMENT_PREFETCH_HEADER]: segmentPath
    };
    if (nextUrl !== null) {
        headers[_approuterheaders.NEXT_URL] = nextUrl;
    }
    return fetchPrefetchResponse(href, headers);
}
async function fetchPrefetchResponse(href, headers) {
    const fetchPriority = 'low';
    const response = await (0, _fetchserverresponse.createFetch)(new URL(href), headers, fetchPriority);
    const contentType = response.headers.get('content-type');
    const isFlightResponse = contentType && contentType.startsWith(_approuterheaders.RSC_CONTENT_TYPE_HEADER);
    if (!response.ok || !isFlightResponse) {
        return null;
    }
    return response;
}
function createPrefetchResponseStream(originalFlightStream, onStreamClose, onResponseSizeUpdate) {
    // When PPR is enabled, prefetch streams may contain references that never
    // resolve, because that's how we encode dynamic data access. In the decoded
    // object returned by the Flight client, these are reified into hanging
    // promises that suspend during render, which is effectively what we want.
    // The UI resolves when it switches to the dynamic data stream
    // (via useDeferredValue(dynamic, static)).
    //
    // However, the Flight implementation currently errors if the server closes
    // the response before all the references are resolved. As a cheat to work
    // around this, we wrap the original stream in a new stream that never closes,
    // and therefore doesn't error.
    //
    // While processing the original stream, we also incrementally update the size
    // of the cache entry in the LRU.
    let totalByteLength = 0;
    const reader = originalFlightStream.getReader();
    return new ReadableStream({
        async pull (controller) {
            while(true){
                const { done, value } = await reader.read();
                if (!done) {
                    // Pass to the target stream and keep consuming the Flight response
                    // from the server.
                    controller.enqueue(value);
                    // Incrementally update the size of the cache entry in the LRU.
                    // NOTE: Since prefetch responses are delivered in a single chunk,
                    // it's not really necessary to do this streamingly, but I'm doing it
                    // anyway in case this changes in the future.
                    totalByteLength += value.byteLength;
                    onResponseSizeUpdate(totalByteLength);
                    continue;
                }
                // The server stream has closed. Exit, but intentionally do not close
                // the target stream. We do notify the caller, though.
                onStreamClose();
                return;
            }
        }
    });
}
function createPromiseWithResolvers() {
    // Shim of Stage 4 Promise.withResolvers proposal
    let resolve;
    let reject;
    const promise = new Promise((res, rej)=>{
        resolve = res;
        reject = rej;
    });
    return {
        resolve: resolve,
        reject: reject,
        promise
    };
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=cache.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    pingPrefetchTask: null,
    schedulePrefetchTask: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    pingPrefetchTask: function() {
        return pingPrefetchTask;
    },
    schedulePrefetchTask: function() {
        return schedulePrefetchTask;
    }
});
const _matchsegments = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/match-segments.js [app-client] (ecmascript)");
const _cache = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const scheduleMicrotask = typeof queueMicrotask === 'function' ? queueMicrotask : (fn)=>Promise.resolve().then(fn).catch((error)=>setTimeout(()=>{
            throw error;
        }));
const taskHeap = [];
// This is intentionally low so that when a navigation happens, the browser's
// internal network queue is not already saturated with prefetch requests.
const MAX_CONCURRENT_PREFETCH_REQUESTS = 3;
let inProgressRequests = 0;
let sortIdCounter = 0;
let didScheduleMicrotask = false;
function schedulePrefetchTask(key, treeAtTimeOfPrefetch) {
    // Spawn a new prefetch task
    const task = {
        key,
        treeAtTimeOfPrefetch,
        sortId: sortIdCounter++,
        isBlocked: false,
        _heapIndex: -1
    };
    heapPush(taskHeap, task);
    // Schedule an async task to process the queue.
    //
    // The main reason we process the queue in an async task is for batching.
    // It's common for a single JS task/event to trigger multiple prefetches.
    // By deferring to a microtask, we only process the queue once per JS task.
    // If they have different priorities, it also ensures they are processed in
    // the optimal order.
    ensureWorkIsScheduled();
}
function ensureWorkIsScheduled() {
    if (didScheduleMicrotask || !hasNetworkBandwidth()) {
        // Either we already scheduled a task to process the queue, or there are
        // too many concurrent requests in progress. In the latter case, the
        // queue will resume processing once more bandwidth is available.
        return;
    }
    didScheduleMicrotask = true;
    scheduleMicrotask(processQueueInMicrotask);
}
/**
 * Checks if we've exceeded the maximum number of concurrent prefetch requests,
 * to avoid saturating the browser's internal network queue. This is a
 * cooperative limit — prefetch tasks should check this before issuing
 * new requests.
 */ function hasNetworkBandwidth() {
    // TODO: Also check if there's an in-progress navigation. We should never
    // add prefetch requests to the network queue if an actual navigation is
    // taking place, to ensure there's sufficient bandwidth for render-blocking
    // data and resources.
    return inProgressRequests < MAX_CONCURRENT_PREFETCH_REQUESTS;
}
function spawnPrefetchSubtask(prefetchSubtask) {
    // When the scheduler spawns an async task, we don't await its result.
    // Instead, the async task writes its result directly into the cache, then
    // pings the scheduler to continue.
    //
    // We process server responses streamingly, so the prefetch subtask will
    // likely resolve before we're finished receiving all the data. The subtask
    // result includes a promise that resolves once the network connection is
    // closed. The scheduler uses this to control network bandwidth by tracking
    // and limiting the number of concurrent requests.
    inProgressRequests++;
    prefetchSubtask.then((result)=>{
        if (result === null) {
            // The prefetch task errored before it could start processing the
            // network stream. Assume the connection is closed.
            return;
        }
        // Wait for the connection to close before freeing up more bandwidth.
        return result.closed;
    }).then(onPrefetchConnectionClosed, onPrefetchConnectionClosed);
}
function onPrefetchConnectionClosed() {
    inProgressRequests--;
    // Notify the scheduler that we have more bandwidth, and can continue
    // processing tasks.
    ensureWorkIsScheduled();
}
function pingPrefetchTask(task) {
    // "Ping" a prefetch that's already in progress to notify it of new data.
    if (!task.isBlocked) {
        // Prefetch is already queued.
        return;
    }
    // Unblock the task and requeue it.
    task.isBlocked = false;
    heapPush(taskHeap, task);
    ensureWorkIsScheduled();
}
function processQueueInMicrotask() {
    didScheduleMicrotask = false;
    // We aim to minimize how often we read the current time. Since nearly all
    // functions in the prefetch scheduler are synchronous, we can read the time
    // once and pass it as an argument wherever it's needed.
    const now = Date.now();
    // Process the task queue until we run out of network bandwidth.
    let task = heapPeek(taskHeap);
    while(task !== null && hasNetworkBandwidth()){
        const route = (0, _cache.readOrCreateRouteCacheEntry)(now, task);
        const exitStatus = pingRootRouteTree(now, task, route);
        switch(exitStatus){
            case 0:
                // The task yielded because there are too many requests in progress.
                // Stop processing tasks until we have more bandwidth.
                return;
            case 1:
                // The task is blocked. It needs more data before it can proceed.
                // Keep the task out of the queue until the server responds.
                task.isBlocked = true;
                // Continue to the next task
                heapPop(taskHeap);
                task = heapPeek(taskHeap);
                continue;
            case 2:
                // The prefetch is complete. Continue to the next task.
                heapPop(taskHeap);
                task = heapPeek(taskHeap);
                continue;
            default:
                {
                    const _exhaustiveCheck = exitStatus;
                    return;
                }
        }
    }
}
function pingRootRouteTree(now, task, route) {
    switch(route.status){
        case _cache.EntryStatus.Empty:
            {
                // Route is not yet cached, and there's no request already in progress.
                // Spawn a task to request the route, load it into the cache, and ping
                // the task to continue.
                // TODO: There are multiple strategies in the <Link> API for prefetching
                // a route. Currently we've only implemented the main one: per-segment,
                // static-data only.
                //
                // There's also <Link prefetch={true}> which prefetches both static *and*
                // dynamic data. Similarly, we need to fallback to the old, per-page
                // behavior if PPR is disabled for a route (via the incremental opt-in).
                //
                // Those cases will be handled here.
                spawnPrefetchSubtask((0, _cache.fetchRouteOnCacheMiss)(route, task));
                // If the request takes longer than a minute, a subsequent request should
                // retry instead of waiting for this one. When the response is received,
                // this value will be replaced by a new value based on the stale time sent
                // from the server.
                // TODO: We should probably also manually abort the fetch task, to reclaim
                // server bandwidth.
                route.staleAt = now + 60 * 1000;
                // Upgrade to Pending so we know there's already a request in progress
                route.status = _cache.EntryStatus.Pending;
            // Intentional fallthrough to the Pending branch
            }
        case _cache.EntryStatus.Pending:
            {
                // Still pending. We can't start prefetching the segments until the route
                // tree has loaded. Add the task to the set of blocked tasks so that it
                // is notified when the route tree is ready.
                const blockedTasks = route.blockedTasks;
                if (blockedTasks === null) {
                    route.blockedTasks = new Set([
                        task
                    ]);
                } else {
                    blockedTasks.add(task);
                }
                return 1;
            }
        case _cache.EntryStatus.Rejected:
            {
                // Route tree failed to load. Treat as a 404.
                return 2;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // Recursively fill in the segment tree.
                if (!hasNetworkBandwidth()) {
                    // Stop prefetching segments until there's more bandwidth.
                    return 0;
                }
                const tree = route.tree;
                if (route.isPPREnabled) {
                    return pingRouteTree(now, task, route, tree);
                } else {
                    // When PPR is disabled, we can't prefetch per segment. We must fallback
                    // to the old prefetch behavior and send a dynamic request.
                    //
                    // Construct a tree (currently a FlightRouterState) that represents
                    // which segments need to be prefetched and which ones are already
                    // cached. If the tree is empty, then we can exit. Otherwise, we'll send
                    // the request tree to the server and use the response to populate the
                    // segment cache.
                    //
                    // Only routes that include a loading boundary can be prefetched in this
                    // way. The server will only render up to the first loading boundary
                    // inside new part of the tree. If there's no loading boundary, the
                    // server will never return any data.
                    // TODO: When we prefetch the route tree, the server should
                    // indicate whether there's a loading boundary so the client doesn't
                    // send a second request for no reason.
                    const spawnedEntries = new Map();
                    const dynamicRequestTree = pingRouteTreeForPPRDisabledRoute(now, route, task.treeAtTimeOfPrefetch, tree, spawnedEntries);
                    const needsDynamicRequest = spawnedEntries.size > 0;
                    if (needsDynamicRequest) {
                        // Perform a dynamic prefetch request and populate the cache with
                        // the result
                        spawnPrefetchSubtask((0, _cache.fetchSegmentPrefetchesForPPRDisabledRoute)(task, route, dynamicRequestTree, spawnedEntries));
                    }
                    return 2;
                }
            }
        default:
            {
                const _exhaustiveCheck = route;
                return 2;
            }
    }
}
function pingRouteTree(now, task, route, tree) {
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, route, tree.key);
    pingSegment(route, segment, task.key, tree.key, tree.token);
    if (tree.slots !== null) {
        if (!hasNetworkBandwidth()) {
            // Stop prefetching segments until there's more bandwidth.
            return 0;
        }
        // Recursively ping the children.
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            const childExitStatus = pingRouteTree(now, task, route, childTree);
            if (childExitStatus === 0) {
                // Child yielded without finishing.
                return 0;
            }
        }
    }
    // This segment and all its children have finished prefetching.
    return 2;
}
function pingRouteTreeForPPRDisabledRoute(now, route, oldTree, newTree, spawnedEntries) {
    // This is a single recursive traversal that does multiple things:
    // - Finds the parts of the target route (newTree) that are not part of
    //   of the current page (oldTree) by diffing them, using the same algorithm
    //   as a real navigation.
    // - Constructs a request tree (FlightRouterState) that describes which
    //   segments need to be prefetched and which ones are already cached.
    // - Creates a set of pending cache entries for the segments that need to
    //   be prefetched, so that a subsequent prefetch task does not request the
    //   same segments again.
    const oldTreeChildren = oldTree[1];
    const newTreeChildren = newTree.slots;
    let requestTreeChildren = {};
    if (newTreeChildren !== null) {
        for(const parallelRouteKey in newTreeChildren){
            const newTreeChild = newTreeChildren[parallelRouteKey];
            const newTreeChildSegment = newTreeChild.segment;
            const oldTreeChild = oldTreeChildren[parallelRouteKey];
            const oldTreeChildSegment = oldTreeChild == null ? void 0 : oldTreeChild[0];
            let requestTreeChild;
            if (oldTreeChildSegment !== undefined && (0, _matchsegments.matchSegment)(newTreeChildSegment, oldTreeChildSegment)) {
                // This segment is already part of the current route. Keep traversing.
                requestTreeChild = pingRouteTreeForPPRDisabledRoute(now, route, oldTreeChild, newTreeChild, spawnedEntries);
            } else {
                // This segment is not part of the current route. We're entering a
                // part of the tree that we need to prefetch (unless everything is
                // already cached).
                requestTreeChild = createDynamicRequestTreeForPartiallyCachedSegments(now, route, newTreeChild, null, spawnedEntries);
            }
            requestTreeChildren[parallelRouteKey] = requestTreeChild;
        }
    }
    const requestTree = [
        newTree.segment,
        requestTreeChildren,
        null,
        null,
        newTree.isRootLayout
    ];
    return requestTree;
}
function createDynamicRequestTreeForPartiallyCachedSegments(now, route, tree, refetchMarkerContext, spawnedEntries) {
    // The tree we're constructing is the same shape as the tree we're navigating
    // to — specifically, it's the subtree that isn't present in the previous
    // route. But even though this is a "new" tree, some of the individual
    // segments may be cached as a result of other route prefetches.
    //
    // So we need to find the first uncached segment along each path
    // add an explicit "refetch" marker so the server knows where to start
    // rendering. Once the server starts rendering along a path, it keeps
    // rendering until it hits a loading boundary. We use `refetchMarkerContext`
    // to represent the nearest parent marker.
    let refetchMarker = refetchMarkerContext === null ? 'inside-shared-layout' : null;
    const segment = (0, _cache.readOrCreateSegmentCacheEntry)(now, route, tree.key);
    switch(segment.status){
        case _cache.EntryStatus.Empty:
            {
                // This segment is not cached. Add a refetch marker so the server knows
                // to start rendering here.
                // TODO: Instead of a "refetch" marker, we could just omit this subtree's
                // FlightRouterState from the request tree. I think this would probably
                // already work even without any updates to the server. For consistency,
                // though, I'll send the full tree and we'll look into this later as part
                // of a larger redesign of the request protocol.
                // Add the pending cache entry to the result map.
                segment.status = _cache.EntryStatus.Pending;
                spawnedEntries.set(tree.key, segment);
                if (refetchMarkerContext !== 'refetch') {
                    refetchMarker = refetchMarkerContext = 'refetch';
                } else {
                // There's already a parent with a refetch marker, so we don't need
                // to add another one.
                }
                break;
            }
        case _cache.EntryStatus.Fulfilled:
            {
                // The segment is already cached.
                // TODO: The server should include a `hasLoading` field as part of the
                // route tree prefetch.
                if (segment.loading !== null) {
                    // This segment has a loading boundary, which means the server won't
                    // render its children. So there's nothing left to prefetch along this
                    // path. We can bail out.
                    return (0, _cache.convertRouteTreeToFlightRouterState)(tree);
                }
                break;
            }
        case _cache.EntryStatus.Pending:
            {
                break;
            }
        case _cache.EntryStatus.Rejected:
            {
                break;
            }
        default:
            segment;
    }
    const requestTreeChildren = {};
    if (tree.slots !== null) {
        for(const parallelRouteKey in tree.slots){
            const childTree = tree.slots[parallelRouteKey];
            requestTreeChildren[parallelRouteKey] = createDynamicRequestTreeForPartiallyCachedSegments(now, route, childTree, refetchMarkerContext, spawnedEntries);
        }
    }
    const requestTree = [
        tree.segment,
        requestTreeChildren,
        null,
        refetchMarker,
        tree.isRootLayout
    ];
    return requestTree;
}
function pingSegment(route, segment, routeKey, segmentKey, accessToken) {
    if (segment.status === _cache.EntryStatus.Empty) {
        if (accessToken === null) {
        // We don't have an access token for this segment, which means we can't
        // do a per-segment prefetch. This happens when the route tree was
        // returned by a dynamic server response. Or if the server has decided
        // not to grant access to this segment.
        } else {
            // Segment is not yet cached, and there's no request already in progress.
            // Spawn a task to request the segment and load it into the cache.
            // Upgrade to Pending so we know there's already a request in progress
            segment.status = _cache.EntryStatus.Pending;
            spawnPrefetchSubtask((0, _cache.fetchSegmentOnCacheMiss)(route, segment, routeKey, segmentKey, accessToken));
        }
    }
// Segments do not have dependent tasks, so once the prefetch is initiated,
// there's nothing else for us to do (except write the server data into the
// entry, which is handled by `fetchSegmentOnCacheMiss`).
}
// -----------------------------------------------------------------------------
// The remainider of the module is a MinHeap implementation. Try not to put any
// logic below here unless it's related to the heap algorithm. We can extract
// this to a separate module if/when we need multiple kinds of heaps.
// -----------------------------------------------------------------------------
function compareQueuePriority(a, b) {
    // Since the queue is a MinHeap, this should return a positive number if b is
    // higher priority than a, and a negative number if a is higher priority
    // than b.
    //
    // sortId is an incrementing counter assigned to prefetches. We want to
    // process the newest prefetches first.
    return b.sortId - a.sortId;
}
function heapPush(heap, node) {
    const index = heap.length;
    heap.push(node);
    node._heapIndex = index;
    heapSiftUp(heap, node, index);
}
function heapPeek(heap) {
    return heap.length === 0 ? null : heap[0];
}
function heapPop(heap) {
    if (heap.length === 0) {
        return null;
    }
    const first = heap[0];
    first._heapIndex = -1;
    const last = heap.pop();
    if (last !== first) {
        heap[0] = last;
        last._heapIndex = 0;
        heapSiftDown(heap, last, 0);
    }
    return first;
}
// Not currently used, but will be once we add the ability to update a
// task's priority.
// function heapSift(heap: Array<PrefetchTask>, node: PrefetchTask) {
//   const index = node._heapIndex
//   if (index !== -1) {
//     const parentIndex = (index - 1) >>> 1
//     const parent = heap[parentIndex]
//     if (compareQueuePriority(parent, node) > 0) {
//       // The parent is larger. Sift up.
//       heapSiftUp(heap, node, index)
//     } else {
//       // The parent is smaller (or equal). Sift down.
//       heapSiftDown(heap, node, index)
//     }
//   }
// }
function heapSiftUp(heap, node, i) {
    let index = i;
    while(index > 0){
        const parentIndex = index - 1 >>> 1;
        const parent = heap[parentIndex];
        if (compareQueuePriority(parent, node) > 0) {
            // The parent is larger. Swap positions.
            heap[parentIndex] = node;
            node._heapIndex = parentIndex;
            heap[index] = parent;
            parent._heapIndex = index;
            index = parentIndex;
        } else {
            // The parent is smaller. Exit.
            return;
        }
    }
}
function heapSiftDown(heap, node, i) {
    let index = i;
    const length = heap.length;
    const halfLength = length >>> 1;
    while(index < halfLength){
        const leftIndex = (index + 1) * 2 - 1;
        const left = heap[leftIndex];
        const rightIndex = leftIndex + 1;
        const right = heap[rightIndex];
        // If the left or right node is smaller, swap with the smaller of those.
        if (compareQueuePriority(left, node) < 0) {
            if (rightIndex < length && compareQueuePriority(right, left) < 0) {
                heap[index] = right;
                right._heapIndex = index;
                heap[rightIndex] = node;
                node._heapIndex = rightIndex;
                index = rightIndex;
            } else {
                heap[index] = left;
                left._heapIndex = index;
                heap[leftIndex] = node;
                node._heapIndex = leftIndex;
                index = leftIndex;
            }
        } else if (rightIndex < length && compareQueuePriority(right, node) < 0) {
            heap[index] = right;
            right._heapIndex = index;
            heap[rightIndex] = node;
            node._heapIndex = rightIndex;
            index = rightIndex;
        } else {
            // Neither child is smaller. Exit.
            return;
        }
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=scheduler.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/prefetch.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "prefetch", {
    enumerable: true,
    get: function() {
        return prefetch;
    }
});
const _approuter = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)");
const _cachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
const _scheduler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/scheduler.js [app-client] (ecmascript)");
function prefetch(href, nextUrl, treeAtTimeOfPrefetch) {
    const url = (0, _approuter.createPrefetchURL)(href);
    if (url === null) {
        // This href should not be prefetched.
        return;
    }
    const cacheKey = (0, _cachekey.createCacheKey)(url.href, nextUrl);
    (0, _scheduler.schedulePrefetchTask)(cacheKey, treeAtTimeOfPrefetch);
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=prefetch.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/navigation.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    NavigationResultTag: null,
    navigate: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    NavigationResultTag: function() {
        return NavigationResultTag;
    },
    navigate: function() {
        return navigate;
    }
});
const _fetchserverresponse = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/fetch-server-response.js [app-client] (ecmascript)");
const _pprnavigations = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/ppr-navigations.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _cache = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/cache.js [app-client] (ecmascript)");
const _cachekey = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/cache-key.js [app-client] (ecmascript)");
var NavigationResultTag = /*#__PURE__*/ function(NavigationResultTag) {
    NavigationResultTag[NavigationResultTag["MPA"] = 0] = "MPA";
    NavigationResultTag[NavigationResultTag["Success"] = 1] = "Success";
    NavigationResultTag[NavigationResultTag["NoOp"] = 2] = "NoOp";
    NavigationResultTag[NavigationResultTag["Async"] = 3] = "Async";
    return NavigationResultTag;
}({});
const noOpNavigationResult = {
    tag: 2,
    data: null
};
function navigate(url, currentCacheNode, currentFlightRouterState, nextUrl) {
    const now = Date.now();
    const cacheKey = (0, _cachekey.createCacheKey)(url.href, nextUrl);
    const route = (0, _cache.readRouteCacheEntry)(now, cacheKey);
    if (route !== null && route.status === _cache.EntryStatus.Fulfilled) {
        // We have a matching prefetch.
        const snapshot = readRenderSnapshotFromCache(now, route.tree);
        const prefetchFlightRouterState = snapshot.flightRouterState;
        const prefetchSeedData = snapshot.seedData;
        const prefetchHead = route.head;
        const isPrefetchHeadPartial = route.isHeadPartial;
        const canonicalUrl = route.canonicalUrl;
        return navigateUsingPrefetchedRouteTree(url, nextUrl, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, canonicalUrl);
    }
    // There's no matching prefetch for this route in the cache.
    return {
        tag: 3,
        data: navigateDynamicallyWithNoPrefetch(url, nextUrl, currentCacheNode, currentFlightRouterState)
    };
}
function navigateUsingPrefetchedRouteTree(url, nextUrl, currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial, canonicalUrl) {
    // Recursively construct a prefetch tree by reading from the Segment Cache. To
    // maintain compatibility, we output the same data structures as the old
    // prefetching implementation: FlightRouterState and CacheNodeSeedData.
    // TODO: Eventually updateCacheNodeOnNavigation (or the equivalent) should
    // read from the Segment Cache directly. It's only structured this way for now
    // so we can share code with the old prefetching implementation.
    // TODO: Need to detect whether we're navigating to a new root layout, i.e.
    // reimplement the isNavigatingToNewRootLayout logic
    // inside updateCacheNodeOnNavigation.
    const task = (0, _pprnavigations.updateCacheNodeOnNavigation)(currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial);
    if (task !== null) {
        const dynamicRequestTree = task.dynamicRequestTree;
        if (dynamicRequestTree !== null) {
            const promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(url, {
                flightRouterState: dynamicRequestTree,
                nextUrl
            });
            (0, _pprnavigations.listenForDynamicRequest)(task, promiseForDynamicServerResponse);
        } else {
        // The prefetched tree does not contain dynamic holes — it's
        // fully static. We can skip the dynamic request.
        }
        return navigationTaskToResult(task, currentCacheNode, canonicalUrl);
    }
    // The server sent back an empty tree patch. There's nothing to update.
    return noOpNavigationResult;
}
function navigationTaskToResult(task, currentCacheNode, canonicalUrl) {
    const newCacheNode = task.node;
    return {
        tag: 1,
        data: {
            flightRouterState: task.route,
            cacheNode: newCacheNode !== null ? newCacheNode : currentCacheNode,
            canonicalUrl
        }
    };
}
function readRenderSnapshotFromCache(now, tree) {
    let childRouterStates = {};
    let childSeedDatas = {};
    const slots = tree.slots;
    if (slots !== null) {
        for(const parallelRouteKey in slots){
            const childTree = slots[parallelRouteKey];
            const childResult = readRenderSnapshotFromCache(now, childTree);
            childRouterStates[parallelRouteKey] = childResult.flightRouterState;
            childSeedDatas[parallelRouteKey] = childResult.seedData;
        }
    }
    let rsc = null;
    let loading = null;
    let isPartial = true;
    const segmentEntry = (0, _cache.readSegmentCacheEntry)(now, tree.key);
    if (segmentEntry !== null) {
        switch(segmentEntry.status){
            case _cache.EntryStatus.Fulfilled:
                {
                    // Happy path: a cache hit
                    rsc = segmentEntry.rsc;
                    loading = segmentEntry.loading;
                    isPartial = segmentEntry.isPartial;
                    break;
                }
            case _cache.EntryStatus.Empty:
            case _cache.EntryStatus.Pending:
                {
                    // We haven't received data for this segment yet, but there's already
                    // an in-progress request. Since it's extremely likely to arrive
                    // before the dynamic data response, we might as well use it.
                    const promiseForFulfilledEntry = (0, _cache.waitForSegmentCacheEntry)(segmentEntry);
                    rsc = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.rsc : null);
                    loading = promiseForFulfilledEntry.then((entry)=>entry !== null ? entry.loading : null);
                    // Since we don't know yet whether the segment is partial or fully
                    // static, we must assume it's partial; we can't skip the
                    // dynamic request.
                    isPartial = true;
                    break;
                }
            case _cache.EntryStatus.Rejected:
                break;
            default:
                {
                    const _exhaustiveCheck = segmentEntry;
                    break;
                }
        }
    }
    return {
        flightRouterState: [
            tree.segment,
            childRouterStates,
            null,
            null,
            tree.isRootLayout
        ],
        seedData: [
            tree.segment,
            rsc,
            childSeedDatas,
            loading,
            isPartial
        ]
    };
}
async function navigateDynamicallyWithNoPrefetch(url, nextUrl, currentCacheNode, currentFlightRouterState) {
    // Runs when a navigation happens but there's no cached prefetch we can use.
    // Don't bother to wait for a prefetch response; go straight to a full
    // navigation that contains both static and dynamic data in a single stream.
    // (This is unlike the old navigation implementation, which instead blocks
    // the dynamic request until a prefetch request is received.)
    //
    // To avoid duplication of logic, we're going to pretend that the tree
    // returned by the dynamic request is, in fact, a prefetch tree. Then we can
    // use the same server response to write the actual data into the CacheNode
    // tree. So it's the same flow as the "happy path" (prefetch, then
    // navigation), except we use a single server response for both stages.
    const promiseForDynamicServerResponse = (0, _fetchserverresponse.fetchServerResponse)(url, {
        flightRouterState: currentFlightRouterState,
        nextUrl
    });
    const { flightData, canonicalUrl: canonicalUrlOverride } = await promiseForDynamicServerResponse;
    // TODO: Detect if the only thing that changed was the hash, like we do in
    // in navigateReducer
    if (typeof flightData === 'string') {
        // This is an MPA navigation.
        const newUrl = flightData;
        return {
            tag: 0,
            data: newUrl
        };
    }
    // Since the response format of dynamic requests and prefetches is slightly
    // different, we'll need to massage the data a bit. Create FlightRouterState
    // tree that simulates what we'd receive as the result of a prefetch.
    const prefetchFlightRouterState = simulatePrefetchTreeUsingDynamicTreePatch(currentFlightRouterState, flightData);
    // In our simulated prefetch payload, we pretend that there's no seed data
    // nor a prefetch head.
    const prefetchSeedData = null;
    const prefetchHead = [
        null,
        null
    ];
    const isPrefetchHeadPartial = true;
    const canonicalUrl = (0, _createhreffromurl.createHrefFromUrl)(canonicalUrlOverride ? canonicalUrlOverride : url);
    // Now we proceed exactly as we would for normal navigation.
    const task = (0, _pprnavigations.updateCacheNodeOnNavigation)(currentCacheNode, currentFlightRouterState, prefetchFlightRouterState, prefetchSeedData, prefetchHead, isPrefetchHeadPartial);
    if (task !== null) {
        // In this case, we've already sent the dynamic request, so we don't
        // actually use the request tree created by `updateCacheNodeOnNavigation`,
        // except to check if it contains dynamic holes.
        //
        // This is almost always true, but it could be false if all the segment data
        // was present in the cache, but the route tree was not. E.g. navigating
        // to a URL that was not prefetched but rewrites to a different URL
        // that was.
        const hasDynamicHoles = task.dynamicRequestTree !== null;
        if (hasDynamicHoles) {
            (0, _pprnavigations.listenForDynamicRequest)(task, promiseForDynamicServerResponse);
        } else {
        // The prefetched tree does not contain dynamic holes — it's
        // fully static. We don't need to process the server response further.
        }
        return navigationTaskToResult(task, currentCacheNode, canonicalUrl);
    }
    // The server sent back an empty tree patch. There's nothing to update.
    return noOpNavigationResult;
}
function simulatePrefetchTreeUsingDynamicTreePatch(currentTree, flightData) {
    // Takes the current FlightRouterState and applies the router state patch
    // received from the server, to create a full FlightRouterState tree that we
    // can pretend was returned by a prefetch.
    //
    // (It sounds similar to what applyRouterStatePatch does, but it doesn't need
    // to handle stuff like interception routes or diffing since that will be
    // handled later.)
    let baseTree = currentTree;
    for (const { segmentPath, tree: treePatch } of flightData){
        // If the server sends us multiple tree patches, we only need to clone the
        // base tree when applying the first patch. After the first patch, we can
        // apply the remaining patches in place without copying.
        const canMutateInPlace = baseTree !== currentTree;
        baseTree = simulatePrefetchTreeUsingDynamicTreePatchImpl(baseTree, treePatch, segmentPath, canMutateInPlace, 0);
    }
    return baseTree;
}
function simulatePrefetchTreeUsingDynamicTreePatchImpl(baseRouterState, patch, segmentPath, canMutateInPlace, index) {
    if (index === segmentPath.length) {
        // We reached the part of the tree that we need to patch.
        return patch;
    }
    // segmentPath represents the parent path of subtree. It's a repeating
    // pattern of parallel route key and segment:
    //
    //   [string, Segment, string, Segment, string, Segment, ...]
    //
    // This path tells us which part of the base tree to apply the tree patch.
    //
    // NOTE: In the case of a fully dynamic request with no prefetch, we receive
    // the FlightRouterState patch in the same request as the dynamic data.
    // Therefore we don't need to worry about diffing the segment values; we can
    // assume the server sent us a correct result.
    const updatedParallelRouteKey = segmentPath[index];
    // const segment: Segment = segmentPath[index + 1] <-- Not used, see note above
    const baseChildren = baseRouterState[1];
    const newChildren = {};
    for(const parallelRouteKey in baseChildren){
        if (parallelRouteKey === updatedParallelRouteKey) {
            const childBaseRouterState = baseChildren[parallelRouteKey];
            newChildren[parallelRouteKey] = simulatePrefetchTreeUsingDynamicTreePatchImpl(childBaseRouterState, patch, segmentPath, canMutateInPlace, // the end of the segment path.
            index + 2);
        } else {
            // This child is not being patched. Copy it over as-is.
            newChildren[parallelRouteKey] = baseChildren[parallelRouteKey];
        }
    }
    if (canMutateInPlace) {
        // We can mutate the base tree in place, because the base tree is already
        // a clone.
        baseRouterState[1] = newChildren;
        return baseRouterState;
    }
    // Clone all the fields except the children.
    //
    // Based on equivalent logic in apply-router-state-patch-to-tree, but should
    // confirm whether we need to copy all of these fields. Not sure the server
    // ever sends, e.g. the refetch marker.
    const clone = [
        baseRouterState[0],
        newChildren
    ];
    if (2 in baseRouterState) {
        clone[2] = baseRouterState[2];
    }
    if (3 in baseRouterState) {
        clone[3] = baseRouterState[3];
    }
    if (4 in baseRouterState) {
        clone[4] = baseRouterState[4];
    }
    return clone;
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=navigation.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DevRootHTTPAccessFallbackBoundary: null,
    bailOnRootNotFound: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DevRootHTTPAccessFallbackBoundary: function() {
        return DevRootHTTPAccessFallbackBoundary;
    },
    bailOnRootNotFound: function() {
        return bailOnRootNotFound;
    }
});
const _interop_require_default = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_default._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)"));
const _errorboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/http-access-fallback/error-boundary.js [app-client] (ecmascript)");
function bailOnRootNotFound() {
    throw Object.defineProperty(new Error('notFound() is not allowed to use in root layout'), "__NEXT_ERROR_CODE", {
        value: "E192",
        enumerable: false
    });
}
function NotAllowedRootHTTPFallbackError() {
    bailOnRootNotFound();
    return null;
}
function DevRootHTTPAccessFallbackBoundary(param) {
    let { children } = param;
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.HTTPAccessFallbackBoundary, {
        notFound: /*#__PURE__*/ (0, _jsxruntime.jsx)(NotAllowedRootHTTPFallbackError, {}),
        children: children
    });
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=dev-root-http-access-fallback-boundary.js.map
}}),
"[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/app-router.js [app-client] (ecmascript)": (function(__turbopack_context__) {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, m: module, e: exports, t: __turbopack_require_real__ } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$15$2e$1$2e$1$2d$canary$2e$14_$40$babel$2b$core$40$7$2e$26$2e$7_react$2d$dom$40$19$2e$0$2e$0_react$40$19$2e$0$2e$0_$5f$react$40$19$2e$0$2e$0_sass$40$1$2e$83$2e$0$2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    createEmptyCacheNode: null,
    createPrefetchURL: null,
    default: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    createEmptyCacheNode: function() {
        return createEmptyCacheNode;
    },
    createPrefetchURL: function() {
        return createPrefetchURL;
    },
    default: function() {
        return AppRouter;
    }
});
const _interop_require_wildcard = __turbopack_require__("[project]/node_modules/.pnpm/@swc+helpers@0.5.15/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-client] (ecmascript)");
const _jsxruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/jsx-runtime.js [app-client] (ecmascript)");
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/compiled/react-experimental/index.js [app-client] (ecmascript)"));
const _approutercontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/app-router-context.shared-runtime.js [app-client] (ecmascript)");
const _routerreducertypes = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/router-reducer-types.js [app-client] (ecmascript)");
const _createhreffromurl = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/create-href-from-url.js [app-client] (ecmascript)");
const _hooksclientcontextsharedruntime = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/hooks-client-context.shared-runtime.js [app-client] (ecmascript)");
const _usereducer = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/use-reducer.js [app-client] (ecmascript)");
const _errorboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/error-boundary.js [app-client] (ecmascript)");
const _isbot = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/shared/lib/router/utils/is-bot.js [app-client] (ecmascript)");
const _addbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/add-base-path.js [app-client] (ecmascript)");
const _approuterannouncer = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/app-router-announcer.js [app-client] (ecmascript)");
const _redirectboundary = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-boundary.js [app-client] (ecmascript)");
const _findheadincache = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/reducers/find-head-in-cache.js [app-client] (ecmascript)");
const _unresolvedthenable = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/unresolved-thenable.js [app-client] (ecmascript)");
const _removebasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/remove-base-path.js [app-client] (ecmascript)");
const _hasbasepath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/has-base-path.js [app-client] (ecmascript)");
const _computechangedpath = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/router-reducer/compute-changed-path.js [app-client] (ecmascript)");
const _navfailurehandler = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/nav-failure-handler.js [app-client] (ecmascript)");
const _appcallserver = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/app-call-server.js [app-client] (ecmascript)");
const _prefetch = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/segment-cache/prefetch.js [app-client] (ecmascript)");
const _redirect = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect.js [app-client] (ecmascript)");
const _redirecterror = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/redirect-error.js [app-client] (ecmascript)");
const globalMutable = {};
function isExternalURL(url) {
    return url.origin !== window.location.origin;
}
function createPrefetchURL(href) {
    // Don't prefetch for bots as they don't navigate.
    if ((0, _isbot.isBot)(window.navigator.userAgent)) {
        return null;
    }
    let url;
    try {
        url = new URL((0, _addbasepath.addBasePath)(href), window.location.href);
    } catch (_) {
        // TODO: Does this need to throw or can we just console.error instead? Does
        // anyone rely on this throwing? (Seems unlikely.)
        throw Object.defineProperty(new Error("Cannot prefetch '" + href + "' because it cannot be converted to a URL."), "__NEXT_ERROR_CODE", {
            value: "E234",
            enumerable: false
        });
    }
    // Don't prefetch during development (improves compilation performance)
    if ("TURBOPACK compile-time truthy", 1) {
        return null;
    }
    "TURBOPACK unreachable";
}
function HistoryUpdater(param) {
    let { appRouterState } = param;
    (0, _react.useInsertionEffect)(()=>{
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        const { tree, pushRef, canonicalUrl } = appRouterState;
        const historyState = {
            ...pushRef.preserveCustomHistoryState ? window.history.state : {},
            // Identifier is shortened intentionally.
            // __NA is used to identify if the history entry can be handled by the app-router.
            // __N is used to identify if the history entry can be handled by the old router.
            __NA: true,
            __PRIVATE_NEXTJS_INTERNALS_TREE: tree
        };
        if (pushRef.pendingPush && // Skip pushing an additional history entry if the canonicalUrl is the same as the current url.
        // This mirrors the browser behavior for normal navigation.
        (0, _createhreffromurl.createHrefFromUrl)(new URL(window.location.href)) !== canonicalUrl) {
            // This intentionally mutates React state, pushRef is overwritten to ensure additional push/replace calls do not trigger an additional history entry.
            pushRef.pendingPush = false;
            window.history.pushState(historyState, '', canonicalUrl);
        } else {
            window.history.replaceState(historyState, '', canonicalUrl);
        }
    }, [
        appRouterState
    ]);
    return null;
}
function createEmptyCacheNode() {
    return {
        lazyData: null,
        rsc: null,
        prefetchRsc: null,
        head: [
            null,
            null
        ],
        prefetchHead: null,
        parallelRoutes: new Map(),
        loading: null
    };
}
/**
 * Server response that only patches the cache and tree.
 */ function useChangeByServerResponse(dispatch) {
    return (0, _react.useCallback)((param)=>{
        let { previousTree, serverResponse } = param;
        (0, _react.startTransition)(()=>{
            dispatch({
                type: _routerreducertypes.ACTION_SERVER_PATCH,
                previousTree,
                serverResponse
            });
        });
    }, [
        dispatch
    ]);
}
function useNavigate(dispatch) {
    return (0, _react.useCallback)((href, navigateType, shouldScroll)=>{
        const url = new URL((0, _addbasepath.addBasePath)(href), location.href);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        return dispatch({
            type: _routerreducertypes.ACTION_NAVIGATE,
            url,
            isExternalUrl: isExternalURL(url),
            locationSearch: location.search,
            shouldScroll: shouldScroll != null ? shouldScroll : true,
            navigateType,
            allowAliasing: true
        });
    }, [
        dispatch
    ]);
}
function copyNextJsInternalHistoryState(data) {
    if (data == null) data = {};
    const currentState = window.history.state;
    const __NA = currentState == null ? void 0 : currentState.__NA;
    if (__NA) {
        data.__NA = __NA;
    }
    const __PRIVATE_NEXTJS_INTERNALS_TREE = currentState == null ? void 0 : currentState.__PRIVATE_NEXTJS_INTERNALS_TREE;
    if (__PRIVATE_NEXTJS_INTERNALS_TREE) {
        data.__PRIVATE_NEXTJS_INTERNALS_TREE = __PRIVATE_NEXTJS_INTERNALS_TREE;
    }
    return data;
}
function Head(param) {
    let { headCacheNode } = param;
    // If this segment has a `prefetchHead`, it's the statically prefetched data.
    // We should use that on initial render instead of `head`. Then we'll switch
    // to `head` when the dynamic response streams in.
    const head = headCacheNode !== null ? headCacheNode.head : null;
    const prefetchHead = headCacheNode !== null ? headCacheNode.prefetchHead : null;
    // If no prefetch data is available, then we go straight to rendering `head`.
    const resolvedPrefetchRsc = prefetchHead !== null ? prefetchHead : head;
    // We use `useDeferredValue` to handle switching between the prefetched and
    // final values. The second argument is returned on initial render, then it
    // re-renders with the first argument.
    //
    // @ts-expect-error The second argument to `useDeferredValue` is only
    // available in the experimental builds. When its disabled, it will always
    // return `head`.
    return (0, _react.useDeferredValue)(head, resolvedPrefetchRsc);
}
/**
 * The global router that wraps the application components.
 */ function Router(param) {
    let { actionQueue, assetPrefix } = param;
    const [state, dispatch] = (0, _usereducer.useReducer)(actionQueue);
    const { canonicalUrl } = (0, _usereducer.useUnwrapState)(state);
    // Add memoized pathname/query for useSearchParams and usePathname.
    const { searchParams, pathname } = (0, _react.useMemo)(()=>{
        const url = new URL(canonicalUrl, typeof window === 'undefined' ? 'http://n' : window.location.href);
        return {
            // This is turned into a readonly class in `useSearchParams`
            searchParams: url.searchParams,
            pathname: (0, _hasbasepath.hasBasePath)(url.pathname) ? (0, _removebasepath.removeBasePath)(url.pathname) : url.pathname
        };
    }, [
        canonicalUrl
    ]);
    const changeByServerResponse = useChangeByServerResponse(dispatch);
    const navigate = useNavigate(dispatch);
    (0, _appcallserver.useServerActionDispatcher)(dispatch);
    /**
   * The app router that is exposed through `useRouter`. It's only concerned with dispatching actions to the reducer, does not hold state.
   */ const appRouter = (0, _react.useMemo)(()=>{
        const routerInstance = {
            back: ()=>window.history.back(),
            forward: ()=>window.history.forward(),
            prefetch: ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : (href, options)=>{
                // Use the old prefetch implementation.
                const url = createPrefetchURL(href);
                if (url !== null) {
                    (0, _react.startTransition)(()=>{
                        var _options_kind;
                        dispatch({
                            type: _routerreducertypes.ACTION_PREFETCH,
                            url,
                            kind: (_options_kind = options == null ? void 0 : options.kind) != null ? _options_kind : _routerreducertypes.PrefetchKind.FULL
                        });
                    });
                }
            },
            replace: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, 'replace', (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            push: (href, options)=>{
                if (options === void 0) options = {};
                (0, _react.startTransition)(()=>{
                    var _options_scroll;
                    navigate(href, 'push', (_options_scroll = options.scroll) != null ? _options_scroll : true);
                });
            },
            refresh: ()=>{
                (0, _react.startTransition)(()=>{
                    dispatch({
                        type: _routerreducertypes.ACTION_REFRESH,
                        origin: window.location.origin
                    });
                });
            },
            hmrRefresh: ()=>{
                if ("TURBOPACK compile-time falsy", 0) {
                    "TURBOPACK unreachable";
                } else {
                    (0, _react.startTransition)(()=>{
                        dispatch({
                            type: _routerreducertypes.ACTION_HMR_REFRESH,
                            origin: window.location.origin
                        });
                    });
                }
            }
        };
        return routerInstance;
    }, [
        actionQueue,
        dispatch,
        navigate
    ]);
    (0, _react.useEffect)(()=>{
        // Exists for debugging purposes. Don't use in application code.
        if (window.next) {
            window.next.router = appRouter;
        }
    }, [
        appRouter
    ]);
    if ("TURBOPACK compile-time truthy", 1) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const { cache, prefetchCache, tree } = (0, _usereducer.useUnwrapState)(state);
        // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
        // eslint-disable-next-line react-hooks/rules-of-hooks
        (0, _react.useEffect)(()=>{
            // Add `window.nd` for debugging purposes.
            // This is not meant for use in applications as concurrent rendering will affect the cache/tree/router.
            // @ts-ignore this is for debugging
            window.nd = {
                router: appRouter,
                cache,
                prefetchCache,
                tree
            };
        }, [
            appRouter,
            cache,
            prefetchCache,
            tree
        ]);
    }
    (0, _react.useEffect)(()=>{
        // If the app is restored from bfcache, it's possible that
        // pushRef.mpaNavigation is true, which would mean that any re-render of this component
        // would trigger the mpa navigation logic again from the lines below.
        // This will restore the router to the initial state in the event that the app is restored from bfcache.
        function handlePageShow(event) {
            var _window_history_state;
            if (!event.persisted || !((_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE)) {
                return;
            }
            // Clear the pendingMpaPath value so that a subsequent MPA navigation to the same URL can be triggered.
            // This is necessary because if the browser restored from bfcache, the pendingMpaPath would still be set to the value
            // of the last MPA navigation.
            globalMutable.pendingMpaPath = undefined;
            dispatch({
                type: _routerreducertypes.ACTION_RESTORE,
                url: new URL(window.location.href),
                tree: window.history.state.__PRIVATE_NEXTJS_INTERNALS_TREE
            });
        }
        window.addEventListener('pageshow', handlePageShow);
        return ()=>{
            window.removeEventListener('pageshow', handlePageShow);
        };
    }, [
        dispatch
    ]);
    (0, _react.useEffect)(()=>{
        // Ensure that any redirect errors that bubble up outside of the RedirectBoundary
        // are caught and handled by the router.
        function handleUnhandledRedirect(event) {
            const error = 'reason' in event ? event.reason : event.error;
            if ((0, _redirecterror.isRedirectError)(error)) {
                event.preventDefault();
                const url = (0, _redirect.getURLFromRedirectError)(error);
                const redirectType = (0, _redirect.getRedirectTypeFromError)(error);
                if (redirectType === _redirecterror.RedirectType.push) {
                    appRouter.push(url, {});
                } else {
                    appRouter.replace(url, {});
                }
            }
        }
        window.addEventListener('error', handleUnhandledRedirect);
        window.addEventListener('unhandledrejection', handleUnhandledRedirect);
        return ()=>{
            window.removeEventListener('error', handleUnhandledRedirect);
            window.removeEventListener('unhandledrejection', handleUnhandledRedirect);
        };
    }, [
        appRouter
    ]);
    // When mpaNavigation flag is set do a hard navigation to the new url.
    // Infinitely suspend because we don't actually want to rerender any child
    // components with the new URL and any entangled state updates shouldn't
    // commit either (eg: useTransition isPending should stay true until the page
    // unloads).
    //
    // This is a side effect in render. Don't try this at home, kids. It's
    // probably safe because we know this is a singleton component and it's never
    // in <Offscreen>. At least I hope so. (It will run twice in dev strict mode,
    // but that's... fine?)
    const { pushRef } = (0, _usereducer.useUnwrapState)(state);
    if (pushRef.mpaNavigation) {
        // if there's a re-render, we don't want to trigger another redirect if one is already in flight to the same URL
        if (globalMutable.pendingMpaPath !== canonicalUrl) {
            const location1 = window.location;
            if (pushRef.pendingPush) {
                location1.assign(canonicalUrl);
            } else {
                location1.replace(canonicalUrl);
            }
            globalMutable.pendingMpaPath = canonicalUrl;
        }
        // TODO-APP: Should we listen to navigateerror here to catch failed
        // navigations somehow? And should we call window.stop() if a SPA navigation
        // should interrupt an MPA one?
        (0, _react.use)(_unresolvedthenable.unresolvedThenable);
    }
    (0, _react.useEffect)(()=>{
        const originalPushState = window.history.pushState.bind(window.history);
        const originalReplaceState = window.history.replaceState.bind(window.history);
        // Ensure the canonical URL in the Next.js Router is updated when the URL is changed so that `usePathname` and `useSearchParams` hold the pushed values.
        const applyUrlFromHistoryPushReplace = (url)=>{
            var _window_history_state;
            const href = window.location.href;
            const tree = (_window_history_state = window.history.state) == null ? void 0 : _window_history_state.__PRIVATE_NEXTJS_INTERNALS_TREE;
            (0, _react.startTransition)(()=>{
                dispatch({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(url != null ? url : href, href),
                    tree
                });
            });
        };
        /**
     * Patch pushState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.pushState = function pushState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalPushState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalPushState(data, _unused, url);
        };
        /**
     * Patch replaceState to ensure external changes to the history are reflected in the Next.js Router.
     * Ensures Next.js internal history state is copied to the new history entry.
     * Ensures usePathname and useSearchParams hold the newly provided url.
     */ window.history.replaceState = function replaceState(data, _unused, url) {
            // Avoid a loop when Next.js internals trigger pushState/replaceState
            if ((data == null ? void 0 : data.__NA) || (data == null ? void 0 : data._N)) {
                return originalReplaceState(data, _unused, url);
            }
            data = copyNextJsInternalHistoryState(data);
            if (url) {
                applyUrlFromHistoryPushReplace(url);
            }
            return originalReplaceState(data, _unused, url);
        };
        /**
     * Handle popstate event, this is used to handle back/forward in the browser.
     * By default dispatches ACTION_RESTORE, however if the history entry was not pushed/replaced by app-router it will reload the page.
     * That case can happen when the old router injected the history entry.
     */ const onPopState = (event)=>{
            if (!event.state) {
                // TODO-APP: this case only happens when pushState/replaceState was called outside of Next.js. It should probably reload the page in this case.
                return;
            }
            // This case happens when the history entry was pushed by the `pages` router.
            if (!event.state.__NA) {
                window.location.reload();
                return;
            }
            // TODO-APP: Ideally the back button should not use startTransition as it should apply the updates synchronously
            // Without startTransition works if the cache is there for this path
            (0, _react.startTransition)(()=>{
                dispatch({
                    type: _routerreducertypes.ACTION_RESTORE,
                    url: new URL(window.location.href),
                    tree: event.state.__PRIVATE_NEXTJS_INTERNALS_TREE
                });
            });
        };
        // Register popstate event to call onPopstate.
        window.addEventListener('popstate', onPopState);
        return ()=>{
            window.history.pushState = originalPushState;
            window.history.replaceState = originalReplaceState;
            window.removeEventListener('popstate', onPopState);
        };
    }, [
        dispatch
    ]);
    const { cache, tree, nextUrl, focusAndScrollRef } = (0, _usereducer.useUnwrapState)(state);
    const matchingHead = (0, _react.useMemo)(()=>{
        return (0, _findheadincache.findHeadInCache)(cache, tree[1]);
    }, [
        cache,
        tree
    ]);
    // Add memoized pathParams for useParams.
    const pathParams = (0, _react.useMemo)(()=>{
        return (0, _computechangedpath.getSelectedParams)(tree);
    }, [
        tree
    ]);
    const layoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            parentTree: tree,
            parentCacheNode: cache,
            parentSegmentPath: null,
            // Root node always has `url`
            // Provided in AppTreeContext to ensure it can be overwritten in layout-router
            url: canonicalUrl
        };
    }, [
        tree,
        cache,
        canonicalUrl
    ]);
    const globalLayoutRouterContext = (0, _react.useMemo)(()=>{
        return {
            changeByServerResponse,
            tree,
            focusAndScrollRef,
            nextUrl
        };
    }, [
        changeByServerResponse,
        tree,
        focusAndScrollRef,
        nextUrl
    ]);
    let head;
    if (matchingHead !== null) {
        // The head is wrapped in an extra component so we can use
        // `useDeferredValue` to swap between the prefetched and final versions of
        // the head. (This is what LayoutRouter does for segment data, too.)
        //
        // The `key` is used to remount the component whenever the head moves to
        // a different segment.
        const [headCacheNode, headKey] = matchingHead;
        head = /*#__PURE__*/ (0, _jsxruntime.jsx)(Head, {
            headCacheNode: headCacheNode
        }, headKey);
    } else {
        head = null;
    }
    let content = /*#__PURE__*/ (0, _jsxruntime.jsxs)(_redirectboundary.RedirectBoundary, {
        children: [
            head,
            cache.rsc,
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_approuterannouncer.AppRouterAnnouncer, {
                tree: tree
            })
        ]
    });
    if ("TURBOPACK compile-time truthy", 1) {
        if (typeof window !== 'undefined') {
            const { DevRootHTTPAccessFallbackBoundary } = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/dev-root-http-access-fallback-boundary.js [app-client] (ecmascript)");
            content = /*#__PURE__*/ (0, _jsxruntime.jsx)(DevRootHTTPAccessFallbackBoundary, {
                children: content
            });
        }
        const HotReloader = __turbopack_require__("[project]/node_modules/.pnpm/next@15.1.1-canary.14_@babel+core@7.26.7_react-dom@19.0.0_react@19.0.0__react@19.0.0_sass@1.83.0/node_modules/next/dist/client/components/react-dev-overlay/app/hot-reloader-client.js [app-client] (ecmascript)").default;
        content = /*#__PURE__*/ (0, _jsxruntime.jsx)(HotReloader, {
            assetPrefix: assetPrefix,
            children: content
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            /*#__PURE__*/ (0, _jsxruntime.jsx)(HistoryUpdater, {
                appRouterState: (0, _usereducer.useUnwrapState)(state)
            }),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(RuntimeStyles, {}),
            /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathParamsContext.Provider, {
                value: pathParams,
                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.PathnameContext.Provider, {
                    value: pathname,
                    children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_hooksclientcontextsharedruntime.SearchParamsContext.Provider, {
                        value: searchParams,
                        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.GlobalLayoutRouterContext.Provider, {
                            value: globalLayoutRouterContext,
                            children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.AppRouterContext.Provider, {
                                value: appRouter,
                                children: /*#__PURE__*/ (0, _jsxruntime.jsx)(_approutercontextsharedruntime.LayoutRouterContext.Provider, {
                                    value: layoutRouterContext,
                                    children: content
                                })
                            })
                        })
                    })
                })
            })
        ]
    });
}
function AppRouter(param) {
    let { actionQueue, globalErrorComponentAndStyles: [globalErrorComponent, globalErrorStyles], assetPrefix } = param;
    (0, _navfailurehandler.useNavFailureHandler)();
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(_errorboundary.ErrorBoundary, {
        errorComponent: globalErrorComponent,
        errorStyles: globalErrorStyles,
        children: /*#__PURE__*/ (0, _jsxruntime.jsx)(Router, {
            actionQueue: actionQueue,
            assetPrefix: assetPrefix
        })
    });
}
const runtimeStyles = new Set();
let runtimeStyleChanged = new Set();
globalThis._N_E_STYLE_LOAD = function(href) {
    let len = runtimeStyles.size;
    runtimeStyles.add(href);
    if (runtimeStyles.size !== len) {
        runtimeStyleChanged.forEach((cb)=>cb());
    }
    // TODO figure out how to get a promise here
    // But maybe it's not necessary as react would block rendering until it's loaded
    return Promise.resolve();
};
function RuntimeStyles() {
    const [, forceUpdate] = _react.default.useState(0);
    const renderedStylesSize = runtimeStyles.size;
    (0, _react.useEffect)(()=>{
        const changed = ()=>forceUpdate((c)=>c + 1);
        runtimeStyleChanged.add(changed);
        if (renderedStylesSize !== runtimeStyles.size) {
            changed();
        }
        return ()=>{
            runtimeStyleChanged.delete(changed);
        };
    }, [
        renderedStylesSize,
        forceUpdate
    ]);
    const dplId = ("TURBOPACK compile-time falsy", 0) ? ("TURBOPACK unreachable", undefined) : '';
    return [
        ...runtimeStyles
    ].map((href, i)=>/*#__PURE__*/ (0, _jsxruntime.jsx)("link", {
            rel: "stylesheet",
            href: "" + href + dplId,
            // @ts-ignore
            precedence: "next"
        }, i));
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
} //# sourceMappingURL=app-router.js.map
}}),
}]);

//# sourceMappingURL=a2c54_next_dist_client_components_aeed04._.js.map