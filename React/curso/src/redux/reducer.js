
/*Now we importe the dishes NOTE that we have the same name as in the export declaration in dishes.js*/
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
import { LEADERS } from "../shared/leaders";
import { PROMOTIONS} from "../shared/promotions";

export const initialState={
    dishes: DISHES,
    comments:COMMENTS,
    promotions:PROMOTIONS,
    leaders:LEADERS,
    selectedDish: null,
};

export const Reducer=(state =initialState,action)=>{
    return state;
}