let store = {drivers: [], trips: [], passengers: []}

let drivers = 0
class Driver {
	constructor(name) {
		this.id = ++drivers
		this.name = name
		store.drivers.push(this)
	}

	trips(){
		return store.trips.filter(trip => {
			return trip.driverId === this.id
		})
	}

	passengers(){
		let myPassengers = []
		this.trips().forEach(trip => {

		 	myPassengers.push(trip.passenger())
		})
		return myPassengers
	}
}

let passengers = 0
class Passenger {
	constructor(name) {
		this.id = ++passengers
		this.name = name
		store.passengers.push(this)
	}

	trips(){
		return store.trips.filter(trip => {
			return trip.passengerId === this.id
		})
	}

	drivers(){
		let myDrivers = []
		this.trips().forEach(trip => {

		 	myDrivers.push(trip.driver())
		})
		return myDrivers
	}
}

let trips = 0
class Trip {
	constructor(driver, passenger){
		this.id = ++trips
		this.driverId = driver.id
		this.passengerId = passenger.id
		store.trips.push(this)
	}

	driver(){
		return store.drivers.find(driver => {
			return driver.id === this.driverId
		})
	}

	passenger(){
		return store.passengers.find(passenger => {
			return passenger.id === this.passengerId
		})
	}

}