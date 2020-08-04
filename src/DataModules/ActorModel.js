
// import moment from 'moment'

class ActorModel {
    constructor(fname, lname, birthday, IMDBlink,img) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.IMDBlink = IMDBlink;
        this.img = img;
    }
   
    // ageOfActor() {
    //    return  moment("19820716", "YYYYMMDD").fromNow(); 

    //      console.log(ageOfActor);
    // }
   


}


export default ActorModel;
