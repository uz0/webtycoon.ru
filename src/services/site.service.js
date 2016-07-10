import { Injectable }    from '@angular/core';
import Site from './site.class';

@Injectable()
export default class SiteService {

  constructor(){
    this.list = [];
    this.active = {};
  }

  addSite(name){
    if (!name){
      return;
    }

    let site = new Site(name);
    this.list.push(site);
    this.setActive(site);
  }

  setActive(site){
    this.active = site;
  }
}