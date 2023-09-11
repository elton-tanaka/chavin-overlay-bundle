import { createRoot } from 'react-dom/client';

'use strict';

module.exports = function (nodecg) {
	nodecg.Replicant('textReplicant', {defaultValue: 'Welcome to the Stream!'}),
	nodecg.Replicant('activeFacecam', {defaultValue: 'data:,'}),
	nodecg.Replicant('facecamTimer', {defaultValue: '300000'})
};
