export interface HistoryData {
  events: Matter[];
  death: Matter[];
  birth: Matter[];
}

export interface HistoryDto {
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
  noYearHtml: string;
}

export enum MatterType {
  event = 'event',
  death = 'death',
  birth = 'birth'
}
