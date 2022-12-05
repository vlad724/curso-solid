interface BirdNotAply{
     fly():void;
     eat():void;
     run():void;
     swim():void;
}

class TucanNotAply implements Bird{
    public fly(){}
    public eat(){}
    public run(){}
    public swim(){}
}


class hummingbirdNotAply implements Bird{
    public fly(){}
    public eat(){}
    public run(){}
    public swim(){}
}

class OstrichNotAply implements Bird{
    public fly(){
        throw Error('No vuela');
    }
    public eat(){}
    public run(){}
    public swim(){}
}

class PinguinNotAply implements Bird{
    public fly(){}
    public eat(){}
    public run(){}
    public swim(){}
}