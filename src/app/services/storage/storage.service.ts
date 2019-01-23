import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { StorageEntries } from 'src/app/models/storage-entries';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() { }

  getAll(): Observable<StorageEntries> {
    return timer(0).pipe(
      map(() => {
        const entries = new StorageEntries;
        for (let i = 0; i < localStorage.length; i++) {
          const key = localStorage.key(i);
          entries[key] = localStorage.getItem(key);
        }
        return entries;
      }),
    );
  }

  saveItems(entries: StorageEntries): Observable<StorageEntries> {
    return timer(0).pipe(
      map(() => {
        Object.entries(entries).forEach(([key, value]) => localStorage.setItem(key, value));
        return entries;
      }),
    );
  }

  removeItems(keys: string[]): Observable<string[]> {
    return timer(0).pipe(
      map(() => {
        keys.forEach(key => localStorage.removeItem(key));
        return keys;
      }),
    );
  }

  clear(): Observable<{}> {
    return timer(0).pipe(
      map(() => {
        localStorage.clear();
        return {};
      }),
    );
  }

}
