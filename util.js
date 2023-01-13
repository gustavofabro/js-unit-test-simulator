
const callsMap = {};

function getMock() {
  const mock = () => {};
  const id = Date.now();

  const proxy = new Proxy(mock, {
    apply: (target, thisArg, argList) => {
      callsMap[id] = callsMap[id] ? ++callsMap[id] : 1;
      target(...argList);
    },
    get: (target, property) => {
      //Trocar por symbol
      return property === 'id' ? id : target[property];
    }
  });

  return proxy;
}

function expect(value) {
  return {
    toBe: (expectedValue) => {
      if (!Object.is(expectedValue, value)) {
        throw new Error(`
          Expected value: ${expectedValue}
          Received: ${value}
        `)
      } else {
        console.log('Test has passed')
      } 
    },
    toHaveBeenCalled: (timesExpected = 1) => {
      const calledTimes = callsMap[value.id] || 0;

      if (calledTimes !== timesExpected)  {
        throw new Error(`
          Expected called ${timesExpected} time, but it was ${calledTimes}
        `)
      }  else {
        console.log('Test has passed')
      } 
    }
  }
}

export { expect, getMock };