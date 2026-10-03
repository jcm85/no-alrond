/** Which Hide picture control should receive focus after Show picture. */
export type FocusCandidate = { label: string; visible: boolean };

export function pickVisibleHide<T extends FocusCandidate>(buttons: T[]): T | null {
  return buttons.find((button) => button.visible && button.label.trim() === "Hide picture") ?? null;
}

/** Next index when Tab or Shift+Tab cycles inside a dialog. */
export function nextTabIndex(count: number, index: number, shift: boolean): number {
  if (count <= 0) return 0;
  const current = index < 0 ? (shift ? 0 : -1) : index;
  if (shift) return (current - 1 + count) % count;
  return (current + 1) % count;
}

export type InertNode = {
  parent?: InertNode;
  children: InertNode[];
  inert: boolean;
};

/** Marks every sibling of the dialog and of its ancestors, up to the root. */
export function applyInertOutside(dialog: InertNode): InertNode[] {
  const marked: InertNode[] = [];
  let node: InertNode | undefined = dialog;
  while (node?.parent) {
    for (const sibling of node.parent.children) {
      if (sibling !== node && !sibling.inert) {
        sibling.inert = true;
        marked.push(sibling);
      }
    }
    node = node.parent;
  }
  return marked;
}

export function releaseInert(nodes: InertNode[]) {
  for (const node of nodes) node.inert = false;
}

/** On lightbox close, return to the control that opened it, or Hide picture. */
export function restoreFocusChoice<T extends { connected: boolean }>(opener: T | null, hide: T | null): T | null {
  if (opener?.connected) return opener;
  if (hide?.connected) return hide;
  return null;
}

const FOCUSABLE = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function focusableIn(dialog: HTMLElement): HTMLElement[] {
  return [...dialog.querySelectorAll<HTMLElement>(FOCUSABLE)].filter((el) => el.getClientRects().length > 0);
}

export function holdBackground(dialog: HTMLElement): () => void {
  const changed: HTMLElement[] = [];
  let node: HTMLElement = dialog;
  while (node.parentElement) {
    const parent: HTMLElement = node.parentElement;
    for (const sibling of parent.children) {
      if (sibling === node || !(sibling instanceof HTMLElement) || sibling.hasAttribute("inert")) continue;
      sibling.setAttribute("inert", "");
      sibling.setAttribute("aria-hidden", "true");
      changed.push(sibling);
    }
    if (parent === document.body) break;
    node = parent;
  }
  return () => {
    for (const el of changed) {
      el.removeAttribute("inert");
      el.removeAttribute("aria-hidden");
    }
  };
}
