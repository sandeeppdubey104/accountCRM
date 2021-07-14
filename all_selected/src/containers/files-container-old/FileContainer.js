/* eslint-disable react/forbid-prop-types */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useCallback, useMemo } from 'react';
import PropTypes from 'prop-types';
import { DATE_TIME_FORMAT } from 'src/constants/CommonConstants';
import { Form, Formik } from 'formik';
import FormikFile from 'src/components/formik/FormikFile';
import FormikInput from 'src/components/formik/FormikInput';
import FormikSelect from 'src/components/formik/FormikSelect';
import { isProduction } from 'src/config/index';
import { withFormikDevtools } from 'formik-devtools-extension';
import { useDispatch } from 'react-redux';
import LinkComponent from 'src/components/LinkComponent';
import classNames from 'classnames';
import { FileDefaultProps, FileYupSchema } from './FilePropTypes';
import { FILE_TYPES_LIST } from './FileConstants';
import SearchContainer from '../search-container/SearchContainer';
import { fileInsertAction, fileRemoveAction, fileSearchAction } from './actions/FileActions';

const columns = {
    mime: {
        display: 'Mime',
    },
    fileType: {
        display: 'Type',
    },
    remark: {
        display: 'About File',
    },
    extension: {
        display: 'Extension',
    },
    deleted: {
        display: 'deleted',
        type: Boolean,
    },
    deletedTs: {
        display: 'deleted TS',
        type: Date,
        format: DATE_TIME_FORMAT.TIMEAGO,
    },
    deletedBy: {
        display: 'deleted By',
        path: 'deletedBy.personalInfo.firstName',
    },
    by: {
        display: 'By',
        path: 'by.personalInfo.firstName',
    },
    ts: {
        display: 'Ts',
        type: Date,
        format: DATE_TIME_FORMAT.TIMEAGO,
    },
};

const RenderDownload = ({ record }) => (
    <LinkComponent
        className={classNames({
            'd-none': Boolean(record.deleted),
        })}
        onClick={() => {
            window.open(record.url, '_blank');
        }}
    >
        <i className="fas fa-download" />
    </LinkComponent>
);

RenderDownload.propTypes = {
    record: PropTypes.shape({
        deleted: PropTypes.bool,
    }).isRequired,
};

const Render = (props) => {
    // DEV TOOL
    if (!isProduction()) {
        withFormikDevtools(props);
    }

    const {
        values,
    } = props;

    return (
        <Form>
            <div className="form-row">
                <div className="form-group col-md-4">
                    <label>File Type</label>
                    <FormikSelect
                        name="fileType"
                        items={FILE_TYPES_LIST}
                        className="form-control"
                    />
                </div>
                <div className="form-group col-md-8">
                    <label>Select File To Upload</label>
                    <div className="custom-file">
                        <FormikFile
                            name="file"
                            className="custom-file-input"
                        />
                        <label
                            className="custom-file-label"
                            htmlFor="inputGroupFile01"
                        >
                            {values.file ? values.file.name : 'Choose file'}
                        </label>
                    </div>
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col">
                    <label>About File</label>
                    <FormikInput
                        name="remark"
                        className="form-control"
                    />
                </div>
            </div>

            <div className="text-center">
                <button
                    type="submit"
                    className="btn btn-primary"
                >
                    Upload
                </button>
            </div>
        </Form>
    );
};

Render.propTypes = {
    values: PropTypes.shape({
        file: PropTypes.any,
    }).isRequired,
};

const FileContainer = ({
    className,
    title,
    refId,
    source,
}) => {
    // REDUX
    const dispatch = useDispatch();

    const onSubmit = useCallback((
        {
            file: files,
            fileType,
            remark,
        },
        { resetForm },
    ) => {
        dispatch(fileInsertAction({
            files,
            fileType,
            remark,
            refId,
            source,
        }));
        resetForm();
    }, [
        source,
        refId,
        dispatch,
    ]);

    const onRemove = useCallback((
        { _id },
        // { resetForm },
    ) => {
        dispatch(fileRemoveAction({
            fileId: _id,
            refId,
            source,
        }));
    }, [
        refId,
        source,
        dispatch,
    ]);

    const where = useMemo(() => ({
        refId,
        source,
    }), [
        refId,
        source,
    ]);
    const dataPath = useMemo(() => `${source}-${refId}.search`, [
        refId,
        source,
    ]);

    if (!refId || !source) {
        return null;
    }

    return (
        <div className={className}>
            <div className="card mt-3">
                <div className="card-body">
                    <h5 className="card-title">
                        <i className="fas fa-file text-info" />
                        {' '}
                        {title}
                    </h5>

                    <Formik
                        onSubmit={onSubmit}
                        enableReinitialize
                        initialValues={FileDefaultProps}
                        validationSchema={FileYupSchema}
                    >
                        {(formikProps) => (
                            <Render
                                {...formikProps}
                            />
                        )}
                    </Formik>

                    <SearchContainer
                        fullTextSearch={false}
                        className="mt-3"
                        reducer="FileReducer"
                        dataPath={dataPath}
                        action={fileSearchAction}
                        columns={columns}
                        queryParamsAsWhere={false}
                        where={where}
                        hasRemove
                        removeAction={onRemove}
                        rowDeletedCheckPath="deleted"
                        customActions={[
                            {
                                heading: 'Download',
                                Render: RenderDownload,
                            },
                        ]}
                    />
                </div>
            </div>
        </div>
    );
};

FileContainer.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string,
    refId: PropTypes.string,
    source: PropTypes.string,
};

FileContainer.defaultProps = {
    title: 'Upload Files',
    className: '',
    refId: null,
    source: null,
};

export default FileContainer;
