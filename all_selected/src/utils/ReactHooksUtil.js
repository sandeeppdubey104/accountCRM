/* eslint-disable no-return-assign */
import { set } from 'lodash-es';
import { useEffect, useRef, useState } from 'react';
// import { useLocation } from 'react-router';

export const usePrevious = (value, callback) => {
    const prevValues = useRef(value);

    useEffect(() => {
        callback(prevValues.current);
        return () => (prevValues.current = value);
    }, [
        value,
        callback,
    ]);
};

const getQueryParams = (search) => {
    const qs = new URLSearchParams(search);
    const output = {};
    for (const param of qs) {
        set(output, param[0], param[1]);
    }
    return output;
};

export function useQuery() {
    const currentSearch = '';//useLocation().search.toString();

    const [
        query,
        setQuery,
    ] = useState(getQueryParams(currentSearch));

    usePrevious(
        { search: currentSearch },
        ({
            search,
        }) => {
            if (currentSearch !== search) {
                setQuery(getQueryParams(currentSearch));
            }
        },
    );

    return query;
}

export default {
    usePrevious,
    useQuery,
};
