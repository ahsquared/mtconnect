function listData(componentStream) {
	let data = [],
		graph = false;
	if (componentStream.Samples) {
		data = componentStream.Samples;
		graph = true;
	} else if (componentStream.Events) {
		data = componentStream.Events;
	} else if (componentStream.Condition) {
		data = componentStream.Condition;
	}
	return h("ul.data", _.chain(data).map((s, k) => {
		if (_.isArray(s)) {
			return h("li", [
				h("ul.sample", _.chain(s).map(ss => {
					return h("li.sampleData", [
						h("div", ss._dataItemId + ": " + (ss.__text || "N/A")),
						h("svg#" + ss._dataItemId, {
							attrs: {
								"width": "400",
								"height": "100",
								"data-val": parseFloat(ss.__text)
							}
						})
					]);
				}).value()),
			]);
		} else {
			return h("li.sampleData", s._dataItemId + ": " + (s.__text || "N/A"));
		}
	}).value());
}

function listComponentStreams(deviceStream) {
	// console.log(deviceStream.ComponentStream)
	return h("div.components", _.chain(deviceStream.ComponentStream).map(componentStream => {
		// console.log(componentStream)
		return h("div.component", [
			componentStream._component,
			listData(componentStream)
		]);
	}).value());
}

function listDevices(streams) {
	return h("div#devices", _.chain(streams).map(deviceStream => {
		return h("div.device", [
			h("h4", deviceStream._name),
			listComponentStreams(deviceStream)
		]);
	}).value());
}

export function view(state) {
	return h("div#mtconnect", [
		h("h2.title", state.title),
		h("button.get-data", "Get Data"),
		state.agentData ? listDevices(state.agentData.MTConnectStreams.Streams) : ""
	]);
}