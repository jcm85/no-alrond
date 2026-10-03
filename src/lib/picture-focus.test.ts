import assert from "node:assert/strict";
import test from "node:test";
import {
  applyInertOutside,
  nextTabIndex,
  pickVisibleHide,
  releaseInert,
  restoreFocusChoice,
  type InertNode,
} from "./picture-focus.ts";

test("after Show picture, focus lands on the visible Hide picture control", () => {
  const hiddenArticle = { label: "Hide picture", visible: false };
  const collapsedHide = { label: "Hide picture", visible: true };
  const chip = { label: "Show picture", visible: true };
  const picked = pickVisibleHide([hiddenArticle, chip, collapsedHide]);
  assert.equal(picked, collapsedHide);

  const onlyHidden = pickVisibleHide([hiddenArticle, chip]);
  assert.equal(onlyHidden, null);
});

test("lightbox Tab cycles inside the dialog and Shift+Tab wraps the other way", () => {
  assert.equal(nextTabIndex(3, 0, false), 1);
  assert.equal(nextTabIndex(3, 2, false), 0);
  assert.equal(nextTabIndex(3, 0, true), 2);
  assert.equal(nextTabIndex(3, 1, true), 0);
  assert.equal(nextTabIndex(2, -1, false), 0);
  assert.equal(nextTabIndex(2, -1, true), 1);
});

test("lightbox close restores the opener, or Hide picture if the opener is gone", () => {
  const opener = { connected: true, name: "picture" };
  const hide = { connected: true, name: "hide" };
  assert.equal(restoreFocusChoice(opener, hide), opener);
  assert.equal(restoreFocusChoice({ connected: false, name: "picture" }, hide), hide);
  assert.equal(restoreFocusChoice(null, null), null);
});

test("focus trap marks everything outside the dialog inert and can release it", () => {
  const page: InertNode = { children: [], inert: false };
  const app: InertNode = { parent: page, children: [], inert: false };
  const card: InertNode = { parent: app, children: [], inert: false };
  const dialog: InertNode = { parent: app, children: [], inert: false };
  const nav: InertNode = { parent: page, children: [], inert: false };
  page.children = [app, nav];
  app.children = [card, dialog];
  const marked = applyInertOutside(dialog);
  assert.equal(card.inert, true);
  assert.equal(nav.inert, true);
  assert.equal(dialog.inert, false);
  assert.equal(app.inert, false);
  assert.equal(page.inert, false);
  assert.equal(marked.length, 2);
  releaseInert(marked);
  assert.equal(card.inert, false);
  assert.equal(nav.inert, false);
});
