'use strict';

const _ = require('lodash');

class Naming {
	getNormalisedName(name) {
		return `${_.upperFirst(name.replace(/-/g, 'Dash').replace(/_/g, 'Underscore'))}`;
	}

	getLambdaFunctionCFRef(normalizedName) {
		return `${normalizedName}LambdaFunction`;
	}

	getAlarmCFRef(alarmName, prefix) {
		const normalizedName = this.getNormalisedName(alarmName);
		return `${prefix}${normalizedName}Alarm`;
	}
		
	getLogMetricCFRef(normalizedName, stackName, alarmName){
		const stack = _.upperFirst(_.camelCase(stackName));
		return `${normalizedName}${stack}${alarmName}LogMetricFilter`;
	}

}

module.exports = Naming;
