/*global System, $, Promise, _, snabbdom, h, snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes, Redux, Rx, d3, Stats, console */

import { createTimer } from "./_utilities";
import {ACTIONS} from "./_actions";
import {store, store$} from "./_config-store";
import {view} from "./_view";

const patch = snabbdom.init([snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes]);

function intent() {
	// const click$ = delegate(document.body, id, "click");
	const click$ = Rx.Observable.fromEvent(document.body, "click");

	const update$ = click$
		.filter(ev => {
			return _.includes(ev.target.className, "title");
		})
		.map(() => ({
			type: ACTIONS.CHANGE_TITLE,
			data: "The title has been updated."
		}));

	const agentData$ = Rx.Observable.timer(0, 1000).take(10)
		.map(() => ({
			type: ACTIONS.FETCH_AGENT_DATA
		}));

	const getData$ = click$
		.filter(ev => {
			return _.includes(ev.target.className, "get-data");
		})
		.map(() => ({
			type: ACTIONS.FETCH_AGENT_DATA
		}));

	return Rx.Observable.merge(update$, agentData$, getData$);
}

function drawCharts() {
	var n = 40,
		initValue = () => 0,
		data = d3.range(n).map(initValue);
	var svg = d3.select("svg"),
		margin = {top: 20, right: 20, bottom: 20, left: 40},
		width = +svg.attr("width") - margin.left - margin.right,
		height = +svg.attr("height") - margin.top - margin.bottom,
		g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	var x = d3.scaleLinear()
		.domain([0, n - 1])
		.range([0, width]);
	var y = d3.scaleLinear()
		.domain([-3, 3])
		.range([height, 0]);
	var line = d3.line()
		.x(function(d, i) { return x(i); })
		.y(function(d) { return y(d); });
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
		let timeDiff = state.fetchTime,
			newValue = state.agentData ? state.agentData.MTConnectStreams.Streams.DeviceStream.ComponentStream[7].Samples.Position[0] : 0;
		data.push(newValue);
		// Redraw the line.
		d3.select($("svg .line")[0])
			.attr("d", line)
			.transition()
			.duration(Math.max(0, 1000 - timeDiff))
			.ease(d3.easeLinear)
			.on("start", () => {
				// Slide it to the left.
				d3.active($("svg .line")[0])
					.attr("transform", "translate(" + x(-1) + ",0)");
				// Pop the old data point off the front.
				data.shift();
			});
	}
	return update;
}

window.addEventListener('load', () => {
	const id = "mtconnect";
	const container = document.getElementById(id);
	let chartUpdate = drawCharts();
	intent().subscribe(action => {
		store.dispatch(action)
	});
	store$.map(view).startWith(container).pairwise().subscribe(([a, b]) => {
		let state = store.getState();
		patch(a, b);
		if (!state.fetchingData) {
			chartUpdate(state);
		}
	});
});