import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  // Import these router directives so <a routerLink=...> is recognized
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-webSite';


  onDownloadResume(): void {
    const resumeUrl = 'assets/PRANEETH CHAKRAVARTHI DIGUVAPALE Sr. Java.docx'; // Path to your resume file in the assets folder
    const link = document.createElement('a'); // Create a temporary <a> element
    link.href = resumeUrl;
    link.download = 'PRANEETH CHAKRAVARTHI DIGUVAPALE Sr. Java.docx';  // Set the downloaded file name
    link.click(); // Programmatically click the link to trigger the download
  }
}
