interface Bird{
    eat():void;
}

interface FlyingBird{
    fly():number; 
}

interface RunningBird{
    run():void;
}

interface SwimmerBird{
    swim():void;
}

class Tucan implements Bird, FlyingBird{
    public fly(){ return 100;}
    public eat(){}
}


class hummingbird implements Bird, FlyingBird{
    public fly(){return 200;}
    public eat(){}
}

class Ostrich implements Bird, RunningBird{   
    public eat(){}
    public run(){}
}

class Pinguin implements Bird, SwimmerBird{
    public eat(){}
    public swim(){}
}


// ahora las clases son mas tolerantes a cambios ya que no hay duplicidad en metodos, a esto se le llama segreggacion de interfaces