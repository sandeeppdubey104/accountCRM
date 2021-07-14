/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useCallback } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { get } from 'lodash-es';
import { DEFAULT_DP, REQUEST_STATUS } from '../../../src/constants/CommonConstants';
import FileSelectorComponent from '../../../src/components/FileSelectorComponent';
import { fileInsertAction, fileSearchAction } from './actions/FileActions';
import { FILE_TYPES } from './FileConstants';

const PictureContainer = ({
    className,
    refId,
    source,
    readOnly,
}) => {
    // REDUX
    const dispatch = useDispatch();

    const reducerData = useSelector((state) => state.FileReducer, shallowEqual);

    const pictureUrl = get(reducerData, `${source}-${refId}.search.data[0]url`, DEFAULT_DP);
    const insertReqStatus = get(reducerData, `${source}-${refId}.insertReqStatus`);

    const onChange = useCallback((event) => {
        const { files } = event.target;
        const file = files[0];
        if (!file) {
            // eslint-disable-next-line no-param-reassign
            event.target.value = '';
            return;
        }
        dispatch(fileInsertAction({
            files: file,
            fileType: FILE_TYPES.IMAGE,
            remark: 'Picture Upload',
            refId,
            source,
        }));
    }, [
        source,
        refId,
        dispatch,
    ]);

    // ON MOUNT
    useEffect(() => {
        if (!refId) {
            return;
        }

        const where = {
            refId,
            source,
        };

        dispatch(fileSearchAction({
            where,
            currentPage: 0,
            fullTextSearch: false,
        }));
    }, [
        refId,
        source,
        dispatch,
    ]);

    // ON insertReqStatus CHANGE
    useEffect(() => {
        if (insertReqStatus === REQUEST_STATUS.SUCCESS) {
            const where = {
                refId,
                source,
            };

            dispatch(fileSearchAction({
                where,
                currentPage: 0,
            }));
        }
    }, [
        refId,
        source,
        insertReqStatus,
        dispatch,
    ]);

    if (!refId || !source) {
        return null;
    }

    if (readOnly) {
        return (
            <img
                src={pictureUrl}
                alt="user"
                className={className}
            />
        );
    }

    return (
        <FileSelectorComponent
            onChange={onChange}
            accept="image/x-png,image/jpeg"
        >
            <img
                src={pictureUrl}
                alt="user"
                className={className}
            />
        </FileSelectorComponent>
    );
};

PictureContainer.propTypes = {
    className: PropTypes.string,
    refId: PropTypes.string.isRequired,
    source: PropTypes.string.isRequired,
    readOnly: PropTypes.bool,
};

PictureContainer.defaultProps = {
    className: '',
    readOnly: false,
};

export default PictureContainer;
