import _toArray from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toArray";
import _toConsumableArray from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/toConsumableArray";
import _objectWithoutProperties from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties";
import _asyncToGenerator from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/asyncToGenerator";
import _slicedToArray from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/slicedToArray";
import _wrapNativeSuper from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/wrapNativeSuper";
import _regeneratorRuntime from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/regenerator";
import _createForOfIteratorHelper from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createForOfIteratorHelper";
import _defineProperty2 from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/defineProperty";
import _objectSpread from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectSpread2";
import _assertThisInitialized from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/assertThisInitialized";
import _inherits from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits";
import _createSuper from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper";
import _classCallCheck from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck";
import _createClass from "/var/lib/gitlab-runner/builds/mi8yxKzF/0/frontend/hamichat-pepserver/node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass";
var _excluded = ["override"],
    _excluded2 = ["default"],
    _excluded3 = ["cachePolicyForParams_UNSTABLE"];

var _marked = /*#__PURE__*/ _regeneratorRuntime.mark(filterIterable),
    _marked2 = /*#__PURE__*/ _regeneratorRuntime.mark(concatIterables);

import react from 'react';
import reactDom from 'react-dom';
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function err(message) {
    var error = new Error(message); // In V8, Error objects keep the closure scope chain alive until the
    // err.stack property is accessed.

    if (error.stack === undefined) {
        // IE sets the stack only if error is thrown
        try {
            throw error;
        } catch (_) {} // eslint-disable-line fb-www/no-unused-catch-bindings, no-empty

    }

    return error;
}

var err_1 = err; // @oss-only

var Recoil_err = err_1;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// Split declaration and implementation to allow this function to pretend to
// check for actual instance of Promise instead of something with a `then`
// method.
// eslint-disable-next-line no-redeclare

function isPromise(p) {
    return !!p && typeof p.then === 'function';
}

var Recoil_isPromise = isPromise;

function nullthrows(x, message) {
    if (x != null) {
        return x;
    }

    throw Recoil_err(message !== null && message !== void 0 ? message : 'Got unexpected null or undefined');
}

var Recoil_nullthrows = nullthrows;

function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }

    return obj;
}

var BaseLoadable = /*#__PURE__*/ function() {
    function BaseLoadable() {
        _classCallCheck(this, BaseLoadable);
    }

    _createClass(BaseLoadable, [{
        key: "getValue",
        value: function getValue() {
            throw Recoil_err('BaseLoadable');
        }
    }, {
        key: "toPromise",
        value: function toPromise() {
            throw Recoil_err('BaseLoadable');
        }
    }, {
        key: "valueMaybe",
        value: function valueMaybe() {
            throw Recoil_err('BaseLoadable');
        }
    }, {
        key: "valueOrThrow",
        value: function valueOrThrow() {
            // $FlowFixMe[prop-missing]
            throw Recoil_err("Loadable expected value, but in \"".concat(this.state, "\" state"));
        }
    }, {
        key: "promiseMaybe",
        value: function promiseMaybe() {
            throw Recoil_err('BaseLoadable');
        }
    }, {
        key: "promiseOrThrow",
        value: function promiseOrThrow() {
            // $FlowFixMe[prop-missing]
            throw Recoil_err("Loadable expected promise, but in \"".concat(this.state, "\" state"));
        }
    }, {
        key: "errorMaybe",
        value: function errorMaybe() {
            throw Recoil_err('BaseLoadable');
        }
    }, {
        key: "errorOrThrow",
        value: function errorOrThrow() {
            // $FlowFixMe[prop-missing]
            throw Recoil_err("Loadable expected error, but in \"".concat(this.state, "\" state"));
        }
    }, {
        key: "is",
        value: function is(other) {
            // $FlowFixMe[prop-missing]
            return other.state === this.state && other.contents === this.contents;
        }
    }, {
        key: "map",
        value: function map(_map) {
            throw Recoil_err('BaseLoadable');
        }
    }]);

    return BaseLoadable;
}();

var ValueLoadable = /*#__PURE__*/ function(_BaseLoadable) {
    _inherits(ValueLoadable, _BaseLoadable);

    var _super = _createSuper(ValueLoadable);

    function ValueLoadable(value) {
        var _this;

        _classCallCheck(this, ValueLoadable);

        _this = _super.call(this);

        _defineProperty(_assertThisInitialized(_this), "state", 'hasValue');

        _defineProperty(_assertThisInitialized(_this), "contents", void 0);

        _this.contents = value;
        return _this;
    }

    _createClass(ValueLoadable, [{
        key: "getValue",
        value: function getValue() {
            return this.contents;
        }
    }, {
        key: "toPromise",
        value: function toPromise() {
            return Promise.resolve(this.contents);
        }
    }, {
        key: "valueMaybe",
        value: function valueMaybe() {
            return this.contents;
        }
    }, {
        key: "valueOrThrow",
        value: function valueOrThrow() {
            return this.contents;
        }
    }, {
        key: "promiseMaybe",
        value: function promiseMaybe() {
            return undefined;
        }
    }, {
        key: "errorMaybe",
        value: function errorMaybe() {
            return undefined;
        }
    }, {
        key: "map",
        value: function map(_map2) {
            var _this2 = this;

            try {
                var next = _map2(this.contents);

                return Recoil_isPromise(next) ? loadableWithPromise(next) : isLoadable(next) ? next : loadableWithValue(next);
            } catch (e) {
                return Recoil_isPromise(e) ? // If we "suspended", then try again.
                    // errors and subsequent retries will be handled in 'loading' case
                    loadableWithPromise(e.next(function() {
                        return _this2.map(_map2);
                    })) : loadableWithError(e);
            }
        }
    }]);

    return ValueLoadable;
}(BaseLoadable);

var ErrorLoadable = /*#__PURE__*/ function(_BaseLoadable2) {
    _inherits(ErrorLoadable, _BaseLoadable2);

    var _super2 = _createSuper(ErrorLoadable);

    function ErrorLoadable(error) {
        var _this3;

        _classCallCheck(this, ErrorLoadable);

        _this3 = _super2.call(this);

        _defineProperty(_assertThisInitialized(_this3), "state", 'hasError');

        _defineProperty(_assertThisInitialized(_this3), "contents", void 0);

        _this3.contents = error;
        return _this3;
    }

    _createClass(ErrorLoadable, [{
        key: "getValue",
        value: function getValue() {
            throw this.contents;
        }
    }, {
        key: "toPromise",
        value: function toPromise() {
            return Promise.reject(this.contents);
        }
    }, {
        key: "valueMaybe",
        value: function valueMaybe() {
            return undefined;
        }
    }, {
        key: "promiseMaybe",
        value: function promiseMaybe() {
            return undefined;
        }
    }, {
        key: "errorMaybe",
        value: function errorMaybe() {
            return this.contents;
        }
    }, {
        key: "errorOrThrow",
        value: function errorOrThrow() {
            return this.contents;
        }
    }, {
        key: "map",
        value: function map(_map) {
            // $FlowIssue[incompatible-return]
            return this;
        }
    }]);

    return ErrorLoadable;
}(BaseLoadable);

var LoadingLoadable = /*#__PURE__*/ function(_BaseLoadable3) {
    _inherits(LoadingLoadable, _BaseLoadable3);

    var _super3 = _createSuper(LoadingLoadable);

    function LoadingLoadable(promise) {
        var _this4;

        _classCallCheck(this, LoadingLoadable);

        _this4 = _super3.call(this);

        _defineProperty(_assertThisInitialized(_this4), "state", 'loading');

        _defineProperty(_assertThisInitialized(_this4), "contents", void 0);

        _this4.contents = promise;
        return _this4;
    }

    _createClass(LoadingLoadable, [{
        key: "getValue",
        value: function getValue() {
            throw this.contents;
        }
    }, {
        key: "toPromise",
        value: function toPromise() {
            return this.contents;
        }
    }, {
        key: "valueMaybe",
        value: function valueMaybe() {
            return undefined;
        }
    }, {
        key: "promiseMaybe",
        value: function promiseMaybe() {
            return this.contents;
        }
    }, {
        key: "promiseOrThrow",
        value: function promiseOrThrow() {
            return this.contents;
        }
    }, {
        key: "errorMaybe",
        value: function errorMaybe() {
            return undefined;
        }
    }, {
        key: "map",
        value: function map(_map3) {
            var _this5 = this;

            return loadableWithPromise(this.contents.then(function(value) {
                var next = _map3(value);

                if (isLoadable(next)) {
                    var nextLoadable = next;

                    switch (nextLoadable.state) {
                        case 'hasValue':
                            return nextLoadable.contents;

                        case 'hasError':
                            throw nextLoadable.contents;

                        case 'loading':
                            return nextLoadable.contents;
                    }
                } // $FlowIssue[incompatible-return]


                return next;
            }).catch(function(e) {
                if (Recoil_isPromise(e)) {
                    // we were "suspended," try again
                    return e.then(function() {
                        return _this5.map(_map3).contents;
                    });
                }

                throw e;
            }));
        }
    }]);

    return LoadingLoadable;
}(BaseLoadable);

function loadableWithValue(value) {
    return Object.freeze(new ValueLoadable(value));
}

function loadableWithError(error) {
    return Object.freeze(new ErrorLoadable(error));
}

function loadableWithPromise(promise) {
    return Object.freeze(new LoadingLoadable(promise));
}

function loadableLoading() {
    return Object.freeze(new LoadingLoadable(new Promise(function() {})));
}

function loadableAllArray(inputs) {
    return inputs.every(function(i) {
        return i.state === 'hasValue';
    }) ? loadableWithValue(inputs.map(function(i) {
        return i.contents;
    })) : inputs.some(function(i) {
        return i.state === 'hasError';
    }) ? loadableWithError(Recoil_nullthrows(inputs.find(function(i) {
        return i.state === 'hasError';
    }), 'Invalid loadable passed to loadableAll').contents) : loadableWithPromise(Promise.all(inputs.map(function(i) {
        return i.contents;
    })));
}

function loadableAll(inputs) {
    var unwrapedInputs = Array.isArray(inputs) ? inputs : Object.getOwnPropertyNames(inputs).map(function(key) {
        return inputs[key];
    });
    var output = loadableAllArray(unwrapedInputs);
    return Array.isArray(inputs) ? // $FlowIssue[incompatible-return]
        output : // Object.getOwnPropertyNames() has consistent key ordering with ES6
        // $FlowIssue[incompatible-call]
        output.map(function(outputs) {
            return Object.getOwnPropertyNames(inputs).reduce(function(out, key, idx) {
                return _objectSpread(_objectSpread({}, out), {}, _defineProperty2({}, key, outputs[idx]));
            }, {});
        });
}

function isLoadable(x) {
    return x instanceof BaseLoadable;
}

var LoadableStaticInterface = {
    of: function of(value) {
        return Recoil_isPromise(value) ? loadableWithPromise(value) : loadableWithValue(value);
    },
    error: function error(_error) {
        return loadableWithError(_error);
    },
    // $FlowIssue[unclear-type]
    all: loadableAll,
    isLoadable: isLoadable
};
var Recoil_Loadable = {
    loadableWithValue: loadableWithValue,
    loadableWithError: loadableWithError,
    loadableWithPromise: loadableWithPromise,
    loadableLoading: loadableLoading,
    loadableAll: loadableAll,
    isLoadable: isLoadable,
    RecoilLoadable: LoadableStaticInterface
};
var Recoil_Loadable_1 = Recoil_Loadable.loadableWithValue;
var Recoil_Loadable_2 = Recoil_Loadable.loadableWithError;
var Recoil_Loadable_3 = Recoil_Loadable.loadableWithPromise;
var Recoil_Loadable_4 = Recoil_Loadable.loadableLoading;
var Recoil_Loadable_5 = Recoil_Loadable.loadableAll;
var Recoil_Loadable_6 = Recoil_Loadable.isLoadable;
var Recoil_Loadable_7 = Recoil_Loadable.RecoilLoadable;
var Recoil_Loadable$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    loadableWithValue: Recoil_Loadable_1,
    loadableWithError: Recoil_Loadable_2,
    loadableWithPromise: Recoil_Loadable_3,
    loadableLoading: Recoil_Loadable_4,
    loadableAll: Recoil_Loadable_5,
    isLoadable: Recoil_Loadable_6,
    RecoilLoadable: Recoil_Loadable_7
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function sprintf(format) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
    }

    var index = 0;
    return format.replace(/%s/g, function() {
        return String(args[index++]);
    });
}

var sprintf_1 = sprintf;

function expectationViolation(format) {
    if (process.env.NODE_ENV !== "production") {
        for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
            args[_key2 - 1] = arguments[_key2];
        }

        var message = sprintf_1.call.apply(sprintf_1, [null, format].concat(args));
        var error = new Error(message);
        error.name = 'Expectation Violation';
        console.error(error);
    }
}

var expectationViolation_1 = expectationViolation; // @oss-only

var Recoil_expectationViolation = expectationViolation_1;

var _useMutableSource; // FIXME T2710559282599660


var useMutableSource = // flowlint-line unclear-type:off
    (_useMutableSource = react.useMutableSource) !== null && _useMutableSource !== void 0 ? _useMutableSource : react.unstable_useMutableSource; // flowlint-line unclear-type:off

function mutableSourceExists() {
    return useMutableSource && !(typeof window !== 'undefined' && window.$disableRecoilValueMutableSource_TEMP_HACK_DO_NOT_USE);
}

var Recoil_mutableSource = {
    mutableSourceExists: mutableSourceExists,
    useMutableSource: useMutableSource
};
var mutableSourceExists$1 = Recoil_mutableSource.mutableSourceExists;
var gks = new Map().set('recoil_hamt_2020', true).set('recoil_memory_managament_2020', true).set('recoil_suppress_rerender_in_callback', true);

function Recoil_gkx(gk) {
    var _gks$get;

    if (gk === 'recoil_early_rendering_2021' && !mutableSourceExists$1()) {
        return false;
    }

    return (_gks$get = gks.get(gk)) !== null && _gks$get !== void 0 ? _gks$get : false;
}

Recoil_gkx.setPass = function(gk) {
    gks.set(gk, true);
};

Recoil_gkx.setFail = function(gk) {
    gks.set(gk, false);
};

var Recoil_gkx_1 = Recoil_gkx; // @oss-only

/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the mapper function.
 */

function mapIterable(iterable, callback) {
    // Use generator to create iterable/iterator
    return /*#__PURE__*/ _regeneratorRuntime.mark(function _callee() {
        var index, _iterator, _step, value;

        return _regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
                switch (_context.prev = _context.next) {
                    case 0:
                        index = 0;
                        _iterator = _createForOfIteratorHelper(iterable);
                        _context.prev = 2;

                        _iterator.s();

                    case 4:
                        if ((_step = _iterator.n()).done) {
                            _context.next = 10;
                            break;
                        }

                        value = _step.value;
                        _context.next = 8;
                        return callback(value, index++);

                    case 8:
                        _context.next = 4;
                        break;

                    case 10:
                        _context.next = 15;
                        break;

                    case 12:
                        _context.prev = 12;
                        _context.t0 = _context["catch"](2);

                        _iterator.e(_context.t0);

                    case 15:
                        _context.prev = 15;

                        _iterator.f();

                        return _context.finish(15);

                    case 18:
                    case "end":
                        return _context.stop();
                }
            }
        }, _callee, null, [
            [2, 12, 15, 18]
        ]);
    })();
}

var Recoil_mapIterable = mapIterable;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function recoverableViolation(message, projectName) {
    var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        error = _ref2.error;

    if (process.env.NODE_ENV !== "production") {
        console.error(message, error);
    }

    return null;
}

var recoverableViolation_1 = recoverableViolation; // @oss-only

var Recoil_recoverableViolation = recoverableViolation_1;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */
// eslint-disable-next-line no-unused-vars

var AbstractRecoilValue = /*#__PURE__*/ _createClass(function AbstractRecoilValue(newKey) {
    _classCallCheck(this, AbstractRecoilValue);

    _defineProperty(this, "key", void 0);

    this.key = newKey;
});

var RecoilState = /*#__PURE__*/ function(_AbstractRecoilValue) {
    _inherits(RecoilState, _AbstractRecoilValue);

    var _super4 = _createSuper(RecoilState);

    function RecoilState() {
        _classCallCheck(this, RecoilState);

        return _super4.apply(this, arguments);
    }

    return _createClass(RecoilState);
}(AbstractRecoilValue);

var RecoilValueReadOnly = /*#__PURE__*/ function(_AbstractRecoilValue2) {
    _inherits(RecoilValueReadOnly, _AbstractRecoilValue2);

    var _super5 = _createSuper(RecoilValueReadOnly);

    function RecoilValueReadOnly() {
        _classCallCheck(this, RecoilValueReadOnly);

        return _super5.apply(this, arguments);
    }

    return _createClass(RecoilValueReadOnly);
}(AbstractRecoilValue);

function isRecoilValue(x) {
    return x instanceof RecoilState || x instanceof RecoilValueReadOnly;
}

var Recoil_RecoilValue = {
    AbstractRecoilValue: AbstractRecoilValue,
    RecoilState: RecoilState,
    RecoilValueReadOnly: RecoilValueReadOnly,
    isRecoilValue: isRecoilValue
};
var Recoil_RecoilValue_1 = Recoil_RecoilValue.AbstractRecoilValue;
var Recoil_RecoilValue_2 = Recoil_RecoilValue.RecoilState;
var Recoil_RecoilValue_3 = Recoil_RecoilValue.RecoilValueReadOnly;
var Recoil_RecoilValue_4 = Recoil_RecoilValue.isRecoilValue;
var Recoil_RecoilValue$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    AbstractRecoilValue: Recoil_RecoilValue_1,
    RecoilState: Recoil_RecoilValue_2,
    RecoilValueReadOnly: Recoil_RecoilValue_3,
    isRecoilValue: Recoil_RecoilValue_4
});

var DefaultValue = /*#__PURE__*/ _createClass(function DefaultValue() {
    _classCallCheck(this, DefaultValue);
});

var DEFAULT_VALUE = new DefaultValue();

var RecoilValueNotReady = /*#__PURE__*/ function(_Error) {
    _inherits(RecoilValueNotReady, _Error);

    var _super6 = _createSuper(RecoilValueNotReady);

    function RecoilValueNotReady(key) {
        _classCallCheck(this, RecoilValueNotReady);

        return _super6.call(this, "Tried to set the value of Recoil selector ".concat(key, " using an updater function, but it is an async selector in a pending or error state; this is not supported."));
    }

    return _createClass(RecoilValueNotReady);
}( /*#__PURE__*/ _wrapNativeSuper(Error)); // flowlint-next-line unclear-type:off


var nodes = new Map(); // flowlint-next-line unclear-type:off

var recoilValues = new Map();
/* eslint-disable no-redeclare */

function recoilValuesForKeys(keys) {
    return Recoil_mapIterable(keys, function(key) {
        return Recoil_nullthrows(recoilValues.get(key));
    });
}

function registerNode(node) {
    if (nodes.has(node.key)) {
        var message = "Duplicate atom key \"".concat(node.key, "\". This is a FATAL ERROR in\n      production. But it is safe to ignore this warning if it occurred because of\n      hot module replacement."); // TODO Need to figure out if there is a standard/open-source equivalent to see if hot module replacement is happening:
        // prettier-ignore
        // @fb-only: if (__DEV__) {
        // @fb-only: const isAcceptingUpdate = require('__debug').isAcceptingUpdate;
        // prettier-ignore
        // @fb-only: if (typeof isAcceptingUpdate !== 'function' || !isAcceptingUpdate()) {
        // @fb-only: expectationViolation(message, 'recoil');
        // @fb-only: }
        // prettier-ignore
        // @fb-only: } else {
        // @fb-only: recoverableViolation(message, 'recoil');
        // @fb-only: }

        console.warn(message); // @oss-only
    }

    nodes.set(node.key, node);
    var recoilValue = node.set == null ? new Recoil_RecoilValue$1.RecoilValueReadOnly(node.key) : new Recoil_RecoilValue$1.RecoilState(node.key);
    recoilValues.set(node.key, recoilValue);
    return recoilValue;
}
/* eslint-enable no-redeclare */


var NodeMissingError = /*#__PURE__*/ function(_Error2) {
    _inherits(NodeMissingError, _Error2);

    var _super7 = _createSuper(NodeMissingError);

    function NodeMissingError() {
        _classCallCheck(this, NodeMissingError);

        return _super7.apply(this, arguments);
    }

    return _createClass(NodeMissingError);
}( /*#__PURE__*/ _wrapNativeSuper(Error)); // flowlint-next-line unclear-type:off


function getNode(key) {
    var node = nodes.get(key);

    if (node == null) {
        throw new NodeMissingError("Missing definition for RecoilValue: \"".concat(key, "\"\""));
    }

    return node;
} // flowlint-next-line unclear-type:off


function getNodeMaybe(key) {
    return nodes.get(key);
}

var configDeletionHandlers = new Map();

function deleteNodeConfigIfPossible(key) {
    var _node$shouldDeleteCon;

    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return;
    }

    var node = nodes.get(key);

    if (node === null || node === void 0 ? void 0 : (_node$shouldDeleteCon = node.shouldDeleteConfigOnRelease) === null || _node$shouldDeleteCon === void 0 ? void 0 : _node$shouldDeleteCon.call(node)) {
        var _getConfigDeletionHan;

        nodes.delete(key);
        (_getConfigDeletionHan = getConfigDeletionHandler(key)) === null || _getConfigDeletionHan === void 0 ? void 0 : _getConfigDeletionHan();
        configDeletionHandlers.delete(key);
    }
}

function setConfigDeletionHandler(key, fn) {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return;
    }

    if (fn === undefined) {
        configDeletionHandlers.delete(key);
    } else {
        configDeletionHandlers.set(key, fn);
    }
}

function getConfigDeletionHandler(key) {
    return configDeletionHandlers.get(key);
}

var Recoil_Node = {
    nodes: nodes,
    recoilValues: recoilValues,
    registerNode: registerNode,
    getNode: getNode,
    getNodeMaybe: getNodeMaybe,
    deleteNodeConfigIfPossible: deleteNodeConfigIfPossible,
    setConfigDeletionHandler: setConfigDeletionHandler,
    getConfigDeletionHandler: getConfigDeletionHandler,
    recoilValuesForKeys: recoilValuesForKeys,
    NodeMissingError: NodeMissingError,
    DefaultValue: DefaultValue,
    DEFAULT_VALUE: DEFAULT_VALUE,
    RecoilValueNotReady: RecoilValueNotReady
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function enqueueExecution(s, f) {
    f();
}

var Recoil_Queue = {
    enqueueExecution: enqueueExecution
};

function createCommonjsModule(fn, module) {
    return module = {
        exports: {}
    }, fn(module, module.exports), module.exports;
}

var hamt_1 = createCommonjsModule(function(module) {
    var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
    /**
        @fileOverview Hash Array Mapped Trie.
  
        Code based on: https://github.com/exclipy/pdata
    */


    var hamt = {}; // export

    /* Configuration
     ******************************************************************************/

    var SIZE = 5;
    var BUCKET_SIZE = Math.pow(2, SIZE);
    var MASK = BUCKET_SIZE - 1;
    var MAX_INDEX_NODE = BUCKET_SIZE / 2;
    var MIN_ARRAY_NODE = BUCKET_SIZE / 4;
    /*
     ******************************************************************************/

    var nothing = {};

    var constant = function constant(x) {
        return function() {
            return x;
        };
    };
    /**
        Get 32 bit hash of string.
  
        Based on:
        http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
    */


    var hash = hamt.hash = function(str) {
        var type = typeof str === 'undefined' ? 'undefined' : _typeof(str);
        if (type === 'number') return str;
        if (type !== 'string') str += '';
        var hash = 0;

        for (var i = 0, len = str.length; i < len; ++i) {
            var c = str.charCodeAt(i);
            hash = (hash << 5) - hash + c | 0;
        }

        return hash;
    };
    /* Bit Ops
     ******************************************************************************/

    /**
        Hamming weight.
  
        Taken from: http://jsperf.com/hamming-weight
    */


    var popcount = function popcount(x) {
        x -= x >> 1 & 0x55555555;
        x = (x & 0x33333333) + (x >> 2 & 0x33333333);
        x = x + (x >> 4) & 0x0f0f0f0f;
        x += x >> 8;
        x += x >> 16;
        return x & 0x7f;
    };

    var hashFragment = function hashFragment(shift, h) {
        return h >>> shift & MASK;
    };

    var toBitmap = function toBitmap(x) {
        return 1 << x;
    };

    var fromBitmap = function fromBitmap(bitmap, bit) {
        return popcount(bitmap & bit - 1);
    };
    /* Array Ops
     ******************************************************************************/

    /**
        Set a value in an array.
  
        @param mutate Should the input array be mutated?
        @param at Index to change.
        @param v New value
        @param arr Array.
    */


    var arrayUpdate = function arrayUpdate(mutate, at, v, arr) {
        var out = arr;

        if (!mutate) {
            var len = arr.length;
            out = new Array(len);

            for (var i = 0; i < len; ++i) {
                out[i] = arr[i];
            }
        }

        out[at] = v;
        return out;
    };
    /**
        Remove a value from an array.
  
        @param mutate Should the input array be mutated?
        @param at Index to remove.
        @param arr Array.
    */


    var arraySpliceOut = function arraySpliceOut(mutate, at, arr) {
        var newLen = arr.length - 1;
        var i = 0;
        var g = 0;
        var out = arr;

        if (mutate) {
            i = g = at;
        } else {
            out = new Array(newLen);

            while (i < at) {
                out[g++] = arr[i++];
            }
        }

        ++i;

        while (i <= newLen) {
            out[g++] = arr[i++];
        }

        if (mutate) {
            out.length = newLen;
        }

        return out;
    };
    /**
        Insert a value into an array.
  
        @param mutate Should the input array be mutated?
        @param at Index to insert at.
        @param v Value to insert,
        @param arr Array.
    */


    var arraySpliceIn = function arraySpliceIn(mutate, at, v, arr) {
        var len = arr.length;

        if (mutate) {
            var _i = len;

            while (_i >= at) {
                arr[_i--] = arr[_i];
            }

            arr[at] = v;
            return arr;
        }

        var i = 0,
            g = 0;
        var out = new Array(len + 1);

        while (i < at) {
            out[g++] = arr[i++];
        }

        out[at] = v;

        while (i < len) {
            out[++g] = arr[i++];
        }

        return out;
    };
    /* Node Structures
     ******************************************************************************/


    var LEAF = 1;
    var COLLISION = 2;
    var INDEX = 3;
    var ARRAY = 4;
    /**
        Empty node.
    */

    var empty = {
        __hamt_isEmpty: true
    };

    var isEmptyNode = function isEmptyNode(x) {
        return x === empty || x && x.__hamt_isEmpty;
    };
    /**
        Leaf holding a value.
  
        @member edit Edit of the node.
        @member hash Hash of key.
        @member key Key.
        @member value Value stored.
    */


    var Leaf = function Leaf(edit, hash, key, value) {
        return {
            type: LEAF,
            edit: edit,
            hash: hash,
            key: key,
            value: value,
            _modify: Leaf__modify
        };
    };
    /**
        Leaf holding multiple values with the same hash but different keys.
  
        @member edit Edit of the node.
        @member hash Hash of key.
        @member children Array of collision children node.
    */


    var Collision = function Collision(edit, hash, children) {
        return {
            type: COLLISION,
            edit: edit,
            hash: hash,
            children: children,
            _modify: Collision__modify
        };
    };
    /**
        Internal node with a sparse set of children.
  
        Uses a bitmap and array to pack children.
  
      @member edit Edit of the node.
        @member mask Bitmap that encode the positions of children in the array.
        @member children Array of child nodes.
    */


    var IndexedNode = function IndexedNode(edit, mask, children) {
        return {
            type: INDEX,
            edit: edit,
            mask: mask,
            children: children,
            _modify: IndexedNode__modify
        };
    };
    /**
        Internal node with many children.
  
        @member edit Edit of the node.
        @member size Number of children.
        @member children Array of child nodes.
    */


    var ArrayNode = function ArrayNode(edit, size, children) {
        return {
            type: ARRAY,
            edit: edit,
            size: size,
            children: children,
            _modify: ArrayNode__modify
        };
    };
    /**
        Is `node` a leaf node?
    */


    var isLeaf = function isLeaf(node) {
        return node === empty || node.type === LEAF || node.type === COLLISION;
    };
    /* Internal node operations.
     ******************************************************************************/

    /**
        Expand an indexed node into an array node.
  
      @param edit Current edit.
        @param frag Index of added child.
        @param child Added child.
        @param mask Index node mask before child added.
        @param subNodes Index node children before child added.
    */


    var expand = function expand(edit, frag, child, bitmap, subNodes) {
        var arr = [];
        var bit = bitmap;
        var count = 0;

        for (var i = 0; bit; ++i) {
            if (bit & 1) arr[i] = subNodes[count++];
            bit >>>= 1;
        }

        arr[frag] = child;
        return ArrayNode(edit, count + 1, arr);
    };
    /**
        Collapse an array node into a indexed node.
  
      @param edit Current edit.
        @param count Number of elements in new array.
        @param removed Index of removed element.
        @param elements Array node children before remove.
    */


    var pack = function pack(edit, count, removed, elements) {
        var children = new Array(count - 1);
        var g = 0;
        var bitmap = 0;

        for (var i = 0, len = elements.length; i < len; ++i) {
            if (i !== removed) {
                var elem = elements[i];

                if (elem && !isEmptyNode(elem)) {
                    children[g++] = elem;
                    bitmap |= 1 << i;
                }
            }
        }

        return IndexedNode(edit, bitmap, children);
    };
    /**
        Merge two leaf nodes.
  
        @param shift Current shift.
        @param h1 Node 1 hash.
        @param n1 Node 1.
        @param h2 Node 2 hash.
        @param n2 Node 2.
    */


    var mergeLeaves = function mergeLeaves(edit, shift, h1, n1, h2, n2) {
        if (h1 === h2) return Collision(edit, h1, [n2, n1]);
        var subH1 = hashFragment(shift, h1);
        var subH2 = hashFragment(shift, h2);
        return IndexedNode(edit, toBitmap(subH1) | toBitmap(subH2), subH1 === subH2 ? [mergeLeaves(edit, shift + SIZE, h1, n1, h2, n2)] : subH1 < subH2 ? [n1, n2] : [n2, n1]);
    };
    /**
        Update an entry in a collision list.
  
        @param mutate Should mutation be used?
        @param edit Current edit.
        @param keyEq Key compare function.
        @param hash Hash of collision.
        @param list Collision list.
        @param f Update function.
        @param k Key to update.
        @param size Size ref.
    */


    var updateCollisionList = function updateCollisionList(mutate, edit, keyEq, h, list, f, k, size) {
        var len = list.length;

        for (var i = 0; i < len; ++i) {
            var child = list[i];

            if (keyEq(k, child.key)) {
                var value = child.value;

                var _newValue = f(value);

                if (_newValue === value) return list;

                if (_newValue === nothing) {
                    --size.value;
                    return arraySpliceOut(mutate, i, list);
                }

                return arrayUpdate(mutate, i, Leaf(edit, h, k, _newValue), list);
            }
        }

        var newValue = f();
        if (newValue === nothing) return list;
        ++size.value;
        return arrayUpdate(mutate, len, Leaf(edit, h, k, newValue), list);
    };

    var canEditNode = function canEditNode(edit, node) {
        return edit === node.edit;
    };
    /* Editing
     ******************************************************************************/


    var Leaf__modify = function Leaf__modify(edit, keyEq, shift, f, h, k, size) {
        if (keyEq(k, this.key)) {
            var _v = f(this.value);

            if (_v === this.value) return this;
            else if (_v === nothing) {
                --size.value;
                return empty;
            }

            if (canEditNode(edit, this)) {
                this.value = _v;
                return this;
            }

            return Leaf(edit, h, k, _v);
        }

        var v = f();
        if (v === nothing) return this;
        ++size.value;
        return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
    };

    var Collision__modify = function Collision__modify(edit, keyEq, shift, f, h, k, size) {
        if (h === this.hash) {
            var canEdit = canEditNode(edit, this);
            var list = updateCollisionList(canEdit, edit, keyEq, this.hash, this.children, f, k, size);
            if (list === this.children) return this;
            return list.length > 1 ? Collision(edit, this.hash, list) : list[0]; // collapse single element collision list
        }

        var v = f();
        if (v === nothing) return this;
        ++size.value;
        return mergeLeaves(edit, shift, this.hash, this, h, Leaf(edit, h, k, v));
    };

    var IndexedNode__modify = function IndexedNode__modify(edit, keyEq, shift, f, h, k, size) {
        var mask = this.mask;
        var children = this.children;
        var frag = hashFragment(shift, h);
        var bit = toBitmap(frag);
        var indx = fromBitmap(mask, bit);
        var exists = mask & bit;
        var current = exists ? children[indx] : empty;

        var child = current._modify(edit, keyEq, shift + SIZE, f, h, k, size);

        if (current === child) return this;
        var canEdit = canEditNode(edit, this);
        var bitmap = mask;
        var newChildren = void 0;

        if (exists && isEmptyNode(child)) {
            // remove
            bitmap &= ~bit;
            if (!bitmap) return empty;
            if (children.length <= 2 && isLeaf(children[indx ^ 1])) return children[indx ^ 1]; // collapse

            newChildren = arraySpliceOut(canEdit, indx, children);
        } else if (!exists && !isEmptyNode(child)) {
            // add
            if (children.length >= MAX_INDEX_NODE) return expand(edit, frag, child, mask, children);
            bitmap |= bit;
            newChildren = arraySpliceIn(canEdit, indx, child, children);
        } else {
            // modify
            newChildren = arrayUpdate(canEdit, indx, child, children);
        }

        if (canEdit) {
            this.mask = bitmap;
            this.children = newChildren;
            return this;
        }

        return IndexedNode(edit, bitmap, newChildren);
    };

    var ArrayNode__modify = function ArrayNode__modify(edit, keyEq, shift, f, h, k, size) {
        var count = this.size;
        var children = this.children;
        var frag = hashFragment(shift, h);
        var child = children[frag];

        var newChild = (child || empty)._modify(edit, keyEq, shift + SIZE, f, h, k, size);

        if (child === newChild) return this;
        var canEdit = canEditNode(edit, this);
        var newChildren = void 0;

        if (isEmptyNode(child) && !isEmptyNode(newChild)) {
            // add
            ++count;
            newChildren = arrayUpdate(canEdit, frag, newChild, children);
        } else if (!isEmptyNode(child) && isEmptyNode(newChild)) {
            // remove
            --count;
            if (count <= MIN_ARRAY_NODE) return pack(edit, count, frag, children);
            newChildren = arrayUpdate(canEdit, frag, empty, children);
        } else {
            // modify
            newChildren = arrayUpdate(canEdit, frag, newChild, children);
        }

        if (canEdit) {
            this.size = count;
            this.children = newChildren;
            return this;
        }

        return ArrayNode(edit, count, newChildren);
    };

    empty._modify = function(edit, keyEq, shift, f, h, k, size) {
        var v = f();
        if (v === nothing) return empty;
        ++size.value;
        return Leaf(edit, h, k, v);
    };
    /*
     ******************************************************************************/


    function Map(editable, edit, config, root, size) {
        this._editable = editable;
        this._edit = edit;
        this._config = config;
        this._root = root;
        this._size = size;
    }

    Map.prototype.setTree = function(newRoot, newSize) {
        if (this._editable) {
            this._root = newRoot;
            this._size = newSize;
            return this;
        }

        return newRoot === this._root ? this : new Map(this._editable, this._edit, this._config, newRoot, newSize);
    };
    /* Queries
     ******************************************************************************/

    /**
        Lookup the value for `key` in `map` using a custom `hash`.
  
        Returns the value or `alt` if none.
    */


    var tryGetHash = hamt.tryGetHash = function(alt, hash, key, map) {
        var node = map._root;
        var shift = 0;
        var keyEq = map._config.keyEq;

        while (true) {
            switch (node.type) {
                case LEAF:
                    {
                        return keyEq(key, node.key) ? node.value : alt;
                    }

                case COLLISION:
                    {
                        if (hash === node.hash) {
                            var children = node.children;

                            for (var i = 0, len = children.length; i < len; ++i) {
                                var child = children[i];
                                if (keyEq(key, child.key)) return child.value;
                            }
                        }

                        return alt;
                    }

                case INDEX:
                    {
                        var frag = hashFragment(shift, hash);
                        var bit = toBitmap(frag);

                        if (node.mask & bit) {
                            node = node.children[fromBitmap(node.mask, bit)];
                            shift += SIZE;
                            break;
                        }

                        return alt;
                    }

                case ARRAY:
                    {
                        node = node.children[hashFragment(shift, hash)];

                        if (node) {
                            shift += SIZE;
                            break;
                        }

                        return alt;
                    }

                default:
                    return alt;
            }
        }
    };

    Map.prototype.tryGetHash = function(alt, hash, key) {
        return tryGetHash(alt, hash, key, this);
    };
    /**
        Lookup the value for `key` in `map` using internal hash function.
  
        @see `tryGetHash`
    */


    var tryGet = hamt.tryGet = function(alt, key, map) {
        return tryGetHash(alt, map._config.hash(key), key, map);
    };

    Map.prototype.tryGet = function(alt, key) {
        return tryGet(alt, key, this);
    };
    /**
        Lookup the value for `key` in `map` using a custom `hash`.
  
        Returns the value or `undefined` if none.
    */


    var getHash = hamt.getHash = function(hash, key, map) {
        return tryGetHash(undefined, hash, key, map);
    };

    Map.prototype.getHash = function(hash, key) {
        return getHash(hash, key, this);
    };
    /**
        Lookup the value for `key` in `map` using internal hash function.
  
        @see `get`
    */


    var get = hamt.get = function(key, map) {
        return tryGetHash(undefined, map._config.hash(key), key, map);
    };

    Map.prototype.get = function(key, alt) {
        return tryGet(alt, key, this);
    };
    /**
        Does an entry exist for `key` in `map`? Uses custom `hash`.
    */


    var hasHash = hamt.has = function(hash, key, map) {
        return tryGetHash(nothing, hash, key, map) !== nothing;
    };

    Map.prototype.hasHash = function(hash, key) {
        return hasHash(hash, key, this);
    };
    /**
        Does an entry exist for `key` in `map`? Uses internal hash function.
    */


    var has = hamt.has = function(key, map) {
        return hasHash(map._config.hash(key), key, map);
    };

    Map.prototype.has = function(key) {
        return has(key, this);
    };

    var defKeyCompare = function defKeyCompare(x, y) {
        return x === y;
    };
    /**
        Create an empty map.
  
        @param config Configuration.
    */


    hamt.make = function(config) {
        return new Map(0, 0, {
            keyEq: config && config.keyEq || defKeyCompare,
            hash: config && config.hash || hash
        }, empty, 0);
    };
    /**
        Empty map.
    */


    hamt.empty = hamt.make();
    /**
        Does `map` contain any elements?
    */

    var isEmpty = hamt.isEmpty = function(map) {
        return map && !!isEmptyNode(map._root);
    };

    Map.prototype.isEmpty = function() {
        return isEmpty(this);
    };
    /* Updates
     ******************************************************************************/

    /**
        Alter the value stored for `key` in `map` using function `f` using
        custom hash.
  
        `f` is invoked with the current value for `k` if it exists,
        or no arguments if no such value exists. `modify` will always either
        update or insert a value into the map.
  
        Returns a map with the modified value. Does not alter `map`.
    */


    var modifyHash = hamt.modifyHash = function(f, hash, key, map) {
        var size = {
            value: map._size
        };

        var newRoot = map._root._modify(map._editable ? map._edit : NaN, map._config.keyEq, 0, f, hash, key, size);

        return map.setTree(newRoot, size.value);
    };

    Map.prototype.modifyHash = function(hash, key, f) {
        return modifyHash(f, hash, key, this);
    };
    /**
        Alter the value stored for `key` in `map` using function `f` using
        internal hash function.
  
        @see `modifyHash`
    */


    var modify = hamt.modify = function(f, key, map) {
        return modifyHash(f, map._config.hash(key), key, map);
    };

    Map.prototype.modify = function(key, f) {
        return modify(f, key, this);
    };
    /**
        Store `value` for `key` in `map` using custom `hash`.
  
        Returns a map with the modified value. Does not alter `map`.
    */


    var setHash = hamt.setHash = function(hash, key, value, map) {
        return modifyHash(constant(value), hash, key, map);
    };

    Map.prototype.setHash = function(hash, key, value) {
        return setHash(hash, key, value, this);
    };
    /**
        Store `value` for `key` in `map` using internal hash function.
  
        @see `setHash`
    */


    var set = hamt.set = function(key, value, map) {
        return setHash(map._config.hash(key), key, value, map);
    };

    Map.prototype.set = function(key, value) {
        return set(key, value, this);
    };
    /**
        Remove the entry for `key` in `map`.
  
        Returns a map with the value removed. Does not alter `map`.
    */


    var del = constant(nothing);

    var removeHash = hamt.removeHash = function(hash, key, map) {
        return modifyHash(del, hash, key, map);
    };

    Map.prototype.removeHash = Map.prototype.deleteHash = function(hash, key) {
        return removeHash(hash, key, this);
    };
    /**
        Remove the entry for `key` in `map` using internal hash function.
  
        @see `removeHash`
    */


    var remove = hamt.remove = function(key, map) {
        return removeHash(map._config.hash(key), key, map);
    };

    Map.prototype.remove = Map.prototype.delete = function(key) {
        return remove(key, this);
    };
    /* Mutation
     ******************************************************************************/

    /**
        Mark `map` as mutable.
     */


    var beginMutation = hamt.beginMutation = function(map) {
        return new Map(map._editable + 1, map._edit + 1, map._config, map._root, map._size);
    };

    Map.prototype.beginMutation = function() {
        return beginMutation(this);
    };
    /**
        Mark `map` as immutable.
     */


    var endMutation = hamt.endMutation = function(map) {
        map._editable = map._editable && map._editable - 1;
        return map;
    };

    Map.prototype.endMutation = function() {
        return endMutation(this);
    };
    /**
        Mutate `map` within the context of `f`.
        @param f
        @param map HAMT
    */


    var mutate = hamt.mutate = function(f, map) {
        var transient = beginMutation(map);
        f(transient);
        return endMutation(transient);
    };

    Map.prototype.mutate = function(f) {
        return mutate(f, this);
    };
    /* Traversal
     ******************************************************************************/

    /**
        Apply a continuation.
    */


    var appk = function appk(k) {
        return k && lazyVisitChildren(k[0], k[1], k[2], k[3], k[4]);
    };
    /**
        Recursively visit all values stored in an array of nodes lazily.
    */


    var lazyVisitChildren = function lazyVisitChildren(len, children, i, f, k) {
        while (i < len) {
            var child = children[i++];
            if (child && !isEmptyNode(child)) return lazyVisit(child, f, [len, children, i, f, k]);
        }

        return appk(k);
    };
    /**
        Recursively visit all values stored in `node` lazily.
    */


    var lazyVisit = function lazyVisit(node, f, k) {
        switch (node.type) {
            case LEAF:
                return {
                    value: f(node),
                    rest: k
                };

            case COLLISION:
            case ARRAY:
            case INDEX:
                var children = node.children;
                return lazyVisitChildren(children.length, children, 0, f, k);

            default:
                return appk(k);
        }
    };

    var DONE = {
        done: true
    };
    /**
        Javascript iterator over a map.
    */

    function MapIterator(v) {
        this.v = v;
    }

    MapIterator.prototype.next = function() {
        if (!this.v) return DONE;
        var v0 = this.v;
        this.v = appk(v0.rest);
        return v0;
    };

    MapIterator.prototype[Symbol.iterator] = function() {
        return this;
    };
    /**
        Lazily visit each value in map with function `f`.
    */


    var visit = function visit(map, f) {
        return new MapIterator(lazyVisit(map._root, f));
    };
    /**
        Get a Javascsript iterator of `map`.
  
        Iterates over `[key, value]` arrays.
    */


    var buildPairs = function buildPairs(x) {
        return [x.key, x.value];
    };

    var entries = hamt.entries = function(map) {
        return visit(map, buildPairs);
    };

    Map.prototype.entries = Map.prototype[Symbol.iterator] = function() {
        return entries(this);
    };
    /**
        Get array of all keys in `map`.
  
        Order is not guaranteed.
    */


    var buildKeys = function buildKeys(x) {
        return x.key;
    };

    var keys = hamt.keys = function(map) {
        return visit(map, buildKeys);
    };

    Map.prototype.keys = function() {
        return keys(this);
    };
    /**
        Get array of all values in `map`.
  
        Order is not guaranteed, duplicates are preserved.
    */


    var buildValues = function buildValues(x) {
        return x.value;
    };

    var values = hamt.values = Map.prototype.values = function(map) {
        return visit(map, buildValues);
    };

    Map.prototype.values = function() {
        return values(this);
    };
    /* Fold
     ******************************************************************************/

    /**
        Visit every entry in the map, aggregating data.
  
        Order of nodes is not guaranteed.
  
        @param f Function mapping accumulated value, value, and key to new value.
        @param z Starting value.
        @param m HAMT
    */


    var fold = hamt.fold = function(f, z, m) {
        var root = m._root;
        if (root.type === LEAF) return f(z, root.value, root.key);
        var toVisit = [root.children];
        var children = void 0;

        while (children = toVisit.pop()) {
            for (var i = 0, len = children.length; i < len;) {
                var child = children[i++];

                if (child && child.type) {
                    if (child.type === LEAF) z = f(z, child.value, child.key);
                    else toVisit.push(child.children);
                }
            }
        }

        return z;
    };

    Map.prototype.fold = function(f, z) {
        return fold(f, z, this);
    };
    /**
        Visit every entry in the map, aggregating data.
  
        Order of nodes is not guaranteed.
  
        @param f Function invoked with value and key
        @param map HAMT
    */


    var forEach = hamt.forEach = function(f, map) {
        return fold(function(_, value, key) {
            return f(value, key, map);
        }, null, map);
    };

    Map.prototype.forEach = function(f) {
        return forEach(f, this);
    };
    /* Aggregate
     ******************************************************************************/

    /**
        Get the number of entries in `map`.
    */


    var count = hamt.count = function(map) {
        return map._size;
    };

    Map.prototype.count = function() {
        return count(this);
    };

    Object.defineProperty(Map.prototype, 'size', {
        get: Map.prototype.count
    });
    /* Export
     ******************************************************************************/

    if (module.exports) {
        module.exports = hamt;
    } else {
        undefined.hamt = hamt;
    }
});

var BuiltInMap = /*#__PURE__*/ function() {
    function BuiltInMap(existing) {
        _classCallCheck(this, BuiltInMap);

        _defineProperty(this, "_map", void 0);

        this._map = new Map(existing === null || existing === void 0 ? void 0 : existing.entries());
    }

    _createClass(BuiltInMap, [{
        key: "keys",
        value: function keys() {
            return this._map.keys();
        }
    }, {
        key: "entries",
        value: function entries() {
            return this._map.entries();
        }
    }, {
        key: "get",
        value: function get(k) {
            return this._map.get(k);
        }
    }, {
        key: "has",
        value: function has(k) {
            return this._map.has(k);
        }
    }, {
        key: "set",
        value: function set(k, v) {
            this._map.set(k, v);

            return this;
        }
    }, {
        key: "delete",
        value: function _delete(k) {
            this._map.delete(k);

            return this;
        }
    }, {
        key: "clone",
        value: function clone() {
            return persistentMap(this);
        }
    }, {
        key: "toMap",
        value: function toMap() {
            return new Map(this._map);
        }
    }]);

    return BuiltInMap;
}();

var HashArrayMappedTrieMap = /*#__PURE__*/ function() {
    // Because hamt.empty is not a function there is no way to introduce type
    // parameters on it, so empty is typed as HAMTPlusMap<string, mixed>.
    // $FlowIssue
    function HashArrayMappedTrieMap(existing) {
        _classCallCheck(this, HashArrayMappedTrieMap);

        _defineProperty(this, "_hamt", hamt_1.empty.beginMutation());

        if (existing instanceof HashArrayMappedTrieMap) {
            var h = existing._hamt.endMutation();

            existing._hamt = h.beginMutation();
            this._hamt = h.beginMutation();
        } else if (existing) {
            var _iterator2 = _createForOfIteratorHelper(existing.entries()),
                _step2;

            try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var _step2$value = _slicedToArray(_step2.value, 2),
                        k = _step2$value[0],
                        v = _step2$value[1];

                    this._hamt.set(k, v);
                }
            } catch (err) {
                _iterator2.e(err);
            } finally {
                _iterator2.f();
            }
        }
    }

    _createClass(HashArrayMappedTrieMap, [{
        key: "keys",
        value: function keys() {
            return this._hamt.keys();
        }
    }, {
        key: "entries",
        value: function entries() {
            return this._hamt.entries();
        }
    }, {
        key: "get",
        value: function get(k) {
            return this._hamt.get(k);
        }
    }, {
        key: "has",
        value: function has(k) {
            return this._hamt.has(k);
        }
    }, {
        key: "set",
        value: function set(k, v) {
            this._hamt.set(k, v);

            return this;
        }
    }, {
        key: "delete",
        value: function _delete(k) {
            this._hamt.delete(k);

            return this;
        }
    }, {
        key: "clone",
        value: function clone() {
            return persistentMap(this);
        }
    }, {
        key: "toMap",
        value: function toMap() {
            return new Map(this._hamt);
        }
    }]);

    return HashArrayMappedTrieMap;
}();

function persistentMap(existing) {
    if (Recoil_gkx_1('recoil_hamt_2020')) {
        return new HashArrayMappedTrieMap(existing);
    } else {
        return new BuiltInMap(existing);
    }
}

var Recoil_PersistentMap = {
    persistentMap: persistentMap
};
var Recoil_PersistentMap_1 = Recoil_PersistentMap.persistentMap;
var Recoil_PersistentMap$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    persistentMap: Recoil_PersistentMap_1
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a set containing all of the values from the first set that are not
 * present in any of the subsequent sets.
 *
 * Note: this is written procedurally (i.e., without filterSet) for performant
 * use in tight loops.
 */

function differenceSets(set) {
    var ret = new Set();

    for (var _len3 = arguments.length, setsWithValuesToRemove = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
        setsWithValuesToRemove[_key3 - 1] = arguments[_key3];
    }

    var _iterator3 = _createForOfIteratorHelper(set),
        _step3;

    try {
        FIRST: for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var value = _step3.value;

            var _iterator4 = _createForOfIteratorHelper(setsWithValuesToRemove),
                _step4;

            try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                    var otherSet = _step4.value;

                    if (otherSet.has(value)) {
                        continue FIRST;
                    }
                }
            } catch (err) {
                _iterator4.e(err);
            } finally {
                _iterator4.f();
            }

            ret.add(value);
        }
    }
    catch (err) {
        _iterator3.e(err);
    } finally {
        _iterator3.f();
    }

    return ret;
}

var Recoil_differenceSets = differenceSets;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a new Map object with the same keys as the original, but with the
 * values replaced with the output of the given callback function.
 */

function mapMap(map, callback) {
    var result = new Map();
    map.forEach(function(value, key) {
        result.set(key, callback(value, key));
    });
    return result;
}

var Recoil_mapMap = mapMap;

function graph() {
    return {
        nodeDeps: new Map(),
        nodeToNodeSubscriptions: new Map()
    };
}

function cloneGraph(graph) {
    return {
        nodeDeps: Recoil_mapMap(graph.nodeDeps, function(s) {
            return new Set(s);
        }),
        nodeToNodeSubscriptions: Recoil_mapMap(graph.nodeToNodeSubscriptions, function(s) {
            return new Set(s);
        })
    };
} // Note that this overwrites the deps of existing nodes, rather than unioning
// the new deps with the old deps.


function mergeDependencyMapIntoGraph(deps, graph, // If olderGraph is given then we will not overwrite changes made to the given
    // graph compared with olderGraph:
    olderGraph) {
    var nodeDeps = graph.nodeDeps,
        nodeToNodeSubscriptions = graph.nodeToNodeSubscriptions;
    deps.forEach(function(upstreams, downstream) {
        var existingUpstreams = nodeDeps.get(downstream);

        if (existingUpstreams && olderGraph && existingUpstreams !== olderGraph.nodeDeps.get(downstream)) {
            return;
        } // Update nodeDeps:


        nodeDeps.set(downstream, new Set(upstreams)); // Add new deps to nodeToNodeSubscriptions:

        var addedUpstreams = existingUpstreams == null ? upstreams : Recoil_differenceSets(upstreams, existingUpstreams);
        addedUpstreams.forEach(function(upstream) {
            if (!nodeToNodeSubscriptions.has(upstream)) {
                nodeToNodeSubscriptions.set(upstream, new Set());
            }

            var existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
            existing.add(downstream);
        }); // Remove removed deps from nodeToNodeSubscriptions:

        if (existingUpstreams) {
            var removedUpstreams = Recoil_differenceSets(existingUpstreams, upstreams);
            removedUpstreams.forEach(function(upstream) {
                if (!nodeToNodeSubscriptions.has(upstream)) {
                    return;
                }

                var existing = Recoil_nullthrows(nodeToNodeSubscriptions.get(upstream));
                existing.delete(downstream);

                if (existing.size === 0) {
                    nodeToNodeSubscriptions.delete(upstream);
                }
            });
        }
    });
}

function saveDependencyMapToStore(dependencyMap, store, version) {
    var _storeState$nextTree, _storeState$previousT, _storeState$previousT2, _storeState$previousT3;

    var storeState = store.getState();

    if (!(version === storeState.currentTree.version || version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
        Recoil_recoverableViolation('Tried to save dependencies to a discarded tree');
    } // Merge the dependencies discovered into the store's dependency map
    // for the version that was read:


    var graph = store.getGraph(version);
    mergeDependencyMapIntoGraph(dependencyMap, graph); // If this version is not the latest version, also write these dependencies
    // into later versions if they don't already have their own:

    if (version === ((_storeState$previousT2 = storeState.previousTree) === null || _storeState$previousT2 === void 0 ? void 0 : _storeState$previousT2.version)) {
        var currentGraph = store.getGraph(storeState.currentTree.version);
        mergeDependencyMapIntoGraph(dependencyMap, currentGraph, graph);
    }

    if (version === ((_storeState$previousT3 = storeState.previousTree) === null || _storeState$previousT3 === void 0 ? void 0 : _storeState$previousT3.version) || version === storeState.currentTree.version) {
        var _storeState$nextTree2;

        var nextVersion = (_storeState$nextTree2 = storeState.nextTree) === null || _storeState$nextTree2 === void 0 ? void 0 : _storeState$nextTree2.version;

        if (nextVersion !== undefined) {
            var nextGraph = store.getGraph(nextVersion);
            mergeDependencyMapIntoGraph(dependencyMap, nextGraph, graph);
        }
    }
}

function mergeDepsIntoDependencyMap(from, into) {
    from.forEach(function(upstreamDeps, downstreamNode) {
        if (!into.has(downstreamNode)) {
            into.set(downstreamNode, new Set());
        }

        var deps = Recoil_nullthrows(into.get(downstreamNode));
        upstreamDeps.forEach(function(dep) {
            return deps.add(dep);
        });
    });
}

function addToDependencyMap(downstream, upstream, dependencyMap) {
    if (!dependencyMap.has(downstream)) {
        dependencyMap.set(downstream, new Set());
    }

    Recoil_nullthrows(dependencyMap.get(downstream)).add(upstream);
}

var Recoil_Graph = {
    addToDependencyMap: addToDependencyMap,
    cloneGraph: cloneGraph,
    graph: graph,
    mergeDepsIntoDependencyMap: mergeDepsIntoDependencyMap,
    saveDependencyMapToStore: saveDependencyMapToStore
};
var persistentMap$1 = Recoil_PersistentMap$1.persistentMap;
var graph$1 = Recoil_Graph.graph;
var nextTreeStateVersion = 0;

var getNextTreeStateVersion = function getNextTreeStateVersion() {
    return nextTreeStateVersion++;
};

function makeEmptyTreeState() {
    var version = getNextTreeStateVersion();
    return {
        version: version,
        stateID: version,
        transactionMetadata: {},
        dirtyAtoms: new Set(),
        atomValues: persistentMap$1(),
        nonvalidatedAtoms: persistentMap$1()
    };
}

function makeEmptyStoreState() {
    var currentTree = makeEmptyTreeState();
    return {
        currentTree: currentTree,
        nextTree: null,
        previousTree: null,
        commitDepth: 0,
        knownAtoms: new Set(),
        knownSelectors: new Set(),
        transactionSubscriptions: new Map(),
        nodeTransactionSubscriptions: new Map(),
        nodeToComponentSubscriptions: new Map(),
        queuedComponentCallbacks_DEPRECATED: [],
        suspendedComponentResolvers: new Set(),
        graphsByVersion: new Map().set(currentTree.version, graph$1()),
        versionsUsedByComponent: new Map(),
        retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set()
        },
        nodeCleanupFunctions: new Map()
    };
}

var Recoil_State = {
    makeEmptyTreeState: makeEmptyTreeState,
    makeEmptyStoreState: makeEmptyStoreState,
    getNextTreeStateVersion: getNextTreeStateVersion
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function unionSets() {
    var result = new Set();

    for (var _len4 = arguments.length, sets = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        sets[_key4] = arguments[_key4];
    }

    for (var _i2 = 0, _sets = sets; _i2 < _sets.length; _i2++) {
        var set = _sets[_i2];

        var _iterator5 = _createForOfIteratorHelper(set),
            _step5;

        try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var value = _step5.value;
                result.add(value);
            }
        } catch (err) {
            _iterator5.e(err);
        } finally {
            _iterator5.f();
        }
    }

    return result;
}

var Recoil_unionSets = unionSets;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Utilities for working with built-in Maps and Sets without mutating them.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function setByAddingToSet(set, v) {
    var next = new Set(set);
    next.add(v);
    return next;
}

function setByDeletingFromSet(set, v) {
    var next = new Set(set);
    next.delete(v);
    return next;
}

function mapBySettingInMap(map, k, v) {
    var next = new Map(map);
    next.set(k, v);
    return next;
}

function mapByUpdatingInMap(map, k, updater) {
    var next = new Map(map);
    next.set(k, updater(next.get(k)));
    return next;
}

function mapByDeletingFromMap(map, k) {
    var next = new Map(map);
    next.delete(k);
    return next;
}

function mapByDeletingMultipleFromMap(map, ks) {
    var next = new Map(map);
    ks.forEach(function(k) {
        return next.delete(k);
    });
    return next;
}

var Recoil_CopyOnWrite = {
    setByAddingToSet: setByAddingToSet,
    setByDeletingFromSet: setByDeletingFromSet,
    mapBySettingInMap: mapBySettingInMap,
    mapByUpdatingInMap: mapByUpdatingInMap,
    mapByDeletingFromMap: mapByDeletingFromMap,
    mapByDeletingMultipleFromMap: mapByDeletingMultipleFromMap
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Creates a new iterable whose output is generated by passing the input
 * iterable's values through the filter function.
 */

function filterIterable(iterable, predicate) {
    var index, _iterator6, _step6, value;

    return _regeneratorRuntime.wrap(function filterIterable$(_context2) {
        while (1) {
            switch (_context2.prev = _context2.next) {
                case 0:
                    // Use generator to create iterable/iterator
                    index = 0;
                    _iterator6 = _createForOfIteratorHelper(iterable);
                    _context2.prev = 2;

                    _iterator6.s();

                case 4:
                    if ((_step6 = _iterator6.n()).done) {
                        _context2.next = 11;
                        break;
                    }

                    value = _step6.value;

                    if (!predicate(value, index++)) {
                        _context2.next = 9;
                        break;
                    }

                    _context2.next = 9;
                    return value;

                case 9:
                    _context2.next = 4;
                    break;

                case 11:
                    _context2.next = 16;
                    break;

                case 13:
                    _context2.prev = 13;
                    _context2.t0 = _context2["catch"](2);

                    _iterator6.e(_context2.t0);

                case 16:
                    _context2.prev = 16;

                    _iterator6.f();

                    return _context2.finish(16);

                case 19:
                case "end":
                    return _context2.stop();
            }
        }
    }, _marked, null, [
        [2, 13, 16, 19]
    ]);
}

var Recoil_filterIterable = filterIterable;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

var RetentionZone = /*#__PURE__*/ _createClass(function RetentionZone() {
    _classCallCheck(this, RetentionZone);
});

function retentionZone() {
    return new RetentionZone();
}

var Recoil_RetentionZone = {
    RetentionZone: RetentionZone,
    retentionZone: retentionZone
};
var setByAddingToSet$1 = Recoil_CopyOnWrite.setByAddingToSet;
var getNode$1 = Recoil_Node.getNode,
    getNodeMaybe$1 = Recoil_Node.getNodeMaybe,
    recoilValuesForKeys$1 = Recoil_Node.recoilValuesForKeys;
var RetentionZone$1 = Recoil_RetentionZone.RetentionZone; // flowlint-next-line unclear-type:off

var emptySet = Object.freeze(new Set());

var ReadOnlyRecoilValueError = /*#__PURE__*/ function(_Error3) {
    _inherits(ReadOnlyRecoilValueError, _Error3);

    var _super8 = _createSuper(ReadOnlyRecoilValueError);

    function ReadOnlyRecoilValueError() {
        _classCallCheck(this, ReadOnlyRecoilValueError);

        return _super8.apply(this, arguments);
    }

    return _createClass(ReadOnlyRecoilValueError);
}( /*#__PURE__*/ _wrapNativeSuper(Error));

function initializeRetentionForNode(store, nodeKey, retainedBy) {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return function() {
            return undefined;
        };
    }

    var nodesRetainedByZone = store.getState().retention.nodesRetainedByZone;

    function addToZone(zone) {
        var set = nodesRetainedByZone.get(zone);

        if (!set) {
            nodesRetainedByZone.set(zone, set = new Set());
        }

        set.add(nodeKey);
    }

    if (retainedBy instanceof RetentionZone$1) {
        addToZone(retainedBy);
    } else if (Array.isArray(retainedBy)) {
        var _iterator7 = _createForOfIteratorHelper(retainedBy),
            _step7;

        try {
            for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                var zone = _step7.value;
                addToZone(zone);
            }
        } catch (err) {
            _iterator7.e(err);
        } finally {
            _iterator7.f();
        }
    }

    return function() {
        if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
            return;
        }

        var nodesRetainedByZone = store.getState().retention.nodesRetainedByZone;

        function deleteFromZone(zone) {
            var set = nodesRetainedByZone.get(zone);

            if (set) {
                set.delete(nodeKey);
            }

            if (set && set.size === 0) {
                nodesRetainedByZone.delete(zone);
            }
        }

        if (retainedBy instanceof RetentionZone$1) {
            deleteFromZone(retainedBy);
        } else if (Array.isArray(retainedBy)) {
            var _iterator8 = _createForOfIteratorHelper(retainedBy),
                _step8;

            try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                    var _zone = _step8.value;
                    deleteFromZone(_zone);
                }
            } catch (err) {
                _iterator8.e(err);
            } finally {
                _iterator8.f();
            }
        }
    };
}

function initializeNodeIfNewToStore(store, treeState, key, trigger) {
    var storeState = store.getState();

    if (storeState.nodeCleanupFunctions.has(key)) {
        return;
    }

    var config = getNode$1(key);
    var retentionCleanup = initializeRetentionForNode(store, key, config.retainedBy);
    var nodeCleanup = config.init(store, treeState, trigger);
    storeState.nodeCleanupFunctions.set(key, function() {
        nodeCleanup();
        retentionCleanup();
    });
}

function cleanUpNode(store, key) {
    var _state$nodeCleanupFun;

    var state = store.getState();
    (_state$nodeCleanupFun = state.nodeCleanupFunctions.get(key)) === null || _state$nodeCleanupFun === void 0 ? void 0 : _state$nodeCleanupFun();
    state.nodeCleanupFunctions.delete(key);
} // Get the current value loadable of a node and update the state.
// Update dependencies and subscriptions for selectors.
// Update saved value validation for atoms.


function getNodeLoadable(store, state, key) {
    initializeNodeIfNewToStore(store, state, key, 'get');
    return getNode$1(key).get(store, state);
} // Peek at the current value loadable for a node without any evaluation or state change


function peekNodeLoadable(store, state, key) {
    return getNode$1(key).peek(store, state);
} // Write value directly to state bypassing the Node interface as the node
// definitions may not have been loaded yet when processing the initial snapshot.


function setUnvalidatedAtomValue_DEPRECATED(state, key, newValue) {
    var _node$invalidate;

    var node = getNodeMaybe$1(key);
    node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
    return _objectSpread(_objectSpread({}, state), {}, {
        atomValues: state.atomValues.clone().delete(key),
        nonvalidatedAtoms: state.nonvalidatedAtoms.clone().set(key, newValue),
        dirtyAtoms: setByAddingToSet$1(state.dirtyAtoms, key)
    });
} // Return the discovered dependencies and values to be written by setting
// a node value. (Multiple values may be written due to selectors getting to
// set upstreams; deps may be discovered because of reads in updater functions.)


function setNodeValue(store, state, key, newValue) {
    var node = getNode$1(key);

    if (node.set == null) {
        throw new ReadOnlyRecoilValueError("Attempt to set read-only RecoilValue: ".concat(key));
    }

    var set = node.set; // so flow doesn't lose the above refinement.

    initializeNodeIfNewToStore(store, state, key, 'set');
    return set(store, state, newValue);
}

function peekNodeInfo(store, state, key) {
    var _graph$nodeDeps$get, _storeState$nodeToCom, _storeState$nodeToCom2;

    var storeState = store.getState();
    var graph = store.getGraph(state.version);
    var type = storeState.knownAtoms.has(key) ? 'atom' : storeState.knownSelectors.has(key) ? 'selector' : undefined;
    var downstreamNodes = Recoil_filterIterable(getDownstreamNodes(store, state, new Set([key])), function(nodeKey) {
        return nodeKey !== key;
    });
    return {
        loadable: peekNodeLoadable(store, state, key),
        isActive: storeState.knownAtoms.has(key) || storeState.knownSelectors.has(key),
        isSet: type === 'selector' ? false : state.atomValues.has(key),
        isModified: state.dirtyAtoms.has(key),
        type: type,
        // Report current dependencies.  If the node hasn't been evaluated, then
        // dependencies may be missing based on the current state.
        deps: recoilValuesForKeys$1((_graph$nodeDeps$get = graph.nodeDeps.get(key)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : []),
        // Reportsall "current" subscribers.  Evaluating other nodes or
        // previous in-progress async evaluations may introduce new subscribers.
        subscribers: {
            nodes: recoilValuesForKeys$1(downstreamNodes),
            components: Recoil_mapIterable((_storeState$nodeToCom = (_storeState$nodeToCom2 = storeState.nodeToComponentSubscriptions.get(key)) === null || _storeState$nodeToCom2 === void 0 ? void 0 : _storeState$nodeToCom2.values()) !== null && _storeState$nodeToCom !== void 0 ? _storeState$nodeToCom : [], function(_ref3) {
                var _ref4 = _slicedToArray(_ref3, 1),
                    name = _ref4[0];

                return {
                    name: name
                };
            })
        }
    };
} // Find all of the recursively dependent nodes


function getDownstreamNodes(store, state, keys) {
    var visitedNodes = new Set();
    var visitingNodes = Array.from(keys);
    var graph = store.getGraph(state.version);

    for (var key = visitingNodes.pop(); key; key = visitingNodes.pop()) {
        var _graph$nodeToNodeSubs;

        visitedNodes.add(key);
        var subscribedNodes = (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(key)) !== null && _graph$nodeToNodeSubs !== void 0 ? _graph$nodeToNodeSubs : emptySet;

        var _iterator9 = _createForOfIteratorHelper(subscribedNodes),
            _step9;

        try {
            for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var downstreamNode = _step9.value;

                if (!visitedNodes.has(downstreamNode)) {
                    visitingNodes.push(downstreamNode);
                }
            }
        } catch (err) {
            _iterator9.e(err);
        } finally {
            _iterator9.f();
        }
    }

    return visitedNodes;
}

var Recoil_FunctionalCore = {
    getNodeLoadable: getNodeLoadable,
    peekNodeLoadable: peekNodeLoadable,
    setNodeValue: setNodeValue,
    cleanUpNode: cleanUpNode,
    setUnvalidatedAtomValue_DEPRECATED: setUnvalidatedAtomValue_DEPRECATED,
    peekNodeInfo: peekNodeInfo,
    getDownstreamNodes: getDownstreamNodes,
    initializeNodeIfNewToStore: initializeNodeIfNewToStore
};
var getDownstreamNodes$1 = Recoil_FunctionalCore.getDownstreamNodes,
    getNodeLoadable$1 = Recoil_FunctionalCore.getNodeLoadable,
    setNodeValue$1 = Recoil_FunctionalCore.setNodeValue;
var getNodeMaybe$2 = Recoil_Node.getNodeMaybe;
var DefaultValue$1 = Recoil_Node.DefaultValue,
    RecoilValueNotReady$1 = Recoil_Node.RecoilValueNotReady;
var AbstractRecoilValue$1 = Recoil_RecoilValue$1.AbstractRecoilValue,
    RecoilState$1 = Recoil_RecoilValue$1.RecoilState,
    RecoilValueReadOnly$1 = Recoil_RecoilValue$1.RecoilValueReadOnly,
    isRecoilValue$1 = Recoil_RecoilValue$1.isRecoilValue;

function getRecoilValueAsLoadable(store, _ref5) {
    var key = _ref5.key;
    var treeState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : store.getState().currentTree;

    var _storeState$nextTree, _storeState$previousT; // Reading from an older tree can cause bugs because the dependencies that we
    // discover during the read are lost.


    var storeState = store.getState();

    if (!(treeState.version === storeState.currentTree.version || treeState.version === ((_storeState$nextTree = storeState.nextTree) === null || _storeState$nextTree === void 0 ? void 0 : _storeState$nextTree.version) || treeState.version === ((_storeState$previousT = storeState.previousTree) === null || _storeState$previousT === void 0 ? void 0 : _storeState$previousT.version))) {
        Recoil_recoverableViolation('Tried to read from a discarded tree');
    }

    var loadable = getNodeLoadable$1(store, treeState, key);

    if (loadable.state === 'loading') {
        loadable.contents.catch(function() {
            /**
             * HACK: intercept thrown error here to prevent an uncaught promise exception. Ideally this would happen closer to selector
             * execution (perhaps introducing a new ERROR class to be resolved by async selectors that are in an error state)
             */
            return;
        });
    }

    return loadable;
}

function applyAtomValueWrites(atomValues, writes) {
    var result = atomValues.clone();
    writes.forEach(function(v, k) {
        if (v.state === 'hasValue' && v.contents instanceof DefaultValue$1) {
            result.delete(k);
        } else {
            result.set(k, v);
        }
    });
    return result;
}

function valueFromValueOrUpdater(store, state, _ref6, valueOrUpdater) {
    var key = _ref6.key;

    if (typeof valueOrUpdater === 'function') {
        // Updater form: pass in the current value. Throw if the current value
        // is unavailable (namely when updating an async selector that's
        // pending or errored):
        var current = getNodeLoadable$1(store, state, key);

        if (current.state === 'loading') {
            throw new RecoilValueNotReady$1(key);
        } else if (current.state === 'hasError') {
            throw current.contents;
        } // T itself may be a function, so our refinement is not sufficient:


        return valueOrUpdater(current.contents); // flowlint-line unclear-type:off
    } else {
        return valueOrUpdater;
    }
}

function applyAction(store, state, action) {
    if (action.type === 'set') {
        var recoilValue = action.recoilValue,
            valueOrUpdater = action.valueOrUpdater;
        var newValue = valueFromValueOrUpdater(store, state, recoilValue, valueOrUpdater);
        var writes = setNodeValue$1(store, state, recoilValue.key, newValue);

        var _iterator10 = _createForOfIteratorHelper(writes.entries()),
            _step10;

        try {
            for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var _step10$value = _slicedToArray(_step10.value, 2),
                    key = _step10$value[0],
                    loadable = _step10$value[1];

                writeLoadableToTreeState(state, key, loadable);
            }
        } catch (err) {
            _iterator10.e(err);
        } finally {
            _iterator10.f();
        }
    } else if (action.type === 'setLoadable') {
        var _key5 = action.recoilValue.key,
            _loadable = action.loadable;
        writeLoadableToTreeState(state, _key5, _loadable);
    } else if (action.type === 'markModified') {
        var _key6 = action.recoilValue.key;
        state.dirtyAtoms.add(_key6);
    } else if (action.type === 'setUnvalidated') {
        var _node$invalidate; // Write value directly to state bypassing the Node interface as the node
        // definitions may not have been loaded yet when processing the initial snapshot.


        var _key7 = action.recoilValue.key,
            unvalidatedValue = action.unvalidatedValue;
        var node = getNodeMaybe$2(_key7);
        node === null || node === void 0 ? void 0 : (_node$invalidate = node.invalidate) === null || _node$invalidate === void 0 ? void 0 : _node$invalidate.call(node, state);
        state.atomValues.delete(_key7);
        state.nonvalidatedAtoms.set(_key7, unvalidatedValue);
        state.dirtyAtoms.add(_key7);
    } else {
        Recoil_recoverableViolation("Unknown action ".concat(action.type));
    }
}

function writeLoadableToTreeState(state, key, loadable) {
    if (loadable.state === 'hasValue' && loadable.contents instanceof DefaultValue$1) {
        state.atomValues.delete(key);
    } else {
        state.atomValues.set(key, loadable);
    }

    state.dirtyAtoms.add(key);
    state.nonvalidatedAtoms.delete(key);
}

function applyActionsToStore(store, actions) {
    store.replaceState(function(state) {
        var newState = copyTreeState(state);

        var _iterator11 = _createForOfIteratorHelper(actions),
            _step11;

        try {
            for (_iterator11.s(); !(_step11 = _iterator11.n()).done;) {
                var action = _step11.value;
                applyAction(store, newState, action);
            }
        } catch (err) {
            _iterator11.e(err);
        } finally {
            _iterator11.f();
        }

        invalidateDownstreams(store, newState);
        return newState;
    });
}

function queueOrPerformStateUpdate(store, action) {
    if (batchStack.length) {
        var actionsByStore = batchStack[batchStack.length - 1];
        var actions = actionsByStore.get(store);

        if (!actions) {
            actionsByStore.set(store, actions = []);
        }

        actions.push(action);
    } else {
        applyActionsToStore(store, [action]);
    }
}

var batchStack = [];

function batchStart() {
    var actionsByStore = new Map();
    batchStack.push(actionsByStore);
    return function() {
        var _iterator12 = _createForOfIteratorHelper(actionsByStore),
            _step12;

        try {
            for (_iterator12.s(); !(_step12 = _iterator12.n()).done;) {
                var _step12$value = _slicedToArray(_step12.value, 2),
                    store = _step12$value[0],
                    actions = _step12$value[1];

                applyActionsToStore(store, actions);
            }
        } catch (err) {
            _iterator12.e(err);
        } finally {
            _iterator12.f();
        }

        var popped = batchStack.pop();

        if (popped !== actionsByStore) {
            Recoil_recoverableViolation('Incorrect order of batch popping');
        }
    };
}

function copyTreeState(state) {
    return _objectSpread(_objectSpread({}, state), {}, {
        atomValues: state.atomValues.clone(),
        nonvalidatedAtoms: state.nonvalidatedAtoms.clone(),
        dirtyAtoms: new Set(state.dirtyAtoms)
    });
}

function invalidateDownstreams(store, state) {
    // Inform any nodes that were changed or downstream of changes so that they
    // can clear out any caches as needed due to the update:
    var downstreams = getDownstreamNodes$1(store, state, state.dirtyAtoms);

    var _iterator13 = _createForOfIteratorHelper(downstreams),
        _step13;

    try {
        for (_iterator13.s(); !(_step13 = _iterator13.n()).done;) {
            var key = _step13.value;

            var _getNodeMaybe, _getNodeMaybe$invalid;

            (_getNodeMaybe = getNodeMaybe$2(key)) === null || _getNodeMaybe === void 0 ? void 0 : (_getNodeMaybe$invalid = _getNodeMaybe.invalidate) === null || _getNodeMaybe$invalid === void 0 ? void 0 : _getNodeMaybe$invalid.call(_getNodeMaybe, state);
        }
    } catch (err) {
        _iterator13.e(err);
    } finally {
        _iterator13.f();
    }
}

function setRecoilValue(store, recoilValue, valueOrUpdater) {
    queueOrPerformStateUpdate(store, {
        type: 'set',
        recoilValue: recoilValue,
        valueOrUpdater: valueOrUpdater
    });
}

function setRecoilValueLoadable(store, recoilValue, loadable) {
    if (loadable instanceof DefaultValue$1) {
        return setRecoilValue(store, recoilValue, loadable);
    }

    queueOrPerformStateUpdate(store, {
        type: 'setLoadable',
        recoilValue: recoilValue,
        loadable: loadable
    });
}

function markRecoilValueModified(store, recoilValue) {
    queueOrPerformStateUpdate(store, {
        type: 'markModified',
        recoilValue: recoilValue
    });
}

function setUnvalidatedRecoilValue(store, recoilValue, unvalidatedValue) {
    queueOrPerformStateUpdate(store, {
        type: 'setUnvalidated',
        recoilValue: recoilValue,
        unvalidatedValue: unvalidatedValue
    });
}

var subscriptionID = 0;

function subscribeToRecoilValue(store, _ref7, callback) {
    var key = _ref7.key;
    var componentDebugName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var subID = subscriptionID++;
    var storeState = store.getState();

    if (!storeState.nodeToComponentSubscriptions.has(key)) {
        storeState.nodeToComponentSubscriptions.set(key, new Map());
    }

    Recoil_nullthrows(storeState.nodeToComponentSubscriptions.get(key)).set(subID, [componentDebugName !== null && componentDebugName !== void 0 ? componentDebugName : '<not captured>', callback]); // Handle the case that, during the same tick that we are subscribing, an atom
    // has been updated by some effect handler. Otherwise we will miss the update.

    if (Recoil_gkx_1('recoil_early_rendering_2021')) {
        var nextTree = store.getState().nextTree;

        if (nextTree && nextTree.dirtyAtoms.has(key)) {
            callback(nextTree);
        }
    }

    return {
        release: function release() {
            var storeState = store.getState();
            var subs = storeState.nodeToComponentSubscriptions.get(key);

            if (subs === undefined || !subs.has(subID)) {
                Recoil_recoverableViolation("Subscription missing at release time for atom ".concat(key, ". This is a bug in Recoil."));
                return;
            }

            subs.delete(subID);

            if (subs.size === 0) {
                storeState.nodeToComponentSubscriptions.delete(key);
            }
        }
    };
}

var Recoil_RecoilValueInterface = {
    RecoilValueReadOnly: RecoilValueReadOnly$1,
    AbstractRecoilValue: AbstractRecoilValue$1,
    RecoilState: RecoilState$1,
    getRecoilValueAsLoadable: getRecoilValueAsLoadable,
    setRecoilValue: setRecoilValue,
    setRecoilValueLoadable: setRecoilValueLoadable,
    markRecoilValueModified: markRecoilValueModified,
    setUnvalidatedRecoilValue: setUnvalidatedRecoilValue,
    subscribeToRecoilValue: subscribeToRecoilValue,
    isRecoilValue: isRecoilValue$1,
    applyAtomValueWrites: applyAtomValueWrites,
    // TODO Remove export when deprecating initialStoreState_DEPRECATED in RecoilRoot
    batchStart: batchStart,
    writeLoadableToTreeState: writeLoadableToTreeState,
    invalidateDownstreams: invalidateDownstreams,
    copyTreeState: copyTreeState,
    invalidateDownstreams_FOR_TESTING: invalidateDownstreams
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * The someSet() method tests whether some elements in the given Set pass the
 * test implemented by the provided function.
 */

function someSet(set, callback, context) {
    var iterator = set.entries();
    var current = iterator.next();

    while (!current.done) {
        var entry = current.value;

        if (callback.call(context, entry[1], entry[0], set)) {
            return true;
        }

        current = iterator.next();
    }

    return false;
}

var Recoil_someSet = someSet;
var cleanUpNode$1 = Recoil_FunctionalCore.cleanUpNode;
var deleteNodeConfigIfPossible$1 = Recoil_Node.deleteNodeConfigIfPossible,
    getNode$2 = Recoil_Node.getNode;
var RetentionZone$2 = Recoil_RetentionZone.RetentionZone; // Components that aren't mounted after suspending for this long will be assumed
// to be discarded and their resources released.

var SUSPENSE_TIMEOUT_MS = 120000;
var emptySet$1 = new Set();

function releaseRetainablesNowOnCurrentTree(store, retainables) {
    var storeState = store.getState();
    var treeState = storeState.currentTree;

    if (storeState.nextTree) {
        Recoil_recoverableViolation('releaseNodesNowOnCurrentTree should only be called at the end of a batch');
        return; // leak memory rather than erase something that's about to be used.
    }

    var nodes = new Set();

    var _iterator14 = _createForOfIteratorHelper(retainables),
        _step14;

    try {
        for (_iterator14.s(); !(_step14 = _iterator14.n()).done;) {
            var r = _step14.value;

            if (r instanceof RetentionZone$2) {
                var _iterator16 = _createForOfIteratorHelper(nodesRetainedByZone(storeState, r)),
                    _step16;

                try {
                    for (_iterator16.s(); !(_step16 = _iterator16.n()).done;) {
                        var n = _step16.value;
                        nodes.add(n);
                    }
                } catch (err) {
                    _iterator16.e(err);
                } finally {
                    _iterator16.f();
                }
            } else {
                nodes.add(r);
            }
        }
    } catch (err) {
        _iterator14.e(err);
    } finally {
        _iterator14.f();
    }

    var releasableNodes = findReleasableNodes(store, nodes);

    var _iterator15 = _createForOfIteratorHelper(releasableNodes),
        _step15;

    try {
        for (_iterator15.s(); !(_step15 = _iterator15.n()).done;) {
            var node = _step15.value;
            releaseNode(store, treeState, node);
        }
    } catch (err) {
        _iterator15.e(err);
    } finally {
        _iterator15.f();
    }
}

function findReleasableNodes(store, searchFromNodes) {
    var storeState = store.getState();
    var treeState = storeState.currentTree;
    var graph = store.getGraph(treeState.version);
    var releasableNodes = new Set(); // mutated to collect answer

    var nonReleasableNodes = new Set();
    findReleasableNodesInner(searchFromNodes);
    return releasableNodes;

    function findReleasableNodesInner(searchFromNodes) {
        var releasableNodesFoundThisIteration = new Set();
        var downstreams = getDownstreamNodesInTopologicalOrder(store, treeState, searchFromNodes, releasableNodes, // don't descend into these
            nonReleasableNodes // don't descend into these
        ); // Find which of the downstream nodes are releasable and which are not:

        var _iterator17 = _createForOfIteratorHelper(downstreams),
            _step17;

        try {
            for (_iterator17.s(); !(_step17 = _iterator17.n()).done;) {
                var node = _step17.value;

                var _storeState$retention; // Not releasable if configured to be retained forever:


                if (getNode$2(node).retainedBy === 'recoilRoot') {
                    nonReleasableNodes.add(node);
                    continue;
                } // Not releasable if retained directly by a component:


                if (((_storeState$retention = storeState.retention.referenceCounts.get(node)) !== null && _storeState$retention !== void 0 ? _storeState$retention : 0) > 0) {
                    nonReleasableNodes.add(node);
                    continue;
                } // Not releasable if retained by a zone:


                if (zonesThatCouldRetainNode(node).some(function(z) {
                        return storeState.retention.referenceCounts.get(z);
                    })) {
                    nonReleasableNodes.add(node);
                    continue;
                } // Not releasable if it has a non-releasable child (which will already be in
                // nonReleasableNodes because we are going in topological order):


                var nodeChildren = graph.nodeToNodeSubscriptions.get(node);

                if (nodeChildren && Recoil_someSet(nodeChildren, function(child) {
                        return nonReleasableNodes.has(child);
                    })) {
                    nonReleasableNodes.add(node);
                    continue;
                }

                releasableNodes.add(node);
                releasableNodesFoundThisIteration.add(node);
            } // If we found any releasable nodes, we need to walk UP from those nodes to
            // find whether their parents can now be released as well:

        } catch (err) {
            _iterator17.e(err);
        } finally {
            _iterator17.f();
        }

        var parents = new Set();

        var _iterator18 = _createForOfIteratorHelper(releasableNodesFoundThisIteration),
            _step18;

        try {
            for (_iterator18.s(); !(_step18 = _iterator18.n()).done;) {
                var _node = _step18.value;

                var _iterator19 = _createForOfIteratorHelper((_graph$nodeDeps$get = graph.nodeDeps.get(_node)) !== null && _graph$nodeDeps$get !== void 0 ? _graph$nodeDeps$get : emptySet$1),
                    _step19;

                try {
                    for (_iterator19.s(); !(_step19 = _iterator19.n()).done;) {
                        var parent = _step19.value;

                        var _graph$nodeDeps$get;

                        if (!releasableNodes.has(parent)) {
                            parents.add(parent);
                        }
                    }
                } catch (err) {
                    _iterator19.e(err);
                } finally {
                    _iterator19.f();
                }
            }
        } catch (err) {
            _iterator18.e(err);
        } finally {
            _iterator18.f();
        }

        if (parents.size) {
            findReleasableNodesInner(parents);
        }
    }
} // Children before parents


function getDownstreamNodesInTopologicalOrder(store, treeState, nodes, // Mutable set is destroyed in place
    doNotDescendInto1, doNotDescendInto2) {
    var graph = store.getGraph(treeState.version);
    var answer = [];
    var visited = new Set();

    while (nodes.size > 0) {
        visit(Recoil_nullthrows(nodes.values().next().value));
    }

    return answer;

    function visit(node) {
        if (doNotDescendInto1.has(node) || doNotDescendInto2.has(node)) {
            nodes.delete(node);
            return;
        }

        if (visited.has(node)) {
            return;
        }

        var children = graph.nodeToNodeSubscriptions.get(node);

        if (children) {
            var _iterator20 = _createForOfIteratorHelper(children),
                _step20;

            try {
                for (_iterator20.s(); !(_step20 = _iterator20.n()).done;) {
                    var child = _step20.value;
                    visit(child);
                }
            } catch (err) {
                _iterator20.e(err);
            } finally {
                _iterator20.f();
            }
        }

        visited.add(node);
        nodes.delete(node);
        answer.push(node);
    }
}

function releaseNode(store, treeState, node) {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return;
    } // Atom effects, in-closure caches, etc.:


    cleanUpNode$1(store, node); // Delete from store state:

    var storeState = store.getState();
    storeState.knownAtoms.delete(node);
    storeState.knownSelectors.delete(node);
    storeState.nodeTransactionSubscriptions.delete(node);
    storeState.retention.referenceCounts.delete(node);
    var zones = zonesThatCouldRetainNode(node);

    var _iterator21 = _createForOfIteratorHelper(zones),
        _step21;

    try {
        for (_iterator21.s(); !(_step21 = _iterator21.n()).done;) {
            var zone = _step21.value;

            var _storeState$retention2;

            (_storeState$retention2 = storeState.retention.nodesRetainedByZone.get(zone)) === null || _storeState$retention2 === void 0 ? void 0 : _storeState$retention2.delete(node);
        } // Note that we DO NOT delete from nodeToComponentSubscriptions because this
        // already happens when the last component that was retaining the node unmounts,
        // and this could happen either before or after that.
        // Delete from TreeState and dep graph:

    } catch (err) {
        _iterator21.e(err);
    } finally {
        _iterator21.f();
    }

    treeState.atomValues.delete(node);
    treeState.dirtyAtoms.delete(node);
    treeState.nonvalidatedAtoms.delete(node);
    var graph = storeState.graphsByVersion.get(treeState.version);

    if (graph) {
        var deps = graph.nodeDeps.get(node);

        if (deps !== undefined) {
            graph.nodeDeps.delete(node);

            var _iterator22 = _createForOfIteratorHelper(deps),
                _step22;

            try {
                for (_iterator22.s(); !(_step22 = _iterator22.n()).done;) {
                    var dep = _step22.value;

                    var _graph$nodeToNodeSubs;

                    (_graph$nodeToNodeSubs = graph.nodeToNodeSubscriptions.get(dep)) === null || _graph$nodeToNodeSubs === void 0 ? void 0 : _graph$nodeToNodeSubs.delete(node);
                }
            } catch (err) {
                _iterator22.e(err);
            } finally {
                _iterator22.f();
            }
        } // No need to delete sub's deps as there should be no subs at this point.
        // But an invariant would require deleting nodes in topological order.


        graph.nodeToNodeSubscriptions.delete(node);
    } // Node config (for family members only as their configs can be recreated, and
    // only if they are not retained within any other Stores):


    deleteNodeConfigIfPossible$1(node);
}

function nodesRetainedByZone(storeState, zone) {
    var _storeState$retention3;

    return (_storeState$retention3 = storeState.retention.nodesRetainedByZone.get(zone)) !== null && _storeState$retention3 !== void 0 ? _storeState$retention3 : emptySet$1;
}

function zonesThatCouldRetainNode(node) {
    var retainedBy = getNode$2(node).retainedBy;

    if (retainedBy === undefined || retainedBy === 'components' || retainedBy === 'recoilRoot') {
        return [];
    } else if (retainedBy instanceof RetentionZone$2) {
        return [retainedBy];
    } else {
        return retainedBy; // it's an array of zones
    }
}

function scheduleOrPerformPossibleReleaseOfRetainable(store, retainable) {
    var state = store.getState();

    if (state.nextTree) {
        state.retention.retainablesToCheckForRelease.add(retainable);
    } else {
        releaseRetainablesNowOnCurrentTree(store, new Set([retainable]));
    }
}

function updateRetainCount(store, retainable, delta) {
    var _map$get;

    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return;
    }

    var map = store.getState().retention.referenceCounts;
    var newCount = ((_map$get = map.get(retainable)) !== null && _map$get !== void 0 ? _map$get : 0) + delta;

    if (newCount === 0) {
        updateRetainCountToZero(store, retainable);
    } else {
        map.set(retainable, newCount);
    }
}

function updateRetainCountToZero(store, retainable) {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return;
    }

    var map = store.getState().retention.referenceCounts;
    map.delete(retainable);
    scheduleOrPerformPossibleReleaseOfRetainable(store, retainable);
}

function releaseScheduledRetainablesNow(store) {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return;
    }

    var state = store.getState();
    releaseRetainablesNowOnCurrentTree(store, state.retention.retainablesToCheckForRelease);
    state.retention.retainablesToCheckForRelease.clear();
}

function retainedByOptionWithDefault(r) {
    // The default will change from 'recoilRoot' to 'components' in the future.
    return r === undefined ? 'recoilRoot' : r;
}

var Recoil_Retention = {
    SUSPENSE_TIMEOUT_MS: SUSPENSE_TIMEOUT_MS,
    updateRetainCount: updateRetainCount,
    updateRetainCountToZero: updateRetainCountToZero,
    releaseScheduledRetainablesNow: releaseScheduledRetainablesNow,
    retainedByOptionWithDefault: retainedByOptionWithDefault
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Combines multiple Iterables into a single Iterable.
 * Traverses the input Iterables in the order provided and maintains the order
 * of their elements.
 *
 * Example:
 * ```
 * const r = Array.from(concatIterables(['a', 'b'], ['c'], ['d', 'e', 'f']));
 * r == ['a', 'b', 'c', 'd', 'e', 'f'];
 * ```
 */

function concatIterables(iters) {
    var _iterator23, _step23, iter, _iterator24, _step24, val;

    return _regeneratorRuntime.wrap(function concatIterables$(_context3) {
        while (1) {
            switch (_context3.prev = _context3.next) {
                case 0:
                    _iterator23 = _createForOfIteratorHelper(iters);
                    _context3.prev = 1;

                    _iterator23.s();

                case 3:
                    if ((_step23 = _iterator23.n()).done) {
                        _context3.next = 24;
                        break;
                    }

                    iter = _step23.value;
                    _iterator24 = _createForOfIteratorHelper(iter);
                    _context3.prev = 6;

                    _iterator24.s();

                case 8:
                    if ((_step24 = _iterator24.n()).done) {
                        _context3.next = 14;
                        break;
                    }

                    val = _step24.value;
                    _context3.next = 12;
                    return val;

                case 12:
                    _context3.next = 8;
                    break;

                case 14:
                    _context3.next = 19;
                    break;

                case 16:
                    _context3.prev = 16;
                    _context3.t0 = _context3["catch"](6);

                    _iterator24.e(_context3.t0);

                case 19:
                    _context3.prev = 19;

                    _iterator24.f();

                    return _context3.finish(19);

                case 22:
                    _context3.next = 3;
                    break;

                case 24:
                    _context3.next = 29;
                    break;

                case 26:
                    _context3.prev = 26;
                    _context3.t1 = _context3["catch"](1);

                    _iterator23.e(_context3.t1);

                case 29:
                    _context3.prev = 29;

                    _iterator23.f();

                    return _context3.finish(29);

                case 32:
                case "end":
                    return _context3.stop();
            }
        }
    }, _marked2, null, [
        [1, 26, 29, 32],
        [6, 16, 19, 22]
    ]);
}

var Recoil_concatIterables = concatIterables;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

var isSSR = typeof window === 'undefined';
var isReactNative = typeof navigator !== 'undefined' && navigator.product === 'ReactNative'; // eslint-disable-line fb-www/typeof-undefined

var Recoil_Environment = {
    isSSR: isSSR,
    isReactNative: isReactNative
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */

var unstable_batchedUpdates = reactDom.unstable_batchedUpdates;
var ReactBatchedUpdates = {
    unstable_batchedUpdates: unstable_batchedUpdates
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is to export esstiential functions from react-dom
 * for our web build
 */
// @fb-only: const {unstable_batchedUpdates} = require('ReactDOMComet');
// prettier-ignore

var unstable_batchedUpdates$1 = ReactBatchedUpdates.unstable_batchedUpdates; // @oss-only

var Recoil_ReactBatchedUpdates = {
    unstable_batchedUpdates: unstable_batchedUpdates$1
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

var batchStart$1 = Recoil_RecoilValueInterface.batchStart;
var unstable_batchedUpdates$2 = Recoil_ReactBatchedUpdates.unstable_batchedUpdates;
var batcher = unstable_batchedUpdates$2; // flowlint-next-line unclear-type:off

/**
 * Sets the provided batcher function as the batcher function used by Recoil.
 *
 * Set the batcher to a custom batcher for your renderer,
 * if you use a renderer other than React DOM or React Native.
 */

var setBatcher = function setBatcher(newBatcher) {
    batcher = newBatcher;
};
/**
 * Returns the current batcher function.
 */


var getBatcher = function getBatcher() {
    return batcher;
};
/**
 * Calls the current batcher function and passes the
 * provided callback function.
 */


var batchUpdates = function batchUpdates(callback) {
    batcher(function() {
        var batchEnd = function batchEnd() {
            return undefined;
        };

        try {
            batchEnd = batchStart$1();
            callback();
        } finally {
            batchEnd();
        }
    });
};

var Recoil_Batching = {
    getBatcher: getBatcher,
    setBatcher: setBatcher,
    batchUpdates: batchUpdates
};
var isSSR$1 = Recoil_Environment.isSSR;
var batchUpdates$1 = Recoil_Batching.batchUpdates;
var initializeNodeIfNewToStore$1 = Recoil_FunctionalCore.initializeNodeIfNewToStore,
    peekNodeInfo$1 = Recoil_FunctionalCore.peekNodeInfo;
var graph$2 = Recoil_Graph.graph;
var DEFAULT_VALUE$1 = Recoil_Node.DEFAULT_VALUE,
    recoilValues$1 = Recoil_Node.recoilValues,
    recoilValuesForKeys$2 = Recoil_Node.recoilValuesForKeys;
var AbstractRecoilValue$2 = Recoil_RecoilValueInterface.AbstractRecoilValue,
    getRecoilValueAsLoadable$1 = Recoil_RecoilValueInterface.getRecoilValueAsLoadable,
    setRecoilValue$1 = Recoil_RecoilValueInterface.setRecoilValue,
    setUnvalidatedRecoilValue$1 = Recoil_RecoilValueInterface.setUnvalidatedRecoilValue;
var updateRetainCount$1 = Recoil_Retention.updateRetainCount;
var getNextTreeStateVersion$1 = Recoil_State.getNextTreeStateVersion,
    makeEmptyStoreState$1 = Recoil_State.makeEmptyStoreState; // Opaque at this surface because it's part of the public API from here.

var retainWarning = "\nRecoil Snapshots only last for the duration of the callback they are provided to. To keep a Snapshot longer, do this:\n\n  const release = snapshot.retain();\n  try {\n    await useTheSnapshotAsynchronously(snapshot);\n  } finally {\n    release();\n  }\n\nThis is currently a DEV-only warning but will become a thrown exception in the next release of Recoil.\n"; // A "Snapshot" is "read-only" and captures a specific set of values of atoms.
// However, the data-flow-graph and selector values may evolve as selector
// evaluation functions are executed and async selectors resolve.

var Snapshot = /*#__PURE__*/ function() {
    function Snapshot(storeState) {
        var _this6 = this;

        _classCallCheck(this, Snapshot);

        _defineProperty(this, "_store", void 0);

        _defineProperty(this, "_refCount", 0);

        _defineProperty(this, "getLoadable", function(recoilValue) {
            _this6.checkRefCount_INTERNAL();

            return getRecoilValueAsLoadable$1(_this6._store, recoilValue);
        });

        _defineProperty(this, "getPromise", function(recoilValue) {
            _this6.checkRefCount_INTERNAL();

            return _this6.getLoadable(recoilValue).toPromise();
        });

        _defineProperty(this, "getNodes_UNSTABLE", function(opt) {
            _this6.checkRefCount_INTERNAL(); // TODO Deal with modified selectors


            if ((opt === null || opt === void 0 ? void 0 : opt.isModified) === true) {
                if ((opt === null || opt === void 0 ? void 0 : opt.isInitialized) === false) {
                    return [];
                }

                var state = _this6._store.getState().currentTree;

                return recoilValuesForKeys$2(state.dirtyAtoms);
            }

            var knownAtoms = _this6._store.getState().knownAtoms;

            var knownSelectors = _this6._store.getState().knownSelectors;

            return (opt === null || opt === void 0 ? void 0 : opt.isInitialized) == null ? recoilValues$1.values() : opt.isInitialized === true ? recoilValuesForKeys$2(Recoil_concatIterables([_this6._store.getState().knownAtoms, _this6._store.getState().knownSelectors])) : Recoil_filterIterable(recoilValues$1.values(), function(_ref8) {
                var key = _ref8.key;
                return !knownAtoms.has(key) && !knownSelectors.has(key);
            });
        });

        _defineProperty(this, "getInfo_UNSTABLE", function(_ref9) {
            var key = _ref9.key;

            _this6.checkRefCount_INTERNAL();

            return peekNodeInfo$1(_this6._store, _this6._store.getState().currentTree, key);
        });

        _defineProperty(this, "map", function(mapper) {
            _this6.checkRefCount_INTERNAL();

            var mutableSnapshot = new MutableSnapshot(_this6, batchUpdates$1);
            mapper(mutableSnapshot); // if removing batchUpdates from `set` add it here

            return cloneSnapshot(mutableSnapshot.getStore_INTERNAL());
        });

        _defineProperty(this, "asyncMap", /*#__PURE__*/ function() {
            var _ref10 = _asyncToGenerator( /*#__PURE__*/ _regeneratorRuntime.mark(function _callee2(mapper) {
                var mutableSnapshot;
                return _regeneratorRuntime.wrap(function _callee2$(_context4) {
                    while (1) {
                        switch (_context4.prev = _context4.next) {
                            case 0:
                                _this6.checkRefCount_INTERNAL();

                                mutableSnapshot = new MutableSnapshot(_this6, batchUpdates$1);
                                _context4.next = 4;
                                return mapper(mutableSnapshot);

                            case 4:
                                return _context4.abrupt("return", cloneSnapshot(mutableSnapshot.getStore_INTERNAL()));

                            case 5:
                            case "end":
                                return _context4.stop();
                        }
                    }
                }, _callee2);
            }));

            return function(_x) {
                return _ref10.apply(this, arguments);
            };
        }());

        this._store = {
            getState: function getState() {
                return storeState;
            },
            replaceState: function replaceState(replacer) {
                storeState.currentTree = replacer(storeState.currentTree); // no batching so nextTree is never active
            },
            getGraph: function getGraph(version) {
                var graphs = storeState.graphsByVersion;

                if (graphs.has(version)) {
                    return Recoil_nullthrows(graphs.get(version));
                }

                var newGraph = graph$2();
                graphs.set(version, newGraph);
                return newGraph;
            },
            subscribeToTransactions: function subscribeToTransactions() {
                return {
                    release: function release() {}
                };
            },
            addTransactionMetadata: function addTransactionMetadata() {
                throw Recoil_err('Cannot subscribe to Snapshots');
            }
        }; // Initialize any nodes that are live in the parent store (primarily so that this
        // snapshot gets counted towards the node's live stores count).

        var _iterator25 = _createForOfIteratorHelper(this._store.getState().nodeCleanupFunctions.keys()),
            _step25;

        try {
            for (_iterator25.s(); !(_step25 = _iterator25.n()).done;) {
                var nodeKey = _step25.value;
                initializeNodeIfNewToStore$1(this._store, storeState.currentTree, nodeKey, 'get');
                updateRetainCount$1(this._store, nodeKey, 1);
            }
        } catch (err) {
            _iterator25.e(err);
        } finally {
            _iterator25.f();
        }

        this.retain();
        this.autorelease_INTERNAL();
    }

    _createClass(Snapshot, [{
        key: "retain",
        value: function retain() {
            var _this7 = this;

            if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
                return function() {
                    return undefined;
                };
            }

            this._refCount++;
            var released = false;
            return function() {
                if (!released) {
                    released = true;

                    _this7.release_INTERNAL();
                }
            };
        }
    }, {
        key: "autorelease_INTERNAL",
        value: function autorelease_INTERNAL() {
            var _this8 = this;

            if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
                return;
            }

            if (!isSSR$1) {
                window.setTimeout(function() {
                    return _this8.release_INTERNAL();
                }, 0);
            }
        }
    }, {
        key: "release_INTERNAL",
        value: function release_INTERNAL() {
            if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
                return;
            }

            this._refCount--;
            if (this._refCount === 0);
        }
    }, {
        key: "checkRefCount_INTERNAL",
        value: function checkRefCount_INTERNAL() {
            if (Recoil_gkx_1('recoil_memory_managament_2020') && this._refCount <= 0) {
                if (process.env.NODE_ENV !== "production") {
                    Recoil_recoverableViolation(retainWarning);
                } // What we will ship later:
                // throw err(retainWarning);

            }
        }
    }, {
        key: "getStore_INTERNAL",
        value: function getStore_INTERNAL() {
            this.checkRefCount_INTERNAL();
            return this._store;
        }
    }, {
        key: "getID",
        value: function getID() {
            this.checkRefCount_INTERNAL();
            return this.getID_INTERNAL();
        }
    }, {
        key: "getID_INTERNAL",
        value: function getID_INTERNAL() {
                this.checkRefCount_INTERNAL();
                return this._store.getState().currentTree.stateID;
            } // We want to allow the methods to be destructured and used as accessors
            // eslint-disable-next-line fb-www/extra-arrow-initializer

    }]);

    return Snapshot;
}();

function cloneStoreState(store, treeState) {
    var bumpVersion = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var storeState = store.getState();
    var version = bumpVersion ? getNextTreeStateVersion$1() : treeState.version;
    return {
        currentTree: bumpVersion ? {
            // TODO snapshots shouldn't really have versions because a new version number
            // is always assigned when the snapshot is gone to.
            version: version,
            stateID: version,
            transactionMetadata: _objectSpread({}, treeState.transactionMetadata),
            dirtyAtoms: new Set(treeState.dirtyAtoms),
            atomValues: treeState.atomValues.clone(),
            nonvalidatedAtoms: treeState.nonvalidatedAtoms.clone()
        } : treeState,
        commitDepth: 0,
        nextTree: null,
        previousTree: null,
        knownAtoms: new Set(storeState.knownAtoms),
        // FIXME here's a copy
        knownSelectors: new Set(storeState.knownSelectors),
        // FIXME here's a copy
        transactionSubscriptions: new Map(),
        nodeTransactionSubscriptions: new Map(),
        nodeToComponentSubscriptions: new Map(),
        queuedComponentCallbacks_DEPRECATED: [],
        suspendedComponentResolvers: new Set(),
        graphsByVersion: new Map().set(version, store.getGraph(treeState.version)),
        versionsUsedByComponent: new Map(),
        retention: {
            referenceCounts: new Map(),
            nodesRetainedByZone: new Map(),
            retainablesToCheckForRelease: new Set()
        },
        nodeCleanupFunctions: new Map()
    };
} // Factory to build a fresh snapshot


function freshSnapshot(initializeState) {
    var snapshot = new Snapshot(makeEmptyStoreState$1());
    return initializeState != null ? snapshot.map(initializeState) : snapshot;
} // Factory to clone a snapahot state


function cloneSnapshot(store) {
    var version = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'current';
    var storeState = store.getState();
    var treeState = version === 'current' ? storeState.currentTree : Recoil_nullthrows(storeState.previousTree);
    return new Snapshot(cloneStoreState(store, treeState));
}

var MutableSnapshot = /*#__PURE__*/ function(_Snapshot) {
    _inherits(MutableSnapshot, _Snapshot);

    var _super9 = _createSuper(MutableSnapshot);

    function MutableSnapshot(snapshot, batch) {
        var _this9;

        _classCallCheck(this, MutableSnapshot);

        _this9 = _super9.call(this, cloneStoreState(snapshot.getStore_INTERNAL(), snapshot.getStore_INTERNAL().getState().currentTree, true));

        _defineProperty(_assertThisInitialized(_this9), "_batch", void 0);

        _defineProperty(_assertThisInitialized(_this9), "set", function(recoilState, newValueOrUpdater) {
            _this9.checkRefCount_INTERNAL();

            var store = _this9.getStore_INTERNAL(); // This batchUpdates ensures this `set` is applied immediately and you can
            // read the written value after calling `set`. I would like to remove this
            // behavior and only batch in `Snapshot.map`, but this would be a breaking
            // change potentially.


            _this9._batch(function() {
                updateRetainCount$1(store, recoilState.key, 1);
                setRecoilValue$1(_this9.getStore_INTERNAL(), recoilState, newValueOrUpdater);
            });
        });

        _defineProperty(_assertThisInitialized(_this9), "reset", function(recoilState) {
            _this9.checkRefCount_INTERNAL();

            var store = _this9.getStore_INTERNAL(); // See note at `set` about batched updates.


            _this9._batch(function() {
                updateRetainCount$1(store, recoilState.key, 1);
                setRecoilValue$1(_this9.getStore_INTERNAL(), recoilState, DEFAULT_VALUE$1);
            });
        });

        _defineProperty(_assertThisInitialized(_this9), "setUnvalidatedAtomValues_DEPRECATED", function(values) {
            _this9.checkRefCount_INTERNAL();

            var store = _this9.getStore_INTERNAL(); // See note at `set` about batched updates.


            batchUpdates$1(function() {
                var _iterator26 = _createForOfIteratorHelper(values.entries()),
                    _step26;

                try {
                    for (_iterator26.s(); !(_step26 = _iterator26.n()).done;) {
                        var _step26$value = _slicedToArray(_step26.value, 2),
                            k = _step26$value[0],
                            v = _step26$value[1];

                        updateRetainCount$1(store, k, 1);
                        setUnvalidatedRecoilValue$1(store, new AbstractRecoilValue$2(k), v);
                    }
                } catch (err) {
                    _iterator26.e(err);
                } finally {
                    _iterator26.f();
                }
            });
        });

        _this9._batch = batch;
        return _this9;
    } // We want to allow the methods to be destructured and used as accessors
    // eslint-disable-next-line fb-www/extra-arrow-initializer


    return _createClass(MutableSnapshot);
}(Snapshot);

var Recoil_Snapshot = {
    Snapshot: Snapshot,
    MutableSnapshot: MutableSnapshot,
    freshSnapshot: freshSnapshot,
    cloneSnapshot: cloneSnapshot
};
var Recoil_Snapshot_1 = Recoil_Snapshot.Snapshot;
var Recoil_Snapshot_2 = Recoil_Snapshot.MutableSnapshot;
var Recoil_Snapshot_3 = Recoil_Snapshot.freshSnapshot;
var Recoil_Snapshot_4 = Recoil_Snapshot.cloneSnapshot;
var Recoil_Snapshot$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    Snapshot: Recoil_Snapshot_1,
    MutableSnapshot: Recoil_Snapshot_2,
    freshSnapshot: Recoil_Snapshot_3,
    cloneSnapshot: Recoil_Snapshot_4
}); // @fb-only: const RecoilusagelogEvent = require('RecoilusagelogEvent');
// @fb-only: const RecoilUsageLogFalcoEvent = require('RecoilUsageLogFalcoEvent');
// @fb-only: const URI = require('URI');

var getNextTreeStateVersion$2 = Recoil_State.getNextTreeStateVersion,
    makeEmptyStoreState$2 = Recoil_State.makeEmptyStoreState;
var cleanUpNode$2 = Recoil_FunctionalCore.cleanUpNode,
    getDownstreamNodes$2 = Recoil_FunctionalCore.getDownstreamNodes,
    setNodeValue$2 = Recoil_FunctionalCore.setNodeValue,
    setUnvalidatedAtomValue_DEPRECATED$1 = Recoil_FunctionalCore.setUnvalidatedAtomValue_DEPRECATED;
var graph$3 = Recoil_Graph.graph;
var cloneGraph$1 = Recoil_Graph.cloneGraph;
var applyAtomValueWrites$1 = Recoil_RecoilValueInterface.applyAtomValueWrites;
var releaseScheduledRetainablesNow$1 = Recoil_Retention.releaseScheduledRetainablesNow;
var freshSnapshot$1 = Recoil_Snapshot$1.freshSnapshot;
var useCallback = react.useCallback,
    useContext = react.useContext,
    useEffect = react.useEffect,
    useMemo = react.useMemo,
    useRef = react.useRef,
    useState = react.useState;

function notInAContext() {
    throw Recoil_err('This component must be used inside a <RecoilRoot> component.');
}

var defaultStore = Object.freeze({
    getState: notInAContext,
    replaceState: notInAContext,
    getGraph: notInAContext,
    subscribeToTransactions: notInAContext,
    addTransactionMetadata: notInAContext
});
var stateReplacerIsBeingExecuted = false;

function startNextTreeIfNeeded(store) {
    if (stateReplacerIsBeingExecuted) {
        throw Recoil_err('An atom update was triggered within the execution of a state updater function. State updater functions provided to Recoil must be pure functions.');
    }

    var storeState = store.getState();

    if (storeState.nextTree === null) {
        if (Recoil_gkx_1('recoil_memory_managament_2020') && Recoil_gkx_1('recoil_release_on_cascading_update_killswitch_2021')) {
            // If this is a cascading update (that is, rendering due to one state change
            // invokes a second state change), we won't have cleaned up retainables yet
            // because this normally happens after notifying components. Do it before
            // proceeding with the cascading update so that it remains predictable:
            if (storeState.commitDepth > 0) {
                releaseScheduledRetainablesNow$1(store);
            }
        }

        var version = storeState.currentTree.version;
        var nextVersion = getNextTreeStateVersion$2();
        storeState.nextTree = _objectSpread(_objectSpread({}, storeState.currentTree), {}, {
            version: nextVersion,
            stateID: nextVersion,
            dirtyAtoms: new Set(),
            transactionMetadata: {}
        });
        storeState.graphsByVersion.set(nextVersion, cloneGraph$1(Recoil_nullthrows(storeState.graphsByVersion.get(version))));
    }
}

var AppContext = react.createContext({
    current: defaultStore
});

var useStoreRef = function useStoreRef() {
    return useContext(AppContext);
};

var MutableSourceContext = react.createContext(null); // TODO T2710559282599660

function useRecoilMutableSource() {
    var mutableSource = useContext(MutableSourceContext);

    if (mutableSource == null) {
        Recoil_expectationViolation('Attempted to use a Recoil hook outside of a <RecoilRoot>. ' + '<RecoilRoot> must be an ancestor of any component that uses ' + 'Recoil hooks.');
    }

    return mutableSource;
}

function notifyComponents(store, storeState, treeState) {
    var dependentNodes = getDownstreamNodes$2(store, treeState, treeState.dirtyAtoms);

    var _iterator27 = _createForOfIteratorHelper(dependentNodes),
        _step27;

    try {
        for (_iterator27.s(); !(_step27 = _iterator27.n()).done;) {
            var key = _step27.value;
            var comps = storeState.nodeToComponentSubscriptions.get(key);

            if (comps) {
                var _iterator28 = _createForOfIteratorHelper(comps),
                    _step28;

                try {
                    for (_iterator28.s(); !(_step28 = _iterator28.n()).done;) {
                        var _step28$value = _slicedToArray(_step28.value, 2),
                            _subID = _step28$value[0],
                            _step28$value$ = _slicedToArray(_step28$value[1], 2),
                            _debugName = _step28$value$[0],
                            callback = _step28$value$[1];

                        callback(treeState);
                    }
                } catch (err) {
                    _iterator28.e(err);
                } finally {
                    _iterator28.f();
                }
            }
        }
    } catch (err) {
        _iterator27.e(err);
    } finally {
        _iterator27.f();
    }
}

function sendEndOfBatchNotifications(store) {
    var storeState = store.getState();
    var treeState = storeState.currentTree; // Inform transaction subscribers of the transaction:

    var dirtyAtoms = treeState.dirtyAtoms;

    if (dirtyAtoms.size) {
        // Execute Node-specific subscribers before global subscribers
        var _iterator29 = _createForOfIteratorHelper(storeState.nodeTransactionSubscriptions),
            _step29;

        try {
            for (_iterator29.s(); !(_step29 = _iterator29.n()).done;) {
                var _step29$value = _slicedToArray(_step29.value, 2),
                    key = _step29$value[0],
                    subscriptions = _step29$value[1];

                if (dirtyAtoms.has(key)) {
                    var _iterator31 = _createForOfIteratorHelper(subscriptions),
                        _step31;

                    try {
                        for (_iterator31.s(); !(_step31 = _iterator31.n()).done;) {
                            var _step31$value = _slicedToArray(_step31.value, 2),
                                _ = _step31$value[0],
                                subscription = _step31$value[1];

                            subscription(store);
                        }
                    } catch (err) {
                        _iterator31.e(err);
                    } finally {
                        _iterator31.f();
                    }
                }
            }
        } catch (err) {
            _iterator29.e(err);
        } finally {
            _iterator29.f();
        }

        var _iterator30 = _createForOfIteratorHelper(storeState.transactionSubscriptions),
            _step30;

        try {
            for (_iterator30.s(); !(_step30 = _iterator30.n()).done;) {
                var _step30$value = _slicedToArray(_step30.value, 2),
                    _2 = _step30$value[0],
                    _subscription = _step30$value[1];

                _subscription(store);
            }
        } catch (err) {
            _iterator30.e(err);
        } finally {
            _iterator30.f();
        }

        if (!Recoil_gkx_1('recoil_early_rendering_2021') || storeState.suspendedComponentResolvers.size) {
            // Notifying components is needed to wake from suspense, even when using
            // early rendering.
            notifyComponents(store, storeState, treeState); // Wake all suspended components so the right one(s) can try to re-render.
            // We need to wake up components not just when some asynchronous selector
            // resolved, but also when changing synchronous values because this may cause
            // a selector to change from asynchronous to synchronous, in which case there
            // would be no follow-up asynchronous resolution to wake us up.
            // TODO OPTIMIZATION Only wake up related downstream components

            storeState.suspendedComponentResolvers.forEach(function(cb) {
                return cb();
            });
            storeState.suspendedComponentResolvers.clear();
        }
    } // Special behavior ONLY invoked by useInterface.
    // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.


    storeState.queuedComponentCallbacks_DEPRECATED.forEach(function(cb) {
        return cb(treeState);
    });
    storeState.queuedComponentCallbacks_DEPRECATED.splice(0, storeState.queuedComponentCallbacks_DEPRECATED.length);
}

function endBatch(storeRef) {
    var storeState = storeRef.current.getState();
    storeState.commitDepth++;

    try {
        var nextTree = storeState.nextTree; // Ignore commits that are not because of Recoil transactions -- namely,
        // because something above RecoilRoot re-rendered:

        if (nextTree === null) {
            return;
        } // nextTree is now committed -- note that copying and reset occurs when
        // a transaction begins, in startNextTreeIfNeeded:


        storeState.previousTree = storeState.currentTree;
        storeState.currentTree = nextTree;
        storeState.nextTree = null;
        sendEndOfBatchNotifications(storeRef.current);

        if (storeState.previousTree != null) {
            storeState.graphsByVersion.delete(storeState.previousTree.version);
        } else {
            Recoil_recoverableViolation('Ended batch with no previous state, which is unexpected', 'recoil');
        }

        storeState.previousTree = null;

        if (Recoil_gkx_1('recoil_memory_managament_2020')) {
            releaseScheduledRetainablesNow$1(storeRef.current);
        }
    } finally {
        storeState.commitDepth--;
    }
}
/*
 * The purpose of the Batcher is to observe when React batches end so that
 * Recoil state changes can be batched. Whenever Recoil state changes, we call
 * setState on the batcher. Then we wait for that change to be committed, which
 * signifies the end of the batch. That's when we respond to the Recoil change.
 */


function Batcher(_ref11) {
    var setNotifyBatcherOfChange = _ref11.setNotifyBatcherOfChange;
    var storeRef = useStoreRef();

    var _useState = useState([]),
        _useState2 = _slicedToArray(_useState, 2),
        _ = _useState2[0],
        setState = _useState2[1];

    setNotifyBatcherOfChange(function() {
        return setState({});
    });
    useEffect(function() {
        // enqueueExecution runs this function immediately; it is only used to
        // manipulate the order of useEffects during tests, since React seems to
        // call useEffect in an unpredictable order sometimes.
        Recoil_Queue.enqueueExecution('Batcher', function() {
            endBatch(storeRef);
        });
    }); // If an asynchronous selector resolves after the Batcher is unmounted,
    // notifyBatcherOfChange will still be called. An error gets thrown whenever
    // setState is called after a component is already unmounted, so this sets
    // notifyBatcherOfChange to be a no-op.

    useEffect(function() {
        return function() {
            setNotifyBatcherOfChange(function() {});
        };
    }, [setNotifyBatcherOfChange]);
    return null;
}

if (process.env.NODE_ENV !== "production") {
    if (typeof window !== 'undefined' && !window.$recoilDebugStates) {
        window.$recoilDebugStates = [];
    }
} // When removing this deprecated function, remove stateBySettingRecoilValue
// which will no longer be needed.


function initialStoreState_DEPRECATED(store, initializeState) {
    var initial = makeEmptyStoreState$2();
    initializeState({
        // $FlowFixMe[escaped-generic]
        set: function set(atom, value) {
            var state = initial.currentTree;
            var writes = setNodeValue$2(store, state, atom.key, value);
            var writtenNodes = new Set(writes.keys());
            var nonvalidatedAtoms = state.nonvalidatedAtoms.clone();

            var _iterator32 = _createForOfIteratorHelper(writtenNodes),
                _step32;

            try {
                for (_iterator32.s(); !(_step32 = _iterator32.n()).done;) {
                    var n = _step32.value;
                    nonvalidatedAtoms.delete(n);
                }
            } catch (err) {
                _iterator32.e(err);
            } finally {
                _iterator32.f();
            }

            initial.currentTree = _objectSpread(_objectSpread({}, state), {}, {
                dirtyAtoms: Recoil_unionSets(state.dirtyAtoms, writtenNodes),
                atomValues: applyAtomValueWrites$1(state.atomValues, writes),
                // NB: PLEASE un-export applyAtomValueWrites when deleting this code
                nonvalidatedAtoms: nonvalidatedAtoms
            });
        },
        setUnvalidatedAtomValues: function setUnvalidatedAtomValues(atomValues) {
            // FIXME replace this with a mutative loop
            atomValues.forEach(function(v, k) {
                initial.currentTree = setUnvalidatedAtomValue_DEPRECATED$1(initial.currentTree, k, v);
            });
        }
    });
    return initial;
}

function initialStoreState(initializeState) {
    var snapshot = freshSnapshot$1().map(initializeState);
    return snapshot.getStore_INTERNAL().getState();
}

var nextID = 0;

function RecoilRoot_INTERNAL(_ref12) {
    var initializeState_DEPRECATED = _ref12.initializeState_DEPRECATED,
        initializeState = _ref12.initializeState,
        storeProp = _ref12.store_INTERNAL,
        children = _ref12.children;

    var _createMutableSource; // prettier-ignore
    // @fb-only: useEffect(() => {
    // @fb-only: if (gkx('recoil_usage_logging')) {
    // @fb-only: try {
    // @fb-only: RecoilUsageLogFalcoEvent.log(() => ({
    // @fb-only: type: RecoilusagelogEvent.RECOIL_ROOT_MOUNTED,
    // @fb-only: path: URI.getRequestURI().getPath(),
    // @fb-only: }));
    // @fb-only: } catch {
    // @fb-only: recoverableViolation(
    // @fb-only: 'Error when logging Recoil Usage event',
    // @fb-only: 'recoil',
    // @fb-only: );
    // @fb-only: }
    // @fb-only: }
    // @fb-only: }, []);


    var storeState; // eslint-disable-line prefer-const

    var getGraph = function getGraph(version) {
        var graphs = storeState.current.graphsByVersion;

        if (graphs.has(version)) {
            return Recoil_nullthrows(graphs.get(version));
        }

        var newGraph = graph$3();
        graphs.set(version, newGraph);
        return newGraph;
    };

    var subscribeToTransactions = function subscribeToTransactions(callback, key) {
        if (key == null) {
            // Global transaction subscriptions
            var _storeRef$current$get = storeRef.current.getState(),
                transactionSubscriptions = _storeRef$current$get.transactionSubscriptions;

            var id = nextID++;
            transactionSubscriptions.set(id, callback);
            return {
                release: function release() {
                    transactionSubscriptions.delete(id);
                }
            };
        } else {
            // Node-specific transaction subscriptions:
            var _storeRef$current$get2 = storeRef.current.getState(),
                nodeTransactionSubscriptions = _storeRef$current$get2.nodeTransactionSubscriptions;

            if (!nodeTransactionSubscriptions.has(key)) {
                nodeTransactionSubscriptions.set(key, new Map());
            }

            var _id2 = nextID++;

            Recoil_nullthrows(nodeTransactionSubscriptions.get(key)).set(_id2, callback);
            return {
                release: function release() {
                    var subs = nodeTransactionSubscriptions.get(key);

                    if (subs) {
                        subs.delete(_id2);

                        if (subs.size === 0) {
                            nodeTransactionSubscriptions.delete(key);
                        }
                    }
                }
            };
        }
    };

    var addTransactionMetadata = function addTransactionMetadata(metadata) {
        startNextTreeIfNeeded(storeRef.current);

        for (var _i3 = 0, _Object$keys = Object.keys(metadata); _i3 < _Object$keys.length; _i3++) {
            var k = _Object$keys[_i3];
            Recoil_nullthrows(storeRef.current.getState().nextTree).transactionMetadata[k] = metadata[k];
        }
    };

    var replaceState = function replaceState(replacer) {
        var storeState = storeRef.current.getState();
        startNextTreeIfNeeded(storeRef.current); // Use replacer to get the next state:

        var nextTree = Recoil_nullthrows(storeState.nextTree);
        var replaced;

        try {
            stateReplacerIsBeingExecuted = true;
            replaced = replacer(nextTree);
        } finally {
            stateReplacerIsBeingExecuted = false;
        }

        if (replaced === nextTree) {
            return;
        }

        if (process.env.NODE_ENV !== "production") {
            if (typeof window !== 'undefined') {
                window.$recoilDebugStates.push(replaced); // TODO this shouldn't happen here because it's not batched
            }
        } // Save changes to nextTree and schedule a React update:


        storeState.nextTree = replaced;

        if (Recoil_gkx_1('recoil_early_rendering_2021')) {
            notifyComponents(store, storeState, replaced);
        }

        Recoil_nullthrows(notifyBatcherOfChange.current)();
    };

    var notifyBatcherOfChange = useRef(null);
    var setNotifyBatcherOfChange = useCallback(function(x) {
        notifyBatcherOfChange.current = x;
    }, [notifyBatcherOfChange]); // FIXME T2710559282599660

    var createMutableSource = (_createMutableSource = react.createMutableSource) !== null && _createMutableSource !== void 0 ? _createMutableSource : // flowlint-line unclear-type:off
        react.unstable_createMutableSource; // flowlint-line unclear-type:off

    var store = storeProp !== null && storeProp !== void 0 ? storeProp : {
        getState: function getState() {
            return storeState.current;
        },
        replaceState: replaceState,
        getGraph: getGraph,
        subscribeToTransactions: subscribeToTransactions,
        addTransactionMetadata: addTransactionMetadata
    };
    var storeRef = useRef(store);
    storeState = useRef(initializeState_DEPRECATED != null ? initialStoreState_DEPRECATED(store, initializeState_DEPRECATED) : initializeState != null ? initialStoreState(initializeState) : makeEmptyStoreState$2());
    var mutableSource = useMemo(function() {
        return createMutableSource ? createMutableSource(storeState, function() {
            return storeState.current.currentTree.version;
        }) : null;
    }, [createMutableSource, storeState]); // Cleanup when the <RecoilRoot> is unmounted

    useEffect(function() {
        return function() {
            var _iterator33 = _createForOfIteratorHelper(storeRef.current.getState().knownAtoms),
                _step33;

            try {
                for (_iterator33.s(); !(_step33 = _iterator33.n()).done;) {
                    var atomKey = _step33.value;
                    cleanUpNode$2(storeRef.current, atomKey);
                }
            } catch (err) {
                _iterator33.e(err);
            } finally {
                _iterator33.f();
            }
        };
    }, []);
    return /*#__PURE__*/ react.createElement(AppContext.Provider, {
        value: storeRef
    }, /*#__PURE__*/ react.createElement(MutableSourceContext.Provider, {
        value: mutableSource
    }, /*#__PURE__*/ react.createElement(Batcher, {
        setNotifyBatcherOfChange: setNotifyBatcherOfChange
    }), children));
}

function RecoilRoot(props) {
    var override = props.override,
        propsExceptOverride = _objectWithoutProperties(props, _excluded);

    var ancestorStoreRef = useStoreRef();

    if (override === false && ancestorStoreRef.current !== defaultStore) {
        // If ancestorStoreRef.current !== defaultStore, it means that this
        // RecoilRoot is not nested within another.
        return props.children;
    }

    return /*#__PURE__*/ react.createElement(RecoilRoot_INTERNAL, propsExceptOverride);
}

var Recoil_RecoilRoot_react = {
    useStoreRef: useStoreRef,
    useRecoilMutableSource: useRecoilMutableSource,
    RecoilRoot: RecoilRoot,
    notifyComponents_FOR_TESTING: notifyComponents,
    sendEndOfBatchNotifications_FOR_TESTING: sendEndOfBatchNotifications
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * MIT License
 *
 * Copyright (c) 2014-2019 Georg Tavonius
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
 *
 * @emails oncall+recoil
 * 
 * @format
 */

var UNKNOWN_FUNCTION = '<unknown>';
/**
 * This parses the different stack traces and puts them into one format
 * This borrows heavily from TraceKit (https://github.com/csnover/TraceKit)
 */

function stackTraceParser(stackString) {
    var lines = stackString.split('\n');
    return lines.reduce(function(stack, line) {
        var parseResult = parseChrome(line) || parseWinjs(line) || parseGecko(line) || parseNode(line) || parseJSC(line);

        if (parseResult) {
            stack.push(parseResult);
        }

        return stack;
    }, []);
}

var chromeRe = /^\s*at (.*?) ?\(((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|\/|[a-z]:\\|\\\\).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i;
var chromeEvalRe = /\((\S*)(?::(\d+))(?::(\d+))\)/;

function parseChrome(line) {
    var parts = chromeRe.exec(line);

    if (!parts) {
        return null;
    }

    var isNative = parts[2] && parts[2].indexOf('native') === 0; // start of line

    var isEval = parts[2] && parts[2].indexOf('eval') === 0; // start of line

    var submatch = chromeEvalRe.exec(parts[2]);

    if (isEval && submatch != null) {
        // throw out eval line/column and use top-most line/column number
        parts[2] = submatch[1]; // url

        parts[3] = submatch[2]; // line

        parts[4] = submatch[3]; // column
    }

    return {
        file: !isNative ? parts[2] : null,
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: isNative ? [parts[2]] : [],
        lineNumber: parts[3] ? +parts[3] : null,
        column: parts[4] ? +parts[4] : null
    };
}

var winjsRe = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseWinjs(line) {
    var parts = winjsRe.exec(line);

    if (!parts) {
        return null;
    }

    return {
        file: parts[2],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[3],
        column: parts[4] ? +parts[4] : null
    };
}

var geckoRe = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|\[native).*?|[^@]*bundle)(?::(\d+))?(?::(\d+))?\s*$/i;
var geckoEvalRe = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i;

function parseGecko(line) {
    var parts = geckoRe.exec(line);

    if (!parts) {
        return null;
    }

    var isEval = parts[3] && parts[3].indexOf(' > eval') > -1;
    var submatch = geckoEvalRe.exec(parts[3]);

    if (isEval && submatch != null) {
        // throw out eval line/column and use top-most line number
        parts[3] = submatch[1];
        parts[4] = submatch[2];
        parts[5] = null; // no column when eval
    }

    return {
        file: parts[3],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: parts[2] ? parts[2].split(',') : [],
        lineNumber: parts[4] ? +parts[4] : null,
        column: parts[5] ? +parts[5] : null
    };
}

var javaScriptCoreRe = /^\s*(?:([^@]*)(?:\((.*?)\))?@)?(\S.*?):(\d+)(?::(\d+))?\s*$/i;

function parseJSC(line) {
    var parts = javaScriptCoreRe.exec(line);

    if (!parts) {
        return null;
    }

    return {
        file: parts[3],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[4],
        column: parts[5] ? +parts[5] : null
    };
}

var nodeRe = /^\s*at (?:((?:\[object object\])?[^\\/]+(?: \[as \S+\])?) )?\(?(.*?):(\d+)(?::(\d+))?\)?\s*$/i;

function parseNode(line) {
    var parts = nodeRe.exec(line);

    if (!parts) {
        return null;
    }

    return {
        file: parts[2],
        methodName: parts[1] || UNKNOWN_FUNCTION,
        arguments: [],
        lineNumber: +parts[3],
        column: parts[4] ? +parts[4] : null
    };
}

var Recoil_stackTraceParser = stackTraceParser;
var useRef$1 = react.useRef;

function useComponentName() {
    var nameRef = useRef$1();

    if (process.env.NODE_ENV !== "production") {
        if (Recoil_gkx_1('recoil_infer_component_names')) {
            var _nameRef$current;

            if (nameRef.current === undefined) {
                // There is no blessed way to determine the calling React component from
                // within a hook. This hack uses the fact that hooks must start with 'use'
                // and that hooks are either called by React Components or other hooks. It
                // follows therefore, that to find the calling component, you simply need
                // to look down the stack and find the first function which doesn't start
                // with 'use'. We are only enabling this in dev for now, since once the
                // codebase is minified, the naming assumptions no longer hold true.
                // eslint-disable-next-line fb-www/no-new-error
                var frames = Recoil_stackTraceParser(new Error().stack);

                var _iterator34 = _createForOfIteratorHelper(frames),
                    _step34;

                try {
                    for (_iterator34.s(); !(_step34 = _iterator34.n()).done;) {
                        var methodName = _step34.value.methodName;

                        // I observed cases where the frame was of the form 'Object.useXXX'
                        // hence why I'm searching for hooks following a word boundary
                        if (!methodName.match(/\buse[^\b]+$/)) {
                            return nameRef.current = methodName;
                        }
                    }
                } catch (err) {
                    _iterator34.e(err);
                } finally {
                    _iterator34.f();
                }

                nameRef.current = null;
            }

            return (_nameRef$current = nameRef.current) !== null && _nameRef$current !== void 0 ? _nameRef$current : '<unable to determine component name>';
        }
    } // @fb-only: return "<component name only available when both in dev mode and when passing GK 'recoil_infer_component_names'>";


    return '<component name not available>'; // @oss-only
}

var Recoil_useComponentName = useComponentName;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function shallowArrayEqual(a, b) {
    if (a === b) {
        return true;
    }

    if (a.length !== b.length) {
        return false;
    }

    for (var i = 0, l = a.length; i < l; i++) {
        if (a[i] !== b[i]) {
            return false;
        }
    }

    return true;
}

var Recoil_shallowArrayEqual = shallowArrayEqual;
var useEffect$1 = react.useEffect,
    useRef$2 = react.useRef;

function usePrevious(value) {
    var ref = useRef$2();
    useEffect$1(function() {
        ref.current = value;
    });
    return ref.current;
}

var Recoil_usePrevious = usePrevious;
var useStoreRef$1 = Recoil_RecoilRoot_react.useStoreRef;
var SUSPENSE_TIMEOUT_MS$1 = Recoil_Retention.SUSPENSE_TIMEOUT_MS;
var updateRetainCount$2 = Recoil_Retention.updateRetainCount;
var RetentionZone$3 = Recoil_RetentionZone.RetentionZone;
var isSSR$2 = Recoil_Environment.isSSR;
var useEffect$2 = react.useEffect,
    useRef$3 = react.useRef; // I don't see a way to avoid the any type here because we want to accept readable
// and writable values with any type parameter, but normally with writable ones
// RecoilState<SomeT> is not a subtype of RecoilState<mixed>.
// flowlint-line unclear-type:off

function useRetain(toRetain) {
    if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
        return;
    } // eslint-disable-next-line fb-www/react-hooks


    return useRetain_ACTUAL(toRetain);
}

function useRetain_ACTUAL(toRetain) {
    var array = Array.isArray(toRetain) ? toRetain : [toRetain];
    var retainables = array.map(function(a) {
        return a instanceof RetentionZone$3 ? a : a.key;
    });
    var storeRef = useStoreRef$1();
    useEffect$2(function() {
        if (!Recoil_gkx_1('recoil_memory_managament_2020')) {
            return;
        }

        var store = storeRef.current;

        if (timeoutID.current && !isSSR$2) {
            // Already performed a temporary retain on render, simply cancel the release
            // of that temporary retain.
            window.clearTimeout(timeoutID.current);
            timeoutID.current = null;
        } else {
            var _iterator35 = _createForOfIteratorHelper(retainables),
                _step35;

            try {
                for (_iterator35.s(); !(_step35 = _iterator35.n()).done;) {
                    var r = _step35.value;
                    updateRetainCount$2(store, r, 1);
                }
            } catch (err) {
                _iterator35.e(err);
            } finally {
                _iterator35.f();
            }
        }

        return function() {
            var _iterator36 = _createForOfIteratorHelper(retainables),
                _step36;

            try {
                for (_iterator36.s(); !(_step36 = _iterator36.n()).done;) {
                    var _r = _step36.value;
                    updateRetainCount$2(store, _r, -1);
                }
            } catch (err) {
                _iterator36.e(err);
            } finally {
                _iterator36.f();
            }
        }; // eslint-disable-next-line fb-www/react-hooks-deps
    }, [storeRef].concat(_toConsumableArray(retainables))); // We want to retain if the component suspends. This is terrible but the Suspense
    // API affords us no better option. If we suspend and never commit after some
    // seconds, then release. The 'actual' retain/release in the effect above
    // cancels this.

    var timeoutID = useRef$3();
    var previousRetainables = Recoil_usePrevious(retainables);

    if (!isSSR$2 && (previousRetainables === undefined || !Recoil_shallowArrayEqual(previousRetainables, retainables))) {
        var store = storeRef.current;

        var _iterator37 = _createForOfIteratorHelper(retainables),
            _step37;

        try {
            for (_iterator37.s(); !(_step37 = _iterator37.n()).done;) {
                var _r3 = _step37.value;
                updateRetainCount$2(store, _r3, 1);
            }
        } catch (err) {
            _iterator37.e(err);
        } finally {
            _iterator37.f();
        }

        if (previousRetainables) {
            var _iterator38 = _createForOfIteratorHelper(previousRetainables),
                _step38;

            try {
                for (_iterator38.s(); !(_step38 = _iterator38.n()).done;) {
                    var r = _step38.value;
                    updateRetainCount$2(store, r, -1);
                }
            } catch (err) {
                _iterator38.e(err);
            } finally {
                _iterator38.f();
            }
        }

        if (timeoutID.current) {
            window.clearTimeout(timeoutID.current);
        }

        timeoutID.current = window.setTimeout(function() {
            timeoutID.current = null;

            var _iterator39 = _createForOfIteratorHelper(retainables),
                _step39;

            try {
                for (_iterator39.s(); !(_step39 = _iterator39.n()).done;) {
                    var _r2 = _step39.value;
                    updateRetainCount$2(store, _r2, -1);
                }
            } catch (err) {
                _iterator39.e(err);
            } finally {
                _iterator39.f();
            }
        }, SUSPENSE_TIMEOUT_MS$1);
    }
}

var Recoil_useRetain = useRetain;
var batchUpdates$2 = Recoil_Batching.batchUpdates;
var DEFAULT_VALUE$2 = Recoil_Node.DEFAULT_VALUE;
var useRecoilMutableSource$1 = Recoil_RecoilRoot_react.useRecoilMutableSource,
    useStoreRef$2 = Recoil_RecoilRoot_react.useStoreRef;
var isRecoilValue$2 = Recoil_RecoilValue$1.isRecoilValue;
var AbstractRecoilValue$3 = Recoil_RecoilValueInterface.AbstractRecoilValue,
    getRecoilValueAsLoadable$2 = Recoil_RecoilValueInterface.getRecoilValueAsLoadable,
    setRecoilValue$2 = Recoil_RecoilValueInterface.setRecoilValue,
    setUnvalidatedRecoilValue$2 = Recoil_RecoilValueInterface.setUnvalidatedRecoilValue,
    subscribeToRecoilValue$1 = Recoil_RecoilValueInterface.subscribeToRecoilValue;
var setByAddingToSet$2 = Recoil_CopyOnWrite.setByAddingToSet;
var mutableSourceExists$2 = Recoil_mutableSource.mutableSourceExists,
    useMutableSource$1 = Recoil_mutableSource.useMutableSource;
var useCallback$1 = react.useCallback,
    useEffect$3 = react.useEffect,
    useMemo$1 = react.useMemo,
    useRef$4 = react.useRef,
    useState$1 = react.useState;

function handleLoadable(loadable, recoilValue, storeRef) {
    // We can't just throw the promise we are waiting on to Suspense.  If the
    // upstream dependencies change it may produce a state in which the component
    // can render, but it would still be suspended on a Promise that may never resolve.
    if (loadable.state === 'hasValue') {
        return loadable.contents;
    } else if (loadable.state === 'loading') {
        var promise = new Promise(function(resolve) {
            storeRef.current.getState().suspendedComponentResolvers.add(resolve);
        }); // $FlowFixMe Flow(prop-missing) for integrating with tools that inspect thrown promises @fb-only
        // @fb-only: promise.displayName = `Recoil State: ${recoilValue.key}`;

        throw promise;
    } else if (loadable.state === 'hasError') {
        throw loadable.contents;
    } else {
        throw Recoil_err("Invalid value of loadable atom \"".concat(recoilValue.key, "\""));
    }
}

function validateRecoilValue(recoilValue, hookName) {
    if (!isRecoilValue$2(recoilValue)) {
        throw Recoil_err("Invalid argument to ".concat(hookName, ": expected an atom or selector but got ").concat(String(recoilValue)));
    }
}
/**
 * Various things are broken with useRecoilInterface, particularly concurrent mode
 * and memory management. They will not be fixed.
 * */


function useRecoilInterface_DEPRECATED() {
    var storeRef = useStoreRef$2();

    var _useState$ = useState$1([]),
        _useState$2 = _slicedToArray(_useState$, 2),
        forceUpdate = _useState$2[1];

    var recoilValuesUsed = useRef$4(new Set());
    recoilValuesUsed.current = new Set(); // Track the RecoilValues used just during this render

    var previousSubscriptions = useRef$4(new Set());
    var subscriptions = useRef$4(new Map());
    var unsubscribeFrom = useCallback$1(function(key) {
        var sub = subscriptions.current.get(key);

        if (sub) {
            sub.release();
            subscriptions.current.delete(key);
        }
    }, [subscriptions]);
    var componentName = Recoil_useComponentName();
    useEffect$3(function() {
        var store = storeRef.current;

        function updateState(_state, key) {
            if (!subscriptions.current.has(key)) {
                return;
            }

            forceUpdate([]);
        }

        Recoil_differenceSets(recoilValuesUsed.current, previousSubscriptions.current).forEach(function(key) {
            if (subscriptions.current.has(key)) {
                Recoil_expectationViolation("Double subscription to RecoilValue \"".concat(key, "\""));
                return;
            }

            var sub = subscribeToRecoilValue$1(store, new AbstractRecoilValue$3(key), function(state) {
                updateState(state, key);
            }, componentName);
            subscriptions.current.set(key, sub);
            /**
             * Since we're subscribing in an effect we need to update to the latest
             * value of the atom since it may have changed since we rendered. We can
             * go ahead and do that now, unless we're in the middle of a batch --
             * in which case we should do it at the end of the batch, due to the
             * following edge case: Suppose an atom is updated in another useEffect
             * of this same component. Then the following sequence of events occur:
             * 1. Atom is updated and subs fired (but we may not be subscribed
             *    yet depending on order of effects, so we miss this) Updated value
             *    is now in nextTree, but not currentTree.
             * 2. This effect happens. We subscribe and update.
             * 3. From the update we re-render and read currentTree, with old value.
             * 4. Batcher's effect sets currentTree to nextTree.
             * In this sequence we miss the update. To avoid that, add the update
             * to queuedComponentCallback if a batch is in progress.
             */
            // FIXME delete queuedComponentCallbacks_DEPRECATED when deleting useInterface.

            var state = store.getState();

            if (state.nextTree) {
                store.getState().queuedComponentCallbacks_DEPRECATED.push(function() {
                    updateState(store.getState(), key);
                });
            } else {
                updateState(store.getState(), key);
            }
        });
        Recoil_differenceSets(previousSubscriptions.current, recoilValuesUsed.current).forEach(function(key) {
            unsubscribeFrom(key);
        });
        previousSubscriptions.current = recoilValuesUsed.current;
    });
    useEffect$3(function() {
        var subs = subscriptions.current;
        return function() {
            return subs.forEach(function(_, key) {
                return unsubscribeFrom(key);
            });
        };
    }, [unsubscribeFrom]);
    return useMemo$1(function() {
        // eslint-disable-next-line no-shadow
        function useSetRecoilState(recoilState) {
            if (process.env.NODE_ENV !== "production") {
                // $FlowFixMe[escaped-generic]
                validateRecoilValue(recoilState, 'useSetRecoilState');
            }

            return function(newValueOrUpdater) {
                setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
            };
        } // eslint-disable-next-line no-shadow


        function useResetRecoilState(recoilState) {
            if (process.env.NODE_ENV !== "production") {
                // $FlowFixMe[escaped-generic]
                validateRecoilValue(recoilState, 'useResetRecoilState');
            }

            return function() {
                return setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
            };
        } // eslint-disable-next-line no-shadow


        function useRecoilValueLoadable(recoilValue) {
            var _storeState$nextTree;

            if (process.env.NODE_ENV !== "production") {
                // $FlowFixMe[escaped-generic]
                validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
            }

            if (!recoilValuesUsed.current.has(recoilValue.key)) {
                recoilValuesUsed.current = setByAddingToSet$2(recoilValuesUsed.current, recoilValue.key);
            } // TODO Restore optimization to memoize lookup


            var storeState = storeRef.current.getState();
            return getRecoilValueAsLoadable$2(storeRef.current, recoilValue, Recoil_gkx_1('recoil_early_rendering_2021') ? (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree : storeState.currentTree);
        } // eslint-disable-next-line no-shadow


        function useRecoilValue(recoilValue) {
            if (process.env.NODE_ENV !== "production") {
                // $FlowFixMe[escaped-generic]
                validateRecoilValue(recoilValue, 'useRecoilValue');
            }

            var loadable = useRecoilValueLoadable(recoilValue);
            return handleLoadable(loadable, recoilValue, storeRef);
        } // eslint-disable-next-line no-shadow


        function useRecoilState(recoilState) {
            if (process.env.NODE_ENV !== "production") {
                // $FlowFixMe[escaped-generic]
                validateRecoilValue(recoilState, 'useRecoilState');
            }

            return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
        } // eslint-disable-next-line no-shadow


        function useRecoilStateLoadable(recoilState) {
            if (process.env.NODE_ENV !== "production") {
                // $FlowFixMe[escaped-generic]
                validateRecoilValue(recoilState, 'useRecoilStateLoadable');
            }

            return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
        }

        return {
            getRecoilValue: useRecoilValue,
            getRecoilValueLoadable: useRecoilValueLoadable,
            getRecoilState: useRecoilState,
            getRecoilStateLoadable: useRecoilStateLoadable,
            getSetRecoilState: useSetRecoilState,
            getResetRecoilState: useResetRecoilState
        };
    }, [recoilValuesUsed, storeRef]);
}

var recoilComponentGetRecoilValueCount_FOR_TESTING = {
    current: 0
};

function useRecoilValueLoadable_MUTABLESOURCE(recoilValue) {
    if (process.env.NODE_ENV !== "production") {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
    }

    var storeRef = useStoreRef$2();
    var getLoadable = useCallback$1(function() {
        var _storeState$nextTree2;

        var store = storeRef.current;
        var storeState = store.getState();
        var treeState = Recoil_gkx_1('recoil_early_rendering_2021') ? (_storeState$nextTree2 = storeState.nextTree) !== null && _storeState$nextTree2 !== void 0 ? _storeState$nextTree2 : storeState.currentTree : storeState.currentTree;
        return getRecoilValueAsLoadable$2(store, recoilValue, treeState);
    }, [storeRef, recoilValue]);
    var getLoadableWithTesting = useCallback$1(function() {
        if (process.env.NODE_ENV !== "production") {
            recoilComponentGetRecoilValueCount_FOR_TESTING.current++;
        }

        return getLoadable();
    }, [getLoadable]);
    var componentName = Recoil_useComponentName();
    var subscribe = useCallback$1(function(_storeState, callback) {
        var store = storeRef.current;
        var subscription = subscribeToRecoilValue$1(store, recoilValue, function() {
            if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
                return callback();
            } // Only re-render if the value has changed.
            // This will evaluate the atom/selector now as well as when the
            // component renders, but that may help with prefetching.


            var newLoadable = getLoadable();

            if (!prevLoadableRef.current.is(newLoadable)) {
                callback();
            } // If the component is suspended then the effect setting prevLoadableRef
            // will not run.  So, set the previous value here when its subscription
            // is fired to wake it up.  We can't just rely on this, though, because
            // this only executes when an atom/selector is dirty and the atom/selector
            // passed to the hook can dynamically change.


            prevLoadableRef.current = newLoadable;
        }, componentName);
        return subscription.release;
    }, [storeRef, recoilValue, componentName, getLoadable]);
    var source = useRecoilMutableSource$1();
    var loadable = useMutableSource$1(source, getLoadableWithTesting, subscribe);
    var prevLoadableRef = useRef$4(loadable);
    useEffect$3(function() {
        prevLoadableRef.current = loadable;
    });
    return loadable;
}

function useRecoilValueLoadable_LEGACY(recoilValue) {
    if (process.env.NODE_ENV !== "production") {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValueLoadable');
    }

    var storeRef = useStoreRef$2();

    var _useState$3 = useState$1([]),
        _useState$4 = _slicedToArray(_useState$3, 2),
        _ = _useState$4[0],
        forceUpdate = _useState$4[1];

    var componentName = Recoil_useComponentName();
    useEffect$3(function() {
        var store = storeRef.current;
        var storeState = store.getState();
        var subscription = subscribeToRecoilValue$1(store, recoilValue, function(_state) {
            var _prevLoadableRef$curr;

            if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
                return forceUpdate([]);
            }

            var newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

            if (!((_prevLoadableRef$curr = prevLoadableRef.current) === null || _prevLoadableRef$curr === void 0 ? void 0 : _prevLoadableRef$curr.is(newLoadable))) {
                forceUpdate(newLoadable);
            }

            prevLoadableRef.current = newLoadable;
        }, componentName);
        /**
         * Since we're subscribing in an effect we need to update to the latest
         * value of the atom since it may have changed since we rendered. We can
         * go ahead and do that now, unless we're in the middle of a batch --
         * in which case we should do it at the end of the batch, due to the
         * following edge case: Suppose an atom is updated in another useEffect
         * of this same component. Then the following sequence of events occur:
         * 1. Atom is updated and subs fired (but we may not be subscribed
         *    yet depending on order of effects, so we miss this) Updated value
         *    is now in nextTree, but not currentTree.
         * 2. This effect happens. We subscribe and update.
         * 3. From the update we re-render and read currentTree, with old value.
         * 4. Batcher's effect sets currentTree to nextTree.
         * In this sequence we miss the update. To avoid that, add the update
         * to queuedComponentCallback if a batch is in progress.
         */

        if (storeState.nextTree) {
            store.getState().queuedComponentCallbacks_DEPRECATED.push(function() {
                prevLoadableRef.current = null;
                forceUpdate([]);
            });
        } else {
            var _prevLoadableRef$curr2;

            if (!Recoil_gkx_1('recoil_suppress_rerender_in_callback')) {
                return forceUpdate([]);
            }

            var newLoadable = getRecoilValueAsLoadable$2(store, recoilValue, store.getState().currentTree);

            if (!((_prevLoadableRef$curr2 = prevLoadableRef.current) === null || _prevLoadableRef$curr2 === void 0 ? void 0 : _prevLoadableRef$curr2.is(newLoadable))) {
                forceUpdate(newLoadable);
            }

            prevLoadableRef.current = newLoadable;
        }

        return subscription.release;
    }, [componentName, recoilValue, storeRef]);
    var loadable = getRecoilValueAsLoadable$2(storeRef.current, recoilValue);
    var prevLoadableRef = useRef$4(loadable);
    useEffect$3(function() {
        prevLoadableRef.current = loadable;
    });
    return loadable;
}
/**
  Like useRecoilValue(), but either returns the value if available or
  just undefined if not available for any reason, such as pending or error.
*/


function useRecoilValueLoadable(recoilValue) {
    if (Recoil_gkx_1('recoil_memory_managament_2020')) {
        // eslint-disable-next-line fb-www/react-hooks
        Recoil_useRetain(recoilValue);
    }

    if (mutableSourceExists$2()) {
        // eslint-disable-next-line fb-www/react-hooks
        return useRecoilValueLoadable_MUTABLESOURCE(recoilValue);
    } else {
        // eslint-disable-next-line fb-www/react-hooks
        return useRecoilValueLoadable_LEGACY(recoilValue);
    }
}
/**
  Returns the value represented by the RecoilValue.
  If the value is pending, it will throw a Promise to suspend the component,
  if the value is an error it will throw it for the nearest React error boundary.
  This will also subscribe the component for any updates in the value.
  */


function useRecoilValue(recoilValue) {
    if (process.env.NODE_ENV !== "production") {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilValue, 'useRecoilValue');
    }

    var storeRef = useStoreRef$2();
    var loadable = useRecoilValueLoadable(recoilValue);
    return handleLoadable(loadable, recoilValue, storeRef);
}
/**
  Returns a function that allows the value of a RecoilState to be updated, but does
  not subscribe the component to changes to that RecoilState.
*/


function useSetRecoilState(recoilState) {
    if (process.env.NODE_ENV !== "production") {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useSetRecoilState');
    }

    var storeRef = useStoreRef$2();
    return useCallback$1(function(newValueOrUpdater) {
        setRecoilValue$2(storeRef.current, recoilState, newValueOrUpdater);
    }, [storeRef, recoilState]);
}
/**
  Returns a function that will reset the value of a RecoilState to its default
*/


function useResetRecoilState(recoilState) {
    if (process.env.NODE_ENV !== "production") {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useResetRecoilState');
    }

    var storeRef = useStoreRef$2();
    return useCallback$1(function() {
        setRecoilValue$2(storeRef.current, recoilState, DEFAULT_VALUE$2);
    }, [storeRef, recoilState]);
}
/**
  Equivalent to useState(). Allows the value of the RecoilState to be read and written.
  Subsequent updates to the RecoilState will cause the component to re-render. If the
  RecoilState is pending, this will suspend the component and initiate the
  retrieval of the value. If evaluating the RecoilState resulted in an error, this will
  throw the error so that the nearest React error boundary can catch it.
*/


function useRecoilState(recoilState) {
    if (process.env.NODE_ENV !== "production") {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilState');
    }

    return [useRecoilValue(recoilState), useSetRecoilState(recoilState)];
}
/**
  Like useRecoilState(), but does not cause Suspense or React error handling. Returns
  an object that indicates whether the RecoilState is available, pending, or
  unavailable due to an error.
*/


function useRecoilStateLoadable(recoilState) {
    if (process.env.NODE_ENV !== "production") {
        // $FlowFixMe[escaped-generic]
        validateRecoilValue(recoilState, 'useRecoilStateLoadable');
    }

    return [useRecoilValueLoadable(recoilState), useSetRecoilState(recoilState)];
}

function useSetUnvalidatedAtomValues() {
    var storeRef = useStoreRef$2();
    return function(values) {
        var transactionMetadata = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        batchUpdates$2(function() {
            storeRef.current.addTransactionMetadata(transactionMetadata);
            values.forEach(function(value, key) {
                return setUnvalidatedRecoilValue$2(storeRef.current, new AbstractRecoilValue$3(key), value);
            });
        });
    };
}

var Recoil_Hooks = {
    recoilComponentGetRecoilValueCount_FOR_TESTING: recoilComponentGetRecoilValueCount_FOR_TESTING,
    useRecoilInterface: useRecoilInterface_DEPRECATED,
    useRecoilState: useRecoilState,
    useRecoilStateLoadable: useRecoilStateLoadable,
    useRecoilValue: useRecoilValue,
    useRecoilValueLoadable: useRecoilValueLoadable,
    useResetRecoilState: useResetRecoilState,
    useSetRecoilState: useSetRecoilState,
    useSetUnvalidatedAtomValues: useSetUnvalidatedAtomValues
};
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a map containing all of the keys + values from the original map where
 * the given callback returned true.
 */

function filterMap(map, callback) {
    var result = new Map();

    var _iterator40 = _createForOfIteratorHelper(map),
        _step40;

    try {
        for (_iterator40.s(); !(_step40 = _iterator40.n()).done;) {
            var _step40$value = _slicedToArray(_step40.value, 2),
                key = _step40$value[0],
                value = _step40$value[1];

            if (callback(value, key)) {
                result.set(key, value);
            }
        }
    } catch (err) {
        _iterator40.e(err);
    } finally {
        _iterator40.f();
    }

    return result;
}

var Recoil_filterMap = filterMap;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

/**
 * Returns a set containing all of the values from the original set where
 * the given callback returned true.
 */

function filterSet(set, callback) {
    var result = new Set();

    var _iterator41 = _createForOfIteratorHelper(set),
        _step41;

    try {
        for (_iterator41.s(); !(_step41 = _iterator41.n()).done;) {
            var value = _step41.value;

            if (callback(value)) {
                result.add(value);
            }
        }
    } catch (err) {
        _iterator41.e(err);
    } finally {
        _iterator41.f();
    }

    return result;
}

var Recoil_filterSet = filterSet;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function mergeMaps() {
    var result = new Map();

    for (var _len5 = arguments.length, maps = new Array(_len5), _key8 = 0; _key8 < _len5; _key8++) {
        maps[_key8] = arguments[_key8];
    }

    for (var i = 0; i < maps.length; i++) {
        var iterator = maps[i].keys();
        var nextKey = void 0;

        while (!(nextKey = iterator.next()).done) {
            // $FlowFixMe[incompatible-call] - map/iterator knows nothing about flow types
            result.set(nextKey.value, maps[i].get(nextKey.value));
        }
    }
    /* $FlowFixMe[incompatible-return] (>=0.66.0 site=www,mobile) This comment
     * suppresses an error found when Flow v0.66 was deployed. To see the error
     * delete this comment and run Flow. */


    return result;
}

var Recoil_mergeMaps = mergeMaps;
var batchUpdates$3 = Recoil_Batching.batchUpdates;
var DEFAULT_VALUE$3 = Recoil_Node.DEFAULT_VALUE,
    getNode$3 = Recoil_Node.getNode,
    nodes$1 = Recoil_Node.nodes;
var useStoreRef$3 = Recoil_RecoilRoot_react.useStoreRef;
var AbstractRecoilValue$4 = Recoil_RecoilValueInterface.AbstractRecoilValue,
    setRecoilValueLoadable$1 = Recoil_RecoilValueInterface.setRecoilValueLoadable;
var SUSPENSE_TIMEOUT_MS$2 = Recoil_Retention.SUSPENSE_TIMEOUT_MS;
var Snapshot$1 = Recoil_Snapshot$1.Snapshot,
    cloneSnapshot$1 = Recoil_Snapshot$1.cloneSnapshot;
var isSSR$3 = Recoil_Environment.isSSR;
var useCallback$2 = react.useCallback,
    useEffect$4 = react.useEffect,
    useRef$5 = react.useRef,
    useState$2 = react.useState;

function useTransactionSubscription(callback) {
    var storeRef = useStoreRef$3();
    useEffect$4(function() {
        var sub = storeRef.current.subscribeToTransactions(callback);
        return sub.release;
    }, [callback, storeRef]);
}

function externallyVisibleAtomValuesInState(state) {
    var atomValues = state.atomValues.toMap();
    var persistedAtomContentsValues = Recoil_mapMap(Recoil_filterMap(atomValues, function(v, k) {
        var node = getNode$3(k);
        var persistence = node.persistence_UNSTABLE;
        return persistence != null && persistence.type !== 'none' && v.state === 'hasValue';
    }), function(v) {
        return v.contents;
    }); // Merge in nonvalidated atoms; we may not have defs for them but they will
    // all have persistence on or they wouldn't be there in the first place.

    return Recoil_mergeMaps(state.nonvalidatedAtoms.toMap(), persistedAtomContentsValues);
}
/**
  Calls the given callback after any atoms have been modified and the consequent
  component re-renders have been committed. This is intended for persisting
  the values of the atoms to storage. The stored values can then be restored
  using the useSetUnvalidatedAtomValues hook.

  The callback receives the following info:

  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.
*/


function useTransactionObservation_DEPRECATED(callback) {
    useTransactionSubscription(useCallback$2(function(store) {
        var previousTree = store.getState().previousTree;
        var currentTree = store.getState().currentTree;

        if (!previousTree) {
            Recoil_recoverableViolation('Transaction subscribers notified without a previous tree being present -- this is a bug in Recoil');
            previousTree = store.getState().currentTree; // attempt to trundle on
        }

        var atomValues = externallyVisibleAtomValuesInState(currentTree);
        var previousAtomValues = externallyVisibleAtomValuesInState(previousTree);
        var atomInfo = Recoil_mapMap(nodes$1, function(node) {
            var _node$persistence_UNS, _node$persistence_UNS2, _node$persistence_UNS3, _node$persistence_UNS4;

            return {
                persistence_UNSTABLE: {
                    type: (_node$persistence_UNS = (_node$persistence_UNS2 = node.persistence_UNSTABLE) === null || _node$persistence_UNS2 === void 0 ? void 0 : _node$persistence_UNS2.type) !== null && _node$persistence_UNS !== void 0 ? _node$persistence_UNS : 'none',
                    backButton: (_node$persistence_UNS3 = (_node$persistence_UNS4 = node.persistence_UNSTABLE) === null || _node$persistence_UNS4 === void 0 ? void 0 : _node$persistence_UNS4.backButton) !== null && _node$persistence_UNS3 !== void 0 ? _node$persistence_UNS3 : false
                }
            };
        }); // Filter on existance in atomValues so that externally-visible rules
        // are also applied to modified atoms (specifically exclude selectors):

        var modifiedAtoms = Recoil_filterSet(currentTree.dirtyAtoms, function(k) {
            return atomValues.has(k) || previousAtomValues.has(k);
        });
        callback({
            atomValues: atomValues,
            previousAtomValues: previousAtomValues,
            atomInfo: atomInfo,
            modifiedAtoms: modifiedAtoms,
            transactionMetadata: _objectSpread({}, currentTree.transactionMetadata)
        });
    }, [callback]));
}

function useRecoilTransactionObserver(callback) {
    useTransactionSubscription(useCallback$2(function(store) {
        var snapshot = cloneSnapshot$1(store, 'current');
        var previousSnapshot = cloneSnapshot$1(store, 'previous');
        callback({
            snapshot: snapshot,
            previousSnapshot: previousSnapshot
        });
    }, [callback]));
} // Return a snapshot of the current state and subscribe to all state changes


function useRecoilSnapshot() {
    var storeRef = useStoreRef$3();

    var _useState$5 = useState$2(function() {
            return cloneSnapshot$1(storeRef.current);
        }),
        _useState$6 = _slicedToArray(_useState$5, 2),
        snapshot = _useState$6[0],
        setSnapshot = _useState$6[1];

    var previousSnapshot = Recoil_usePrevious(snapshot);
    var timeoutID = useRef$5();
    useEffect$4(function() {
        if (timeoutID.current && !isSSR$3) {
            window.clearTimeout(timeoutID.current);
        }

        return snapshot.retain();
    }, [snapshot]);
    useTransactionSubscription(useCallback$2(function(store) {
        return setSnapshot(cloneSnapshot$1(store));
    }, []));

    if (previousSnapshot !== snapshot && !isSSR$3) {
        if (timeoutID.current) {
            previousSnapshot === null || previousSnapshot === void 0 ? void 0 : previousSnapshot.release_INTERNAL();
            window.clearTimeout(timeoutID.current);
        }

        snapshot.retain();
        timeoutID.current = window.setTimeout(function() {
            snapshot.release_INTERNAL();
            timeoutID.current = null;
        }, SUSPENSE_TIMEOUT_MS$2);
    }

    return snapshot;
}

function useGotoRecoilSnapshot() {
    var storeRef = useStoreRef$3();
    return useCallback$2(function(snapshot) {
        var _storeState$nextTree;

        var storeState = storeRef.current.getState();
        var prev = (_storeState$nextTree = storeState.nextTree) !== null && _storeState$nextTree !== void 0 ? _storeState$nextTree : storeState.currentTree;
        var next = snapshot.getStore_INTERNAL().getState().currentTree;
        batchUpdates$3(function() {
            var keysToUpdate = new Set();

            for (var _i4 = 0, _arr = [prev.atomValues.keys(), next.atomValues.keys()]; _i4 < _arr.length; _i4++) {
                var keys = _arr[_i4];

                var _iterator42 = _createForOfIteratorHelper(keys),
                    _step42;

                try {
                    for (_iterator42.s(); !(_step42 = _iterator42.n()).done;) {
                        var key = _step42.value;

                        var _prev$atomValues$get, _next$atomValues$get;

                        if (((_prev$atomValues$get = prev.atomValues.get(key)) === null || _prev$atomValues$get === void 0 ? void 0 : _prev$atomValues$get.contents) !== ((_next$atomValues$get = next.atomValues.get(key)) === null || _next$atomValues$get === void 0 ? void 0 : _next$atomValues$get.contents) && getNode$3(key).shouldRestoreFromSnapshots) {
                            keysToUpdate.add(key);
                        }
                    }
                } catch (err) {
                    _iterator42.e(err);
                } finally {
                    _iterator42.f();
                }
            }

            keysToUpdate.forEach(function(key) {
                setRecoilValueLoadable$1(storeRef.current, new AbstractRecoilValue$4(key), next.atomValues.has(key) ? Recoil_nullthrows(next.atomValues.get(key)) : DEFAULT_VALUE$3);
            });
            storeRef.current.replaceState(function(state) {
                return _objectSpread(_objectSpread({}, state), {}, {
                    stateID: snapshot.getID_INTERNAL()
                });
            });
        });
    }, [storeRef]);
}

var Recoil_SnapshotHooks = {
    useRecoilSnapshot: useRecoilSnapshot,
    useGotoRecoilSnapshot: useGotoRecoilSnapshot,
    useRecoilTransactionObserver: useRecoilTransactionObserver,
    useTransactionObservation_DEPRECATED: useTransactionObservation_DEPRECATED,
    useTransactionSubscription_DEPRECATED: useTransactionSubscription
};
var peekNodeInfo$2 = Recoil_FunctionalCore.peekNodeInfo;
var useStoreRef$4 = Recoil_RecoilRoot_react.useStoreRef;

function useGetRecoilValueInfo() {
    var storeRef = useStoreRef$4();
    return function(_ref13) {
        var key = _ref13.key;
        return peekNodeInfo$2(storeRef.current, storeRef.current.getState().currentTree, key);
    };
}

var Recoil_useGetRecoilValueInfo = useGetRecoilValueInfo;
var RecoilRoot$1 = Recoil_RecoilRoot_react.RecoilRoot,
    useStoreRef$5 = Recoil_RecoilRoot_react.useStoreRef;
var useMemo$2 = react.useMemo;

function useRecoilBridgeAcrossReactRoots() {
    var store = useStoreRef$5().current;
    return useMemo$2(function() {
        // eslint-disable-next-line no-shadow
        function RecoilBridge(_ref14) {
            var children = _ref14.children;
            return /*#__PURE__*/ react.createElement(RecoilRoot$1, {
                store_INTERNAL: store
            }, children);
        }

        return RecoilBridge;
    }, [store]);
}

var Recoil_useRecoilBridgeAcrossReactRoots = useRecoilBridgeAcrossReactRoots;
var loadableWithValue$1 = Recoil_Loadable$1.loadableWithValue;
var DEFAULT_VALUE$4 = Recoil_Node.DEFAULT_VALUE,
    getNode$4 = Recoil_Node.getNode;
var copyTreeState$1 = Recoil_RecoilValueInterface.copyTreeState,
    getRecoilValueAsLoadable$3 = Recoil_RecoilValueInterface.getRecoilValueAsLoadable,
    invalidateDownstreams$1 = Recoil_RecoilValueInterface.invalidateDownstreams,
    writeLoadableToTreeState$1 = Recoil_RecoilValueInterface.writeLoadableToTreeState;

function isAtom(recoilValue) {
    return getNode$4(recoilValue.key).nodeType === 'atom';
}

var TransactionInterfaceImpl = /*#__PURE__*/ function() {
    function TransactionInterfaceImpl(store, treeState) {
        var _this10 = this;

        _classCallCheck(this, TransactionInterfaceImpl);

        _defineProperty(this, "_store", void 0);

        _defineProperty(this, "_treeState", void 0);

        _defineProperty(this, "_changes", void 0);

        _defineProperty(this, "get", function(recoilValue) {
            if (_this10._changes.has(recoilValue.key)) {
                // $FlowFixMe[incompatible-return]
                return _this10._changes.get(recoilValue.key);
            }

            if (!isAtom(recoilValue)) {
                throw Recoil_err('Reading selectors within atomicUpdate is not supported');
            }

            var loadable = getRecoilValueAsLoadable$3(_this10._store, recoilValue, _this10._treeState);

            if (loadable.state === 'hasValue') {
                return loadable.contents;
            } else if (loadable.state === 'hasError') {
                throw loadable.contents;
            } else {
                throw Recoil_err("Expected Recoil atom ".concat(recoilValue.key, " to have a value, but it is in a loading state."));
            }
        });

        _defineProperty(this, "set", function(recoilState, valueOrUpdater) {
            if (!isAtom(recoilState)) {
                throw Recoil_err('Setting selectors within atomicUpdate is not supported');
            }

            if (typeof valueOrUpdater === 'function') {
                var current = _this10.get(recoilState);

                _this10._changes.set(recoilState.key, valueOrUpdater(current)); // flowlint-line unclear-type:off

            } else {
                _this10._changes.set(recoilState.key, valueOrUpdater);
            }
        });

        _defineProperty(this, "reset", function(recoilState) {
            _this10.set(recoilState, DEFAULT_VALUE$4);
        });

        this._store = store;
        this._treeState = treeState;
        this._changes = new Map();
    } // Allow destructing
    // eslint-disable-next-line fb-www/extra-arrow-initializer


    _createClass(TransactionInterfaceImpl, [{
        key: "newTreeState_INTERNAL",
        value: function newTreeState_INTERNAL() {
            if (this._changes.size === 0) {
                return this._treeState;
            }

            var newState = copyTreeState$1(this._treeState);

            var _iterator43 = _createForOfIteratorHelper(this._changes),
                _step43;

            try {
                for (_iterator43.s(); !(_step43 = _iterator43.n()).done;) {
                    var _step43$value = _slicedToArray(_step43.value, 2),
                        k = _step43$value[0],
                        v = _step43$value[1];

                    writeLoadableToTreeState$1(newState, k, loadableWithValue$1(v));
                }
            } catch (err) {
                _iterator43.e(err);
            } finally {
                _iterator43.f();
            }

            invalidateDownstreams$1(this._store, newState);
            return newState;
        }
    }]);

    return TransactionInterfaceImpl;
}();

function atomicUpdater(store) {
    return function(fn) {
        store.replaceState(function(treeState) {
            var changeset = new TransactionInterfaceImpl(store, treeState);
            fn(changeset);
            return changeset.newTreeState_INTERNAL();
        });
    };
}

var Recoil_AtomicUpdates = {
    atomicUpdater: atomicUpdater
};
var Recoil_AtomicUpdates_1 = Recoil_AtomicUpdates.atomicUpdater;
var Recoil_AtomicUpdates$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    atomicUpdater: Recoil_AtomicUpdates_1
});
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function invariant(condition, message) {
    if (!condition) {
        throw new Error(message);
    }
}

var invariant_1 = invariant; // @oss-only

var Recoil_invariant = invariant_1;
var atomicUpdater$1 = Recoil_AtomicUpdates$1.atomicUpdater;
var batchUpdates$4 = Recoil_Batching.batchUpdates;
var DEFAULT_VALUE$5 = Recoil_Node.DEFAULT_VALUE;
var useStoreRef$6 = Recoil_RecoilRoot_react.useStoreRef;
var setRecoilValue$3 = Recoil_RecoilValueInterface.setRecoilValue;
var Snapshot$2 = Recoil_Snapshot$1.Snapshot,
    cloneSnapshot$2 = Recoil_Snapshot$1.cloneSnapshot;
var useGotoRecoilSnapshot$1 = Recoil_SnapshotHooks.useGotoRecoilSnapshot;
var useCallback$3 = react.useCallback;

var Sentinel = /*#__PURE__*/ _createClass(function Sentinel() {
    _classCallCheck(this, Sentinel);
});

var SENTINEL = new Sentinel();

function useRecoilCallback(fn, deps) {
    var storeRef = useStoreRef$6();
    var gotoSnapshot = useGotoRecoilSnapshot$1();
    return useCallback$3(function() {
            for (var _len6 = arguments.length, args = new Array(_len6), _key9 = 0; _key9 < _len6; _key9++) {
                args[_key9] = arguments[_key9];
            }

            function set(recoilState, newValueOrUpdater) {
                setRecoilValue$3(storeRef.current, recoilState, newValueOrUpdater);
            }

            function reset(recoilState) {
                setRecoilValue$3(storeRef.current, recoilState, DEFAULT_VALUE$5);
            } // Use currentTree for the snapshot to show the currently committed state


            var snapshot = cloneSnapshot$2(storeRef.current); // FIXME massive gains from doing this lazily

            var atomicUpdate = atomicUpdater$1(storeRef.current);
            var ret = SENTINEL;
            batchUpdates$4(function() {
                var errMsg = 'useRecoilCallback expects a function that returns a function: ' + 'it accepts a function of the type (RecoilInterface) => T = R ' + 'and returns a callback function T => R, where RecoilInterface is an ' + 'object {snapshot, set, ...} and T and R are the argument and return ' + 'types of the callback you want to create.  Please see the docs ' + 'at recoiljs.org for details.';

                if (typeof fn !== 'function') {
                    throw Recoil_err(errMsg);
                } // flowlint-next-line unclear-type:off


                var cb = fn({
                    set: set,
                    reset: reset,
                    snapshot: snapshot,
                    gotoSnapshot: gotoSnapshot,
                    transact_UNSTABLE: atomicUpdate
                });

                if (typeof cb !== 'function') {
                    throw Recoil_err(errMsg);
                }

                ret = cb.apply(void 0, args);
            });
            !!(ret instanceof Sentinel) ? process.env.NODE_ENV !== "production" ? Recoil_invariant(false, 'batchUpdates should return immediately') : Recoil_invariant(false): void 0;
            return ret;
        }, deps != null ? [].concat(_toConsumableArray(deps), [storeRef]) : undefined // eslint-disable-line fb-www/react-hooks-deps
    );
}

var Recoil_useRecoilCallback = useRecoilCallback;
var getNode$5 = Recoil_Node.getNode;
var useStoreRef$7 = Recoil_RecoilRoot_react.useStoreRef;
var useCallback$4 = react.useCallback;

function useRecoilRefresher(recoilValue) {
    var storeRef = useStoreRef$7();
    return useCallback$4(function() {
        var _node$clearCache;

        var store = storeRef.current;

        var _store$getState4 = store.getState(),
            currentTree = _store$getState4.currentTree;

        var node = getNode$5(recoilValue.key);
        (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, currentTree);
    }, [recoilValue, storeRef]);
}

var Recoil_useRecoilRefresher = useRecoilRefresher;
var atomicUpdater$2 = Recoil_AtomicUpdates$1.atomicUpdater;
var useStoreRef$8 = Recoil_RecoilRoot_react.useStoreRef;
var useMemo$3 = react.useMemo;

function useRecoilTransaction(fn, deps) {
    var storeRef = useStoreRef$8();
    return useMemo$3(function() {
            return function() {
                for (var _len7 = arguments.length, args = new Array(_len7), _key10 = 0; _key10 < _len7; _key10++) {
                    args[_key10] = arguments[_key10];
                }

                var atomicUpdate = atomicUpdater$2(storeRef.current);
                atomicUpdate(function(transactionInterface) {
                    fn(transactionInterface).apply(void 0, args);
                });
            };
        }, deps != null ? [].concat(_toConsumableArray(deps), [storeRef]) : undefined // eslint-disable-line fb-www/react-hooks-deps
    );
}

var Recoil_useRecoilTransaction = useRecoilTransaction;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function isNode(object) {
    var _ownerDocument, _doc$defaultView;

    if (typeof window === 'undefined') {
        return false;
    }

    var doc = object != null ? (_ownerDocument = object.ownerDocument) !== null && _ownerDocument !== void 0 ? _ownerDocument : object : document;
    var defaultView = (_doc$defaultView = doc.defaultView) !== null && _doc$defaultView !== void 0 ? _doc$defaultView : window;
    return !!(object != null && (typeof defaultView.Node === 'function' ? object instanceof defaultView.Node : typeof object === 'object' && typeof object.nodeType === 'number' && typeof object.nodeName === 'string'));
}

var Recoil_isNode = isNode;
var isReactNative$1 = Recoil_Environment.isReactNative,
    isSSR$4 = Recoil_Environment.isSSR;

function shouldNotBeFrozen(value) {
    // Primitives and functions:
    if (value === null || typeof value !== 'object') {
        return true;
    } // React elements:


    switch (typeof value.$$typeof) {
        case 'symbol':
            return true;

        case 'number':
            return true;
    } // Immutable structures:


    if (value['@@__IMMUTABLE_ITERABLE__@@'] != null || value['@@__IMMUTABLE_KEYED__@@'] != null || value['@@__IMMUTABLE_INDEXED__@@'] != null || value['@@__IMMUTABLE_ORDERED__@@'] != null || value['@@__IMMUTABLE_RECORD__@@'] != null) {
        return true;
    } // DOM nodes:


    if (Recoil_isNode(value)) {
        return true;
    }

    if (Recoil_isPromise(value)) {
        return true;
    }

    if (value instanceof Error) {
        return true;
    }

    if (ArrayBuffer.isView(value)) {
        return true;
    } // Some environments, just as Jest, don't work with the instanceof check


    if (!isSSR$4 && !isReactNative$1 && ( // $FlowFixMe(site=recoil) Window does not have a FlowType definition https://github.com/facebook/flow/issues/6709
            value === window || value instanceof Window)) {
        return true;
    }

    return false;
} // Recursively freeze a value to enforce it is read-only.
// This may also have minimal performance improvements for enumerating
// objects (based on browser implementations, of course)


function deepFreezeValue(value) {
    if (typeof value !== 'object' || shouldNotBeFrozen(value)) {
        return;
    }

    Object.freeze(value); // Make all properties read-only

    for (var key in value) {
        // $FlowFixMe[method-unbinding] added when improving typing for this parameters
        if (Object.prototype.hasOwnProperty.call(value, key)) {
            var prop = value[key]; // Prevent infinite recurssion for circular references.

            if (typeof prop === 'object' && prop != null && !Object.isFrozen(prop)) {
                deepFreezeValue(prop);
            }
        }
    }

    Object.seal(value); // This also makes existing properties non-configurable.
}

var Recoil_deepFreezeValue = deepFreezeValue;
var TIME_WARNING_THRESHOLD_MS = 15;

function stringify(x, opt, key) {
    // A optimization to avoid the more expensive JSON.stringify() for simple strings
    // This may lose protection for u2028 and u2029, though.
    if (typeof x === 'string' && !x.includes('"') && !x.includes('\\')) {
        return "\"".concat(x, "\"");
    } // Handle primitive types


    switch (typeof x) {
        case 'undefined':
            return '';
            // JSON.stringify(undefined) returns undefined, but we always want to return a string

        case 'boolean':
            return x ? 'true' : 'false';

        case 'number':
        case 'symbol':
            // case 'bigint': // BigInt is not supported in www
            return String(x);

        case 'string':
            // Add surrounding quotes and escape internal quotes
            return JSON.stringify(x);

        case 'function':
            if ((opt === null || opt === void 0 ? void 0 : opt.allowFunctions) !== true) {
                throw Recoil_err('Attempt to serialize function in a Recoil cache key');
            }

            return "__FUNCTION(".concat(x.name, ")__");
    }

    if (x === null) {
        return 'null';
    } // Fallback case for unknown types


    if (typeof x !== 'object') {
        var _JSON$stringify;

        return (_JSON$stringify = JSON.stringify(x)) !== null && _JSON$stringify !== void 0 ? _JSON$stringify : '';
    } // Deal with all promises as equivalent for now.


    if (Recoil_isPromise(x)) {
        return '__PROMISE__';
    } // Arrays handle recursive stringification


    if (Array.isArray(x)) {
        return "[".concat(x.map(function(v, i) {
            return stringify(v, opt, i.toString());
        }), "]");
    } // If an object defines a toJSON() method, then use that to override the
    // serialization.  This matches the behavior of JSON.stringify().
    // Pass the key for compatibility.
    // Immutable.js collections define this method to allow us to serialize them.


    if (typeof x.toJSON === 'function') {
        // flowlint-next-line unclear-type: off
        return stringify(x.toJSON(key), opt, key);
    } // For built-in Maps, sort the keys in a stable order instead of the
    // default insertion order.  Support non-string keys.


    if (x instanceof Map) {
        var obj = {};

        var _iterator44 = _createForOfIteratorHelper(x),
            _step44;

        try {
            for (_iterator44.s(); !(_step44 = _iterator44.n()).done;) {
                var _step44$value = _slicedToArray(_step44.value, 2),
                    k = _step44$value[0],
                    v = _step44$value[1];

                // Stringify will escape any nested quotes
                obj[typeof k === 'string' ? k : stringify(k, opt)] = v;
            }
        } catch (err) {
            _iterator44.e(err);
        } finally {
            _iterator44.f();
        }

        return stringify(obj, opt, key);
    } // For built-in Sets, sort the keys in a stable order instead of the
    // default insertion order.


    if (x instanceof Set) {
        return stringify(Array.from(x).sort(function(a, b) {
            return stringify(a, opt).localeCompare(stringify(b, opt));
        }), opt, key);
    } // Anything else that is iterable serialize as an Array.


    if (Symbol !== undefined && x[Symbol.iterator] != null && typeof x[Symbol.iterator] === 'function') {
        // flowlint-next-line unclear-type: off
        return stringify(Array.from(x), opt, key);
    } // For all other Objects, sort the keys in a stable order.


    return "{".concat(Object.keys(x).filter(function(k) {
            return x[k] !== undefined;
        }).sort() // stringify the key to add quotes and escape any nested slashes or quotes.
        .map(function(k) {
            return "".concat(stringify(k, opt), ":").concat(stringify(x[k], opt, k));
        }).join(','), "}");
} // Utility similar to JSON.stringify() except:
// * Serialize built-in Sets as an Array
// * Serialize built-in Maps as an Object.  Supports non-string keys.
// * Serialize other iterables as arrays
// * Sort the keys of Objects and Maps to have a stable order based on string conversion.
//    This overrides their default insertion order.
// * Still uses toJSON() of any object to override serialization
// * Support Symbols (though don't guarantee uniqueness)
// * We could support BigInt, but Flow doesn't seem to like it.
// See Recoil_stableStringify-test.js for examples


function stableStringify(x) {
    var opt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
        allowFunctions: false
    };

    if (process.env.NODE_ENV !== "production") {
        if (typeof window !== 'undefined') {
            var startTime = window.performance ? window.performance.now() : 0;
            var str = stringify(x, opt);
            var endTime = window.performance ? window.performance.now() : 0;

            if (endTime - startTime > TIME_WARNING_THRESHOLD_MS) {
                /* eslint-disable fb-www/no-console */
                console.groupCollapsed("Recoil: Spent ".concat(endTime - startTime, "ms computing a cache key"));
                console.warn(x, str);
                console.groupEnd();
                /* eslint-enable fb-www/no-console */
            }

            return str;
        }
    }

    return stringify(x, opt);
}

var Recoil_stableStringify = stableStringify;

var TreeCache = /*#__PURE__*/ function() {
    function TreeCache(options) {
        _classCallCheck(this, TreeCache);

        var _options$onHit, _options$onSet, _options$mapNodeValue;

        _defineProperty(this, "_numLeafs", void 0);

        _defineProperty(this, "_root", void 0);

        _defineProperty(this, "_onHit", void 0);

        _defineProperty(this, "_onSet", void 0);

        _defineProperty(this, "_mapNodeValue", void 0);

        this._numLeafs = 0;
        this._root = null;
        this._onHit = (_options$onHit = options === null || options === void 0 ? void 0 : options.onHit) !== null && _options$onHit !== void 0 ? _options$onHit : function() {};
        this._onSet = (_options$onSet = options === null || options === void 0 ? void 0 : options.onSet) !== null && _options$onSet !== void 0 ? _options$onSet : function() {};
        this._mapNodeValue = (_options$mapNodeValue = options === null || options === void 0 ? void 0 : options.mapNodeValue) !== null && _options$mapNodeValue !== void 0 ? _options$mapNodeValue : function(val) {
            return val;
        };
    }

    _createClass(TreeCache, [{
        key: "size",
        value: function size() {
                return this._numLeafs;
            } // TODO: nodeCount(): number

    }, {
        key: "root",
        value: function root() {
            return this._root;
        }
    }, {
        key: "get",
        value: function get(getNodeValue, handlers) {
            var _this$getLeafNode;

            return (_this$getLeafNode = this.getLeafNode(getNodeValue, handlers)) === null || _this$getLeafNode === void 0 ? void 0 : _this$getLeafNode.value;
        }
    }, {
        key: "getLeafNode",
        value: function getLeafNode(getNodeValue, handlers) {
            var _this11 = this;

            return findLeaf(this.root(), function(nodeKey) {
                return _this11._mapNodeValue(getNodeValue(nodeKey));
            }, {
                onNodeVisit: function onNodeVisit(node) {
                    handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

                    if (node.type === 'leaf') {
                        _this11._onHit(node);
                    }
                }
            });
        }
    }, {
        key: "set",
        value: function set(route, value, handlers) {
            var _this12 = this;

            var leafNode;
            var newRoot = null;

            var setRetryablePart = function setRetryablePart() {
                newRoot = addLeaf(_this12.root(), route.map(function(_ref15) {
                    var _ref16 = _slicedToArray(_ref15, 2),
                        nodeKey = _ref16[0],
                        nodeValue = _ref16[1];

                    return [nodeKey, _this12._mapNodeValue(nodeValue)];
                }), null, value, null, {
                    onNodeVisit: function onNodeVisit(node) {
                        handlers === null || handlers === void 0 ? void 0 : handlers.onNodeVisit(node);

                        if (node.type === 'leaf') {
                            leafNode = node;
                        }
                    }
                }, function() {
                    _this12.clear();

                    setRetryablePart();
                });
            };

            setRetryablePart();

            if (!this.root()) {
                this._root = newRoot;
            }

            this._numLeafs++;

            this._onSet(Recoil_nullthrows(leafNode));
        }
    }, {
        key: "delete",
        value: function _delete(node) {
            if (!this.root()) {
                return false;
            }

            var root = Recoil_nullthrows(this.root());
            var existsInTree = pruneNodeFromTree(root, node, node.parent);

            if (!existsInTree) {
                return false;
            }

            if (node === root || root.type === 'branch' && !root.branches.size) {
                this._root = null;
                this._numLeafs = 0;
                return true;
            }

            this._numLeafs -= countDownstreamLeaves(node);
            return true;
        }
    }, {
        key: "clear",
        value: function clear() {
            this._numLeafs = 0;
            this._root = null;
        }
    }]);

    return TreeCache;
}();

var findLeaf = function findLeaf(root, getNodeValue, handlers) {
    var _handlers$onNodeVisit;

    if (root == null) {
        return undefined;
    }

    handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit = handlers.onNodeVisit) === null || _handlers$onNodeVisit === void 0 ? void 0 : _handlers$onNodeVisit.call(handlers, root);

    if (root.type === 'leaf') {
        return root;
    }

    var nodeValue = getNodeValue(root.nodeKey);
    return findLeaf(root.branches.get(nodeValue), getNodeValue, handlers);
};

var addLeaf = function addLeaf(root, route, parent, value, branchKey, handlers, onAbort) {
    var _handlers$onNodeVisit2;

    var node;

    if (root == null) {
        if (route.length === 0) {
            node = {
                type: 'leaf',
                value: value,
                parent: parent,
                branchKey: branchKey
            };
        } else {
            var _route = _toArray(route),
                path = _route[0],
                rest = _route.slice(1);

            var _path = _slicedToArray(path, 2),
                nodeKey = _path[0],
                nodeValue = _path[1];

            node = {
                type: 'branch',
                nodeKey: nodeKey,
                parent: parent,
                branches: new Map(),
                branchKey: branchKey
            };
            node.branches.set(nodeValue, addLeaf(null, rest, node, value, nodeValue, handlers, onAbort));
        }
    } else {
        node = root;

        if (route.length) {
            var _route2 = _toArray(route),
                _path2 = _route2[0],
                _rest = _route2.slice(1);

            var _path3 = _slicedToArray(_path2, 2),
                _nodeKey = _path3[0],
                _nodeValue = _path3[1];

            if (root.type !== 'branch' || root.nodeKey !== _nodeKey) {
                Recoil_recoverableViolation('Existing cache must have a branch midway through the ' + 'route with matching node key. Resetting cache.');
                onAbort();
                return node; // ignored
            }

            root.branches.set(_nodeValue, addLeaf(root.branches.get(_nodeValue), _rest, root, value, _nodeValue, handlers, onAbort));
        }
    }

    handlers === null || handlers === void 0 ? void 0 : (_handlers$onNodeVisit2 = handlers.onNodeVisit) === null || _handlers$onNodeVisit2 === void 0 ? void 0 : _handlers$onNodeVisit2.call(handlers, node);
    return node;
};

var pruneNodeFromTree = function pruneNodeFromTree(root, node, parent) {
    if (!parent) {
        return root === node;
    }

    parent.branches.delete(node.branchKey);
    return pruneUpstreamBranches(root, parent, parent.parent);
};

var pruneUpstreamBranches = function pruneUpstreamBranches(root, branchNode, parent) {
    if (!parent) {
        return root === branchNode;
    }

    if (branchNode.branches.size === 0) {
        parent.branches.delete(branchNode.branchKey);
    }

    return pruneUpstreamBranches(root, parent, parent.parent);
};

var countDownstreamLeaves = function countDownstreamLeaves(node) {
    return node.type === 'leaf' ? 1 : Array.from(node.branches.values()).reduce(function(sum, currNode) {
        return sum + countDownstreamLeaves(currNode);
    }, 0);
};

var Recoil_TreeCache = {
    TreeCache: TreeCache
};
var Recoil_TreeCache_1 = Recoil_TreeCache.TreeCache;
var Recoil_TreeCache$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    TreeCache: Recoil_TreeCache_1
});

var LRUCache = /*#__PURE__*/ function() {
    function LRUCache(options) {
        _classCallCheck(this, LRUCache);

        var _options$mapKey;

        _defineProperty(this, "_maxSize", void 0);

        _defineProperty(this, "_size", void 0);

        _defineProperty(this, "_head", void 0);

        _defineProperty(this, "_tail", void 0);

        _defineProperty(this, "_map", void 0);

        _defineProperty(this, "_keyMapper", void 0);

        this._maxSize = options.maxSize;
        this._size = 0;
        this._head = null;
        this._tail = null;
        this._map = new Map();
        this._keyMapper = (_options$mapKey = options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : function(v) {
            return v;
        };
    }

    _createClass(LRUCache, [{
        key: "head",
        value: function head() {
            return this._head;
        }
    }, {
        key: "tail",
        value: function tail() {
            return this._tail;
        }
    }, {
        key: "size",
        value: function size() {
            return this._size;
        }
    }, {
        key: "maxSize",
        value: function maxSize() {
            return this._maxSize;
        }
    }, {
        key: "has",
        value: function has(key) {
            return this._map.has(this._keyMapper(key));
        }
    }, {
        key: "get",
        value: function get(key) {
            var mappedKey = this._keyMapper(key);

            var node = this._map.get(mappedKey);

            if (!node) {
                return undefined;
            }

            this.set(key, node.value);
            return node.value;
        }
    }, {
        key: "set",
        value: function set(key, val) {
            var mappedKey = this._keyMapper(key);

            var existingNode = this._map.get(mappedKey);

            if (existingNode) {
                this.delete(key);
            }

            var head = this.head();
            var node = {
                key: key,
                right: head,
                left: null,
                value: val
            };

            if (head) {
                head.left = node;
            } else {
                this._tail = node;
            }

            this._map.set(mappedKey, node);

            this._head = node;
            this._size++;

            this._maybeDeleteLRU();
        }
    }, {
        key: "_maybeDeleteLRU",
        value: function _maybeDeleteLRU() {
            if (this.size() > this.maxSize()) {
                this.deleteLru();
            }
        }
    }, {
        key: "deleteLru",
        value: function deleteLru() {
            var tail = this.tail();

            if (tail) {
                this.delete(tail.key);
            }
        }
    }, {
        key: "delete",
        value: function _delete(key) {
            var mappedKey = this._keyMapper(key);

            if (!this._size || !this._map.has(mappedKey)) {
                return;
            }

            var node = Recoil_nullthrows(this._map.get(mappedKey));
            var right = node.right;
            var left = node.left;

            if (right) {
                right.left = node.left;
            }

            if (left) {
                left.right = node.right;
            }

            if (node === this.head()) {
                this._head = right;
            }

            if (node === this.tail()) {
                this._tail = left;
            }

            this._map.delete(mappedKey);

            this._size--;
        }
    }, {
        key: "clear",
        value: function clear() {
            this._size = 0;
            this._head = null;
            this._tail = null;
            this._map = new Map();
        }
    }]);

    return LRUCache;
}();

var Recoil_LRUCache = {
    LRUCache: LRUCache
};
var Recoil_LRUCache_1 = Recoil_LRUCache.LRUCache;
var Recoil_LRUCache$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    LRUCache: Recoil_LRUCache_1
});
var LRUCache$1 = Recoil_LRUCache$1.LRUCache;
var TreeCache$1 = Recoil_TreeCache$1.TreeCache;

function treeCacheLRU(maxSize) {
    var mapNodeValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function(v) {
        return v;
    };
    var lruCache = new LRUCache$1({
        maxSize: maxSize
    });
    var cache = new TreeCache$1({
        mapNodeValue: mapNodeValue,
        onHit: function onHit(node) {
            lruCache.set(node, true);
        },
        onSet: function onSet(node) {
            var lruNode = lruCache.tail();
            lruCache.set(node, true);

            if (lruNode && cache.size() > maxSize) {
                cache.delete(lruNode.key);
            }
        }
    }); // $FlowFixMe[method-unbinding]

    return cache;
}

var Recoil_treeCacheLRU = treeCacheLRU;
var TreeCache$2 = Recoil_TreeCache$1.TreeCache;
var defaultPolicy = {
    equality: 'reference',
    eviction: 'keep-all',
    maxSize: Infinity
};

function treeCacheFromPolicy() {
    var _ref17 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPolicy,
        _ref17$equality = _ref17.equality,
        equality = _ref17$equality === void 0 ? defaultPolicy.equality : _ref17$equality,
        _ref17$eviction = _ref17.eviction,
        eviction = _ref17$eviction === void 0 ? defaultPolicy.eviction : _ref17$eviction,
        _ref17$maxSize = _ref17.maxSize,
        maxSize = _ref17$maxSize === void 0 ? defaultPolicy.maxSize : _ref17$maxSize;

    var valueMapper = getValueMapper(equality);
    var treeCache = getTreeCache(eviction, maxSize, valueMapper);
    return treeCache;
}

function getValueMapper(equality) {
    switch (equality) {
        case 'reference':
            return function(val) {
                return val;
            };

        case 'value':
            return function(val) {
                return Recoil_stableStringify(val);
            };
    }

    throw Recoil_err("Unrecognized equality policy ".concat(equality));
}

function getTreeCache(eviction, maxSize, mapNodeValue) {
    switch (eviction) {
        case 'keep-all':
            // $FlowFixMe[method-unbinding]
            return new TreeCache$2({
                mapNodeValue: mapNodeValue
            });

        case 'lru':
            return Recoil_treeCacheLRU(Recoil_nullthrows(maxSize), mapNodeValue);

        case 'most-recent':
            return Recoil_treeCacheLRU(1, mapNodeValue);
    }

    throw Recoil_err("Unrecognized eviction policy ".concat(eviction));
}

var Recoil_treeCacheFromPolicy = treeCacheFromPolicy;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 *
 * This is a stub for some integration into FB internal stuff
 */

function startPerfBlock(_id) {
    return function() {
        return null;
    };
}

var Recoil_PerformanceTimings = {
    startPerfBlock: startPerfBlock
};
var loadableWithError$1 = Recoil_Loadable$1.loadableWithError,
    loadableWithPromise$1 = Recoil_Loadable$1.loadableWithPromise,
    loadableWithValue$2 = Recoil_Loadable$1.loadableWithValue;
var getNodeLoadable$2 = Recoil_FunctionalCore.getNodeLoadable,
    peekNodeLoadable$1 = Recoil_FunctionalCore.peekNodeLoadable,
    setNodeValue$3 = Recoil_FunctionalCore.setNodeValue;
var saveDependencyMapToStore$1 = Recoil_Graph.saveDependencyMapToStore;
var DEFAULT_VALUE$6 = Recoil_Node.DEFAULT_VALUE,
    RecoilValueNotReady$2 = Recoil_Node.RecoilValueNotReady,
    getConfigDeletionHandler$1 = Recoil_Node.getConfigDeletionHandler,
    getNode$6 = Recoil_Node.getNode,
    registerNode$1 = Recoil_Node.registerNode;
var isRecoilValue$3 = Recoil_RecoilValue$1.isRecoilValue;
var AbstractRecoilValue$5 = Recoil_RecoilValue$1.AbstractRecoilValue;
var markRecoilValueModified$1 = Recoil_RecoilValueInterface.markRecoilValueModified,
    setRecoilValueLoadable$2 = Recoil_RecoilValueInterface.setRecoilValueLoadable;
var retainedByOptionWithDefault$1 = Recoil_Retention.retainedByOptionWithDefault;
var cloneSnapshot$3 = Recoil_Snapshot$1.cloneSnapshot;
var startPerfBlock$1 = Recoil_PerformanceTimings.startPerfBlock;

var Canceled = /*#__PURE__*/ _createClass(function Canceled() {
    _classCallCheck(this, Canceled);
});

var CANCELED = new Canceled();
/**
 * An ExecutionId is an arbitrary ID that lets us distinguish executions from
 * each other. This is necessary as we need a way of solving this problem:
 * "given 3 async executions, only update state for the 'latest' execution when
 * it finishes running regardless of when the other 2 finish". ExecutionIds
 * provide a convenient way of identifying executions so that we can track and
 * manage them over time.
 */

var dependencyStack = []; // for detecting circular dependencies.

var waitingStores = new Map();
/* eslint-disable no-redeclare */

var getNewExecutionId = function() {
    var executionId = 0;
    return function() {
        return executionId++;
    };
}();

function getInitialExecutionInfo() {
    return {
        depValuesDiscoveredSoFarDuringAsyncWork: null,
        latestLoadable: null,
        latestExecutionId: null,
        stateVersion: null
    };
}

function selector(options) {
    var recoilValue = null;
    var key = options.key,
        get = options.get,
        cachePolicy = options.cachePolicy_UNSTABLE;
    var set = options.set != null ? options.set : undefined; // flow

    if (process.env.NODE_ENV !== "production") {
        if (typeof key !== 'string') {
            throw Recoil_err('A key option with a unique string value must be provided when creating a selector.');
        }

        if (typeof get !== 'function') {
            throw Recoil_err('Selectors must specify a get callback option to get the selector value.');
        }
    } // This is every discovered dependency across executions


    var discoveredDependencyNodeKeys = new Set();
    var cache = Recoil_treeCacheFromPolicy(cachePolicy !== null && cachePolicy !== void 0 ? cachePolicy : {
        equality: 'reference',
        eviction: 'keep-all'
    });
    var retainedBy = retainedByOptionWithDefault$1(options.retainedBy_UNSTABLE);
    var executionInfoMap = new Map();
    var liveStoresCount = 0;

    function selectorIsLive() {
        return !Recoil_gkx_1('recoil_memory_managament_2020') || liveStoresCount > 0;
    }

    function getExecutionInfo(store) {
        if (!executionInfoMap.has(store)) {
            executionInfoMap.set(store, getInitialExecutionInfo());
        }

        return Recoil_nullthrows(executionInfoMap.get(store));
    }

    function selectorInit(store) {
        liveStoresCount++;
        store.getState().knownSelectors.add(key); // FIXME remove knownSelectors?

        return function() {
            liveStoresCount--;
            store.getState().knownSelectors.delete(key);
            executionInfoMap.delete(store);
        };
    }

    function selectorShouldDeleteConfigOnRelease() {
        return getConfigDeletionHandler$1(key) !== undefined && !selectorIsLive();
    }

    function notifyStoreWhenAsyncSettles(store, loadable, executionId) {
        if (loadable.state === 'loading') {
            var stores = waitingStores.get(executionId);

            if (stores == null) {
                waitingStores.set(executionId, stores = new Set());
            }

            stores.add(store);
        }
    }

    function notifyStoresOfSettledAsync(newLoadable, executionId) {
        var stores = waitingStores.get(executionId);

        if (stores !== undefined) {
            var _iterator45 = _createForOfIteratorHelper(stores),
                _step45;

            try {
                for (_iterator45.s(); !(_step45 = _iterator45.n()).done;) {
                    var store = _step45.value;
                    setRecoilValueLoadable$2(store, new AbstractRecoilValue$5(key), newLoadable);
                }
            } catch (err) {
                _iterator45.e(err);
            } finally {
                _iterator45.f();
            }

            waitingStores.delete(executionId);
        }
    }

    function getCachedNodeLoadable(store, state, nodeKey) {
        var isKeyPointingToSelector = store.getState().knownSelectors.has(nodeKey);
        /**
         * It's important that we don't bypass calling getNodeLoadable for atoms
         * as getNodeLoadable has side effects in state
         */

        if (isKeyPointingToSelector && state.atomValues.has(nodeKey)) {
            return Recoil_nullthrows(state.atomValues.get(nodeKey));
        }

        var loadable = getNodeLoadable$2(store, state, nodeKey);

        if (loadable.state !== 'loading' && isKeyPointingToSelector) {
            state.atomValues.set(nodeKey, loadable);
        }

        return loadable;
    }
    /**
     * This function attaches a then() and a catch() to a promise that was
     * returned from a selector's get() (either explicitly or implicitly by
     * running a function that uses the "async" keyword). If a selector's get()
     * returns a promise, we have two possibilities:
     *
     * 1. The promise will resolve, in which case it will have completely finished
     *    executing without any remaining pending dependencies. No more retries
     *    are needed and we can proceed with updating the cache and notifying
     *    subscribers (if it is the latest execution, otherwise only the cache
     *    will be updated and subscriptions will not be fired). This is the case
     *    handled by the attached then() handler.
     *
     * 2. The promise will throw because it either has an error or it came across
     *    an async dependency that has not yet resolved, in which case we will
     *    call wrapDepdencyPromise(), whose responsibility is to handle dependency
     *    promises. This case is handled by the attached catch() handler.
     *
     * Both branches will eventually resolve to the final result of the selector
     * (or an error if a real error occurred).
     *
     * The execution will run to completion even if it is stale, and its value
     * will be cached. But stale executions will not update global state or update
     * executionInfo as that is the responsibility of the 'latest' execution.
     *
     * Note this function should not be passed a promise that was thrown--AKA a
     * dependency promise. Dependency promises should be passed to
     * wrapPendingDependencyPromise()).
     */


    function wrapPendingPromise(store, promise, state, depValues, executionId, loadingDepsState) {
        return promise.then(function(value) {
            if (!selectorIsLive()) {
                // The selector was released since the request began; ignore the response.
                clearExecutionInfo(store, executionId);
                throw CANCELED;
            }

            var loadable = loadableWithValue$2(value);
            maybeFreezeValue(value);
            setCache(state, depValuesToDepRoute(depValues), loadable);
            setDepsInStore(store, state, new Set(depValues.keys()), executionId);
            setLoadableInStoreToNotifyDeps(store, loadable, executionId);
            return value;
        }).catch(function(errorOrPromise) {
            if (!selectorIsLive()) {
                // The selector was released since the request began; ignore the response.
                clearExecutionInfo(store, executionId);
                throw CANCELED;
            }

            if (isLatestExecution(store, executionId)) {
                updateExecutionInfoDepValues(depValues, store, executionId);
            }

            if (Recoil_isPromise(errorOrPromise)) {
                return wrapPendingDependencyPromise(store, errorOrPromise, state, depValues, executionId, loadingDepsState);
            }

            var loadable = loadableWithError$1(errorOrPromise);
            maybeFreezeValue(errorOrPromise);
            setCache(state, depValuesToDepRoute(depValues), loadable);
            setDepsInStore(store, state, new Set(depValues.keys()), executionId);
            setLoadableInStoreToNotifyDeps(store, loadable, executionId);
            throw errorOrPromise;
        });
    }
    /**
     * This function attaches a then() and a catch() to a promise that was
     * thrown from a selector's get(). If a selector's get() throws a promise,
     * we have two possibilities:
     *
     * 1. The promise will resolve, meaning one of our selector's dependencies is
     *    now available and we should "retry" our get() by running it again. This
     *    is the case handled by the attached then() handler.
     *
     * 2. The promise will throw because something went wrong with the dependency
     *    promise (in other words a real error occurred). This case is handled by
     *    the attached catch() handler. If the dependency promise throws, it is
     *    _always_ a real error and not another dependency promise (any dependency
     *    promises would have been handled upstream).
     *
     * The then() branch will eventually resolve to the final result of the
     * selector (or an error if a real error occurs), and the catch() will always
     * resolve to an error because the dependency promise is a promise that was
     * wrapped upstream, meaning it will only resolve to its real value or to a
     * real error.
     *
     * The execution will run to completion even if it is stale, and its value
     * will be cached. But stale executions will not update global state or update
     * executionInfo as that is the responsibility of the 'latest' execution.
     *
     * Note this function should not be passed a promise that was returned from
     * get(). The intention is that this function is only passed promises that
     * were thrown due to a pending dependency. Promises returned by get() should
     * be passed to wrapPendingPromise() instead.
     */


    function wrapPendingDependencyPromise(store, promise, state, existingDeps, executionId, loadingDepsState) {
        return promise.then(function(resolvedDep) {
            if (!selectorIsLive()) {
                // The selector was released since the request began; ignore the response.
                clearExecutionInfo(store, executionId);
                throw CANCELED;
            } // Check if we are handling a pending Recoil dependency or if the user
            // threw their own Promise to "suspend" a selector evaluation.  We need
            // to check that the loadingDepPromise actually matches the promise that
            // we caught in case the selector happened to catch the promise we threw
            // for a pending Recoil dependency from `getRecoilValue()` and threw
            // their own promise instead.


            if (loadingDepsState.loadingDepKey != null && loadingDepsState.loadingDepPromise === promise) {
                /**
                 * Note for async atoms, this means we are changing the atom's value
                 * in the store for the given version. This should be alright because
                 * the version of state is now stale and a new version will have
                 * already been triggered by the atom being resolved (see this logic
                 * in Recoil_atom.js)
                 */
                state.atomValues.set(loadingDepsState.loadingDepKey, loadableWithValue$2(resolvedDep));
            } else {
                /**
                 * If resolvedDepKey is not defined, the promise was a user-thrown
                 * promise. User-thrown promises are an advanced feature and they
                 * should be avoided in almost all cases. Using `loadable.map()` inside
                 * of selectors for loading loadables and then throwing that mapped
                 * loadable's promise is an example of a user-thrown promise.
                 *
                 * When we hit a user-thrown promise, we have to bail out of an optimization
                 * where we bypass calculating selector cache keys for selectors that
                 * have been previously seen for a given state (these selectors are saved in
                 * state.atomValues) to avoid stale state as we have no way of knowing
                 * what state changes happened (if any) in result to the promise resolving.
                 *
                 * Ideally we would only bail out selectors that are in the chain of
                 * dependencies for this selector, but there's currently no way to get
                 * a full list of a selector's downstream nodes because the state that
                 * is executing may be a discarded tree (so store.getGraph(state.version)
                 * will be empty), and the full dep tree may not be in the selector
                 * caches in the case where the selector's cache was cleared. To solve
                 * for this we would have to keep track  of all running selector
                 * executions and their downstream deps. Because this only covers edge
                 * cases, that complexity might not be justifyable.
                 */
                store.getState().knownSelectors.forEach(function(nodeKey) {
                    state.atomValues.delete(nodeKey);
                });
            }
            /**
             * Optimization: Now that the dependency has resolved, let's try hitting
             * the cache in case the dep resolved to a value we have previously seen.
             *
             * TODO:
             * Note this optimization is not perfect because it only prevents re-executions
             * _after_ the point where an async dependency is found. Any code leading
             * up to the async dependency may have run unnecessarily. The ideal case
             * would be to wait for the async dependency to resolve first, check the
             * cache, and prevent _any_ execution of the selector if the resulting
             * value of the dependency leads to a path that is found in the cache.
             * The ideal case is more difficult to implement as it would require that
             * we capture and wait for the the async dependency right after checking
             * the cache. The current approach takes advantage of the fact that running
             * the selector already has a code path that lets us exit early when
             * an async dep resolves.
             */


            var cachedLoadable = getValFromCacheAndUpdatedDownstreamDeps(store, state);

            if (cachedLoadable && cachedLoadable.state === 'hasValue') {
                setExecutionInfo(cachedLoadable, store);
                return cachedLoadable.contents;
            }
            /**
             * If this execution is stale, let's check to see if there is some in
             * progress execution with a matching state. If we find a match, then
             * we can take the value from that in-progress execution. Note this may
             * sound like an edge case, but may be very common in cases where a
             * loading dependency resolves from loading to having a value (thus
             * possibly triggering a re-render), and React re-renders before the
             * chained .then() functions run, thus starting a new execution as the
             * dep has changed value. Without this check we will run the selector
             * twice (once in the new execution and once again in this .then(), so
             * this check is necessary to keep unnecessary re-executions to a
             * minimum).
             *
             * Also note this code does not check across all executions that may be
             * running. It only optimizes for the _latest_ execution per store as
             * we currently do not maintain a list of all currently running executions.
             * This means in some cases we may run selectors more than strictly
             * necessary when there are multiple executions running for the same
             * selector. This may be a valid tradeoff as checking for dep changes
             * across all in-progress executions may take longer than just
             * re-running the selector. This will be app-dependent, and maybe in the
             * future we can make the behavior configurable. An ideal fix may be
             * to extend the tree cache to support caching loading states.
             */


            if (!isLatestExecution(store, executionId)) {
                var _executionInfo$latest;

                var executionInfo = getExecutionInfoOfInProgressExecution(state);

                if ((executionInfo === null || executionInfo === void 0 ? void 0 : (_executionInfo$latest = executionInfo.latestLoadable) === null || _executionInfo$latest === void 0 ? void 0 : _executionInfo$latest.state) === 'loading') {
                    /**
                     * Returning promise here without wrapping as the wrapper logic was
                     * already done upstream when this promise was generated.
                     */
                    return executionInfo.latestLoadable.contents;
                }
            }

            var _evaluateSelectorGett = evaluateSelectorGetter(store, state, executionId),
                _evaluateSelectorGett2 = _slicedToArray(_evaluateSelectorGett, 2),
                loadable = _evaluateSelectorGett2[0],
                depValues = _evaluateSelectorGett2[1];

            if (isLatestExecution(store, executionId)) {
                updateExecutionInfoDepValues(depValues, store, executionId);
            }

            if (loadable.state !== 'loading') {
                setCache(state, depValuesToDepRoute(depValues), loadable);
                setDepsInStore(store, state, new Set(depValues.keys()), executionId);
                setLoadableInStoreToNotifyDeps(store, loadable, executionId);
            }

            if (loadable.state === 'hasError') {
                throw loadable.contents;
            }
            /**
             * Returning any promises here without wrapping as the wrapepr logic was
             * already done when we called evaluateSelectorGetter() to get this
             * loadable
             */


            return loadable.contents;
        }).catch(function(error) {
            if (error instanceof Canceled) {
                Recoil_recoverableViolation('Selector was released while it had dependencies');
                throw CANCELED;
            }

            if (!selectorIsLive()) {
                // The selector was released since the request began; ignore the response.
                clearExecutionInfo(store, executionId);
                throw CANCELED;
            }

            var loadable = loadableWithError$1(error);
            maybeFreezeValue(error);
            setCache(state, depValuesToDepRoute(existingDeps), loadableWithError$1(error));
            setDepsInStore(store, state, new Set(existingDeps.keys()), executionId);
            setLoadableInStoreToNotifyDeps(store, loadable, executionId);
            throw error;
        });
    }

    function setLoadableInStoreToNotifyDeps(store, loadable, executionId) {
        if (isLatestExecution(store, executionId)) {
            setExecutionInfo(loadable, store);
            notifyStoresOfSettledAsync(loadable, executionId);
        }
    }

    function setDepsInStore(store, state, deps, executionId) {
        var _store$getState, _store$getState$curre, _store$getState2, _store$getState2$next;

        if (isLatestExecution(store, executionId) || state.version === ((_store$getState = store.getState()) === null || _store$getState === void 0 ? void 0 : (_store$getState$curre = _store$getState.currentTree) === null || _store$getState$curre === void 0 ? void 0 : _store$getState$curre.version) || state.version === ((_store$getState2 = store.getState()) === null || _store$getState2 === void 0 ? void 0 : (_store$getState2$next = _store$getState2.nextTree) === null || _store$getState2$next === void 0 ? void 0 : _store$getState2$next.version)) {
            var _store$getState$nextT, _store$getState3, _store$getState3$next;

            saveDependencyMapToStore$1(new Map([
                [key, deps]
            ]), store, (_store$getState$nextT = (_store$getState3 = store.getState()) === null || _store$getState3 === void 0 ? void 0 : (_store$getState3$next = _store$getState3.nextTree) === null || _store$getState3$next === void 0 ? void 0 : _store$getState3$next.version) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree.version);
        }
    }

    function setNewDepInStore(store, state, deps, newDepKey, executionId) {
        deps.add(newDepKey);
        setDepsInStore(store, state, deps, executionId);
    }

    function evaluateSelectorGetter(store, state, executionId) {
        var endPerfBlock = startPerfBlock$1(key); // TODO T63965866: use execution ID here

        var result;
        var resultIsError = false;
        var loadable;
        var loadingDepsState = {
            loadingDepKey: null,
            loadingDepPromise: null
        };
        var depValues = new Map();
        /**
         * Starting a fresh set of deps that we'll be using to update state. We're
         * starting a new set versus adding it in existing state deps because
         * the version of state that we update deps for may be a more recent version
         * than the version the selector was called with. This is because the latest
         * execution will update the deps of the current/latest version of state (
         * this is safe to do because the fact that the selector is the latest
         * execution means the deps we discover below are our best guess at the
         * deps for the current/latest state in the store)
         */

        var deps = new Set();
        setDepsInStore(store, state, deps, executionId);

        function getRecoilValue(dep) {
            var depKey = dep.key;
            setNewDepInStore(store, state, deps, depKey, executionId);
            var depLoadable = getCachedNodeLoadable(store, state, depKey);
            depValues.set(depKey, depLoadable);

            switch (depLoadable.state) {
                case 'hasValue':
                    return depLoadable.contents;

                case 'hasError':
                    throw depLoadable.contents;

                case 'loading':
                    loadingDepsState.loadingDepKey = depKey;
                    loadingDepsState.loadingDepPromise = depLoadable.contents;
                    throw depLoadable.contents;
            }

            throw Recoil_err('Invalid Loadable state');
        }

        var gateCallback = false;

        var getCallback = function getCallback(fn) {
            return function() {
                if (!gateCallback) {
                    throw Recoil_err('getCallback() should only be called asynchronously after the selector is evalutated.  It can be used for selectors to return objects with callbacks that can obtain the current Recoil state without a subscription.');
                }

                var snapshot = cloneSnapshot$3(store);
                var cb = fn({
                    snapshot: snapshot
                });

                if (typeof cb !== 'function') {
                    throw Recoil_err('getCallback() expects a function that returns a function.');
                }

                return cb.apply(void 0, arguments);
            };
        };

        try {
            result = get({
                get: getRecoilValue,
                getCallback: getCallback
            });
            result = isRecoilValue$3(result) ? getRecoilValue(result) : result;
            gateCallback = true;

            if (Recoil_isPromise(result)) {
                result = wrapPendingPromise(store, result, state, depValues, executionId, loadingDepsState).finally(endPerfBlock);
            } else {
                endPerfBlock();
            }
        } catch (errorOrDepPromise) {
            result = errorOrDepPromise;

            if (Recoil_isPromise(result)) {
                result = wrapPendingDependencyPromise(store, result, state, depValues, executionId, loadingDepsState).finally(endPerfBlock);
            } else {
                resultIsError = true;
                endPerfBlock();
            }
        }

        if (resultIsError) {
            loadable = loadableWithError$1(result);
        } else if (Recoil_isPromise(result)) {
            loadable = loadableWithPromise$1(result);
        } else {
            loadable = loadableWithValue$2(result);
        }

        if (loadable.state !== 'loading') {
            maybeFreezeValue(loadable.contents);
        }

        return [loadable, depValues];
    }

    function getValFromCacheAndUpdatedDownstreamDeps(store, state) {
        var depsAfterCacheDone = new Set();
        var executionInfo = getExecutionInfo(store);
        var cachedVal;

        try {
            cachedVal = cache.get(function(nodeKey) {
                !(typeof nodeKey === 'string') ? process.env.NODE_ENV !== "production" ? Recoil_invariant(false, 'Cache nodeKey is type string') : Recoil_invariant(false): void 0;
                var loadable = getCachedNodeLoadable(store, state, nodeKey);
                return loadable.contents;
            }, {
                onNodeVisit: function onNodeVisit(node) {
                    if (node.type === 'branch' && node.nodeKey !== key && typeof node.nodeKey === 'string') {
                        depsAfterCacheDone.add(node.nodeKey);
                        discoveredDependencyNodeKeys.add(node.nodeKey);
                    }
                }
            });
        } catch (error) {
            throw Recoil_err("Problem with cache lookup for selector \"".concat(key, "\": ").concat(error.message));
        }
        /**
         * Ensure store contains correct dependencies if we hit the cache so that
         * the store deps and cache are in sync for a given state. This is important
         * because store deps are normally updated when new executions are created,
         * but cache hits don't trigger new executions but they still _may_ signifiy
         * a change in deps in the store if the store deps for this state are empty
         * or stale.
         */


        if (cachedVal) {
            setDepsInStore(store, state, depsAfterCacheDone, executionInfo.latestExecutionId);
        }

        return cachedVal;
    }
    /**
     * FIXME: dep keys should take into account the state of the loadable to
     * prevent the edge case where a loadable with an error and a loadable with
     * an error as a value are treated as the same thing incorrectly. For example
     * these two should be treated differently:
     *
     * selector({key: '', get: () => new Error('hi')});
     * selector({key: '', get () => {throw new Error('hi')}});
     *
     * With current implementation they are treated the same
     */


    function depValuesToDepRoute(depValues) {
        return Array.from(depValues.entries()).map(function(_ref18) {
            var _ref19 = _slicedToArray(_ref18, 2),
                depKey = _ref19[0],
                valLoadable = _ref19[1];

            return [depKey, valLoadable.contents];
        });
    }

    function getValFromRunningNewExecutionAndUpdatedDeps(store, state) {
        var newExecutionId = getNewExecutionId();

        var _evaluateSelectorGett3 = evaluateSelectorGetter(store, state, newExecutionId),
            _evaluateSelectorGett4 = _slicedToArray(_evaluateSelectorGett3, 2),
            loadable = _evaluateSelectorGett4[0],
            newDepValues = _evaluateSelectorGett4[1];

        setExecutionInfo(loadable, store, newDepValues, newExecutionId, state);
        maybeSetCacheWithLoadable(state, depValuesToDepRoute(newDepValues), loadable);
        notifyStoreWhenAsyncSettles(store, loadable, newExecutionId);
        return loadable;
    }
    /**
     * Given a tree state, this function returns the "selector result", which is
     * defined as a size-2 tuple of [DependencyMap, Loadable<T>].
     *
     * The selector's get() function will only be re-evaluated if _both_ of the
     * following statements are true:
     *
     * 1. The current dep values from the given state produced a cache key that
     *    was not found in the cache.
     * 2. There is no currently running async execution OR there is an
     *    async execution that is running, but after comparing the dep values in
     *    the given state with the dep values that the execution has discovered so
     *    far we find that at least one dep value has changed, in which case we
     *    start a new execution (the previously running execution will continue to
     *    run to completion, but only the new execution will be deemed the
     *    'latest' execution, meaning it will be the only execution that will
     *    update global state when it is finished. Any non-latest executions will
     *    run to completion and update the selector cache but not global state).
     */


    function getSelectorValAndUpdatedDeps(store, state) {
        var cachedVal = getValFromCacheAndUpdatedDownstreamDeps(store, state);

        if (cachedVal != null) {
            setExecutionInfo(cachedVal, store);
            return cachedVal;
        }

        var inProgressExecutionInfo = getExecutionInfoOfInProgressExecution(state); // FIXME: this won't work with custom caching b/c it uses separate cache

        if (inProgressExecutionInfo) {
            var executionInfo = inProgressExecutionInfo;
            notifyStoreWhenAsyncSettles(store, Recoil_nullthrows(executionInfo.latestLoadable), Recoil_nullthrows(executionInfo.latestExecutionId)); // FIXME: check after the fact to see if we made the right choice by waiting

            return Recoil_nullthrows(executionInfo.latestLoadable);
        }

        return getValFromRunningNewExecutionAndUpdatedDeps(store, state);
    }
    /**
     * Searches execution info across all stores to see if there is an in-progress
     * execution whose dependency values match the values of the requesting store.
     */


    function getExecutionInfoOfInProgressExecution(state) {
        var _Array$from$find;

        var _ref20 = (_Array$from$find = Array.from(executionInfoMap.entries()).find(function(_ref22) {
                var _ref23 = _slicedToArray(_ref22, 2),
                    store = _ref23[0],
                    execInfo = _ref23[1];

                return execInfo.latestLoadable != null && execInfo.latestExecutionId != null && !haveAsyncDepsChanged(store, state);
            })) !== null && _Array$from$find !== void 0 ? _Array$from$find : [],
            _ref21 = _slicedToArray(_ref20, 2),
            executionInfo = _ref21[1];

        return executionInfo;
    }

    var mapOfCheckedVersions = new Map();

    function haveAsyncDepsChanged(store, state) {
        var _executionInfo$depVal, _mapOfCheckedVersions;

        var executionInfo = getExecutionInfo(store);
        var oldDepValues = (_executionInfo$depVal = executionInfo.depValuesDiscoveredSoFarDuringAsyncWork) !== null && _executionInfo$depVal !== void 0 ? _executionInfo$depVal : new Map();
        var cachedDepValuesCheckedForThisVersion = Array(((_mapOfCheckedVersions = mapOfCheckedVersions.get(state.version)) !== null && _mapOfCheckedVersions !== void 0 ? _mapOfCheckedVersions : new Map()).entries());
        var isCachedVersionSame = mapOfCheckedVersions.has(state.version) && cachedDepValuesCheckedForThisVersion.length === oldDepValues.size && cachedDepValuesCheckedForThisVersion.every(function(_ref24) {
            var _ref25 = _slicedToArray(_ref24, 2),
                nodeKey = _ref25[0],
                nodeVal = _ref25[1];

            return oldDepValues.get(nodeKey) === nodeVal;
        });

        if (oldDepValues == null || state.version === executionInfo.stateVersion || isCachedVersionSame) {
            return false;
        }

        mapOfCheckedVersions.set(state.version, new Map(oldDepValues));
        return Array.from(oldDepValues).some(function(_ref26) {
            var _ref27 = _slicedToArray(_ref26, 2),
                nodeKey = _ref27[0],
                oldVal = _ref27[1];

            var loadable = getCachedNodeLoadable(store, state, nodeKey);
            return loadable.contents !== oldVal.contents;
        });
    }
    /**
     * This function will update the selector's execution info when the selector
     * has either finished running an execution or has started a new execution. If
     * the given loadable is in a 'loading' state, the intention is that a new
     * execution has started. Otherwise, the intention is that an execution has
     * just finished.
     */


    function setExecutionInfo(loadable, store, depValues, newExecutionId, state) {
        var executionInfo = getExecutionInfo(store);

        if (loadable.state === 'loading') {
            executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
            executionInfo.latestExecutionId = newExecutionId;
            executionInfo.latestLoadable = loadable;
            executionInfo.stateVersion = state === null || state === void 0 ? void 0 : state.version;
        } else {
            executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = null;
            executionInfo.latestExecutionId = null;
            executionInfo.latestLoadable = null;
            executionInfo.stateVersion = null;
        }
    }
    /**
     * Conditionally updates the cache with a given loadable.
     *
     * We only cache loadables that are not loading because our cache keys are
     * based on dep values, which are in an unfinished state for loadables that
     * have a 'loading' state (new deps may be discovered while the selector
     * runs its async code). We never want to cache partial dependencies b/c it
     * could lead to errors, such as prematurely returning the result based on a
     * partial list of deps-- we need the full list of deps to ensure that we
     * are returning the correct result from cache.
     */


    function maybeSetCacheWithLoadable(state, depRoute, loadable) {
        if (loadable.state !== 'loading') {
            setCache(state, depRoute, loadable);
        }
    }

    function updateExecutionInfoDepValues(depValues, store, executionId) {
        var executionInfo = getExecutionInfo(store);

        if (isLatestExecution(store, executionId)) {
            executionInfo.depValuesDiscoveredSoFarDuringAsyncWork = depValues;
        }
    }

    function clearExecutionInfo(store, executionId) {
        if (isLatestExecution(store, executionId)) {
            executionInfoMap.delete(store);
        }
    }

    function isLatestExecution(store, executionId) {
        var executionInfo = getExecutionInfo(store);
        return executionId === executionInfo.latestExecutionId;
    }

    function maybeFreezeValue(val) {
        if (process.env.NODE_ENV !== "production") {
            if (Boolean(options.dangerouslyAllowMutability) === false) {
                Recoil_deepFreezeValue(val);
            }
        }
    }

    function setCache(state, cacheRoute, loadable) {
        state.atomValues.set(key, loadable);

        try {
            cache.set(cacheRoute, loadable);
        } catch (error) {
            throw Recoil_err("Problem with setting cache for selector \"".concat(key, "\": ").concat(error.message));
        }
    }

    function detectCircularDependencies(fn) {
        if (dependencyStack.includes(key)) {
            var message = "Recoil selector has circular dependencies: ".concat(dependencyStack.slice(dependencyStack.indexOf(key)).join(" \u2192 "));
            return loadableWithError$1(Recoil_err(message));
        }

        dependencyStack.push(key);

        try {
            return fn();
        } finally {
            dependencyStack.pop();
        }
    }

    function selectorPeek(store, state) {
        var cacheVal = cache.get(function(nodeKey) {
            !(typeof nodeKey === 'string') ? process.env.NODE_ENV !== "production" ? Recoil_invariant(false, 'Cache nodeKey is type string') : Recoil_invariant(false): void 0;
            var peek = peekNodeLoadable$1(store, state, nodeKey);
            return peek === null || peek === void 0 ? void 0 : peek.contents;
        });
        return cacheVal;
    }

    function selectorGet(store, state) {
        return detectCircularDependencies(function() {
            return getSelectorValAndUpdatedDeps(store, state);
        });
    }

    function invalidateSelector(state) {
        state.atomValues.delete(key);
    }

    function clearSelectorCache(store, treeState) {
        !(recoilValue != null) ? process.env.NODE_ENV !== "production" ? Recoil_invariant(false, 'Recoil Value can never be null') : Recoil_invariant(false): void 0;

        var _iterator46 = _createForOfIteratorHelper(discoveredDependencyNodeKeys),
            _step46;

        try {
            for (_iterator46.s(); !(_step46 = _iterator46.n()).done;) {
                var nodeKey = _step46.value;

                var _node$clearCache;

                var node = getNode$6(nodeKey);
                (_node$clearCache = node.clearCache) === null || _node$clearCache === void 0 ? void 0 : _node$clearCache.call(node, store, treeState);
            }
        } catch (err) {
            _iterator46.e(err);
        } finally {
            _iterator46.f();
        }

        invalidateSelector(treeState);
        cache.clear();
        markRecoilValueModified$1(store, recoilValue);
    }

    if (set != null) {
        /**
         * ES5 strict mode prohibits defining non-top-level function declarations,
         * so don't use function declaration syntax here
         */
        var selectorSet = function selectorSet(store, state, newValue) {
            var syncSelectorSetFinished = false;
            var writes = new Map();

            function getRecoilValue(_ref28) {
                var depKey = _ref28.key;

                if (syncSelectorSetFinished) {
                    throw Recoil_err('Recoil: Async selector sets are not currently supported.');
                }

                var loadable = getCachedNodeLoadable(store, state, depKey);

                if (loadable.state === 'hasValue') {
                    return loadable.contents;
                } else if (loadable.state === 'loading') {
                    throw new RecoilValueNotReady$2(depKey);
                } else {
                    throw loadable.contents;
                }
            }

            function setRecoilState(recoilState, valueOrUpdater) {
                if (syncSelectorSetFinished) {
                    throw Recoil_err('Recoil: Async selector sets are not currently supported.');
                }

                var setValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict type S from being a function itself without losing support for opaque types
                    // flowlint-next-line unclear-type:off
                    valueOrUpdater(getRecoilValue(recoilState)) : valueOrUpdater;
                var upstreamWrites = setNodeValue$3(store, state, recoilState.key, setValue);
                upstreamWrites.forEach(function(v, k) {
                    return writes.set(k, v);
                });
            }

            function resetRecoilState(recoilState) {
                setRecoilState(recoilState, DEFAULT_VALUE$6);
            }

            var ret = set({
                set: setRecoilState,
                get: getRecoilValue,
                reset: resetRecoilState
            }, newValue); // set should be a void method, but if the user makes it `async`, then it
            // will return a Promise, which we don't currently support.

            if (ret !== undefined) {
                throw Recoil_isPromise(ret) ? Recoil_err('Recoil: Async selector sets are not currently supported.') : Recoil_err('Recoil: selector set should be a void function.');
            }

            syncSelectorSetFinished = true;
            return writes;
        };

        return recoilValue = registerNode$1({
            key: key,
            nodeType: 'selector',
            peek: selectorPeek,
            get: selectorGet,
            set: selectorSet,
            init: selectorInit,
            invalidate: invalidateSelector,
            clearCache: clearSelectorCache,
            shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
            dangerouslyAllowMutability: options.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: false,
            retainedBy: retainedBy
        });
    } else {
        return recoilValue = registerNode$1({
            key: key,
            nodeType: 'selector',
            peek: selectorPeek,
            get: selectorGet,
            init: selectorInit,
            invalidate: invalidateSelector,
            clearCache: clearSelectorCache,
            shouldDeleteConfigOnRelease: selectorShouldDeleteConfigOnRelease,
            dangerouslyAllowMutability: options.dangerouslyAllowMutability,
            shouldRestoreFromSnapshots: false,
            retainedBy: retainedBy
        });
    }
}
/* eslint-enable no-redeclare */


var Recoil_selector = selector; // @fb-only: const {scopedAtom} = require('Recoil_ScopedAtom');

var loadableWithError$2 = Recoil_Loadable$1.loadableWithError,
    loadableWithPromise$2 = Recoil_Loadable$1.loadableWithPromise,
    loadableWithValue$3 = Recoil_Loadable$1.loadableWithValue;
var peekNodeInfo$3 = Recoil_FunctionalCore.peekNodeInfo;
var DEFAULT_VALUE$7 = Recoil_Node.DEFAULT_VALUE,
    DefaultValue$2 = Recoil_Node.DefaultValue,
    getConfigDeletionHandler$2 = Recoil_Node.getConfigDeletionHandler,
    registerNode$2 = Recoil_Node.registerNode,
    setConfigDeletionHandler$1 = Recoil_Node.setConfigDeletionHandler;
var isRecoilValue$4 = Recoil_RecoilValue$1.isRecoilValue;
var getRecoilValueAsLoadable$4 = Recoil_RecoilValueInterface.getRecoilValueAsLoadable,
    markRecoilValueModified$2 = Recoil_RecoilValueInterface.markRecoilValueModified,
    setRecoilValue$4 = Recoil_RecoilValueInterface.setRecoilValue,
    setRecoilValueLoadable$3 = Recoil_RecoilValueInterface.setRecoilValueLoadable;
var retainedByOptionWithDefault$2 = Recoil_Retention.retainedByOptionWithDefault;

function baseAtom(options) {
    var key = options.key,
        persistence = options.persistence_UNSTABLE;
    var retainedBy = retainedByOptionWithDefault$2(options.retainedBy_UNSTABLE);
    var liveStoresCount = 0;
    var defaultLoadable = Recoil_isPromise(options.default) ? loadableWithPromise$2(options.default.then(function(value) {
        defaultLoadable = loadableWithValue$3(value);
        return value;
    }).catch(function(error) {
        defaultLoadable = loadableWithError$2(error);
        throw error;
    })) : loadableWithValue$3(options.default);
    maybeFreezeValueOrPromise(options.default);
    var cachedAnswerForUnvalidatedValue = undefined; // Cleanup handlers for this atom
    // Rely on stable reference equality of the store to use it as a key per <RecoilRoot>

    var cleanupEffectsByStore = new Map();

    function maybeFreezeValueOrPromise(valueOrPromise) {
        if (process.env.NODE_ENV !== "production") {
            if (options.dangerouslyAllowMutability !== true) {
                if (Recoil_isPromise(valueOrPromise)) {
                    return valueOrPromise.then(function(value) {
                        Recoil_deepFreezeValue(value);
                        return value;
                    });
                } else {
                    Recoil_deepFreezeValue(valueOrPromise);
                    return valueOrPromise;
                }
            }
        }

        return valueOrPromise;
    }

    function wrapPendingPromise(store, promise) {
        var wrappedPromise = promise.then(function(value) {
            var _store$getState$nextT, _state$atomValues$get;

            var state = (_store$getState$nextT = store.getState().nextTree) !== null && _store$getState$nextT !== void 0 ? _store$getState$nextT : store.getState().currentTree;

            if (((_state$atomValues$get = state.atomValues.get(key)) === null || _state$atomValues$get === void 0 ? void 0 : _state$atomValues$get.contents) === wrappedPromise) {
                setRecoilValue$4(store, node, value);
            }

            return value;
        }).catch(function(error) {
            var _store$getState$nextT2, _state$atomValues$get2;

            var state = (_store$getState$nextT2 = store.getState().nextTree) !== null && _store$getState$nextT2 !== void 0 ? _store$getState$nextT2 : store.getState().currentTree;

            if (((_state$atomValues$get2 = state.atomValues.get(key)) === null || _state$atomValues$get2 === void 0 ? void 0 : _state$atomValues$get2.contents) === wrappedPromise) {
                setRecoilValueLoadable$3(store, node, loadableWithError$2(error));
            }

            throw error;
        });
        return wrappedPromise;
    }

    function initAtom(store, initState, trigger) {
        liveStoresCount++;
        var alreadyKnown = store.getState().knownAtoms.has(key);
        store.getState().knownAtoms.add(key); // Setup async defaults to notify subscribers when they resolve

        if (defaultLoadable.state === 'loading') {
            var notifyDefaultSubscribers = function notifyDefaultSubscribers() {
                var _store$getState$nextT3;

                var state = (_store$getState$nextT3 = store.getState().nextTree) !== null && _store$getState$nextT3 !== void 0 ? _store$getState$nextT3 : store.getState().currentTree;

                if (!state.atomValues.has(key)) {
                    markRecoilValueModified$2(store, node);
                }
            };

            defaultLoadable.contents.then(notifyDefaultSubscribers).catch(notifyDefaultSubscribers);
        } // Run Atom Effects
        // This state is scoped by Store, since this is in the initAtom() closure


        var initValue = DEFAULT_VALUE$7;
        var pendingSetSelf = null;

        if (options.effects_UNSTABLE != null && !alreadyKnown) {
            var getLoadable = function getLoadable(recoilValue) {
                // Normally we can just get the current value of another atom.
                // But for our own value we need to check if there is a pending
                // initialized value or get the fallback default value.
                if (duringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2)) {
                    // Cast T to S
                    var retValue = initValue; // flowlint-line unclear-type:off

                    return retValue instanceof DefaultValue$2 ? defaultLoadable : // flowlint-line unclear-type:off
                        Recoil_isPromise(retValue) ? loadableWithPromise$2(retValue.then(function(v) {
                            return v instanceof DefaultValue$2 ? // Cast T to S
                                defaultLoadable.toPromise() // flowlint-line unclear-type:off
                                :
                                v;
                        })) : loadableWithValue$3(retValue);
                }

                return getRecoilValueAsLoadable$4(store, recoilValue);
            };

            var getPromise = function getPromise(recoilValue) {
                return getLoadable(recoilValue).toPromise();
            };

            var getInfo_UNSTABLE = function getInfo_UNSTABLE(recoilValue) {
                var _store$getState$nextT4;

                var info = peekNodeInfo$3(store, (_store$getState$nextT4 = store.getState().nextTree) !== null && _store$getState$nextT4 !== void 0 ? _store$getState$nextT4 : store.getState().currentTree, recoilValue.key);
                return duringInit && recoilValue.key === key && !(initValue instanceof DefaultValue$2) ? _objectSpread(_objectSpread({}, info), {}, {
                    isSet: true,
                    loadable: getLoadable(recoilValue)
                }) : info;
            };

            var duringInit = true;

            var setSelf = function setSelf(effect) {
                return function(valueOrUpdater) {
                    if (duringInit) {
                        var currentValue = initValue instanceof DefaultValue$2 || Recoil_isPromise(initValue) ? defaultLoadable.state === 'hasValue' ? defaultLoadable.contents : DEFAULT_VALUE$7 : initValue;
                        initValue = typeof valueOrUpdater === 'function' ? // cast to any because we can't restrict T from being a function without losing support for opaque types
                            valueOrUpdater(currentValue) // flowlint-line unclear-type:off
                            :
                            valueOrUpdater;

                        if (Recoil_isPromise(initValue)) {
                            initValue = initValue.then(function(value) {
                                // Avoid calling onSet() when setSelf() initializes with a Promise
                                pendingSetSelf = {
                                    effect: effect,
                                    value: value
                                };
                                return value;
                            });
                        }
                    } else {
                        if (Recoil_isPromise(valueOrUpdater)) {
                            throw Recoil_err('Setting atoms to async values is not implemented.');
                        }

                        if (typeof valueOrUpdater !== 'function') {
                            pendingSetSelf = {
                                effect: effect,
                                value: valueOrUpdater
                            };
                        }

                        setRecoilValue$4(store, node, typeof valueOrUpdater === 'function' ? function(currentValue) {
                            var newValue = // cast to any because we can't restrict T from being a function without losing support for opaque types
                                valueOrUpdater(currentValue); // flowlint-line unclear-type:off

                            pendingSetSelf = {
                                effect: effect,
                                value: newValue
                            };
                            return newValue;
                        } : valueOrUpdater);
                    }
                };
            };

            var resetSelf = function resetSelf(effect) {
                return function() {
                    return setSelf(effect)(DEFAULT_VALUE$7);
                };
            };

            var onSet = function onSet(effect) {
                return function(handler) {
                    store.subscribeToTransactions(function(currentStore) {
                        var _currentTree$atomValu; // eslint-disable-next-line prefer-const


                        var _currentStore$getStat = currentStore.getState(),
                            currentTree = _currentStore$getStat.currentTree,
                            previousTree = _currentStore$getStat.previousTree;

                        if (!previousTree) {
                            Recoil_recoverableViolation('Transaction subscribers notified without a next tree being present -- this is a bug in Recoil');
                            previousTree = currentTree; // attempt to trundle on
                        }

                        var newLoadable = (_currentTree$atomValu = currentTree.atomValues.get(key)) !== null && _currentTree$atomValu !== void 0 ? _currentTree$atomValu : defaultLoadable;

                        if (newLoadable.state === 'hasValue') {
                            var _previousTree$atomVal, _pendingSetSelf, _pendingSetSelf2, _pendingSetSelf3;

                            var newValue = newLoadable.contents;
                            var oldLoadable = (_previousTree$atomVal = previousTree.atomValues.get(key)) !== null && _previousTree$atomVal !== void 0 ? _previousTree$atomVal : defaultLoadable;
                            var oldValue = oldLoadable.state === 'hasValue' ? oldLoadable.contents : DEFAULT_VALUE$7; // TODO This isn't actually valid, use as a placeholder for now.
                            // Ignore atom value changes that were set via setSelf() in the same effect.
                            // We will still properly call the handler if there was a subsequent
                            // set from something other than an atom effect which was batched
                            // with the `setSelf()` call.  However, we may incorrectly ignore
                            // the handler if the subsequent batched call happens to set the
                            // atom to the exact same value as the `setSelf()`.   But, in that
                            // case, it was kind of a noop, so the semantics are debatable..

                            if (((_pendingSetSelf = pendingSetSelf) === null || _pendingSetSelf === void 0 ? void 0 : _pendingSetSelf.effect) !== effect || ((_pendingSetSelf2 = pendingSetSelf) === null || _pendingSetSelf2 === void 0 ? void 0 : _pendingSetSelf2.value) !== newValue) {
                                handler(newValue, oldValue, !currentTree.atomValues.has(key));
                            } else if (((_pendingSetSelf3 = pendingSetSelf) === null || _pendingSetSelf3 === void 0 ? void 0 : _pendingSetSelf3.effect) === effect) {
                                pendingSetSelf = null;
                            }
                        }
                    }, key);
                };
            };

            var _iterator47 = _createForOfIteratorHelper((_options$effects_UNST = options.effects_UNSTABLE) !== null && _options$effects_UNST !== void 0 ? _options$effects_UNST : []),
                _step47;

            try {
                for (_iterator47.s(); !(_step47 = _iterator47.n()).done;) {
                    var effect = _step47.value;

                    var _options$effects_UNST;

                    var cleanup = effect({
                        node: node,
                        trigger: trigger,
                        setSelf: setSelf(effect),
                        resetSelf: resetSelf(effect),
                        onSet: onSet(effect),
                        getPromise: getPromise,
                        getLoadable: getLoadable,
                        getInfo_UNSTABLE: getInfo_UNSTABLE
                    });

                    if (cleanup != null) {
                        var _cleanupEffectsByStor;

                        cleanupEffectsByStore.set(store, [].concat(_toConsumableArray((_cleanupEffectsByStor = cleanupEffectsByStore.get(store)) !== null && _cleanupEffectsByStor !== void 0 ? _cleanupEffectsByStor : []), [cleanup]));
                    }
                }
            } catch (err) {
                _iterator47.e(err);
            } finally {
                _iterator47.f();
            }

            duringInit = false;
        } // Mutate initial state in place since we know there are no other subscribers
        // since we are the ones initializing on first use.


        if (!(initValue instanceof DefaultValue$2)) {
            var _store$getState$nextT5;

            var frozenInitValue = maybeFreezeValueOrPromise(initValue);
            var initLoadable = Recoil_isPromise(frozenInitValue) ? loadableWithPromise$2(wrapPendingPromise(store, frozenInitValue)) : loadableWithValue$3(frozenInitValue);
            initState.atomValues.set(key, initLoadable); // If there is a pending transaction, then also mutate the next state tree.
            // This could happen if the atom was first initialized in an action that
            // also updated some other atom's state.

            (_store$getState$nextT5 = store.getState().nextTree) === null || _store$getState$nextT5 === void 0 ? void 0 : _store$getState$nextT5.atomValues.set(key, initLoadable);
        }

        return function() {
            var _cleanupEffectsByStor2;

            liveStoresCount--;
            (_cleanupEffectsByStor2 = cleanupEffectsByStore.get(store)) === null || _cleanupEffectsByStor2 === void 0 ? void 0 : _cleanupEffectsByStor2.forEach(function(cleanup) {
                return cleanup();
            });
            cleanupEffectsByStore.delete(store);
            store.getState().knownAtoms.delete(key); // FIXME remove knownAtoms?
        };
    }

    function peekAtom(_store, state) {
        var _ref, _state$atomValues$get3;

        return (_ref = (_state$atomValues$get3 = state.atomValues.get(key)) !== null && _state$atomValues$get3 !== void 0 ? _state$atomValues$get3 : cachedAnswerForUnvalidatedValue) !== null && _ref !== void 0 ? _ref : defaultLoadable;
    }

    function getAtom(_store, state) {
        if (state.atomValues.has(key)) {
            // Atom value is stored in state:
            return Recoil_nullthrows(state.atomValues.get(key));
        } else if (state.nonvalidatedAtoms.has(key)) {
            // Atom value is stored but needs validation before use.
            // We might have already validated it and have a cached validated value:
            if (cachedAnswerForUnvalidatedValue != null) {
                return cachedAnswerForUnvalidatedValue;
            }

            if (persistence == null) {
                Recoil_expectationViolation("Tried to restore a persisted value for atom ".concat(key, " but it has no persistence settings."));
                return defaultLoadable;
            }

            var nonvalidatedValue = state.nonvalidatedAtoms.get(key);
            var validatorResult = persistence.validator(nonvalidatedValue, DEFAULT_VALUE$7);
            var validatedValueLoadable = validatorResult instanceof DefaultValue$2 ? defaultLoadable : loadableWithValue$3(validatorResult);
            cachedAnswerForUnvalidatedValue = validatedValueLoadable;
            return cachedAnswerForUnvalidatedValue;
        } else {
            return defaultLoadable;
        }
    }

    function invalidateAtom() {
        cachedAnswerForUnvalidatedValue = undefined;
    }

    function setAtom(_store, state, newValue) {
        // Bail out if we're being set to the existing value, or if we're being
        // reset but have no stored value (validated or unvalidated) to reset from:
        if (state.atomValues.has(key)) {
            var existing = Recoil_nullthrows(state.atomValues.get(key));

            if (existing.state === 'hasValue' && newValue === existing.contents) {
                return new Map();
            }
        } else if (!state.nonvalidatedAtoms.has(key) && newValue instanceof DefaultValue$2) {
            return new Map();
        }

        maybeFreezeValueOrPromise(newValue);
        cachedAnswerForUnvalidatedValue = undefined; // can be released now if it was previously in use

        return new Map().set(key, loadableWithValue$3(newValue));
    }

    function shouldDeleteConfigOnReleaseAtom() {
        return getConfigDeletionHandler$2(key) !== undefined && liveStoresCount <= 0;
    }

    var node = registerNode$2({
        key: key,
        nodeType: 'atom',
        peek: peekAtom,
        get: getAtom,
        set: setAtom,
        init: initAtom,
        invalidate: invalidateAtom,
        shouldDeleteConfigOnRelease: shouldDeleteConfigOnReleaseAtom,
        dangerouslyAllowMutability: options.dangerouslyAllowMutability,
        persistence_UNSTABLE: options.persistence_UNSTABLE ? {
            type: options.persistence_UNSTABLE.type,
            backButton: options.persistence_UNSTABLE.backButton
        } : undefined,
        shouldRestoreFromSnapshots: true,
        retainedBy: retainedBy
    });
    return node;
} // prettier-ignore


function atom(options) {
    if (process.env.NODE_ENV !== "production") {
        if (typeof options.key !== 'string') {
            throw Recoil_err('A key option with a unique string value must be provided when creating an atom.');
        }

        if (!('default' in options)) {
            throw Recoil_err('A default value must be specified when creating an atom.');
        }
    }

    var optionsDefault = options.default,
        restOptions = _objectWithoutProperties(options, _excluded2);

    if (isRecoilValue$4(optionsDefault) // Continue to use atomWithFallback for promise defaults for scoped atoms
        // for now, since scoped atoms don't support async defaults
        // @fb-only: || (isPromise(optionsDefault) && scopeRules_APPEND_ONLY_READ_THE_DOCS)
    ) {
        return atomWithFallback(_objectSpread(_objectSpread({}, restOptions), {}, {
            default: optionsDefault // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,

        })); // @fb-only: } else if (scopeRules_APPEND_ONLY_READ_THE_DOCS && !isPromise(optionsDefault)) {
        // @fb-only: return scopedAtom<T>({
        // @fb-only: ...restOptions,
        // @fb-only: default: optionsDefault,
        // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS,
        // @fb-only: });
    } else {
        return baseAtom(_objectSpread(_objectSpread({}, restOptions), {}, {
            default: optionsDefault
        }));
    }
}

function atomWithFallback(options) {
    var base = atom(_objectSpread(_objectSpread({}, options), {}, {
        default: DEFAULT_VALUE$7,
        persistence_UNSTABLE: options.persistence_UNSTABLE === undefined ? undefined : _objectSpread(_objectSpread({}, options.persistence_UNSTABLE), {}, {
            validator: function validator(storedValue) {
                return storedValue instanceof DefaultValue$2 ? storedValue : Recoil_nullthrows(options.persistence_UNSTABLE).validator(storedValue, DEFAULT_VALUE$7);
            }
        }),
        // TODO Hack for now.
        // flowlint-next-line unclear-type: off
        effects_UNSTABLE: options.effects_UNSTABLE
    }));
    var sel = Recoil_selector({
        key: "".concat(options.key, "__withFallback"),
        get: function get(_ref29) {
            var _get = _ref29.get;

            var baseValue = _get(base);

            return baseValue instanceof DefaultValue$2 ? options.default : baseValue;
        },
        set: function set(_ref30, newValue) {
            var _set = _ref30.set;
            return _set(base, newValue);
        },
        dangerouslyAllowMutability: options.dangerouslyAllowMutability
    });
    setConfigDeletionHandler$1(sel.key, getConfigDeletionHandler$2(options.key));
    return sel;
}

var Recoil_atom = atom;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

var MapCache = /*#__PURE__*/ function() {
    function MapCache(options) {
        _classCallCheck(this, MapCache);

        var _options$mapKey;

        _defineProperty(this, "_map", void 0);

        _defineProperty(this, "_keyMapper", void 0);

        this._map = new Map();
        this._keyMapper = (_options$mapKey = options === null || options === void 0 ? void 0 : options.mapKey) !== null && _options$mapKey !== void 0 ? _options$mapKey : function(v) {
            return v;
        };
    }

    _createClass(MapCache, [{
        key: "size",
        value: function size() {
            return this._map.size;
        }
    }, {
        key: "has",
        value: function has(key) {
            return this._map.has(this._keyMapper(key));
        }
    }, {
        key: "get",
        value: function get(key) {
            return this._map.get(this._keyMapper(key));
        }
    }, {
        key: "set",
        value: function set(key, val) {
            this._map.set(this._keyMapper(key), val);
        }
    }, {
        key: "delete",
        value: function _delete(key) {
            this._map.delete(this._keyMapper(key));
        }
    }, {
        key: "clear",
        value: function clear() {
            this._map.clear();
        }
    }]);

    return MapCache;
}();

var Recoil_MapCache = {
    MapCache: MapCache
};
var Recoil_MapCache_1 = Recoil_MapCache.MapCache;
var Recoil_MapCache$1 = /*#__PURE__*/ Object.freeze({
    __proto__: null,
    MapCache: Recoil_MapCache_1
});
var LRUCache$2 = Recoil_LRUCache$1.LRUCache;
var MapCache$1 = Recoil_MapCache$1.MapCache;
var defaultPolicy$1 = {
    equality: 'reference',
    eviction: 'none',
    maxSize: Infinity
};

function cacheFromPolicy() {
    var _ref31 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultPolicy$1,
        _ref31$equality = _ref31.equality,
        equality = _ref31$equality === void 0 ? defaultPolicy$1.equality : _ref31$equality,
        _ref31$eviction = _ref31.eviction,
        eviction = _ref31$eviction === void 0 ? defaultPolicy$1.eviction : _ref31$eviction,
        _ref31$maxSize = _ref31.maxSize,
        maxSize = _ref31$maxSize === void 0 ? defaultPolicy$1.maxSize : _ref31$maxSize;

    var valueMapper = getValueMapper$1(equality);
    var cache = getCache(eviction, maxSize, valueMapper);
    return cache;
}

function getValueMapper$1(equality) {
    switch (equality) {
        case 'reference':
            return function(val) {
                return val;
            };

        case 'value':
            return function(val) {
                return Recoil_stableStringify(val);
            };
    }

    throw Recoil_err("Unrecognized equality policy ".concat(equality));
}

function getCache(eviction, maxSize, mapKey) {
    switch (eviction) {
        case 'keep-all':
            // $FlowFixMe[method-unbinding]
            return new MapCache$1({
                mapKey: mapKey
            });

        case 'lru':
            // $FlowFixMe[method-unbinding]
            return new LRUCache$2({
                mapKey: mapKey,
                maxSize: Recoil_nullthrows(maxSize)
            });

        case 'most-recent':
            // $FlowFixMe[method-unbinding]
            return new LRUCache$2({
                mapKey: mapKey,
                maxSize: 1
            });
    }

    throw Recoil_err("Unrecognized eviction policy ".concat(eviction));
}

var Recoil_cacheFromPolicy = cacheFromPolicy;
var setConfigDeletionHandler$2 = Recoil_Node.setConfigDeletionHandler; // Process scopeRules to handle any entries which are functions taking parameters
// prettier-ignore
// @fb-only: function mapScopeRules<P>(
// @fb-only: scopeRules?: ParameterizedScopeRules<P>,
// @fb-only: param: P,
// @fb-only: ): ScopeRules | void {
// @fb-only: return scopeRules?.map(rule =>
// @fb-only: Array.isArray(rule)
// @fb-only: ? rule.map(entry => (typeof entry === 'function' ? entry(param) : entry))
// @fb-only: : rule,
// @fb-only: );
// @fb-only: }

/*
A function which returns an atom based on the input parameter.

Each unique parameter returns a unique atom. E.g.,

  const f = atomFamily(...);
  f({a: 1}) => an atom
  f({a: 2}) => a different atom

This allows components to persist local, private state using atoms.  Each
instance of the component may have a different key, which it uses as the
parameter for a family of atoms; in this way, each component will have
its own atom not shared by other instances.  These state keys may be composed
into children's state keys as well.
*/

function atomFamily(options) {
    var _options$cachePolicyF, _options$cachePolicyF2;

    var atomCache = Recoil_cacheFromPolicy({
        equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : 'value',
        eviction: 'keep-all'
    }); // Simple atomFamily implementation to cache individual atoms based
    // on the parameter value equality.

    return function(params) {
        var _stableStringify;

        var cachedAtom = atomCache.get(params);

        if (cachedAtom != null) {
            return cachedAtom;
        }

        var cachePolicyForParams_UNSTABLE = options.cachePolicyForParams_UNSTABLE,
            atomOptions = _objectWithoutProperties(options, _excluded3);

        var newAtom = Recoil_atom(_objectSpread(_objectSpread({}, atomOptions), {}, {
            key: "".concat(options.key, "__").concat((_stableStringify = Recoil_stableStringify(params)) !== null && _stableStringify !== void 0 ? _stableStringify : 'void'),
            default: typeof options.default === 'function' ? // The default was parameterized
                // Flow doesn't know that T isn't a function, so we need to case to any
                options.default(params) // flowlint-line unclear-type:off
                : // Default may be a static value, promise, or RecoilValue
                options.default,
            retainedBy_UNSTABLE: typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE,
            effects_UNSTABLE: typeof options.effects_UNSTABLE === 'function' ? options.effects_UNSTABLE(params) : options.effects_UNSTABLE // prettier-ignore
                // @fb-only: scopeRules_APPEND_ONLY_READ_THE_DOCS: mapScopeRules(
                // @fb-only: options.scopeRules_APPEND_ONLY_READ_THE_DOCS,
                // @fb-only: params,
                // @fb-only: ),

        }));
        atomCache.set(params, newAtom);
        setConfigDeletionHandler$2(newAtom.key, function() {
            atomCache.delete(params);
        });
        return newAtom;
    };
}

var Recoil_atomFamily = atomFamily;
var setConfigDeletionHandler$3 = Recoil_Node.setConfigDeletionHandler; // Keep in mind the parameter needs to be serializable as a cahche key
// using Recoil_stableStringify
// Add a unique index to each selector in case the cache implementation allows
// duplicate keys based on equivalent stringified parameters

var nextIndex = 0;
/* eslint-disable no-redeclare */
// Return a function that returns members of a family of selectors of the same type
// E.g.,
//
// const s = selectorFamily(...);
// s({a: 1}) => a selector
// s({a: 2}) => a different selector
//
// By default, the selectors are distinguished by distinct values of the
// parameter based on value equality, not reference equality.  This allows using
// object literals or other equivalent objects at callsites to not create
// duplicate cache entries.  This behavior may be overridden with the
// cacheImplementationForParams option.

function selectorFamily(options) {
    var _options$cachePolicyF, _options$cachePolicyF2;

    var selectorCache = Recoil_cacheFromPolicy({
        equality: (_options$cachePolicyF = (_options$cachePolicyF2 = options.cachePolicyForParams_UNSTABLE) === null || _options$cachePolicyF2 === void 0 ? void 0 : _options$cachePolicyF2.equality) !== null && _options$cachePolicyF !== void 0 ? _options$cachePolicyF : 'value',
        eviction: 'keep-all'
    });
    return function(params) {
        var _stableStringify;

        var cachedSelector = selectorCache.get(params);

        if (cachedSelector != null) {
            return cachedSelector;
        }

        var myKey = "".concat(options.key, "__selectorFamily/").concat((_stableStringify = Recoil_stableStringify(params, {
            // It is possible to use functions in parameters if the user uses
            // a cache with reference equality thanks to the incrementing index.
            allowFunctions: true
        })) !== null && _stableStringify !== void 0 ? _stableStringify : 'void', "/").concat(nextIndex++); // Append index in case values serialize to the same key string

        var myGet = function myGet(callbacks) {
            return options.get(params)(callbacks);
        };

        var myCachePolicy = options.cachePolicy_UNSTABLE;
        var retainedBy = typeof options.retainedBy_UNSTABLE === 'function' ? options.retainedBy_UNSTABLE(params) : options.retainedBy_UNSTABLE;
        var newSelector;

        if (options.set != null) {
            var set = options.set;

            var mySet = function mySet(callbacks, newValue) {
                return set(params)(callbacks, newValue);
            };

            newSelector = Recoil_selector({
                key: myKey,
                get: myGet,
                set: mySet,
                cachePolicy_UNSTABLE: myCachePolicy,
                dangerouslyAllowMutability: options.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: retainedBy
            });
        } else {
            newSelector = Recoil_selector({
                key: myKey,
                get: myGet,
                cachePolicy_UNSTABLE: myCachePolicy,
                dangerouslyAllowMutability: options.dangerouslyAllowMutability,
                retainedBy_UNSTABLE: retainedBy
            });
        }

        selectorCache.set(params, newSelector);
        setConfigDeletionHandler$3(newSelector.key, function() {
            selectorCache.delete(params);
        });
        return newSelector;
    };
}
/* eslint-enable no-redeclare */


var Recoil_selectorFamily = selectorFamily; // flowlint-next-line unclear-type:off

var constantSelector = Recoil_selectorFamily({
    key: '__constant',
    get: function get(constant) {
        return function() {
            return constant;
        };
    },
    cachePolicyForParams_UNSTABLE: {
        equality: 'reference'
    }
}); // Function that returns a selector which always produces the
// same constant value.  It may be called multiple times with the
// same value, based on reference equality, and will provide the
// same selector.

function constSelector(constant) {
    return constantSelector(constant);
}

var Recoil_constSelector = constSelector; // flowlint-next-line unclear-type:off

var throwingSelector = Recoil_selectorFamily({
    key: '__error',
    get: function get(message) {
        return function() {
            throw Recoil_err(message);
        };
    },
    // TODO Why?
    cachePolicyForParams_UNSTABLE: {
        equality: 'reference'
    }
}); // Function that returns a selector which always throws an error
// with the provided message.

function errorSelector(message) {
    return throwingSelector(message);
}

var Recoil_errorSelector = errorSelector;
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * Wraps another recoil value and prevents writing to it.
 *
 * @emails oncall+recoil
 * 
 * @format
 */

function readOnlySelector(atom) {
    // flowlint-next-line unclear-type: off
    return atom;
}

var Recoil_readOnlySelector = readOnlySelector;
var loadableWithError$3 = Recoil_Loadable$1.loadableWithError,
    loadableWithPromise$3 = Recoil_Loadable$1.loadableWithPromise,
    loadableWithValue$4 = Recoil_Loadable$1.loadableWithValue; /////////////////
//  TRUTH TABLE
/////////////////
// Dependencies        waitForNone         waitForAny        waitForAll       waitForAllSettled
//  [loading, loading]  [Promise, Promise]  Promise           Promise         Promise
//  [value, loading]    [value, Promise]    [value, Promise]  Promise         Promise
//  [value, value]      [value, value]      [value, value]    [value, value]  [value, value]
//
//  [error, loading]    [Error, Promise]    [Error, Promise]  Error           Promise
//  [error, error]      [Error, Error]      [Error, Error]    Error           [error, error]
//  [value, error]      [value, Error]      [value, Error]    Error           [value, error]
// Issue parallel requests for all dependencies and return the current
// status if they have results, have some error, or are still pending.

function concurrentRequests(getRecoilValue, deps) {
    var results = Array(deps.length).fill(undefined);
    var exceptions = Array(deps.length).fill(undefined);

    var _iterator48 = _createForOfIteratorHelper(deps.entries()),
        _step48;

    try {
        for (_iterator48.s(); !(_step48 = _iterator48.n()).done;) {
            var _step48$value = _slicedToArray(_step48.value, 2),
                i = _step48$value[0],
                dep = _step48$value[1];

            try {
                results[i] = getRecoilValue(dep);
            } catch (e) {
                // exceptions can either be Promises of pending results or real errors
                exceptions[i] = e;
            }
        }
    } catch (err) {
        _iterator48.e(err);
    } finally {
        _iterator48.f();
    }

    return [results, exceptions];
}

function isError(exp) {
    return exp != null && !Recoil_isPromise(exp);
}

function unwrapDependencies(dependencies) {
    return Array.isArray(dependencies) ? dependencies : Object.getOwnPropertyNames(dependencies).map(function(key) {
        return dependencies[key];
    });
}

function wrapResults(dependencies, results) {
    return Array.isArray(dependencies) ? results : // Object.getOwnPropertyNames() has consistent key ordering with ES6
        Object.getOwnPropertyNames(dependencies).reduce(function(out, key, idx) {
            return _objectSpread(_objectSpread({}, out), {}, _defineProperty2({}, key, results[idx]));
        }, {});
}

function wrapLoadables(dependencies, results, exceptions) {
    var output = exceptions.map(function(exception, idx) {
        return exception == null ? loadableWithValue$4(results[idx]) : Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception);
    });
    return wrapResults(dependencies, output);
}

function combineAsyncResultsWithSyncResults(syncResults, asyncResults) {
    return asyncResults.map(function(result, idx) {
        return (
            /**
             * it's important we use === undefined as opposed to == null, because the
             * resolved value of the async promise could be `null`, in which case we
             * don't want to use syncResults[idx], which would be undefined. If async
             * promise resolves to `undefined`, that's ok because `syncResults[idx]`
             * will also be `undefined`. That's a little hacky, but it works.
             */
            result === undefined ? syncResults[idx] : result
        );
    });
} // Selector that requests all dependencies in parallel and immediately returns
// current results without waiting.


var waitForNone = Recoil_selectorFamily({
    key: '__waitForNone',
    get: function get(dependencies) {
        return function(_ref32) {
            var get = _ref32.get;
            // Issue requests for all dependencies in parallel.
            var deps = unwrapDependencies(dependencies);

            var _concurrentRequests = concurrentRequests(get, deps),
                _concurrentRequests2 = _slicedToArray(_concurrentRequests, 2),
                results = _concurrentRequests2[0],
                exceptions = _concurrentRequests2[1]; // Always return the current status of the results; never block.


            return wrapLoadables(dependencies, results, exceptions);
        };
    },
    dangerouslyAllowMutability: true
}); // Selector that requests all dependencies in parallel and waits for at least
// one to be available before returning results.  It will only error if all
// dependencies have errors.

var waitForAny = Recoil_selectorFamily({
    key: '__waitForAny',
    get: function get(dependencies) {
        return function(_ref33) {
            var get = _ref33.get;
            // Issue requests for all dependencies in parallel.
            // Exceptions can either be Promises of pending results or real errors
            var deps = unwrapDependencies(dependencies);

            var _concurrentRequests3 = concurrentRequests(get, deps),
                _concurrentRequests4 = _slicedToArray(_concurrentRequests3, 2),
                results = _concurrentRequests4[0],
                exceptions = _concurrentRequests4[1]; // If any results are available, value or error, return the current status


            if (exceptions.some(function(exp) {
                    return !Recoil_isPromise(exp);
                })) {
                return wrapLoadables(dependencies, results, exceptions);
            } // Otherwise, return a promise that will resolve when the next result is
            // available, whichever one happens to be next.  But, if all pending
            // dependencies end up with errors, then reject the promise.


            return new Promise(function(resolve) {
                var _iterator49 = _createForOfIteratorHelper(exceptions.entries()),
                    _step49;

                try {
                    var _loop = function _loop() {
                        var _step49$value = _slicedToArray(_step49.value, 2),
                            i = _step49$value[0],
                            exp = _step49$value[1];

                        if (Recoil_isPromise(exp)) {
                            exp.then(function(result) {
                                results[i] = result;
                                exceptions[i] = undefined;
                                resolve(wrapLoadables(dependencies, results, exceptions));
                            }).catch(function(error) {
                                exceptions[i] = error;
                                resolve(wrapLoadables(dependencies, results, exceptions));
                            });
                        }
                    };

                    for (_iterator49.s(); !(_step49 = _iterator49.n()).done;) {
                        _loop();
                    }
                } catch (err) {
                    _iterator49.e(err);
                } finally {
                    _iterator49.f();
                }
            });
        };
    },
    dangerouslyAllowMutability: true
}); // Selector that requests all dependencies in parallel and waits for all to be
// available before returning a value.  It will error if any dependencies error.

var waitForAll = Recoil_selectorFamily({
    key: '__waitForAll',
    get: function get(dependencies) {
        return function(_ref34) {
            var get = _ref34.get;
            // Issue requests for all dependencies in parallel.
            // Exceptions can either be Promises of pending results or real errors
            var deps = unwrapDependencies(dependencies);

            var _concurrentRequests5 = concurrentRequests(get, deps),
                _concurrentRequests6 = _slicedToArray(_concurrentRequests5, 2),
                results = _concurrentRequests6[0],
                exceptions = _concurrentRequests6[1]; // If all results are available, return the results


            if (exceptions.every(function(exp) {
                    return exp == null;
                })) {
                return wrapResults(dependencies, results);
            } // If we have any errors, throw the first error


            var error = exceptions.find(isError);

            if (error != null) {
                throw error;
            } // Otherwise, return a promise that will resolve when all results are available


            return Promise.all(exceptions).then(function(exceptionResults) {
                return wrapResults(dependencies, combineAsyncResultsWithSyncResults(results, exceptionResults));
            });
        };
    },
    dangerouslyAllowMutability: true
});
var waitForAllSettled = Recoil_selectorFamily({
    key: '__waitForAllSettled',
    get: function get(dependencies) {
        return function(_ref35) {
            var get = _ref35.get;
            // Issue requests for all dependencies in parallel.
            // Exceptions can either be Promises of pending results or real errors
            var deps = unwrapDependencies(dependencies);

            var _concurrentRequests7 = concurrentRequests(get, deps),
                _concurrentRequests8 = _slicedToArray(_concurrentRequests7, 2),
                results = _concurrentRequests8[0],
                exceptions = _concurrentRequests8[1]; // If all results are available, return the results


            if (exceptions.every(function(exp) {
                    return !Recoil_isPromise(exp);
                })) {
                return wrapLoadables(dependencies, results, exceptions);
            } // Wait for all results to settle


            return Promise.all(exceptions.map(function(exp, i) {
                    return Recoil_isPromise(exp) ? exp.then(function(result) {
                        results[i] = result;
                        exceptions[i] = undefined;
                    }).catch(function(error) {
                        results[i] = undefined;
                        exceptions[i] = error;
                    }) : null;
                })) // Then wrap them as loadables
                .then(function() {
                    return wrapLoadables(dependencies, results, exceptions);
                });
        };
    },
    dangerouslyAllowMutability: true
});
var noWait = Recoil_selectorFamily({
    key: '__noWait',
    get: function get(dependency) {
        return function(_ref36) {
            var get = _ref36.get;

            try {
                return loadableWithValue$4(get(dependency));
            } catch (exception) {
                return Recoil_isPromise(exception) ? loadableWithPromise$3(exception) : loadableWithError$3(exception);
            }
        };
    },
    dangerouslyAllowMutability: true
});
var Recoil_WaitFor = {
    waitForNone: waitForNone,
    waitForAny: waitForAny,
    waitForAll: waitForAll,
    waitForAllSettled: waitForAllSettled,
    noWait: noWait
};
var RecoilLoadable = Recoil_Loadable$1.RecoilLoadable;
var DefaultValue$3 = Recoil_Node.DefaultValue;
var RecoilRoot$2 = Recoil_RecoilRoot_react.RecoilRoot;
var isRecoilValue$5 = Recoil_RecoilValue$1.isRecoilValue;
var retentionZone$1 = Recoil_RetentionZone.retentionZone;
var freshSnapshot$2 = Recoil_Snapshot$1.freshSnapshot;
var useRecoilState$1 = Recoil_Hooks.useRecoilState,
    useRecoilStateLoadable$1 = Recoil_Hooks.useRecoilStateLoadable,
    useRecoilValue$1 = Recoil_Hooks.useRecoilValue,
    useRecoilValueLoadable$1 = Recoil_Hooks.useRecoilValueLoadable,
    useResetRecoilState$1 = Recoil_Hooks.useResetRecoilState,
    useSetRecoilState$1 = Recoil_Hooks.useSetRecoilState,
    useSetUnvalidatedAtomValues$1 = Recoil_Hooks.useSetUnvalidatedAtomValues;
var useGotoRecoilSnapshot$2 = Recoil_SnapshotHooks.useGotoRecoilSnapshot,
    useRecoilSnapshot$1 = Recoil_SnapshotHooks.useRecoilSnapshot,
    useRecoilTransactionObserver$1 = Recoil_SnapshotHooks.useRecoilTransactionObserver,
    useTransactionObservation_DEPRECATED$1 = Recoil_SnapshotHooks.useTransactionObservation_DEPRECATED;
var noWait$1 = Recoil_WaitFor.noWait,
    waitForAll$1 = Recoil_WaitFor.waitForAll,
    waitForAllSettled$1 = Recoil_WaitFor.waitForAllSettled,
    waitForAny$1 = Recoil_WaitFor.waitForAny,
    waitForNone$1 = Recoil_WaitFor.waitForNone;
var Recoil_index = {
    // Types
    DefaultValue: DefaultValue$3,
    isRecoilValue: isRecoilValue$5,
    RecoilLoadable: RecoilLoadable,
    // Recoil Root
    RecoilRoot: RecoilRoot$2,
    useRecoilBridgeAcrossReactRoots_UNSTABLE: Recoil_useRecoilBridgeAcrossReactRoots,
    // Atoms/Selectors
    atom: Recoil_atom,
    selector: Recoil_selector,
    // Convenience Atoms/Selectors
    atomFamily: Recoil_atomFamily,
    selectorFamily: Recoil_selectorFamily,
    constSelector: Recoil_constSelector,
    errorSelector: Recoil_errorSelector,
    readOnlySelector: Recoil_readOnlySelector,
    // Concurrency Helpers for Atoms/Selectors
    noWait: noWait$1,
    waitForNone: waitForNone$1,
    waitForAny: waitForAny$1,
    waitForAll: waitForAll$1,
    waitForAllSettled: waitForAllSettled$1,
    // Hooks for Atoms/Selectors
    useRecoilValue: useRecoilValue$1,
    useRecoilValueLoadable: useRecoilValueLoadable$1,
    useRecoilState: useRecoilState$1,
    useRecoilStateLoadable: useRecoilStateLoadable$1,
    useSetRecoilState: useSetRecoilState$1,
    useResetRecoilState: useResetRecoilState$1,
    useGetRecoilValueInfo_UNSTABLE: Recoil_useGetRecoilValueInfo,
    useRecoilRefresher_UNSTABLE: Recoil_useRecoilRefresher,
    // Hooks for complex operations
    useRecoilCallback: Recoil_useRecoilCallback,
    useRecoilTransaction_UNSTABLE: Recoil_useRecoilTransaction,
    // Snapshots
    useGotoRecoilSnapshot: useGotoRecoilSnapshot$2,
    useRecoilSnapshot: useRecoilSnapshot$1,
    useRecoilTransactionObserver_UNSTABLE: useRecoilTransactionObserver$1,
    useTransactionObservation_UNSTABLE: useTransactionObservation_DEPRECATED$1,
    useSetUnvalidatedAtomValues_UNSTABLE: useSetUnvalidatedAtomValues$1,
    snapshot_UNSTABLE: freshSnapshot$2,
    // Memory Management
    useRetain: Recoil_useRetain,
    retentionZone: retentionZone$1
};
var Recoil_index_1 = Recoil_index.DefaultValue;
var Recoil_index_2 = Recoil_index.isRecoilValue;
var Recoil_index_3 = Recoil_index.RecoilLoadable;
var Recoil_index_4 = Recoil_index.RecoilRoot;
var Recoil_index_5 = Recoil_index.useRecoilBridgeAcrossReactRoots_UNSTABLE;
var Recoil_index_6 = Recoil_index.atom;
var Recoil_index_7 = Recoil_index.selector;
var Recoil_index_8 = Recoil_index.atomFamily;
var Recoil_index_9 = Recoil_index.selectorFamily;
var Recoil_index_10 = Recoil_index.constSelector;
var Recoil_index_11 = Recoil_index.errorSelector;
var Recoil_index_12 = Recoil_index.readOnlySelector;
var Recoil_index_13 = Recoil_index.noWait;
var Recoil_index_14 = Recoil_index.waitForNone;
var Recoil_index_15 = Recoil_index.waitForAny;
var Recoil_index_16 = Recoil_index.waitForAll;
var Recoil_index_17 = Recoil_index.waitForAllSettled;
var Recoil_index_18 = Recoil_index.useRecoilValue;
var Recoil_index_19 = Recoil_index.useRecoilValueLoadable;
var Recoil_index_20 = Recoil_index.useRecoilState;
var Recoil_index_21 = Recoil_index.useRecoilStateLoadable;
var Recoil_index_22 = Recoil_index.useSetRecoilState;
var Recoil_index_23 = Recoil_index.useResetRecoilState;
var Recoil_index_24 = Recoil_index.useGetRecoilValueInfo_UNSTABLE;
var Recoil_index_25 = Recoil_index.useRecoilRefresher_UNSTABLE;
var Recoil_index_26 = Recoil_index.useRecoilCallback;
var Recoil_index_27 = Recoil_index.useRecoilTransaction_UNSTABLE;
var Recoil_index_28 = Recoil_index.useGotoRecoilSnapshot;
var Recoil_index_29 = Recoil_index.useRecoilSnapshot;
var Recoil_index_30 = Recoil_index.useRecoilTransactionObserver_UNSTABLE;
var Recoil_index_31 = Recoil_index.useTransactionObservation_UNSTABLE;
var Recoil_index_32 = Recoil_index.useSetUnvalidatedAtomValues_UNSTABLE;
var Recoil_index_33 = Recoil_index.snapshot_UNSTABLE;
var Recoil_index_34 = Recoil_index.useRetain;
var Recoil_index_35 = Recoil_index.retentionZone;
export default Recoil_index;
export { Recoil_index_1 as DefaultValue, Recoil_index_3 as RecoilLoadable, Recoil_index_4 as RecoilRoot, Recoil_index_6 as atom, Recoil_index_8 as atomFamily, Recoil_index_10 as constSelector, Recoil_index_11 as errorSelector, Recoil_index_2 as isRecoilValue, Recoil_index_13 as noWait, Recoil_index_12 as readOnlySelector, Recoil_index_35 as retentionZone, Recoil_index_7 as selector, Recoil_index_9 as selectorFamily, Recoil_index_33 as snapshot_UNSTABLE, Recoil_index_24 as useGetRecoilValueInfo_UNSTABLE, Recoil_index_28 as useGotoRecoilSnapshot, Recoil_index_5 as useRecoilBridgeAcrossReactRoots_UNSTABLE, Recoil_index_26 as useRecoilCallback, Recoil_index_25 as useRecoilRefresher_UNSTABLE, Recoil_index_29 as useRecoilSnapshot, Recoil_index_20 as useRecoilState, Recoil_index_21 as useRecoilStateLoadable, Recoil_index_30 as useRecoilTransactionObserver_UNSTABLE, Recoil_index_27 as useRecoilTransaction_UNSTABLE, Recoil_index_18 as useRecoilValue, Recoil_index_19 as useRecoilValueLoadable, Recoil_index_23 as useResetRecoilState, Recoil_index_34 as useRetain, Recoil_index_22 as useSetRecoilState, Recoil_index_32 as useSetUnvalidatedAtomValues_UNSTABLE, Recoil_index_31 as useTransactionObservation_UNSTABLE, Recoil_index_16 as waitForAll, Recoil_index_17 as waitForAllSettled, Recoil_index_15 as waitForAny, Recoil_index_14 as waitForNone };