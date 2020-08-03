// import React from 'react';
// import './App.css';

class ActorModule {
    constructor(fname, lname, birthday, IMDBlink) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.IMDBlink = IMDBlink;
        this.img = img;

    }


    kmPerYear() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year + 1;
        return this.km / age;
    }
   
}

export default ActorModule;
