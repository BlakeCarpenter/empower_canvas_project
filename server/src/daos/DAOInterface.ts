export default interface DAOInterface{
    run(sql:string, params:any[]):Promise<any>;
    get(sql:string, params:any[]):Promise<any>;
    all(sql:string, params:any[]):Promise<any>;
}