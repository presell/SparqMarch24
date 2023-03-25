// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: wJD4VsJTYW6gZPn3AUEzqs
// Component: EgxvzUtVYBMDi

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
import sty from "./PlasmicFooter1440Px.module.css"; // plasmic-import: EgxvzUtVYBMDi/css

import Frame6Icon from "./icons/PlasmicIcon__Frame6"; // plasmic-import: 2mEDeeeCiYqE2/icon
import Frame7Icon from "./icons/PlasmicIcon__Frame7"; // plasmic-import: 6LBkQ0fgEHgGo/icon
import Frame8Icon from "./icons/PlasmicIcon__Frame8"; // plasmic-import: trCZhmw33TFLM/icon

export type PlasmicFooter1440Px__VariantMembers = {};
export type PlasmicFooter1440Px__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter1440Px__VariantsArgs;
export const PlasmicFooter1440Px__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter1440Px__ArgsType = {};
type ArgPropType = keyof PlasmicFooter1440Px__ArgsType;
export const PlasmicFooter1440Px__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter1440Px__OverridesType = {
  divshopifySectionFooter2?: p.Flex<"div">;
  div132?: p.Flex<"div">;
  footerLogopng2?: p.Flex<"a"> & Partial<LinkProps>;
  div133?: p.Flex<"div">;
  div134?: p.Flex<"div">;
  div135?: p.Flex<"div">;
  company2?: p.Flex<"div">;
  ul7?: p.Flex<"div">;
  about2?: p.Flex<"div">;
  press2?: p.Flex<"div">;
  howItWorks2?: p.Flex<"div">;
  contact2?: p.Flex<"div">;
  brandAmbassador2?: p.Flex<"div">;
  becomeASeller2?: p.Flex<"div">;
  philosophy2?: p.Flex<"div">;
  philanthropy2?: p.Flex<"div">;
  helpFaQs2?: p.Flex<"div">;
  div136?: p.Flex<"div">;
  products2?: p.Flex<"div">;
  ul8?: p.Flex<"div">;
  rechargeable2?: p.Flex<"div">;
  disposable2?: p.Flex<"div">;
  giftCards2?: p.Flex<"div">;
  div137?: p.Flex<"div">;
  legal2?: p.Flex<"div">;
  ul9?: p.Flex<"div">;
  termsOfUse2?: p.Flex<"div">;
  privacyPolicy2?: p.Flex<"div">;
  shipping2?: p.Flex<"div">;
  returnPolicy2?: p.Flex<"div">;
  warranty2?: p.Flex<"div">;
  div138?: p.Flex<"div">;
  div139?: p.Flex<"div">;
  followUs2?: p.Flex<"div">;
  ul10?: p.Flex<"div">;
  svg8?: p.Flex<"div">;
  svg9?: p.Flex<"div">;
  svg10?: p.Flex<"div">;
  span3?: p.Flex<"div">;
  facebook?: p.Flex<"div">;
  span4?: p.Flex<"div">;
  instagram?: p.Flex<"div">;
  span5?: p.Flex<"div">;
  twitter?: p.Flex<"div">;
  div140?: p.Flex<"div">;
  div141?: p.Flex<"div">;
  span6?: p.Flex<"div">;
  joinNewsletter?: p.Flex<"div">;
  div142?: p.Flex<"div">;
  div143?: p.Flex<"div">;
  enterYourEmailAddress?: p.Flex<"div">;
  divplaceholder?: p.Flex<"div">;
  button?: p.Flex<"div">;
  shopifySecureBadgeLightShadowpng2?: p.Flex<"div">;
};

export interface DefaultFooter1440PxProps {
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

function PlasmicFooter1440Px__RenderFunc(props: {
  variants: PlasmicFooter1440Px__VariantsArgs;
  args: PlasmicFooter1440Px__ArgsType;
  overrides: PlasmicFooter1440Px__OverridesType;
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
      data-plasmic-name={"divshopifySectionFooter2"}
      data-plasmic-override={overrides.divshopifySectionFooter2}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        sty.divshopifySectionFooter2
      )}
    >
      <div
        data-plasmic-name={"div132"}
        data-plasmic-override={overrides.div132}
        className={classNames(projectcss.all, sty.div132)}
      >
        <p.PlasmicLink
          data-plasmic-name={"footerLogopng2"}
          data-plasmic-override={overrides.footerLogopng2}
          className={classNames(
            projectcss.all,
            projectcss.a,
            sty.footerLogopng2
          )}
          component={Link}
          href={"https://shop.lifehacksplus.com/discount/QUIT15" as const}
          platform={"nextjs"}
        />

        <div
          data-plasmic-name={"div133"}
          data-plasmic-override={overrides.div133}
          className={classNames(projectcss.all, sty.div133)}
        >
          <div
            data-plasmic-name={"div134"}
            data-plasmic-override={overrides.div134}
            className={classNames(projectcss.all, sty.div134)}
          >
            <div
              data-plasmic-name={"div135"}
              data-plasmic-override={overrides.div135}
              className={classNames(projectcss.all, sty.div135)}
            >
              <div
                data-plasmic-name={"company2"}
                data-plasmic-override={overrides.company2}
                className={classNames(projectcss.all, sty.company2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__ptlLr
                  )}
                >
                  {"Company"}
                </div>
              </div>
              <div
                data-plasmic-name={"ul7"}
                data-plasmic-override={overrides.ul7}
                className={classNames(projectcss.all, sty.ul7)}
              >
                <div
                  data-plasmic-name={"about2"}
                  data-plasmic-override={overrides.about2}
                  className={classNames(projectcss.all, sty.about2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__rzz1X
                    )}
                  >
                    {"About"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"press2"}
                  data-plasmic-override={overrides.press2}
                  className={classNames(projectcss.all, sty.press2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zOnbH
                    )}
                  >
                    {"Press"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"howItWorks2"}
                  data-plasmic-override={overrides.howItWorks2}
                  className={classNames(projectcss.all, sty.howItWorks2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__loi0H
                    )}
                  >
                    {"How it works"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"contact2"}
                  data-plasmic-override={overrides.contact2}
                  className={classNames(projectcss.all, sty.contact2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__lXxNs
                    )}
                  >
                    {"Contact"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"brandAmbassador2"}
                  data-plasmic-override={overrides.brandAmbassador2}
                  className={classNames(projectcss.all, sty.brandAmbassador2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__waNnq
                    )}
                  >
                    {"Brand Ambassador"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"becomeASeller2"}
                  data-plasmic-override={overrides.becomeASeller2}
                  className={classNames(projectcss.all, sty.becomeASeller2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__h5Ae
                    )}
                  >
                    {"Become a seller"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"philosophy2"}
                  data-plasmic-override={overrides.philosophy2}
                  className={classNames(projectcss.all, sty.philosophy2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__hIC
                    )}
                  >
                    {"Philosophy"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"philanthropy2"}
                  data-plasmic-override={overrides.philanthropy2}
                  className={classNames(projectcss.all, sty.philanthropy2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__a1RN
                    )}
                  >
                    {"Philanthropy"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"helpFaQs2"}
                  data-plasmic-override={overrides.helpFaQs2}
                  className={classNames(projectcss.all, sty.helpFaQs2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__yr5Mb
                    )}
                  >
                    {"Help/FAQs"}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"div136"}
              data-plasmic-override={overrides.div136}
              className={classNames(projectcss.all, sty.div136)}
            >
              <div
                data-plasmic-name={"products2"}
                data-plasmic-override={overrides.products2}
                className={classNames(projectcss.all, sty.products2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__xgbEm
                  )}
                >
                  {"Products"}
                </div>
              </div>
              <div
                data-plasmic-name={"ul8"}
                data-plasmic-override={overrides.ul8}
                className={classNames(projectcss.all, sty.ul8)}
              >
                <div
                  data-plasmic-name={"rechargeable2"}
                  data-plasmic-override={overrides.rechargeable2}
                  className={classNames(projectcss.all, sty.rechargeable2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___5Moky
                    )}
                  >
                    {"Rechargeable"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"disposable2"}
                  data-plasmic-override={overrides.disposable2}
                  className={classNames(projectcss.all, sty.disposable2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__sGB5
                    )}
                  >
                    {"Disposable"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"giftCards2"}
                  data-plasmic-override={overrides.giftCards2}
                  className={classNames(projectcss.all, sty.giftCards2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__s5YfQ
                    )}
                  >
                    {"Gift Cards"}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"div137"}
              data-plasmic-override={overrides.div137}
              className={classNames(projectcss.all, sty.div137)}
            >
              <div
                data-plasmic-name={"legal2"}
                data-plasmic-override={overrides.legal2}
                className={classNames(projectcss.all, sty.legal2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__wss2C
                  )}
                >
                  {"Legal"}
                </div>
              </div>
              <div
                data-plasmic-name={"ul9"}
                data-plasmic-override={overrides.ul9}
                className={classNames(projectcss.all, sty.ul9)}
              >
                <div
                  data-plasmic-name={"termsOfUse2"}
                  data-plasmic-override={overrides.termsOfUse2}
                  className={classNames(projectcss.all, sty.termsOfUse2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__c2O9S
                    )}
                  >
                    {"Terms of use"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"privacyPolicy2"}
                  data-plasmic-override={overrides.privacyPolicy2}
                  className={classNames(projectcss.all, sty.privacyPolicy2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ahuZv
                    )}
                  >
                    {"Privacy Policy"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"shipping2"}
                  data-plasmic-override={overrides.shipping2}
                  className={classNames(projectcss.all, sty.shipping2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fXtBp
                    )}
                  >
                    {"Shipping"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"returnPolicy2"}
                  data-plasmic-override={overrides.returnPolicy2}
                  className={classNames(projectcss.all, sty.returnPolicy2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__o0MK
                    )}
                  >
                    {"Return Policy"}
                  </div>
                </div>
                <div
                  data-plasmic-name={"warranty2"}
                  data-plasmic-override={overrides.warranty2}
                  className={classNames(projectcss.all, sty.warranty2)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__kV52Y
                    )}
                  >
                    {"Warranty"}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            data-plasmic-name={"div138"}
            data-plasmic-override={overrides.div138}
            className={classNames(projectcss.all, sty.div138)}
          >
            <div
              data-plasmic-name={"div139"}
              data-plasmic-override={overrides.div139}
              className={classNames(projectcss.all, sty.div139)}
            >
              <div
                data-plasmic-name={"followUs2"}
                data-plasmic-override={overrides.followUs2}
                className={classNames(projectcss.all, sty.followUs2)}
              >
                <div
                  className={classNames(
                    projectcss.all,
                    projectcss.__wab_text,
                    sty.text__u7Y0Y
                  )}
                >
                  {"Follow US"}
                </div>
              </div>
              <div
                data-plasmic-name={"ul10"}
                data-plasmic-override={overrides.ul10}
                className={classNames(projectcss.all, sty.ul10)}
              >
                <div
                  data-plasmic-name={"svg8"}
                  data-plasmic-override={overrides.svg8}
                  className={classNames(projectcss.all, sty.svg8)}
                >
                  {(
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? true
                      : true
                  ) ? (
                    <Frame6Icon
                      className={classNames(projectcss.all, sty.svg__zvHk5)}
                      role={"img"}
                    />
                  ) : null}
                </div>
                <div
                  data-plasmic-name={"svg9"}
                  data-plasmic-override={overrides.svg9}
                  className={classNames(projectcss.all, sty.svg9)}
                >
                  {(
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? true
                      : true
                  ) ? (
                    <Frame7Icon
                      className={classNames(projectcss.all, sty.svg__pTh7W)}
                      role={"img"}
                    />
                  ) : null}
                </div>
                <div
                  data-plasmic-name={"svg10"}
                  data-plasmic-override={overrides.svg10}
                  className={classNames(projectcss.all, sty.svg10)}
                >
                  {(
                    hasVariant(globalVariants, "screen", "desktopOnly")
                      ? true
                      : true
                  ) ? (
                    <Frame8Icon
                      className={classNames(projectcss.all, sty.svg__mj5Gn)}
                      role={"img"}
                    />
                  ) : null}
                </div>
              </div>
              <div
                data-plasmic-name={"span3"}
                data-plasmic-override={overrides.span3}
                className={classNames(projectcss.all, sty.span3)}
              >
                <div
                  data-plasmic-name={"facebook"}
                  data-plasmic-override={overrides.facebook}
                  className={classNames(projectcss.all, sty.facebook)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__zLjdV
                    )}
                  >
                    {"Facebook"}
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"span4"}
                data-plasmic-override={overrides.span4}
                className={classNames(projectcss.all, sty.span4)}
              >
                <div
                  data-plasmic-name={"instagram"}
                  data-plasmic-override={overrides.instagram}
                  className={classNames(projectcss.all, sty.instagram)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fkwS5
                    )}
                  >
                    {"Instagram"}
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"span5"}
                data-plasmic-override={overrides.span5}
                className={classNames(projectcss.all, sty.span5)}
              >
                <div
                  data-plasmic-name={"twitter"}
                  data-plasmic-override={overrides.twitter}
                  className={classNames(projectcss.all, sty.twitter)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__k8Wia
                    )}
                  >
                    {"Twitter"}
                  </div>
                </div>
              </div>
            </div>
            <div
              data-plasmic-name={"div140"}
              data-plasmic-override={overrides.div140}
              className={classNames(projectcss.all, sty.div140)}
            >
              <div
                data-plasmic-name={"div141"}
                data-plasmic-override={overrides.div141}
                className={classNames(projectcss.all, sty.div141)}
              >
                <div
                  data-plasmic-name={"span6"}
                  data-plasmic-override={overrides.span6}
                  className={classNames(projectcss.all, sty.span6)}
                >
                  <div
                    data-plasmic-name={"joinNewsletter"}
                    data-plasmic-override={overrides.joinNewsletter}
                    className={classNames(projectcss.all, sty.joinNewsletter)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__kDfK
                      )}
                    >
                      {"JOIN NEWSLETTER"}
                    </div>
                  </div>
                </div>
                <div
                  data-plasmic-name={"div142"}
                  data-plasmic-override={overrides.div142}
                  className={classNames(projectcss.all, sty.div142)}
                >
                  <div
                    data-plasmic-name={"div143"}
                    data-plasmic-override={overrides.div143}
                    className={classNames(projectcss.all, sty.div143)}
                  >
                    <div
                      data-plasmic-name={"enterYourEmailAddress"}
                      data-plasmic-override={overrides.enterYourEmailAddress}
                      className={classNames(
                        projectcss.all,
                        sty.enterYourEmailAddress
                      )}
                    >
                      <div
                        data-plasmic-name={"divplaceholder"}
                        data-plasmic-override={overrides.divplaceholder}
                        className={classNames(
                          projectcss.all,
                          sty.divplaceholder
                        )}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            projectcss.__wab_text,
                            sty.text__aRdKn
                          )}
                        >
                          {"Enter your email address"}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-plasmic-name={"button"}
                    data-plasmic-override={overrides.button}
                    className={classNames(projectcss.all, sty.button)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__xElMz
                      )}
                    >
                      {"→"}
                    </div>
                  </div>
                </div>
              </div>
              <div
                data-plasmic-name={"shopifySecureBadgeLightShadowpng2"}
                data-plasmic-override={
                  overrides.shopifySecureBadgeLightShadowpng2
                }
                className={classNames(
                  projectcss.all,
                  sty.shopifySecureBadgeLightShadowpng2
                )}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  divshopifySectionFooter2: [
    "divshopifySectionFooter2",
    "div132",
    "footerLogopng2",
    "div133",
    "div134",
    "div135",
    "company2",
    "ul7",
    "about2",
    "press2",
    "howItWorks2",
    "contact2",
    "brandAmbassador2",
    "becomeASeller2",
    "philosophy2",
    "philanthropy2",
    "helpFaQs2",
    "div136",
    "products2",
    "ul8",
    "rechargeable2",
    "disposable2",
    "giftCards2",
    "div137",
    "legal2",
    "ul9",
    "termsOfUse2",
    "privacyPolicy2",
    "shipping2",
    "returnPolicy2",
    "warranty2",
    "div138",
    "div139",
    "followUs2",
    "ul10",
    "svg8",
    "svg9",
    "svg10",
    "span3",
    "facebook",
    "span4",
    "instagram",
    "span5",
    "twitter",
    "div140",
    "div141",
    "span6",
    "joinNewsletter",
    "div142",
    "div143",
    "enterYourEmailAddress",
    "divplaceholder",
    "button",
    "shopifySecureBadgeLightShadowpng2"
  ],
  div132: [
    "div132",
    "footerLogopng2",
    "div133",
    "div134",
    "div135",
    "company2",
    "ul7",
    "about2",
    "press2",
    "howItWorks2",
    "contact2",
    "brandAmbassador2",
    "becomeASeller2",
    "philosophy2",
    "philanthropy2",
    "helpFaQs2",
    "div136",
    "products2",
    "ul8",
    "rechargeable2",
    "disposable2",
    "giftCards2",
    "div137",
    "legal2",
    "ul9",
    "termsOfUse2",
    "privacyPolicy2",
    "shipping2",
    "returnPolicy2",
    "warranty2",
    "div138",
    "div139",
    "followUs2",
    "ul10",
    "svg8",
    "svg9",
    "svg10",
    "span3",
    "facebook",
    "span4",
    "instagram",
    "span5",
    "twitter",
    "div140",
    "div141",
    "span6",
    "joinNewsletter",
    "div142",
    "div143",
    "enterYourEmailAddress",
    "divplaceholder",
    "button",
    "shopifySecureBadgeLightShadowpng2"
  ],
  footerLogopng2: ["footerLogopng2"],
  div133: [
    "div133",
    "div134",
    "div135",
    "company2",
    "ul7",
    "about2",
    "press2",
    "howItWorks2",
    "contact2",
    "brandAmbassador2",
    "becomeASeller2",
    "philosophy2",
    "philanthropy2",
    "helpFaQs2",
    "div136",
    "products2",
    "ul8",
    "rechargeable2",
    "disposable2",
    "giftCards2",
    "div137",
    "legal2",
    "ul9",
    "termsOfUse2",
    "privacyPolicy2",
    "shipping2",
    "returnPolicy2",
    "warranty2",
    "div138",
    "div139",
    "followUs2",
    "ul10",
    "svg8",
    "svg9",
    "svg10",
    "span3",
    "facebook",
    "span4",
    "instagram",
    "span5",
    "twitter",
    "div140",
    "div141",
    "span6",
    "joinNewsletter",
    "div142",
    "div143",
    "enterYourEmailAddress",
    "divplaceholder",
    "button",
    "shopifySecureBadgeLightShadowpng2"
  ],
  div134: [
    "div134",
    "div135",
    "company2",
    "ul7",
    "about2",
    "press2",
    "howItWorks2",
    "contact2",
    "brandAmbassador2",
    "becomeASeller2",
    "philosophy2",
    "philanthropy2",
    "helpFaQs2",
    "div136",
    "products2",
    "ul8",
    "rechargeable2",
    "disposable2",
    "giftCards2",
    "div137",
    "legal2",
    "ul9",
    "termsOfUse2",
    "privacyPolicy2",
    "shipping2",
    "returnPolicy2",
    "warranty2"
  ],
  div135: [
    "div135",
    "company2",
    "ul7",
    "about2",
    "press2",
    "howItWorks2",
    "contact2",
    "brandAmbassador2",
    "becomeASeller2",
    "philosophy2",
    "philanthropy2",
    "helpFaQs2"
  ],
  company2: ["company2"],
  ul7: [
    "ul7",
    "about2",
    "press2",
    "howItWorks2",
    "contact2",
    "brandAmbassador2",
    "becomeASeller2",
    "philosophy2",
    "philanthropy2",
    "helpFaQs2"
  ],
  about2: ["about2"],
  press2: ["press2"],
  howItWorks2: ["howItWorks2"],
  contact2: ["contact2"],
  brandAmbassador2: ["brandAmbassador2"],
  becomeASeller2: ["becomeASeller2"],
  philosophy2: ["philosophy2"],
  philanthropy2: ["philanthropy2"],
  helpFaQs2: ["helpFaQs2"],
  div136: [
    "div136",
    "products2",
    "ul8",
    "rechargeable2",
    "disposable2",
    "giftCards2"
  ],
  products2: ["products2"],
  ul8: ["ul8", "rechargeable2", "disposable2", "giftCards2"],
  rechargeable2: ["rechargeable2"],
  disposable2: ["disposable2"],
  giftCards2: ["giftCards2"],
  div137: [
    "div137",
    "legal2",
    "ul9",
    "termsOfUse2",
    "privacyPolicy2",
    "shipping2",
    "returnPolicy2",
    "warranty2"
  ],
  legal2: ["legal2"],
  ul9: [
    "ul9",
    "termsOfUse2",
    "privacyPolicy2",
    "shipping2",
    "returnPolicy2",
    "warranty2"
  ],
  termsOfUse2: ["termsOfUse2"],
  privacyPolicy2: ["privacyPolicy2"],
  shipping2: ["shipping2"],
  returnPolicy2: ["returnPolicy2"],
  warranty2: ["warranty2"],
  div138: [
    "div138",
    "div139",
    "followUs2",
    "ul10",
    "svg8",
    "svg9",
    "svg10",
    "span3",
    "facebook",
    "span4",
    "instagram",
    "span5",
    "twitter",
    "div140",
    "div141",
    "span6",
    "joinNewsletter",
    "div142",
    "div143",
    "enterYourEmailAddress",
    "divplaceholder",
    "button",
    "shopifySecureBadgeLightShadowpng2"
  ],
  div139: [
    "div139",
    "followUs2",
    "ul10",
    "svg8",
    "svg9",
    "svg10",
    "span3",
    "facebook",
    "span4",
    "instagram",
    "span5",
    "twitter"
  ],
  followUs2: ["followUs2"],
  ul10: ["ul10", "svg8", "svg9", "svg10"],
  svg8: ["svg8"],
  svg9: ["svg9"],
  svg10: ["svg10"],
  span3: ["span3", "facebook"],
  facebook: ["facebook"],
  span4: ["span4", "instagram"],
  instagram: ["instagram"],
  span5: ["span5", "twitter"],
  twitter: ["twitter"],
  div140: [
    "div140",
    "div141",
    "span6",
    "joinNewsletter",
    "div142",
    "div143",
    "enterYourEmailAddress",
    "divplaceholder",
    "button",
    "shopifySecureBadgeLightShadowpng2"
  ],
  div141: [
    "div141",
    "span6",
    "joinNewsletter",
    "div142",
    "div143",
    "enterYourEmailAddress",
    "divplaceholder",
    "button"
  ],
  span6: ["span6", "joinNewsletter"],
  joinNewsletter: ["joinNewsletter"],
  div142: [
    "div142",
    "div143",
    "enterYourEmailAddress",
    "divplaceholder",
    "button"
  ],
  div143: ["div143", "enterYourEmailAddress", "divplaceholder"],
  enterYourEmailAddress: ["enterYourEmailAddress", "divplaceholder"],
  divplaceholder: ["divplaceholder"],
  button: ["button"],
  shopifySecureBadgeLightShadowpng2: ["shopifySecureBadgeLightShadowpng2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  divshopifySectionFooter2: "div";
  div132: "div";
  footerLogopng2: "a";
  div133: "div";
  div134: "div";
  div135: "div";
  company2: "div";
  ul7: "div";
  about2: "div";
  press2: "div";
  howItWorks2: "div";
  contact2: "div";
  brandAmbassador2: "div";
  becomeASeller2: "div";
  philosophy2: "div";
  philanthropy2: "div";
  helpFaQs2: "div";
  div136: "div";
  products2: "div";
  ul8: "div";
  rechargeable2: "div";
  disposable2: "div";
  giftCards2: "div";
  div137: "div";
  legal2: "div";
  ul9: "div";
  termsOfUse2: "div";
  privacyPolicy2: "div";
  shipping2: "div";
  returnPolicy2: "div";
  warranty2: "div";
  div138: "div";
  div139: "div";
  followUs2: "div";
  ul10: "div";
  svg8: "div";
  svg9: "div";
  svg10: "div";
  span3: "div";
  facebook: "div";
  span4: "div";
  instagram: "div";
  span5: "div";
  twitter: "div";
  div140: "div";
  div141: "div";
  span6: "div";
  joinNewsletter: "div";
  div142: "div";
  div143: "div";
  enterYourEmailAddress: "div";
  divplaceholder: "div";
  button: "div";
  shopifySecureBadgeLightShadowpng2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter1440Px__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicFooter1440Px__VariantsArgs;
    args?: PlasmicFooter1440Px__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicFooter1440Px__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicFooter1440Px__ArgsType,
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
          internalArgPropNames: PlasmicFooter1440Px__ArgProps,
          internalVariantPropNames: PlasmicFooter1440Px__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicFooter1440Px__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "divshopifySectionFooter2") {
    func.displayName = "PlasmicFooter1440Px";
  } else {
    func.displayName = `PlasmicFooter1440Px.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter1440Px = Object.assign(
  // Top-level PlasmicFooter1440Px renders the root element
  makeNodeComponent("divshopifySectionFooter2"),
  {
    // Helper components rendering sub-elements
    div132: makeNodeComponent("div132"),
    footerLogopng2: makeNodeComponent("footerLogopng2"),
    div133: makeNodeComponent("div133"),
    div134: makeNodeComponent("div134"),
    div135: makeNodeComponent("div135"),
    company2: makeNodeComponent("company2"),
    ul7: makeNodeComponent("ul7"),
    about2: makeNodeComponent("about2"),
    press2: makeNodeComponent("press2"),
    howItWorks2: makeNodeComponent("howItWorks2"),
    contact2: makeNodeComponent("contact2"),
    brandAmbassador2: makeNodeComponent("brandAmbassador2"),
    becomeASeller2: makeNodeComponent("becomeASeller2"),
    philosophy2: makeNodeComponent("philosophy2"),
    philanthropy2: makeNodeComponent("philanthropy2"),
    helpFaQs2: makeNodeComponent("helpFaQs2"),
    div136: makeNodeComponent("div136"),
    products2: makeNodeComponent("products2"),
    ul8: makeNodeComponent("ul8"),
    rechargeable2: makeNodeComponent("rechargeable2"),
    disposable2: makeNodeComponent("disposable2"),
    giftCards2: makeNodeComponent("giftCards2"),
    div137: makeNodeComponent("div137"),
    legal2: makeNodeComponent("legal2"),
    ul9: makeNodeComponent("ul9"),
    termsOfUse2: makeNodeComponent("termsOfUse2"),
    privacyPolicy2: makeNodeComponent("privacyPolicy2"),
    shipping2: makeNodeComponent("shipping2"),
    returnPolicy2: makeNodeComponent("returnPolicy2"),
    warranty2: makeNodeComponent("warranty2"),
    div138: makeNodeComponent("div138"),
    div139: makeNodeComponent("div139"),
    followUs2: makeNodeComponent("followUs2"),
    ul10: makeNodeComponent("ul10"),
    svg8: makeNodeComponent("svg8"),
    svg9: makeNodeComponent("svg9"),
    svg10: makeNodeComponent("svg10"),
    span3: makeNodeComponent("span3"),
    facebook: makeNodeComponent("facebook"),
    span4: makeNodeComponent("span4"),
    instagram: makeNodeComponent("instagram"),
    span5: makeNodeComponent("span5"),
    twitter: makeNodeComponent("twitter"),
    div140: makeNodeComponent("div140"),
    div141: makeNodeComponent("div141"),
    span6: makeNodeComponent("span6"),
    joinNewsletter: makeNodeComponent("joinNewsletter"),
    div142: makeNodeComponent("div142"),
    div143: makeNodeComponent("div143"),
    enterYourEmailAddress: makeNodeComponent("enterYourEmailAddress"),
    divplaceholder: makeNodeComponent("divplaceholder"),
    button: makeNodeComponent("button"),
    shopifySecureBadgeLightShadowpng2: makeNodeComponent(
      "shopifySecureBadgeLightShadowpng2"
    ),

    // Metadata about props expected for PlasmicFooter1440Px
    internalVariantProps: PlasmicFooter1440Px__VariantProps,
    internalArgProps: PlasmicFooter1440Px__ArgProps
  }
);

export default PlasmicFooter1440Px;
/* prettier-ignore-end */
