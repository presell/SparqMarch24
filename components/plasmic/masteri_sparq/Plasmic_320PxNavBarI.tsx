// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: tEyzV0RFqLV4T

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
import _320PxNavBar from "../../_320PxNavBar"; // plasmic-import: j8fpc21nEqIdr/component

import { useScreenVariants as useScreenVariantssuXxHpH6GpmS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SUXxHpH6GpmS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./Plasmic_320PxNavBarI.module.css"; // plasmic-import: tEyzV0RFqLV4T/css

import Frame5Icon from "./icons/PlasmicIcon__Frame5"; // plasmic-import: K98x-NTfpcyN5/icon

export type Plasmic_320PxNavBarI__VariantMembers = {};
export type Plasmic_320PxNavBarI__VariantsArgs = {};
type VariantPropType = keyof Plasmic_320PxNavBarI__VariantsArgs;
export const Plasmic_320PxNavBarI__VariantProps = new Array<VariantPropType>();

export type Plasmic_320PxNavBarI__ArgsType = {};
type ArgPropType = keyof Plasmic_320PxNavBarI__ArgsType;
export const Plasmic_320PxNavBarI__ArgProps = new Array<ArgPropType>();

export type Plasmic_320PxNavBarI__OverridesType = {
  header3?: p.Flex<"div">;
  _320PxNavBar?: p.Flex<typeof _320PxNavBar>;
  sparqLogo125Xpng3?: p.Flex<"a"> & Partial<LinkProps>;
  div230?: p.Flex<"a"> & Partial<LinkProps>;
  svg17?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface Default_320PxNavBarIProps {
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

function Plasmic_320PxNavBarI__RenderFunc(props: {
  variants: Plasmic_320PxNavBarI__VariantsArgs;
  args: Plasmic_320PxNavBarI__ArgsType;
  overrides: Plasmic_320PxNavBarI__OverridesType;
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

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantssuXxHpH6GpmS()
  });

  return (
    <div
      data-plasmic-name={"header3"}
      data-plasmic-override={overrides.header3}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.header3
      )}
    >
      <_320PxNavBar
        data-plasmic-name={"_320PxNavBar"}
        data-plasmic-override={overrides._320PxNavBar}
        className={classNames("__wab_instance", sty._320PxNavBar)}
      />

      <p.PlasmicLink
        data-plasmic-name={"sparqLogo125Xpng3"}
        data-plasmic-override={overrides.sparqLogo125Xpng3}
        className={classNames(
          projectcss.all,
          projectcss.a,
          sty.sparqLogo125Xpng3
        )}
        component={Link}
        href={"https://shop.lifehacksplus.com/discount/QUIT15" as const}
        platform={"nextjs"}
      />

      <p.PlasmicLink
        data-plasmic-name={"div230"}
        data-plasmic-override={overrides.div230}
        className={classNames(projectcss.all, projectcss.a, sty.div230)}
        component={Link}
        href={"https://www.sparqlife.com/cart" as const}
        platform={"nextjs"}
      >
        <div
          data-plasmic-name={"svg17"}
          data-plasmic-override={overrides.svg17}
          className={classNames(projectcss.all, sty.svg17)}
        >
          {(
            hasVariant(globalVariants, "screen", "smallestMobile") ? true : true
          ) ? (
            <Frame5Icon
              data-plasmic-name={"svg"}
              data-plasmic-override={overrides.svg}
              className={classNames(projectcss.all, sty.svg)}
              role={"img"}
            />
          ) : null}
        </div>
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  header3: [
    "header3",
    "_320PxNavBar",
    "sparqLogo125Xpng3",
    "div230",
    "svg17",
    "svg"
  ],
  _320PxNavBar: ["_320PxNavBar"],
  sparqLogo125Xpng3: ["sparqLogo125Xpng3"],
  div230: ["div230", "svg17", "svg"],
  svg17: ["svg17", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  header3: "div";
  _320PxNavBar: typeof _320PxNavBar;
  sparqLogo125Xpng3: "a";
  div230: "a";
  svg17: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_320PxNavBarI__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_320PxNavBarI__VariantsArgs;
    args?: Plasmic_320PxNavBarI__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<Plasmic_320PxNavBarI__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      Plasmic_320PxNavBarI__ArgsType,
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
          internalArgPropNames: Plasmic_320PxNavBarI__ArgProps,
          internalVariantPropNames: Plasmic_320PxNavBarI__VariantProps
        }),
      [props, nodeName]
    );
    return Plasmic_320PxNavBarI__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "header3") {
    func.displayName = "Plasmic_320PxNavBarI";
  } else {
    func.displayName = `Plasmic_320PxNavBarI.${nodeName}`;
  }
  return func;
}

export const Plasmic_320PxNavBarI = Object.assign(
  // Top-level Plasmic_320PxNavBarI renders the root element
  makeNodeComponent("header3"),
  {
    // Helper components rendering sub-elements
    _320PxNavBar: makeNodeComponent("_320PxNavBar"),
    sparqLogo125Xpng3: makeNodeComponent("sparqLogo125Xpng3"),
    div230: makeNodeComponent("div230"),
    svg17: makeNodeComponent("svg17"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for Plasmic_320PxNavBarI
    internalVariantProps: Plasmic_320PxNavBarI__VariantProps,
    internalArgProps: Plasmic_320PxNavBarI__ArgProps
  }
);

export default Plasmic_320PxNavBarI;
/* prettier-ignore-end */
