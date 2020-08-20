import { Injectable } from '@angular/core';
import { UserProfile } from './interfaces/user-profile';

@Injectable({
  providedIn: 'root',
})
export class ProfileService {
  userProfile: UserProfile = {
    name: 'Toby',
    contact: 'Toby@email.com',
    bio: 'Grandcircus bootcamp student',
  };

  constructor() {}

  getUserProfile() {
    return this.userProfile;
  }

  setUserProfile(newProfile: UserProfile) {
    this.userProfile = newProfile;
    console.log(this.userProfile);
  }
}
