import types from '../const';

export const getShortStatistic = () => ({
    type: types.GET_SHORT_STATISTIC
});

export const getShortStatisticSuccess = (payload) => ({
    type: types.GET_SHORT_STATISTIC_SUCCESS,
    payload
})
