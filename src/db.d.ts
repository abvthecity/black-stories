declare module "*/db.yml" {
  export interface ITag {
    id: string;
    name: string;
  }

  export interface IPost {
    url: string;
    tags: string[];
  }

  export interface IData {
    tags: ITag[];
    posts: IPost[];
  }
  const data: IData;
  export default data;
}
