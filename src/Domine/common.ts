export interface HTTPClient {
    GET(path: string, queryparams?: object): Promise<Response>;
    POST(path: string, body: unknown, queryparams?: object): Promise<Response>;
    PUT(path: string, body: unknown): Promise<Response>;
    DELETE(path: string): Promise<Response>;
  }
  
  export interface IUseCase<IRequest, IResponse> {
    execute(request?: IRequest): Promise<IResponse> | IResponse;
  }
  
//   export interface ResponseData<T> {
//     description: string;
//     statusCode: number;
//     result: T;
//   }
  