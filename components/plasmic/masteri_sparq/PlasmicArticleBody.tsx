// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: BC-vwiKgXIJER

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
import AsFeaturedIn from "../../AsFeaturedIn"; // plasmic-import: TyTbxxRcv7JA/component
import ReviewCard from "../../ReviewCard"; // plasmic-import: e6lEcbqjA-B4/component
import SideCta from "../../SideCta"; // plasmic-import: TUdrtJf2IXv-/component

import { useScreenVariants as useScreenVariantssuXxHpH6GpmS } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: SUXxHpH6GpmS/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_masteri_sparq.module.css"; // plasmic-import: wJD4VsJTYW6gZPn3AUEzqs/projectcss
import sty from "./PlasmicArticleBody.module.css"; // plasmic-import: BC-vwiKgXIJER/css

export type PlasmicArticleBody__VariantMembers = {};
export type PlasmicArticleBody__VariantsArgs = {};
type VariantPropType = keyof PlasmicArticleBody__VariantsArgs;
export const PlasmicArticleBody__VariantProps = new Array<VariantPropType>();

export type PlasmicArticleBody__ArgsType = {};
type ArgPropType = keyof PlasmicArticleBody__ArgsType;
export const PlasmicArticleBody__ArgProps = new Array<ArgPropType>();

export type PlasmicArticleBody__OverridesType = {
  body?: p.Flex<"div">;
  article?: p.Flex<"div">;
  articleBody?: p.Flex<"div">;
  asFeaturedIn?: p.Flex<typeof AsFeaturedIn>;
  heroImage?: p.Flex<typeof p.PlasmicImg>;
  paragraph1?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  image1?: p.Flex<typeof p.PlasmicImg>;
  paragraph2?: p.Flex<"div">;
  image2?: p.Flex<typeof p.PlasmicImg>;
  paragraph3?: p.Flex<"div">;
  image3?: p.Flex<typeof p.PlasmicImg>;
  paragraph4?: p.Flex<"div">;
  image4?: p.Flex<typeof p.PlasmicImg>;
  paragraph5?: p.Flex<"div">;
  image5?: p.Flex<typeof p.PlasmicImg>;
  text?: p.Flex<"div">;
  paragraph6?: p.Flex<"div">;
  image6?: p.Flex<typeof p.PlasmicImg>;
  aOutroH1?: p.Flex<"div">;
  aOutroH2?: p.Flex<"div">;
  sCta?: p.Flex<"button">;
  aOutroH3?: p.Flex<"div">;
  reviews?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
  sideCta?: p.Flex<typeof SideCta>;
};

export interface DefaultArticleBodyProps {
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

function PlasmicArticleBody__RenderFunc(props: {
  variants: PlasmicArticleBody__VariantsArgs;
  args: PlasmicArticleBody__ArgsType;
  overrides: PlasmicArticleBody__OverridesType;
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
      data-plasmic-name={"body"}
      data-plasmic-override={overrides.body}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.body
      )}
    >
      <div className={classNames(projectcss.all, sty.columns__oWjPm)}>
        <div
          data-plasmic-name={"article"}
          data-plasmic-override={overrides.article}
          className={classNames(projectcss.all, sty.article)}
        >
          {true ? (
            <div
              data-plasmic-name={"articleBody"}
              data-plasmic-override={overrides.articleBody}
              className={classNames(projectcss.all, sty.articleBody)}
            >
              {(
                hasVariant(globalVariants, "screen", "smallestMobile")
                  ? true
                  : true
              ) ? (
                <AsFeaturedIn
                  data-plasmic-name={"asFeaturedIn"}
                  data-plasmic-override={overrides.asFeaturedIn}
                  className={classNames("__wab_instance", sty.asFeaturedIn)}
                />
              ) : null}
              <p.PlasmicImg
                data-plasmic-name={"heroImage"}
                data-plasmic-override={overrides.heroImage}
                alt={""}
                className={classNames(sty.heroImage)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                link={
                  "https://www.quittinghacks.com/rechargeable-offer/" as const
                }
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/masteri_sparq/images/_9B498Fb8RechargableGif11Gif.gif",
                  fullWidth: 614,
                  fullHeight: 332,
                  aspectRatio: undefined
                }}
              />

              <div
                data-plasmic-name={"paragraph1"}
                data-plasmic-override={overrides.paragraph1}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.paragraph1
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "Imagine being nic-free but still getting that oh-so-satisfying throat hit along with delicious natural flavoring?\n\nIt almost sounds too good to be true, right? \n\nThe solution is simple... \n\nChoose natural ingredients, "
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"NOT"}
                  </span>
                  <React.Fragment>
                    {" Stimulants and Harmful Chemicals:"}
                  </React.Fragment>
                </React.Fragment>
              </div>
              <p.PlasmicLink
                data-plasmic-name={"link"}
                data-plasmic-override={overrides.link}
                className={classNames(projectcss.all, projectcss.a, sty.link)}
                component={Link}
                href={
                  "https://www.quittinghacks.com/rechargeable-offer/" as const
                }
                platform={"nextjs"}
              >
                <p.PlasmicImg
                  data-plasmic-name={"image1"}
                  data-plasmic-override={overrides.image1}
                  alt={""}
                  className={classNames(sty.image1)}
                  displayHeight={"auto" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={{
                    src: "/plasmic/masteri_sparq/images/screenshot20230224At43442PMpng.png",
                    fullWidth: 2352,
                    fullHeight: 802,
                    aspectRatio: undefined
                  }}
                />
              </p.PlasmicLink>
              <div
                data-plasmic-name={"paragraph2"}
                data-plasmic-override={overrides.paragraph2}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.paragraph2
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "Sparq Zero® is the evolution of inhalation. \n\nOur revolutionary diffuser comes in your choice of natural Sweet Mango or natural Cool Mint, providing you with the throat hit and intense flavoring you’re looking for... "
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"without the guilt! "}
                  </span>
                  <React.Fragment>
                    {
                      "\n\nWe spent 6 years developing a device that was health-focused, lab-tested and that produced real throat hit and flavor that would effectively eliminate your cravings."
                    }
                  </React.Fragment>
                </React.Fragment>
              </div>
              <p.PlasmicImg
                data-plasmic-name={"image2"}
                data-plasmic-override={overrides.image2}
                alt={""}
                className={classNames(sty.image2)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                link={
                  "https://www.quittinghacks.com/rechargeable-offer/" as const
                }
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/masteri_sparq/images/fbfd287ERechargableGif21Gif.gif",
                  fullWidth: 614,
                  fullHeight: 332,
                  aspectRatio: undefined
                }}
              />

              <div
                data-plasmic-name={"paragraph3"}
                data-plasmic-override={overrides.paragraph3}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.paragraph3
                )}
              >
                {
                  "Absolutely no expense was spared with regard to design-form and function:\n\nThis ultra-modern metal device is slim, compact, odorless, and easy to use at any time or place."
                }
              </div>
              <p.PlasmicImg
                data-plasmic-name={"image3"}
                data-plasmic-override={overrides.image3}
                alt={""}
                className={classNames(sty.image3)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/masteri_sparq/images/_4B6E6Ed1Devicegif.gif",
                  fullWidth: 669,
                  fullHeight: 575,
                  aspectRatio: undefined
                }}
              />

              <div
                data-plasmic-name={"paragraph4"}
                data-plasmic-override={overrides.paragraph4}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.paragraph4
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "Plus it comes it comes in your choice of two delicious flavors, Sweet Mango or Cool Mint!\n\nWe even offer a "
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"money-back guarantee"}
                  </span>
                  <React.Fragment>
                    {" if you don't absolutely love the taste and throat hit. "}
                  </React.Fragment>
                </React.Fragment>
              </div>
              <p.PlasmicImg
                data-plasmic-name={"image4"}
                data-plasmic-override={overrides.image4}
                alt={""}
                className={classNames(sty.image4)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/masteri_sparq/images/_6Bb5E2F0Image31000000000000000000028Png.png",
                  fullWidth: 614,
                  fullHeight: 332,
                  aspectRatio: undefined
                }}
              />

              <div
                data-plasmic-name={"paragraph5"}
                data-plasmic-override={overrides.paragraph5}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.paragraph5
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "Most importantly, ALL of our formulations have undergone extensive lab-testing.\n\nThe test results verified our all-natural, plant-based pod ingredients are safe even when heated into a vapor.\n\n"
                    }
                  </React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__qj5th
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__pvh0N
                        )}
                      >
                        {
                          "no harmful byproducts produced during the heating process (Gas chromatography)"
                        }
                      </li>
                    </ul>
                  }
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul__qzDPj
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__qzYo
                        )}
                      >
                        {"no evidence of carbonyl compounds"}
                      </li>
                    </ul>
                  }
                  <React.Fragment>{"\n"}</React.Fragment>
                  {
                    <ul
                      className={classNames(
                        projectcss.all,
                        projectcss.ul,
                        sty.ul___7LMuy
                      )}
                    >
                      <li
                        className={classNames(
                          projectcss.all,
                          projectcss.li,
                          projectcss.__wab_text,
                          sty.li__dVa3R
                        )}
                      >
                        {
                          "no evidence of “bad characters” known in the industry, including Diacetyl, Acrolein and Acetoin"
                        }
                      </li>
                    </ul>
                  }
                  <React.Fragment>{""}</React.Fragment>
                </React.Fragment>
              </div>
              <p.PlasmicImg
                data-plasmic-name={"image5"}
                data-plasmic-override={overrides.image5}
                alt={""}
                className={classNames(sty.image5)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/masteri_sparq/images/_12A7A7BbTestingSmallerImage10Yy0Fa0000000000000281Png.png",
                  fullWidth: 1258,
                  fullHeight: 550,
                  aspectRatio: undefined
                }}
              />

              {(
                hasVariant(globalVariants, "screen", "smallestMobile")
                  ? true
                  : true
              ) ? (
                <div
                  data-plasmic-name={"text"}
                  data-plasmic-override={overrides.text}
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text
                  )}
                >
                  <React.Fragment>
                    <span
                      className={"plasmic_default__all plasmic_default__span"}
                      style={{ fontWeight: 700 }}
                    >
                      {"Figure 1:"}
                    </span>
                    <React.Fragment>
                      {
                        " ISO-Accredited Laboratory certified safety and ensured the liquid remains stable even when heated."
                      }
                    </React.Fragment>
                  </React.Fragment>
                </div>
              ) : null}
              <div
                data-plasmic-name={"paragraph6"}
                data-plasmic-override={overrides.paragraph6}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.paragraph6
                )}
              >
                <React.Fragment>
                  <React.Fragment>
                    {
                      "We are incredibly proud to state that we have helped over 100,000 people quit while still allowing them to enjoy their habit, without any guilt!\n\nWe’ve made it easy for you to do the same, by offering a "
                    }
                  </React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"FREE"}
                  </span>
                  <React.Fragment>
                    {
                      " box of our Sweet Mango or Cool Mint pods, with your first purchase, auto-applied at checkout."
                    }
                  </React.Fragment>
                </React.Fragment>
              </div>
              <p.PlasmicImg
                data-plasmic-name={"image6"}
                data-plasmic-override={overrides.image6}
                alt={""}
                className={classNames(sty.image6)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/masteri_sparq/images/_7048E521Hit110000000000000000000281Png.png",
                  fullWidth: 614,
                  fullHeight: 332,
                  aspectRatio: undefined
                }}
              />

              <div
                data-plasmic-name={"aOutroH1"}
                data-plasmic-override={overrides.aOutroH1}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.aOutroH1
                )}
              >
                <React.Fragment>
                  <span
                    className={"plasmic_default__all plasmic_default__span"}
                    style={{ fontWeight: 700 }}
                  >
                    {"Click Here to Claim Free Sweet Mango or Cool Mint Pods!"}
                  </span>
                </React.Fragment>
              </div>
              <div
                data-plasmic-name={"aOutroH2"}
                data-plasmic-override={overrides.aOutroH2}
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.aOutroH2
                )}
              >
                {"Fast Same Day Shipping"}
              </div>
              <div className={classNames(projectcss.all, sty.columns__fkdsw)}>
                <div className={classNames(projectcss.all, sty.column__fiZkI)}>
                  <button
                    data-plasmic-name={"sCta"}
                    data-plasmic-override={overrides.sCta}
                    className={classNames(
                      projectcss.all,
                      projectcss.button,
                      projectcss.__wab_text,
                      sty.sCta
                    )}
                    ref={ref => {
                      $refs["sCta"] = ref;
                    }}
                  >
                    {"CLAIM FREE PODS 👉"}
                  </button>
                </div>
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : hasVariant(globalVariants, "screen", "smallestMobile")
                    ? true
                    : true
                ) ? (
                  <div
                    className={classNames(projectcss.all, sty.column__hHrFd)}
                  >
                    <p.PlasmicImg
                      alt={""}
                      className={classNames(sty.img__k78Eh)}
                      displayHeight={"auto" as const}
                      displayMaxHeight={"none" as const}
                      displayMaxWidth={"100%" as const}
                      displayMinHeight={"0" as const}
                      displayMinWidth={"0" as const}
                      displayWidth={"auto" as const}
                      loading={"lazy" as const}
                      src={{
                        src: "/plasmic/masteri_sparq/images/dividersvg.undefined",
                        fullWidth: 5,
                        fullHeight: 150,
                        aspectRatio: 0.033333
                      }}
                    />
                  </div>
                ) : null}
                <div className={classNames(projectcss.all, sty.column__oFs3G)}>
                  <div
                    data-plasmic-name={"aOutroH3"}
                    data-plasmic-override={overrides.aOutroH3}
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.aOutroH3
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "desktopOnly")
                      ? "100,000+ Happy Customers! In Stock - Ships Now."
                      : "100,000+ Happy Customers! In Stock - Ships Now."}
                  </div>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img___6PlZ4)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: "/plasmic/masteri_sparq/images/starpng2.png",
                      fullWidth: 142,
                      fullHeight: 21,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </div>
              <p.PlasmicImg
                alt={""}
                className={classNames(sty.img___15IEx)}
                displayHeight={"auto" as const}
                displayMaxHeight={"none" as const}
                displayMaxWidth={"100%" as const}
                displayMinHeight={"0" as const}
                displayMinWidth={"0" as const}
                displayWidth={"100%" as const}
                loading={"lazy" as const}
                src={{
                  src: "/plasmic/masteri_sparq/images/silverDeviceOutrogif.gif",
                  fullWidth: 669,
                  fullHeight: 575,
                  aspectRatio: undefined
                }}
              />
            </div>
          ) : null}
        </div>
        {true ? (
          <div
            data-plasmic-name={"reviews"}
            data-plasmic-override={overrides.reviews}
            className={classNames(projectcss.all, sty.reviews)}
          >
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <ReviewCard
                className={classNames("__wab_instance", sty.reviewCard__m6Uyy)}
              />

              <ReviewCard
                className={classNames("__wab_instance", sty.reviewCard__ubH9Y)}
              />

              <ReviewCard
                className={classNames("__wab_instance", sty.reviewCard__cRx6S)}
              />

              <SideCta
                data-plasmic-name={"sideCta"}
                data-plasmic-override={overrides.sideCta}
                className={classNames("__wab_instance", sty.sideCta)}
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  body: [
    "body",
    "article",
    "articleBody",
    "asFeaturedIn",
    "heroImage",
    "paragraph1",
    "link",
    "image1",
    "paragraph2",
    "image2",
    "paragraph3",
    "image3",
    "paragraph4",
    "image4",
    "paragraph5",
    "image5",
    "text",
    "paragraph6",
    "image6",
    "aOutroH1",
    "aOutroH2",
    "sCta",
    "aOutroH3",
    "reviews",
    "freeBox",
    "sideCta"
  ],
  article: [
    "article",
    "articleBody",
    "asFeaturedIn",
    "heroImage",
    "paragraph1",
    "link",
    "image1",
    "paragraph2",
    "image2",
    "paragraph3",
    "image3",
    "paragraph4",
    "image4",
    "paragraph5",
    "image5",
    "text",
    "paragraph6",
    "image6",
    "aOutroH1",
    "aOutroH2",
    "sCta",
    "aOutroH3"
  ],
  articleBody: [
    "articleBody",
    "asFeaturedIn",
    "heroImage",
    "paragraph1",
    "link",
    "image1",
    "paragraph2",
    "image2",
    "paragraph3",
    "image3",
    "paragraph4",
    "image4",
    "paragraph5",
    "image5",
    "text",
    "paragraph6",
    "image6",
    "aOutroH1",
    "aOutroH2",
    "sCta",
    "aOutroH3"
  ],
  asFeaturedIn: ["asFeaturedIn"],
  heroImage: ["heroImage"],
  paragraph1: ["paragraph1"],
  link: ["link", "image1"],
  image1: ["image1"],
  paragraph2: ["paragraph2"],
  image2: ["image2"],
  paragraph3: ["paragraph3"],
  image3: ["image3"],
  paragraph4: ["paragraph4"],
  image4: ["image4"],
  paragraph5: ["paragraph5"],
  image5: ["image5"],
  text: ["text"],
  paragraph6: ["paragraph6"],
  image6: ["image6"],
  aOutroH1: ["aOutroH1"],
  aOutroH2: ["aOutroH2"],
  sCta: ["sCta"],
  aOutroH3: ["aOutroH3"],
  reviews: ["reviews", "freeBox", "sideCta"],
  freeBox: ["freeBox", "sideCta"],
  sideCta: ["sideCta"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  body: "div";
  article: "div";
  articleBody: "div";
  asFeaturedIn: typeof AsFeaturedIn;
  heroImage: typeof p.PlasmicImg;
  paragraph1: "div";
  link: "a";
  image1: typeof p.PlasmicImg;
  paragraph2: "div";
  image2: typeof p.PlasmicImg;
  paragraph3: "div";
  image3: typeof p.PlasmicImg;
  paragraph4: "div";
  image4: typeof p.PlasmicImg;
  paragraph5: "div";
  image5: typeof p.PlasmicImg;
  text: "div";
  paragraph6: "div";
  image6: typeof p.PlasmicImg;
  aOutroH1: "div";
  aOutroH2: "div";
  sCta: "button";
  aOutroH3: "div";
  reviews: "div";
  freeBox: "div";
  sideCta: typeof SideCta;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicArticleBody__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicArticleBody__VariantsArgs;
    args?: PlasmicArticleBody__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicArticleBody__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicArticleBody__ArgsType,
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
          internalArgPropNames: PlasmicArticleBody__ArgProps,
          internalVariantPropNames: PlasmicArticleBody__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicArticleBody__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "body") {
    func.displayName = "PlasmicArticleBody";
  } else {
    func.displayName = `PlasmicArticleBody.${nodeName}`;
  }
  return func;
}

export const PlasmicArticleBody = Object.assign(
  // Top-level PlasmicArticleBody renders the root element
  makeNodeComponent("body"),
  {
    // Helper components rendering sub-elements
    article: makeNodeComponent("article"),
    articleBody: makeNodeComponent("articleBody"),
    asFeaturedIn: makeNodeComponent("asFeaturedIn"),
    heroImage: makeNodeComponent("heroImage"),
    paragraph1: makeNodeComponent("paragraph1"),
    link: makeNodeComponent("link"),
    image1: makeNodeComponent("image1"),
    paragraph2: makeNodeComponent("paragraph2"),
    image2: makeNodeComponent("image2"),
    paragraph3: makeNodeComponent("paragraph3"),
    image3: makeNodeComponent("image3"),
    paragraph4: makeNodeComponent("paragraph4"),
    image4: makeNodeComponent("image4"),
    paragraph5: makeNodeComponent("paragraph5"),
    image5: makeNodeComponent("image5"),
    text: makeNodeComponent("text"),
    paragraph6: makeNodeComponent("paragraph6"),
    image6: makeNodeComponent("image6"),
    aOutroH1: makeNodeComponent("aOutroH1"),
    aOutroH2: makeNodeComponent("aOutroH2"),
    sCta: makeNodeComponent("sCta"),
    aOutroH3: makeNodeComponent("aOutroH3"),
    reviews: makeNodeComponent("reviews"),
    freeBox: makeNodeComponent("freeBox"),
    sideCta: makeNodeComponent("sideCta"),

    // Metadata about props expected for PlasmicArticleBody
    internalVariantProps: PlasmicArticleBody__VariantProps,
    internalArgProps: PlasmicArticleBody__ArgProps
  }
);

export default PlasmicArticleBody;
/* prettier-ignore-end */