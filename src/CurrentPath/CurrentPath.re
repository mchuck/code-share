
[@react.component]
  let make = () => {
    let url = ReasonReactRouter.useUrl(); 

    React.string(Belt.List.reduce(url.path, "", (a,b) => a ++ b))
  }
