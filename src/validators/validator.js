export const required = value => (value ? undefined : 'Field is required');

export const nonEmpty = value => {
  return value.trim() !== '' ? undefined : 'Field must not be empty'
};

export const lengthCheck = value => (value.length === 5 ? undefined : 'Tracking number must be exactly 5 characters long');

export const isNumber = value => (!isNaN(Number(value)) ? undefined : 'Value must be a number');
