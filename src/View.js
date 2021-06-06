const View = {
  render ({minutes, seconds}) {
    const timer = document.getElementById('timer')
    timer.innerHTML = `
    <span>${minutes}:${seconds}</span>
    `
  }
}

export { View } 