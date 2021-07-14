/* eslint-disable react/forbid-prop-types */
import PropTypes from 'prop-types';
import React from 'react';
import SelectSearch from 'react-select-search';
import {
    get, isEqual, set, throttle,
} from 'lodash-es';
import './FormikSearchDropdown.scss';
import { Field, ErrorMessage } from 'formik';

class Render extends React.PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            options: [],
        };

        this.throttledGetOptions = throttle(this.getOptions, 1000);
    }

    componentDidMount() {
        this.getDefaultOption();
    }

    componentDidUpdate(prevProps) {
        const {
            value,
            form,
            field,
            whereConditions,
        } = this.props;

        if (prevProps.value !== value) {
            this.getDefaultOption();
        }
        // e.g. state change then city where condition changed.. so it should reset
        else if (!isEqual(prevProps.whereConditions, whereConditions)) {
            form.setFieldValue(field.name, '');
            // eslint-disable-next-line react/no-did-update-set-state
            this.setState({
                options: [],
            });
        }
    }

    getOptionsByWhereClause = async ({
        where,
    }) => {
        const {
            displayKeyPath,
            valueKeyPath,
            apiCallAddonData,
            api,
        } = this.props;

        try {
            // fetch only data that is needed
            const select = displayKeyPath.reduce((total, current) => {
                // eslint-disable-next-line no-param-reassign
                total[current] = 1;
                return total;
            }, {});

            // get options from server
            const {
                data: {
                    data: {
                        data,
                    },
                },
            } = await api({
                where,
                select,
                ...apiCallAddonData,
                autopopulate: true,
            });

            // default option
            const optionsData = data.map((item) => {
                const displayName = displayKeyPath.map((path) => get(item, path)).filter((x) => !!x).join(', ');
                return {
                    name: displayName,
                    value: get(item, valueKeyPath),
                };
            });

            // update option in state
            this.setState({
                options: optionsData,
            });
        }
        catch (error) {
            console.error('LOG: getOptions -> error', error);
        }
    }

    getDefaultOption = async () => {
        const {
            defaultValueFetchByKeyPath,
            value,
        } = this.props;

        const {
            options,
        } = this.state;

        if (!value || !defaultValueFetchByKeyPath) {
            return;
        }

        const optionHasOptionForSelectedValue = !!options.find((option) => !!get(option, defaultValueFetchByKeyPath, false));

        if (!optionHasOptionForSelectedValue) {
            try {
                await this.getOptionsByWhereClause({
                    where: {
                        [defaultValueFetchByKeyPath]: value,
                    },
                });
            }
            catch (error) {
                console.error('LOG: getOptions -> error', error);
            }
        }
    };

    getOptions = async (query) => {
        const {
            whereClauseKeysPaths,
            whereConditions,
        } = this.props;

        // build where clause
        const whereWithOrCondition = {
            $or: [],
            ...whereConditions,
        };

        whereClauseKeysPaths.forEach((keyPath) => {
            const condition = {};
            set(condition, keyPath, {
                $regex: `^${query}`,
                $options: 'i',
            });
            whereWithOrCondition.$or.push(condition);
        });

        try {
            await this.getOptionsByWhereClause({
                where: whereWithOrCondition,
            });
        }
        catch (error) {
            console.error('LOG: getOptions -> error', error);
        }
    };

    render() {
        const {
            value,
            placeholder,
            disabled,
            onChange,

            field,
            form,
        } = this.props;

        const {
            options,
        } = this.state;

        return (
            <>
                <SelectSearch
                    disabled={disabled}
                    options={options}
                    getOptions={this.throttledGetOptions}
                    onChange={(selectedValue) => {
                        // const recoard = this.state.options.find(x => x._id == selectedValue)
                        onChange(selectedValue);
                        form.setFieldValue(field.name, selectedValue);
                    }}
                    value={value || ''}
                    placeholder={placeholder}
                    search
                    autoComplete="disabled"
                />
                <ErrorMessage
                    component="div"
                    className="text-danger"
                    name={field.name}
                />
            </>
        );
    }
}

Render.propTypes = {
    api: PropTypes.func.isRequired,
    apiCallAddonData: PropTypes.any,
    defaultValueFetchByKeyPath: PropTypes.string,
    disabled: PropTypes.bool,
    displayKeyPath: PropTypes.array.isRequired,
    field: PropTypes.shape({
        name: PropTypes.string,
    }).isRequired,
    form: PropTypes.shape({
        setFieldValue: PropTypes.func,
    }).isRequired,
    placeholder: PropTypes.string,
    value: PropTypes.any,
    valueKeyPath: PropTypes.string.isRequired,
    whereClauseKeysPaths: PropTypes.array,
    whereConditions: PropTypes.any,
    onChange: PropTypes.func,
};

Render.defaultProps = {
    apiCallAddonData: {},
    defaultValueFetchByKeyPath: '',
    disabled: false,
    placeholder: '',
    whereClauseKeysPaths: [],
    whereConditions: {},
    onChange: () => { },
    value: '',
};

const FormikSearchDropdown = (props) => (
    <Field
        {...props}
        component={Render}
    />
);

export default FormikSearchDropdown;
