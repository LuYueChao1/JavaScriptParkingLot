function Car (){
}

function Ticket(){

}

function ParkingLot(space){
    this.space=space
    this.ticketCar=new Map();
}

ParkingLot.prototype.pick=function(ticket){
    if(this.ticketCar.has(ticket)){
        return this.ticketCar.get(ticket)
    }else{
        return '车票非法'
    }
}
ParkingLot.prototype.park=function(car){
    if(this.isFull()){
        return '车位已满'
    }
    let ticket=new Ticket()
    this.ticketCar.set(ticket,car)
    return ticket   
}
ParkingLot.prototype.isFull=function(){
    return this.ticketCar.size>=this.space
}
ParkingLot.prototype.availableSpace=function(){
    return this.space-this.ticketCar.size
}
ParkingLot.prototype.vancacyRate=function(){
    return (this.space-this.ticketCar.size)/this.space
}

function ParkingBoy(parkingLots){
    this.parkingLots=parkingLots
}
ParkingBoy.prototype.pickCar=function(ticket){
    for(var i=0;i<this.parkingLots.length;i++){
        if(this.parkingLots[i].ticketCar.has(ticket))
        {
            var car=this.parkingLots[i].pick(ticket)
            return car
        }
        
    }
    return '未根据车票找到车辆，请检查车票是否合法'
}

function GraduateParkingBoy(parkingLots){
    ParkingBoy.call(this)
    this.parkingLots=parkingLots
}
GraduateParkingBoy.prototype=Object.create(ParkingBoy.prototype)
GraduateParkingBoy.prototype.constructor=GraduateParkingBoy
GraduateParkingBoy.prototype.parkCarByOrder=function(car){
    for(var i=0;i<this.parkingLots.length;i++){
        if(!this.parkingLots[i].isFull()){
            var ticket=this.parkingLots[i].park(car)
            return ticket
        }
    }
    return '存车失败，所有停车场车位已满'
}

function SmartParkingBoy(parkingLots){
    this.parkingLots=parkingLots
}

SmartParkingBoy.prototype=Object.create(ParkingBoy.prototype)
SmartParkingBoy.prototype.constructor=SmartParkingBoy
SmartParkingBoy.prototype.parkCarByAvailableSpace=function(car){
    var mostAvailableParkingLot=this.parkingLots[0]
    for(var i=0;i<this.parkingLots.length;i++){
        if(this.parkingLots[i].availableSpace()>mostAvailableParkingLot.availableSpace()){
            mostAvailableParkingLot=this.parkingLots[i]
        }
    }
    if(mostAvailableParkingLot.availableSpace()>0){
        var ticket=mostAvailableParkingLot.park(car)
        return ticket
    }
    return '没有找到空余车位'
}

function SuperParkingBoy(parkingLots){
    this.parkingLots=parkingLots
}

SuperParkingBoy.prototype=Object.create(ParkingBoy.prototype)
SuperParkingBoy.prototype.parkCarByVancacyRate=function(car){
    var mostVancacyRateParkingLot=this.parkingLots[0]
    for(var i=0;i<this.parkingLots.length;i++){
        if(this.parkingLots[i].vancacyRate()>mostVancacyRateParkingLot.vancacyRate()){
            mostVancacyRateParkingLot=this.parkingLots[i]
        }
    }
    if(mostVancacyRateParkingLot.vancacyRate()>0){
        var ticket=mostVancacyRateParkingLot.park(car)
        return ticket
    }
    return '抱歉，车位已满！没有找到空余车位'
}

export { Car, Ticket, ParkingLot, GraduateParkingBoy,SmartParkingBoy,SuperParkingBoy }


