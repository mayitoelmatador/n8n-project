import { Bloc } from "../Domine/BlocBase";
import { stringEmpty } from "../Domine/Constants";
import { GetInitialInfoState } from "../Domine/States/RegisterStepState";

export class GetInitialInfoController extends Bloc<GetInitialInfoState> {
  constructor() {
    const initialState: GetInitialInfoState = {
      typeDocument: stringEmpty,
      initialStep:0,
      labelSteps:["Informacion Inicial", "Validacion Identidad"]
    };
    super(initialState);
  }

  changeTest() {
    this.changeState({ ...this.state, typeDocument: "doc prueba" });
  }
}
