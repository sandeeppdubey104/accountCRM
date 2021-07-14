import { fork, call, take } from 'redux-saga/effects';

export function* takeFirstSagaUtil(pattern, saga, ...args) {
    const task = yield fork(function* runner() {
        while (true) {
            const action = yield take(pattern);
            yield call(saga, ...args.concat(action));
        }
    });
    return task;
}
export default {
    takeFirstSagaUtil,
};
