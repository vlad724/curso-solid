(()=>{

    type Gender='M'|'F';

    //forma antigua
    // class Person {
    //     public name: string;
    //     public gender: Gender;
    //     public birthdate: Date;

       
    //     constructor(name: string, gender: Gender, birthdate: Date) {
    //         this.name=name;
    //         this.gender=gender;
    //         this.birthdate=birthdate;
            
    //     }

    // }

    //nueva forma - no aplicando el principio de responsabilidad unica
    class Person {
    
        constructor(
            public name: string,
            public gender: Gender,
            public birthdate: Date) {
            
        }

    }

    class User extends Person{
        /**
         *
         */

        public lastAccess: Date;

        constructor(
            public email: string,
            public role: string,
            name:string,
            gender: Gender,
            birthdate: Date
        ) {
            //El super me permite a mí mandar a llamar el constructor del padre y en este caso está esperando en main
            super(name, gender, birthdate);   

            this.lastAccess=new Date();
        }

        checkCredentials(){
            return true;
        }
    }

      class UserSettings extends User{

        /**
         *
         */
        constructor(
            public workingDirectory: string,
            public lastOpenFolder: string,
            email:string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super(email, role, name, gender, birthdate);
            
        }
      }


      const userSettings= new UserSettings(
        '/usr/home',
        '/home',
        'fernando@gmail.com',
        'Admin',
        'Fernando',
        'M',
        new Date('1985-10-21')
      );

      console.log({userSettings});


})();