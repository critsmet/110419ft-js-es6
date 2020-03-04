class Adapter{
  constructor(){
    this.loadButton = document.querySelector('button')
    this.spaceShipContainer = document.getElementById('space-ship-container')
    this.spaceShips = []

    this.loadButton.addEventListener('click', this.loadShipsToDom)
  }

  loadShipsToDom = () => {
    this.spaceShips.forEach(ship => ship.renderToDom())
  }
}
