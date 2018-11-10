/* checks whether a date is an instance of Date object and whether it's not NaN */
/* when empty strings are passed to new Date it returns NaN but as an instance of Date */
/* a number or a string like '3' passes both tests, which is an incorrect edge case */

const dateIsValid = date => new Date(date) instanceof Date && !isNaN(new Date(date))

export default dateIsValid