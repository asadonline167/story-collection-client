import { Component, OnInit } from '@angular/core';
import { StoryService } from '../../services/story';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { StoryDto } from '../../../shared/model/story.dto';

@Component({
  selector: 'app-stories',
  templateUrl: './story-list.component.html',
  standalone: true,           // 👈 this is a standalone component
  imports: [CommonModule,FormsModule],     // 👈 MUST import CommonModule
})
export class StoriesComponent implements OnInit {
  stories: StoryDto[] = [];
  searchTerm: string = '';

  page = 1;
  pageSize = 20;

  constructor(private storyService: StoryService) {}

  ngOnInit(): void {

    this.loadStories();

  }

  loadStories() {
    this.storyService.getTopStories(this.page, this.pageSize).subscribe({
      next: (data) => {
        console.log('API response:', data);
        this.stories = data;
      },
      error: (err) => console.error('API error:', err)
    });
  }

  
  nextPage() {
    this.page++;
    debugger;
    this.loadStories();
  }

  prevPage() {
    if (this.page > 1) {
      this.page--;
      this.loadStories();
    }

}

  get filteredStories() {
    if (!this.searchTerm) return this.stories;
    return this.stories.filter(story =>
      story.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }
}
