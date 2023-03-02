import { Component, OnInit } from '@angular/core';
import { IBlogResponse } from 'src/app/shared/interfaces/interfaces';
import { BlogService } from 'src/app/shared/servises/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss'],
})
export class BlogComponent implements OnInit {
  public blogPage: Array<IBlogResponse> = [];
  public image =
    'https://motorcar.com.ua/wp-content/uploads/2019/09/audi-rs-7-sportback-201913.jpg';
  constructor(private BlogService: BlogService) {}
  ngOnInit(): void {
    this.getBlogs();
  }

  getBlogs(): void {
    this.BlogService.getAll().subscribe((data) => {
      this.blogPage = data;
    });
  }
}
