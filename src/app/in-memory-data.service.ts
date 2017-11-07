import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const professionals = [
      {
        id: 0,
        name: 'Zero Nonexistismus',
        picture: 'https://api.adorable.io/avatars/100/zerononexistismus.png',
        sex: 'Female',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 420,
        location: 'Random address 0'
      },
      {
        id: 1,
        name: 'Penny Professional',
        picture: 'https://api.adorable.io/avatars/100/pennyprofessional.png',
        sex: 'Female',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 50,
        location: 'Random address 1'
      },
      {
        id: 2,
        name: 'John Johnners',
        picture: 'https://api.adorable.io/avatars/100/johnjonners.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 26,
        location: 'Random address 2'
      },
      {
        id: 3,
        name: 'Test Testersson',
        picture: 'https://api.adorable.io/avatars/100/testtestersson.png',
        sex: 'Female',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 70,
        location: 'Random Address 3'
      },
      {
        id: 4,
        name: 'Mike Matchers',
        picture: 'https://api.adorable.io/avatars/100/mikematchers.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 79,
        location: 'Random Address 5'
      },
      {
        id: 5,
        name: 'Jenny Jumbler',
        picture: 'https://api.adorable.io/avatars/100/jennyjumbler.png',
        sex: 'Female',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 127,
        location: 'Andom Raddress 6'
      },
      {
        id: 6,
        name: 'Nancy Nanners',
        picture: 'https://api.adorable.io/avatars/100/nancynanners.png',
        sex: 'Female',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 57,
        location: 'Random Address 4'
      },
      {
        id: 7,
        name: 'Gary Goneadder',
        picture: 'https://api.adorable.io/avatars/100/garygoneadder.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 87,
        location: 'Hotmail Hollow 66'
      },
      {
        id: 8,
        name: 'Friedrich Fredlander',
        picture: 'https://api.adorable.io/avatars/100/friedrichfredlander.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 88,
        location: 'Zootropolia Highway 43'
      },
      {
        id: 9,
        name: 'Wally Walter',
        picture: 'https://api.adorable.io/avatars/100/wallywalters.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 34,
        location: 'Michevy Street 7'
      },
      {
        id: 10,
        name: 'Hanner Hannigan',
        picture: 'https://api.adorable.io/avatars/100/hannerhannigan.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 99,
        location: 'Tomash Shcmidt Way 5'
      },
      {
        id: 11,
        name: 'Flannel Flannigan',
        picture: 'https://api.adorable.io/avatars/100/flannelflannigan.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 87,
        location: 'Testway Verticule, Esq.'
      },
      {
        id: 12,
        name: 'Idrott Idrottspärsön',
        picture: 'https://api.adorable.io/avatars/100/idrottidrottsparson.png',
        sex: 'Female',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 67,
        location: 'Sportsway Swayhey 45'
      },
      {
        id: 13,
        name: 'Lasty McNotleasty',
        picture: 'https://api.adorable.io/avatars/100/.png',
        sex: 'Male',
        languages: 'English, Finnish',
        experience: 'First experience, Second experience',
        price: 784,
        location: 'Ultima Way 0'
      }
    ];
    const top5 = [
      professionals[Math.floor((Math.random() * 14))],
      professionals[Math.floor((Math.random() * 14))],
      professionals[Math.floor((Math.random() * 14))],
      professionals[Math.floor((Math.random() * 14))],
      professionals[Math.floor((Math.random() * 14))]
    ];

    function shuffleAround() {

      //generate the order


    }

    return {professionals, top5};
  }

}
