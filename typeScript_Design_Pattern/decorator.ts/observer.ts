interface Subject {
    registerObserver(ob: any)
    removeObserver(ob: Observer)
    notifyObservers();
}

interface Observer {
    update(temprature: number);
}


class WheatherStation implements Subject {
    private temprature: number
    private observer: Observer[] = []
    setTemprature(temp: number) {
        console.log('Setting temprature...:new temprature mesurement' + temp);
        this.temprature = temp;
        this.notifyObservers()
    }
    registerObserver(ob: Observer): any {
        this.observer.push(ob)
    }
    removeObserver(ob: Observer): any {
        let index = this.observer.indexOf(ob)
        this.observer.splice(index, 1)
    }
    notifyObservers() {
        for (let observer of this.observer) {
            observer.update(this.temprature)
        }
    }
}
class TempratureDisplay implements Observer{
private subject:Subject
constructor(wheatherStation:Subject){
    this.subject=wheatherStation
    wheatherStation.registerObserver(this);
}

    update(temprature: number) {
        console.log('tempDisplay')

    }

}
class Fan implements Observer{
private subject:Subject
constructor(wheatherStation:Subject){
    this.subject=wheatherStation
    wheatherStation.registerObserver(this);
}

   public update(temprature: number) {
       if(temprature>25){
        console.log('Fan:its hot here,turn on the fan!');
        //here some real logics
       }else{
        console.log('Fan:its cool')
        //here some real logics
       }

    }

}
let wheatherStation=new WheatherStation();
let tempDisplay=new TempratureDisplay(wheatherStation)
let fan =new Fan(wheatherStation)
wheatherStation.setTemprature(20)
wheatherStation.setTemprature(30)