/**
 * Created by Hey on 2016/6/15.
 */
'use strict';

import {
	Alert,
	StyleSheet,
	Text,
	TouchableHighlight,
	View,
} from "react-native";

import React, {
	Component
} from "react";

var MtGrid = require('martian-ui').MtGrid;

exports.title  = 'MtGrid';
exports.description = 'grid view';

function renderItem(item, idx) {
	const styleItem = item.styleItem || {flex: 1, alignItems: 'center', justifyContent: 'center'};
	const styleText = item.styleText || {flex: 1, fontSize: 30, textAlign: 'center', color: 'red'};
	const text = (item.text === undefined) ? "GridItem" : item.text;
	return (
		<View style={styleItem} key={idx}>
			<Text style={styleText}>
				{text}
			</Text>
		</View>
	);
}

const items = [
];

for(let i = 0; i < 6; i ++) {
	items[i] = {
		text: i + 1,
		styleItem: {
			width: 100,
			height: 100,
			backgroundColor: 'yellow',
			alignItems: 'center',
			justifyContent: 'center',
			flexDirection: 'row'
		}
	};
}

exports.examples = [
	{
		title: '2 items per row',
		render: function () {
			return (
				<MtGrid items={items} itemsPerRow={2} renderItem={renderItem}/>
			);
		}
	},
	{
		title: '3 items per row',
		render: function () {
			return (
				<MtGrid items={items} itemsPerRow={3} renderItem={renderItem}/>
			);
		}
	},
	{
		title: '3 items per row with larger rowMarginTop/rowMarginleft',
		render: function () {
			return (
				<MtGrid items={items} itemsPerRow={3} styleRow={{
					marginLeft: 20,
					marginTop: 20
				}} renderItem={renderItem}/>
			);
		}
	},
	{
		title: '2 items per row with unaverage width',
		render: function () {
			const items2 = [
			];

			for(let i = 0; i < 6; i ++) {
				items2[i] = {
					text: i + 1,
					styleItem: {
						flex: 1,
						height: 100,
						backgroundColor: 'yellow',
						alignItems: 'center',
						justifyContent: 'center',
						flexDirection: 'row'
					}
				};
			}
			items2[1].styleItem.flex = 2;
			items2[1].styleItem.marginLeft = 10;
			items2[2].styleItem.flex = 2;
			items2[2].styleItem.marginRight = 10;
			items2[4].styleItem.marginRight = 10;
			return (
				<MtGrid items={items2} itemsPerRow={2} renderItem={renderItem}/>
			);
		}
	}
];
