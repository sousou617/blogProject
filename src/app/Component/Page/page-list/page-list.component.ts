import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { PageService } from '../../../Services/page.service.client';
import { Page } from '../../../Models/page.model.client';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.css']
})
export class PageListComponent implements OnInit {

	uid: string;
	wid: string;
	pages: Page[];

  constructor(private pageService: PageService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  	this.activatedRoute.params.subscribe(params => {
      this.uid = params['uid'];
      this.wid = params['wid'];
      this.pageService.findPageByWebsiteId(this.wid).subscribe(
        (pages: Page[]) => {
          this.pages = pages;
        }
      );
    });
  }
}
