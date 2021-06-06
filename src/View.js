const View = {
  render ({minutes, seconds}) {
    const timer = document.getElementById('timer')
    timer.innerHTML = `
    <p>O tempo acaba em</p>
    <span>${minutes}:${seconds}</span>
    `
  }
}

export { View } 