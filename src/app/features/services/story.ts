import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { StoryDto } from '../../shared/model/story.dto';

@Injectable({
  providedIn: 'root'
})
export class StoryService {
  private apiUrl = 'https://localhost:44388/api/Stories'; // 👈 adjust to your ASP.NET Core API

  constructor(private http: HttpClient) {}

  getTopStories(page: number, pageSize: number): Observable<StoryDto[]> {
    return this.http.get<StoryDto[]>(`${this.apiUrl}/newest?page=${page}&pageSize=${pageSize}`);
  }
}
