import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularEditorConfig } from '@kolkov/angular-editor';
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
  formGroup: FormGroup;
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
  config: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: '15rem',
    minHeight: '5rem',
    placeholder: 'Enter text here...',
    translate: 'no',
    defaultParagraphSeparator: 'p',
    defaultFontName: 'Arial',
    toolbarHiddenButtons: [
      ['bold']
    ],
    customClasses: [
      {
        name: "quote",
        class: "quote",
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: "titleText",
        class: "titleText",
        tag: "h1",
      },
    ]
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
    this.getTeachers();
    this.getDiagonis('');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      if (this.patchFormValue && this.patchFormValue.hasOwnProperty('_id')) {
        this.isEdit = true;
        this.patchForm();
      }
    }, 1000);
  }


  patchForm(): void {
    console.log('patchFormValue', this.patchFormValue);
    this.getDiagonis(this.patchFormValue?.bodyParts);
    if (this.patchFormValue.hasOwnProperty('video')) {
      let data = JSON.parse(JSON.stringify(this.patchFormValue));
      data.video.forEach(element => {
        console.log("element", element);
        element.topic.toString()
        this.addNewVideos(element);
      });
    }

    this.formGroup.patchValue({
      name: this.patchFormValue.name ? this.patchFormValue.name : '',
      description: this.patchFormValue.description ? this.patchFormValue.description : '',
      tags: this.patchFormValue.tags ? this.patchFormValue.tags : '',
      price: this.patchFormValue.price ? this.patchFormValue.price : '',
      teacher: this.patchFormValue.teacherId ? this.patchFormValue.teacherId : '',
      duration: this.patchFormValue.duration ? this.patchFormValue.duration : '',
      bodyParts: this.patchFormValue.bodyParts ? this.patchFormValue.bodyParts : '',
      image: this.patchFormValue.image ? this.patchFormValue.image : '',

    });
  }

  createForm(): void {
    this.formGroup = this.formBuilder.group({
      name: ['', [Validators.required]],
      description: ['', [Validators.required]],
      tags: ['', [Validators.required]],
      diagnosis: ['', [Validators.required]],
      image: ['', [Validators.required]],
      price: ['', [Validators.required]],
      teacher: ['', [Validators.required]],
      duration: ['', [Validators.required]],
      bodyParts: ['', [Validators.required]],
      videos: this.formBuilder.array([])
    });
    this.addNewVideos({});
  }

  // WILL RETURN ALL CONTACTS 
  get videos(): FormArray {
    return this.formGroup.get("videos") as FormArray
  }

  // WILL ADD NEW CONTACTS 
  addNewVideos(data): void {
    this.videos.push(this.newVideosCreate(data));
    console.log("FormGroup", this.formGroup);

  }

  // NEW CONTACTS 
  newVideosCreate(data: any = {}): FormGroup {
    return this.formBuilder.group({
      videoLink: [data && data?.videoLink ? data.videoLink : '', [Validators.required]],
      price: [data && data?.price ? data.price : '', [Validators.required]],
      date: [data && data?.date ? data.date : '', [Validators.required]],
      topic: [data && data?.topic ? data.topic : '', [Validators.required]],
    });


  }

  // WILL REMOVE SELECTED CONTACT
  removeVideos(index: number): void {
    this.videos.removeAt(index);
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
        if (this.patchFormValue?.bodyParts) {
          this.formGroup.controls?.['diagnosis']?.setValue(this.diagnosis[0]?._id);
        }
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
          this.formGroup?.controls?.['image']?.setValue(res?.fileName ? res?.fileName : '');
        }, (err) => {
          console.log('err', err);
        })
    )
  }

  signupHandler() {
    if (!this.formGroup.valid) {
      alert('Please fill the all madentory fields');
      return;
    }
    const formValues = this.formGroup.value;
    this.payload = {
      diagnosisId: formValues.diagnosis,
      name: formValues.name,
      description: formValues.description,
      tags: formValues.tags,
      price: formValues.price,
      teacherId: formValues.teacher,
      image: formValues.image,
      duration: formValues.duration,
      bodyParts: formValues.bodyParts,
      video: [...formValues.videos]
    }

    console.log('payload', this.payload);
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

