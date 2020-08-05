import React from 'react';
import './App.css';
import ActorModel from './DataModules/ActorModel';
import ActorGallery from './components/ActorGallery';
import ActorComp from './components/ActorComp';
// import ActorComp from './components/ActorComp';



function App() {
  // console.log(ActorModel) 

  const actor1 = new ActorModel("Shira", "Haas", " May 11, 1995",  "https://www.imdb.com/name/nm6024635/", "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_UY317_CR9,0,214,317_AL_.jpg");
  const actor2 = new ActorModel("Nelly", "Tagar", "November 30, 1982", "https://www.imdb.com/name/nm0846474/", "https://m.media-amazon.com/images/M/MV5BMTQwMzY4OTgwNl5BMl5BanBnXkFtZTgwNjkwOTc0MTE@._V1_UY317_CR175,0,214,317_AL_.jpg");
  const actor3 = new ActorModel("Ania", "Bukstein", " June 7, 1982","https://www.imdb.com/name/nm0119804/", "https://m.media-amazon.com/images/M/MV5BMzg1ZGFhYTctNTZiYi00MGIwLWFlZmMtNDBhN2ExMTVjOGFhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY317_CR22,0,214,317_AL_.jpg");
  const actor4 = new ActorModel("Ayelet", "Zurer", " June 28, 1969", "https://www.imdb.com/name/nm0957909/", "https://m.media-amazon.com/images/M/MV5BNTM3MzE3ODc5NF5BMl5BanBnXkFtZTcwMTg0MjY2OQ@@._V1_UX214_CR0,0,214,317_AL_.jpg");
 let actorsData=[actor1, actor2, actor3, actor4]; 
    console.log(actorsData);


  // const actorsData = [];
  // this.actorsData.push.(new ActorModel("Shira", "Haas", " May 11, 1995", "https://www.imdb.com/name/nm6024635/", "https://m.media-amazon.com/images/M/MV5BN2RjMGNlNDgtMmM5Mi00NTEwLTk1MWItMDZkMGExMmM2ZmQ1XkEyXkFqcGdeQXVyNTQ4MzY4NjA@._V1_SY1000_CR0,0,735,1000_AL_.jpg"));
  // this.actorsData.push.(new ActorModel("Nelly", "Tagar", "November 30, 1982", "https://www.imdb.com/name/nm0846474/", "https://m.media-amazon.com/images/M/MV5BMTQwMzY4OTgwNl5BMl5BanBnXkFtZTgwNjkwOTc0MTE@._V1_SX1777_CR0,0,1777,999_AL_.jpg"));
  // this.actorsData.push.(new ActorModel("Ania", "Bukstein", " June 7, 1982", "https://www.imdb.com/name/nm0119804/", "https://m.media-amazon.com/images/M/MV5BMzg1ZGFhYTctNTZiYi00MGIwLWFlZmMtNDBhN2ExMTVjOGFhXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_UY317_CR22,0,214,317_AL_.jpg"));
  // this.actorsData.push.(new ActorModel("Ayelet", "Zurer", " June 28, 1969", "https://www.imdb.com/name/nm0957909/", "https://m.media-amazon.com/images/M/MV5BNTM3MzE3ODc5NF5BMl5BanBnXkFtZTcwMTg0MjY2OQ@@._V1_UX214_CR0,0,214,317_AL_.jpg"));

  // console.log(actorsData)
 // ageOfActor() {
  //   //Change ME
  // var DOB = this.props.actorsData.birthday;
  // var millisecondsBetweenDOBAnd1970 = Date.parse(DOB);
  // var millisecondsBetweenNowAnd1970 = Date.now();
  // var ageInMilliseconds = millisecondsBetweenNowAnd1970 - millisecondsBetweenDOBAnd1970;

  // var milliseconds = ageInMilliseconds;
  // var second = 1000;
  // var minute = second * 60;
  // var hour = minute * 60;
  // var day = hour * 24;
  // var month = day * 30;
  // var year = day * 365;

  // //let the age conversion begin
  // var years = Math.round(milliseconds / year);
  // console.log(years);

  //   console.log(ageOfActor);
  // }
  // ageOfActor()
  // console.log(ageOfActor);

  return (
    <div className="App">
      <ActorGallery actorsData={actorsData} />
    </div>
  );
}

export default App;

