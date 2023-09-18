import React, { useReducer } from "react";

const reducer = (state: typeof init, action: { type: keyof typeof init; value: string }): typeof init => {
  switch (action.type) {
    case "name":
      return { ...state, name: action.value };
    case "contact":
      return { ...state, contact: action.value };
    case "businessQuery":
      return { ...state, businessQuery: action.value };
    case "message":
      return { ...state, message: action.value };
    default:
      return state;
  }
};
const init = {
  name: "",
  contact: "",
  businessQuery: "",
  message: "",
};
const ContactInput: React.FC<{ type: "formal" | "casual" }> = ({ type }) => {
  // const [state, dispatch] = useReducer<typeof init>(reducer, init);
  let question: string;
  // if (state.businessQuery)
  if (type === 'formal') question = 'Brief your business proposal';
  else question = 'Brief your message'
  return (
    <div className="flex w-full items-start">
      <span className="whitespace-nowrap">Brief your {type === 'formal'? 'Business Proposal': 'Message'}: </span>
      <input
        type="text"
        name="name"
        className="border-none outline-none pb-4 w-full bg-transparent"
        autoFocus
        spellCheck={false}
        // value={value}
        //     onKeyDown={(e) => commandPressHandler(e.key)}
        //     onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};

export default ContactInput;
