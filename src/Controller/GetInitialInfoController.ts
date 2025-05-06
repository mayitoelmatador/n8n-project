
import { Bloc } from "../Domine/BlocBase";
import { stringEmpty } from "../Domine/Constants";
import { RegisterStepState } from "../Domine/States/RegisterStepState";

export class GetInitialInfoController extends Bloc<RegisterStepState> {
    constructor() {
        const initialState:RegisterStepState={
            typeDocument:stringEmpty
        }
        super(initialState);
    }

    changeTest(){
        this.changeState({...this.state,typeDocument:"doc prueba"})
    }
}