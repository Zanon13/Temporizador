const Emitter = {
  events: {},

  on(event, callback) {
    Emitter.events[event] = Emitter.events[event] || []
    Emitter.events[event].push(callback)
  },

  shout(event, ...rest) {
    if (event in Emitter.events === false) {
      return
    }

    Emitter.events[event].forEach((event) => {
      event(...rest)
    })  
  }
}

export { Emitter }