abstract class Vehicle {
  protected speed: number = 0
  protected engineStarted: boolean = false

  getEngineStarted(): boolean {
    return this.engineStarted
  }

  getSpeed(): number {
    return this.speed
  }

  setSpeed(speed: number): void {
    this.speed = speed
  }

  start() {
    this.engineStarted = true
  }

  stop() {
    this.engineStarted = false
  }

  accelerate(targetSpeed: number) {
    if (this.engineStarted) {
      this.speed = targetSpeed
    } else {
      throw new Error('Engine is not started yet')
    }
  }
}

export default Vehicle
