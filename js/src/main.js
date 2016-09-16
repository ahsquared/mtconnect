/*global System, $, Promise, _, snabbdom, h, snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes, Redux, Rx, d3, crossfilter, dc, TweenMax, Stats, console */

import {delegate, getAgentData} from "./_utilities";
import {ACTIONS} from "./_actions";
import {store, store$} from "./_config-store";
import {view} from "./_view";

const patch = snabbdom.init([snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes])

function intent() {
	// const click$ = delegate(document.body, id, "click");
	const click$ = Rx.Observable.fromEvent(document.body, "click");

	const update$ = click$
		.filter(ev => {
			return _.includes(ev.target.className, "title");
		})
		.map(ev => ({
			type: ACTIONS.CHANGE_TITLE,
			data: "The title has been updated."
		}));

	const getData$ = click$
		.filter(ev => {
			return _.includes(ev.target.className, "get-data");
		})
		.map(() => ({
			type: ACTIONS.REQUEST_AGENT_DATA
		}));

	return Rx.Observable.merge(update$, getData$);
}

function drawCharts() {
	var n = 40,
		random = d3.randomNormal(0, .2),
		data = d3.range(n).map(random);
	var svg = d3.select("svg"),
		margin = {top: 20, right: 20, bottom: 20, left: 40},
		width = +svg.attr("width") - margin.left - margin.right,
		height = +svg.attr("height") - margin.top - margin.bottom,
		g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	var x = d3.scaleLinear()
		.domain([0, n - 1])
		.range([0, width]);
	var y = d3.scaleLinear()
		.domain([-1, 1])
		.range([height, 0]);
	var line = d3.line()
		.x(function(d, i) { return x(i); })
		.y(function(d, i) { return y(d); });
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
	function update() {
		// Push a new data point onto the back.
		data.push(random());
		// Redraw the line.
		d3.select($("svg .line")[0])
			.attr("d", line)
			.attr("transform", null)
			.transition()
			.duration(1000)
			.ease(d3.easeLinear)
			.on("start", () => {
				// Slide it to the left.
				d3.active($("svg .line")[0])
					.attr("transform", "translate(" + x(-1) + ",0)");
				// Pop the old data point off the front.
				data.shift();
			})
			.on("end", () => {
				store.dispatch({
					type: ACTIONS.REQUEST_AGENT_DATA
				});
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
		patch(a, b);
		chartUpdate();
	});
});