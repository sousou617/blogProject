import { Component, OnInit } from '@angular/core';
import { WebsiteService } from '../../../services/website.service.client';
import { ActivatedRoute } from "@angular/router";
import { Website } from '../../../models/website.model.client';

@Component({
  selector: 'app-website-list',
  templateUrl: './website-list.component.html',
  styleUrls: ['./website-list.component.css']
})
export class WebsiteListComponent implements OnInit {
  
  uid: string;
  websites: Website[];
  
  constructor(private websiteService: WebsiteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
  //   this.activatedRoute.params.subscribe(params => {
  //     this.uid = params['uid'];
  //     this.websiteService.findWebsitesByUser(this.uid).subscribe(
  //       (website: Website[]) => {
  //         this.websites = website;
  //       });
  //   });
  }

}