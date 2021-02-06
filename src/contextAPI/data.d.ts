export interface ContextData {
    photoArray: any;
    isFetching: boolean;
    handleFetchByQuery?:(term:string)=>void;
}