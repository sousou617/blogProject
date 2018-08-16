import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { PageService} from '../../../services/page.service.client';
import { Page } from '../../../models/page.model.client';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-page-edit',
  templateUrl: './page-edit.component.html',
  styleUrls: ['./page-edit.component.css']
})
export class PageEditComponent implements OnInit {

	@ViewChild('f') pageForm: NgForm;

	uid: string;
	wid: string;
	pid: string;
	name: string;
	description: string;
	page: Page = {
    websiteId: "",
    name: "",
    description: ""
  };

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  	 	this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pid = params['pid'];
      this.pageService.findPageById(this.pid).subscribe(
        (page: Page) => {
        this.page = page;
        this.name = this.page.name;
        this.description = this.page.description;    
        })
  });
  }

  update() {
  	this.name = this.pageForm.value.name;
  	this.description = this.pageForm.value.description;

  	const updatedPage: Page = {
  		_id: this.pid,
  		name: this.name,
  		description: this.description,
  		websiteId: this.wid
  	}
    this.pageService.updatePage(this.pid, updatedPage).subscribe(
      (page: Page) => {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
      }
    );
  }

  remove() {
  	this.pageService.deletePage(this.pid).subscribe(
      (page: Page) => {
        this.router.navigate(['user', this.uid, 'website', this.wid, 'page']);
     }
     );
  } 

}

