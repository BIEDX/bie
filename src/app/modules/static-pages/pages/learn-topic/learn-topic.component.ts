import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn-topic',
  templateUrl: './learn-topic.component.html',
  styleUrls: ['./learn-topic.component.scss']
})
export class LearnTopicComponent implements OnInit {
  learnTopics: any [ ] = [
    {
      label: "Breast",
      des2: "Coming Soon",
      des: ""
    },
    {
      label: "Body",
      des: "",
      des2: "Coming Soon"
    },
    {
      label: "Musculoskeletal",
      des2: "Coming Soon",
      des: ""
    },
    {
      label: "Cardiac",
      des2: "Coming Soon",
      des: ""
    },
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
