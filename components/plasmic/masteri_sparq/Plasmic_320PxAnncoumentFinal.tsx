// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: st0_xSRO6Cbj6

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
import _320PxAnnouncementBarIi from "../../_320PxAnnouncementBarIi"; // plasmic-import: 73_C_lZn92bFi/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./Plasmic_320PxAnncoumentFinal.module.css"; // plasmic-import: st0_xSRO6Cbj6/css

export type Plasmic_320PxAnncoumentFinal__VariantMembers = {};
export type Plasmic_320PxAnncoumentFinal__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320PxAnncoumentFinal__VariantsArgs;
export const Plasmic_320PxAnncoumentFinal__VariantProps =
  new Array<VariantPropType>();

export type Plasmic_320PxAnncoumentFinal__ArgsType = {};
type ArgPropType = keyof Plasmic_320PxAnncoumentFinal__ArgsType;
export const Plasmic_320PxAnncoumentFinal__ArgProps = new Array<ArgPropType>();

export type Plasmic_320PxAnncoumentFinal__OverridesType = {
  div225?: p.Flex<"div">;
  _320PxAnnouncementBarIi?: p.Flex<typeof _320PxAnnouncementBarIi>;
};

export interface Default_320PxAnncoumentFinalProps {
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

function Plasmic_320PxAnncoumentFinal__RenderFunc(props: {
  variants: Plasmic_320PxAnncoumentFinal__VariantsArgs;
  args: Plasmic_320PxAnncoumentFinal__ArgsType;
  overrides: Plasmic_320PxAnncoumentFinal__OverridesType;
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
      data-plasmic-name={"div225"}
      data-plasmic-override={overrides.div225}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.div225
      )}
    >
      <_320PxAnnouncementBarIi
        data-plasmic-name={"_320PxAnnouncementBarIi"}
        data-plasmic-override={overrides._320PxAnnouncementBarIi}
        className={classNames("__wab_instance", sty._320PxAnnouncementBarIi)}
      />
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  div225: ["div225", "_320PxAnnouncementBarIi"],
  _320PxAnnouncementBarIi: ["_320PxAnnouncementBarIi"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  div225: "div";
  _320PxAnnouncementBarIi: typeof _320PxAnnouncementBarIi;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320PxAnncoumentFinal__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320PxAnncoumentFinal__VariantsArgs;
    args?: Plasmic_320PxAnncoumentFinal__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320PxAnncoumentFinal__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320PxAnncoumentFinal__ArgsType,
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
          internalArgPropNames: Plasmic_320PxAnncoumentFinal__ArgProps,
          internalVariantPropNames: Plasmic_320PxAnncoumentFinal__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_320PxAnncoumentFinal__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "div225") {
    func.displayName = "Plasmic_320PxAnncoumentFinal";
  } else {
    func.displayName = `Plasmic_320PxAnncoumentFinal.${nodeName}`;
  }
  return func;
}

export const Plasmic_320PxAnncoumentFinal = Object.assign(
  // Top-level Plasmic_320PxAnncoumentFinal renders the root element
  makeNodeComponent("div225"),
  {
    // Helper components rendering sub-elements
    _320PxAnnouncementBarIi: makeNodeComponent("_320PxAnnouncementBarIi"),

    // Metadata about props expected for Plasmic_320PxAnncoumentFinal
    internalVariantProps: Plasmic_320PxAnncoumentFinal__VariantProps,
    internalArgProps: Plasmic_320PxAnncoumentFinal__ArgProps
  }
);

export default Plasmic_320PxAnncoumentFinal;
/* prettier-ignore-end */
