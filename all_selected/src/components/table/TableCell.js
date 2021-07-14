/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash-es';
import * as moment from 'moment';
import { format } from 'timeago.js';
import classNames from 'classnames';
import ToggleLinkComponent from '../ToggleLinkComponent';

const TableCell = ({
    record,
    colName,
    columns,
    className,
}) => {
    const valuePath = get(columns, `${colName}.path`, colName);
    let colData = get(record, valuePath, '');

    if (columns[colName]?.type === Date && colData) {
        if (columns[colName]?.format?.toLowerCase() === 'timeago') {
            colData = format(moment(colData).format('x'));
        }
        else {
            colData = moment(colData).format('YYYY-MMM-DD hh:mm a');
        }
    }
    if (typeof colData === 'boolean' || columns[colName]?.type === Boolean) {
        if (columns[colName]?.action) {
            colData = (
                <ToggleLinkComponent
                    onChange={(value) => {
                        columns[colName].action(value, record);
                    }}
                    value={colData}
                />
            );
        }
        else {
            colData = colData ? 'Yes' : 'No';
        }
    }
    return (
        <td
            key={record._id + colName}
            className={classNames([
                'text-nowrap',
                className,
            ])}
        >
            {colData}
        </td>
    );
};

TableCell.propTypes = {
    columns: PropTypes.object.isRequired,
    colName: PropTypes.string.isRequired,
    record: PropTypes.shape({
        _id: PropTypes.any,
    }).isRequired,
    className: PropTypes.string,
};

TableCell.defaultProps = {
    className: '',
};

export default TableCell;
