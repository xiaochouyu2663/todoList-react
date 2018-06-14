export const todos = (state=[],action)=>{
    switch(action.type){
        case  'AddTodo':
        return [...state,{
            text:action.text
        }];
        default:
        return state;
    }
}
