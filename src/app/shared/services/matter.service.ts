import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, ReplaySubject } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  History,
  HistoryData,
  Matter,
  MatterType
} from '../interfaces/matter.interface';
import { mockData } from '../mock/data.mock';
import { MatterFilter } from '../interfaces/filter.interface';
import { itemsPerPage } from '../constants/pagination.constants';

const url = 'http://history.muffinlabs.com/date';

@Injectable({
  providedIn: 'root'
})
export class MatterService {
  matters$: Observable<Matter[]>;
  mattersRS: ReplaySubject<Matter[]> = new ReplaySubject<Matter[]>();

  constructor(private http: HttpClient) {
    this.matters$ = this.getAllHistory();
    this.matters$.subscribe((matters: Matter[]) => {
      this.mattersRS.next(matters);
    });
  }

  getAllHistory(): Observable<Matter[]> {
    // return this.http.get<History>(url)
    return of(mockData).pipe(
      map((history: History) => {
        return this.historyToMatters(history);
      })
    );
  }

  getAllMatters(): ReplaySubject<Matter[]> {
    return this.mattersRS;
  }

  filterMatters(data: MatterFilter): Observable<Matter[]> {
    return this.matters$.pipe(
      map((matters: Matter[]) =>
        matters.filter(
          (matter: Matter) => data.type === '' || matter.type === data.type
        )
      )
    );
  }

  changePage(currentPage: number): Observable<Matter[]> {
    const pagePosition: number = currentPage * itemsPerPage;
    return this.matters$.pipe(
      map((matters: Matter[]) => {
        return matters.slice(pagePosition, pagePosition + itemsPerPage);
      })
    );
  }

  historyToMatters(history: History): Matter[] {
    const parsedMatters: Matter[] = [];
    const historyData: HistoryData = history.data;
    for (const matterType of Object.keys(historyData)) {
      for (const matter of historyData[matterType]) {
        parsedMatters.push({
          year: matter.year,
          date: history.date,
          type: MatterType[matterType],
          text: matter.text,
          html: matter.html,
          noYearHtml: matter.no_year_html
        } as Matter);
      }
    }
    return parsedMatters;
  }
}
