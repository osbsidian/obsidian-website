import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-privacy-policy',
  templateUrl: './privacy-policy.component.html',
  styleUrls: ['./privacy-policy.component.css']
})
export class PrivacyPolicyComponent implements OnInit {

  ngOnInit(): void {
    this.downloadFile();
  }

  private downloadFile(): void {
    const link = document.createElement('a');
    link.href = 'assets/tiktokZcVyI8yLMWgWPKDc790IcYQhFB8hRBUa.txt';
    link.download = 'tiktokZcVyI8yLMWgWPKDc790IcYQhFB8hRBUa.txt';
    link.click();
  }
}
