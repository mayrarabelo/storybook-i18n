/**
 * Kinds of items available for the dialog system
 */
export type IconTypes = '' | 'success' | 'error' | 'warning' | 'cancel';

/**
 * Props of a action button in the dialog
 */
export interface DialogAction {
  /**
   * Label to go inside the button
   */
  label?: string;
  /**
   * Label to go inside the button i18n
   */
  labelI18n?: string;

  /**
   * Called everytime the button is clicked
   */
  callback: () => void;

  /**
   * If the button is what the UX call a "CTA (Call To Aciton)"
   */
  cta?: boolean;

  /**
   * If the button in a cancel button (dismiss dialog after cliced)
   */
  action_dismiss?: boolean;

  /**
   * If the button is the standard "ok" button (dismiss dialog after cliced)
   */
  action_ok?: boolean;
}

export function emptyDialogSystemProps() {
  return {
    closeBtn: false,
    icon: '',
    title: '',
    paragrahs: [],
    actions: [],
    showSlot: false,
  };
}

export interface ResponseReactivate {
  status: number;
  msg: string;
}
