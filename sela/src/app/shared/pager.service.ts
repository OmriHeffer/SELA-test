import { Injectable } from '@angular/core';
import * as _ from 'underscore';
@Injectable()
export class PagerService {
  getPager(numOfItems: number,
          currPage: number = 1,
          pageSize: number = 10,
          pagerLength: number = 7) {
    const numOfPages = Math.ceil(numOfItems / pageSize);
    let start: number,
        end: number;

    if (numOfPages < pagerLength) {
      // less than max, show all pages.
      start = 1;
      end = numOfPages;
    } else {
      // more than max.
      const halfSize = Math.ceil(pagerLength / 2);

      if (currPage <= halfSize) {
        // Display from the start
        start = 1;
        end = pagerLength;
      } else if (currPage + halfSize >= numOfPages) {
        // Display the end
        start = numOfPages - pagerLength - 1;
        end = numOfPages;
      } else {
        start = currPage - halfSize;
        end = currPage + halfSize;
      }
    }

    const pages = _.range(start, end + 1);
    const startIndex = (currPage - 1) * pageSize;
    const endIndex = Math.min(startIndex + pageSize - 1, numOfItems - 1);

    return {
      currPage: currPage,
      numOfPages: numOfPages,
      start: start,
      end: end,
      pages: pages,
      startIndex: startIndex,
      endIndex: endIndex
    };
  }
}
