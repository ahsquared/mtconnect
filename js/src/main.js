/*global System, $, Promise, _, snabbdom, h, snabbdom_class, snabbdom_props, snabbdom_style, snabbdom_attributes, Redux, Rx, TweenMax, Stats, console */

import { delegate, getAgentData } from "./_utilities";
import { ACTIONS } from "./_actions";
import { store, store$ } from "./_config-store";
import { view } from "./_view";

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

window.addEventListener('load', () => {
	const id = "mtconnect";
	const container = document.getElementById(id);
	intent().subscribe(action => {
		store.dispatch(action)
	});
	store$.map(view).startWith(container).pairwise().subscribe(([a, b]) => {
		patch(a, b);
	});
});