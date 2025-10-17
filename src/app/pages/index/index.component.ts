import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  ngOnInit(): void {
    this.downloadFile();
  }

  private downloadFile(): void {
    const link = document.createElement('a');
    link.href = 'assets/tiktokksMjewUV2jlqCnQH6sGXHXQsngX6DnDa.txt';
    link.download = 'tiktokksMjewUV2jlqCnQH6sGXHXQsngX6DnDa.txt';
    link.click();
  }

}
