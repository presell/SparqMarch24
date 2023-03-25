// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: fGXhUEdlHzVAB

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
import sty from "./PlasmicNavBar414Px.module.css"; // plasmic-import: fGXhUEdlHzVAB/css

import Frame4Icon from "./icons/PlasmicIcon__Frame4"; // plasmic-import: 2dATcX4buyCX-/icon

export type PlasmicNavBar414Px__VariantMembers = {};
export type PlasmicNavBar414Px__VariantsArgs = {};
type VariantPropType = keyof PlasmicNavBar414Px__VariantsArgs;
export const PlasmicNavBar414Px__VariantProps = new Array<VariantPropType>();

export type PlasmicNavBar414Px__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar414Px__ArgsType;
export const PlasmicNavBar414Px__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar414Px__OverridesType = {
  div74?: p.Flex<"div">;
  svg4?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  svg?: p.Flex<"svg">;
};

export interface DefaultNavBar414PxProps {
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

function PlasmicNavBar414Px__RenderFunc(props: {
  variants: PlasmicNavBar414Px__VariantsArgs;
  args: PlasmicNavBar414Px__ArgsType;
  overrides: PlasmicNavBar414Px__OverridesType;
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
      data-plasmic-name={"div74"}
      data-plasmic-override={overrides.div74}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div74
      )}
    >
      <div
        data-plasmic-name={"svg4"}
        data-plasmic-override={overrides.svg4}
        className={classNames(projectcss.all, sty.svg4)}
      >
        <p.PlasmicLink
          data-plasmic-name={"link"}
          data-plasmic-override={overrides.link}
          className={classNames(projectcss.all, projectcss.a, sty.link)}
          component={Link}
          href={"https://shop.lifehacksplus.com/discount/QUIT15" as const}
          platform={"nextjs"}
        >
          <Frame4Icon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            className={classNames(projectcss.all, sty.svg)}
            role={"img"}
          />
        </p.PlasmicLink>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div74: ["div74", "svg4", "link", "svg"],
  svg4: ["svg4", "link", "svg"],
  link: ["link", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div74: "div";
  svg4: "div";
  link: "a";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar414Px__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar414Px__VariantsArgs;
    args?: PlasmicNavBar414Px__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar414Px__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicNavBar414Px__ArgsType,
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
          internalArgPropNames: PlasmicNavBar414Px__ArgProps,
          internalVariantPropNames: PlasmicNavBar414Px__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicNavBar414Px__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div74") {
    func.displayName = "PlasmicNavBar414Px";
  } else {
    func.displayName = `PlasmicNavBar414Px.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar414Px = Object.assign(
  // Top-level PlasmicNavBar414Px renders the root element
  makeNodeComponent("div74"),
  {
    // Helper components rendering sub-elements
    svg4: makeNodeComponent("svg4"),
    link: makeNodeComponent("link"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicNavBar414Px
    internalVariantProps: PlasmicNavBar414Px__VariantProps,
    internalArgProps: PlasmicNavBar414Px__ArgProps
  }
);

export default PlasmicNavBar414Px;
/* prettier-ignore-end */
