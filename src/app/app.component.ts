import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';

  fileName: string = 'tiktokgzVkL92x8O3AqR0pBk1JOqhU9Qqfl4nT.txt';
  fileContent: string = 'tiktok-developers-site-verification=gzVkL92x8O3AqR0pBk1JOqhU9Qqfl4nT';

  downloadTextFile() {
    const content = this.fileContent;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement('a');
    a.href = url;
    a.download = this.fileName;
    a.click();

    window.URL.revokeObjectURL(url);
  }
}
