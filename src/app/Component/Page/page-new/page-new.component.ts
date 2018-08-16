import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PageService} from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-page-new',
  templateUrl: './page-new.component.html',
  styleUrls: ['./page-new.component.css']
})
export class PageNewComponent implements OnInit {

	@ViewChild('f') pageForm: NgForm;

	uid: string;
	wid: string;
	name: string;
	description: string;

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	 	this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
  });
  }
  create() {
  	this.name = this.pageForm.value.name;
  	this.description  = this.pageForm.value.description;

  	const newPage: Page = {
  		name: this.name,
  		websiteId: this.wid,
  		description: this.description
  	}
  	this.pageService.createPage(this.wid, newPage).subscribe(
      (page: Page) => {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
      }
      )
  }

}
