import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';
import { Organisation } from '../../../classes/Organisation';
import { OrganisationService } from '../../../shared/services/organisation.service';
import { DTS } from '../../../shared/data-mgmt/data-type-structures/dts';

@Component({
  selector: 'app-organisation-page',
  templateUrl: './organisation-page.component.html',
  styleUrls: ['./organisation-page.component.scss']
})
export class OrganisationPageComponent implements OnInit {

  private id: string;
  private dataStructure: DTS[];
  private organisation: Organisation;

  constructor(private route: ActivatedRoute, private organisationService: OrganisationService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.dataStructure = this.organisationService.getStructure();
      this.organisation = this.organisationService.readOne(this.id);
    });
    
  }

}
