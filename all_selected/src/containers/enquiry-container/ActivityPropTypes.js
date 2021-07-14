import * as Yup from 'yup';
import PropTypes from 'prop-types';

// ACTIVITY PRICING
export const ActivityPricingPropTypes = PropTypes.shape({
    kmFrom: PropTypes.number,
    kmTill: PropTypes.number,
    price: PropTypes.number,
    conveyancePerKm: PropTypes.number,
});

export const ActivityPricingDefaultProps = {
    kmFrom: 0,
    kmTill: 0,
    price: 0,
    conveyancePerKm: 0,
};

export const ActivityPricingYupSchema = Yup.object().shape({
    kmFrom: Yup.number().required(),
    kmTill: Yup.number().required(),
    price: Yup.number().required(),
    conveyancePerKm: Yup.number().required(),
});

// ACTIVITY FIELD
export const ActivityFieldPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    fieldName: PropTypes.string,
    type: PropTypes.string,
    active: PropTypes.bool,
});

export const ActivityFieldDefaultProps = {
    _id: undefined,
    fieldName: '',
    type: '',
    active: true,
};

export const ActivityFieldYupSchema = Yup.object().shape({
    fieldName: Yup.string().required('Required'),
    type: Yup.string().required('Required'),
});

// ACTIVITY
export const ActivityPropTypes = PropTypes.shape({
    _id: PropTypes.string,
    activityName: PropTypes.string,
    active: PropTypes.bool,
    fields: PropTypes.arrayOf(ActivityFieldPropTypes),
    pricing: PropTypes.arrayOf(ActivityPricingPropTypes),
});

export const ActivityDefaultProps = {
    _id: undefined,
    activityName: '',
    active: true,
    fields: [],
    pricing: [],
};

export const ActivityYupSchema = Yup.object().shape({
    activityName: Yup.string().required('Required'),
    fields: Yup.array().of(ActivityFieldYupSchema),
    pricing: Yup.array().of(ActivityPricingYupSchema),
});

export default {
    ActivityDefaultProps,
    ActivityPropTypes,
    ActivityYupSchema,

    ActivityPricingPropTypes,
    ActivityPricingDefaultProps,
    ActivityPricingYupSchema,

    ActivityFieldPropTypes,
    ActivityFieldDefaultProps,
    ActivityFieldYupSchema,
};
