/* eslint-disable import/no-dynamic-require */
const config = require(`./${process.env.REACT_APP_MODE || 'local'}`);
export const isProduction = () => process.env.REACT_APP_MODE === 'production';

const config = 'production';
export default config.default;

//===second comment =========
// const config = require(`./${process.env.REACT_APP_MODE || 'local'}`);
// export const isProduction = () => process.env.REACT_APP_MODE === 'production';
// export default config.default;
// const config = require(`./${process.env.REACT_APP_MODE || 'local'}`);
// export const isProduction = () => process.env.REACT_APP_MODE === 'production';
// export default config.default;
