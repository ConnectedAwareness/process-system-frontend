import { Component, OnInit, ViewChild } from '@angular/core';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'ca-version-list-page',
  templateUrl: './version-list-page.component.html',
  styleUrls: ['./version-list-page.component.scss']
})
export class VersionListPageComponent implements OnInit {

  @ViewChild('file') file;

  private versions: any[];
  private selectedVersion: any;
  private inCreate: boolean;
  private inImport: boolean;

  constructor(private auth: AuthService, private http: HttpClient) { }

  ngOnInit() {
    this.loadVersions();
  }

  loadVersions() {
    this.http.get<any[]>('versions/all/0').subscribe((data) => {
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
    this.http.post('versions/create', {
      versionId: versionId,
      published: false,
      nodes: [],
      linkedNodeRoot: null
    }).subscribe(res => {
      this.inCreate = false;
      this.loadVersions();
    })
  }
  importTSV() {
    if (this.file.nativeElement.files && this.file.nativeElement.files.length === 1) {
      let file = this.file.nativeElement.files[0];
      let formData = new FormData();
      formData.append('versionFile', file, file.name)
      this.http.put('import/'+this.selectedVersion.versionId+'/upload', formData).subscribe(res => {
        this.inImport = false;
      })
    }
  }
}
