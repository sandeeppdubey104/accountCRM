/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash-es';
import classNames from 'classnames';
import PaginationComponent from '../PaginationComponent';
import TableCell from './TableCell';
import LinkComponent from '../LinkComponent';

const Table = ({
    columns,
    searchData,
    recordsPerPage,
    onPageChange,
    hasEdit,
    editClick,
    hasRemove,
    removeClick,
    rowDeletedCheckPath,
    customActions,
    hasPagination,
}) => {
    let pagination = null;
    let rows = [];
    // TABLE HEADERS
    const header = [];

    Object.keys(columns).forEach((key) => {
        const col = columns[key];
        if (Array.isArray(col)) {
            col.forEach((nestedCol) => {
                header.push((
                    <th
                        className="text-capitalize"
                        key={key + nestedCol.display}
                        scope="col"
                    >
                        {nestedCol.display}
                    </th>
                ));
            });
        }
        else {
            header.push((
                <th
                    className="text-capitalize "
                    key={key}
                    scope="col"
                >
                    {col.display}
                </th>
            ));
        }
    });

    if (searchData && searchData.count > 0) {
        const { data, count, currentPage } = searchData;

        pagination = hasPagination ? (
            <div className="mt-4">
                <PaginationComponent
                    recordsCount={count}
                    recordsPerPage={recordsPerPage}
                    onPageChange={onPageChange}
                    activePage={currentPage}
                />
            </div>
        ) : null;

        // LOOP ON RECORDS (ROWS)
        rows = data.map((record, index) => {
            const rowDeleted = Boolean(get(record, rowDeletedCheckPath, false));

            // ROW
            const rowCellList = [];

            Object.keys(columns).forEach((colName) => {
                const col = columns[colName];
                if (Array.isArray(col)) {
                    col.forEach((nestedColumn, index) => {
                        rowCellList.push((
                            <TableCell
                                className={classNames([
                                    {
                                        strikes: rowDeleted,
                                    },
                                ])}
                                key={`${colName} + ${index}`}
                                columns={columns}
                                colName={`${colName}.${index}`}
                                record={record}
                            />
                        ));
                    });
                }
                else {
                    rowCellList.push((
                        <TableCell
                            className={classNames([
                                {
                                    strikes: rowDeleted,
                                },
                            ])}
                            key={colName}
                            columns={columns}
                            colName={colName}
                            record={record}
                        />
                    ));
                }
            });

            return (
                <tr key={record._id}>
                    {
                        hasEdit
                            ? (
                                <td className="">
                                    <LinkComponent onClick={() => editClick && editClick(record)}>
                                        <i className="fas fa-pen" />
                                    </LinkComponent>
                                </td>
                            ) : null
                    }
                    {
                        hasRemove
                            ? (
                                <td>
                                    <LinkComponent
                                        className={classNames({ 'd-none': rowDeleted })}
                                        onClick={() => removeClick && removeClick(record)}
                                    >
                                        <i className="fas fa-times" />
                                    </LinkComponent>
                                </td>
                            ) : null
                    }
                    {
                        customActions.map(({ Render }) => (
                            <td
                                key={Render}
                            >
                                <Render
                                    record={record}
                                    index={index}
                                />
                            </td>
                        ))
                    }
                    <th
                        className="text-capitalize "
                        scope="row"
                    >
                        {((currentPage * recordsPerPage) + index) + 1}
                    </th>
                    {rowCellList}
                </tr>
            );
        });
    }

    return (
        <>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            {hasEdit ? <th scope="col">Edit</th> : null}
                            {hasRemove ? <th scope="col">Remove</th> : null}
                            {customActions.map(({ heading }) => (
                                <th
                                    key={heading}
                                    scope="col"
                                >
                                    {heading}
                                </th>
                            ))}
                            <th scope="col">#</th>
                            {header}
                        </tr>
                    </thead>
                    <tbody>
                        {rows}
                    </tbody>
                </table>
            </div>
            {pagination}
        </>
    );
};

Table.propTypes = {
    columns: PropTypes.any,
    onPageChange: PropTypes.func,
    recordsPerPage: PropTypes.number,
    searchData: PropTypes.shape({
        count: PropTypes.number,
        currentPage: PropTypes.number,
        data: PropTypes.array,
    }),
    editClick: PropTypes.func,
    hasRemove: PropTypes.bool,
    hasEdit: PropTypes.bool,
    removeClick: PropTypes.func,
    rowDeletedCheckPath: PropTypes.string,
    customActions: PropTypes.array,
    hasPagination: PropTypes.bool,
};

Table.defaultProps = {
    searchData: {
        count: 0,
        currentPage: 0,
        data: [],
    },
    columns: {},
    onPageChange: () => { },
    recordsPerPage: 5,
    hasRemove: false,
    removeClick: () => { },
    hasEdit: false,
    editClick: () => { },
    rowDeletedCheckPath: null,
    customActions: [],
    hasPagination: true,
};

export default Table;
