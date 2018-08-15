import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA, MatDialogConfig} from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  title = 'app';

  constructor(private dialog: MatDialog) {}

  initName: string;
  initDesc: string;
  initImg: '../assets/images/icons8-user-50.png';

  /* ../assets/images/icons8-user-50.png */
  participants = [
    {
      id: 1,
      name: 'Anders Andersson',
      desc: '178cm - 85kg',
      img: '../assets/images/running_active.jpg'
    }
  ];

  tests = [
    {
      id: 1,
      title: 'Standing 30 m',
      img: '../assets/images/running_active.jpg',
      active: true
    },
    {
      id: 2,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg',
      active: false
    },
    {
      id: 3,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg',
      active: false
    },
    {
      id: 4,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      active: false
    },
    {
      id: 5,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg',
      active: false
    },
    {
      id: 6,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
      active: false
    },
    {
      id: 7,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg',
      active: false
    },
    {
      id: 8,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/NO9CN3QYR3.jpg',
      active: false
    },
    {
      id: 9,
      title: 'Coming soon',
      img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/X1UK6NLGRU.jpg',
      active: false
    },
  ];

  addParticipant() {

    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.position = {
      'top': '0',
      left: '0'
    };

    dialogConfig.data = {
      id: 1,
      title: 'Angular For Beginners'
    };

    this.dialog.open(CourseDialogComponent, dialogConfig);
  }

}



@Component({
  selector: 'course-dialog',
  templateUrl: './add-participant-dialog.html'
})

export class CourseDialogComponent {

  description:string;

  constructor(
    private dialogRef: MatDialogRef<CourseDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data) {

    this.description = data.description;
  }

  save() {
    this.dialogRef.close();
  }

  close() {
    this.dialogRef.close();
  }
}
