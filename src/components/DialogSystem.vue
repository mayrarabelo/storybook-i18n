<template>
  <q-dialog
    ref="dialogRef"
    @hide="onHide"
    class="std-dialog"
    :persistent="props.persistent"
  >
    <q-card
      class="q-dialog-plugin q-pb-md"
      :class="{ 'size-dialog': props.size }"
    >
      <q-card-section
        v-if="props.closeBtn"
        :class="!!props.upper_title ? 'section-upper-btns upper_title' : ''"
      >
        <h1 v-html="props.upper_title" v-if="props.upper_title"></h1>
        <q-btn
          flat
          size="11px"
          round
          class="text-secondary-400"
          icon="close"
          style="position: absolute; top: 20px; right: 20px"
          @click="onMinimize"
        />
      </q-card-section>
      <q-card-section
        v-if="props.icon"
        class="section-dialog align-center q-mt-md"
      >
        <q-icon
          :name="
            props.icon === 'success'
              ? 'check_circle'
              : props.icon === 'error'
              ? 'error'
              : props.icon === 'cancel'
              ? 'cancel'
              : props.icon
          "
          size="64px"
          :class="
            props.icon === 'success'
              ? 'success-icon'
              : props.icon === 'error'
              ? 'warning-icon'
              : props.icon === 'cancel'
              ? 'cancel-icon'
              : ''
          "
          :style="{ color: props.iconColor }"
        />
      </q-card-section>

      <q-card-section
        class="section-dialog title-dialog text-center"
        style="padding-left: 50px; padding-right: 50px"
      >
        <h1 v-if="props.title" v-html="props.title"></h1>
        <h1>{{ t(props.titleI18n) }}</h1>
        <slot name="body" v-if="props.slot"></slot>
        <div
          class="text"
          v-for="paragrah of props.paragrahs"
          v-html="paragrah"
        ></div>

        <div class="text" v-for="paragrah of props.paragrahsI18n">
          {{ t(paragrah) }}
        </div>
      </q-card-section>

      <q-card-section v-if="props.card">
        <div class="card">
          <div
            class="text"
            v-for="paragrahCard of props.paragrahsCard"
            v-html="paragrahCard"
          ></div>
        </div>
      </q-card-section>

      <q-card-section
        style="display: flex; justify-content: center; align-items: center"
        v-if="props.infos.length > 0"
      >
        <div class="results-detail" style="margin-right: 40%">
          <div style="margin-left: 10px; display: flex; flex-direction: column">
            <span class="number-result" v-for="info of props.infos">{{
              info
            }}</span>
          </div>
        </div>
      </q-card-section>

      <q-card-section class="" v-if="$props.htmlCode">
        <div v-html="props.htmlCode"></div>
      </q-card-section>

      <q-card-actions align="center">
        <q-btn
          v-for="action in props.actions"
          color="primary-500"
          :label="
            action.label
              ? action.label
              : action.labelI18n
              ? t(action.labelI18n)
              : ''
          "
          :outline="action.cta ? undefined : true"
          @click="actionClicked(action)"
          unelevated
          align="center"
          class="dialog-system-btn"
        >
        </q-btn>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script setup lang="ts">
import { useDialogPluginComponent } from 'quasar';
import { DialogAction, IconTypes } from './interfaces/DialogSystem';
import { useI18n } from 'vue-i18n';
import {
  QBtn,
  QDialog,
  QCard,
  QCardActions,
  QCardSection,
  QIcon,
} from 'quasar';

/**
 * Props of a standard a basic dialog in the system
 */
export interface DialogSystemProps {
  /**
   * if has that little 'x' on th top left ofthe scree to close the dialog (default: false)
   */
  closeBtn?: boolean;

  /**
   * Title positioned at the upper line, near the closeBtn
   */
  upper_title: string;

  /**
   * which icon to be shown
   */
  icon: IconTypes;

  iconColor?: string;

  /**
   * Title of the dialg
   */
  title: string;

  /**
   * What are the text paragraph the dialog must have
   */
  paragrahs: string[];

  /**
   * The interaction buttons the dialog must have
   */
  actions: DialogAction[];

  infos?: string[];

  persistent: boolean;

  /**
   * A div card with bords
   */
  card?: boolean;
  /**
   * The content inside the card
   */
  paragrahsCard?: string[];
  /**
   * A piece of HTML code. Any HTML code can be added
   */
  htmlCode?: any;
  size?: boolean;
  slot?: boolean;
  cbWhenHide?: () => void;
  titleI18n?: string;
  paragrahsI18n?: string[];
}

const props = withDefaults(defineProps<DialogSystemProps>(), {
  closeBtn: false,
  upper_title: '',
  icon: '',
  title: '',
  paragrahs: () => [],
  htmlCode: () => [],
  infos: () => [],
  actions: () => [],
  persistent: false,
  card: false,
  paragrahsCard: () => [],
  size: false,
  slot: false,
  cbWhenHide: () => [],
  titleI18n: '',
  paragrahsI18n: () => [],
});

const { t } = useI18n();

defineEmits([
  // REQUIRED; need to specify some events that your
  // component will emit through useDialogPluginComponent()
  ...useDialogPluginComponent.emits,
]);

const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
  useDialogPluginComponent();

// function show(this: any) {
//   this.$refs.dialogRef.show();
// }

function onHide() {
  if (props.cbWhenHide) {
    props.cbWhenHide();
  }

  onDialogHide();
}

function onOKClick() {
  onDialogOK();
}

function onMinimize() {
  onDialogCancel();
}

function actionClicked(action: DialogAction) {
  if (action.callback) {
    action.callback();
  }

  if (action.action_dismiss) {
    onMinimize();
  } else if (action.action_ok) {
    onOKClick();
  }
}
</script>

<style lang="scss">
.dialog-system-btn {
  font-weight: 700;
  padding: 12px 16px;
}
.align-center {
  display: flex;
  justify-content: center;
}

.results-detail,
.results-detail-mayor {
  display: flex;
  flex-direction: column;
}

.results-detail::before,
.results-detail-mayor::before {
  content: '';
  background-color: #ea6b34;
  position: absolute;
  width: 1px;
  height: 55%;
}

.results-detail-mayor::before {
  height: 56%;
}

.section-upper-btns {
  height: 16px !important;
}

.section-upper-btns.upper_title {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  align-items: center;

  h1 {
    color: #8392a5;
    font-family: Mulish;
    font-size: 20px;
    font-weight: 700;
    line-height: 32px;
    letter-spacing: 0em;
    text-align: center;
    width: 100%;
    margin-left: 42px;
  }
}

.card {
  border: 1px solid var(--cores-principais-neutral-color-neutral-100, #eeeeee);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.05),
    0px 0px 4px 0px rgba(0, 0, 0, 0.1);
  border-radius: var(--corner-radius-corner-radius-md, 8px);
  margin: 0px 35px;
  padding: 20px 25px;

  div {
    margin-bottom: 4px;
  }
}

.text {
  color: #616161;
  font-size: 1rem;
}

.size-dialog {
  width: 555px !important;

  @media (min-width: 600px) {
    .q-dialog__inner--minimized > div {
      max-width: 1000px !important;
      min-height: 368px;
    }
  }
}
</style>
