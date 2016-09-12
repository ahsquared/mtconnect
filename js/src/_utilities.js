/*global vdomVirtualize, virtualDom */

(function () {
	let i,
		method,
		methods = [
			'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
			'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
			'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
			'timeline', 'timelineEnd', 'timeStamp', 'trace', 'warn'
		],
		noop = function noop() {
		},
		host = window.location.hostname,
		debug = (host.indexOf(".dev") !== -1 || host.indexOf("-staging") !== -1),
		length = methods.length,
		console = (window.console = window.console || {});
	while (length--) {
		method = methods[length];

		// Only stub undefined methods.
		if (!console[method] || !debug) {
			console[method] = noop;
		}
	}
})();

export function getVNodeFromHMTL(html) {
	return convertHTML(html);
}

export function setupMixins() {
	_.mixin({
		deepPluck: (obj, path) => {
			if (_.isString(path)) {
				path = path.split(".")
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
setupMixins();
export function delegate(wrapper, selector, eventNames) {
	return Rx.Observable.from(eventNames.split(",")).mergeMap(eventName => {
		return Rx.Observable.fromEvent(
			wrapper,
			eventName.replace(/\s/g, ""),
			function (e) {
				return {event: e, delegate: e.target.closest(selector)};
			});
	}).filter(function (x) {
		return x.delegate !== null;
	});
}

export function getAgentData() {
	// get image mapping file for Interior viewer and update store
	let url = "http://agent.mtconnect.org/current&_=" + Date.now(),
		p = new Promise(function (resolve, reject) {
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
// end element-closest polyfill