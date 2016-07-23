'use strict';

import React, {Component} from "react";

import {
	AppRegistry,
	View,
	StyleSheet,
	ListView,
} from 'react-native';

class MtGrid extends Component {
	constructor(props) {
		super(props);
		this.key = 0;
	}

	groupItems(items, itemsPerRow) {
		const itemsGroups = [];
		let group = [];
		items.forEach(function(item) {
			if (group.length === itemsPerRow) {
				itemsGroups.push(group);
				group = [item];
			} else {
				group.push(item);
			}
		});

		if (group.length > 0) {
			itemsGroups.push(group);
		}

		return itemsGroups;
	}

	renderGroup(group) {
		const that = this;
		const items = group.map(function(item, index) {
			return that.props.renderItem(item, index);
		});
		return (
			<View style={[styles.group, this.props.styleRow]} key={this.key ++}>
				{items}
			</View>
		);
	}

	render() {
		const groups = this.groupItems(this.props.items, this.props.itemsPerRow);
		const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
		return (<ListView
			{...this.props}
			renderRow={this.renderGroup.bind(this)}
			dataSource={ds.cloneWithRows(groups)}
		/>);
	}
};


const styles = StyleSheet.create({
	group: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-around',
		overflow: 'hidden',
		marginTop: 5
	}
});

module.exports = MtGrid;