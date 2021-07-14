/* eslint-disable no-underscore-dangle */
/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React, { useEffect, useCallback, useMemo } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { get } from 'lodash-es';
import { useQuery } from '../../../src/utils/ReactHooksUtil';
import { SEARCH_RECORD_PAGE_LIMIT } from '../../../src/constants/CommonConstants';
import { useHistory } from 'react-router-dom';
import Table from '../../../src/components/table/Table';

import classNames from 'classnames';
import objectHash from 'object-hash';

const SearchContainer = ({
    className,
    reducer,
    dataPath,
    action,
    redirectUrlOnEdit,
    columns,
    where,
    queryParamsAsWhere,
    hasEdit,
    editAction,
    hasRemove,
    removeAction,
    rowDeletedCheckPath,
    forceRefreshSearchContainer,
    customActions,
    fullTextSearch,
}) => {
    const query = useQuery();
    const history = useHistory();

    const queryConditions = useMemo(() => (queryParamsAsWhere ? query : where), [
        queryParamsAsWhere,
        query,
        where,
    ]);

    const dataKeyOfReducer = useMemo(() => objectHash({
        reducer,
        queryConditions,
    }), [
        reducer,
        queryConditions,
    ]);

    // REDUX
    const dispatch = useDispatch();
    const reducerData = useSelector((state) => state[reducer], shallowEqual);
    const searchData = get(reducerData, dataPath || dataKeyOfReducer);

    useEffect(() => {
        if (action) {
            dispatch(action({
                where: queryConditions,
                currentPage: 0,
                fullTextSearch,
                dataKeyOfReducer,
            }));
        }
    }, [
        dispatch,
        queryConditions,
        action,
        forceRefreshSearchContainer,
        fullTextSearch,
        dataKeyOfReducer,
    ]);

    // PAGE CHANGE
    const onPageChange = useCallback((currentPage) => {
        dispatch(action({
            where: queryParamsAsWhere ? query : where,
            currentPage,
            fullTextSearch,
        }));
    }, [
        dispatch,
        action,
        query,
        queryParamsAsWhere,
        where,
        fullTextSearch,
    ]);

    // EDIT
    const editClick = useCallback((record) => {
        if (editAction) {
            dispatch(editAction(record));
        }
        if (redirectUrlOnEdit) {
            history.push(redirectUrlOnEdit);
        }
    }, [
        dispatch,
        editAction,
        redirectUrlOnEdit,
        history,
    ]);

    return (
        <div className={classNames('card', className)}>
            <div className="card-body">
                <Table
                    columns={columns}
                    searchData={searchData}
                    recordsPerPage={SEARCH_RECORD_PAGE_LIMIT}
                    onPageChange={onPageChange}
                    hasEdit={hasEdit}
                    editClick={editClick}
                    hasRemove={hasRemove}
                    removeClick={removeAction}
                    rowDeletedCheckPath={rowDeletedCheckPath}
                    customActions={customActions}
                />
            </div>
        </div>
    );
};

SearchContainer.propTypes = {
    action: PropTypes.func,
    columns: PropTypes.any,
    dataPath: PropTypes.string,
    reducer: PropTypes.string,
    hasEdit: PropTypes.bool,
    editAction: PropTypes.func,
    redirectUrlOnEdit: PropTypes.string,
    where: PropTypes.object,
    queryParamsAsWhere: PropTypes.bool,
    hasRemove: PropTypes.bool,
    removeAction: PropTypes.func,
    rowDeletedCheckPath: PropTypes.string,
    forceRefreshSearchContainer: PropTypes.any,
    className: PropTypes.string,
    customActions: PropTypes.array,
    fullTextSearch: PropTypes.bool,
};

SearchContainer.defaultProps = {
    reducer: '',
    dataPath: '',
    action: null,
    columns: [],
    hasEdit: false,
    editAction: null,
    hasRemove: false,
    removeAction: null,
    redirectUrlOnEdit: null,
    queryParamsAsWhere: true,
    where: {},
    rowDeletedCheckPath: null,
    forceRefreshSearchContainer: {},
    className: '',
    customActions: [],
    fullTextSearch: true,
};

export default SearchContainer;
