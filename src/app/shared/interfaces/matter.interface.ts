export interface HistoryData {
  Events: Matter[];
  Deaths: Matter[];
  Births: Matter[];
}

export interface History {
  date: string;
  url: string;
  data: HistoryData;
}

export interface Matter {
  year: string;
  date: string;
  type: MatterType;
  text: string;
  html: string;
  url: string;
  noYearHtml: string;
}

export enum MatterType {
  Events = 'Event',
  Deaths = 'Death',
  Births = 'Birth'
}
