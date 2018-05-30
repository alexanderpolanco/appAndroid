export function getNewState(state, newState) {
  return Object.assign({}, state, newState);
}

export function isArray(variable) {
  return variable instanceof Array;
}

export function isDefined(variable) {
  return typeof variable !== 'undefined' && variable !== null;
}

export function isFunction(variable) {
  return typeof variable === 'function';
}

export function isObject(variable) {
  return isDefined(variable) && typeof variable === 'object';
}

export function isNumber(variable) {
  return isNaN(variable);
}

export function isEmail(variable) {
  let validate = true;
  if( !(/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)/.test(variable)) ) {
    validate = false;
  }
  return validate;
}

export function required(variable) {
  let validate = true;
  if( variable == null || variable.length == 0 || /^\s+$/.test(variable)) {
    validate = false;
  }
  return validate;
}

export function isUser(variable) {
  let validate = true;
  if( /[^A-Za-z]/.test(variable)) {
    validate = false;
  }
  return validate;
}
