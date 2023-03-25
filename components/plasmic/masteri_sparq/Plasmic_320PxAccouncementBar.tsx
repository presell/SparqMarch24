// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: XG5Rt2JU6Twy3

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./Plasmic_320PxAccouncementBar.module.css"; // plasmic-import: XG5Rt2JU6Twy3/css

export type Plasmic_320PxAccouncementBar__VariantMembers = {};
export type Plasmic_320PxAccouncementBar__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320PxAccouncementBar__VariantsArgs;
export const Plasmic_320PxAccouncementBar__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_320PxAccouncementBar__ArgsType = {};
type ArgPropType = keyof Plasmic_320PxAccouncementBar__ArgsType;
export const Plasmic_320PxAccouncementBar__ArgProps = new Array<ArgPropType>();

export type Plasmic_320PxAccouncementBar__OverridesType = {
  div228?: p.Flex<"div">;
  freeShippingOnOr?: p.Flex<"div">;
  text?: p.Flex<"div">;
};

export interface Default_320PxAccouncementBarProps {
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function Plasmic_320PxAccouncementBar__RenderFunc(props: {
  variants: Plasmic_320PxAccouncementBar__VariantsArgs;
  args: Plasmic_320PxAccouncementBar__ArgsType;
  overrides: Plasmic_320PxAccouncementBar__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});

  return (
    <div
      data-plasmic-name={"div228"}
      data-plasmic-override={overrides.div228}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div228
      )}
    >
      <div
        data-plasmic-name={"freeShippingOnOr"}
        data-plasmic-override={overrides.freeShippingOnOr}
        className={classNames(projectcss.all, sty.freeShippingOnOr)}
      >
        <div
          data-plasmic-name={"text"}
          data-plasmic-override={overrides.text}
          className={classNames(
            projectcss.all,
            projectcss.__wab_text,
            sty.text
          )}
        >
          {"FREE SHIPPING ON ORDERS OVER $65"}
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div228: ["div228", "freeShippingOnOr", "text"],
  freeShippingOnOr: ["freeShippingOnOr", "text"],
  text: ["text"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div228: "div";
  freeShippingOnOr: "div";
  text: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320PxAccouncementBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320PxAccouncementBar__VariantsArgs;
    args?: Plasmic_320PxAccouncementBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320PxAccouncementBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320PxAccouncementBar__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: Plasmic_320PxAccouncementBar__ArgProps,
          internalVariantPropNames: Plasmic_320PxAccouncementBar__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_320PxAccouncementBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div228") {
    func.displayName = "Plasmic_320PxAccouncementBar";
  } else {
    func.displayName = `Plasmic_320PxAccouncementBar.${nodeName}`;
  }
  return func;
}

export const Plasmic_320PxAccouncementBar = Object.assign(
  // Top-level Plasmic_320PxAccouncementBar renders the root element
  makeNodeComponent("div228"),
  {
    // Helper components rendering sub-elements
    freeShippingOnOr: makeNodeComponent("freeShippingOnOr"),
    text: makeNodeComponent("text"),

    // Metadata about props expected for Plasmic_320PxAccouncementBar
    internalVariantProps: Plasmic_320PxAccouncementBar__VariantProps,
    internalArgProps: Plasmic_320PxAccouncementBar__ArgProps
  }
);

export default Plasmic_320PxAccouncementBar;
/* prettier-ignore-end */
