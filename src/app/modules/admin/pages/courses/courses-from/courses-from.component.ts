import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CourseInterface } from 'src/app/core/constants';
import { CourseService } from 'src/app/core/providers/apis/courses.service';
import { TeacherService } from 'src/app/core/providers/apis/teacher.service';

@Component({
  selector: 'app-courses-from',
  templateUrl: './courses-from.component.html',
})
export class CoursesFromComponent implements OnInit {
  serviceSubscription: Subscription[] = [];
  fromGroup: FormGroup;
  payload: CourseInterface;
  errorResponse: any = null;
  isEdit: boolean = false;
  bodyParts: any;
  diagnosis: any;
  teachers: any;
  selectedImage: any;
  patchFormValue: any;
  @Input() set data(value) {
    this.patchFormValue = value;
  };

  constructor(
    private formBuilder: FormBuilder,
    private _courseService: CourseService,
    private _teacherService: TeacherService,
    private _route: Router
  ) { }

  ngOnInit(): void {
    this.createForm();
    this.getBodyParts();
    this.getDiagonis('');
    this.getTeachers();
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.patchFormValue && this.patchFormValue.hasOwnProperty('_id')) {
        this.isEdit = true;
        this.patchForm();
      }
    }, 700);
  }


  patchForm(): void {
    this.fromGroup.patchValue({
      name: this.patchFormValue.name ? this.patchFormValue.name : '',
      description: this.patchFormValue.description ? this.patchFormValue.description : '',
      tags: this.patchFormValue.tags ? this.patchFormValue.tags : '',
      diagnosis: this.patchFormValue.diagnosis ? this.patchFormValue.diagnosis : '',
      image: this.patchFormValue.image ? this.patchFormValue.image : '',
      price: this.patchFormValue.price ? this.patchFormValue.price : '',
      teacher: this.patchFormValue.teacher ? this.patchFormValue.teacher : '',
      type: this.patchFormValue.type ? this.patchFormValue.type : '',
    })
  }

  createForm(): void {
    this.fromGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required],
      diagnosis: ['', Validators.required],
      image: ['', Validators.required],
      price: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      type: ['', [Validators.required]],
    })
  }

  getBodyParts() {
    this.serviceSubscription.push(
      this._courseService.getBodyParts().subscribe((res) => {
        this.bodyParts = res;
      }, (err) => {
        console.log('err', err);
      })
    )
  }

  getDiagonis(data): void {
    this.serviceSubscription.push(
      this._courseService.getDiagnos(data ? data : null).subscribe((res) => {
        this.diagnosis = res;
      }, (err) => {
        console.log('err', err);
      })
    )
  }

  getTeachers(): void {
    this.serviceSubscription.push(
      this._teacherService.getTeachers().subscribe((res) => {
        this.teachers = res;
      }, (err) => {
        console.log('err', err);
      })
    )
  }

  onBodyPartsClick(event): void {
    let data = event.target.value;
    this.getDiagonis(data)
  }

  selectFiles(event: any): void {
    this.selectedImage = event?.target?.files;
    if (this.selectedImage && this.selectedImage[0]) {
      this.getImage(this.selectedImage[0]);
    }
  }

  getImage(data): void {
    this.serviceSubscription.push(
      this._courseService.getImages(data).subscribe(
        (res: any) => {
          console.log('res', res);
          this.fromGroup?.controls?.['image']?.setValue(res?.fileName ? res?.fileName : '');
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  signupHandler() {
    if (!this.fromGroup.valid) {
      alert('Please fill the all madentory fields');
      return;
    }
    const formValues = this.fromGroup.value;
    this.payload = {
      diagnosisId: formValues.diagnosis,
      name: formValues.name,
      description: formValues.description,
      tags: formValues.tags,
      price: formValues.tags,
      teacherId: formValues.teacher,
      type: formValues.type,
      image: formValues.image,
    }
    if (this.patchFormValue?._id) {
      this.payload.id = this.patchFormValue?._id;
      console.log('payload', this.payload);
      this.updateCourses(this.payload);
    } else {
      console.log('payload', this.payload);
      this.addCourses(this.payload);
    }
  }

  addCourses(payload): void {
    this.serviceSubscription.push(
      this._courseService.createCourses(payload).subscribe((res) => {
        console.log(res)
        this._route.navigateByUrl('/admin/courses/list')
      }, (error) => console.log(error))
    )
  }

  updateCourses(payload): void {
    this.serviceSubscription.push(
      this._courseService.updateCourses(payload).subscribe((res) => {
        console.log(res)
        this._route.navigateByUrl('/admin/courses/list')
      }, (error) => console.log(error))
    )
  }

  ngOnDestroy(): void {
    this.serviceSubscription.forEach(service => {
      service.unsubscribe();
    });
  }

}

