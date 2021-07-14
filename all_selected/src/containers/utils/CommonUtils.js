import { clamp, get } from 'lodash-es';

export const isObject = (target) => Object.prototype.toString.call(target) === '[object Object]';

export const groupBy = function (xs, key) {
    return xs.reduce((rv, x) => {
        // eslint-disable-next-line no-param-reassign
        (rv[x[key]] = rv[x[key]] || []).push(x);
        return rv;
    }, {});
};

export const calculateBilling = (
    itemsInCart = [],
    discount = 0,
    deliveryCharges = 0,
    deliveryChargesWaveOff = 0,
) => {
    let total = 0;

    for (const key in itemsInCart) {
        if (Object.prototype.hasOwnProperty.call(itemsInCart, key)) {
            const item = itemsInCart[key];
            if (item.id) {
                const perItemPrice = item.final_selling_price * item.count;
                total += perItemPrice;
            }
        }
    }

    const totalAfterDiscount = total - discount;

    const totalAfterDeliveryAdjustment = (totalAfterDiscount + deliveryCharges) - deliveryChargesWaveOff;

    return {
        total,
        discount,
        totalAfterDiscount,
        totalAfterDeliveryAdjustment,
    };
};

export const valueAsPercentageOf = (value = 0, percentageOf = 0) => {
    const result = (clamp(value, 0, Infinity) / clamp(percentageOf, 0, Infinity)) * 100;
    if (Number.isNaN(result)) {
        return 0;
    }
    return result;
};
export const percentageToValue = (percentage = 0, valueOf = 0) => {
    const result = (clamp(valueOf, 0, Infinity) * clamp(percentage, 0, Infinity)) / 100;
    if (Number.isNaN(result)) {
        return 0;
    }
    return result;
};

export const clickedOutside = (evt, target) => {
    let targetElement = evt.target; // clicked element

    do {
        if (targetElement === target) {
            return true;
        }
        // Go up the DOM
        targetElement = targetElement.parentNode;
    } while (targetElement);

    return false;
};

export const getLocation = (success, error) => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, error, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0,
        });
        return true;
    }

    return false;
};

// eslint-disable-next-line no-bitwise
export const getRandomLightColor = () => `hsla(${~~(360 * Math.random())},`
    + '70%,'
    + '80%,1)';

export function countDecimalDigits(number) {
    const char_array = number.toString().split(''); // split every single char
    const not_decimal = char_array.lastIndexOf('.');
    return (not_decimal < 0) ? 0 : char_array.length - not_decimal;
}

export const allPossiblePathOfObject = function (tree) {
    const leaves = [];
    const walk = function (obj, path) {
        // eslint-disable-next-line no-param-reassign
        path = path || '';
        for (const n in obj) {
            if (obj.hasOwnProperty(n)) {
                if (typeof obj[n] === 'object' || obj[n] instanceof Array) {
                    walk(obj[n], `${path ? `${path}.` : ''}${n}`);
                }
                else {
                    leaves.push(`${path ? `${path}.` : ''}${n}`);
                }
            }
        }
    };
    walk(tree, '');
    return leaves;
};

export const buildSearchWithNoCase = ({ where, fullTextSearch }) => {
    const paths = allPossiblePathOfObject(where);
    const dotNotationWhere = {};
    paths.forEach((path) => {
        const value = get(where, path);
        if (value !== undefined && value !== null) {
            if (!fullTextSearch) {
                dotNotationWhere[path] = value;
            }
            else if (value === false || value === true || typeof value === 'number' || typeof value === 'object' || Array.isArray(value)) {
                dotNotationWhere[path] = value;
            }
            // this is bad but no way to find if it is object id type... so checking last 2 cart are i and d
            else if (path[path.length - 1] === 'd' && (path[path.length - 2] === 'i' || path[path.length - 2] === 'I') && value.toString().length === 24) {
                dotNotationWhere[path] = value;
            }
            else {
                dotNotationWhere[path] = {
                    $regex: `^${value}`,
                    $options: 'i',
                };
            }
        }
    });

    return dotNotationWhere;
};

export const setEmptyStringToNull = function (tree) {
    const walk = function (target) {
        for (const key in target) {
            if (Object.prototype.hasOwnProperty.call(target, key)) {
                if (typeof target[key] === 'object' || target[key] instanceof Array) {
                    walk(target[key]);
                }
                else if (typeof target[key] === 'string' && target[key] === '') {
                    // eslint-disable-next-line no-param-reassign
                    target[key] = null;
                }
            }
        }
    };
    walk(tree);
    return tree;
};

export default {
    isObject,
    groupBy,
    calculateBilling,
    valueAsPercentageOf,
    percentageToValue,
    clickedOutside,
    getLocation,
    getRandomLightColor,
    countDecimalDigits,
    allPossiblePathOfObject,
    buildSearchWithNoCase,
    setEmptyStringToNull,
};
