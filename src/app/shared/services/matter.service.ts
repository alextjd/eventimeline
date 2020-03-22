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

const url = 'http://localhost:3000/api/days/';

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

  getMatters(filterData: MatterFilter): Observable<Matter[]> {
    const query = this.buildMattersQuery(
      filterData.startDate,
      filterData.endDate
    );
    return this.http.get<Matter[]>(`${url}${query}`);
  }

  filterMatters(matters: Matter[], filter: MatterFilter): Matter[] {
    return matters.filter(
      (matter: Matter) => filter.type === '' || matter.type === filter.type
    );
  }

  changePage(matters: Matter[], currentPage: number): Matter[] {
    const pagePosition: number = currentPage * itemsPerPage;
    return matters.slice(pagePosition, pagePosition + itemsPerPage);
  }

  updateMatters(
    filterData: MatterFilter,
    currentPage: number
  ): Observable<Matter[]> {
    return this.matters$.pipe(
      map((matters: Matter[]) => this.filterMatters(matters, filterData)),
      map((matters: Matter[]) => this.changePage(matters, currentPage))
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
