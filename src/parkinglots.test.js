import {ParkingLot,Car,Ticket,GraduateParkingBoy,SmartParkingBoy,SuperParkingBoy} from './parkinglots'
var car1=new Car()
//car2=new Car()
var ticket1=new Ticket()
//ticket2=new Ticket()
var parkingLot=new ParkingLot()

test('given a car when parkCar should return a ticket',()=>{
     ticket1=parkingLot.park(car1)
     expect((ticket1!==null)).toBe(true)
})

test('given a Ticket when pickCar should return a car',()=>{
     car1=parkingLot.pick(ticket1)
     expect((car1!==null)).toBe(true)
})

test('given a car when parkCar get a ticket then pickCar by the ticket get the car',()=>{
     ticket1 =parkingLot.park(car1)
     var ticket=new Ticket()
     var car=parkingLot.pick(ticket1)
     expect(car).toBe(car1)
})

test('given a ticket that is not producted by parkCar when pickCar get "车票非法"',()=>{
     var ticket2=new Ticket()
     var ticket1=parkingLot.park(car1)
     var car=parkingLot.pick(ticket2)
     expect(car).toBe('车票非法')
})

test('given a car when parkCar and parkingLot is full get "车位已满"',()=>{
     parkingLot=new ParkingLot(0)
     var ticket=parkingLot.park(car1)
     expect(ticket).toBe('车位已满')
}) 

test('given a parkingLot that has 10 spaces when park a car the parkingLotvancacyRate is 0.1',()=>{
     parkingLot=new ParkingLot(10)
     var ticket=parkingLot.park(car1)
     expect (parkingLot.vancacyRate()).toBe(0.9)

})

test('given a parkingLot that has 10 spaces when park a car the parkingLot availableSpace is 9',()=>{
     parkingLot=new ParkingLot(10)
     var ticket=parkingLot.park(car1)
     expect (parkingLot.availableSpace()).toBe(9)

})

test('given a car GraduateParkingBoy can park car by order',()=>{
     var car=new Car()
     var parkingLot1=new ParkingLot(3)
     var parkingLot2=new ParkingLot(5)
     var parkingLot3=new ParkingLot(1)
     var parkingLots=[parkingLot1,parkingLot2,parkingLot3]
     var graduateParkingBoy=new GraduateParkingBoy(parkingLots)
     var ticket=graduateParkingBoy.parkCarByOrder(car)
     //expect(parkingLot2.availableSpace()).toBe(4)
     expect(parkingLot1.availableSpace()).toBe(2)
     //expect(graduateParkingBoy.pickCar(ticket)).toBe(car)
})

test('given a car GraduateParkingBoy  park car by order then pickcar get the car',()=>{
     var car=new Car()
     var parkingLot1=new ParkingLot(3)
     var parkingLot2=new ParkingLot(5)
     var parkingLot3=new ParkingLot(1)
     var parkingLots=[parkingLot1,parkingLot2,parkingLot3]
     var graduateParkingBoy=new GraduateParkingBoy(parkingLots)
     var ticket=graduateParkingBoy.parkCarByOrder(car)
     //expect(parkingLot2.availableSpace()).toBe(4)
     //expect(parkingLot1.availableSpace()).toBe(2)
     expect(graduateParkingBoy.pickCar(ticket)).toBe(car)
})

test('given a car GraduateParkingBoy and all his parkingLots is full then parkcar get "存车失败，所有停车场车位已满"',()=>{
     var car=new Car()
     var car1=new Car()
     var car2=new Car()
     var car3=new Car()
     var car4=new Car()
     var parkingLot1=new ParkingLot(1)
     var parkingLot2=new ParkingLot(2)
     var parkingLot3=new ParkingLot(1)
     var parkingLots=[parkingLot1,parkingLot2,parkingLot3]
     var graduateParkingBoy=new GraduateParkingBoy(parkingLots)
     var ticket1=graduateParkingBoy.parkCarByOrder(car1)
     var ticket2=graduateParkingBoy.parkCarByOrder(car2)
     var ticket3=graduateParkingBoy.parkCarByOrder(car3)
     var ticket4=graduateParkingBoy.parkCarByOrder(car4)
     //expect(parkingLot2.availableSpace()).toBe(4)
     //expect(parkingLot1.availableSpace()).toBe(2)
     expect(graduateParkingBoy.parkCarByOrder(car)).toBe('存车失败，所有停车场车位已满')
})

test('given a SmartParkingBoy park car by availableSpace then pickCar get the car',()=>{
     var car=new Car()
     var parkingLot1=new ParkingLot(3)
     var parkingLot2=new ParkingLot(5)
     var parkingLot3=new ParkingLot(1)
     var parkingLots=[parkingLot1,parkingLot2,parkingLot3]
     var smartParkingBoy=new SmartParkingBoy(parkingLots)
     var ticket=smartParkingBoy.parkCarByAvailableSpace(car)
     expect(parkingLot2.availableSpace()).toBe(4)
     expect(parkingLot1.availableSpace()).toBe(3)
     expect(smartParkingBoy.pickCar(ticket)).toBe(car)
})
test('given a SuperParkingBoy park car by vancacyRate then pickCar get the car',()=>{
     var car=new Car()
     var car1=new Car()
     var car2=new Car()
     var car3=new Car()
     var car4=new Car()
     var parkingLot1=new ParkingLot(3)
     var parkingLot2=new ParkingLot(5)
     var parkingLot3=new ParkingLot(1)
     var ticket1=parkingLot1.park(car1)
     var ticket2=parkingLot2.park(car2)
     var ticket3=parkingLot2.park(car3)
     var ticket4=parkingLot3.park(car4)
     expect(parkingLot1.availableSpace()).toBe(2)
     var parkingLots=[parkingLot1,parkingLot2,parkingLot3]
     var superParkingBoy=new SuperParkingBoy(parkingLots)
     var ticket=superParkingBoy.parkCarByVancacyRate(car)
     expect(parkingLot1.availableSpace()).toBe(1)
     expect(superParkingBoy.pickCar(ticket)).toBe(car)

})
