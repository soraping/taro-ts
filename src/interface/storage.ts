export interface IStorage {
  getItem: <T>(key: string) => T;
  setItem: (key: string, value: any) => void;
  removeItem: (key: string) => void;
  clear: () => void;
}
