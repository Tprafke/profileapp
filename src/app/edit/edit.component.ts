import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';
import { UserProfile } from '../interfaces/user-profile';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
})
export class EditComponent implements OnInit {
  constructor(private service: ProfileService, private router: Router) {}

  profile: UserProfile;

  ngOnInit(): void {
    this.profile = this.service.getUserProfile();
  }

  updateProfile(form: NgForm) {
    this.service.setUserProfile(form.value);
    this.router.navigate(['profile']);
  }
}
