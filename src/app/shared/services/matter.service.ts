import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

import {
  History,
  HistoryData,
  Matter,
  MatterType
} from '../interfaces/matter.interface';
import { mockData } from '../mock/data.mock';

const url = 'http://history.muffinlabs.com/date';

@Injectable({
  providedIn: 'root'
})
export class MatterService {
  history$: Observable<History>;
  matters$: Subject<Matter[]> = new Subject<Matter[]>();

  constructor(private http: HttpClient) {
    // this.history$ = this.getAllHistory();
    this.history$ = of(mockData);

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
        console.log(matter);

        parsedMatters.push({
          year: matter.year,
          date: history.date,
          type: MatterType[matterType],
          text: matter.text,
          html: matter.html,
          noYearHtml: matter.no_year_html
        });
      }
    }
    console.log(parsedMatters);

    return parsedMatters;
  }
}
