// This is a skeleton starter React component generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import * as React from "react";
import {
  Plasmic_320PxFooterI,
  Default_320PxFooterIProps
} from "./plasmic/masteri_sparq/Plasmic_320PxFooterI";
import { HTMLElementRefOf } from "@plasmicapp/react-web";

// Your component props start with props for variants and slots you defined
// in Plasmic, but you can add more here, like event handlers that you can
// attach to named nodes in your component.
//
// If you don't want to expose certain variants or slots as a prop, you can use
// Omit to hide them:
//
// interface _320PxFooterIProps extends Omit<Default_320PxFooterIProps, "hideProps1"|"hideProp2"> {
//   // etc.
// }
//
// You can also stop extending from Default_320PxFooterIProps altogether and have
// total control over the props for your component.
export interface _320PxFooterIProps extends Default_320PxFooterIProps {}

function _320PxFooterI_(
  props: _320PxFooterIProps,
  ref: HTMLElementRefOf<"div">
) {
  // Use Plasmic_320PxFooterI to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into Plasmic_320PxFooterI are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, we are just piping all _320PxFooterIProps here, but feel free
  // to do whatever works for you.

  return <Plasmic_320PxFooterI divshopifySectionFooter3={{ ref }} {...props} />;
}

const _320PxFooterI = React.forwardRef(_320PxFooterI_);
export default _320PxFooterI;
