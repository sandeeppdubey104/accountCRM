/* eslint-disable prefer-promise-reject-errors */
import config from '../../src/config';
import { postRequest, setDefaultHeaders } from '../../src/utils/RequestUtil';

setDefaultHeaders({
    Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHBpcmVzSW4iOiIzMCBkYXlzIiwiZGF0YSI6eyJ1c2VyVHlwZSI6IlNVUEVSX0FETUlOIiwidXNlcklkIjoiNjAxMDAwNGQ4YzY1NDYwMzE4ZmFiYjBlIiwicGVyc29uYWxJbmZvIjp7ImZpcnN0TmFtZSI6IlBSQU5BViIsImxhc3ROYW1lIjoiQkFOU0FMIiwiZmF0aGVyRmlyc3ROYW1lIjoiQUpBWSIsImZhdGhlckxhc3ROYW1lIjoiQkFOU0FMIiwiZW1haWwiOiJJTkZPQE1DTy5ORVQuSU4iLCJwaG9uZSI6Ijk5OTc3NzI3NzkiLCJkb2IiOiIyMDIxLTA0LTIxVDE3OjE4OjA2Ljc4MVoifSwicHJvZmlsZVBpY1VybCI6Imh0dHBzOi8vaW5mb21pbmVyLWFzc2V0cy1kZXYuczMuYW1hem9uYXdzLmNvbS9kN2Y3NGY0NC1kZGZlLTQ5ZDktOTJhYS04MGM0YzM1MjUxODMucG5nIn0sImlhdCI6MTYyMzMzOTUxOX0.pw49c-5NaIDuZEQyObKZhlOJ0InbHQhcuBot4J5LXkU',
});

export const stateSearchAPI = function (data) {
    const url = `${config.baseUrl}state/search`;
    return postRequest({
        url,
        data,
    });
};

export default {
    stateSearchAPI,
};
