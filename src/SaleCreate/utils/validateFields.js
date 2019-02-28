/* checks whether a date is an instance of Date object and whether it's not NaN */
/* when strings are passed to new Date it returns NaN but as an instance of Date */
/* a number or a string like '3' passes both tests, which is an incorrect edge case */

export const

dateIsValid = date => new Date(date) instanceof Date && !isNaN(new Date(date)),

optionIsValid = (options, input) => Boolean(options.filter( option => option === input).length),

timeIsValid = time => Boolean(time.match(/^(0[8-9]|1[0-7]):([0-5][0-9])$/g))