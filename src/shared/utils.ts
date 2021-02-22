import type { AlbumType } from './type';

const sortDesc = (dataList: Array<AlbumType>) => {
  dataList.sort((a, b) => {
    const a_res_date: any = new Date(a.releaseDate);
    const b_res_date: any = new Date(b.releaseDate);
    return b_res_date - a_res_date;
  });
  return dataList;
};

export { sortDesc };
