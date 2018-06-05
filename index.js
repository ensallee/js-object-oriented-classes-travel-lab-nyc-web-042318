class Driver {
  constructor(name, startDate) {
    this.name = name
    this.startDate = new Date(1995, 0, 1)
  }

  yearsExperienceFromBeginningOf(year) {
    let endDate = new Date(year, 0, 1)
    return endDate.getFullYear() - this.startDate.getFullYear()
  }
}

class Route {
  constructor(beginningLocation, endingLocation) {
    this.beginningLocation = beginningLocation
    this.endingLocation = endingLocation
  }

  blocksTravelled() {
    let eastWest = ['1st Avenue', '2nd Avenue', '3rd Avenue', 'Lexington Avenue', 'Park', 'Madison Avenue', '5th Avenue']
    let startingIndex = eastWest.indexOf(this.beginningLocation["horizontal"])
    let endingIndex = eastWest.indexOf(this.endingLocation["horizontal"])
    let horizontalBlocks = 0
    if (endingIndex > startingIndex) {
      horizontalBlocks = (endingIndex - startingIndex)
    } else {
      horizontalBlocks = (startingIndex - endingIndex)
    }

    let startingVert = parseInt(this.beginningLocation["vertical"])
    let endingVert = parseInt(this.endingLocation["vertical"])
    let verticalBlocks = 0
    if (endingVert > startingVert) {
      verticalBlocks = (endingVert - startingVert)
    } else {
      verticalBlocks = (startingVert - endingVert)
    }

    return horizontalBlocks + verticalBlocks
  }

  estimatedTime(peak) {
    if (peak) {
      return this.blocksTravelled() / 2
    } else {
      return this.blocksTravelled() / 3
    }

  }

}
