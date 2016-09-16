/* global Rx, Redux, ReduxObservable, devToolsExtension, X2JS, d3 */

import { delegate, getAgentData } from "./_utilities";
import { ACTIONS } from "./_actions";
const { createStore, applyMiddleware, compose } = Redux;
const { createEpicMiddleware } = ReduxObservable;
const x2js = new X2JS();

const getDataEpic = action$ => action$.ofType(ACTIONS.REQUEST_AGENT_DATA)
	.concatMap(() => {
		return Rx.Observable.fromPromise(getAgentData());
	})
	.delay(1000)
	.map((data) => ({
		type: ACTIONS.STORE_AGENT_DATA,
		data: x2js.xml_str2json(data)
	}));

const epicMiddleware = createEpicMiddleware(getDataEpic);

const initState = {
	title: "The visualizer",
	fetchingData: false,
	agentData: null,
	data: [0]
};

function reducer(state = initState, action) {
	switch (action.type) {
		case ACTIONS.CHANGE_TITLE:
			return Object.assign({}, state, {
				title: action.data
			});
		case ACTIONS.REQUEST_AGENT_DATA:
			return Object.assign({}, state, {
				fetchingData: true
			});
		case ACTIONS.STORE_AGENT_DATA:
			return Object.assign({}, state, {
				fetchingData: false,
				agentData: action.data,
			});
		default:
			return state;
	}
}

export const store = createStore(reducer,
	compose(
		applyMiddleware(epicMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : f => f
	)
);
export const store$ = Rx.Observable.from(store);