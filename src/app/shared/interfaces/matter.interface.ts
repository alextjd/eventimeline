export interface HistoryData {
  events: Matter[];
  death: [];
  birth: [];
}

export interface HistoryDto {
  date: string;
  url: string;
  data: HistoryData;
}

export interface Matter {
  year: string;
  text: string;
  html: string;
  noYearHtml: string;
  links: HistoryLink[];
}

export interface HistoryLink {
  link: string;
  text: string;
}
