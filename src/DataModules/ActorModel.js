
class ActorModel {
    constructor(fname, lname, birthday, IMDBlink, img) {
        this.fname = fname;
        this.lname = lname;
        this.birthday = birthday;
        this.IMDBlink = IMDBlink;
        this.img = img;
    }

    ageOfActor() {
        var DOB = this.birthday;
        var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
        var millisecondsBetweenNowAnd1970 = Date.now();
        var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

        var milliseconds = ageInMilliseconds;
        var second = 1000;
        var minute = second * 60;
        var hour = minute * 60;
        var day = hour * 24;
        var month = day * 30;
        var year = day * 365;

        //let the age conversion begin
        var years = Math.round(milliseconds / year);
        console.log(years);
        return years;

    }

}


export default ActorModel;
