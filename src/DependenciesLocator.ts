import { GetInitialInfoController } from "./Controller/GetInitialInfoController";


function provideFormController(): GetInitialInfoController{
    return new GetInitialInfoController();
  }
  
  export const dependenciesLocator = {
    provideFormController,
  };