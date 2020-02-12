import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import {
  Matter,
  History,
  HistoryData,
  MatterType
} from '../interfaces/matter.interface';

const url = 'http://history.muffinlabs.com/date';

@Injectable({
  providedIn: 'root'
})
export class MatterService {
  history$: Observable<History>;
  matters$: Subject<Matter[]> = new Subject<Matter[]>();

  constructor(private http: HttpClient) {
    this.history$ = this.getAllHistory();

    this.history$.subscribe((history: History) => {
      const matters: Matter[] = this.historyToMatters(history);
      this.matters$.next(matters);
    });
  }

  getAllHistory(): Observable<History> {
    return this.http.get<History>(url);
  }

  getAllMatters() {
    return this.getAllHistory();
  }

  historyToMatters(history: History): Matter[] {
    const parsedMatters: Matter[] = [];
    const historyData: HistoryData = history.data;
    for (const matterType of Object.keys(historyData)) {
      for (const matter of historyData[matterType]) {
        parsedMatters.push({
          year: matter.year,
          date: matter.date,
          type: MatterType[matterType],
          text: matter.text,
          html: matter.html,
          noYearHtml: matter.no_year_html
        });
      }
    }
    return parsedMatters;
  }
}
