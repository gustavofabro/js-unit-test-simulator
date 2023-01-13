class Log {
  #syslog;

  constructor(syslog) {
    this.#syslog = syslog;
  }

  logError(msg) {
    this.#syslog.log(msg);
    // this.#syslog.log(msg);
  }
}

export { Log };