import { Component, OnInit } from '@angular/core';
import { OrganisationService } from '../../../shared/services/organisation.service';
import { DTO } from '../../../shared/data-mgmt/dto';
import { DTS } from '../../../shared/data-mgmt/data-type-structures/dts';

@Component({
  selector: 'app-organisation-list-page',
  templateUrl: './organisation-list-page.component.html',
  styleUrls: ['./organisation-list-page.component.scss']
})
export class OrganisationListPageComponent implements OnInit {
  public organisationStructure: DTS[];
  public organisationData: DTO[];
  public selectedOrganisation: DTO;

  constructor(private organisationService: OrganisationService) { }

  ngOnInit() {
    this.organisationData = this.organisationService.readMany();
    this.organisationStructure = this.organisationService.getStructure();
  }

  onSelectRow($event): void {
    this.selectedOrganisation = $event;
  }

  delete() {
    this.organisationService.deleteOne(this.selectedOrganisation['id'])
    this.organisationData = this.organisationService.readMany();
  }
}
