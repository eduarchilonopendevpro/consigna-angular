export interface MenuItem {
  nombre: string;
  url: string;
}

export interface Menu{
  nombre: string;
  elementos: MenuItem[];
}