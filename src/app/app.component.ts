import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../demo-styling.css']
})
export class AppComponent {
  title = 'angular-quickstart';

  fileName: string = 'tiktokfgp0XP5c3If8epW2vXYEJ5B2gTqUXqdD.txt';
  fileContent: string = 'tiktok-developers-site-verification=fgp0XP5c3If8epW2vXYEJ5B2gTqUXqdD';

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
