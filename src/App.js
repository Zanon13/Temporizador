import { Notifier } from './Notifier.js'

const App = {
  async start() {
    try {
      await Notifier.init()
      Notifier.notify({
        title: 'O seu tempo acabou!',
        body: 'O tempo do temporizador acabou'
      })
    } catch (error) {
      console.log(error.message)
    }
  }
}

export { App }