import {ParkingLot,Car,GraduateParkingBoy} from './parkinglots'
export function test(){
     var car=new Car()
var parkingLot1=new ParkingLot(3)
var parkingLot2=new ParkingLot(5)
var parkingLot3=new ParkingLot(1)
var parkingLots=[parkingLot1,parkingLot2,parkingLot3]
var graduateParkingBoy=new GraduateParkingBoy(parkingLots)
var ticket=graduateParkingBoy.parkCarByOrder(car)
return ticket
}