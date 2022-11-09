import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.scss']
})
export class TwitterComponent implements OnInit {
  
  @Input() result!: number;
  
  constructor() { }

  ngOnInit(): void {
  }


  getHref(){
    return `https://www.twitter.com/intent/tweet?text=un score de dingue ${this.result} &via=username:`
  }

}
