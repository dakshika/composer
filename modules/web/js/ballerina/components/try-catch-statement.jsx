/**
 * Copyright (c) 2017, WSO2 Inc. (http://www.wso2.org) All Rights Reserved.
 *
 * WSO2 Inc. licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
import React from 'react';
import CompoundStatementDecorator from './compound-statement-decorator';
import PropTypes from 'prop-types';
import { getComponentForNodeArray } from './utils';

class TryCatchStatement extends React.Component {

    render() {
        const model = this.props.model;
        const bBox = model.viewState.bBox;
        const children = getComponentForNodeArray(this.props.model.getChildren());
        return (<CompoundStatementDecorator model={model} bBox={bBox}>
            {children}
        </CompoundStatementDecorator>);
    }
}

TryCatchStatement.propTypes = {
    bBox: PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
        w: PropTypes.number.isRequired,
        h: PropTypes.number.isRequired,
    }),
};


export default TryCatchStatement;
