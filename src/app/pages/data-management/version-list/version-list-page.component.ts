import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'ca-version-list-page',
  templateUrl: './version-list-page.component.html',
  styleUrls: ['./version-list-page.component.scss']
})
export class VersionListPageComponent implements OnInit {

  private versions: any[];
  private selectedVersion: any;
  private inCreate: boolean;

  constructor(private auth: AuthService) { }

  ngOnInit() {
    this.loadVersions();
  }

  loadVersions() {
    this.auth.get('http://localhost:3000/versions/all/0').subscribe((data) => {
      if (data) {
        this.versions = data;
      }
    });
  }

  onClick(version: any) {
    if (version == this.selectedVersion) {
      this.selectedVersion = null;
    } else {
      this.selectedVersion = version;
    }
  }
  createNewVersion(versionId: string) {
    console.log('create: ', versionId);

    this.auth.post('http://localhost:3000/versions/create', {
      versionId: versionId,
      published: false,
      nodes: [],
      linkedNodeRoot: null
    }).subscribe(res => {
      this.inCreate = false;
      this.loadVersions();
    })
  }
  importTSV(e) {
    if (e.target.files && e.target.files.length === 1) {
      this.auth.put('http://localhost:3000/import/'+this.selectedVersion.versionId+'/upload', {
        versionId: this.selectedVersion.versionId,
        versionFile: e.target.files[0]
      }).subscribe(res => {
        console.log('res', res);
      })
    }
  }
}
