// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  Plasmic_320PxPure,
  Default_320PxPureProps
} from "./plasmic/masteri_sparq/Plasmic_320PxPure";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface _320PxPureProps extends Omit<Default_320PxPureProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from Default_320PxPureProps altogether and have
// total control over the props for your component.
export interface _320PxPureProps extends Default_320PxPureProps {}

function _320PxPure_(props: _320PxPureProps, ref: HTMLElementRefOf<"div">) {
  // Use Plasmic_320PxPure to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_320PxPure are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all _320PxPureProps here, but feel free
  // to do whatever works for you.

  return <Plasmic_320PxPure div171={{ ref }} {...props} />;
}

const _320PxPure = React.forwardRef(_320PxPure_);
export default _320PxPure;
