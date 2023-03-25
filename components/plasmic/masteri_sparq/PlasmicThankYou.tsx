// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: OM0b83QCLrUW

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

import { useScreenVariants as useScreenVariantssuXxHpH6GpmS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SUXxHpH6GpmS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./PlasmicThankYou.module.css"; // plasmic-import: OM0b83QCLrUW/css

export type PlasmicThankYou__VariantMembers = {};
export type PlasmicThankYou__VariantsArgs = {};
type VariantPropType = keyof PlasmicThankYou__VariantsArgs;
export const PlasmicThankYou__VariantProps = new Array<VariantPropType>();

export type PlasmicThankYou__ArgsType = {};
type ArgPropType = keyof PlasmicThankYou__ArgsType;
export const PlasmicThankYou__ArgProps = new Array<ArgPropType>();

export type PlasmicThankYou__OverridesType = {
  root?: p.Flex<"div">;
  section?: p.Flex<"section">;
};

export interface DefaultThankYouProps {}

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

function PlasmicThankYou__RenderFunc(props: {
  variants: PlasmicThankYou__VariantsArgs;
  args: PlasmicThankYou__ArgsType;
  overrides: PlasmicThankYou__OverridesType;
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
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary_large_image" />
        <title key="title">{PlasmicThankYou.pageMetadata.title}</title>
        <meta
          key="og:title"
          property="og:title"
          content={PlasmicThankYou.pageMetadata.title}
        />
        <meta
          key="twitter:title"
          name="twitter:title"
          content={PlasmicThankYou.pageMetadata.title}
        />
        <meta
          key="description"
          name="description"
          content={PlasmicThankYou.pageMetadata.description}
        />
        <meta
          key="og:description"
          property="og:description"
          content={PlasmicThankYou.pageMetadata.description}
        />
        <meta
          key="twitter:description"
          name="twitter:description"
          content={PlasmicThankYou.pageMetadata.description}
        />
        <meta
          key="og:image"
          property="og:image"
          content={PlasmicThankYou.pageMetadata.ogImageSrc}
        />
        <meta
          key="twitter:image"
          name="twitter:image"
          content={PlasmicThankYou.pageMetadata.ogImageSrc}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            sty.root
          )}
        >
          <p.Stack
            as={"section"}
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            hasGap={true}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__raUBn)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={
                hasVariant(globalVariants, "screen", "desktopOnly")
                  ? ("150px" as const)
                  : ("130px" as const)
              }
              loading={"lazy" as const}
              src={{
                src: "/plasmic/masteri_sparq/images/httpsAppunbouncecomPublishAssets4E7205Ac893811EdB5B00242A3C829A53U3DeuSparqBlackLogo108C08C000000000000028Png.png",
                fullWidth: 300,
                fullHeight: 300,
                aspectRatio: undefined
              }}
            />

            <p.PlasmicImg
              alt={""}
              className={classNames(sty.img__xcc1R)}
              displayHeight={"auto" as const}
              displayMaxHeight={"none" as const}
              displayMaxWidth={"100%" as const}
              displayMinHeight={"0" as const}
              displayMinWidth={"0" as const}
              displayWidth={"50px" as const}
              loading={"lazy" as const}
              src={{
                src: "/plasmic/masteri_sparq/images/eMail1F4E7Png.png",
                fullWidth: 160,
                fullHeight: 160,
                aspectRatio: undefined
              }}
            />

            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__zcBjs
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF", fontWeight: 700 }}
                >
                  {"Check Your Email"}
                </span>
              </React.Fragment>
            </div>
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__atamt
              )}
            >
              <React.Fragment>
                <span
                  className={"plasmic_default__all plasmic_default__span"}
                  style={{ color: "#FFFFFF", fontWeight: 700 }}
                >
                  {"We Sent You An Offer."}
                </span>
              </React.Fragment>
            </div>
          </p.Stack>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "section"],
  section: ["section"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "div";
  section: "section";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicThankYou__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicThankYou__VariantsArgs;
    args?: PlasmicThankYou__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicThankYou__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicThankYou__ArgsType,
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
          internalArgPropNames: PlasmicThankYou__ArgProps,
          internalVariantPropNames: PlasmicThankYou__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicThankYou__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicThankYou";
  } else {
    func.displayName = `PlasmicThankYou.${nodeName}`;
  }
  return func;
}

export const PlasmicThankYou = Object.assign(
  // Top-level PlasmicThankYou renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    section: makeNodeComponent("section"),

    // Metadata about props expected for PlasmicThankYou
    internalVariantProps: PlasmicThankYou__VariantProps,
    internalArgProps: PlasmicThankYou__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "Claim offer",
      description: "Check Your Email. We Sent You An offer",
      ogImageSrc:
        "https://site-assets.plasmic.app/a6f2cab224eeb7b022dfd5ca826b33f4.jpg",
      canonical: ""
    }
  }
);

export default PlasmicThankYou;
/* prettier-ignore-end */