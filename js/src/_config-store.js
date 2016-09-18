/* global Rx, Redux, ReduxObservable, X2JS, d3 */

import { getAgentData } from "./_utilities";
import { ACTIONS } from "./_actions";
const { createStore, applyMiddleware, compose } = Redux;
const { createEpicMiddleware } = ReduxObservable;
const x2js = new X2JS();

const getDataEpic = action$ => action$.ofType(ACTIONS.FETCH_AGENT_DATA)
	.concatMap(() => {
		return Rx.Observable.fromPromise(getAgentData())
			// .bufferTime(1000)
			.map((response) => ({
				type: ACTIONS.FETCH_AGENT_DATA_FULFILLED,
				data: x2js.xml_str2json(response.data)
			}))
			.catch(error => ({
				type: ACTIONS.FETCH_AGENT_DATA_FAILED,
				data: {
					payload: error,
					error: true
				}
			}));
	});

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
		case ACTIONS.FETCH_AGENT_DATA:
			return Object.assign({}, state, {
				fetchingData: true,
				fetchStartTime: Date.now()
			});
		case ACTIONS.FETCH_AGENT_DATA_FULFILLED:
			return Object.assign({}, state, {
				fetchingData: false,
				fetchEndTime: Date.now(),
				fetchTime: Date.now() - state.fetchStartTime,
				agentData: action.data,
			});
		default:
			return state;
	}
}

export const store = createStore(reducer,
	compose(
		applyMiddleware(epicMiddleware),
		window.devToolsExtension ? window.devToolsExtension() : (f => f)
	)
);
export const store$ = Rx.Observable.from(store);