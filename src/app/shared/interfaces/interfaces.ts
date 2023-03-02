export interface IBlog {
    id: number ;
    title:string;
    message: string;
    author: string;
   
}
export interface IBlogRequest{
    title:string;
    message: string;
    author: string;
}
export interface IBlogResponse extends IBlogRequest{
    id: number ;
}