System.register("_actions", [], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ACTIONS;
    return {
        setters:[],
        execute: function() {
            exports_1("ACTIONS", ACTIONS = {
                CHANGE_TITLE: "CHANGE_TITLE",
                FETCH_AGENT_DATA: "FETCH_AGENT_DATA",
                FETCH_AGENT_DATA_FULFILLED: "FETCH_AGENT_DATA_FULFILLED",
                FETCH_AGENT_DATA_FAILED: "FETCH_AGENT_DATA_FAILED"
            });
        }
    }
});
/*global $, Promise, System, _, Rx, Redux */
System.register("_utilities", [], function(exports_2, context_2) {
    "use strict";
    var __moduleName = context_2 && context_2.id;
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
    exports_2("setupMixins", setupMixins);
    function delegate(wrapper, selector, eventNames) {
        return Rx.Observable.from(eventNames.split(",")).mergeMap(function (eventName) {
            return Rx.Observable.fromEvent(wrapper, eventName.replace(/\s/g, ""), function (e) {
                return { event: e, delegate: e.target.closest(selector) };
            });
        }).filter(function (x) {
            return x.delegate !== null;
        });
    }
    exports_2("delegate", delegate);
    function getAgentData() {
        // get image mapping file for Interior viewer and update store
        var startTime = Date.now(), url = "http://agent.mtconnect.org/current&_=" + startTime, p = new Promise(function (resolve, reject) {
            $.ajax({
                url: "/agent-data-loader.php?url=" + url
            }).done(function (data) {
                resolve({
                    data: data,
                    startTime: startTime
                });
            }).fail(function (e) {
                reject("failed to get interior map", e);
            });
        });
        return p;
    }
    exports_2("getAgentData", getAgentData);
    function createTimer(interval) {
        return Rx.Observable.timer(0, interval)
            .share();
    }
    exports_2("createTimer", createTimer);
    return {
        setters:[],
        execute: function() {
            (function () {
                var method, methods = [
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
/* global Rx, Redux, ReduxObservable, X2JS, d3 */
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
            case _actions_1.ACTIONS.FETCH_AGENT_DATA:
                return Object.assign({}, state, {
                    fetchingData: true,
                    fetchStartTime: Date.now()
                });
            case _actions_1.ACTIONS.FETCH_AGENT_DATA_FULFILLED:
                return Object.assign({}, state, {
                    fetchingData: false,
                    fetchEndTime: Date.now(),
                    fetchTime: Date.now() - state.fetchStartTime,
                    agentData: action.data
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
            getDataEpic = function (action$) { return action$.ofType(_actions_1.ACTIONS.FETCH_AGENT_DATA)
                .concatMap(function () {
                return Rx.Observable.fromPromise(_utilities_1.getAgentData())
                    .map(function (response) { return ({
                    type: _actions_1.ACTIONS.FETCH_AGENT_DATA_FULFILLED,
                    data: x2js.xml_str2json(response.data)
                }); })
                    .catch(function (error) { return ({
                    type: _actions_1.ACTIONS.FETCH_AGENT_DATA_FAILED,
                    data: {
                        payload: error,
                        error: true
                    }
                }); });
            }); };
            epicMiddleware = createEpicMiddleware(getDataEpic);
            initState = {
                title: "The visualizer",
                fetchingData: false,
                agentData: null,
                data: [0]
            };
            exports_3("store", store = createStore(reducer, compose(applyMiddleware(epicMiddleware), window.devToolsExtension ? window.devToolsExtension() : (function (f) { return f; }))));
            exports_3("store$", store$ = Rx.Observable.from(store));
        }
    }
});
/*global h, _ */
System.register("_view", [], function(exports_4, context_4) {
    "use strict";
    var __moduleName = context_4 && context_4.id;
    function listData(componentStream) {
        var data = [], graph = false;
        if (componentStream.Samples) {
            data = componentStream.Samples;
            graph = true;
        }
        else if (componentStream.Events) {
            data = componentStream.Events;
        }
        else if (componentStream.Condition) {
            data = componentStream.Condition;
        }
        return h("ul.data", _.chain(data).map(function (s) {
            if (_.isArray(s)) {
                return h("li", [
                    h("ul.sample", _.chain(s).map(function (ss) {
                        return h("li.sampleData", [
                            h("div", ss._dataItemId + ": " + (ss.__text || "N/A")),
                        ]);
                    }).value()),
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
/*global System, $, Promise, _, snabbdom, h, snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes, Redux, Rx, d3, Stats, console */
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
            .map(function () { return ({
            type: _actions_2.ACTIONS.CHANGE_TITLE,
            data: "The title has been updated."
        }); });
        var agentData$ = Rx.Observable.timer(0, 1000).take(10)
            .map(function () { return ({
            type: _actions_2.ACTIONS.FETCH_AGENT_DATA
        }); });
        var getData$ = click$
            .filter(function (ev) {
            return _.includes(ev.target.className, "get-data");
        })
            .map(function () { return ({
            type: _actions_2.ACTIONS.FETCH_AGENT_DATA
        }); });
        return Rx.Observable.merge(update$, agentData$, getData$);
    }
    function drawCharts() {
        var n = 40, initValue = function () { return 0; }, data = d3.range(n).map(initValue);
        var svg = d3.select("svg"), margin = { top: 20, right: 20, bottom: 20, left: 40 }, width = +svg.attr("width") - margin.left - margin.right, height = +svg.attr("height") - margin.top - margin.bottom, g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
        var x = d3.scaleLinear()
            .domain([0, n - 1])
            .range([0, width]);
        var y = d3.scaleLinear()
            .domain([-3, 3])
            .range([height, 0]);
        var line = d3.line()
            .x(function (d, i) { return x(i); })
            .y(function (d) { return y(d); });
        g.append("defs").append("clipPath")
            .attr("id", "clip")
            .append("rect")
            .attr("width", width)
            .attr("height", height);
        g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + y(0) + ")")
            .call(d3.axisBottom(x));
        g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y));
        g.append("g")
            .attr("clip-path", "url(#clip)")
            .append("path")
            .datum(data)
            .attr("class", "line");
        function update(state) {
            // Push a new data point onto the back.
            var timeDiff = state.fetchTime, newValue = state.agentData ? state.agentData.MTConnectStreams.Streams.DeviceStream.ComponentStream[7].Samples.Position[0] : 0;
            data.push(newValue);
            // Redraw the line.
            d3.select($("svg .line")[0])
                .attr("d", line)
                .transition()
                .duration(Math.max(0, 1000 - timeDiff))
                .ease(d3.easeLinear)
                .on("start", function () {
                // Slide it to the left.
                d3.active($("svg .line")[0])
                    .attr("transform", "translate(" + x(-1) + ",0)");
                // Pop the old data point off the front.
                data.shift();
            });
        }
        return update;
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
                var chartUpdate = drawCharts();
                intent().subscribe(function (action) {
                    _config_store_1.store.dispatch(action);
                });
                _config_store_1.store$.map(_view_1.view).startWith(container).pairwise().subscribe(function (_a) {
                    var a = _a[0], b = _a[1];
                    var state = _config_store_1.store.getState();
                    patch(a, b);
                    if (!state.fetchingData) {
                        chartUpdate(state);
                    }
                });
            });
        }
    }
});


