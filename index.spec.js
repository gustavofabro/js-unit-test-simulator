import { Log } from "./log/log.js";
import { SysLog } from "./log/syslog.js";
import { sum } from "./sum/sum.js";
import { getMock, expect } from "./util.js";

// toBe
expect(sum(1, 2)).toBe(3);


// toHaveBeenCalled
const mockLog = getMock();
const log = new Log({
  log: mockLog
});

log.logError('Teste');

expect(mockLog).toHaveBeenCalled(1);