/* eslint-disable react/jsx-props-no-spreading */
import React, { useCallback, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Formik, Form } from 'formik';
import FormikInput from '../../../src/components/formik/FormikInput';
import { DATE_TIME_FORMAT } from '../../../src/constants/CommonConstants';
import { RemarkDefaultProps, RemarkPropTypes, RemarkYupSchema } from './RemarkPropTypes';
import { remarkInsertAction, remarkRemoveAction, remarkSearchAction } from './actions/RemarkActions';
import SearchContainer from '../search-container/SearchContainer';

const columns = {
    text: {
        display: 'text',
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

const Render = () => (
    <Form>
        <FormikInput
            name="text"
            type="text"
            className="form-control mt-3"
            placeholder="Write Something... and Hit Enter↵"
        />
    </Form>
);

const RemarkComponent = ({
    title,
    refId,
    source,
}) => {
    // REDUX
    const dispatch = useDispatch();

    const onSubmit = useCallback((
        { text },
        { resetForm },
    ) => {
        dispatch(remarkInsertAction({
            refId,
            text,
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
        dispatch(remarkRemoveAction({
            remarkId: _id,
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
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    <i className="fas fa-comment text-info" />
                    {' '}
                    {title}
                </h5>

                <SearchContainer
                    reducer="RemarkReducer"
                    dataPath={dataPath}
                    action={remarkSearchAction}
                    columns={columns}
                    queryParamsAsWhere={false}
                    where={where}
                    hasRemove
                    removeAction={onRemove}
                    rowDeletedCheckPath="deleted"
                    fullTextSearch={false}
                />

                <Formik
                    onSubmit={onSubmit}
                    enableReinitialize
                    initialValues={{
                        text: '',
                    }}
                    validationSchema={RemarkYupSchema}
                >
                    {(formikProps) => (
                        <Render
                            {...formikProps}
                        />
                    )}
                </Formik>
            </div>
        </div>
    );
};

RemarkComponent.propTypes = RemarkPropTypes;
RemarkComponent.defaultProps = RemarkDefaultProps;

export default RemarkComponent;
