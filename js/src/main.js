/*global System, $, Promise, _, snabbdom, h, snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes, Redux, Rx, d3, TweenMax, Stats, console */

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

function drawGraph(state, el) {
	var data = state.data,
		n = data.length;
	var svg = d3.select(el),
		margin = {top: 5, right: 5, bottom: 5, left: 5},
		width = +svg.attr("width") - margin.left - margin.right,
		height = +svg.attr("height") - margin.top - margin.bottom,
		g = svg.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	var x = d3.scaleLinear()
		.domain([0, n - 1])
		.range([0, width]);
	var y = d3.scaleLinear()
		.domain([-2, 2])
		.range([height, 0]);
	var line = d3.line()
		.x(function (d, i) {
			return x(i);
		})
		.y(function (d, i) {
			return y(d);
		});
	g.append("defs").append("clipPath")
		.attr("id", "clip")
		.append("rect")
		.attr("width", width)
		.attr("height", height);
	g.append("g")
		.attr("class", "axis axis-x")
		.attr("transform", "translate(0," + y(0) + ")")
		.call(d3.axisBottom(x));
	g.append("g")
		.attr("class", "axis axis-y")
		.call(d3.axisLeft(y));
	g.append("g")
		.attr("clip-path", "url(#clip)")
		.append("path")
		.datum(data)
		.attr("class", "line")
		.transition()
		.duration(500)
		.ease(d3.easeLinear);
	function updateGraph(newPoint = 0) {
		// Push a new data point onto the back.
		data.push(_.isArray(newPoint) ? newPoint[0] : newPoint);
		let $line = $(el).find(".line");
		if ($line.length === 0) {
			return;
		}
		// Redraw the line.
		d3.select($line[0])
			.attr("d", line)
			.attr("transform", null);
		// Slide it to the left.c
		d3.active($line[0]) && 
		d3.active($line[0])
			.attr("transform", "translate(" + x(-1) + ",0)")
			.transition();
		n = data.length;
		if (n < 10) {
			x = d3.scaleLinear()
				.domain([0, n - 1])
				.range([0, width]);
		} else {
			// Pop the old data point off the front.
			data.shift();
		}
	}

	return updateGraph;
}

function updateGraphs() {
	$("svg").filter((i, el) => {
		return $(el).data("updategraph");
	})
		.filter((i, el) => {
			return Number.isFinite(parseFloat($(el).attr("data-val")))
		})
		.each((i, el) => {
			$(el).data("updategraph")(parseFloat($(el).attr("data-val")));
		});
	$("svg").filter((i, el) => {
		return !$(el).data("updategraph");
	}).each((i, el) => {
		$(el).data("updategraph", drawGraph(store.getState(), el));
	});
}

window.addEventListener('load', () => {
	const id = "mtconnect";
	const container = document.getElementById(id);
	// const updateGraphs = drawGraphs(store.getState());
	intent().subscribe(action => {
		store.dispatch(action)
	});
	store$.map(view).startWith(container).pairwise().subscribe(([a, b]) => {
		patch(a, b);
		updateGraphs();
	});
});