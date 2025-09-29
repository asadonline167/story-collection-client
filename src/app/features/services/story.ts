import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryDto } from '../../shared/model/story.dto';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = 'https://hackernewsserviceapi-aaffa2bybgdhf6fc.canadacentral-01.azurewebsites.net/api/Stories'; 
  constructor(private http: HttpClient) {}

  getTopStories(page: number, pageSize: number): Observable<StoryDto[]> {
    return this.http.get<StoryDto[]>(`${this.apiUrl}/newest?page=${page}&pageSize=${pageSize}`);
  }
}
