/*global vdomVirtualize, virtualDom */
System.register("_utilities", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function getVNodeFromHMTL(html) {
        return convertHTML(html);
    }
    exports_1("getVNodeFromHMTL", getVNodeFromHMTL);
    function setupMixins() {
        _.mixin({
            deepPluck: function (obj, path) {
                if (_.isString(path)) {
                    path = path.split(".");
                }
                return _.reduce(path, function pluck(ret, ident) {
                    if (ident === "*") {
                        for (var key in ret) {
                            if (ret.hasOwnProperty(key)) {
                                return ret[key];
                            }
                        }
                    }
                    return ret[ident];
                }, obj);
            }
        });
    }
    exports_1("setupMixins", setupMixins);
    function delegate(wrapper, selector, eventNames) {
        return Rx.Observable.from(eventNames.split(",")).mergeMap(function (eventName) {
            return Rx.Observable.fromEvent(wrapper, eventName.replace(/\s/g, ""), function (e) {
                return { event: e, delegate: e.target.closest(selector) };
            });
        }).filter(function (x) {
            return x.delegate !== null;
        });
    }
    exports_1("delegate", delegate);
    function getAgentData() {
        // get image mapping file for Interior viewer and update store
        var url = "http://agent.mtconnect.org/current&_=" + Date.now(), p = new Promise(function (resolve, reject) {
            $.ajax({
                url: "/agent-data-loader.php?url=" + url
            }).done(function (data) {
                resolve(data);
            }).fail(function (e) {
                reject("failed to get interior map", e);
            });
        });
        return p;
    }
    exports_1("getAgentData", getAgentData);
    return {
        setters:[],
        execute: function() {
            (function () {
                var i, method, methods = [
                    'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
                    'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
                    'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
                    'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
                ], noop = function noop() {
                }, host = window.location.hostname, debug = (host.indexOf(".dev") !== -1 || host.indexOf("-staging") !== -1), length = methods.length, console = (window.console = window.console || {});
                while (length--) {
                    method = methods[length];
                    // Only stub undefined methods.
                    if (!console[method] || !debug) {
                        console[method] = noop;
                    }
                }
            })();
            setupMixins();
            // element-closest | CC0-1.0 | github.com/jonathantneal/closest
            if (typeof Element.prototype.matches !== 'function') {
                Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.webkitMatchesSelector || function matches(selector) {
                    var element = this;
                    var elements = (element.document || element.ownerDocument).querySelectorAll(selector);
                    var index = 0;
                    while (elements[index] && elements[index] !== element) {
                        ++index;
                    }
                    return Boolean(elements[index]);
                };
            }
            if (typeof Element.prototype.closest !== 'function') {
                Element.prototype.closest = function closest(selector) {
                    var element = this;
                    while (element && element.nodeType === 1) {
                        if (element.matches(selector)) {
                            return element;
                        }
                        element = element.parentNode;
                    }
                    return null;
                };
            }
        }
    }
});
// end element-closest polyfill 
System.register("_actions", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
    var ACTIONS;
    return {
        setters:[],
        execute: function() {
            exports_2("ACTIONS", ACTIONS = {
                CHANGE_TITLE: "CHANGE_TITLE",
                REQUEST_AGENT_DATA: "REQUEST_AGENT_DATA",
                STORE_AGENT_DATA: "STORE_AGENT_DATA"
            });
        }
    }
});
/* global Rx, Redux, ReduxObservable, devToolsExtension, X2JS */
System.register("_config-store", ["_utilities", "_actions"], function(exports_3, context_3) {
    "use strict";
    var __moduleName = context_3 && context_3.id;
    var _utilities_1, _actions_1;
    var createStore, applyMiddleware, compose, createEpicMiddleware, x2js, getDataEpic, epicMiddleware, initState, store, store$;
    function reducer(state, action) {
        if (state === void 0) { state = initState; }
        switch (action.type) {
            case _actions_1.ACTIONS.CHANGE_TITLE:
                return Object.assign({}, state, {
                    title: action.data
                });
            case _actions_1.ACTIONS.REQUEST_AGENT_DATA:
                return Object.assign({}, state, {
                    fetchingData: true
                });
            case _actions_1.ACTIONS.STORE_AGENT_DATA:
                return Object.assign({}, state, {
                    fetchingData: false,
                    agentData: x2js.xml_str2json(action.data)
                });
            default:
                return state;
        }
    }
    return {
        setters:[
            function (_utilities_1_1) {
                _utilities_1 = _utilities_1_1;
            },
            function (_actions_1_1) {
                _actions_1 = _actions_1_1;
            }],
        execute: function() {
            createStore = Redux.createStore, applyMiddleware = Redux.applyMiddleware, compose = Redux.compose;
            createEpicMiddleware = ReduxObservable.createEpicMiddleware;
            x2js = new X2JS();
            getDataEpic = function (action$) { return action$.ofType(_actions_1.ACTIONS.REQUEST_AGENT_DATA)
                .concatMap(function () {
                return Rx.Observable.fromPromise(_utilities_1.getAgentData());
            }).map(function (data) { return ({
                type: _actions_1.ACTIONS.STORE_AGENT_DATA,
                data: data
            }); }); };
            epicMiddleware = createEpicMiddleware(getDataEpic);
            initState = {
                title: "The visualizer",
                fetchingData: false,
                agentData: null
            };
            exports_3("store", store = createStore(reducer, compose(applyMiddleware(epicMiddleware), window.devToolsExtension ? window.devToolsExtension() : function (f) { return f; })));
            exports_3("store$", store$ = Rx.Observable.from(store));
        }
    }
});
System.register("_view", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function listData(componentStream) {
        var data = [];
        if (componentStream.Samples) {
            data = componentStream.Samples;
        }
        else if (componentStream.Events) {
            data = componentStream.Events;
        }
        else if (componentStream.Condition) {
            data = componentStream.Condition;
        }
        return h("ul.data", _.chain(data).map(function (s, k) {
            if (_.isArray(s)) {
                return h("li", [
                    h("ul.sample", _.chain(s).map(function (ss) {
                        return h("li.sampleData", ss._dataItemId + ": " + (ss.__text || "N/A"));
                    }).value())
                ]);
            }
            else {
                return h("li.sampleData", s._dataItemId + ": " + (s.__text || "N/A"));
            }
        }).value());
    }
    function listComponentStreams(deviceStream) {
        // console.log(deviceStream.ComponentStream)
        return h("div.components", _.chain(deviceStream.ComponentStream).map(function (componentStream) {
            // console.log(componentStream)
            return h("div.component", [
                componentStream._component,
                listData(componentStream)
            ]);
        }).value());
    }
    function listDevices(streams) {
        return h("div#devices", _.chain(streams).map(function (deviceStream) {
            return h("div.device", [
                h("h4", deviceStream._name),
                listComponentStreams(deviceStream)
            ]);
        }).value());
    }
    function view(state) {
        return h("div#mtconnect", [
            h("h2.title", state.title),
            h("button.get-data", "Get Data"),
            state.agentData ? listDevices(state.agentData.MTConnectStreams.Streams) : ""
        ]);
    }
    exports_4("view", view);
    return {
        setters:[],
        execute: function() {
        }
    }
});
/*global System, $, Promise, _, snabbdom, h, snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes, Redux, Rx, TweenMax, Stats, console */
System.register("main", ["_actions", "_config-store", "_view"], function(exports_5, context_5) {
    "use strict";
    var __moduleName = context_5 && context_5.id;
    var _actions_2, _config_store_1, _view_1;
    var patch;
    function intent() {
        // const click$ = delegate(document.body, id, "click");
        var click$ = Rx.Observable.fromEvent(document.body, "click");
        var update$ = click$
            .filter(function (ev) {
            return _.includes(ev.target.className, "title");
        })
            .map(function (ev) { return ({
            type: _actions_2.ACTIONS.CHANGE_TITLE,
            data: "The title has been updated."
        }); });
        var getData$ = click$
            .filter(function (ev) {
            return _.includes(ev.target.className, "get-data");
        })
            .map(function () { return ({
            type: _actions_2.ACTIONS.REQUEST_AGENT_DATA
        }); });
        return Rx.Observable.merge(update$, getData$);
    }
    return {
        setters:[
            function (_actions_2_1) {
                _actions_2 = _actions_2_1;
            },
            function (_config_store_1_1) {
                _config_store_1 = _config_store_1_1;
            },
            function (_view_1_1) {
                _view_1 = _view_1_1;
            }],
        execute: function() {
            patch = snabbdom.init([snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes]);
            window.addEventListener('load', function () {
                var id = "mtconnect";
                var container = document.getElementById(id);
                intent().subscribe(function (action) {
                    _config_store_1.store.dispatch(action);
                });
                _config_store_1.store$.map(_view_1.view).startWith(container).pairwise().subscribe(function (_a) {
                    var a = _a[0], b = _a[1];
                    patch(a, b);
                });
            });
        }
    }
});
