import { Component, OnInit } from '@angular/core';
import { IBlog } from 'src/app/shared/interfaces/interfaces';
import { BlogService } from 'src/app/shared/servises/blog.service';

@Component({
  selector: 'app-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.scss'],
})
export class AdminblogComponent implements OnInit {
  public title!: string;
  public message!: string;
  public author!: string;
  public AdminBlogs!: IBlog[];
  public editStatus = false;
  public editID!: number;

  constructor(private BlogService: BlogService) {}
  ngOnInit(): void {
    this.getBlogs();
  }
  getBlogs(): void {
    this.BlogService.getAll().subscribe((data) => {
      this.AdminBlogs = data;
    });
  }
  addBlog(): void {
    const newBlog = {
      title: this.title,
      message: this.message,
      author: this.author,
    };
    this.BlogService.create(newBlog).subscribe(() => {
      this.getBlogs();
      this.resetForm();
    });
  }
  editBlog(blog: IBlog): void {
    this.title = blog.title;
    this.message = blog.message;
    this.author = blog.author;
    this.editID = blog.id;
    this.editStatus = true;
  }

  saveBlog(): void {
    const updateBlog = {
      title: this.title,
      message: this.message,
      author: this.author,
    };
    this.BlogService.update(updateBlog, this.editID).subscribe(() => {
      this.getBlogs();
      this.resetForm();
    });
  }
  deleteBlog(blog: IBlog): void {
    if (confirm('Are you sure?')) {
      this.BlogService.delete(blog.id).subscribe(() => {
        this.getBlogs();
      });
    }
  }

  private resetForm(): void {
    this.title = '';
    this.message = '';
    this.author = '';
    this.editStatus = false;
  }
}
