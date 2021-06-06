import { Notifier } from './Notifier.js'
import { Timer } from './Timer.js'

const App = {
  async start() {
    try {
      Timer.init()
      // await Notifier.init()
      // Notifier.notify({
      //   title: 'O seu tempo acabou!',
      //   body: 'O tempo do temporizador acabou'
      // })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export { App }