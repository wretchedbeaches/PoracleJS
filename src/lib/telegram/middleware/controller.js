const { mount } = require('telegraf')

/* eslint no-param-reassign: ["error", { "props": false }] */
module.exports = (query, dts, logs, GameData, geofence, config, re, translatorFactory, emojiStrip) => mount(['text', 'location'], (ctx, next) => {
	ctx.state.controller = {
		query,
		dts,
		logs,
		GameData,
		geofence,
		config,
		re,
		translatorFactory,
		emojiStrip,
	}
	ctx.state.controller.translator = translatorFactory.default
	return next()
})
