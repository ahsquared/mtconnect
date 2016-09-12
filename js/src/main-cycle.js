/*global System, $, Promise, _, THREE, snabbdom, h, snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes, Redux, Rx, TweenMax, Stats, console */

import {delegate, getFile} from "./_utilities";
import {store, store$} from "./_config-store";

const patch = snabbdom.init([snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes])

function intent(containerElem) {
	const click$ = delegate(document.body, "#mtconnect", "click");

	const update$ = click$
		.map(() => {
			console.log("click event");
			return {
				type: 'CLICK'
			}
		});

	return Rx.Observable.merge(update$);
}

function model(action$) {
	const initialState = {
		title: "The visualizer"
	};

	const clickReducer$ = action$
		.filter(action => action.type === 'CLICK')
		.map(action => function (state) {
			return Object.assign({}, state, {
				title: "The visualizer has been updated."
			});
		});

	return Rx.Observable.merge(clickReducer$)
		.scan((state, reducer) => reducer(state), initialState)
		.startWith(initialState);
}

function view(state$) {
	return state$.map(state =>
		h("div#mtconnect.test", state.title)
	);
}

function main(containerElem) {
	const action$ = intent(containerElem);
	const state$ = model(action$);
	const vdom$ = view(state$);
	return {
		DOM: vdom$
	};
}

window.addEventListener('load', () => {
	const container = document.querySelector('#mtconnect');
	const vdom$ = main(container).DOM;
	vdom$.startWith(container).pairwise().subscribe(([a, b]) => {
		console.log(a, b)
		patch(a, b);
	});
});