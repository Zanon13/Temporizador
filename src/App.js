import { Notifier } from './Notifier.js'
import { Timer } from './Timer.js'
import { Emitter } from './Emitter.js'

const notify = Notifier.notify({
  title: 'O seu tempo acabou!',
  body: 'O tempo do temporizador acabou'
})

const App = {
  async start() {
    try {
      await Notifier.init()

      Emitter.on('countdown-start', notify)
      Emitter.on('countdown-end', Timer.init)

      Timer.init()      
    } catch (error) {
      console.log(error.message)
    }
  }
}

export { App }