import { Injectable, Inject } from '@angular/core';
import { UserModel } from '../models/user.model';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';
 // key that is used to access the data in local storageconst
const STORAGE_KEY = 'fav';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {

  constructor(@Inject(LOCAL_STORAGE) private storage: StorageService) { }

  public async favSave(user: UserModel, fav?: boolean): Promise<void> {
    const favCurrent = this.storage.get(STORAGE_KEY) || [];
     // push new task to array
    favCurrent.push(user);
    // insert updated array to local storage
    this.storage.set(STORAGE_KEY, (favCurrent));

    console.log(this.storage.get(STORAGE_KEY) || 'LocaL storage is empty');
  }
  public  async getAllFavorite(): Promise<[]> {
      const favs =  this.storage.get(STORAGE_KEY) || [];
      favs.map((res) => res = res.user);
      return favs;
}

public async getFavorite(id): Promise<UserModel> {
  const favCurrent = this.storage.get(STORAGE_KEY);
  return favCurrent;
}


}
