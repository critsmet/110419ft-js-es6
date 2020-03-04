class Ship{
  constructor(name, power, captain){
    this.name = name
    this.power = power
    this.captain = captain

    this.element = document.createElement('div')
    this.element.className = "spaceship"

    adapter.spaceShips.push(this)
  }

  renderToDom(){
    this.element.innerHTML = `
      <p>Name: ${this.name}</p>
      <p>Power: ${this.power}</p>
      <p>Captain: ${this.captain}</p>
    `
    adapter.spaceShipContainer.appendChild(this.element)
  }


}
